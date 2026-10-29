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
  test("holds the cases the specs name", async () => {
    expect(await cases()).toEqual(
      [
        "lifecycle/adr-is-dec",
        "lifecycle/build-clean-context",
        "lifecycle/interview-resume",
        "lifecycle/plan-three-questions",
        "lifecycle/review-one-verdict",
        "lifecycle/spec-underspecified",
        "lifecycle/verify-no-loop",
        "plain-talk/choice-as-table",
        "plain-talk/context-first",
        "question/plan-approval",
        "setup/fresh-repo",
        "setup/second-run",
        "wait-what/confused-by-reply",
        "wait-what/error-not-confusion",
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

  test("no frontmatter value holds ---, where the eval loader would end the block", async () => {
    // `claude plugin eval` 2.1.312 ends a case file's frontmatter at the first "---" after
    // the opening line, even inside a value, and then the whole suite fails to load. A
    // regex writes the run as -{3}.
    const broken: string[] = [];
    for (const c of await cases()) {
      const dir = `${root}/${c}`;
      const entries = await readdir(`${dir}/graders`);
      const graders = entries.filter((f) => f.endsWith(".md"));
      for (const file of ["prompt.md", ...graders.map((g) => `graders/${g}`)]) {
        const text = await Bun.file(`${dir}/${file}`).text();
        if (!text.startsWith("---\n")) {
          continue;
        }
        const end = text.indexOf("---", 4);
        if (end === -1 || text[end - 1] !== "\n" || !/^---(?:\n|$)/u.test(text.slice(end))) {
          broken.push(`${c}/${file}`);
        }
      }
    }
    expect(broken).toEqual([]);
  });

  test("the Evals workflow runs scaffolds and grants every gated tool a case asks for", async () => {
    // `claude plugin eval` 2.1.312 gives a case Bash, Write, Edit or WebFetch only when the
    // command line grants it with --allow-tools; the case's allowed_tools alone is not enough.
    const gated = new Set(["Bash", "Write", "Edit", "WebFetch"]);
    const workflow = await Bun.file(`${root}/../.github/workflows/evals.yml`).text();
    const args = workflow.match(/args=\((?<args>[^)]*)\)/u)?.groups?.args ?? "";
    const grant = args.match(/--allow-tools(?<tools>(?: +[A-Z]\w*)+)/u)?.groups?.tools ?? "";
    const granted = new Set(grant.trim().split(/ +/u));
    expect(args).toContain("--scaffold");
    const missing = new Set<string>();
    for (const c of await cases()) {
      const prompt = await Bun.file(`${root}/${c}/prompt.md`).text();
      const asked = prompt.match(/^allowed_tools: \[(?<tools>[^\]]*)\]/mu)?.groups?.tools ?? "";
      for (const tool of asked.split(",").map((t) => t.trim())) {
        if (gated.has(tool) && !granted.has(tool)) {
          missing.add(tool);
        }
      }
    }
    expect([...missing].toSorted()).toEqual([]);
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

  test("a case with a transcript to resume declares it in case.yaml", async () => {
    for (const c of await cases()) {
      const dir = `${root}/${c}`;
      const hasHistory = await Bun.file(`${dir}/history.jsonl`).exists();
      if (hasHistory) {
        expect(await Bun.file(`${dir}/case.yaml`).text()).toContain("history_file: history.jsonl");
      }
    }
  });
});
