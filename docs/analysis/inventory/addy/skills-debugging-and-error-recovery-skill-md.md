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

## Design intent — required
Prevents agents and developers from falling into reactive "debugging by guessing", premature patch-and-hope cycles under time pressure, and pushing past broken builds or failing tests. Solves the compounding error problem where superficial fixes mask root causes and introduce technical debt. Enforces disciplined error handling through the "Stop-the-Line" rule (halt feature development immediately when unexpected behavior occurs), structured progressive triage (reproduce → localize → reduce → fix root cause → guard with regression test → verify end-to-end), error-category trees (test, build, runtime), prompt-injection defenses (treating error output as untrusted diagnostic data rather than executable instructions), and safe fallback degradation patterns when operating under operational deadlines.

## Phase — required
addy:Verify

## Inputs — required
- Error indicators and triggers: failing tests after code changes, broken builds, runtime discrepancies, user bug reports, console/log errors, and regressions — skills/debugging-and-error-recovery/SKILL.md:14-19
- Runtime diagnostic data: error output, exception traces, server logs, network requests, console output, component render trees, and reproduction steps — skills/debugging-and-error-recovery/SKILL.md:27, 93-98, 203-212
- Git history context: commit history and known-good commit SHAs for bisection — skills/debugging-and-error-recovery/SKILL.md:104-109
- Target repository toolchain: repository-specific test runner, build scripts, and dev server commands — skills/debugging-and-error-recovery/SKILL.md:75-85, 156-170
- Execution environment state: Node/browser runtime versions, operating system, environment variables, test isolation/order flags, and database population state — skills/debugging-and-error-recovery/SKILL.md:61-68, 195-197

## Outputs — required
- Preserved failure evidence and diagnostic logs — skills/debugging-and-error-recovery/SKILL.md:27, 48
- Minimal reproducible failing test case or simplified reproduction payload — skills/debugging-and-error-recovery/SKILL.md:111-120
- Root cause diagnosis and identified architectural/code flaw — skills/debugging-and-error-recovery/SKILL.md:28, 121-137, 295
- Root-cause code fix addressing underlying mechanism rather than symptom — skills/debugging-and-error-recovery/SKILL.md:29, 121-137, 296
- Automated regression test that fails prior to fix and passes with fix — skills/debugging-and-error-recovery/SKILL.md:30, 138-153, 297
- Safe fallback implementation (safe defaults with warnings, graceful UI degradation) when under emergency time pressure — skills/debugging-and-error-recovery/SKILL.md:214-241
- End-to-end verification passing full test suite, typecheck/build, and spot checks — skills/debugging-and-error-recovery/SKILL.md:31, 154-170, 298-301

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
- config evals/cases/api-and-interface-design.json — evals/cases/api-and-interface-design.json:21
- config evals/cases/code-simplification.json — evals/cases/code-simplification.json:24
- config evals/cases/debugging-and-error-recovery.json — evals/cases/debugging-and-error-recovery.json:2, 35, 49
- config evals/cases/documentation-and-adrs.json — evals/cases/documentation-and-adrs.json:21
- config evals/cases/planning-and-task-breakdown.json — evals/cases/planning-and-task-breakdown.json:21
- config evals/cases/using-agent-skills.json — evals/cases/using-agent-skills.json:21
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
- `# Debugging and Error Recovery` (line 6)
- `## Overview` (line 8)
- `## When to Use` (line 12)
- `## The Stop-the-Line Rule` (line 21)
- `## The Triage Checklist` (line 36)
  - `### Step 1: Reproduce` (line 40)
  - `### Step 2: Localize` (line 87)
  - `### Step 3: Reduce` (line 111)
  - `### Step 4: Fix the Root Cause` (line 121)
  - `### Step 5: Guard Against Recurrence` (line 138)
  - `### Step 6: Verify End-to-End` (line 154)
- `## Error-Specific Patterns` (line 172)
  - `### Test Failure Triage` (line 174)
  - `### Build Failure Triage` (line 188)
  - `### Runtime Error Triage` (line 199)
- `## Safe Fallback Patterns` (line 214)
- `## Instrumentation Guidelines` (line 243)
- `## Common Rationalizations` (line 262)
- `## Treating Error Output as Untrusted Data` (line 272)
- `## Red Flags` (line 281)
- `## Verification` (line 291)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` · `README.md:262, docs/adoption-guide.md:83` vs `skills/debugging-and-error-recovery/SKILL.md:36-170` · The root README (`README.md:262`) and adoption guide (`docs/adoption-guide.md:83`) describe the skill as a "five-step triage (reproduce, localize, reduce, fix, guard)", but the actual skill implementation defines a 6-step triage checklist: `Step 1: Reproduce` (line 40), `Step 2: Localize` (line 87), `Step 3: Reduce` (line 111), `Step 4: Fix the Root Cause` (line 121), `Step 5: Guard Against Recurrence` (line 138), and `Step 6: Verify End-to-End` (line 154).

## Observations
- Stop-the-Line Rule: Adapts the lean manufacturing and agile "jidoka / stop-the-line" principle directly to agent workflows: when an unexpected failure occurs, stop adding features, preserve evidence, diagnose, fix root cause, guard with regression test, and resume only after verification passes.
- Treating Error Output as Untrusted Data (Prompt Injection Defense): A critical security innovation for autonomous LLM agents: error output, stack traces, and logs from external or third-party sources may contain adversarial instructions. The skill explicitly instructs agents to treat error messages as passive data to analyze rather than executable instructions, requiring user confirmation before acting on instructions embedded in error text.
- Triage Decision Trees: Uses structured ASCII decision trees for non-reproducible bug triage (categorizing into timing-dependent, environment-dependent, state-dependent, and truly random) and failure layer localization (UI/Frontend, API/Backend, Database, Build tooling, External service, Test itself).
- Safe Fallbacks vs Permanent Fixes: Balances immediate business continuity under emergency pressure with architectural integrity via explicit fallback patterns (safe defaults + warning, graceful UI degradation) paired with postmortems.

## Context cost
File size: 10,837 bytes (~2,709 tokens). Pure specification file; references `test-driven-development` conceptually (line 75) but does not transitively load external reference files. Base context cost is ~2,709 tokens.
