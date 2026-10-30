import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";

import { checkHookFiles } from "../hooks";

let work: string;

async function tree(name: string, files: Record<string, string>): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(root, { recursive: true });
  for (const [path, body] of Object.entries(files)) {
    await mkdir(`${root}/${path}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(`${root}/${path}`, body);
  }
  return root;
}

const hookFile = JSON.stringify({ hooks: { SessionStart: [] } });

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-hooks-`);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("checkHookFiles, the hook files every host would load", () => {
  test("hook scripts in hooks/ and the Claude-only file in scripts/hooks/ pass", async () => {
    const root = await tree("clean", {
      "hooks/session-start.sh": "#!/bin/bash\n",
      "scripts/hooks/claude-code.json": hookFile,
    });
    expect(await checkHookFiles(root)).toEqual([]);
  });

  test("a hooks/hooks.json, such as an upstream bump adds, is a finding that names it", async () => {
    const root = await tree("upstream-adds-one", {
      "hooks/session-start.sh": "#!/bin/bash\n",
      "hooks/hooks.json": hookFile,
    });
    expect(await checkHookFiles(root)).toEqual([
      {
        kind: "hook-file",
        file: "hooks/hooks.json",
        detail:
          "exists; Codex CLI and Gemini CLI would load it. brain's hooks live in scripts/hooks/claude-code.json, named in .claude-plugin/plugin.json",
      },
    ]);
  });

  test("a hooks.json at the root is a finding that names it", async () => {
    const root = await tree("root-file", { "hooks.json": hookFile });
    expect(await checkHookFiles(root)).toEqual([
      {
        kind: "hook-file",
        file: "hooks.json",
        detail:
          "exists; Codex CLI and Gemini CLI would load it. brain's hooks live in scripts/hooks/claude-code.json, named in .claude-plugin/plugin.json",
      },
    ]);
  });

  test("a link at either path counts, even when its target is gone", async () => {
    const root = await tree("links", { "scripts/hooks/claude-code.json": hookFile });
    await mkdir(`${root}/hooks`, { recursive: true });
    await symlink("../scripts/hooks/claude-code.json", `${root}/hooks/hooks.json`);
    await symlink("missing.json", `${root}/hooks.json`);
    const found = await checkHookFiles(root);
    expect(found.map((finding) => finding.file)).toEqual(["hooks/hooks.json", "hooks.json"]);
  });
});

describe("brain itself", () => {
  const shipped = `${import.meta.dir}/../../..`;

  test("ships no hooks/hooks.json and no root hooks.json", async () => {
    expect(await checkHookFiles(shipped)).toEqual([]);
  });
});
