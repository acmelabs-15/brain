import { describe, expect, test } from "bun:test";
import { readdir } from "node:fs/promises";

const root = `${import.meta.dir}/../../../evals`;
const computed = new Set(["regex", "tool_used", "tool_order", "file_exists"]);

async function cases(): Promise<string[]> {
  const out: string[] = [];
  for (const group of await readdir(root, { withFileTypes: true })) {
    if (!group.isDirectory() || group.name === "results" || group.name === "mocks") {
      continue;
    }
    for (const c of await readdir(`${root}/${group.name}`, { withFileTypes: true })) {
      if (c.isDirectory()) {
        out.push(`${group.name}/${c.name}`);
      }
    }
  }
  return out.toSorted();
}

function graderType(text: string): string {
  const match = text.match(/^type:\s*(?<type>\w+)/mu);
  return match?.groups?.type ?? "";
}

describe("eval suite", () => {
  test("holds the nine cases the spec names", async () => {
    expect(await cases()).toEqual(
      [
        "lifecycle/build-clean-context",
        "lifecycle/plan-three-questions",
        "lifecycle/review-one-verdict",
        "lifecycle/spec-underspecified",
        "lifecycle/verify-no-loop",
        "plain-talk/choice-as-table",
        "plain-talk/context-first",
        "question/plan-approval",
        "setup/fresh-repo",
        "setup/second-run",
      ].toSorted(),
    );
  });

  test("every case has a prompt and a computed grader beside any llm grader", async () => {
    for (const c of await cases()) {
      const dir = `${root}/${c}`;
      expect(await Bun.file(`${dir}/prompt.md`).exists()).toBe(true);
      const entries = await readdir(`${dir}/graders`);
      const graders = entries.filter((f) => f.endsWith(".md"));
      expect(graders.length).toBeGreaterThan(0);
      const types = await Promise.all(
        graders.map(async (g) => graderType(await Bun.file(`${dir}/graders/${g}`).text())),
      );
      expect(types.some((t) => computed.has(t))).toBe(true);
    }
  });

  test("a case with a scaffold declares it in case.yaml", async () => {
    for (const c of await cases()) {
      const dir = `${root}/${c}`;
      const hasScaffold = await Bun.file(`${dir}/scaffold.sh`).exists();
      if (hasScaffold) {
        expect(await Bun.file(`${dir}/case.yaml`).text()).toContain("scaffold_script: scaffold.sh");
      }
    }
  });
});
