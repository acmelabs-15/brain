import { afterAll, beforeAll, describe, expect, setDefaultTimeout, test } from "bun:test";
import { mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

// Each test starts bun processes, which take seconds on a loaded machine (parallel builds run
// several gates at once); the default 5 s is too tight.
setDefaultTimeout(60_000);

const cli = `${import.meta.dir}/../../brain.ts`;
let repo: string;

async function brain(...args: string[]) {
  const proc = Bun.spawn(["bun", cli, ...args], { cwd: repo, stdout: "pipe", stderr: "pipe" });
  const [stdout, stderr] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
  ]);
  return { code: await proc.exited, stdout, stderr };
}

beforeAll(async () => {
  repo = await mkdtemp(`${tmpdir()}/brain-workspace-`);
  Bun.spawnSync(["git", "init", "--quiet"], { cwd: repo });
});

afterAll(async () => {
  await rm(repo, { recursive: true, force: true });
});

describe("brain cli", () => {
  test("no subcommand prints the usage, naming every planned subcommand, and exits 2", async () => {
    const res = await brain();
    expect(res.code).toBe(2);
    expect(res.stdout).toBe("");
    expect(res.stderr).toContain("usage: brain <command>");
    expect(res.stderr).toContain("new-doc");
    expect(res.stderr).toContain("check");
    expect(res.stderr).toContain("status");
  });

  test("an unknown subcommand names it, prints the usage and exits 2", async () => {
    const res = await brain("frobnicate", "--json");
    expect(res.code).toBe(2);
    expect(res.stdout).toBe("");
    expect(res.stderr).toContain("unknown command: frobnicate");
    expect(res.stderr).toContain("usage: brain <command>");
  });

  test("a name an object inherits is still an unknown subcommand", async () => {
    const res = await brain("constructor");
    expect(res.code).toBe(2);
    expect(res.stderr).toContain("unknown command: constructor");
  });
});
