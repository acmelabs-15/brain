import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdtemp, readdir, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { loadConfig } from "../lib/config";
import { fetchTree, tarballUrl } from "../lib/fetch";
import { planUnits } from "../lib/plan";

/** Runs only with SYNC_NETWORK=1: it downloads agent-skills at its pin. */
const networked = process.env.SYNC_NETWORK === "1";
let work: string;

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-network-`);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe.skipIf(!networked)("network smoke", () => {
  test("agent-skills at its pin yields 25 skill directory units", async () => {
    const config = await loadConfig(`${import.meta.dir}/../../../upstream.json`);
    const upstream = config.upstreams["agent-skills"];
    if (upstream === undefined) {
      throw new Error("upstream.json has no agent-skills entry");
    }
    const tree = await fetchTree(tarballUrl(upstream.repo, upstream.sha), work);
    const units = await planUnits("agent-skills", [{ from: "skills", to: "skills" }], tree);
    expect(units.filter((u) => u.kind === "dir")).toHaveLength(25);
    const top = await readdir(tree);
    expect(top).toContain("references");
  });
});
