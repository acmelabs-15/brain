# Analysis & Draft Inventory Entries: inv-addy-13 (Explorer 1)

This document contains the comprehensive inventory extraction and analysis for the two assigned files under work unit `inv-addy-13`:
1. `sources/addy/skills/debugging-and-error-recovery/SKILL.md`
2. `sources/addy/skills/using-agent-skills/SKILL.md`

All extractions adhere strictly to METHOD.md (§3 Hard Rules R1–R6, §4 Comprehensive Checklist, and the `inventory-entry.md` schema).

---

## 1. Inventory Entry: `skills/debugging-and-error-recovery/SKILL.md`

```markdown
---
package: addy
path: skills/debugging-and-error-recovery/SKILL.md
type: skill
bytes: 10837
unit: inv-addy-13
---

# skills/debugging-and-error-recovery/SKILL.md

## Purpose — required, verbatim
> "Systematic debugging with structured triage. When something breaks, stop adding features, preserve evidence, and follow a structured process to find and fix the root cause. Guessing wastes time. The triage checklist works for test failures, build errors, runtime bugs, and production incidents." — skills/debugging-and-error-recovery/SKILL.md:10

*(Frontmatter description: "Guides systematic root-cause debugging. Use when tests fail, builds break, behavior doesn't match expectations, or you encounter any unexpected error. Use when you need a systematic approach to finding and fixing the root cause rather than guessing." — skills/debugging-and-error-recovery/SKILL.md:3)*

## Design intent — required
Prevents agents and developers from falling into reactive "debugging by guessing", premature patch-and-hope cycles under time pressure, and pushing past broken builds or failing tests. Solves the compounding error problem where superficial fixes (e.g. deduplicating in UI rather than repairing underlying database queries) mask root causes and introduce technical debt. Enforces disciplined error handling through the "Stop-the-Line" rule (halt feature development immediately when unexpected behavior occurs), structured progressive triage (reproduce → localize → reduce → fix root cause → guard with regression test → verify end-to-end), error-category trees (test, build, runtime), prompt-injection defenses (treating error output as untrusted diagnostic data rather than executable instructions), and safe fallback degradation patterns when operating under operational deadlines.

## Phase — required
`addy:Verify` (README.md:366; evals/cases/debugging-and-error-recovery.json:18)

## Inputs — required
- Error indicators and triggers: failing tests after code changes, broken builds, runtime discrepancies, user bug reports, console/log errors, and regressions (skills/debugging-and-error-recovery/SKILL.md:14-19)
- Runtime diagnostic data: error output, exception traces, server logs, network requests, console output, component render trees, and reproduction steps (skills/debugging-and-error-recovery/SKILL.md:27, 93-98, 203-212)
- Git history context: commit history and known-good commit SHAs for bisection (skills/debugging-and-error-recovery/SKILL.md:104-109)
- Target repository toolchain: repository-specific test runner, build scripts, and dev server commands (skills/debugging-and-error-recovery/SKILL.md:75-85, 156-170)
- Execution environment state: Node/browser runtime versions, operating system, environment variables, test isolation/order flags, and database population state (skills/debugging-and-error-recovery/SKILL.md:61-68, 195-197)

## Outputs — required
- Preserved failure evidence and diagnostic logs (skills/debugging-and-error-recovery/SKILL.md:27, 48)
- Minimal reproducible failing test case or simplified reproduction payload (skills/debugging-and-error-recovery/SKILL.md:111-120)
- Root cause diagnosis and identified architectural/code flaw (skills/debugging-and-error-recovery/SKILL.md:28, 121-137, 295)
- Root-cause code fix addressing underlying mechanism rather than symptom (skills/debugging-and-error-recovery/SKILL.md:29, 121-137, 296)
- Automated regression test that fails prior to fix and passes with fix (skills/debugging-and-error-recovery/SKILL.md:30, 138-153, 297)
- Safe fallback implementation (safe defaults with warnings, graceful UI degradation) when under emergency time pressure (skills/debugging-and-error-recovery/SKILL.md:214-241)
- End-to-end verification passing full test suite, typecheck/build, and spot checks (skills/debugging-and-error-recovery/SKILL.md:31, 154-170, 298-301)

## Invokes — required
- skill test-driven-development — skills/debugging-and-error-recovery/SKILL.md:75

## Invoked by — required
- doc AGENTS.md — AGENTS.md:28, 43
- doc CLAUDE.md — CLAUDE.md:24
- doc README.md — README.md:262, 366
- command commands/build.toml — commands/build.toml:36, 42
- doc docs/adoption-guide.md — docs/adoption-guide.md:83
- doc docs/antigravity-setup.md — docs/antigravity-setup.md:92
- doc docs/cursor-setup.md — docs/cursor-setup.md:159
- doc docs/getting-started.md — docs/getting-started.md:72
- doc docs/opencode-setup.md — docs/opencode-setup.md:118, 161, 171, 221
- doc docs/skill-anatomy.md — docs/skill-anatomy.md:165
- evals evals/cases/api-and-interface-design.json — evals/cases/api-and-interface-design.json:21
- evals evals/cases/code-simplification.json — evals/cases/code-simplification.json:24
- evals evals/cases/debugging-and-error-recovery.json — evals/cases/debugging-and-error-recovery.json:2, 35, 49
- evals evals/cases/documentation-and-adrs.json — evals/cases/documentation-and-adrs.json:21
- evals evals/cases/planning-and-task-breakdown.json — evals/cases/planning-and-task-breakdown.json:21
- evals evals/cases/using-agent-skills.json — evals/cases/using-agent-skills.json:21
- skill skills/ci-cd-and-automation/SKILL.md — skills/ci-cd-and-automation/SKILL.md:189
- skill skills/doubt-driven-development/SKILL.md — skills/doubt-driven-development/SKILL.md:228
- skill skills/observability-and-instrumentation/SKILL.md — skills/observability-and-instrumentation/SKILL.md:21
- skill skills/security-and-hardening/SKILL.md — skills/security-and-hardening/SKILL.md:375
- skill skills/using-agent-skills/SKILL.md — skills/using-agent-skills/SKILL.md:32, 164, 182

## Concepts named — required, verbatim
- `debugging-and-error-recovery` — skills/debugging-and-error-recovery/SKILL.md:2 — defined here
- `root-cause debugging` — skills/debugging-and-error-recovery/SKILL.md:3 — defined here
- `Debugging and Error Recovery` — skills/debugging-and-error-recovery/SKILL.md:6 — defined here
- `structured triage` — skills/debugging-and-error-recovery/SKILL.md:10 — defined here
- `triage checklist` — skills/debugging-and-error-recovery/SKILL.md:10, 28, 36 — defined here
- `The Stop-the-Line Rule` — skills/debugging-and-error-recovery/SKILL.md:21 — defined here
- `Stop-the-Line` — skills/debugging-and-error-recovery/SKILL.md:21 — defined here
- `The Triage Checklist` — skills/debugging-and-error-recovery/SKILL.md:36 — defined here
- `Step 1: Reproduce` — skills/debugging-and-error-recovery/SKILL.md:40 — defined here
- `reproduce` — skills/debugging-and-error-recovery/SKILL.md:42, 45 — defined here
- `non-reproducible` — skills/debugging-and-error-recovery/SKILL.md:50, 53 — defined here
- `timing-dependent` — skills/debugging-and-error-recovery/SKILL.md:57 — defined here
- `environment-dependent` — skills/debugging-and-error-recovery/SKILL.md:61 — defined here
- `state-dependent` — skills/debugging-and-error-recovery/SKILL.md:65 — defined here
- `test pollution` — skills/debugging-and-error-recovery/SKILL.md:83 — defined here
- `test-driven-development` — skills/debugging-and-error-recovery/SKILL.md:75 — used here
- `Discover the Stack First` — skills/debugging-and-error-recovery/SKILL.md:75 — used here
- `Step 2: Localize` — skills/debugging-and-error-recovery/SKILL.md:87 — defined here
- `localize` — skills/debugging-and-error-recovery/SKILL.md:89 — defined here
- `bisection` — skills/debugging-and-error-recovery/SKILL.md:101 — defined here
- `git bisect` — skills/debugging-and-error-recovery/SKILL.md:104, 108 — used here
- `Step 3: Reduce` — skills/debugging-and-error-recovery/SKILL.md:111 — defined here
- `minimal failing case` — skills/debugging-and-error-recovery/SKILL.md:113 — defined here
- `minimal reproduction` — skills/debugging-and-error-recovery/SKILL.md:119 — defined here
- `Step 4: Fix the Root Cause` — skills/debugging-and-error-recovery/SKILL.md:121 — defined here
- `root cause` — skills/debugging-and-error-recovery/SKILL.md:121, 131, 295, 296 — defined here
- `symptom fix` — skills/debugging-and-error-recovery/SKILL.md:128 — defined here
- `root cause fix` — skills/debugging-and-error-recovery/SKILL.md:131 — defined here
- `Step 5: Guard Against Recurrence` — skills/debugging-and-error-recovery/SKILL.md:138 — defined here
- `regression test` — skills/debugging-and-error-recovery/SKILL.md:152, 287, 297 — defined here
- `Step 6: Verify End-to-End` — skills/debugging-and-error-recovery/SKILL.md:154 — defined here
- `Error-Specific Patterns` — skills/debugging-and-error-recovery/SKILL.md:172 — defined here
- `Test Failure Triage` — skills/debugging-and-error-recovery/SKILL.md:174 — defined here
- `flaky test` — skills/debugging-and-error-recovery/SKILL.md:184, 270 — defined here
- `Build Failure Triage` — skills/debugging-and-error-recovery/SKILL.md:188 — defined here
- `Runtime Error Triage` — skills/debugging-and-error-recovery/SKILL.md:199 — defined here
- `Safe Fallback Patterns` — skills/debugging-and-error-recovery/SKILL.md:214 — defined here
- `safe default` — skills/debugging-and-error-recovery/SKILL.md:219 — defined here
- `graceful degradation` — skills/debugging-and-error-recovery/SKILL.md:229 — defined here
- `Instrumentation Guidelines` — skills/debugging-and-error-recovery/SKILL.md:243 — defined here
- `permanent instrumentation` — skills/debugging-and-error-recovery/SKILL.md:257 — defined here
- `Common Rationalizations` — skills/debugging-and-error-recovery/SKILL.md:262 — defined here
- `Treating Error Output as Untrusted Data` — skills/debugging-and-error-recovery/SKILL.md:272 — defined here
- `untrusted data` — skills/debugging-and-error-recovery/SKILL.md:272, 274 — defined here
- `Red Flags` — skills/debugging-and-error-recovery/SKILL.md:281 — defined here
- `Verification` — skills/debugging-and-error-recovery/SKILL.md:291 — defined here

## Structure
- `# Debugging and Error Recovery` — skills/debugging-and-error-recovery/SKILL.md:6
- `## Overview` — skills/debugging-and-error-recovery/SKILL.md:8
- `## When to Use` — skills/debugging-and-error-recovery/SKILL.md:12
- `## The Stop-the-Line Rule` — skills/debugging-and-error-recovery/SKILL.md:21
- `## The Triage Checklist` — skills/debugging-and-error-recovery/SKILL.md:36
  - `### Step 1: Reproduce` — skills/debugging-and-error-recovery/SKILL.md:40
  - `### Step 2: Localize` — skills/debugging-and-error-recovery/SKILL.md:87
  - `### Step 3: Reduce` — skills/debugging-and-error-recovery/SKILL.md:111
  - `### Step 4: Fix the Root Cause` — skills/debugging-and-error-recovery/SKILL.md:121
  - `### Step 5: Guard Against Recurrence` — skills/debugging-and-error-recovery/SKILL.md:138
  - `### Step 6: Verify End-to-End` — skills/debugging-and-error-recovery/SKILL.md:154
- `## Error-Specific Patterns` — skills/debugging-and-error-recovery/SKILL.md:172
  - `### Test Failure Triage` — skills/debugging-and-error-recovery/SKILL.md:174
  - `### Build Failure Triage` — skills/debugging-and-error-recovery/SKILL.md:188
  - `### Runtime Error Triage` — skills/debugging-and-error-recovery/SKILL.md:199
- `## Safe Fallback Patterns` — skills/debugging-and-error-recovery/SKILL.md:214
- `## Instrumentation Guidelines` — skills/debugging-and-error-recovery/SKILL.md:243
- `## Common Rationalizations` — skills/debugging-and-error-recovery/SKILL.md:262
- `## Treating Error Output as Untrusted Data` — skills/debugging-and-error-recovery/SKILL.md:272
- `## Red Flags` — skills/debugging-and-error-recovery/SKILL.md:281
- `## Verification` — skills/debugging-and-error-recovery/SKILL.md:291

## Scripts — required if type is script or the skill ships scripts
none (The skill ships no executable scripts in `skills/debugging-and-error-recovery/`. Illustrative bash snippets like `npm test`, `git bisect`, and `npm run build` are documented for triage and verification workflows, but no automation scripts exist within the skill directory).

## Defects — required
- `doc-drift` · `README.md:262, docs/adoption-guide.md:83` vs `skills/debugging-and-error-recovery/SKILL.md:36-170` · The root README (`README.md:262`) and adoption guide (`docs/adoption-guide.md:83`) describe the skill as a "Five-step triage: reproduce, localize, reduce, fix, guard", but the actual skill implementation defines a 6-step triage checklist: `Step 1: Reproduce` (line 40), `Step 2: Localize` (line 87), `Step 3: Reduce` (line 111), `Step 4: Fix the Root Cause` (line 121), `Step 5: Guard Against Recurrence` (line 138), and `Step 6: Verify End-to-End` (line 154).

## Observations
- **Stop-the-Line Rule**: Adapts the lean manufacturing and agile "jidoka / stop-the-line" principle directly to agent workflows: when an unexpected failure occurs, stop adding features, preserve evidence, diagnose, fix root cause, guard with regression test, and resume only after verification passes.
- **Treating Error Output as Untrusted Data (Prompt Injection Defense)**: A critical security innovation for autonomous LLM agents: error output, stack traces, and logs from external or third-party sources may contain adversarial instructions (e.g., "run this command to fix", "visit this URL"). The skill explicitly instructs agents to treat error messages as passive data to analyze rather than executable instructions, requiring user confirmation before acting on instructions embedded in error text.
- **Triage Decision Trees**: Uses structured ASCII decision trees for non-reproducible bug triage (categorizing into timing-dependent, environment-dependent, state-dependent, and truly random) and failure layer localization (UI/Frontend, API/Backend, Database, Build tooling, External service, Test itself).
- **Safe Fallbacks vs Permanent Fixes**: Balances immediate business continuity under emergency pressure with architectural integrity via explicit fallback patterns (safe defaults + warning, graceful UI degradation) paired with postmortems.

## Context cost
- File size: 10,837 bytes (~2,709 tokens).
- Transitive context cost: Pure specification file; references `test-driven-development` conceptually (line 75) but does not transitively load external reference files. Base context cost is ~2,709 tokens.
```

---

## 2. Inventory Entry: `skills/using-agent-skills/SKILL.md`

```markdown
---
package: addy
path: skills/using-agent-skills/SKILL.md
type: skill
bytes: 10426
unit: inv-addy-13
---

# skills/using-agent-skills/SKILL.md

## Purpose — required, verbatim
> "Agent Skills is a collection of engineering workflow skills organized by development phase. Each skill encodes a specific process that senior engineers follow. This meta-skill helps you discover and apply the right skill for your current task." — skills/using-agent-skills/SKILL.md:10

*(Frontmatter description: "Discovers and invokes agent skills. Use when starting a session or when you need to discover which skill applies to the current task. This is the meta-skill that governs how all other skills are discovered and invoked." — skills/using-agent-skills/SKILL.md:3)*

## Design intent — required
Functions as the foundational meta-governor and operating constitution for the entire `agent-skills` ecosystem. Addresses the core failure modes of autonomous LLM agents: guessing without asking, silent assumptions, sycophantic agreement to bad technical proposals, needless over-engineering, orthogonal scope creep, and skipping verification. Provides a unified skill discovery decision tree routing incoming tasks across all 24 domain skills, establishes six non-negotiable core operating behaviors (Surface Assumptions, Manage Confusion Actively, Push Back When Warranted, Enforce Simplicity, Maintain Scope Discipline, Verify Don't Assume), catalogs ten subtle agent anti-patterns, defines a canonical 16-step linear lifecycle sequence for complete feature development, and binds every skill's local checks to the standing project-wide Definition of Done.

## Phase — required
`cross-phase` (meta-skill; README.md:377 classifies it as `Meta: how to use this pack`, orchestrating workflows across `addy:Define`, `addy:Plan`, `addy:Build`, `addy:Verify`, `addy:Review`, and `addy:Ship`)

## Inputs — required
- Incoming user tasks, feature requests, or session start prompts (skills/using-agent-skills/SKILL.md:14, 17)
- Task ambiguity, rough concepts, unwritten quality bars, and specification gaps (skills/using-agent-skills/SKILL.md:19-23)
- Engineering operational contexts: UI development, API design, context loading, doc verification, test failures, code review, security audits, migrations, and deployments (skills/using-agent-skills/SKILL.md:24-43)
- Specification inconsistencies and conflicting requirements encountered during execution (skills/using-agent-skills/SKILL.md:63-74)
- Definition of Done reference checklist at `../../references/definition-of-done.md` (skills/using-agent-skills/SKILL.md:114)

## Outputs — required
- Skill routing decisions dispatching tasks to specific domain skills (skills/using-agent-skills/SKILL.md:16-43, 168-192)
- Structured assumption disclosures using the `ASSUMPTIONS I'M MAKING:` template (skills/using-agent-skills/SKILL.md:51-60)
- Explicit clarification requests and trade-off presentations when confusion arises (skills/using-agent-skills/SKILL.md:63-74)
- Technical pushback, quantified downside analyses, and alternative proposals (skills/using-agent-skills/SKILL.md:75-85)
- Task completion verdicts evaluated against local acceptance criteria and project Definition of Done (skills/using-agent-skills/SKILL.md:110-115)

## Invokes — required
- reference references/definition-of-done.md — skills/using-agent-skills/SKILL.md:114
- skill interview-me — skills/using-agent-skills/SKILL.md:19, 146, 170
- skill idea-refine — skills/using-agent-skills/SKILL.md:20, 137, 147, 171
- skill spec-driven-development — skills/using-agent-skills/SKILL.md:21, 137, 140, 148, 172
- skill constraint-driven-development — skills/using-agent-skills/SKILL.md:22
- skill planning-and-task-breakdown — skills/using-agent-skills/SKILL.md:23, 137, 149, 173
- skill incremental-implementation — skills/using-agent-skills/SKILL.md:24, 137, 152, 174
- skill frontend-ui-engineering — skills/using-agent-skills/SKILL.md:25, 178
- skill api-and-interface-design — skills/using-agent-skills/SKILL.md:26, 179
- skill context-engineering — skills/using-agent-skills/SKILL.md:27, 150, 177
- skill source-driven-development — skills/using-agent-skills/SKILL.md:28, 151, 175
- skill doubt-driven-development — skills/using-agent-skills/SKILL.md:29, 154, 176
- skill test-driven-development — skills/using-agent-skills/SKILL.md:30, 137, 155, 164, 180
- skill browser-testing-with-devtools — skills/using-agent-skills/SKILL.md:31, 181
- skill debugging-and-error-recovery — skills/using-agent-skills/SKILL.md:32, 164, 182
- skill code-review-and-quality — skills/using-agent-skills/SKILL.md:33, 137, 156, 164, 183
- skill code-simplification — skills/using-agent-skills/SKILL.md:34, 137, 157, 184
- skill security-and-hardening — skills/using-agent-skills/SKILL.md:35, 185
- skill performance-optimization — skills/using-agent-skills/SKILL.md:36, 186
- skill git-workflow-and-versioning — skills/using-agent-skills/SKILL.md:37, 158, 187
- skill ci-cd-and-automation — skills/using-agent-skills/SKILL.md:38, 188
- skill deprecation-and-migration — skills/using-agent-skills/SKILL.md:39, 160, 189
- skill documentation-and-adrs — skills/using-agent-skills/SKILL.md:40, 159, 190
- skill observability-and-instrumentation — skills/using-agent-skills/SKILL.md:41, 153, 191
- skill shipping-and-launch — skills/using-agent-skills/SKILL.md:42, 137, 161, 192

## Invoked by — required
- hook hooks/session-start.sh — hooks/session-start.sh:3, 11, 27
- test hooks/session-start-test.sh — hooks/session-start-test.sh:33
- doc CONTRIBUTING.md — CONTRIBUTING.md:79, 84
- doc README.md — README.md:222, 228, 377
- doc docs/adoption-guide.md — docs/adoption-guide.md:31, 68, 124
- doc docs/comparison.md — docs/comparison.md:54
- doc docs/cursor-setup.md — docs/cursor-setup.md:43, 102, 144, 164
- doc docs/developer-onboarding.md — docs/developer-onboarding.md:68, 103, 112
- doc docs/getting-started.md — docs/getting-started.md:40
- evals evals/cases/test-driven-development.json — evals/cases/test-driven-development.json:25
- evals evals/cases/using-agent-skills.json — evals/cases/using-agent-skills.json:2, 34
- script scripts/lib/skill-lint.js — scripts/lib/skill-lint.js:58
- script scripts/validate-reference-links.js — scripts/validate-reference-links.js:12
- script scripts/validate-reference-links-test.js — scripts/validate-reference-links-test.js:48, 65, 83

## Concepts named — required, verbatim
- `using-agent-skills` — skills/using-agent-skills/SKILL.md:2 — defined here
- `meta-skill` — skills/using-agent-skills/SKILL.md:3, 10 — defined here
- `Using Agent Skills` — skills/using-agent-skills/SKILL.md:6 — defined here
- `Agent Skills` — skills/using-agent-skills/SKILL.md:10 — defined here
- `Skill Discovery` — skills/using-agent-skills/SKILL.md:12 — defined here
- `interview-me` — skills/using-agent-skills/SKILL.md:19, 146, 170 — used here
- `idea-refine` — skills/using-agent-skills/SKILL.md:20, 137, 147, 171 — used here
- `spec-driven-development` — skills/using-agent-skills/SKILL.md:21, 137, 140, 148, 172 — used here
- `constraint-driven-development` — skills/using-agent-skills/SKILL.md:22, 172 — used here
- `planning-and-task-breakdown` — skills/using-agent-skills/SKILL.md:23, 137, 149, 173 — used here
- `incremental-implementation` — skills/using-agent-skills/SKILL.md:24, 137, 152, 174 — used here
- `frontend-ui-engineering` — skills/using-agent-skills/SKILL.md:25, 178 — used here
- `api-and-interface-design` — skills/using-agent-skills/SKILL.md:26, 179 — used here
- `context-engineering` — skills/using-agent-skills/SKILL.md:27, 150, 177 — used here
- `source-driven-development` — skills/using-agent-skills/SKILL.md:28, 151, 175 — used here
- `doubt-driven-development` — skills/using-agent-skills/SKILL.md:29, 154, 176 — used here
- `test-driven-development` — skills/using-agent-skills/SKILL.md:30, 137, 155, 164, 180 — used here
- `browser-testing-with-devtools` — skills/using-agent-skills/SKILL.md:31, 181 — used here
- `debugging-and-error-recovery` — skills/using-agent-skills/SKILL.md:32, 164, 182 — used here
- `code-review-and-quality` — skills/using-agent-skills/SKILL.md:33, 137, 156, 164, 183 — used here
- `code-simplification` — skills/using-agent-skills/SKILL.md:34, 137, 157, 184 — used here
- `security-and-hardening` — skills/using-agent-skills/SKILL.md:35, 185 — used here
- `performance-optimization` — skills/using-agent-skills/SKILL.md:36, 186 — used here
- `git-workflow-and-versioning` — skills/using-agent-skills/SKILL.md:37, 158, 187 — used here
- `ci-cd-and-automation` — skills/using-agent-skills/SKILL.md:38, 188 — used here
- `deprecation-and-migration` — skills/using-agent-skills/SKILL.md:39, 160, 189 — used here
- `documentation-and-adrs` — skills/using-agent-skills/SKILL.md:40, 159, 190 — used here
- `observability-and-instrumentation` — skills/using-agent-skills/SKILL.md:41, 153, 191 — used here
- `shipping-and-launch` — skills/using-agent-skills/SKILL.md:42, 137, 161, 192 — used here
- `Core Operating Behaviors` — skills/using-agent-skills/SKILL.md:45 — defined here
- `Surface Assumptions` — skills/using-agent-skills/SKILL.md:49 — defined here
- `ASSUMPTIONS I'M MAKING` — skills/using-agent-skills/SKILL.md:54 — defined here
- `Manage Confusion Actively` — skills/using-agent-skills/SKILL.md:63 — defined here
- `Push Back When Warranted` — skills/using-agent-skills/SKILL.md:75 — defined here
- `sycophancy` — skills/using-agent-skills/SKILL.md:84, 124 — defined here
- `Enforce Simplicity` — skills/using-agent-skills/SKILL.md:86 — defined here
- `Maintain Scope Discipline` — skills/using-agent-skills/SKILL.md:97 — defined here
- `Verify, Don't Assume` — skills/using-agent-skills/SKILL.md:110 — defined here
- `Definition of Done` — skills/using-agent-skills/SKILL.md:114 — used here
- `acceptance criteria` — skills/using-agent-skills/SKILL.md:115 — used here
- `Failure Modes to Avoid` — skills/using-agent-skills/SKILL.md:116 — defined here
- `Skill Rules` — skills/using-agent-skills/SKILL.md:131 — defined here
- `Lifecycle Sequence` — skills/using-agent-skills/SKILL.md:141 — defined here
- `Quick Reference` — skills/using-agent-skills/SKILL.md:166 — defined here
- `Define` (phase) — skills/using-agent-skills/SKILL.md:170-172 — used here
- `Plan` (phase) — skills/using-agent-skills/SKILL.md:173 — used here
- `Build` (phase) — skills/using-agent-skills/SKILL.md:174-179 — used here
- `Verify` (phase) — skills/using-agent-skills/SKILL.md:180-182 — used here
- `Review` (phase) — skills/using-agent-skills/SKILL.md:183-186 — used here
- `Ship` (phase) — skills/using-agent-skills/SKILL.md:187-192 — used here

## Structure
- `# Using Agent Skills` — skills/using-agent-skills/SKILL.md:6
- `## Overview` — skills/using-agent-skills/SKILL.md:8
- `## Skill Discovery` — skills/using-agent-skills/SKILL.md:12
- `## Core Operating Behaviors` — skills/using-agent-skills/SKILL.md:45
  - `### 1. Surface Assumptions` — skills/using-agent-skills/SKILL.md:49
  - `### 2. Manage Confusion Actively` — skills/using-agent-skills/SKILL.md:63
  - `### 3. Push Back When Warranted` — skills/using-agent-skills/SKILL.md:75
  - `### 4. Enforce Simplicity` — skills/using-agent-skills/SKILL.md:86
  - `### 5. Maintain Scope Discipline` — skills/using-agent-skills/SKILL.md:97
  - `### 6. Verify, Don't Assume` — skills/using-agent-skills/SKILL.md:110
- `## Failure Modes to Avoid` — skills/using-agent-skills/SKILL.md:116
- `## Skill Rules` — skills/using-agent-skills/SKILL.md:131
- `## Lifecycle Sequence` — skills/using-agent-skills/SKILL.md:141
- `## Quick Reference` — skills/using-agent-skills/SKILL.md:166

## Scripts — required if type is script or the skill ships scripts
none (The skill ships no executable scripts in `skills/using-agent-skills/`. Note: repository session hook `hooks/session-start.sh` injects this skill's text into session start contexts, and is tested by `hooks/session-start-test.sh`, but no scripts are colocated in the skill directory).

## Defects — required
- `doc-drift` / `internal-contradiction` · `skills/using-agent-skills/SKILL.md:146-162` vs `skills/using-agent-skills/SKILL.md:19-42, 168-192` · In the `Lifecycle Sequence` section (lines 146-162), only 16 skills are sequenced for a complete feature lifecycle. 8 catalog skills are omitted from the linear sequence: `constraint-driven-development` (Define), `frontend-ui-engineering` (Build), `api-and-interface-design` (Build), `browser-testing-with-devtools` (Verify), `debugging-and-error-recovery` (Verify - noted at line 164 as bug fix flow), `security-and-hardening` (Review), `performance-optimization` (Review), and `ci-cd-and-automation` (Ship).
- `doc-drift` / `other` · `skills/using-agent-skills/SKILL.md:1` vs `docs/skill-anatomy.md:37-73` and `scripts/lib/skill-lint.js:57-58` · `using-agent-skills` deviates entirely from the standard 5-section skill anatomy (`When to Use`, `Common Rationalizations`, `Red Flags`, `Verification`), requiring a hardcoded validator exemption in `scripts/lib/skill-lint.js:58` (`'using-agent-skills': 'Meta-skill — orchestrates other skills; When-to-Use and Verification are not applicable to a routing document.'`). Instead, it substitutes `Core Operating Behaviors` and `Failure Modes to Avoid`.
- `doc-drift` · `skills/using-agent-skills/SKILL.md:114` vs `docs/skill-anatomy.md:111-119` · `using-agent-skills/SKILL.md:114` links to `../../references/definition-of-done.md`. As acknowledged in `docs/skill-anatomy.md:117`, single-skill installation tools (`npx addy-skills add using-agent-skills`) copy only `skills/using-agent-skills/`, leaving shared root `references/` behind and causing broken markdown links at runtime.

## Observations
- **Constitutional Meta-Skill Pattern**: Rather than implementing domain technical logic, this skill acts as an overarching meta-orchestrator. It is injected into every Claude Code session automatically via `hooks/session-start.sh`.
- **Anti-Sycophancy & Intellectual Honesty Directives**: Explicitly commands the agent to avoid "yes-machine" behavior (`Push Back When Warranted`), quantify downsides (e.g. latency numbers), and prefer honest technical disagreement over sycophancy.
- **Progressive Disclosure vs Universal Injection**: Injected globally via SessionStart, which incurs an upfront static context overhead of ~2,607 tokens (10,426 bytes) at the start of every session, contrasting with the progressive disclosure model prescribed in `docs/skill-anatomy.md` where skills are loaded only on demand.
- **Universal Guardrails**: Establishes project-wide behaviors that apply regardless of active skill: surfacing assumptions before execution, asking clarifying questions when confused instead of guessing, enforcing simplicity against over-engineering, and maintaining strict surgical scope boundaries.

## Context cost
- File size: 10,426 bytes (~2,607 tokens).
- Transitive context cost: References `references/definition-of-done.md` (3,798 bytes, ~950 tokens). Total combined context if DoD is loaded is 14,224 bytes (~3,557 tokens). Static session injection via `hooks/session-start.sh` consumes ~2,607 tokens at session start.
```
