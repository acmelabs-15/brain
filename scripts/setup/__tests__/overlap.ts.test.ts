import { afterEach, expect, test } from "bun:test";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { overlap } from "../overlap";

const roots: string[] = [];

afterEach(async () => {
  await Promise.all(roots.splice(0).map((root) => rm(root, { recursive: true, force: true })));
});

test("overlap follows the protocol's delegated startup owner without adding unrelated skill duties", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-overlap-start-`);
  roots.push(root);
  const brain = `${root}/plugin`;
  await Bun.write(
    `${brain}/protocol/PROTOCOL.md`,
    "## Session start\n\nRead `skills/using-brain/SKILL.md` and follow Start.\n",
  );
  await Bun.write(
    `${brain}/skills/using-brain/SKILL.md`,
    [
      "# Using brain",
      "",
      "## Start",
      "",
      "Check `git status` and the branch.",
      "",
      "## A separate workflow",
      "",
      "Publish the release.",
      "",
    ].join("\n"),
  );
  const original =
    "# Consumer\n\n## Session start\n\nCheck `git status` and the branch.\n\nPublish the release.\n";
  await Bun.write(`${root}/AGENTS.md`, original);
  const result = await overlap({ root, brain, dryRun: true });
  const section = result.files
    .find((file) => file.path === "AGENTS.md")
    ?.sections.find((entry) => entry.heading === "Session start");
  expect(section?.lines).toContainEqual({
    text: "Check `git status` and the branch.",
    kind: "covered",
    home: "using-brain: Start",
    replacement: "Check `git status` and the branch.",
  });
  expect(section?.lines).toContainEqual({ text: "Publish the release.", kind: "orphan" });
  expect(await Bun.file(`${root}/AGENTS.md`).text()).toBe(original);
});
