# Work Unit inv-addy-16 — Scripts, Tooling & Cross-References Report

**Date**: 2026-09-03  
**Work Unit**: `inv-addy-16`  
**Explorer**: `explorer_inv_addy_16_scripts`  
**Scope**: Scripts, Tooling, Commands, and Cross-References for `skills/constraint-driven-development/SKILL.md` and `skills/code-review-and-quality/SKILL.md`

---

## 1. Executive Summary

This report provides comprehensive technical analysis, script execution evidence, cross-reference mapping, defect cataloging, and execution checklists for work unit `inv-addy-16`.

The two files in scope for `inv-addy-16` are:
1. `sources/addy/skills/constraint-driven-development/SKILL.md` (20,880 bytes, 312 lines)
2. `sources/addy/skills/code-review-and-quality/SKILL.md` (20,555 bytes, 397 lines)
Total: 2 files, 41,435 bytes.

All validation scripts and test suites in `sources/addy/scripts/` were executed and verified against both `bun` and `node`. Crucially, because `sources/addy/` lacks its own `package.json`, Node.js resolves up to the root repository's `package.json` (`"type": "module"`), causing Node to fail when executing CommonJS scripts directly without ES module treatment (`require is not defined in ES module scope`). In contrast, `bun` executes all scripts and test suites flawlessly without modification, in full accordance with `AGENTS.md` and `METHOD.md` Rule R9 ("All code in repository is Bun/TypeScript").

---

## 2. Part 1: Validation Scripts & Tests in `sources/addy/scripts/`

The `sources/addy/scripts/` directory contains validation scripts and unit test suites designed to enforce repository invariants.

### 2.1 Inventory of Validation Scripts

| Script | Purpose | Language / Format | Documented Invocation | Actual Bun Execution Command | Exit Code | Verified Output Summary |
|---|---|---|---|---|:---:|---|
| `scripts/validate-skills.js` | Validates every skill against `docs/skill-anatomy.md` via `lib/skill-lint.js` (frontmatter, name-directory match, kebab-case, description trigger, required sections, workflow step coverage) | CommonJS Node/Bun (70 lines) | `node scripts/validate-skills.js` (`CLAUDE.md:44`, `.github/workflows/test-plugin-install.yml:23`) | `cd sources/addy && bun scripts/validate-skills.js` | `0` | `25 skills checked — 0 error(s), 0 warning(s) — PASSED` |
| `scripts/validate-reference-links.js` | Guards links from skills to `references/` checklists (enforcing `../../references/` for root checklists vs. colocated `references/`) | CommonJS Node/Bun (104 lines) | `node scripts/validate-reference-links.js` (`.github/workflows/test-plugin-install.yml:38`) | `cd sources/addy && bun scripts/validate-reference-links.js` | `0` | `25 skills checked — 0 error(s) — PASSED` |
| `scripts/validate-artifact-paths.js` | Guards spec/plan/todo artifact path consistency (`SPEC.md`, `docs/SPEC.md`, `tasks/plan.md`, `tasks/todo.md`) across guarded pipeline files | CommonJS Node/Bun (112 lines) | `node scripts/validate-artifact-paths.js` (`.github/workflows/test-plugin-install.yml:61`) | `cd sources/addy && bun scripts/validate-artifact-paths.js` | `0` | `7 files checked — 0 error(s) — PASSED` |
| `scripts/validate-commands.js` | Guards parity and description synchronization across command directories (`.claude/commands/`, `.gemini/commands/`, `commands/`) | CommonJS Node/Bun (188 lines) | `node scripts/validate-commands.js` (`.github/workflows/test-plugin-install.yml:55`) | `cd sources/addy && bun scripts/validate-commands.js` | `0` | `9 commands checked — 0 error(s) — PASSED` |
| `scripts/validate-versions.js` | Verifies that all 5 plugin manifests match the latest git release tag (`git describe --tags --abbrev=0`) | CommonJS Node/Bun (37 lines) | `node scripts/validate-versions.js` (`.github/workflows/test-plugin-install.yml:26`) | `cd sources/addy && bun scripts/validate-versions.js` | `0` | `All plugin manifests use version 0.6.8.` |
| `scripts/run-evals.js` | Runs trigger, routing, and collision evals across all skill case files in `evals/cases/` | CommonJS Node/Bun (590 lines) | `node scripts/run-evals.js --min-rank1 80` (`CLAUDE.md:45`, `.github/workflows/test-plugin-install.yml:35`) | `cd sources/addy && bun scripts/run-evals.js --min-rank1 80` | `0` | `Running skill evals across 25 skills, 25 case files\n136 checks passed — 0 error(s), 0 warning(s)\ntrigger rank-1 rate: 86% (72/84 positive prompts rank their skill first)\nPASSED` |
| `scripts/lib/skill-lint.js` | Core validation logic library imported by `validate-skills.js` | CommonJS Node/Bun (276 lines) | Imported by `validate-skills.js` and `scripts/lib/skill-lint-test.js` | `bun test ./scripts/lib/skill-lint-test.js` | `0` | Pure module exporting `parseFrontmatter`, `extractSkillReferences`, `lintSkillContent`, `lintSkill` |

### 2.2 Inventory of Test Suites

All test files rely on the `node:test` and `node:assert/strict` test harness, which is natively supported by `bun test`.

| Test File | Target Script Under Test | Test Cases Count | Actual Bun Test Command | Exit Code | Verified Output Summary |
|---|---|:---:|---|:---:|---|
| `scripts/validate-reference-links-test.js` | `validate-reference-links.js` | 7 | `cd sources/addy && bun test ./scripts/validate-reference-links-test.js` | `0` | `7 pass, 0 fail` |
| `scripts/validate-commands-test.js` | `validate-commands.js` | 6 | `cd sources/addy && bun test ./scripts/validate-commands-test.js` | `0` | `6 pass, 0 fail` |
| `scripts/validate-versions-test.js` | `validate-versions.js` | 1 | `cd sources/addy && bun test ./scripts/validate-versions-test.js` | `0` | `1 pass, 0 fail` |
| `scripts/validate-artifact-paths-test.js` | `validate-artifact-paths.js` | 6 | `cd sources/addy && bun test ./scripts/validate-artifact-paths-test.js` | `0` | `6 pass, 0 fail` |
| `scripts/lib/skill-lint-test.js` | `lib/skill-lint.js` | 8 | `cd sources/addy && bun test ./scripts/lib/skill-lint-test.js` | `0` | `8 pass, 0 fail` |
| `scripts/run-evals-test.js` | `run-evals.js` | 15 | `cd sources/addy && bun test ./scripts/run-evals-test.js` | `0` | `15 pass, 0 fail` |
| **Combined Test Run** | **All 6 test suites** | **43** | `cd sources/addy && bun test ./scripts/run-evals-test.js ./scripts/validate-reference-links-test.js ./scripts/validate-commands-test.js ./scripts/validate-versions-test.js ./scripts/validate-artifact-paths-test.js ./scripts/lib/skill-lint-test.js` | **0** | **43 pass, 0 fail across 6 files** |

### 2.3 Runtime Execution Environment Analysis: Node vs. Bun

- **Node.js behavior**:
  - Running `node scripts/validate-skills.js` inside `sources/addy/` fails with:
    `ReferenceError: require is not defined in ES module scope`
  - Cause: Node traverses upward to the repo root `/Users/peterkloss/Dev/ACMElabs/brain-v2/package.json`, which sets `"type": "module"`. Since `sources/addy/` does not contain a `package.json` specifying `"type": "commonjs"`, Node treats all `.js` files as ES modules.
- **Bun behavior**:
  - `bun scripts/<name>.js` seamlessly handles CommonJS `require()` and ESM imports without module scope collision.
  - `bun test` runs all 43 tests across the 6 test files in ~716ms with 100% pass rate.
  - Therefore, `bun` is the designated, fully functional, and project-compliant runtime for all script executions in this repository (per R9).

---

## 3. Part 2: Scripts, Tooling & Commands in the Assigned Skills

### 3.1 `skills/constraint-driven-development/SKILL.md`

#### A. Inlined Reference Implementation: `floor-guard.mjs`
- **Location**: Referenced at `skills/constraint-driven-development/SKILL.md:216, 258` pointing to `references/floor-guard.md`. The script itself is inlined at `references/floor-guard.md:17-93`.
- **Purpose**: Enforces the five quality floor rules via `git diff`:
  1. `threshold-lowered`: Weakened thresholds in `CONSTRAINTS.md` or deleted constraint bullets.
  2. `test-made-easier`: Added `.skip`, `.todo`, `xit`, `xdescribe`, `@pytest.mark.skip`, or deleted assertion lines (`expect`, `assert`, `should`).
  3. `silenced-checker`: New suppression comments (`@ts-ignore`, `@ts-nocheck`, `eslint-disable`, `biome-ignore`, `# noqa`, `# type: ignore`, `istanbul ignore`, `nosemgrep`, `gitleaks:allow`, `Stryker disable`).
  4. `unfinished-work`: Stubs (`throw new Error("Not implemented")`, empty `catch {}`, `TODO`, `pass # stub`).
  5. `new-exception`: New exception rows added to `CONSTRAINTS.md`.
- **Contract & Exit Codes**:
  - `0`: Clean (no floor violations detected).
  - `1`: At least one floor violation detected.
  - `2`: Guard could not run (e.g., missing merge base, non-existent git ref).
- **Execution Verification**:
  - `bun run floor-guard.mjs --base HEAD` → Exit code: `0` (Output: `floor-guard: clean`)
  - `node floor-guard.mjs --base HEAD` → Exit code: `0` (Output: `floor-guard: clean`)
  - `bun run floor-guard.mjs --base non-existent-ref` → Exit code: `2` (Output: `fatal: Not a valid object name non-existent-ref\nfloor-guard: no merge base against non-existent-ref`)
- **Known Implementation Defects in `floor-guard.mjs`** (discovered and verified):
  1. *Untracked files dropped*: Line 41 runs `git diff --no-index /dev/null <file>`. In git, `git diff --no-index` exits with code `1` when differences are present. The `git()` helper wraps `execFileSync` in a `try/catch` that returns `null` on non-zero exits (line 30). As a result, untracked files with violations return `null` and evaluate to `""`, completely evading detection.
  2. *Deleted test files undetected*: Deleted files in git diffs have the header `+++ /dev/null`. Line 48 slices 6 characters (`line.slice(6)`), resulting in `"v/null"`. Line 72 tests `/\.(test|spec)\.|_test\.|test_/.test(file)`, which fails to match `"v/null"`. Hence, deleting test files exits `0` undetected.
  3. *Deleted constraint bullets undetected*: Line 82 looks for matching lines in `addedConstraints`. If a bullet is deleted from `CONSTRAINTS.md` without replacement, it is never matched and never flagged.
  4. *Ignore file unimplemented*: Line 98 of the markdown documentation claims `.constraintsignore` can exempt paths, but there is zero parsing or filtering logic for `.constraintsignore` in the script.

#### B. Command Twins for `/constraints`
The skill is invoked by the `/constraints` command, implemented across 3 directories and validated by `validate-commands.js`:
- Claude Code: `.claude/commands/constraints.md` (Markdown format)
- Antigravity CLI: `commands/constraints.toml` (TOML format)
- Gemini CLI: `.gemini/commands/constraints.toml` (TOML format)
- **Sub-commands advertised** (`.claude/commands/constraints.md:30-32`):
  - `/constraints check` — run current constraints against this branch
  - `/constraints guard` — inspect diff for weakened bar
  - `/constraints ratchet` — record today's measured values as floor
  *(Note: these sub-commands are conversational instructions, not separate CLI executable scripts).*

#### C. External Tool Commands Cited
`constraint-driven-development/SKILL.md` maps specific dimensions to de facto ecosystem tools:
- `tsc --noEmit` (TypeScript types)
- `mypy .` (Python types)
- `biome check` / `eslint .` / `ruff check` (Linters)
- `vitest run --coverage` / `jest --coverage` / `pytest --cov --cov-report=lcov` (Test coverage)
- `semgrep scan --config p/default --config p/owasp-top-ten` (Security static analysis)
- `gitleaks detect --redact --no-banner` (Secrets scanning — note `--redact` is mandatory)
- `osv-scanner scan source -r .` (Dependency vulnerabilities)
- `lighthouse $URL --output=json --quiet` (Web Vitals / Performance)
- `size-limit --json` (Bundle size)
- `axe $URL --tags wcag2a,wcag2aa,wcag21aa` (Accessibility)
- `depcruise --validate src` (Architecture boundaries)
- `stryker run --mutate <changed files>` (Mutation testing / Assertion quality)
- Lifecycle stages: `check:fast`, `check:task`, `check:full` (lines 173-185)

### 3.2 `skills/code-review-and-quality/SKILL.md`

#### A. Command Twins for `/review`
The skill is invoked by the `/review` command:
- Claude Code: `.claude/commands/review.md`
- Antigravity CLI: `commands/review.toml`
- Gemini CLI: `.gemini/commands/review.toml`
- Description across all 3: `"Conduct a five-axis code review — correctness, readability, architecture, security, performance"` (verified identical by `validate-commands.js`).

#### B. Persona Agent: `agents/code-reviewer.md`
- Dedicated subagent persona: Staff Engineer conducting 5-axis review (`agents/code-reviewer.md:1-103`).
- Outputs findings using severity labels: `Critical`, `Required`, `Optional`, `Nit`.

#### C. External References Cited
- `../../references/security-checklist.md` (`SKILL.md:351`) — Verified present at `sources/addy/references/security-checklist.md` (206 lines, 11,881 bytes).
- `../../references/performance-checklist.md` (`SKILL.md:352`) — Verified present at `sources/addy/references/performance-checklist.md` (237 lines, 13,139 bytes).
- `validate-reference-links.js` confirms both paths resolve correctly.

#### D. Tool Commands Cited
- `npm audit` (`SKILL.md:287, 300`) — Dependency vulnerability verification during code review and upgrade review.

---

## 4. Part 3: Manifest Rows & Deliverables Verification

### 4.1 Manifest Rows (`docs/analysis/manifest/addy.md`)
Lines 177 and 178:
```markdown
| skills/constraint-driven-development/SKILL.md | 20880 | skill | [ ] |
| skills/code-review-and-quality/SKILL.md | 20555 | skill | [ ] |
```
Upon completion of `inv-addy-16`, the Worker must update these rows to `[x]`:
```markdown
| skills/constraint-driven-development/SKILL.md | 20880 | skill | [x] |
| skills/code-review-and-quality/SKILL.md | 20555 | skill | [x] |
```

### 4.2 Status of External Docs in Manifest
- `docs/analysis/manifest/addy.md:205`: `| ../addy-external/constraint-driven-development.md | 0 | external-doc | [ ] (unavailable) |`
  - The external documentation page was unavailable during the Phase 0 snapshot.
- `docs/analysis/manifest/addy.md:206`: `| ../addy-external/code-review-and-quality.md | 26687 | external-doc | [ ] |`
  - This external doc is assigned to work unit `inv-addy-30` (line 94 of `STATE.md`).

### 4.3 Target Inventory Deliverables
The Worker must produce:
1. `docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md`
2. `docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md`
3. `docs/analysis/inventory/addy/_units/inv-addy-16.md`

---

## 5. Part 4: Work Unit Report Format & `STATE.md` Status

### 5.1 Unit Report Structure
Following the exemplar `docs/analysis/inventory/addy/_units/inv-addy-15.md`, `inv-addy-16.md` must adhere to this structure:
```markdown
---
unit: inv-addy-16
phase: 1
package: addy
session: 006
subagent_returned: complete
---

# Unit inv-addy-16

## Files assigned
- [x] `skills/constraint-driven-development/SKILL.md` (20,880 bytes)
- [x] `skills/code-review-and-quality/SKILL.md` (20,555 bytes)

## Outputs produced
- `docs/analysis/inventory/addy/skills-constraint-driven-development-skill-md.md` (<bytes>)
- `docs/analysis/inventory/addy/skills-code-review-and-quality-skill-md.md` (<bytes>)
- `docs/analysis/inventory/addy/_units/inv-addy-16.md` (<bytes>)

## Scripts executed
[Document all executed scripts, commands, exit codes, and output summaries]

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
[Document lifecycle phase allocations, architectural drift, defects, and terminology]

## Blocked or uncertain
none

## Time and size
- Tokens of source read: ~10,360 tokens (41,435 bytes across 2 files).
- Tokens of output written: ~...
```

### 5.2 Updates to `docs/plan/STATE.md`
Line 80 in `docs/plan/STATE.md`:
```markdown
| inv-addy-16 | addy | 2 | 41435 | in-progress | 006 | — |
```
Must be updated to:
```markdown
| inv-addy-16 | addy | 2 | 41435 | complete | 006 | docs/analysis/inventory/addy/_units/inv-addy-16.md |
```

---

## 6. Part 5: Comprehensive Worker Execution & Verification Checklist

This checklist provides the Worker with exact requirements, verified locations, verbatim quotes, and defect classifications.

### 6.1 Requirements for `skills/constraint-driven-development/SKILL.md`

- [ ] **Frontmatter**:
  - `package`: `addy`
  - `path`: `skills/constraint-driven-development/SKILL.md`
  - `type`: `skill`
  - `bytes`: `20880`
  - `unit`: `inv-addy-16`
- [ ] **Purpose** (verbatim):
  - Line 3 description clause: `"Establishes a project's quality bar as a written contract and stops agents quietly lowering it. Interviews the user on which dimensions matter, supplies sane default thresholds when they have no number in mind, records everything in CONSTRAINTS.md, and watches the diff for a weakened bar — new @ts-ignore or eslint-disable suppressions, skipped or deleted tests, assertions stripped out, unimplemented stubs, thresholds edited down." — skills/constraint-driven-development/SKILL.md:3`
  - Line 12-14: `"This skill produces something different: a written record of **this project's** bar, with numbers, that outlives the conversation and can be checked mechanically." — skills/constraint-driven-development/SKILL.md:12`
- [ ] **Design Intent**:
  - Shifts quality validation from unrecorded conversational prose into a durable, machine-checkable repository contract (`CONSTRAINTS.md`) with concrete thresholds. Guards against the failure mode where autonomous coding agents take the cheapest path to green by silencing linter errors, skipping tests, or lowering thresholds. Establishes a four-question intake interview with sane defaults, separates checks across lifecycle phases by computational cost (`check:fast`, `check:task`, `check:full`), prioritizes non-circular external checks over circular suite tests, and provides diff-scoped ratchets for legacy codebases.
- [ ] **Phase**: `addy:Define` (per `README.md:356` and `inv-addy-15.md:47`).
- [ ] **Inputs**:
  - User answers to 4 intake questions (`SKILL.md:57-90`)
  - Auto-detected repository stack: `package.json`, `pyproject.toml`, `go.mod`, test runners, linters, coverage output, CI configs (`SKILL.md:44-54`)
  - `git diff` against merge base (`SKILL.md:199, 214; references/floor-guard.md:9, 38-43`)
  - Current measured metric values for ratchet table (`SKILL.md:80-83, 126-132, 226-233`)
  - Related skills: `interview-me` (`SKILL.md:59, 306`), `code-review-and-quality` (`SKILL.md:10, 33, 307`), `ci-cd-and-automation` (`SKILL.md:33, 308`), `test-driven-development` (`SKILL.md:10, 16, 309`), `security-and-hardening` (`SKILL.md:10, 310`), `performance-optimization` (`SKILL.md:311`), `spec-driven-development` (`SKILL.md:16`)
- [ ] **Outputs**:
  - `CONSTRAINTS.md` at repository root (`SKILL.md:3, 93-138`)
  - Additions to `AGENTS.md` and `CLAUDE.md`: `"Read CONSTRAINTS.md before writing code. Do not weaken it to make a change pass."` (`SKILL.md:140`)
  - Scripts in `package.json`: `check:fast`, `check:task`, `check:full` (`SKILL.md:170-185`)
  - Exceptions table rows with ID, Rule, Path, Reason, Owner, Expires (`SKILL.md:133-138`)
- [ ] **Invokes**:
  - `reference references/floor-guard.md — skills/constraint-driven-development/SKILL.md:216, 258`
  - `skill interview-me — skills/constraint-driven-development/SKILL.md:59, 306`
  - `skill code-review-and-quality — skills/constraint-driven-development/SKILL.md:10, 33, 307`
  - `skill ci-cd-and-automation — skills/constraint-driven-development/SKILL.md:33, 308`
  - `skill test-driven-development — skills/constraint-driven-development/SKILL.md:10, 16, 309`
  - `skill security-and-hardening — skills/constraint-driven-development/SKILL.md:10, 310`
  - `skill performance-optimization — skills/constraint-driven-development/SKILL.md:311`
  - `skill spec-driven-development — skills/constraint-driven-development/SKILL.md:16`
- [ ] **Invoked by**:
  - `command .claude/commands/constraints.md — .claude/commands/constraints.md:5`
  - `command commands/constraints.toml — commands/constraints.toml:4`
  - `command .gemini/commands/constraints.toml — .gemini/commands/constraints.toml:4`
  - `doc README.md — README.md:237, 356`
  - `skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:19`
  - `config evals/cases/constraint-driven-development.json — evals/cases/constraint-driven-development.json:2`
- [ ] **Concepts Named** (verbatim list):
  - `constraint-driven-development` — `SKILL.md:2, 6` — defined here
  - `CONSTRAINTS.md` — `SKILL.md:3, 12, 31, 93-138, 208` — defined here
  - `Floor` / `The Floor` — `SKILL.md:3, 38, 102-109, 216, 295` — defined here
  - `The Process` — `SKILL.md:40` — defined here
  - `Step 1: Detect before you ask` — `SKILL.md:42` — defined here
  - `Step 2: Four questions, each with a default` — `SKILL.md:57` — defined here
  - `Step 3: Write CONSTRAINTS.md` — `SKILL.md:93` — defined here
  - `Step 4: Install what each dimension needs` — `SKILL.md:142` — defined here
  - `Step 5: Wire it to the lifecycle` — `SKILL.md:186` — defined here
  - `Step 6: Guard the bar itself` — `SKILL.md:202` — defined here
  - `Step 7: Ratchets, when you don't have a number` — `SKILL.md:226` — defined here
  - `Floor guard` / `floor-guard.md` / `floor-guard.mjs` — `SKILL.md:216, 258` — used here
  - `Enforced with numbers` — `SKILL.md:110-125` — defined here
  - `Measured, not yet enforced` — `SKILL.md:126-132, 230` — defined here
  - `Exceptions` / `Exceptions table` — `SKILL.md:133-138, 212` — defined here
  - `check:fast` — `SKILL.md:175, 182, 184` — defined here
  - `check:task` — `SKILL.md:176, 182, 184` — defined here
  - `check:full` — `SKILL.md:177, 182, 184` — defined here
  - `Five moves in the diff` — `SKILL.md:206-213` — defined here
  - `threshold-lowered` — `SKILL.md:208` — defined here
  - `test-made-easier` — `SKILL.md:209` — defined here
  - `silenced-checker` — `SKILL.md:210` — defined here
  - `unfinished-work` — `SKILL.md:211` — defined here
  - `new-exception` — `SKILL.md:212` — defined here
  - `Circular check ranking` (External, Project, Suite) — `SKILL.md:218-224` — defined here
  - `Ratchets` — `SKILL.md:82, 226-233, 248` — defined here
  - `Sane Defaults` — `SKILL.md:234-250` — defined here
  - `Escalation Path` (Written only, Scripted, Tool-backed) — `SKILL.md:252-262` — defined here
  - `Common Rationalizations` — `SKILL.md:264` — defined here
  - `Red Flags` — `SKILL.md:275` — defined here
  - `Verification checklist` — `SKILL.md:290-302` — defined here
- [ ] **Defects to Report**:
  - `doc-drift` — `skills/constraint-driven-development/SKILL.md` is omitted from `CLAUDE.md:20-26` and `AGENTS.md:25-46` phase tables, despite being listed in `README.md:356` under `Define` and having slash command twins in `.claude/commands/constraints.md`, `commands/constraints.toml`, and `.gemini/commands/constraints.toml`.
  - `doc-drift` — `manifest line 205` / `skills.addy.ie/skills/constraint-driven-development/` was unavailable at snapshot time, leaving no external documentation counterpart.
  - `doc-drift` — `.claude/commands/constraints.md:30-32` declares sub-commands (`/constraints check`, `/constraints guard`, `/constraints ratchet`) that have no automated CLI implementation; `floor-guard.mjs` exists only as markdown-embedded sample code in `references/floor-guard.md`.
  - `script-bug` — referenced `floor-guard.mjs` has 4 verified defects: drops untracked files with diffs (exit 1 throws in git()), misses deleted test files (slices header to "v/null"), fails to detect deleted constraint bullets without replacement, and fails to implement `.constraintsignore`.

---

### 6.2 Requirements for `skills/code-review-and-quality/SKILL.md`

- [ ] **Frontmatter**:
  - `package`: `addy`
  - `path`: `skills/code-review-and-quality/SKILL.md`
  - `type`: `skill`
  - `bytes`: `20555`
  - `unit`: `inv-addy-16`
- [ ] **Purpose** (verbatim):
  - Line 3 description clause: `"Conducts multi-axis code review. Use before merging any change. Use when reviewing code written by yourself, another agent, or a human. Use when you need to assess code quality across multiple dimensions before it enters the main branch." — skills/code-review-and-quality/SKILL.md:3`
  - Line 10: `"Multi-dimensional code review with quality gates. Every change gets reviewed before merge — no exceptions. Review covers five axes: correctness, readability, architecture, security, and performance." — skills/code-review-and-quality/SKILL.md:10`
  - Line 12 (approval standard): `"The approval standard: Approve a change when it definitely improves overall code health, even if it isn't perfect. Perfect code doesn't exist — the goal is continuous improvement." — skills/code-review-and-quality/SKILL.md:12`
- [ ] **Design Intent**:
  - Provides a structured, multi-dimensional code review methodology balancing rigorous gating against velocity. Establishes the 5-axis review rubric (Correctness, Readability & Simplicity, Architecture, Security, Performance), prescribes structural remedies (reducing concepts rather than relocating complexity), mandates small change sizing (~100-300 lines) and one-change decomposition, standardizes finding severity labels to prevent author churn on cosmetic nits, introduces a multi-model review pattern, enforces dependency hygiene (changelog inspection, lockfile discipline, standard library preference), and provides an actionable review checklist.
- [ ] **Phase**: `addy:Review` (per `CLAUDE.md:25`, `AGENTS.md:34`, `README.md:368`).
- [ ] **Inputs**:
  - Code diff / proposed changes (staged or recent commits) (`SKILL.md:108-115, 144, 169`)
  - Spec or task requirements being implemented (`SKILL.md:30, 148, 311`)
  - Existing codebase patterns, test suites, and conventions (`SKILL.md:12, 40, 55, 157-162`)
  - Changelogs and lockfiles for dependency upgrades (`SKILL.md:283-299`)
  - Checklists: `../../references/security-checklist.md` (`SKILL.md:351`), `../../references/performance-checklist.md` (`SKILL.md:352`)
  - Related skills: `security-and-hardening` (`SKILL.md:66, 300`), `performance-optimization` (`SKILL.md:79`)
- [ ] **Outputs**:
  - Structured review feedback categorized by severity labels: `(no prefix) / Required`, `Critical:`, `Nit:`, `Optional: / Consider:`, `FYI` (`SKILL.md:178-189`)
  - Review checklist verification verdict (`Approve` vs. `Request changes`) (`SKILL.md:304-348`)
  - Dead code identification report (`SKILL.md:233-247`)
  - Decomposed pull request proposals when changes exceed healthy sizing (`SKILL.md:117-125`)
- [ ] **Invokes**:
  - `reference ../../references/security-checklist.md — skills/code-review-and-quality/SKILL.md:351`
  - `reference ../../references/performance-checklist.md — skills/code-review-and-quality/SKILL.md:352`
  - `skill security-and-hardening — skills/code-review-and-quality/SKILL.md:66, 300`
  - `skill performance-optimization — skills/code-review-and-quality/SKILL.md:79`
- [ ] **Invoked by**:
  - `command .claude/commands/review.md — .claude/commands/review.md:5`
  - `command commands/review.toml — commands/review.toml:4`
  - `command .gemini/commands/review.toml — .gemini/commands/review.toml:4`
  - `agent agents/code-reviewer.md — agents/code-reviewer.md:3, 49`
  - `doc README.md — README.md:188, 238, 368`
  - `doc CLAUDE.md — CLAUDE.md:25`
  - `doc AGENTS.md — AGENTS.md:34`
  - `skill skills/git-workflow-and-versioning/SKILL.md — skills/git-workflow-and-versioning/SKILL.md:28, 126`
  - `skill skills/doubt-driven-development/SKILL.md — skills/doubt-driven-development/SKILL.md:12, 175`
  - `skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:23, 154`
  - `skill skills/constraint-driven-development/SKILL.md — skills/constraint-driven-development/SKILL.md:10, 33, 307`
  - `command .claude/commands/code-simplify.md — .claude/commands/code-simplify.md:14`
  - `command commands/code-simplify.toml — commands/code-simplify.toml:13`
  - `command .gemini/commands/code-simplify.toml — .gemini/commands/code-simplify.toml:13`
  - `reference references/definition-of-done.md — references/definition-of-done.md:67`
  - `reference references/orchestration-patterns.md — references/orchestration-patterns.md:33`
  - `docs/getting-started.md:54, docs/adoption-guide.md:43, docs/developer-onboarding.md:45, docs/agents.md:32, docs/antigravity-setup.md:56, docs/cursor-setup.md:159, docs/copilot-setup.md:44, docs/gemini-cli-setup.md:80, docs/opencode-setup.md:37, docs/windsurf-setup.md:38`
  - `config evals/cases/code-review-and-quality.json — evals/cases/code-review-and-quality.json:2`
  - `config evals/cases/constraint-driven-development.json — evals/cases/constraint-driven-development.json:23`
  - `script scripts/validate-reference-links-test.js — scripts/validate-reference-links-test.js:145`
- [ ] **Concepts Named** (verbatim list):
  - `code-review-and-quality` — `SKILL.md:2, 6` — defined here
  - `The approval standard` — `SKILL.md:12` — defined here
  - `The Five-Axis Review` — `SKILL.md:22-25` — defined here:
    - `Correctness` — `SKILL.md:26-34` — defined here
    - `Readability & Simplicity` — `SKILL.md:36-50` — defined here
    - `Architecture` — `SKILL.md:51-63` — defined here
    - `Security` — `SKILL.md:64-76` — defined here
    - `Performance` — `SKILL.md:77-87` — defined here
  - `Structural Remedies` — `SKILL.md:88-101` — defined here
  - `Change Sizing` — `SKILL.md:103-129` — defined here
  - `Splitting strategies` (Stack, By file group, Horizontal, Vertical) — `SKILL.md:117-125` — defined here
  - `One change rule` — `SKILL.md:115, 128` — defined here
  - `Change Descriptions` — `SKILL.md:130-139` — defined here
  - `Review Process` — `SKILL.md:140` — defined here:
    - `Step 1: Understand the Context` — `SKILL.md:142` — defined here
    - `Step 2: Review the Tests First` — `SKILL.md:152` — defined here
    - `Step 3: Review the Implementation` — `SKILL.md:164` — defined here
    - `Step 4: Categorize Findings` — `SKILL.md:177-192` — defined here
    - `Step 5: Verify the Verification` — `SKILL.md:193-203` — defined here
  - `Severity labels` (no prefix / Required change, Critical:, Nit:, Optional: / Consider:, FYI) — `SKILL.md:181-188` — defined here
  - `Multi-Model Review Pattern` — `SKILL.md:205-229` — defined here
  - `Dead Code Hygiene` — `SKILL.md:231-248` — defined here
  - `Review Speed` — `SKILL.md:249-257` — defined here
  - `Handling Disagreements` — `SKILL.md:258-267` — defined here
  - `Honesty in Review` — `SKILL.md:269-278` — defined here
  - `Dependency Discipline` — `SKILL.md:279-301` — defined here
  - `The Review Checklist` — `SKILL.md:302-348` — defined here
  - `Common Rationalizations` — `SKILL.md:354-367` — defined here
  - `Red Flags` — `SKILL.md:368-384` — defined here
  - `Verification checklist` — `SKILL.md:385-395` — defined here
  - `Presumptive blockers` — `SKILL.md:396-397` — defined here
- [ ] **Defects to Report**:
  - `doc-drift` — Severity label drift across skill, command, and agent:
    - `skills/code-review-and-quality/SKILL.md:181-188`: `(no prefix) / Required`, `Critical:`, `Nit:`, `Optional: / Consider:`, `FYI`.
    - `skills/code-review-and-quality/SKILL.md:228-229`: `Critical, Required, Optional, or Nit`.
    - `.claude/commands/review.md:15` & `commands/review.toml:14`: `Critical, Important, or Suggestion`.
    - `agents/code-reviewer.md:49-57`: `Critical, Required, Optional, Nit`.
  - `doc-drift` — Transitive command invocation drift: `.claude/commands/code-simplify.md:14` states `/code-simplify` "Runs after /review", but `code-review-and-quality/SKILL.md` never mentions `code-simplification` or `/code-simplify`.

---

## 7. Execution Commands for Worker to Record in `_units/inv-addy-16.md`

```bash
# 1. Validation scripts in sources/addy/scripts/
cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy && bun scripts/validate-skills.js
cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy && bun scripts/validate-reference-links.js
cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy && bun scripts/validate-artifact-paths.js
cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy && bun scripts/validate-commands.js
cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy && bun scripts/validate-versions.js
cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy && bun scripts/run-evals.js --min-rank1 80

# 2. Test suites in sources/addy/scripts/
cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy && bun test ./scripts/run-evals-test.js ./scripts/validate-reference-links-test.js ./scripts/validate-commands-test.js ./scripts/validate-versions-test.js ./scripts/validate-artifact-paths-test.js ./scripts/lib/skill-lint-test.js

# 3. Floor guard reference execution (from references/floor-guard.md)
cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy && bun run floor-guard.mjs --base HEAD
cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy && node floor-guard.mjs --base HEAD
cd /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/addy && bun run floor-guard.mjs --base non-existent-ref

# 4. Synthesis and coverage verification
cd /Users/peterkloss/Dev/ACMElabs/brain-v2 && bun scripts/synthesis/coverage.ts
cd /Users/peterkloss/Dev/ACMElabs/brain-v2 && bun scripts/synthesis/glossary-lint.ts
```

All commands have been independently executed and verified by Explorer `explorer_inv_addy_16_scripts`.
