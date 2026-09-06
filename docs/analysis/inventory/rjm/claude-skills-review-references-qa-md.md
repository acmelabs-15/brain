---
package: rjm
path: .claude/skills/review/references/qa.md
type: reference
bytes: 14023
unit: inv-rjm-151
in_scope_via: .claude/skills/review/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/review/references/qa.md, sha256: bf74398ff1a5ffb8b34b3e7dbdf05d61223e7b750fe59520b2b862a52dfb0ef7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/review/references/qa.md

## Purpose — required, verbatim
> "You are a rigorous QA reviewer. Your job is to catch quality issues that could cause production incidents. Be skeptical and thorough." — .claude/skills/review/references/qa.md:10

## Design intent — required
Defines standards and verification checklists for the Quality Assurance review axis. It establishes strict rules for test coverage (requiring at least 1 unit test per new function and coverage of at least 2 edge case categories), code quality metrics (function length < 50 lines, cyclomatic complexity <= 10, DRY principles), error handling rigor (forbidding empty catch blocks, unhandled async errors, uncleaned resources), and regression risk assessment. It categorizes changes into PR types (CODE, WORKFLOW, CONFIG, DOCS, MIXED) and incorporates pre-executed test results (Pester, pytest) when available. Without this reference, PR evaluations would lack objective, measurable criteria for test sufficiency and error resilience, increasing the risk of production incidents from untested edge cases and silent failure swallowing.

## Phase — required
rjm:review

## Inputs — required
- Pull request diff prepended with `CONTEXT_MODE: [full|summary|partial]` header — .claude/skills/review/references/qa.md:14
- Changed files categorized by PR type (CODE, WORKFLOW, CONFIG, DOCS, MIXED) — .claude/skills/review/references/qa.md:54-60
- Pre-executed test results (Pester and pytest pass/fail counts) when available — .claude/skills/review/references/qa.md:82

## Outputs — required
- PR Type Classification block (`PR TYPE:`, `FILES:`) — .claude/skills/review/references/qa.md:163-166
- Test Coverage Assessment table (Unit tests, Edge cases, Error paths, Assertions) — .claude/skills/review/references/qa.md:172-178
- Quality Concerns table (Severity: BLOCKING/HIGH/MEDIUM/LOW, Issue, Location, Evidence, Required Fix) — .claude/skills/review/references/qa.md:181-184
- Regression Risk Assessment (Risk Level, Affected Components, Breaking Changes, Required Testing) — .claude/skills/review/references/qa.md:193-198
- Evidence block with test counts, execution status, edge cases, error handling, and blocking issues — .claude/skills/review/references/qa.md:265-271
- Human-readable Verdict (`VERDICT: [PASS|WARN|CRITICAL_FAIL]`, `MESSAGE: [One sentence summary]`) — .claude/skills/review/references/qa.md:260-261
- Fenced JSON output matching inline schema (`verdict`, `message`, `agent: "qa"`, `timestamp`, `findings` array) — .claude/skills/review/references/qa.md:288-304
- Parseable final verdict line matching regex — .claude/skills/review/references/qa.md:328-332

## Invokes — required
none

## Invoked by — required
- skill review — .claude/skills/review/SKILL.md:29

## Concepts named — required, verbatim
- `QA Review Task` — .claude/skills/review/references/qa.md:8 — defined here
- `Context Mode Enforcement` — .claude/skills/review/references/qa.md:12 — defined here
- `CONTEXT_MODE` — .claude/skills/review/references/qa.md:14 — used here
- `full` — .claude/skills/review/references/qa.md:18 — used here
- `summary` — .claude/skills/review/references/qa.md:20 — used here
- `partial` — .claude/skills/review/references/qa.md:22 — used here
- `manipulation-resistance control` — .claude/skills/review/references/qa.md:31 — used here
- `Grounding Rules` — .claude/skills/review/references/qa.md:36 — defined here
- `Evaluation Principles` — .claude/skills/review/references/qa.md:43 — defined here
- `PR Type Detection` — .claude/skills/review/references/qa.md:50 — defined here
- `CODE` — .claude/skills/review/references/qa.md:56 — defined here
- `WORKFLOW` — .claude/skills/review/references/qa.md:57 — defined here
- `CONFIG` — .claude/skills/review/references/qa.md:58 — defined here
- `DOCS` — .claude/skills/review/references/qa.md:59 — defined here
- `MIXED` — .claude/skills/review/references/qa.md:60 — defined here
- `Expected Patterns` — .claude/skills/review/references/qa.md:65 — defined here
- `Pre-executed Test Results` — .claude/skills/review/references/qa.md:80 — defined here
- `Test Coverage` — .claude/skills/review/references/qa.md:99 — defined here
- `Code Quality` — .claude/skills/review/references/qa.md:117 — defined here
- `Error Handling` — .claude/skills/review/references/qa.md:126 — defined here
- `Regression Risk` — .claude/skills/review/references/qa.md:137 — defined here
- `Edge Cases` — .claude/skills/review/references/qa.md:145 — defined here
- `PR Type Classification` — .claude/skills/review/references/qa.md:159 — defined here
- `Test Coverage Assessment` — .claude/skills/review/references/qa.md:168 — defined here
- `Quality Concerns` — .claude/skills/review/references/qa.md:179 — defined here
- `Regression Risk Assessment` — .claude/skills/review/references/qa.md:192 — defined here
- `Verdict Thresholds` — .claude/skills/review/references/qa.md:199 — defined here
- `CRITICAL_FAIL` — .claude/skills/review/references/qa.md:201 — used here
- `WARN` — .claude/skills/review/references/qa.md:232 — used here
- `PASS` — .claude/skills/review/references/qa.md:243 — used here
- `Evidence Requirements` — .claude/skills/review/references/qa.md:255 — defined here
- `Evidence Standards` — .claude/skills/review/references/qa.md:273 — defined here
- `Structured JSON Output` — .claude/skills/review/references/qa.md:284 — defined here
- `Output Schema` — .claude/skills/review/references/qa.md:306 — defined here

## Structure
- `# QA Review Task` — .claude/skills/review/references/qa.md:8
- `## Context Mode Enforcement (REQUIRED)` — .claude/skills/review/references/qa.md:12
- `## Grounding Rules` — .claude/skills/review/references/qa.md:36
- `## Evaluation Principles` — .claude/skills/review/references/qa.md:43
- `## PR Type Detection (FIRST STEP)` — .claude/skills/review/references/qa.md:50
- `## Expected Patterns (Do NOT Flag)` — .claude/skills/review/references/qa.md:65
- `## Pre-executed Test Results` — .claude/skills/review/references/qa.md:80
- `## Analysis Focus Areas` — .claude/skills/review/references/qa.md:97
- `### 1. Test Coverage (For CODE and WORKFLOW PRs)` — .claude/skills/review/references/qa.md:99
- `### 2. Code Quality (For CODE PRs)` — .claude/skills/review/references/qa.md:117
- `### 3. Error Handling (For CODE PRs - CRITICAL)` — .claude/skills/review/references/qa.md:126
- `### 4. Regression Risk` — .claude/skills/review/references/qa.md:137
- `### 5. Edge Cases (For CODE PRs with user input)` — .claude/skills/review/references/qa.md:145
- `## Output Requirements` — .claude/skills/review/references/qa.md:157
- `### PR Type Classification (REQUIRED)` — .claude/skills/review/references/qa.md:159
- `### Test Coverage Assessment (For CODE/WORKFLOW PRs)` — .claude/skills/review/references/qa.md:168
- `### Quality Concerns (REQUIRED)` — .claude/skills/review/references/qa.md:179
- `### Regression Risk Assessment (REQUIRED)` — .claude/skills/review/references/qa.md:192
- `## Verdict Thresholds` — .claude/skills/review/references/qa.md:199
- `### CRITICAL_FAIL (Merge Blocked)` — .claude/skills/review/references/qa.md:201
- `#### For CODE and WORKFLOW PRs` — .claude/skills/review/references/qa.md:203
- `#### For DOCS-only PRs` — .claude/skills/review/references/qa.md:218
- `#### For CONFIG PRs` — .claude/skills/review/references/qa.md:225
- `### WARN (Proceed with Caution)` — .claude/skills/review/references/qa.md:232
- `### PASS (Standards Met)` — .claude/skills/review/references/qa.md:243
- `## Evidence Requirements` — .claude/skills/review/references/qa.md:255
- `## Evidence Standards (For CODE/WORKFLOW PRs)` — .claude/skills/review/references/qa.md:273
- `## Structured JSON Output` — .claude/skills/review/references/qa.md:284
- `## Output Schema` — .claude/skills/review/references/qa.md:306

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Differentiates between static test inspection and dynamic pre-executed test runner output (Pester for PowerShell, pytest for Python), incorporating concrete execution counts into verdict evidence.
- Quantitative thresholds for code quality: cyclomatic complexity <= 10 (aligning with CLAUDE.md), function length < 50 lines (hard FAIL if > 100 lines), and maximum 3 unexplained numeric/string literals.
- Rigorous error handling checklist with zero tolerance for swallowed exceptions or untested I/O/network failure paths.

## Context cost
14023 bytes (~3505 tokens). Standalone review prompt reference.
