import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm } from "node:fs/promises";
import { tmpdir } from "node:os";

import { checkRefs, findRefs } from "../check-refs";

let work: string;

async function tree(name: string, files: Record<string, string>): Promise<string> {
  const root = `${work}/${name}`;
  for (const [path, body] of Object.entries(files)) {
    await mkdir(`${root}/${path}`.replace(/\/[^/]+$/u, ""), { recursive: true });
    await Bun.write(`${root}/${path}`, body);
  }
  return root;
}

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-refs-`);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("findRefs", () => {
  test("finds the three reference forms with their prefixes", () => {
    const text =
      'Invoke the brain:tdd skill. Call the Skill tool with "domain-modeling". Use agent-skills:spec-driven-development.';
    expect(findRefs(text)).toEqual([
      { prefix: "brain", name: "tdd" },
      { prefix: null, name: "domain-modeling" },
      { prefix: "agent-skills", name: "spec-driven-development" },
    ]);
  });
});

describe("checkRefs", () => {
  test("a clean tree has no findings", async () => {
    const root = await tree("clean", {
      "skills/tdd/SKILL.md": "---\nname: tdd\n---\nbody",
      "skills/setup/SKILL.md":
        '---\nname: setup\ndisable-model-invocation: true\n---\nCall the Skill tool with "tdd".',
      "skills/setup/agents/openai.yaml": "policy:\n  allow_implicit_invocation: false\n",
      ".claude/commands/build.md": "Invoke the brain:tdd skill.",
      "commands/build.toml": 'prompt = """\nInvoke the tdd skill: Skill tool with "tdd".\n"""',
    });
    expect(await checkRefs(root)).toEqual([]);
  });

  test("an unresolved name, an agent-skills prefix, and a flag mismatch are each a finding", async () => {
    const root = await tree("dirty", {
      "skills/tdd/SKILL.md": "---\nname: tdd\ndisable-model-invocation: true\n---\nbody",
      "skills/tdd/agents/openai.yaml": "interface:\n  display_name: t\n",
      "skills/other/SKILL.md": "---\nname: other\n---\nbody",
      "skills/other/agents/openai.yaml": "policy:\n  allow_implicit_invocation: false\n",
      ".claude/commands/build.md": "Invoke the brain:nope skill and agent-skills:tdd.",
    });
    const findings = await checkRefs(root);
    expect(findings.map((f) => f.kind).toSorted()).toEqual([
      "flag-mismatch",
      "flag-mismatch",
      "old-prefix",
      "unresolved",
    ]);
    expect(findings.find((f) => f.kind === "unresolved")?.detail).toContain("nope");
    expect(findings.find((f) => f.kind === "old-prefix")?.detail).toContain("agent-skills:tdd");
  });
});

describe("findRefs, markers", () => {
  test("a block marker such as brain:plain-talk:start is not a skill reference", () => {
    expect(findRefs("<!-- brain:plain-talk:start -->")).toEqual([]);
  });
});
