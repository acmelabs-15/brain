import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { cp, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { checkWorkspace } from "../check";
import { defaultPaths } from "../config";

const fixtures = `${import.meta.dir}/fixtures`;
const cli = `${import.meta.dir}/../../brain.ts`;
const idea = "docs/ideas/IDEA-001-sync-notes.md";
let work: string;

function brain(root: string, ...args: string[]) {
  const result = Bun.spawnSync([process.execPath, cli, ...args], { cwd: root });
  return {
    code: result.exitCode,
    stdout: result.stdout.toString(),
    stderr: result.stderr.toString(),
  };
}

async function findings(root: string) {
  const result = await checkWorkspace(root, defaultPaths);
  return result.findings;
}

async function changedMap(name: string, rows: string): Promise<string> {
  const root = `${work}/${name}`;
  await cp(`${fixtures}/idea-mid-define`, root, { recursive: true });
  const text = await Bun.file(`${root}/${idea}`).text();
  const table = `## Map\n| # | Question | Type | Status | Blocked by | Result |\n|---|---|---|---|---|---|\n${rows}\n\n`;
  await Bun.write(
    `${root}/${idea}`,
    text.replace(/## Map\n[\s\S]*?(?=## Not yet specified)/u, table),
  );
  return root;
}

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-map-checks-`);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("required spec files at the CLI boundary", () => {
  test("a non-migrated spec reports its missing plan and todo in check and status", async () => {
    const root = `${work}/missing-plan`;
    await Bun.write(`${root}/docs/agents/workspace.md`, "---\nlayout: 2\n---\n# Workspace\n");
    await Bun.write(
      `${root}/specs/SPEC-001-widget/spec.md`,
      "---\nspec: SPEC-001\nsources: []\n---\n# SPEC-001: Widget\n",
    );
    const result = brain(root, "check");
    expect(result.stderr).toBe("");
    expect(result.code).toBe(1);
    expect(result.stdout).toBe(
      [
        "specs/SPEC-001-widget/tasks/plan.md: file: missing required plan file",
        "specs/SPEC-001-widget/tasks/todo.md: file: missing required todo file",
        "2 findings in 1 workspace file",
        "",
      ].join("\n"),
    );
    const status = JSON.parse(brain(root, "status", "--json").stdout);
    expect(status.red).toEqual([
      "specs/SPEC-001-widget/tasks/plan.md: file: missing required plan file",
      "specs/SPEC-001-widget/tasks/todo.md: file: missing required todo file",
    ]);
  });

  test.each([
    ["spec.md", "spec"],
    ["tasks/plan.md", "plan"],
    ["tasks/todo.md", "todo"],
  ])("reports a missing %s in the configured specs folder", async (file, type) => {
    const root = `${work}/missing-${type}-custom`;
    await Bun.write(
      `${root}/docs/agents/workspace.md`,
      "---\nlayout: 2\npaths:\n  specs: design/specs\n---\n# Workspace\n",
    );
    expect(Bun.spawnSync(["git", "init", "--quiet"], { cwd: root }).exitCode).toBe(0);
    const created = brain(root, "new-doc", "SPEC", "widget", "--title", "Widget");
    expect({ code: created.code, stderr: created.stderr }).toEqual({ code: 0, stderr: "" });
    const where = `design/specs/SPEC-001-widget/${file}`;
    await rm(`${root}/${where}`);
    const result = brain(root, "check");
    expect(result.code).toBe(1);
    expect(result.stdout).toBe(
      `${where}: file: missing required ${type} file\n1 finding in 2 workspace files\n`,
    );
  });

  test("a spec folder with only another file still reports every missing fixed file", async () => {
    const root = `${work}/spec-with-only-notes`;
    await Bun.write(`${root}/docs/agents/workspace.md`, "---\nlayout: 2\n---\n# Workspace\n");
    await Bun.write(`${root}/specs/SPEC-001-widget/notes.md`, "# Notes\n");
    const result = brain(root, "check");
    expect(result.code).toBe(1);
    expect(result.stdout).toBe(
      [
        "specs/SPEC-001-widget/notes.md: name: not SPEC-NNN-<slug>/spec.md, tasks/plan.md or tasks/todo.md",
        "specs/SPEC-001-widget/spec.md: file: missing required spec file",
        "specs/SPEC-001-widget/tasks/plan.md: file: missing required plan file",
        "specs/SPEC-001-widget/tasks/todo.md: file: missing required todo file",
        "4 findings in 1 workspace file",
        "",
      ].join("\n"),
    );
  });

  test("a migrated spec can keep its historical absence of a plan and todo", async () => {
    const root = `${work}/migrated-with-no-plan`;
    await Bun.write(`${root}/docs/agents/workspace.md`, "---\nlayout: 2\n---\n# Workspace\n");
    await Bun.write(
      `${root}/specs/SPEC-001-widget/spec.md`,
      "---\nspec: SPEC-001\nmigrated: 0.8\n---\n# Old widget spec\n",
    );
    const result = brain(root, "check");
    expect(result).toEqual({ code: 0, stdout: "no finding in 1 workspace file\n", stderr: "" });
  });
});

describe("workspace map blocking rows", () => {
  test.each(["open", "in-progress"])(
    "rejects a %s row blocked by a superseded row",
    async (status) => {
      const root = await changedMap(
        `stuck-${status}`,
        [
          "| 01 | Old choice? | interview | superseded by 03 | — | — |",
          `| 02 | Dependent choice? | interview | ${status} | 01 | — |`,
          "| 03 | Replacement choice? | interview | resolved | — | DEC-001 |",
        ].join("\n"),
      );
      expect(await findings(root)).toContainEqual({
        path: idea,
        problem: "row 02: blocked by 01, which is superseded by 03",
      });
    },
  );
});

describe("finished ideas", () => {
  async function finished(name: string, status: string): Promise<string> {
    const root = await changedMap(
      name,
      "| 01 | Which devices? | interview | resolved | — | DEC-001 |",
    );
    const file = `${root}/${idea}`;
    const before = await Bun.file(file).text();
    const text = before
      .replace("status: define", `status: ${status}\nresult: DEC-001`)
      .replace(/<!-- After the user's[\s\S]*?-->/u, "Confirmed by Sam on 2026-11-05.")
      .replace(
        /## Not yet specified\n[\s\S]*?(?=## Out of scope)/u,
        "## Not yet specified\nNone.\n\n",
      );
    await Bun.write(file, text);
    return root;
  }

  test.each(["done", "specced"])(
    "accepts a confirmed %s idea with a settled map",
    async (status) => {
      const root = await finished(`complete-${status}`, status);
      expect(await findings(root)).toEqual([]);
    },
  );

  test.each(["open", "in-progress"])("rejects a finished idea with a %s row", async (status) => {
    const root = await finished(`unfinished-${status}`, "done");
    const file = `${root}/${idea}`;
    const text = await Bun.file(file).text();
    await Bun.write(file, text.replace("| resolved | — | DEC-001 |", `| ${status} | — | — |`));
    expect(await findings(root)).toContainEqual({
      path: idea,
      problem: `status: done, but row 01 is ${status}`,
    });
  });

  test("rejects a finished idea with fog", async () => {
    const root = await finished("fog", "specced");
    const file = `${root}/${idea}`;
    const text = await Bun.file(file).text();
    await Bun.write(file, text.replace("None.", "- How much sync costs."));
    expect(await findings(root)).toContainEqual({
      path: idea,
      problem: "status: specced, but Not yet specified still holds fog",
    });
  });

  test("a commented confirmation does not confirm a finished idea", async () => {
    const root = await finished("unconfirmed", "done");
    const file = `${root}/${idea}`;
    const text = await Bun.file(file).text();
    await Bun.write(
      file,
      text.replace("Confirmed by Sam on 2026-11-05.", "<!-- Confirmed by Sam on 2026-11-05. -->"),
    );
    expect(await findings(root)).toContainEqual({
      path: idea,
      problem: "status: done, but Intent has no confirmation",
    });
  });

  test.each([
    ["self", "| 01 | Old choice? | interview | superseded by 01 | — | — |", "01 -> 01"],
    [
      "cycle",
      [
        "| 01 | Old choice? | interview | superseded by 02 | — | — |",
        "| 02 | Another old choice? | interview | superseded by 01 | — | — |",
      ].join("\n"),
      "01 -> 02 -> 01",
    ],
  ])("rejects a finished idea with a replacement %s", async (name, rows, cycle) => {
    const root = await finished(`replacement-${name}`, "done");
    const file = `${root}/${idea}`;
    const text = await Bun.file(file).text();
    await Bun.write(
      file,
      text.replace("| 01 | Which devices? | interview | resolved | — | DEC-001 |", rows),
    );
    expect(await findings(root)).toContainEqual({
      path: idea,
      problem: `row 01: superseded-by cycle (${cycle})`,
    });
  });

  test("accepts a replacement chain that ends in a resolved row", async () => {
    const root = await finished("replacement-chain", "done");
    const file = `${root}/${idea}`;
    const text = await Bun.file(file).text();
    const rows = [
      "| 01 | Old choice? | interview | superseded by 02 | — | — |",
      "| 02 | Another old choice? | interview | superseded by 03 | — | — |",
      "| 03 | Final choice? | interview | resolved | — | DEC-001 |",
    ].join("\n");
    await Bun.write(
      file,
      text.replace("| 01 | Which devices? | interview | resolved | — | DEC-001 |", rows),
    );
    expect(await findings(root)).toEqual([]);
  });
});

describe("research that resolves a map row", () => {
  const research = "docs/research/RES-001-store-change-feed.md";

  async function result(name: string, status: string, outcome: string): Promise<string> {
    const root = await changedMap(
      name,
      "| 02 | Does the store emit changes? | research | resolved | — | RES-001 |",
    );
    const file = `${root}/${research}`;
    const text = await Bun.file(file).text();
    await Bun.write(file, text.replace("status: resolved", `status: ${status}\n${outcome}`));
    return root;
  }

  test.each(["", "outcome: answered\n"])(
    "accepts resolved research with outcome %s",
    async (outcome) => {
      const root = await result(`answered-${Bun.hash(outcome)}`, "resolved", outcome);
      expect(await findings(root)).toEqual([]);
    },
  );

  test.each([
    ["in-progress", "partial"],
    ["in-progress", "blocked"],
    ["resolved", "partial"],
    ["resolved", "blocked"],
  ])("rejects a row resolved by %s research with outcome %s", async (status, outcome) => {
    const root = await result(`${status}-${outcome}`, status, `outcome: ${outcome}\n`);
    expect(await findings(root)).toContainEqual({
      path: idea,
      problem: `row 02: RES-001 is not answered research (status: ${status}, outcome: ${outcome})`,
    });
  });

  test("rejects a row linked to an unfinished legacy record", async () => {
    const root = await result("unfinished-legacy", "in-progress", "");
    expect(await findings(root)).toContainEqual({
      path: idea,
      problem: "row 02: RES-001 is not answered research (status: in-progress, outcome: absent)",
    });
  });
});

describe("decision resolution at the CLI boundary", () => {
  test("a still-proposed decision cannot resolve a current map row", async () => {
    const root = await changedMap(
      "proposed-decision",
      "| 01 | Which devices? | interview | resolved | — | DEC-001 |",
    );
    const file = `${root}/docs/decisions/DEC-001-phones-and-laptops.md`;
    const before = await Bun.file(file).text();
    const proposed = before
      .replace("status: accepted", "status: proposed")
      .replace(/^decided:.*\n/mu, "");
    await Bun.write(file, proposed);
    const result = brain(root, "check");
    expect(result.stderr).toBe("");
    expect(result.code).toBe(1);
    expect(result.stdout).toBe(
      `${idea}: row 01: DEC-001 is proposed and cannot resolve a map row\n1 finding in 5 workspace files\n`,
    );
    const status = JSON.parse(brain(root, "status", "--json").stdout);
    expect(status.red).toEqual([
      `${idea}: row 01: DEC-001 is proposed and cannot resolve a map row`,
    ]);
    expect(await Bun.file(file).text()).toBe(proposed);
  });

  test.each(["accepted", "superseded by DEC-002"])(
    "keeps a resolved historical row linked to a %s decision valid",
    async (status) => {
      const root = await changedMap(
        `decision-${Bun.hash(status)}`,
        "| 01 | Which devices? | interview | resolved | — | DEC-001 |",
      );
      const file = `${root}/docs/decisions/DEC-001-phones-and-laptops.md`;
      const before = await Bun.file(file).text();
      const text = before.replace("status: accepted", `status: ${status}`);
      await Bun.write(file, text);
      expect(brain(root, "check")).toEqual({
        code: 0,
        stdout: "no finding in 5 workspace files\n",
        stderr: "",
      });
      expect(await Bun.file(file).text()).toBe(text);
    },
  );

  test("a proposed decision can remain open without resolving its row", async () => {
    const root = await changedMap(
      "proposal-stays-open",
      "| 01 | Which devices? | interview | open | — | — |",
    );
    const file = `${root}/docs/decisions/DEC-001-phones-and-laptops.md`;
    const before = await Bun.file(file).text();
    const text = before
      .replace("status: accepted", "status: proposed")
      .replace(/^decided:.*\n/mu, "");
    await Bun.write(file, text);
    expect(brain(root, "check")).toEqual({
      code: 0,
      stdout: "no finding in 5 workspace files\n",
      stderr: "",
    });
  });
});
