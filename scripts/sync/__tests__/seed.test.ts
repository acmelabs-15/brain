import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, stat } from "node:fs/promises";
import { tmpdir } from "node:os";

const cli = `${import.meta.dir}/../sync.ts`;
const shaV1 = "1".repeat(40);
const shaV2 = "2".repeat(40);
let work: string;

const exists = (p: string) =>
  stat(p).then(
    () => true,
    () => false,
  );

async function pack(sha: string, files: Record<string, string>): Promise<void> {
  const top = `${work}/src-${sha}/addy-${sha}`;
  for (const [path, body] of Object.entries(files)) {
    await mkdir(`${top}/${path}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(`${top}/${path}`, body);
  }
  await mkdir(`${work}/tars`, { recursive: true });
  await Bun.spawn([
    "tar",
    "-czf",
    `${work}/tars/${sha}.tar.gz`,
    "-C",
    `${work}/src-${sha}`,
    `addy-${sha}`,
  ]).exited;
}

async function brainRoot(name: string, sha: string): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(root, { recursive: true });
  await Bun.write(
    `${root}/upstream.json`,
    JSON.stringify({
      upstreams: {
        addy: {
          repo: "o/addy",
          sha,
          take: [{ from: "skills", to: "skills" }],
          seed: [{ from: "commands", to: "commands" }],
        },
      },
    }),
  );
  return root;
}

async function run(root: string, ...args: string[]) {
  const proc = Bun.spawn(["bun", "run", cli, "--root", root, ...args], {
    env: { ...process.env, BRAIN_SYNC_TARBALL: `file://${work}/tars/{sha}.tar.gz` },
    stdout: "pipe",
    stderr: "pipe",
  });
  const [stdout, stderr] = await Promise.all([
    new Response(proc.stdout).text(),
    new Response(proc.stderr).text(),
  ]);
  return { code: await proc.exited, stdout, stderr };
}

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-seed-`);
  await pack(shaV1, {
    "skills/a/SKILL.md": "a\n",
    "commands/spec.toml": "v1\n",
    "commands/plan.toml": "same\n",
  });
  await pack(shaV2, {
    "skills/a/SKILL.md": "a\n",
    "commands/spec.toml": "v2\n",
    "commands/plan.toml": "same\n",
  });
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("seed and report", () => {
  test("--seed copies the seeded paths once and records where they came from", async () => {
    const root = await brainRoot("seed", shaV1);
    const seed = await run(root, "--seed", "addy");
    expect(seed.stderr).toBe("");
    expect(seed.code).toBe(0);
    expect(await Bun.file(`${root}/commands/spec.toml`).text()).toBe("v1\n");
    const lock = await Bun.file(`${root}/upstream.lock.json`).json();
    expect(lock.seeds["commands/spec.toml"]).toEqual({ upstream: "addy", seededAt: shaV1 });
    expect(lock.files["commands/spec.toml"]).toBeUndefined();
    expect(await exists(`${root}/skills/a`)).toBe(false);
  });

  test("a second --seed refuses and changes nothing", async () => {
    const root = await brainRoot("twice", shaV1);
    await run(root, "--seed", "addy");
    await Bun.write(`${root}/commands/spec.toml`, "brain edited\n");
    const again = await run(root, "--seed", "addy");
    expect(again.code).toBe(1);
    expect(again.stderr).toContain('upstream "addy": "commands/spec.toml" is already seeded');
    expect(await Bun.file(`${root}/commands/spec.toml`).text()).toBe("brain edited\n");
  });

  test("seeded files are not drift for --check", async () => {
    const root = await brainRoot("check", shaV1);
    await run(root);
    await run(root, "--seed", "addy");
    await Bun.write(`${root}/commands/spec.toml`, "brain edited\n");
    const check = await run(root, "--check");
    expect(check.code).toBe(0);
  });

  test("--report lists each seeded file the upstream changed since its seed, with a diff", async () => {
    const root = await brainRoot("report", shaV1);
    await run(root, "--seed", "addy");
    const pinned = await Bun.file(`${root}/upstream.json`).text();
    await Bun.write(`${root}/upstream.json`, pinned.replace(shaV1, shaV2));
    const report = await run(root, "--report");
    expect(report.code).toBe(0);
    expect(report.stdout).toContain("changed  commands/spec.toml");
    expect(report.stdout).toContain("-v1");
    expect(report.stdout).toContain("+v2");
    expect(report.stdout).not.toContain("commands/plan.toml");
  });

  test("--report with nothing changed says so", async () => {
    const root = await brainRoot("quiet", shaV1);
    await run(root, "--seed", "addy");
    const report = await run(root, "--report");
    expect(report.code).toBe(0);
    expect(report.stdout).toContain("no seeded file changed upstream");
  });
});
