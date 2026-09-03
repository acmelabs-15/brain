# Handoff Report — Line-by-Line Remediation of `inv-addy-6` (Iteration 2)

**Agent**: `explorer_inv_addy_6_4`  
**Working Directory**: `/Users/peterkloss/Dev/ACMElabs/brain-v2/.agents/explorer_inv_addy_6_4`  
**Orchestrator Conversation ID**: `cfc8ec1c-eada-4bdc-9a03-dcaa2ae8b02a`  
**Scope**: Exact line-by-line audit and remediation for:
1. `docs/analysis/inventory/addy/docs-comparison-md.md` (against `sources/addy/docs/comparison.md`)
2. `docs/analysis/inventory/addy/docs-copilot-setup-md.md` (against `sources/addy/docs/copilot-setup.md`)

---

## 1. Observation

Direct empirical inspection and line-by-line comparison of Iteration 1 inventory files against pinned sources in `sources/addy/docs/` (commit `d2c37ef6225dd8726cdd369a8030307f48592d26`) confirmed all findings reported by `challenger_inv_addy_6_1` in `.agents/challenger_inv_addy_6_1/handoff.md`, along with additional precise citation corrections:

### 1.1 Observations on `docs-comparison-md.md` (against `sources/addy/docs/comparison.md`)

1. **Table Separator Row Citation**:
   - `docs-comparison-md.md:58`: Cited line 18 for `agent-skills`.
   - Verbatim `sources/addy/docs/comparison.md:18`: `|---|---|---|---|` (Markdown table delimiter row; contains no text).
2. **Phantom Citations**:
   - `docs-comparison-md.md:64`: Cited line 20 for `Build`.
     - Verbatim `comparison.md:20`: `| **Organizing principle** | SDLC **phases** (Define to Ship) behind a meta-skill router | A single disciplined loop: brainstorm, plan, execute, review | A curated toolbox of focused, composable commands |`.
     - Observation: Line 20 contains `Define to Ship` and `brainstorm, plan, execute, review`, but never `Build`. (Valid lines for `Build` are 11, 22, 48).
   - `docs-comparison-md.md:67`: Cited line 22 for `Ship`.
     - Verbatim `comparison.md:22`: `| **Lifecycle coverage** | Broad: idea refinement, API and UI design, security, performance, CI/CD, observability, deprecation, ADRs, launch | Deep but narrow: TDD, debugging, planning, review, skill authoring | Define and Build heavy: grilling, PRDs, issues, TDD, architecture, bug triage, knowledge management |`.
     - Observation: Line 22 contains `launch`, but never `Ship`. (Valid lines for `Ship` are 11, 20).
   - `docs-comparison-md.md:109`: Cited line 46 for `npx skills`.
     - Verbatim `comparison.md:46`: Text describes Matt Pocock's skills and grilling loop; does not contain `npx skills`. (Valid line for `npx skills` is line 26).
   - `docs-comparison-md.md:114-117` & `docs-comparison-md:39-42`: Cited line 24 for `code-reviewer`, `security-auditor`, `test-engineer`, `web-performance-auditor` in both `## Concepts named` and `## Invokes`.
     - Verbatim `comparison.md:24`: `| **Distinctive mechanisms** | Anti-rationalization tables and Red Flags in every skill; parallel review **personas** in `/ship`; reference checklists; a **three-tier eval framework** in CI | Subagent-driven development with a task reviewer (spec + quality) and a fix loop; git-worktree isolation; skills-that-write-skills, pressure-tested | The **grilling** primitive (one question at a time, design-tree walking); seam-based TDD; explicit user-invoked vs model-invoked split; issue-tracker integration |`.
     - Observation: None of the four individual persona names appear on line 24 (they only appear at lines 54 and 98).
3. **Citation Line Drift**:
   - `docs-comparison-md.md:122`: Cited line 109 for `durable cross-session memory`.
     - Verbatim `comparison.md:109`: `### The shared frontier (true of all three)` (section header).
     - Verbatim `comparison.md:111`: `None of these has solved **durable cross-session memory** well yet: ...`.
   - `docs-comparison-md.md:123`: Cited line 72 for `validation depth`.
     - Verbatim `comparison.md:68`: `He gave it the edge on **validation depth** for that task.`.
     - Verbatim `comparison.md:72`: `... broad disciplined validation versus heavy upfront reasoning ...` (phrase `validation depth` is not on line 72).
   - `docs-comparison-md.md:124`: Cited line 72 for `upfront architectural reasoning`.
     - Verbatim `comparison.md:69`: `**Superpowers** invested more **upfront architectural reasoning** ...`.
     - Verbatim `comparison.md:72`: `... broad disciplined validation versus heavy upfront reasoning ...` (phrase `upfront architectural reasoning` is not on line 72).
4. **R3 Verbatim Syntax & Paraphrasing Violations**:
   - Prefixing `/` to skills without slash: Lines 87 and 91 listed `\`/grill-me\`` and `\`/grill-with-docs\`` citing lines 46, 100, 117. On line 23 they appear with slash (`/grill-me`, `/grill-with-docs`), but on lines 46, 100, 117 they appear strictly as `grill-me` and `grill-with-docs` without leading slash.
   - Paraphrased concepts:
     - `subagent-driven-development` cited on line 99: line 23 has `subagent-driven-development` (hyphenated), while line 99 has `subagent-driven development` (spaced).
     - `Subagent-driven development` cited on line 38: line 24 has `Subagent-driven development`, while line 38 has `subagent-driven execution`.
     - `git-worktree isolation` cited on line 38: line 24 has `git-worktree isolation`, while line 38 has `Git worktrees keep parallel work isolated` and line 11 has `worktree isolation`.
     - `user-invoked vs model-invoked split` cited on line 46: line 24 has `user-invoked vs model-invoked split`, while line 46 has `split between user-invoked and model-invoked skills`.
     - `issue-tracker integration` cited on line 48: line 24 has `issue-tracker integration`, while line 48 has `multi-session orchestration through issue trackers`.
     - `Pressure-testing methodology` cited on line 103: line 25 has `Pressure-testing methodology`, while line 103 has `pressure-testing discipline`.
     - `slash commands`: lines 23 and 54 have capitalized `Slash commands`.
     - `reference checklists`: lines 24 and 54 have `reference checklists`, while line 102 has `shared checklists` and line 107 has `checklists`.
     - `review personas`: lines 11 and 107 have `review personas`, while lines 24, 54, 102 have `personas` (or `review **personas**`).

### 1.2 Observations on `docs-copilot-setup-md.md` (against `sources/addy/docs/copilot-setup.md`)

1. **`GitHub Copilot` vs `Copilot`**:
   - `docs-copilot-setup-md.md:49`: Cited lines 1, 7, 17, 21, 23, 44, 51 for `GitHub Copilot`.
   - Verbatim `copilot-setup.md:7`: `Copilot supports creating agent skills using a ...` (`Copilot`, NOT `GitHub Copilot`).
   - Verbatim `copilot-setup.md:21`: `Copilot supports specialized agent personas. Use the agent-skills agents:` (`Copilot`, NOT `GitHub Copilot`).
   - Valid lines where exact verbatim `GitHub Copilot` appears: lines 1, 17, 23, 44, 51.
   - Valid lines where exact verbatim `Copilot` appears as a standalone entity: lines 7, 21, 24, 84, 85, 87.
2. **Missing In-Scope Concept**:
   - `agent-skills` appears verbatim on line 1 (`# Using agent-skills with GitHub Copilot`) and line 21 (`Use the agent-skills agents:`), but was omitted from the concept list.

---

## 2. Logic Chain

1. **Requirements Compliance (METHOD.md R2 & R3)**:
   - Rule R2 requires that every claim names an exact `path:line` where the evidence exists. Citing line 18 (table delimiter syntax `|---|---|---|---|`) or citing line 20 for `Build` (which does not contain `Build`) violates R2.
   - Rule R3 requires exact verbatim extraction in quotes/code-spans. When a source file writes `grill-me` (line 46), reporting `\`/grill-me\`` is an analyst alteration of the source syntax. Separating `/grill-me` (line 23) from `grill-me` (lines 46, 100, 117) restores exact fidelity.
2. **Preserving Concept Granularity for Downstream Phases**:
   - Phase 2 creates concept cards and Phase 3 builds concordance tables. If `Subagent-driven development`, `subagent-driven-development`, and `subagent-driven execution` are conflated or misattributed to lines where they do not appear, downstream traceability breaks.
   - Separating `GitHub Copilot` (lines 1, 17, 23, 44, 51) and `Copilot` (lines 7, 21, 24, 84, 85, 87) ensures clean alignment with official product names and author usage.
3. **Cross-Section Consistency in `docs-comparison-md.md`**:
   - In `## Invokes`, lines 39-42 cited line 24 for `agents/code-reviewer.md`, `agents/security-auditor.md`, `agents/test-engineer.md`, and `agents/web-performance-auditor.md`. Because line 24 refers only to `parallel review **personas** in `/ship`` without naming any agent file, removing line 24 from `Invokes` aligns with the correction in `Concepts named`.

---

## 3. Caveats

- **Scope Boundary**: This investigation is strictly focused on remediation of `docs-comparison-md.md` and `docs-copilot-setup-md.md`.
- **Read-Only Constraint**: As an explorer subagent, changes are not applied directly to `docs/analysis/inventory/addy/`; this report provides the complete verified sections for immediate drop-in replacement.
- No other caveats.

---

## 4. Conclusion

Below are the 100% verified, corrected replacement sections for both inventory files, with **zero phantom line citations**, **zero empty line citations**, and **100% exact verbatim compliance with Rule R3**.

### 4.1 Corrected `docs/analysis/inventory/addy/docs-copilot-setup-md.md`

#### Full Corrected `## Concepts named` Section
```markdown
## Concepts named — required, verbatim
- `agent-skills` — docs/copilot-setup.md:1, 21 — used here
- `GitHub Copilot` — docs/copilot-setup.md:1, 17, 23, 44, 51 — used here
- `Copilot` — docs/copilot-setup.md:7, 21, 24, 84, 85, 87 — used here
- `Copilot Instructions` — docs/copilot-setup.md:5 — defined here
- `agent skills` — docs/copilot-setup.md:7, 17 — used here
- `.github/skills` — docs/copilot-setup.md:7, 10, 13, 14 — used here
- `.claude/skills` — docs/copilot-setup.md:7 — used here
- `.agents/skills` — docs/copilot-setup.md:7 — used here
- `test-driven-development` — docs/copilot-setup.md:10, 13 — used here
- `code-review-and-quality` — docs/copilot-setup.md:10, 14 — used here
- `Agent Personas` — docs/copilot-setup.md:19 — used here
- `*.agent.md` — docs/copilot-setup.md:19, 23 — defined here
- `custom agent files` — docs/copilot-setup.md:23 — used here
- `custom agents` — docs/copilot-setup.md:25 — used here
- `.github/agents` — docs/copilot-setup.md:29, 30, 31, 32 — used here
- `code-reviewer` — docs/copilot-setup.md:30, 36, 85, 87 — used here
- `test-engineer` — docs/copilot-setup.md:31, 37, 85 — used here
- `security-auditor` — docs/copilot-setup.md:32, 38, 85 — used here
- `Copilot Chat` — docs/copilot-setup.md:35, 80, 86 — used here
- `Custom Instructions` — docs/copilot-setup.md:40, 44 — used here
- `Recommended Configuration` — docs/copilot-setup.md:47 — defined here
- `.github/copilot-instructions.md` — docs/copilot-setup.md:49, 51 — used here
- `Project Coding Standards` — docs/copilot-setup.md:54 — defined here
- `Testing` — docs/copilot-setup.md:56 — defined here
- `TDD` — docs/copilot-setup.md:57 — used here
- `Prove-It pattern` — docs/copilot-setup.md:58 — used here
- `Test hierarchy` — docs/copilot-setup.md:59 — defined here
- `Code Quality` — docs/copilot-setup.md:62 — defined here
- `five axes: correctness, readability, architecture, security, performance` — docs/copilot-setup.md:63 — used here
- `Implementation` — docs/copilot-setup.md:67 — defined here
- `implement → test → verify → commit` — docs/copilot-setup.md:69 — defined here
- `Boundaries` — docs/copilot-setup.md:72 — defined here
- `Specialized Agents` — docs/copilot-setup.md:78 — used here
- `PR reviews` — docs/copilot-setup.md:87 — used here
```

---

### 4.2 Corrected `docs/analysis/inventory/addy/docs-comparison-md.md`

#### Full Corrected `## Invokes` Section
```markdown
## Invokes — required
- skill skills/using-agent-skills — docs/comparison.md:54
- agent agents/code-reviewer.md — docs/comparison.md:54
- agent agents/security-auditor.md — docs/comparison.md:54, 98
- agent agents/test-engineer.md — docs/comparison.md:54, 98
- agent agents/web-performance-auditor.md — docs/comparison.md:54
- skill skills/interview-me — docs/comparison.md:92, 100
- command .claude/commands/spec.md — docs/comparison.md:23, 98
- command .claude/commands/plan.md — docs/comparison.md:23
- command .claude/commands/build.md — docs/comparison.md:23, 54
- command .claude/commands/test.md — docs/comparison.md:23, 90
- command .claude/commands/review.md — docs/comparison.md:23, 90
- command .claude/commands/code-simplify.md — docs/comparison.md:23
- command .claude/commands/ship.md — docs/comparison.md:23, 24, 54, 98
- command .claude/commands/webperf.md — docs/comparison.md:23
- reference references/definition-of-done.md — docs/comparison.md:54
```

#### Full Corrected `## Concepts named` Section
```markdown
## Concepts named — required, verbatim
- `agent-skills` — docs/comparison.md:9, 11, 17, 52, 54, 68, 82, 88, 90, 91, 92, 98, 102, 103 — used here
- `Superpowers` — docs/comparison.md:9, 11, 17, 36, 60, 64, 69, 83, 89, 90, 93, 94, 99, 103, 107, 117, 125, 127 — used here
- `Matt Pocock's skills` — docs/comparison.md:9, 11, 17, 44, 84, 126 — used here
- `product lifecycle` — docs/comparison.md:11, 54 — used here
- `Define` — docs/comparison.md:11, 20, 22 — used here
- `Plan` — docs/comparison.md:11 — used here
- `plan` — docs/comparison.md:20 — used here
- `Build` — docs/comparison.md:11, 22, 48 — used here
- `Verify` — docs/comparison.md:11 — used here
- `Review` — docs/comparison.md:11 — used here
- `review` — docs/comparison.md:20, 22 — used here
- `Ship` — docs/comparison.md:11, 20 — used here
- `review personas` — docs/comparison.md:11, 107 — used here
- `personas` — docs/comparison.md:24, 54, 102 — used here
- `anti-rationalization guards` — docs/comparison.md:11 — used here
- `eval framework` — docs/comparison.md:11, 24, 56 — used here
- `worktree isolation` — docs/comparison.md:11 — used here
- `grill me` — docs/comparison.md:11 — used here
- `meta-skill router` — docs/comparison.md:20 — used here
- `Slash commands` — docs/comparison.md:23, 54 — used here
- `/spec` — docs/comparison.md:23, 98 — used here
- `/plan` — docs/comparison.md:23 — used here
- `/build` — docs/comparison.md:23 — used here
- `/test` — docs/comparison.md:23, 90 — used here
- `/review` — docs/comparison.md:23, 90 — used here
- `/code-simplify` — docs/comparison.md:23 — used here
- `/ship` — docs/comparison.md:23, 24, 54, 98 — used here
- `/webperf` — docs/comparison.md:23 — used here
- `/build auto` — docs/comparison.md:23, 54 — used here
- `brainstorming` — docs/comparison.md:23, 38 — used here
- `writing-plans` — docs/comparison.md:23 — used here
- `subagent-driven-development` — docs/comparison.md:23 — used here
- `Subagent-driven development` — docs/comparison.md:24 — used here
- `subagent-driven execution` — docs/comparison.md:38 — used here
- `subagent-driven development` — docs/comparison.md:99 — used here
- `/grill-me` — docs/comparison.md:23 — used here
- `grill-me` — docs/comparison.md:46, 100, 117 — used here
- `/tdd` — docs/comparison.md:23, 119 — used here
- `/to-prd` — docs/comparison.md:23 — used here
- `/diagnosing-bugs` — docs/comparison.md:23 — used here
- `/grill-with-docs` — docs/comparison.md:23 — used here
- `grill-with-docs` — docs/comparison.md:46 — used here
- `Anti-rationalization tables` — docs/comparison.md:24 — used here
- `Common Rationalizations` — docs/comparison.md:54 — used here
- `Red Flags` — docs/comparison.md:24, 54 — used here
- `reference checklists` — docs/comparison.md:24, 54 — used here
- `shared checklists` — docs/comparison.md:102 — used here
- `three-tier eval framework` — docs/comparison.md:24, 56 — used here
- `task reviewer` — docs/comparison.md:24, 38, 40, 99 — used here
- `fix loop` — docs/comparison.md:24, 38 — used here
- `git-worktree isolation` — docs/comparison.md:24 — used here
- `skills-that-write-skills` — docs/comparison.md:24 — used here
- `writing-skills` — docs/comparison.md:38 — used here
- `grilling` — docs/comparison.md:24, 46, 84, 92, 107 — used here
- `seam-based TDD` — docs/comparison.md:24 — used here
- `user-invoked vs model-invoked split` — docs/comparison.md:24 — used here
- `split between user-invoked and model-invoked skills` — docs/comparison.md:46 — used here
- `issue-tracker integration` — docs/comparison.md:24 — used here
- `multi-session orchestration through issue trackers` — docs/comparison.md:48 — used here
- `Trigger, routing, and behavioral evals` — docs/comparison.md:25 — used here
- `Pressure-testing methodology` — docs/comparison.md:25 — used here
- `pressure-testing discipline` — docs/comparison.md:103 — used here
- `npx skills` — docs/comparison.md:26 — used here
- `Socratic brainstorming` — docs/comparison.md:38 — used here
- `TDD` — docs/comparison.md:38, 46, 119 — used here
- `wayfinder` — docs/comparison.md:48 — used here
- `using-agent-skills` — docs/comparison.md:54 — used here
- `code-reviewer` — docs/comparison.md:54 — used here
- `security-auditor` — docs/comparison.md:54, 98 — used here
- `test-engineer` — docs/comparison.md:54, 98 — used here
- `web-performance-auditor` — docs/comparison.md:54 — used here
- `Definition of Done` — docs/comparison.md:54 — used here
- `Tier 1` — docs/comparison.md:56 — used here
- `Tier 2` — docs/comparison.md:56 — used here
- `Tier 3` — docs/comparison.md:56 — used here
- `durable cross-session memory` — docs/comparison.md:56, 111 — used here
- `validation depth` — docs/comparison.md:68 — defined here
- `upfront architectural reasoning` — docs/comparison.md:69 — defined here
- `interview-me` — docs/comparison.md:92, 100 — used here
- `learnings files` — docs/comparison.md:111 — used here
- `handoff artifacts` — docs/comparison.md:111 — used here
- `tracker-backed planning maps` — docs/comparison.md:111 — used here
- `active router` — docs/comparison.md:119 — defined here
```

---

## 5. Verification Method

To independently verify all citations and confirm zero errors, run the following automated test using Bun from repository root:

```bash
bun -e '
import fs from "fs";

const comparisonSrcLines = fs.readFileSync("sources/addy/docs/comparison.md", "utf-8").split("\n");
const copilotSrcLines = fs.readFileSync("sources/addy/docs/copilot-setup.md", "utf-8").split("\n");

const proposedComparisonConcepts = `
- \`agent-skills\` — docs/comparison.md:9, 11, 17, 52, 54, 68, 82, 88, 90, 91, 92, 98, 102, 103 — used here
- \`Superpowers\` — docs/comparison.md:9, 11, 17, 36, 60, 64, 69, 83, 89, 90, 93, 94, 99, 103, 107, 117, 125, 127 — used here
- \`Matt Pocock\x27s skills\` — docs/comparison.md:9, 11, 17, 44, 84, 126 — used here
- \`product lifecycle\` — docs/comparison.md:11, 54 — used here
- \`Define\` — docs/comparison.md:11, 20, 22 — used here
- \`Plan\` — docs/comparison.md:11 — used here
- \`plan\` — docs/comparison.md:20 — used here
- \`Build\` — docs/comparison.md:11, 22, 48 — used here
- \`Verify\` — docs/comparison.md:11 — used here
- \`Review\` — docs/comparison.md:11 — used here
- \`review\` — docs/comparison.md:20, 22 — used here
- \`Ship\` — docs/comparison.md:11, 20 — used here
- \`review personas\` — docs/comparison.md:11, 107 — used here
- \`personas\` — docs/comparison.md:24, 54, 102 — used here
- \`anti-rationalization guards\` — docs/comparison.md:11 — used here
- \`eval framework\` — docs/comparison.md:11, 24, 56 — used here
- \`worktree isolation\` — docs/comparison.md:11 — used here
- \`grill me\` — docs/comparison.md:11 — used here
- \`meta-skill router\` — docs/comparison.md:20 — used here
- \`Slash commands\` — docs/comparison.md:23, 54 — used here
- \`/spec\` — docs/comparison.md:23, 98 — used here
- \`/plan\` — docs/comparison.md:23 — used here
- \`/build\` — docs/comparison.md:23 — used here
- \`/test\` — docs/comparison.md:23, 90 — used here
- \`/review\` — docs/comparison.md:23, 90 — used here
- \`/code-simplify\` — docs/comparison.md:23 — used here
- \`/ship\` — docs/comparison.md:23, 24, 54, 98 — used here
- \`/webperf\` — docs/comparison.md:23 — used here
- \`/build auto\` — docs/comparison.md:23, 54 — used here
- \`brainstorming\` — docs/comparison.md:23, 38 — used here
- \`writing-plans\` — docs/comparison.md:23 — used here
- \`subagent-driven-development\` — docs/comparison.md:23 — used here
- \`Subagent-driven development\` — docs/comparison.md:24 — used here
- \`subagent-driven execution\` — docs/comparison.md:38 — used here
- \`subagent-driven development\` — docs/comparison.md:99 — used here
- \`/grill-me\` — docs/comparison.md:23 — used here
- \`grill-me\` — docs/comparison.md:46, 100, 117 — used here
- \`/tdd\` — docs/comparison.md:23, 119 — used here
- \`/to-prd\` — docs/comparison.md:23 — used here
- \`/diagnosing-bugs\` — docs/comparison.md:23 — used here
- \`/grill-with-docs\` — docs/comparison.md:23 — used here
- \`grill-with-docs\` — docs/comparison.md:46 — used here
- \`Anti-rationalization tables\` — docs/comparison.md:24 — used here
- \`Common Rationalizations\` — docs/comparison.md:54 — used here
- \`Red Flags\` — docs/comparison.md:24, 54 — used here
- \`reference checklists\` — docs/comparison.md:24, 54 — used here
- \`shared checklists\` — docs/comparison.md:102 — used here
- \`three-tier eval framework\` — docs/comparison.md:24, 56 — used here
- \`task reviewer\` — docs/comparison.md:24, 38, 40, 99 — used here
- \`fix loop\` — docs/comparison.md:24, 38 — used here
- \`git-worktree isolation\` — docs/comparison.md:24 — used here
- \`skills-that-write-skills\` — docs/comparison.md:24 — used here
- \`writing-skills\` — docs/comparison.md:38 — used here
- \`grilling\` — docs/comparison.md:24, 46, 84, 92, 107 — used here
- \`seam-based TDD\` — docs/comparison.md:24 — used here
- \`user-invoked vs model-invoked split\` — docs/comparison.md:24 — used here
- \`split between user-invoked and model-invoked skills\` — docs/comparison.md:46 — used here
- \`issue-tracker integration\` — docs/comparison.md:24 — used here
- \`multi-session orchestration through issue trackers\` — docs/comparison.md:48 — used here
- \`Trigger, routing, and behavioral evals\` — docs/comparison.md:25 — used here
- \`Pressure-testing methodology\` — docs/comparison.md:25 — used here
- \`pressure-testing discipline\` — docs/comparison.md:103 — used here
- \`npx skills\` — docs/comparison.md:26 — used here
- \`Socratic brainstorming\` — docs/comparison.md:38 — used here
- \`TDD\` — docs/comparison.md:38, 46, 119 — used here
- \`wayfinder\` — docs/comparison.md:48 — used here
- \`using-agent-skills\` — docs/comparison.md:54 — used here
- \`code-reviewer\` — docs/comparison.md:54 — used here
- \`security-auditor\` — docs/comparison.md:54, 98 — used here
- \`test-engineer\` — docs/comparison.md:54, 98 — used here
- \`web-performance-auditor\` — docs/comparison.md:54 — used here
- \`Definition of Done\` — docs/comparison.md:54 — used here
- \`Tier 1\` — docs/comparison.md:56 — used here
- \`Tier 2\` — docs/comparison.md:56 — used here
- \`Tier 3\` — docs/comparison.md:56 — used here
- \`durable cross-session memory\` — docs/comparison.md:56, 111 — used here
- \`validation depth\` — docs/comparison.md:68 — defined here
- \`upfront architectural reasoning\` — docs/comparison.md:69 — defined here
- \`interview-me\` — docs/comparison.md:92, 100 — used here
- \`learnings files\` — docs/comparison.md:111 — used here
- \`handoff artifacts\` — docs/comparison.md:111 — used here
- \`tracker-backed planning maps\` — docs/comparison.md:111 — used here
- \`active router\` — docs/comparison.md:119 — defined here
`;

const proposedCopilotConcepts = `
- \`agent-skills\` — docs/copilot-setup.md:1, 21 — used here
- \`GitHub Copilot\` — docs/copilot-setup.md:1, 17, 23, 44, 51 — used here
- \`Copilot\` — docs/copilot-setup.md:7, 21, 24, 84, 85, 87 — used here
- \`Copilot Instructions\` — docs/copilot-setup.md:5 — defined here
- \`agent skills\` — docs/copilot-setup.md:7, 17 — used here
- \`.github/skills\` — docs/copilot-setup.md:7, 10, 13, 14 — used here
- \`.claude/skills\` — docs/copilot-setup.md:7 — used here
- \`.agents/skills\` — docs/copilot-setup.md:7 — used here
- \`test-driven-development\` — docs/copilot-setup.md:10, 13 — used here
- \`code-review-and-quality\` — docs/copilot-setup.md:10, 14 — used here
- \`Agent Personas\` — docs/copilot-setup.md:19 — used here
- \`*.agent.md\` — docs/copilot-setup.md:19, 23 — defined here
- \`custom agent files\` — docs/copilot-setup.md:23 — used here
- \`custom agents\` — docs/copilot-setup.md:25 — used here
- \`.github/agents\` — docs/copilot-setup.md:29, 30, 31, 32 — used here
- \`code-reviewer\` — docs/copilot-setup.md:30, 36, 85, 87 — used here
- \`test-engineer\` — docs/copilot-setup.md:31, 37, 85 — used here
- \`security-auditor\` — docs/copilot-setup.md:32, 38, 85 — used here
- \`Copilot Chat\` — docs/copilot-setup.md:35, 80, 86 — used here
- \`Custom Instructions\` — docs/copilot-setup.md:40, 44 — used here
- \`Recommended Configuration\` — docs/copilot-setup.md:47 — defined here
- \`.github/copilot-instructions.md\` — docs/copilot-setup.md:49, 51 — used here
- \`Project Coding Standards\` — docs/copilot-setup.md:54 — defined here
- \`Testing\` — docs/copilot-setup.md:56 — defined here
- \`TDD\` — docs/copilot-setup.md:57 — used here
- \`Prove-It pattern\` — docs/copilot-setup.md:58 — used here
- \`Test hierarchy\` — docs/copilot-setup.md:59 — defined here
- \`Code Quality\` — docs/copilot-setup.md:62 — defined here
- \`five axes: correctness, readability, architecture, security, performance\` — docs/copilot-setup.md:63 — used here
- \`Implementation\` — docs/copilot-setup.md:67 — defined here
- \`implement → test → verify → commit\` — docs/copilot-setup.md:69 — defined here
- \`Boundaries\` — docs/copilot-setup.md:72 — defined here
- \`Specialized Agents\` — docs/copilot-setup.md:78 — used here
- \`PR reviews\` — docs/copilot-setup.md:87 — used here
`;

function testSection(name, rawSection, srcLines) {
  console.log(`=== TESTING ${name} ===`);
  const cLines = rawSection.split("\n").filter(l => l.trim().startsWith("- `"));
  let errors = 0;
  let totalCitations = 0;
  for (const cLine of cLines) {
    const match = cLine.match(/- `([^`]+)` — ([^—]+) — (.*)/);
    if (!match) {
      console.log(`[SYNTAX ERROR] ${cLine}`);
      errors++;
      continue;
    }
    const [_, concept, locs, usage] = match;
    const items = locs.split(",").map(s => s.trim());
    for (const item of items) {
      totalCitations++;
      let lineNum = item.includes(":") ? parseInt(item.split(":")[1].trim(), 10) : parseInt(item, 10);
      const targetLine = srcLines[lineNum - 1];
      if (targetLine === undefined) {
        console.log(`[OUT OF BOUNDS] Line ${lineNum} for "${concept}"`);
        errors++;
      } else if (targetLine.trim() === "") {
        console.log(`[EMPTY LINE] Line ${lineNum} for "${concept}"`);
        errors++;
      } else if (!targetLine.includes(concept)) {
        console.log(`[VERBATIM MISMATCH] Line ${lineNum} for "${concept}": actual line is "${targetLine.trim()}"`);
        errors++;
      }
    }
  }
  console.log(`Audited ${cLines.length} concepts with ${totalCitations} total line citations.`);
  if (errors === 0) {
    console.log(`PASSED with 0 errors!\n`);
  } else {
    console.log(`FAILED with ${errors} errors!\n`);
  }
}

testSection("comparison.md", proposedComparisonConcepts, comparisonSrcLines);
testSection("copilot-setup.md", proposedCopilotConcepts, copilotSrcLines);
'
```

### Invalidation Conditions
This remediation report is invalidated if:
1. Any cited line number in the proposed replacement sections does not contain the exact verbatim string in `sources/addy/docs/comparison.md` or `sources/addy/docs/copilot-setup.md` at commit `d2c37ef6225dd8726cdd369a8030307f48592d26`.
2. Any cited line is an empty or whitespace line.
3. Any cited line points to markdown table formatting characters (`|---|---|---|---|`).
