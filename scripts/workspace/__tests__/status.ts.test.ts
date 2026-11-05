import { afterEach, expect, test } from "bun:test";
import { cp, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

const roots: string[] = [];
const cli = `${import.meta.dir}/../../brain.ts`;

afterEach(async () => {
  await Promise.all(roots.splice(0).map((root) => rm(root, { recursive: true, force: true })));
});

test("status derives its next step and waiting decisions from rows despite a stale note", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-status-rows-`);
  roots.push(root);
  await cp(`${import.meta.dir}/fixtures/idea-mid-define`, root, { recursive: true });
  Bun.spawnSync(["git", "init", "--quiet"], { cwd: root });
  await Bun.write(
    `${root}/docs/STATUS.md`,
    "Next: ask settled row 01.\nWaiting on the user: none.\n",
  );
  const run = Bun.spawnSync(["bun", cli, "status", "--json"], { cwd: root });
  expect(run.exitCode).toBe(0);
  const status = JSON.parse(run.stdout.toString());
  expect(status.report[2]).toContain("IDEA-001#06:");
  expect(status.report[4]).toContain("IDEA-001#08:");
  expect(status).not.toHaveProperty("note");
});

test("an in-progress row with blocked research names the record instead of implying active work", async () => {
  const root = await mkdtemp(`${tmpdir()}/brain-status-blocked-`);
  roots.push(root);
  await cp(`${import.meta.dir}/fixtures/idea-mid-define`, root, { recursive: true });
  Bun.spawnSync(["git", "init", "--quiet"], { cwd: root });
  await Bun.write(
    `${root}/docs/research/RES-003-account-access.md`,
    `---
id: RES-003
status: in-progress
kind: task
from: IDEA-001#05
outcome: blocked
---
# RES-003: Account access

## Question
Can the test account be used?

## Findings
- The account is unavailable. Source: src/account.ts:1, checked 2026-11-05.

## Follow-ups
- Retry when account access is restored.
`,
  );
  const run = Bun.spawnSync(["bun", cli, "status", "--json"], { cwd: root });
  expect(run.exitCode).toBe(0);
  const status = JSON.parse(run.stdout.toString());
  expect(status.report[2]).toContain("blocked: IDEA-001#05");
  expect(status.report[2]).not.toContain("in progress: IDEA-001#05");
  expect(status.red).toContain(
    "docs/research/RES-003-account-access.md: IDEA-001#05 is blocked; read the record for the retry condition",
  );
});
