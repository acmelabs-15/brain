import { afterAll, describe, expect, test } from "bun:test";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { checkWorkspace } from "../../workspace/check";
import { defaultPaths } from "../../workspace/config";
import { interviewCases, scaffoldInterview } from "../interview-cases";

const roots: string[] = [];
const plugin = `${import.meta.dir}/../../..`;

afterAll(async () => {
  for (const root of roots) {
    await rm(root, { recursive: true, force: true });
  }
});

describe("interview evaluation fixtures", () => {
  test("each ordinary fixture passes the real workspace checker before the model runs", async () => {
    for (const fixture of interviewCases.filter((c) => !c.noRepo && c.id !== 3)) {
      const root = await mkdtemp(`${tmpdir()}/interview-case-`);
      roots.push(root);
      await scaffoldInterview(fixture, root, plugin);
      const result = await checkWorkspace(root, defaultPaths);
      expect(result.findings).toEqual([]);
    }
  });

  test("the conversation-only case creates no repository or record files", async () => {
    const fixture = interviewCases.find((c) => c.noRepo);
    if (fixture === undefined) {
      throw new Error("conversation-only fixture is missing");
    }
    const root = await mkdtemp(`${tmpdir()}/interview-conversation-`);
    roots.push(root);
    await scaffoldInterview(fixture, root, plugin);
    expect(await Array.fromAsync(new Bun.Glob("**/*").scan({ cwd: root, dot: true }))).toEqual([]);
  });
});
