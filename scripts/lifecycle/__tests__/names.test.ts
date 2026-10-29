import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdir, mkdtemp, rm, symlink } from "node:fs/promises";
import { tmpdir } from "node:os";

import {
  checkFallbackExpiry,
  checkGlossaryTerms,
  checkRetiredNames,
  fallbackRemovedIn,
  glossaryTerms,
} from "../names";

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

const fullGlossary = glossaryTerms.map((term) => `**${term}**:\nA definition.\n`).join("\n");

beforeAll(async () => {
  work = await mkdtemp(`${tmpdir()}/brain-names-`);
});

afterAll(async () => {
  await rm(work, { recursive: true, force: true });
});

describe("checkRetiredNames, the old glossary name", () => {
  test("a brain-owned file that names CONTEXT.md is a finding with its line", async () => {
    const root = await tree("stray", { "skills/x/SKILL.md": "# X\n\nRead `CONTEXT.md` first.\n" });
    expect(await checkRetiredNames(root)).toEqual([
      {
        kind: "retired-name",
        file: "skills/x/SKILL.md",
        detail: "line 3 names CONTEXT.md or CONTEXT-MAP.md; the glossary is GLOSSARY.md now",
      },
    ]);
  });

  test("CONTEXT-MAP.md is caught too, in any text file brain owns", async () => {
    const root = await tree("map", { ".claude/commands/x.md": "See CONTEXT-MAP.md.\n" });
    const found = await checkRetiredNames(root);
    expect(found.map((f) => f.file)).toEqual([".claude/commands/x.md"]);
  });

  test("a line that also names GLOSSARY describes the rename and passes", async () => {
    const root = await tree("rename-line", {
      "skills/x/SKILL.md": "Move `CONTEXT.md` to `GLOSSARY.md` with git mv.\n",
    });
    expect(await checkRetiredNames(root)).toEqual([]);
  });

  test("history, test folders and vendored files may keep the old name", async () => {
    const root = await tree("exempt", {
      "tasks/done/x/plan.md": "CONTEXT.md\n",
      "tasks/todo.md": "CONTEXT.md\n",
      "docs/research/RES-001-x.md": "CONTEXT.md\n",
      "docs/intent/x.md": "CONTEXT.md\n",
      "CHANGELOG.md": "CONTEXT.md\n",
      "scripts/x/__tests__/x.test.ts": '"CONTEXT.md"\n',
      "skills/vendored/SKILL.md": "CONTEXT.md\n",
      "upstream.lock.json": JSON.stringify({
        files: { "skills/vendored/SKILL.md": { upstream: "u", sha256: "0" } },
        seeds: {},
      }),
    });
    expect(await checkRetiredNames(root)).toEqual([]);
  });

  test("a symlink is never followed, so no file outside the root is read", async () => {
    const outside = await tree("outside", { "notes.md": "CONTEXT.md\n" });
    const root = await tree("linked", { "README.md": "# x\n" });
    await symlink(`${outside}/notes.md`, `${root}/notes.md`);
    expect(await checkRetiredNames(root)).toEqual([]);
  });

  test("in a git repo, a file git ignores is never read, and an untracked one is", async () => {
    const root = await tree("git-mode", {
      ".gitignore": "ignored/\n",
      "ignored/copy/SKILL.md": "CONTEXT.md\n",
      "fresh.md": "CONTEXT.md\n",
    });
    Bun.spawnSync(["git", "init", "-q"], { cwd: root });
    const found = await checkRetiredNames(root);
    expect(found.map((f) => f.file)).toEqual(["fresh.md"]);
  });

  test("node_modules and .git are never read", async () => {
    const root = await tree("skipped", {
      "node_modules/pkg/README.md": "CONTEXT.md\n",
      ".git/info/x.md": "CONTEXT.md\n",
    });
    expect(await checkRetiredNames(root)).toEqual([]);
  });
});

describe("checkRetiredNames, wayfinder", () => {
  test("a brain-owned file that names wayfinder is a finding with its line", async () => {
    const root = await tree("wayfinder-stray", {
      "README.md": "# X\n\nUse `wayfinder` for work too big for one session.\n",
    });
    expect(await checkRetiredNames(root)).toEqual([
      {
        kind: "retired-name",
        file: "README.md",
        detail: "line 3 names wayfinder, which is removed; interview-me keeps the map now",
      },
    ]);
  });

  test("Wayfinder in any case, and wayfinding, are caught too", async () => {
    const root = await tree("wayfinder-case", {
      "skills/setup-brain/issue-tracker-local.md":
        "## Wayfinding operations\n\nWayfinder charts a map.\n",
    });
    const found = await checkRetiredNames(root);
    expect(found.map((f) => f.detail.split(" names")[0])).toEqual(["line 1", "line 3"]);
  });

  test("a line that says wayfinder is removed, retired or absorbed passes", async () => {
    const root = await tree("wayfinder-removal", {
      ".changeset/retire-wayfinder-and-triage.md":
        "**Breaking:** wayfinder is removed. Its job moved into interview-me.\n",
      "spec/CAPABILITY-MAP.md":
        "| workspace | the stateful interview-me that absorbs wayfinder |\n",
      "spec/SPEC-x.md":
        "Removed: `skills/wayfinder/`.\n10. Retirements: `skills/wayfinder` is retired.\n",
    });
    expect(await checkRetiredNames(root)).toEqual([]);
  });

  test("naming interview-me on the line is not enough, and an order to remove is not a removal", async () => {
    const root = await tree("wayfinder-stale", {
      "skills/using-brain/SKILL.md":
        "An idea one session can hold goes to interview-me instead of wayfinder.\n",
      "skills/setup-brain/issue-tracker-github.md":
        "Remove the `wayfinder:map` label at the end.\n",
    });
    const found = await checkRetiredNames(root);
    expect(found.map((f) => f.file)).toEqual([
      "skills/setup-brain/issue-tracker-github.md",
      "skills/using-brain/SKILL.md",
    ]);
  });

  test("history and test folders may keep wayfinder", async () => {
    const root = await tree("wayfinder-exempt", {
      "CHANGELOG.md": "`wayfinder` gets a reworded opening paragraph.\n",
      "tasks/todo.md": "- [ ] T23: wayfinder retired\n- wayfinder\n",
      "docs/research/RES-003-triage-wayfinder.md": "wayfinder\n",
      "docs/intent/x.md": "wayfinder\n",
      "scripts/workspace/__tests__/fixtures/layout-0.8/docs/agents/issue-tracker.md":
        "Used by the wayfinder skill.\n",
    });
    expect(await checkRetiredNames(root)).toEqual([]);
  });
});

describe("checkRetiredNames, triage", () => {
  test("a brain-owned file that names the triage skill is a finding with its line", async () => {
    const root = await tree("triage-stray", {
      "README.md": "# X\n\nUse `triage` for issues the user did not write.\n",
    });
    expect(await checkRetiredNames(root)).toEqual([
      {
        kind: "retired-name",
        file: "README.md",
        detail:
          "line 3 names triage, which is removed; re-seed it from mattpocock/skills if you need it",
      },
    ]);
  });

  test("each way a line names the skill is caught", async () => {
    const root = await tree("triage-forms", {
      "skills/using-brain/SKILL.md": [
        "Read skills/triage/SKILL.md first.",
        '"from": "skills/engineering/triage",',
        "Type /brain:triage to start.",
        "The Triage skill reads this flag.",
        "the triage on-ramp in the tree",
        "├── Issues you did not write? ─→ triage → briefs",
        "| On-ramp | triage | Issues and PRs the user did not write |",
      ].join("\n"),
    });
    const found = await checkRetiredNames(root);
    expect(found.map((f) => f.detail.split(" names")[0])).toEqual([
      "line 1",
      "line 2",
      "line 3",
      "line 4",
      "line 5",
      "line 6",
      "line 7",
    ]);
  });

  test("the plain word passes: a triage checklist, triaged findings, the needs-triage label and triage-labels.md", async () => {
    const root = await tree("triage-plain-word", {
      "skills/debugging-and-error-recovery/SKILL.md": [
        "## The Triage Checklist",
        "4. DIAGNOSE using the triage checklist",
        "No red-capable command, no triage.",
        "### Test Failure Triage",
        "For triaging `npm audit` findings, follow security-and-hardening.",
        "Critical findings are triaged for reachability.",
      ].join("\n"),
      "skills/setup-brain/triage-labels.md":
        "| `needs-triage` | `needs-triage` | Not evaluated |\n",
      "evals/setup/second-run/scaffold.sh":
        'cp "$plugin/skills/setup-brain/triage-labels.md" docs/agents/triage-labels.md\n',
    });
    expect(await checkRetiredNames(root)).toEqual([]);
  });

  test("a line that says triage is removed or retired passes", async () => {
    const root = await tree("triage-removal", {
      "spec/SPEC-x.md": [
        "- `wayfinder` and `triage` are removed.",
        "Removed: `skills/wayfinder/`, `skills/triage/`.",
        "10. Retirements: `skills/triage` is retired.",
      ].join("\n"),
    });
    expect(await checkRetiredNames(root)).toEqual([]);
  });

  test("an order to remove or re-seed the skill is not a removal", async () => {
    const root = await tree("triage-stale", {
      "README.md": "Remove `triage` from the router tree.\n",
      "skills/setup-brain/SKILL.md": "Re-seed the triage skill from mattpocock/skills.\n",
    });
    const found = await checkRetiredNames(root);
    expect(found.map((f) => f.file)).toEqual(["README.md", "skills/setup-brain/SKILL.md"]);
  });

  test("history and test folders may keep triage", async () => {
    const root = await tree("triage-exempt", {
      "CHANGELOG.md": "`triage` gets five documented fixes.\n",
      "tasks/todo.md": "- [ ] T24: triage retired\n- `triage`\n",
      "docs/research/RES-003-triage-wayfinder.md": "`triage`\n",
      "docs/intent/x.md": "Move skills/triage/AGENT-BRIEF.md.\n",
      "scripts/workspace/__tests__/fixtures/layout-0.8/docs/agents/issue-tracker.md":
        "Used by the triage skill.\n",
    });
    expect(await checkRetiredNames(root)).toEqual([]);
  });
});

describe("checkGlossaryTerms", () => {
  test("a GLOSSARY.md with every workspace term passes", async () => {
    const root = await tree("glossary-full", { "GLOSSARY.md": fullGlossary });
    expect(await checkGlossaryTerms(root)).toEqual([]);
  });

  test("a missing term is a finding that names it", async () => {
    const root = await tree("glossary-gap", {
      "GLOSSARY.md": fullGlossary.replace("**Fog**:", "**Mist**:"),
    });
    expect(await checkGlossaryTerms(root)).toEqual([
      { kind: "glossary-term", file: "GLOSSARY.md", detail: "no entry for Fog" },
    ]);
  });

  test("no GLOSSARY.md at all is one finding", async () => {
    const root = await tree("glossary-none", { "README.md": "# x\n" });
    expect(await checkGlossaryTerms(root)).toEqual([
      { kind: "glossary-term", file: "GLOSSARY.md", detail: "brain's glossary is missing" },
    ]);
  });
});

describe("checkFallbackExpiry", () => {
  const fallback = "- A repo with no `GLOSSARY.md` but an old `CONTEXT.md` keeps it there.\n";
  const withFallback = (version: string) => ({
    "package.json": JSON.stringify({ version }),
    "plain-talk/PLAIN-TALK.md": `# Talk\n${fallback}`,
    "skills/setup-brain/domain.md": `# Domain\n${fallback}`,
  });

  test("before the removal release, 0.10.0 included, the fallback may stay", async () => {
    const root = await tree("fallback-early", withFallback("0.10.0"));
    expect(await checkFallbackExpiry(root)).toEqual([]);
  });

  test("from the removal release on, each file that keeps it is a finding", async () => {
    for (const version of [fallbackRemovedIn, "0.11.1", "1.0.0", `${fallbackRemovedIn}-next.0`]) {
      const root = await tree(`fallback-due-${version}`, withFallback(version));
      const found = await checkFallbackExpiry(root);
      expect(found.map((f) => [f.kind, f.file])).toEqual([
        ["expired-fallback", "plain-talk/PLAIN-TALK.md"],
        ["expired-fallback", "skills/setup-brain/domain.md"],
      ]);
    }
  });

  test("once the sentence is gone the check passes at any version", async () => {
    const root = await tree("fallback-gone", {
      "package.json": JSON.stringify({ version: "0.11.0" }),
      "plain-talk/PLAIN-TALK.md": "# Talk\n",
      "skills/setup-brain/domain.md": "# Domain\n",
    });
    expect(await checkFallbackExpiry(root)).toEqual([]);
  });
});

describe("brain itself", () => {
  const shipped = `${import.meta.dir}/../../..`;

  test("names no retired name outside history, and its glossary is complete", async () => {
    expect(await checkRetiredNames(shipped)).toEqual([]);
    expect(await checkGlossaryTerms(shipped)).toEqual([]);
    expect(await checkFallbackExpiry(shipped)).toEqual([]);
  });
});
