import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, readdir, realpath, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";

import { checkDoc } from "../schema";

const cli = `${import.meta.dir}/../../brain.ts`;
/** The `workspace.md` that setup-brain writes into a repo. */
const workspaceTemplate = await Bun.file(
  `${import.meta.dir}/../../../skills/setup-brain/workspace.md`,
).text();
let work: string;

const exists = (p: string) =>
  stat(p).then(
    () => true,
    () => false,
  );

/** Today's local date, from the system clock rather than from new-doc's own code. */
const today = Bun.spawnSync(["date", "+%F"]).stdout.toString().trim();

/** A plain folder under the work folder, outside any git repo, holding `files`. */
async function folder(name: string, files: Record<string, string> = {}): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(root, { recursive: true });
  for (const [path, body] of Object.entries(files)) {
    await mkdir(`${root}/${path}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(`${root}/${path}`, body);
  }
  return root;
}

/** A git repo under the work folder, holding `files`. */
async function gitRepo(name: string, files: Record<string, string> = {}): Promise<string> {
  const root = await folder(name, files);
  Bun.spawnSync(["git", "init", "--quiet"], { cwd: root });
  return root;
}

/**
 * Run `brain` in `cwd`. Git stops looking for a repo at the work folder, and claims made
 * outside git land in the work folder's cache, never in the user's. A key set to undefined
 * in `env` is removed.
 */
async function brain(cwd: string, args: string[], env: Record<string, string | undefined> = {}) {
  const merged: Record<string, string | undefined> = {
    ...process.env,
    GIT_CEILING_DIRECTORIES: work,
    XDG_CACHE_HOME: `${work}/cache`,
    ...env,
  };
  const proc = Bun.spawn(["bun", cli, ...args], {
    cwd,
    env: Object.fromEntries(Object.entries(merged).filter(([, value]) => value !== undefined)),
    stdout: "pipe",
    stderr: "pipe",
  });
  const [stdout, stderr] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
  ]);
  return { code: await proc.exited, stdout, stderr };
}

/** The names in a folder, sorted: a claims folder lists its numbers in order. */
async function listed(path: string): Promise<string[]> {
  const names = await readdir(path);
  return names.toSorted();
}

/** The field each problem names: the text before its first colon. */
function fields(problems: string[]): string[] {
  return problems.map((problem) => problem.slice(0, problem.indexOf(":")));
}

beforeAll(async () => {
  // The real path, so git's ceiling matches the path git sees on macOS, where /var is a link.
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-new-doc-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("brain new-doc, one case per type", () => {
  test("IDEA writes the idea from its template into docs/ideas and prints its path", async () => {
    const repo = await gitRepo("idea");
    const res = await brain(repo, ["new-doc", "IDEA", "merge-wayfinder"]);
    expect(res.stderr).toBe("");
    expect(res.code).toBe(0);
    expect(res.stdout).toBe("docs/ideas/IDEA-001-merge-wayfinder.md\n");
    const text = await Bun.file(`${repo}/docs/ideas/IDEA-001-merge-wayfinder.md`).text();
    expect(text).toStartWith("---\nid: IDEA-001\n");
    expect(checkDoc("IDEA", text, "IDEA-001")).toEqual([]);
  });

  test("DEC writes the decision record with its ID and today's date, leaving only the agent's fields", async () => {
    const repo = await gitRepo("dec");
    const res = await brain(repo, ["new-doc", "DEC", "pin-skills"]);
    expect(res.stderr).toBe("");
    expect(res.code).toBe(0);
    expect(res.stdout).toBe("docs/decisions/DEC-001-pin-skills.md\n");
    const text = await Bun.file(`${repo}/docs/decisions/DEC-001-pin-skills.md`).text();
    expect(text).toContain(`\ndecided: ${today} by <name>\n`);
    expect(text).toContain("\n# DEC-001: <title>\n");
    expect(fields(checkDoc("DEC", text, "DEC-001"))).toEqual([
      "kind",
      "adr-test",
      "from",
      "decided",
    ]);
  });

  test("RES writes the research record with its ID and today's date, leaving only the agent's fields", async () => {
    const repo = await gitRepo("res");
    const res = await brain(repo, ["new-doc", "RES", "yaml-dates"]);
    expect(res.stderr).toBe("");
    expect(res.code).toBe(0);
    expect(res.stdout).toBe("docs/research/RES-001-yaml-dates.md\n");
    const text = await Bun.file(`${repo}/docs/research/RES-001-yaml-dates.md`).text();
    expect(text).toContain(`\ndate: ${today}\n`);
    expect(fields(checkDoc("RES", text, "RES-001"))).toEqual(["kind", "from", "finding"]);
  });

  test("SPEC writes a spec folder with spec.md, tasks/plan.md and tasks/todo.md, each naming the spec, and prints each path", async () => {
    const repo = await gitRepo("spec");
    const res = await brain(repo, ["new-doc", "SPEC", "workspace"]);
    expect(res.stderr).toBe("");
    expect(res.code).toBe(0);
    expect(res.stdout).toBe(
      [
        "docs/specs/SPEC-001-workspace/spec.md",
        "docs/specs/SPEC-001-workspace/tasks/plan.md",
        "docs/specs/SPEC-001-workspace/tasks/todo.md",
        "",
      ].join("\n"),
    );
    for (const [type, path] of [
      ["spec", "spec.md"],
      ["plan", "tasks/plan.md"],
      ["todo", "tasks/todo.md"],
    ] as const) {
      const text = await Bun.file(`${repo}/docs/specs/SPEC-001-workspace/${path}`).text();
      expect(text).toStartWith("---\nspec: SPEC-001\n");
      expect(checkDoc(type, text, "SPEC-001")).toEqual([]);
    }
  });

  test("each type counts its own numbers, and each number is a claim folder under brain/ids/<TYPE> in git's common folder", async () => {
    const repo = await gitRepo("counts");
    const first = await brain(repo, ["new-doc", "DEC", "first"]);
    const second = await brain(repo, ["new-doc", "DEC", "second"]);
    const research = await brain(repo, ["new-doc", "RES", "first"]);
    expect([first.stdout, second.stdout, research.stdout]).toEqual([
      "docs/decisions/DEC-001-first.md\n",
      "docs/decisions/DEC-002-second.md\n",
      "docs/research/RES-001-first.md\n",
    ]);
    expect(await listed(`${repo}/.git/brain/ids/DEC`)).toEqual(["001", "002"]);
    expect(await listed(`${repo}/.git/brain/ids/RES`)).toEqual(["001"]);
  });
});

describe("brain new-doc, the next number", () => {
  test("is one above the highest file of its type, a migrated one too, with no claim made before", async () => {
    const repo = await gitRepo("above-files", {
      "docs/decisions/DEC-002-older.md": "old\n",
      "docs/decisions/DEC-007-lint-and-format.md": "---\nid: DEC-007\nmigrated: 0.8\n---\n",
      "docs/research/RES-012-other-type.md": "other type\n",
    });
    const res = await brain(repo, ["new-doc", "DEC", "next"]);
    expect(res.stderr).toBe("");
    expect(res.stdout).toBe("docs/decisions/DEC-008-next.md\n");
  });

  test("is one above the highest spec folder for a SPEC", async () => {
    const repo = await gitRepo("above-specs", {
      "docs/specs/SPEC-003-old/spec.md": "old\n",
    });
    const res = await brain(repo, ["new-doc", "SPEC", "next"]);
    expect(res.stderr).toBe("");
    expect(res.stdout).toStartWith("docs/specs/SPEC-004-next/spec.md\n");
  });

  test("is one above the highest claim, so a claimed number whose file is gone is never reused", async () => {
    const repo = await gitRepo("above-claims", {
      "docs/decisions/DEC-004-kept.md": "kept\n",
    });
    await mkdir(`${repo}/.git/brain/ids/DEC/009`, { recursive: true });
    const res = await brain(repo, ["new-doc", "DEC", "next"]);
    expect(res.stderr).toBe("");
    expect(res.stdout).toBe("docs/decisions/DEC-010-next.md\n");
  });

  test("past 999 there is none: it exits 1, names the type, and writes nothing", async () => {
    const repo = await gitRepo("full", { "docs/decisions/DEC-999-last.md": "last\n" });
    const res = await brain(repo, ["new-doc", "DEC", "one-more"]);
    expect(res.code).toBe(1);
    expect(res.stdout).toBe("");
    expect(res.stderr).toBe("no free DEC number: DEC-999 is the last one\n");
    expect(await readdir(`${repo}/docs/decisions`)).toEqual(["DEC-999-last.md"]);
  });
});

describe("brain new-doc, the workspace config", () => {
  test("setup-brain's workspace.md, unchanged, keeps every folder at its default", async () => {
    const repo = await gitRepo("config-template", {
      "docs/agents/workspace.md": workspaceTemplate,
    });
    const outputs: string[] = [];
    for (const type of ["IDEA", "DEC", "RES", "SPEC"]) {
      const res = await brain(repo, ["new-doc", type, "first"]);
      expect(res.stderr).toBe("");
      outputs.push(res.stdout.split("\n")[0] ?? "");
    }
    expect(outputs).toEqual([
      "docs/ideas/IDEA-001-first.md",
      "docs/decisions/DEC-001-first.md",
      "docs/research/RES-001-first.md",
      "docs/specs/SPEC-001-first/spec.md",
    ]);
  });

  test("a folder set in workspace.md is where new-doc numbers and writes that type", async () => {
    const repo = await gitRepo("config-paths", {
      "docs/agents/workspace.md": workspaceTemplate
        .replace("decisions: docs/decisions", "decisions: records/decisions")
        .replace("specs: docs/specs", "specs: specs/"),
      "records/decisions/DEC-004-kept.md": "kept\n",
      "docs/decisions/DEC-020-not-read.md": "outside the configured folder\n",
    });
    const decision = await brain(repo, ["new-doc", "DEC", "next"]);
    const spec = await brain(repo, ["new-doc", "SPEC", "next"]);
    expect(decision.stderr + spec.stderr).toBe("");
    expect(decision.stdout).toBe("records/decisions/DEC-005-next.md\n");
    expect(spec.stdout).toStartWith("specs/SPEC-001-next/spec.md\n");
    expect(await exists(`${repo}/records/decisions/DEC-005-next.md`)).toBe(true);
    expect(await exists(`${repo}/specs/SPEC-001-next/tasks/todo.md`)).toBe(true);
  });

  test.each([
    ["a paths map without that key", "---\nlayout: 2\npaths:\n  decisions: records\n---\n"],
    ["a key with no value", "---\nlayout: 2\npaths:\n  research:\n---\n"],
    ["no paths map", "---\nlayout: 2\n---\n"],
    ["no frontmatter", "# Workspace\n"],
  ])("%s keeps the default folder", async (_name, config) => {
    const repo = await gitRepo(`config-default-${Bun.hash(config)}`, {
      "docs/agents/workspace.md": config,
    });
    const res = await brain(repo, ["new-doc", "RES", "next"]);
    expect(res.stderr).toBe("");
    expect(res.stdout).toBe("docs/research/RES-001-next.md\n");
  });

  test.each([
    ["frontmatter that is not valid YAML", "---\npaths: [docs\n---\n", "not valid YAML"],
    ["frontmatter that is a list", "---\n- docs\n---\n", "not a map of fields"],
    ["a layout that is not a whole number", "---\nlayout: two\n---\n", "layout"],
    ["paths that is not a map", "---\npaths: docs\n---\n", "paths"],
    ["a folder that is not text", "---\npaths:\n  decisions: 3\n---\n", "paths.decisions"],
    ["an empty folder", '---\npaths:\n  decisions: ""\n---\n', "paths.decisions"],
    ["an absolute folder", "---\npaths:\n  decisions: /tmp/decisions\n---\n", "paths.decisions"],
    [
      "a folder outside the repo",
      "---\npaths:\n  decisions: ../decisions\n---\n",
      "paths.decisions",
    ],
  ])(
    "%s fails: it exits 1, names the file and the problem, and writes and claims nothing",
    async (_name, config, problem) => {
      const repo = await gitRepo(`config-bad-${Bun.hash(config)}`, {
        "docs/agents/workspace.md": config,
      });
      const res = await brain(repo, ["new-doc", "DEC", "next"]);
      expect(res.code).toBe(1);
      expect(res.stdout).toBe("");
      expect(res.stderr).toStartWith("docs/agents/workspace.md: ");
      expect(res.stderr).toContain(problem);
      expect(await exists(`${repo}/docs/decisions`)).toBe(false);
      expect(await exists(`${repo}/.git/brain`)).toBe(false);
    },
  );
});

describe("brain new-doc, in parallel", () => {
  test(
    "twenty processes at once, three runs over, claim unique numbers and skip none",
    async () => {
      const repo = await gitRepo("parallel");
      const processes = 20;
      for (let run = 0; run < 3; run += 1) {
        const results = await Promise.all(
          Array.from({ length: processes }, (_, index) =>
            brain(repo, ["new-doc", "RES", `run-${run}-process-${index}`]),
          ),
        );
        const claimed = results
          .flatMap((res) => [...res.stdout.matchAll(/RES-(?<number>\d{3})-/gu)])
          .map((match) => Number(match.groups?.number))
          .toSorted((a, b) => a - b);
        const failed = results.filter((res) => res.code !== 0).map((res) => res.stderr.trim());
        const expected = Array.from(
          { length: processes },
          (_, index) => run * processes + index + 1,
        );
        // A number may be skipped only where a claim failed. No claim fails here, so a retry
        // that gives up after a lost race shows as a failure, not as a pass with fewer
        // numbers. One line each, so a mismatch prints every number this run claimed.
        expect(`run ${run} claimed ${claimed.join(" ")}; failed: ${failed.join(" | ")}`).toBe(
          `run ${run} claimed ${expected.join(" ")}; failed: `,
        );
      }
      expect(await readdir(`${repo}/docs/research`)).toHaveLength(3 * processes);
    },
    { timeout: 60_000 },
  );
});

describe("brain new-doc, where it runs", () => {
  test("in a git worktree, it claims in the common folder the main tree shares, so the two never take one number", async () => {
    const main = await gitRepo("main-tree", { "README.md": "readme\n" });
    const git = (...args: string[]) => Bun.spawnSync(["git", ...args], { cwd: main }).exitCode;
    expect(git("add", "README.md")).toBe(0);
    expect(
      git("-c", "user.name=t", "-c", "user.email=t@example.com", "commit", "-qm", "init"),
    ).toBe(0);
    const linked = `${work}/linked-tree`;
    expect(git("worktree", "add", "--quiet", linked)).toBe(0);
    const inMain = await brain(main, ["new-doc", "DEC", "from-main"]);
    const inLinked = await brain(linked, ["new-doc", "DEC", "from-linked"]);
    expect([inMain.stdout, inLinked.stdout]).toEqual([
      "docs/decisions/DEC-001-from-main.md\n",
      "docs/decisions/DEC-002-from-linked.md\n",
    ]);
    expect(await exists(`${linked}/docs/decisions/DEC-002-from-linked.md`)).toBe(true);
    expect(await listed(`${main}/.git/brain/ids/DEC`)).toEqual(["001", "002"]);
  });

  test("in a sub-folder of the repo, it writes at the repo's root and prints the path from where it runs", async () => {
    const repo = await gitRepo("sub-folder", {
      "docs/agents/workspace.md": workspaceTemplate.replace(
        "decisions: docs/decisions",
        "decisions: records",
      ),
      "src/index.ts": "",
    });
    const res = await brain(`${repo}/src`, ["new-doc", "DEC", "from-src"]);
    expect(res.stderr).toBe("");
    expect(res.stdout).toBe("../records/DEC-001-from-src.md\n");
    expect(await exists(`${repo}/records/DEC-001-from-src.md`)).toBe(true);
    expect(await exists(`${repo}/.git/brain/ids/DEC/001`)).toBe(true);
  });
});

describe("brain new-doc, outside a git repo", () => {
  test("claims under $XDG_CACHE_HOME/brain, in a folder named for each repo root", async () => {
    const cache = `${work}/cache-xdg`;
    const first = await folder("plain-a");
    const second = await folder("plain-b");
    const env = { XDG_CACHE_HOME: cache };
    const outputs = [
      await brain(first, ["new-doc", "DEC", "one"], env),
      await brain(first, ["new-doc", "DEC", "two"], env),
      await brain(second, ["new-doc", "DEC", "one"], env),
    ];
    expect(outputs.map((res) => res.stderr)).toEqual(["", "", ""]);
    expect(outputs.map((res) => res.stdout)).toEqual([
      "docs/decisions/DEC-001-one.md\n",
      "docs/decisions/DEC-002-two.md\n",
      "docs/decisions/DEC-001-one.md\n",
    ]);
    const repos = await listed(`${cache}/brain`);
    expect(repos.map((name) => name.replace(/-[0-9a-f]+$/u, ""))).toEqual(["plain-a", "plain-b"]);
    const claims = await Promise.all(repos.map((name) => listed(`${cache}/brain/${name}/ids/DEC`)));
    expect(claims).toEqual([["001", "002"], ["001"]]);
  });

  test.each([
    ["unset", undefined],
    ["a relative path, which the XDG spec says to ignore", "relative/cache"],
  ])("with XDG_CACHE_HOME %s, claims under ~/.cache/brain", async (name, xdg) => {
    const home = `${work}/home-${Bun.hash(name)}`;
    const plain = await folder(`plain-home-${Bun.hash(name)}`);
    const res = await brain(plain, ["new-doc", "RES", "one"], { HOME: home, XDG_CACHE_HOME: xdg });
    expect(res.stderr).toBe("");
    expect(res.stdout).toBe("docs/research/RES-001-one.md\n");
    const repos = await readdir(`${home}/.cache/brain`);
    expect(repos).toHaveLength(1);
    expect(await readdir(`${home}/.cache/brain/${repos[0]}/ids/RES`)).toEqual(["001"]);
    // Bun keeps its own transpiler cache under XDG_CACHE_HOME, so only brain's folder counts.
    expect(await exists(`${plain}/relative/cache/brain`)).toBe(false);
  });
});

describe("brain new-doc, bad usage", () => {
  test.each([
    ["no type and no slug", []],
    ["a type and no slug", ["DEC"]],
    ["an argument after the slug", ["DEC", "pin-skills", "extra"]],
  ])("%s prints the usage and exits 2", async (_name, args) => {
    const repo = await gitRepo(`usage-${args.length}`);
    const res = await brain(repo, ["new-doc", ...args]);
    expect(res.code).toBe(2);
    expect(res.stdout).toBe("");
    expect(res.stderr).toContain("usage: brain new-doc <TYPE> <slug>");
  });

  test.each(["FOO", "dec", "ADR", "plan"])(
    "type %s is unknown: it exits 2 with the usage, and writes and claims nothing",
    async (type) => {
      const repo = await gitRepo(`type-${type}`);
      const res = await brain(repo, ["new-doc", type, "pin-skills"]);
      expect(res.code).toBe(2);
      expect(res.stdout).toBe("");
      expect(res.stderr).toContain(`unknown type: ${type}`);
      expect(res.stderr).toContain("usage: brain new-doc <TYPE> <slug>");
      expect(await exists(`${repo}/docs`)).toBe(false);
      expect(await exists(`${repo}/.git/brain`)).toBe(false);
    },
  );

  test.each([
    "Pin-Skills",
    "pin_skills",
    "-pin",
    "pin-",
    "pin--skills",
    "pin.md",
    "docs/pin",
    "pin skills",
    "",
  ])(
    "slug %j is not lowercase kebab-case: it exits 2 with the usage, and writes and claims nothing",
    async (slug) => {
      const repo = await gitRepo(`slug-${Bun.hash(slug)}`);
      const res = await brain(repo, ["new-doc", "DEC", slug]);
      expect(res.code).toBe(2);
      expect(res.stdout).toBe("");
      expect(res.stderr).toContain(`bad slug: ${JSON.stringify(slug)}`);
      expect(res.stderr).toContain("usage: brain new-doc <TYPE> <slug>");
      expect(await exists(`${repo}/docs`)).toBe(false);
      expect(await exists(`${repo}/.git/brain`)).toBe(false);
    },
  );
});
