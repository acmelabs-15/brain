# Technical Exploration & Inventory Extraction Report: inv-addy-15 (Part 2)

**Explorer**: Explorer 2 Gen 3  
**Target Files**:
1. `sources/addy/skills/spec-driven-development/SKILL.md` (12,163 bytes)
2. `sources/addy/skills/constraint-driven-development/references/floor-guard.md` (5,851 bytes)  
**Methodology Rules**: METHOD.md R1–R6, §4 checklist strictly applied.

---

## Executive Summary

Both source files have been read in full from line 1 to end without sampling.
- `skills/spec-driven-development/SKILL.md` defines the upstream `addy:Define` phase specification gate, establishing a 4-phase sequential gated workflow (`Specify → Plan → Tasks → Implement`) preceded by `Phase 0: Scope Check` (which decomposes multi-capability features into a reviewable `Capability Map`). All 5 referenced skills exist in `sources/addy/skills/`. The skill passes `validate-skills.js` and `validate-artifact-paths.js`. A notable documentation drift exists: `SKILL.md` omits mentioning the canonical root filename `SPEC.md` (requiring only saving to "a file in the repository"), whereas slash commands (`.claude/commands/spec.md`, `commands/spec.toml`), the adoption guide, and evals explicitly mandate `SPEC.md`. Furthermore, `README.md:236` and positive eval prompts describe the output artifact as a "PRD", a term completely absent from `SKILL.md`.
- `skills/constraint-driven-development/references/floor-guard.md` provides a diff-scoped reference implementation (`floor-guard.mjs`) for enforcing the quality "floor" from `CONSTRAINTS.md`. Testing the inline script revealed that while basic execution behaves as documented (`0` clean, `1` violation, `2` execution error), the script contains two severe implementation bugs: (1) `+++ /dev/null` on deleted files is sliced by 6 characters to `v/null`, failing the regex match for test files and allowing deleted test files to pass undetected with exit 0 (violating line 10's claim that deleted test files are caught); (2) deleted constraint bullets in `CONSTRAINTS.md` are never flagged because the script only checks modified lines matched by `addedConstraints.find()`. Additionally, `.constraintsignore` is documented on line 98 but completely unimplemented in code.

---

## Section 1: Draft Inventory Entries

### 1. `docs/analysis/inventory/addy/skills-spec-driven-development-skill-md.md`

```markdown
---
package: addy
path: skills/spec-driven-development/SKILL.md
type: skill
bytes: 12163
unit: inv-addy-15
---

# skills/spec-driven-development/SKILL.md

## Purpose — required, verbatim
> "Write a structured specification before writing any code. The spec is the shared source of truth between you and the human engineer — it defines what we're building, why, and how we'll know it's done. Code without a spec is guessing." — skills/spec-driven-development/SKILL.md:10

## Design intent — required
Establishes the upfront specification gate for the Addy engineering lifecycle, preventing premature coding and ungrounded architectural guessing. It introduces a rigorous 4-phase sequential workflow (`Specify → Plan → Tasks → Implement`), optionally preceded by `Phase 0: Scope Check` which decomposes multi-capability initiatives into a reviewable `Capability Map` with stable module IDs, acyclic dependency directions, and defined build order before per-module specification begins. It forces active surfacing of assumptions, reframes vague requests into verifiable success criteria, structures specifications across six mandatory core areas (Objective, Commands, Project Structure, Code Style, Testing Strategy, Boundaries), and establishes a living document contract so specifications evolve with changing decisions rather than becoming obsolete.

## Phase — required
addy:Define

## Inputs — required
- User request / vision for project, feature, or change — skills/spec-driven-development/SKILL.md:14, 69
- Answers to clarifying questions from the human engineer — skills/spec-driven-development/SKILL.md:69
- Existing codebase context (e.g. Prisma schema, existing directory structure, commands) — skills/spec-driven-development/SKILL.md:77, 88-104
- Product briefs or initiative descriptions (e.g. portal-brief.md, billing-brief.md) — evals/cases/spec-driven-development.json:44, 58
- Downstream methodology references: `api-and-interface-design` (skills/spec-driven-development/SKILL.md:61), `planning-and-task-breakdown` (skills/spec-driven-development/SKILL.md:174, 176, 190), `incremental-implementation` (skills/spec-driven-development/SKILL.md:202), `test-driven-development` (skills/spec-driven-development/SKILL.md:202), `context-engineering` (skills/spec-driven-development/SKILL.md:202)

## Outputs — required
- `Capability Map: [Initiative Name]` table at project root when Phase 0 triggers — skills/spec-driven-development/SKILL.md:46-57, 65
- Spec document saved to a file in repository: `SPEC.md` at project root (or `SPEC-[module-id].md` when decomposed, or `docs/SPEC.md`) — skills/spec-driven-development/SKILL.md:65, 243; .claude/commands/spec.md:17; commands/spec.toml:16; scripts/validate-artifact-paths.js:36-37
- Implementation plan saved to `tasks/plan.md` (via Phase 2: Plan) — skills/spec-driven-development/SKILL.md:176
- Task list saved to `tasks/todo.md` or external tracker (via Phase 3: Tasks) — skills/spec-driven-development/SKILL.md:176, 193-198
- Surfaced assumptions list and reframed success criteria — skills/spec-driven-development/SKILL.md:74-80, 155-160
- Human approvals across each gated phase boundary — skills/spec-driven-development/SKILL.md:27-32, 63, 178, 240

## Invokes — required
- skill `api-and-interface-design` — skills/spec-driven-development/SKILL.md:61
- skill `planning-and-task-breakdown` — skills/spec-driven-development/SKILL.md:174, 176, 190
- skill `incremental-implementation` — skills/spec-driven-development/SKILL.md:202
- skill `test-driven-development` — skills/spec-driven-development/SKILL.md:202
- skill `context-engineering` — skills/spec-driven-development/SKILL.md:202

## Invoked by — required
- command `.claude/commands/spec.md` — .claude/commands/spec.md:5
- command `commands/spec.toml` — commands/spec.toml:4
- doc `README.md` — README.md:184, 196, 236, 355
- doc `CLAUDE.md` — CLAUDE.md:21
- doc `AGENTS.md` — AGENTS.md:26, 40
- skill `skills/interview-me/SKILL.md` — skills/interview-me/SKILL.md:14, 183, 225
- skill `skills/using-agent-skills/SKILL.md` — skills/using-agent-skills/SKILL.md:21, 137, 139, 148, 172
- doc `docs/adoption-guide.md` — docs/adoption-guide.md:39
- doc `docs/getting-started.md` — docs/getting-started.md:50, 61, 111, 161
- doc `docs/antigravity-setup.md` — docs/antigravity-setup.md:52, 90
- doc `docs/codex-setup.md` — docs/codex-setup.md:25, 33
- doc `docs/commandcode-setup.md` — docs/commandcode-setup.md:20, 41, 42, 52
- doc `docs/cursor-setup.md` — docs/cursor-setup.md:155
- doc `docs/gemini-cli-setup.md` — docs/gemini-cli-setup.md:76
- doc `docs/opencode-setup.md` — docs/opencode-setup.md:33, 64, 68, 92, 116, 160, 168, 209
- eval `evals/cases/spec-driven-development.json` — evals/cases/spec-driven-development.json:2, 47, 61
- eval `evals/cases/browser-testing-with-devtools.json` — evals/cases/browser-testing-with-devtools.json:21
- script `scripts/validate-artifact-paths.js` — scripts/validate-artifact-paths.js:48
- script `scripts/validate-artifact-paths-test.js` — scripts/validate-artifact-paths-test.js:48, 97
- external-doc `sources/addy-external/spec-driven-development.md` — sources/addy-external/spec-driven-development.md:1, 5, 8

## Concepts named — required, verbatim
- `spec-driven-development` — skills/spec-driven-development/SKILL.md:2, 6 — defined here
- `spec` — skills/spec-driven-development/SKILL.md:10, 204 — defined here
- `The Gated Workflow` — skills/spec-driven-development/SKILL.md:22, 26-32 — defined here
- `Phase 0: Scope Check` — skills/spec-driven-development/SKILL.md:24, 34 — defined here
- `Phase 1: Specify` — skills/spec-driven-development/SKILL.md:27, 67 — defined here
- `Phase 2: Plan` — skills/spec-driven-development/SKILL.md:27, 164 — defined here
- `Phase 3: Tasks` — skills/spec-driven-development/SKILL.md:27, 180 — defined here
- `Phase 4: Implement` — skills/spec-driven-development/SKILL.md:27, 200 — defined here
- `Capability map` — skills/spec-driven-development/SKILL.md:3, 44, 47, 244 — defined here
- `Module table` — skills/spec-driven-development/SKILL.md:44, 49 — defined here
- `Build order` — skills/spec-driven-development/SKILL.md:44, 56, 63, 244 — defined here
- `Module id` — skills/spec-driven-development/SKILL.md:49, 59, 244, 245 — defined here
- `Dependency direction` — skills/spec-driven-development/SKILL.md:60, 63, 244 — defined here
- `api-and-interface-design` — skills/spec-driven-development/SKILL.md:61 — used here
- `Assumptions list` — skills/spec-driven-development/SKILL.md:70, 74 — defined here
- `Six core areas` — skills/spec-driven-development/SKILL.md:84, 239 — defined here
- `Objective` — skills/spec-driven-development/SKILL.md:86, 120 — defined here
- `Commands` — skills/spec-driven-development/SKILL.md:88, 126 — defined here
- `Project Structure` — skills/spec-driven-development/SKILL.md:96, 129 — defined here
- `Code Style` — skills/spec-driven-development/SKILL.md:106, 132 — defined here
- `Testing Strategy` — skills/spec-driven-development/SKILL.md:108, 135 — defined here
- `Boundaries` — skills/spec-driven-development/SKILL.md:110, 138, 242 — defined here
- `Three-tier boundary system` — skills/spec-driven-development/SKILL.md:110-114, 139-141 — defined here
- `Spec template` — skills/spec-driven-development/SKILL.md:115-148 — defined here
- `Tech Stack` — skills/spec-driven-development/SKILL.md:123 — defined here
- `Success Criteria` — skills/spec-driven-development/SKILL.md:143, 150, 155, 241 — defined here
- `Open Questions` — skills/spec-driven-development/SKILL.md:146 — defined here
- `Reframe instructions as success criteria` — skills/spec-driven-development/SKILL.md:150, 155 — defined here
- `planning-and-task-breakdown` — skills/spec-driven-development/SKILL.md:174, 176, 190 — used here
- `Dependency-graph mapping` — skills/spec-driven-development/SKILL.md:174 — used here
- `Vertical-slicing` — skills/spec-driven-development/SKILL.md:174 — used here
- `tasks/plan.md` — skills/spec-driven-development/SKILL.md:176 — used here
- `tasks/todo.md` — skills/spec-driven-development/SKILL.md:176 — used here
- `Task template` — skills/spec-driven-development/SKILL.md:192-198 — defined here
- `skills/incremental-implementation/SKILL.md` — skills/spec-driven-development/SKILL.md:202 — used here
- `skills/test-driven-development/SKILL.md` — skills/spec-driven-development/SKILL.md:202 — used here
- `skills/context-engineering/SKILL.md` — skills/spec-driven-development/SKILL.md:202 — used here
- `Living document` — skills/spec-driven-development/SKILL.md:204, 206, 220 — defined here
- `Common Rationalizations` — skills/spec-driven-development/SKILL.md:214 — defined here
- `Red Flags` — skills/spec-driven-development/SKILL.md:225 — defined here
- `Verification checklist` — skills/spec-driven-development/SKILL.md:236-246 — defined here

## Structure
- `# Spec-Driven Development` (line 6)
- `## Overview` (line 8)
- `## When to Use` (line 12)
- `## The Gated Workflow` (line 22)
  - `### Phase 0: Scope Check` (line 34)
  - `### Phase 1: Specify` (line 67)
  - `### Phase 2: Plan` (line 164)
  - `### Phase 3: Tasks` (line 180)
  - `### Phase 4: Implement` (line 200)
- `## Keeping the Spec Alive` (line 204)
- `## Common Rationalizations` (line 213)
- `## Red Flags` (line 225)
- `## Verification` (line 235)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` — skills/spec-driven-development/SKILL.md:243 vs .claude/commands/spec.md:17, commands/spec.toml:16, docs/adoption-guide.md:39, and evals/cases/spec-driven-development.json:45 — The skill body specifies generic saving "to a file in the repository" (and `SPEC-<module-id>.md` for decomposed initiatives), omitting the canonical root filename `SPEC.md` that is explicitly mandated by `/spec` commands, adoption guide, and evals.
- `doc-drift` — skills/spec-driven-development/SKILL.md:10 vs README.md:236 and evals/cases/spec-driven-development.json:10 — `README.md` and positive eval triggers refer to the output artifact as a "PRD" ("Write a PRD covering objectives..."), whereas `SKILL.md` exclusively specifies a "structured specification" / "spec" and never uses the acronym "PRD".
- `doc-drift` — skills/spec-driven-development/SKILL.md:202 — Uses full relative path syntax `skills/incremental-implementation/SKILL.md` rather than the standardized skill name format used in other skills and in skill-lint patterns.

## Observations
- Introduces `Phase 0: Scope Check` to explicitly resolve the monolithic specification trap, decomposing large requests into modular capability maps before specifying.
- Connects cleanly to the whole engineering chain: invokes `planning-and-task-breakdown` for Plan/Tasks phases, and invokes `incremental-implementation`, `test-driven-development`, and `context-engineering` for Implement.

## Context cost
File alone: 12,163 bytes (~3,040 tokens). Total transitive invocation graph (`api-and-interface-design` 14,884 B + `planning-and-task-breakdown` 10,564 B + `incremental-implementation` 9,507 B + `test-driven-development` 16,483 B + `context-engineering` 11,070 B) = 74,671 bytes (~18,668 tokens).
```

---

### 2. `docs/analysis/inventory/addy/skills-constraint-driven-development-references-floor-guard-md.md`

```markdown
---
package: addy
path: skills/constraint-driven-development/references/floor-guard.md
type: reference
bytes: 5851
unit: inv-addy-15
---

# skills/constraint-driven-development/references/floor-guard.md

## Purpose — required, verbatim
> "Every numbered dimension in `CONSTRAINTS.md` maps to a de facto tool (Step 4). The **floor** does not: it is a diff-scoped check for the five moves in Step 6, and without a shipped reference every agent invents its own, so two runs (or a Python repo and a Go one) produce two different guards. That is the exact non-determinism this skill exists to remove." — skills/constraint-driven-development/references/floor-guard.md:3

## Design intent — required
Provides a deterministic, language-adaptable reference implementation (`floor-guard.mjs`) for enforcing the quality "floor" defined in `CONSTRAINTS.md`. While explicit quality dimensions (like coverage, linting, security) map to existing CLI tools, the baseline floor prevents sneaky or evasive agent moves that lower the project's quality bar (silencing checks via suppressions, skipping tests, removing assertions, lowering thresholds, or adding unapproved exceptions). By formalizing an exact diff-scoped inspection contract with rigorous exit codes (`0` clean, `1` violation, `2` execution failure), it ensures that floor enforcement remains uniform and prevents agents from inventing ad-hoc, leaky validators.

## Phase — required
addy:Define

## Inputs — required
- Working tree git diff against merge base (including added, removed, and untracked files) — skills/constraint-driven-development/references/floor-guard.md:9, 37-43
- `--base <ref>` CLI argument (defaults to `origin/main`) — skills/constraint-driven-development/references/floor-guard.md:20, 23-26
- `CONSTRAINTS.md` file in repository root — skills/constraint-driven-development/references/floor-guard.md:3, 10, 19, 67, 77-85
- Optional `.constraintsignore` glob ignore file — skills/constraint-driven-development/references/floor-guard.md:98

## Outputs — required
- CLI stdout/stderr report with rule violation flags: `[silenced-checker]`, `[unfinished-work]`, `[test-made-easier]`, `[new-exception]`, `[assertion-removed]`, `[threshold-lowered]` — skills/constraint-driven-development/references/floor-guard.md:54, 88-92
- Deterministic exit codes: `0` (clean), `1` (floor violation), `2` (no merge base / execution failure) — skills/constraint-driven-development/references/floor-guard.md:11, 35, 88, 92

## Invokes — required
- external CLI `git` (`git merge-base`, `git diff`, `git ls-files`) — skills/constraint-driven-development/references/floor-guard.md:28-43

## Invoked by — required
- skill `skills/constraint-driven-development/SKILL.md` — skills/constraint-driven-development/SKILL.md:216, 258
- command `.claude/commands/constraints.md` — .claude/commands/constraints.md:31 (via `/constraints guard` sub-command)
- command `commands/constraints.toml` — commands/constraints.toml:30 (via `/constraints guard` sub-command)

## Concepts named — required, verbatim
- `floor-guard` — skills/constraint-driven-development/references/floor-guard.md:1, 19 — defined here
- `CONSTRAINTS.md floor` — skills/constraint-driven-development/references/floor-guard.md:3, 19 — used here
- `Five Step 6 moves` — skills/constraint-driven-development/references/floor-guard.md:3, 10 — used here
- `silenced-checker` — skills/constraint-driven-development/references/floor-guard.md:57, 64 — defined here
- `unfinished-work` — skills/constraint-driven-development/references/floor-guard.md:59, 65 — defined here
- `test-made-easier` — skills/constraint-driven-development/references/floor-guard.md:61, 66 — defined here
- `new-exception` — skills/constraint-driven-development/references/floor-guard.md:67 — defined here
- `assertion-removed` — skills/constraint-driven-development/references/floor-guard.md:73 — defined here
- `threshold-lowered` — skills/constraint-driven-development/references/floor-guard.md:84 — defined here
- `diff-scoped check` — skills/constraint-driven-development/references/floor-guard.md:3, 9, 19 — defined here
- `Merge base` — skills/constraint-driven-development/references/floor-guard.md:9, 34 — defined here
- `Three-exit-code contract` — skills/constraint-driven-development/references/floor-guard.md:11 — defined here
- `Redaction` — skills/constraint-driven-development/references/floor-guard.md:12 — used here
- `Tightening is silent, loosening is loud` — skills/constraint-driven-development/references/floor-guard.md:13 — defined here
- `floor-guard.mjs` — skills/constraint-driven-development/references/floor-guard.md:19, 20 — defined here
- `.constraintsignore` — skills/constraint-driven-development/references/floor-guard.md:98 — defined here
- `Escalation Path level 3` — skills/constraint-driven-development/references/floor-guard.md:99 — used here

## Structure
- `# Floor guard: reference implementation` (line 1)
- `## Contract` (line 7)
- `## Reference (Node, ~stack-agnostic patterns)` (line 15)
- `## Adapting it` (line 95)

## Scripts — required if type is script or the skill ships scripts
- path: inlined script `floor-guard.mjs` within `skills/constraint-driven-development/references/floor-guard.md:18-93`, language: JavaScript (Node.js/ESM, executable under Bun), lines: 76
- documented invocation: `node floor-guard.mjs [--base <ref>]   (default base: origin/main)` — skills/constraint-driven-development/references/floor-guard.md:20
- executed: yes
- actual command run:
  1. Against default branch in `sources/addy`: `node floor-guard.mjs --base HEAD`
     stdout: `floor-guard: clean`, exit code: 0
  2. Against non-existent base in `sources/addy`: `node floor-guard.mjs --base non-existent-ref`
     stderr: `fatal: Not a valid object name non-existent-ref\nfloor-guard: no merge base against non-existent-ref`, exit code: 2
  3. Under Bun: `bun run floor-guard.mjs --base HEAD`
     stdout: `floor-guard: clean`, exit code: 0
  4. In test repository with injected floor violations: `node floor-guard.mjs --base main`
     stderr:
     ```
     floor-guard: 6 floor violation(s):
       [new-exception] CONSTRAINTS.md: | W01 | temp exception |
       [silenced-checker] app.js: // @ts-ignore
       [unfinished-work] app.js: throw new Error("Not implemented");
       [test-made-easier] app.test.js: test.skip('works', () => {
       [assertion-removed] app.test.js: expect(1).toBe(1);
       [threshold-lowered] CONSTRAINTS.md: Coverage: 80%  ->  Coverage: 70%

     Each is a move that lowers the bar. Fix the code, or route it through a tracked exception.
     ```
     exit code: 1
- documented exit codes vs actual exit paths:
  - documented: `0 clean, 1 at least one floor violation (block the change), 2 the guard could not run (no merge base, not a git repo)` (line 11)
  - actual exit paths: line 35 (`process.exit(2)` on missing merge base), line 88 (`process.exit(0)` on 0 findings), line 92 (`process.exit(1)` on >0 findings). Matches documented codes exactly.
- for validators/gates:
  - can it exit non-zero? Yes (exits 1 on violation, 2 on missing merge base).
  - does it fail on source repo's default branch? No (clean exit 0).
  - does output match documentation claim? Partial: basic checks succeed, but implementation contains two severe unfailable gate bugs (deleted test files and deleted constraint bullets are not caught).

## Defects — required
- `script-bug` — skills/constraint-driven-development/references/floor-guard.md:48, 72 — File path parsing bug on deleted files: line 48 parses `+++ b/file` via `line.slice(6)`. For deleted files, git diff emits `+++ /dev/null`, which slices to `v/null`. When an entire test file is deleted, `file` is set to `'v/null'`, which fails the filename regex check on line 72 (`/\.(test|spec)\.|_test\.|test_/.test(file)`). Consequently, deleting an entire test file bypasses the guard completely and exits 0 cleanly, directly contradicting line 10's contract claim ("Detects the five Step 6 moves: ... a deleted test file").
- `script-bug` — skills/constraint-driven-development/references/floor-guard.md:77, 81-85 — Deleted constraint bullets not flagged: line 77 comments `or a floor bullet deleted`, but line 82 matches removed lines using `addedConstraints.find(...)`. If a bullet or constraint row is deleted without an added replacement line, `a` is undefined and `flag` is never called. Deleting constraints from `CONSTRAINTS.md` exits 0 cleanly.
- `missing-path` — skills/constraint-driven-development/references/floor-guard.md:18-93 — `floor-guard.mjs` is only provided as an inline markdown code block; it is not committed as an executable file under `scripts/` or `skills/constraint-driven-development/scripts/`, despite `SKILL.md:216` stating "A reference implementation of these five checks ships with this skill in references/floor-guard.md".
- `doc-drift` — skills/constraint-driven-development/references/floor-guard.md:98 — Documents `.constraintsignore` support ("A `.constraintsignore` (one glob per line) lets you exempt a path..."), but the provided reference script implementation contains zero code for loading, parsing, or applying an ignore file.

## Observations
- Redacts violation lines to 120 characters (`text.trim().slice(0, 120)` on line 54) to ensure matched secret values are never leaked in error logs.
- Uses `git diff --no-index --unified=0 /dev/null <file>` on untracked files discovered via `git ls-files --others --exclude-standard`, ensuring newly created uncommitted files are scanned.

## Context cost
File size: 5,851 bytes (~1,460 tokens). Pure reference document loaded when invoking `constraint-driven-development` or `/constraints guard`.
```

---

## Section 2: Detailed Technical Findings & Verification Evidence

### 2.1 Script Execution & Exit Code Verification (R2)

`skills/constraint-driven-development/references/floor-guard.md` contains an inlined 76-line JavaScript script (`floor-guard.mjs`, lines 18–93).
Per R2, this script was extracted and executed under multiple scenarios:

#### Test 1: Clean execution on default branch
- **Command**: `node floor-guard.mjs --base HEAD` in `sources/addy`
- **Output**:
  ```
  floor-guard: clean
  ```
- **Exit Code**: `0`
- **Verdict**: Matches line 88.

#### Test 2: Missing merge-base
- **Command**: `node floor-guard.mjs --base non-existent-ref-12345` in `sources/addy`
- **Output**:
  ```
  fatal: Not a valid object name non-existent-ref-12345
  floor-guard: no merge base against non-existent-ref-12345
  ```
- **Exit Code**: `2`
- **Verdict**: Matches line 35 and contract on line 11 ("2 the guard could not run").

#### Test 3: Floor violations detection
- **Command**: `node floor-guard.mjs --base main` in test git repository with:
  - Added `// @ts-ignore` in `app.js`
  - Added `throw new Error("Not implemented");` in `app.js`
  - Added `test.skip('works', () => {});` in `app.test.js`
  - Removed `expect(1).toBe(1);` from `app.test.js`
  - Lowered threshold in `CONSTRAINTS.md` from 80% to 70%
  - Added `| W01 | temp exception |` in `CONSTRAINTS.md`
- **Output**:
  ```
  floor-guard: 6 floor violation(s):
    [new-exception] CONSTRAINTS.md: | W01 | temp exception |
    [silenced-checker] app.js: // @ts-ignore
    [unfinished-work] app.js: throw new Error("Not implemented");
    [test-made-easier] app.test.js: test.skip('works', () => {
    [assertion-removed] app.test.js: expect(1).toBe(1);
    [threshold-lowered] CONSTRAINTS.md: Coverage: 80%  ->  Coverage: 70%

  Each is a move that lowers the bar. Fix the code, or route it through a tracked exception.
  ```
- **Exit Code**: `1`
- **Verdict**: Matches line 92.

#### Test 4: Bug Investigation — Deleted Test File
- **Scenario**: In an initialized git repository with committed `app.test.js` containing `test('works', () => { expect(1).toBe(1); });`, run `git rm app.test.js` and execute `node floor-guard.mjs --base main`.
- **Observed Result**:
  ```
  floor-guard: clean
  ```
  **Exit Code**: `0` (clean!)
- **Root Cause**:
  In git unified diff, when a file is deleted, git outputs:
  ```
  --- a/app.test.js
  +++ /dev/null
  ```
  Line 48 parses: `if (line.startsWith('+++ ')) file = line.slice(6);`.
  `'+++ /dev/null'.slice(6)` equals `'v/null'`.
  When removed lines are recorded in `removed.push({ file: 'v/null', text: ... })`, line 72 checks:
  `if (/\.(test|spec)\.|_test\.|test_/.test(file) && /\b(expect|assert|should)\b/.test(text))`
  Because `file` is `'v/null'`, the regex never matches. Deleting an entire test file completely evades the guard.

#### Test 5: Bug Investigation — Deleted Constraints Bullet
- **Scenario**: In an initialized git repository with committed `CONSTRAINTS.md` containing `- Coverage: 80%` and `- No any types`, delete `- No any types` and execute `node floor-guard.mjs --base main`.
- **Observed Result**:
  ```
  floor-guard: clean
  ```
  **Exit Code**: `0` (clean!)
- **Root Cause**:
  Line 77 claims: `// 1b/2c. Weakened threshold: a number in CONSTRAINTS.md that went down, or a floor bullet deleted.`
  However, lines 81–85 loop over `removedConstraints` and execute:
  `const a = addedConstraints.find((x) => x.text.split(/[|:]/)[0] === r.text.split(/[|:]/)[0]);`
  When a bullet is deleted without an added replacement line, `a` is `undefined` and `flag` is never called.

### 2.2 Existence Checks
- `skills/api-and-interface-design/SKILL.md` — verified present (14,884 bytes)
- `skills/planning-and-task-breakdown/SKILL.md` — verified present (10,564 bytes)
- `skills/incremental-implementation/SKILL.md` — verified present (9,507 bytes)
- `skills/test-driven-development/SKILL.md` — verified present (16,483 bytes)
- `skills/context-engineering/SKILL.md` — verified present (11,070 bytes)
- `sources/addy-external/spec-driven-development.md` — verified present (25,104 bytes)
- `evals/cases/spec-driven-development.json` — verified present (2,657 bytes)
- `evals/fixtures/spec-driven-development/billing-brief.md` — verified present (689 bytes)
- `evals/fixtures/spec-driven-development-decomposition/portal-brief.md` — verified present (1,067 bytes)
- `evals/cases/constraint-driven-development.json` — verified present (3,353 bytes)
- `.claude/commands/spec.md` & `commands/spec.toml` — verified present (913 & 911 bytes)
- `.claude/commands/constraints.md` & `commands/constraints.toml` — verified present (2,762 & 2,775 bytes)

### 2.3 SDD Hook Disambiguation
`hooks/sdd-cache-pre.sh`, `hooks/sdd-cache-post.sh`, and `hooks/SDD-CACHE.md` were inspected. Despite the identical acronym "SDD", these hooks cache web fetch citations specifically for `source-driven-development` (`hooks/SDD-CACHE.md:3`), and have no runtime connection to `spec-driven-development`.

---

