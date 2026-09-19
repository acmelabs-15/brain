import { describe, expect, test, beforeAll, afterAll } from "bun:test";
import { mkdtemp, rm, mkdir, stat } from "node:fs/promises";
import { tmpdir } from "node:os";

const cli = `${import.meta.dir}/../sync.ts`;
const shaA = "a".repeat(40);
const shaM = "b".repeat(40);
let work: string;

const exists = (p: string) =>
  stat(p).then(
    () => true,
    () => false,
  );

async function pack(name: string, sha: string, files: Record<string, string>): Promise<void> {
  const top = `${work}/src/${name}-${sha}`;
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
    `${work}/src`,
    `${name}-${sha}`,
  ]).exited;
}

async function brainRoot(name: string): Promise<string> {
  const root = `${work}/${name}`;
  await mkdir(root, { recursive: true });
  await Bun.write(
    `${root}/upstream.json`,
    JSON.stringify({
      upstreams: {
        addy: {
          repo: "o/addy",
          sha: shaA,
          take: [
            { from: "skills", to: "skills" },
            { from: "references", to: "references" },
          ],
          license: "LICENSE",
        },
        matt: {
          repo: "o/matt",
          sha: shaM,
          take: [{ from: "eng/dm", to: "skills/domain-modeling" }],
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
  work = await mkdtemp(`${tmpdir()}/brain-cli-`);
  await pack("addy", shaA, {
    "skills/a/SKILL.md": "a\n",
    "references/x.md": "x\n",
    LICENSE: "MIT\n",
  });
  await pack("matt", shaM, { "eng/dm/SKILL.md": "dm\n" });
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("sync cli", () => {
  test("sync writes every upstream and the lock, then check passes", async () => {
    const root = await brainRoot("one");
    const sync = await run(root);
    expect(sync.stderr).toBe("");
    expect(sync.code).toBe(0);
    expect(await Bun.file(`${root}/skills/a/SKILL.md`).text()).toBe("a\n");
    expect(await Bun.file(`${root}/skills/domain-modeling/SKILL.md`).text()).toBe("dm\n");
    expect(await Bun.file(`${root}/licenses/addy.LICENSE`).text()).toBe("MIT\n");
    expect(await exists(`${root}/upstream.lock.json`)).toBe(true);
    const check = await run(root, "--check");
    expect(check.code).toBe(0);
  });

  test("check exits 1 and names each drift after an edit", async () => {
    const root = await brainRoot("drift");
    await run(root);
    await Bun.write(`${root}/skills/a/SKILL.md`, "edited\n");
    const check = await run(root, "--check");
    expect(check.code).toBe(1);
    expect(check.stdout).toContain("changed  skills/a/SKILL.md");
  });

  test("--only syncs one upstream and leaves the other untouched", async () => {
    const root = await brainRoot("only");
    const sync = await run(root, "--only", "matt");
    expect(sync.code).toBe(0);
    expect(await exists(`${root}/skills/domain-modeling/SKILL.md`)).toBe(true);
    expect(await exists(`${root}/skills/a`)).toBe(false);
  });

  test("a collision with a brain-owned path stops before any write", async () => {
    const root = await brainRoot("collide");
    await mkdir(`${root}/skills/a`, { recursive: true });
    await Bun.write(`${root}/skills/a/SKILL.md`, "mine\n");
    const sync = await run(root);
    expect(sync.code).toBe(1);
    expect(sync.stderr).toContain('upstream "addy": target "skills/a" exists and is not vendored');
    expect(await Bun.file(`${root}/skills/a/SKILL.md`).text()).toBe("mine\n");
    expect(await exists(`${root}/references/x.md`)).toBe(false);
    expect(await exists(`${root}/upstream.lock.json`)).toBe(false);
  });

  test("an unknown flag exits 2", async () => {
    const root = await brainRoot("flag");
    const res = await run(root, "--nope");
    expect(res.code).toBe(2);
    expect(res.stderr).toContain("unknown flag --nope");
  });
});
