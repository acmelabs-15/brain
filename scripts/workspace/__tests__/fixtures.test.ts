/**
 * The shared fixtures: whole repo trees under `fixtures/` that the check, status, hook and
 * migrate tests copy into a temp git repo. Each fixture's README names its purpose and the
 * state brain must report on it. These tests hold every fixture to its contract: a layout-2
 * fixture's workspace files each pass `checkDoc`, and the 0.8 fixture keeps the old layout
 * that the migrate mode takes as input.
 */
import { describe, expect, test } from "bun:test";
import { stat } from "node:fs/promises";

import { configFile, readConfig } from "../config";
import type { Paths } from "../config";
import { checkDoc, readFrontmatter } from "../schema";
import type { DocType } from "../schema";

const fixtures = `${import.meta.dir}/fixtures`;

/** The fixtures in the layout this build defines, and the file types each one must hold. */
const layout2: Record<string, DocType[]> = {
  "idea-mid-define": ["IDEA", "DEC", "RES"],
  "spec-mid-build": ["IDEA", "DEC", "RES", "spec", "plan", "todo"],
  "no-active-work": ["IDEA", "DEC", "RES", "spec", "plan", "todo"],
};
const layout08 = `${fixtures}/layout-0.8`;

const slug = "[a-z0-9]+(?:-[a-z0-9]+)*";

/** The type of each fixed file in a spec folder, by its path inside the folder. */
const specFiles: Record<string, DocType> = {
  "spec.md": "spec",
  "tasks/plan.md": "plan",
  "tasks/todo.md": "todo",
};

/**
 * Each workspace folder, with the name a file in it must have and the type that name gives.
 * The `id` group is the ID the file's name or spec folder gives it.
 */
const names: { folder: keyof Paths; name: RegExp; type: (file: string) => DocType }[] = [
  {
    folder: "ideas",
    name: new RegExp(`^(?<id>IDEA-\\d{3})-${slug}\\.md$`, "u"),
    type: () => "IDEA",
  },
  {
    folder: "decisions",
    name: new RegExp(`^(?<id>DEC-\\d{3})-${slug}\\.md$`, "u"),
    type: () => "DEC",
  },
  {
    folder: "research",
    name: new RegExp(`^(?<id>RES-\\d{3})-${slug}\\.md$`, "u"),
    type: () => "RES",
  },
  {
    folder: "specs",
    name: new RegExp(`^(?<id>SPEC-\\d{3})-${slug}/(?:spec|tasks/plan|tasks/todo)\\.md$`, "u"),
    // The name allows only the three fixed files, so the lookup always finds one.
    type: (file) => specFiles[file.replace(/^[^/]+\//u, "")] ?? "spec",
  },
];

type WorkspaceFile = {
  /** The path from the fixtures folder, as a test name shows it. */
  shown: string;
  full: string;
  /** The type and ID the file's folder and name give it; null when its name gives none. */
  doc: { type: DocType; id: string } | null;
};

async function isFolder(full: string): Promise<boolean> {
  return await stat(full).then(
    (found) => found.isDirectory(),
    () => false,
  );
}

/** The files under `folder`, relative to it; none when the folder is absent. */
async function filesUnder(folder: string): Promise<string[]> {
  if (!(await isFolder(folder))) {
    return [];
  }
  const found = await Array.fromAsync(new Bun.Glob("**").scan({ cwd: folder, dot: true }));
  return found.toSorted();
}

/** Every file in a fixture's workspace folders, read from the folders its config names. */
async function workspaceFiles(fixture: string): Promise<WorkspaceFile[]> {
  const root = `${fixtures}/${fixture}`;
  const { paths } = await readConfig(root);
  const found: WorkspaceFile[] = [];
  for (const { folder, name, type } of names) {
    for (const file of await filesUnder(`${root}/${paths[folder]}`)) {
      const id = name.exec(file)?.groups?.id;
      found.push({
        shown: `${fixture}/${paths[folder]}/${file}`,
        full: `${root}/${paths[folder]}/${file}`,
        doc: id === undefined ? null : { type: type(file), id },
      });
    }
  }
  return found;
}

const files = Object.fromEntries(
  await Promise.all(
    Object.keys(layout2).map(async (fixture) => [fixture, await workspaceFiles(fixture)] as const),
  ),
);

describe.each(Object.keys(layout2))("the %s fixture", (fixture) => {
  const root = `${fixtures}/${fixture}`;

  test("names its purpose and the state brain must report in a README", async () => {
    expect(await Bun.file(`${root}/README.md`).exists()).toBe(true);
  });

  test("records layout 2 in its workspace config", async () => {
    expect(await Bun.file(`${root}/${configFile}`).exists()).toBe(true);
    const config = await readConfig(root);
    expect(config.layout).toBe(2);
  });

  test("holds a workspace file of each type it is for", () => {
    const types = new Set(files[fixture]?.map((file) => file.doc?.type));
    expect([...types].toSorted()).toEqual(layout2[fixture]?.toSorted() ?? []);
  });
});

describe("every workspace file in a layout-2 fixture", () => {
  test.each(Object.values(files).flat())("$shown passes checkDoc", async ({ full, doc }) => {
    expect(doc).not.toBeNull();
    if (doc !== null) {
      expect(checkDoc(doc.type, await Bun.file(full).text(), doc.id)).toEqual([]);
    }
  });
});

describe("the layout-0.8 fixture", () => {
  test("names its purpose and the state brain must report in a README", async () => {
    expect(await Bun.file(`${layout08}/README.md`).exists()).toBe(true);
  });

  test("has no workspace config, as a repo on brain 0.8 has none", async () => {
    expect(await Bun.file(`${layout08}/${configFile}`).exists()).toBe(false);
  });

  test.each([
    ["the spec folder", /^spec\/SPEC-[a-z0-9-]+\.md$/u],
    ["the plan", /^tasks\/plan\.md$/u],
    ["the task list", /^tasks\/todo\.md$/u],
    ["the old glossary", /^CONTEXT\.md$/u],
    ["a numbered ADR", /^docs\/decisions\/\d{4}-[a-z0-9-]+\.md$/u],
    ["a decision record", /^docs\/decisions\/DEC-\d{3}-[a-z0-9-]+\.md$/u],
    ["a research record", /^docs\/research\/RES-\d{3}-[a-z0-9-]+\.md$/u],
    ["an intent doc", /^docs\/intent\/[a-z0-9-]+\.md$/u],
    ["the issue tracker file", /^docs\/agents\/issue-tracker\.md$/u],
  ])("holds %s, which the migrate mode moves or asks about", async (_what, pattern) => {
    const all = await filesUnder(layout08);
    expect(all.filter((file) => pattern.test(file))).not.toEqual([]);
  });

  test("keeps its decision and research records without frontmatter", async () => {
    const all = await filesUnder(layout08);
    const records = all.filter((file) =>
      /^docs\/(?:decisions\/DEC|research\/RES)-\d{3}-/u.test(file),
    );
    const withFrontmatter: string[] = [];
    for (const file of records) {
      if (readFrontmatter(await Bun.file(`${layout08}/${file}`).text()) !== null) {
        withFrontmatter.push(file);
      }
    }
    expect(records).not.toEqual([]);
    expect(withFrontmatter).toEqual([]);
  });
});
