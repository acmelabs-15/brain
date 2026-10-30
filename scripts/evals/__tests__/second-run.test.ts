/**
 * The dry check of the eval case `setup/second-run`, with no model run. It builds the case's
 * scaffold and proves it holds the repo files exactly as setup-brain writes them, so the setup
 * writer reports each one unchanged. The judge grader needs a model; the dry check applies the
 * computed one.
 */
import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { mkdir, mkdtemp, realpath, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { writeSetup } from "../../setup/write";
import { readFrontmatter } from "../../workspace/schema";

// The scaffold starts bash and git, which take seconds on a loaded machine.
setDefaultTimeout(60_000);

const repo = `${import.meta.dir}/../../..`;
const caseDir = `${repo}/evals/setup/second-run`;
let work: string;

/** Build the case's scaffold in a new folder, with the environment the runner gives it. */
async function scaffold(name: string): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(root);
  const res = Bun.spawnSync(["bash", `${caseDir}/scaffold.sh`], {
    cwd: root,
    env: { PATH: process.env.PATH ?? "", HOME: `${work}/home`, TMPDIR: tmpdir(), TERM: "dumb" },
  });
  expect(res.stderr.toString()).toBe("");
  expect(res.exitCode).toBe(0);
  return root;
}

beforeAll(async () => {
  work = await realpath(await mkdtemp(`${tmpdir()}/brain-second-run-`));
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("setup/second-run, the scaffold", () => {
  test("holds every repo file as setup-brain writes it, so the writer changes nothing", async () => {
    const root = await scaffold("again");
    const changes = await writeSetup({
      brain: repo,
      root,
      layout: "single",
      dryRun: true,
      codexHome: null,
    });
    expect(changes.map((change) => `${change.action} ${change.path}`)).toEqual([
      "unchanged docs/agents/domain.md",
      "unchanged docs/agents/workspace.md",
      "unchanged docs/STATUS.md",
    ]);
  });
});

describe("setup/second-run, the graders", () => {
  test("the computed grader asks for the script, and the judge names every repo file", async () => {
    const script = readFrontmatter(await Bun.file(`${caseDir}/graders/script-ran.md`).text());
    expect(script !== null && "data" in script ? script.data : {}).toEqual({
      type: "tool_used",
      tool: "Bash",
      input_match: "scripts/setup/write\\.ts",
    });
    const judge = await Bun.file(`${caseDir}/graders/reports-unchanged.md`).text();
    for (const path of ["docs/agents/domain.md", "docs/agents/workspace.md", "docs/STATUS.md"]) {
      expect(judge).toContain(path);
    }
  });
});
