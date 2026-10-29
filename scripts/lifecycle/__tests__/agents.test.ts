import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { checkAgentList } from "../agents";

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

const agent = "---\nname: x\ndescription: An agent.\n---\nDo the work.\n";

function manifest(agents?: unknown): string {
  return JSON.stringify(agents === undefined ? { name: "brain" } : { name: "brain", agents });
}

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-agents-`);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("checkAgentList, the Claude manifest's agent list", () => {
  test("a list that names every agents/*.md file passes", async () => {
    const root = await tree("full", {
      ".claude-plugin/plugin.json": manifest(["./agents/code-reviewer.md", "./agents/tester.md"]),
      "agents/code-reviewer.md": agent,
      "agents/tester.md": agent,
    });
    expect(await checkAgentList(root)).toEqual([]);
  });

  test("an agents/*.md file the list misses is a finding that names it", async () => {
    const root = await tree("upstream-adds-one", {
      ".claude-plugin/plugin.json": manifest(["./agents/code-reviewer.md"]),
      "agents/code-reviewer.md": agent,
      "agents/new-upstream.md": agent,
    });
    expect(await checkAgentList(root)).toEqual([
      {
        kind: "agent-list",
        file: ".claude-plugin/plugin.json",
        detail: "agents/new-upstream.md is not in the agents list",
      },
    ]);
  });

  test("a manifest with no agents list misses every agent", async () => {
    const root = await tree("no-list", {
      ".claude-plugin/plugin.json": manifest(),
      "agents/a.md": agent,
      "agents/b.md": agent,
    });
    const found = await checkAgentList(root);
    expect(found.map((f) => f.detail)).toEqual([
      "agents/a.md is not in the agents list",
      "agents/b.md is not in the agents list",
    ]);
  });

  test("a listed path that is not an existing .md file is a finding", async () => {
    const root = await tree("stale-entry", {
      ".claude-plugin/plugin.json": manifest([
        "./agents/a.md",
        "./agents/removed-upstream.md",
        "./agents/",
      ]),
      "agents/a.md": agent,
    });
    expect(await checkAgentList(root)).toEqual([
      {
        kind: "agent-list",
        file: ".claude-plugin/plugin.json",
        detail: "lists ./agents/removed-upstream.md, which is not an existing .md file",
      },
      {
        kind: "agent-list",
        file: ".claude-plugin/plugin.json",
        detail: "lists ./agents/, which is not an existing .md file",
      },
    ]);
  });

  test("a listed agent outside agents/, such as the researcher, passes when it exists", async () => {
    const root = await tree("outside", {
      ".claude-plugin/plugin.json": manifest(["./agents/a.md", "./claude/agents/researcher.md"]),
      "agents/a.md": agent,
      "claude/agents/researcher.md": agent,
    });
    expect(await checkAgentList(root)).toEqual([]);
  });

  test("a single path, not in a list, is read as a list of one", async () => {
    const root = await tree("single", {
      ".claude-plugin/plugin.json": manifest("./agents/a.md"),
      "agents/a.md": agent,
    });
    expect(await checkAgentList(root)).toEqual([]);
  });

  test("a listed path that does not start with ./ is a finding", async () => {
    const root = await tree("no-dot-slash", {
      ".claude-plugin/plugin.json": manifest(["agents/a.md"]),
      "agents/a.md": agent,
    });
    expect(await checkAgentList(root)).toEqual([
      {
        kind: "agent-list",
        file: ".claude-plugin/plugin.json",
        detail: "lists agents/a.md; every path starts with ./",
      },
    ]);
  });

  test("only top-level .md files in agents/ need a list entry", async () => {
    const root = await tree("not-agents", {
      ".claude-plugin/plugin.json": manifest(["./agents/a.md"]),
      "agents/a.md": agent,
      "agents/notes.txt": "not an agent\n",
      "agents/drafts/b.md": agent,
    });
    expect(await checkAgentList(root)).toEqual([]);
  });
});

describe("brain itself", () => {
  const shipped = `${import.meta.dir}/../../..`;

  test("its Claude manifest lists every agent, and every listed agent exists", async () => {
    expect(await checkAgentList(shipped)).toEqual([]);
  });
});
