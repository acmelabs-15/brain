---
package: rjm
path: .claude/skills/code-qualities-assessment/SKILL.md
type: skill
bytes: 15739
unit: inv-rjm-102
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/SKILL.md, sha256: 92c1271c4a9726507f862f17ef0d5bfc04e8db8d553df367cb239a66771c247f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/code-qualities-assessment/SKILL.md

## Purpose — required, verbatim
> "Evaluate code maintainability using 5 timeless design qualities with quantifiable scoring rubrics." — .claude/skills/code-qualities-assessment/SKILL.md:10

## Design intent — required
Provides an automated, quantifiable, language-agnostic code quality gate and evaluation framework focused on five foundational maintainability qualities (cohesion, coupling, encapsulation, testability, and non-redundancy). Without this skill, code quality reviews across diverse programming languages would rely solely on subjective, ad-hoc reviewer opinions or noisy static analysis linters that fail to measure architectural maintainability trends, detect regressions against base branches, or enforce objective thresholds in CI pipelines and pre-merge workflows.

## Phase — required
cross-phase

## Inputs — required
- Target path, directory, or glob:
  - `--target` — .claude/skills/code-qualities-assessment/SKILL.md:120
- Execution and scoring options:
  - `--context` — .claude/skills/code-qualities-assessment/SKILL.md:121
  - `--changed-only` — .claude/skills/code-qualities-assessment/SKILL.md:122
  - `--base` — .claude/skills/code-qualities-assessment/SKILL.md:123
  - `--gate-mode` — .claude/skills/code-qualities-assessment/SKILL.md:124
  - `--regression-tolerance` — .claude/skills/code-qualities-assessment/SKILL.md:125
  - `--format` — .claude/skills/code-qualities-assessment/SKILL.md:126
  - `--config` — .claude/skills/code-qualities-assessment/SKILL.md:127
  - `--output` — .claude/skills/code-qualities-assessment/SKILL.md:128
  - `--use-serena` — .claude/skills/code-qualities-assessment/SKILL.md:129
- Configuration file:
  - `.qualityrc.json` — .claude/skills/code-qualities-assessment/SKILL.md:127
- Git diff and history when `--changed-only` and `--base` are specified:
  - `git diff --name-status -M -z base...HEAD` — .claude/skills/code-qualities-assessment/SKILL.md:148
  - Base blobs retrieved via `git show` at merge base — .claude/skills/code-qualities-assessment/SKILL.md:146
- Serena symbol extraction (if available — .claude/skills/code-qualities-assessment/SKILL.md:84)

## Outputs — required
- Assessment reports:
  - Markdown format report — .claude/skills/code-qualities-assessment/SKILL.md:126
  - JSON format report containing `gate_mode` and `comparisons` array — .claude/skills/code-qualities-assessment/SKILL.md:180
  - HTML format report — .claude/skills/code-qualities-assessment/SKILL.md:126
- Exit codes:
  - `0` ("Gate passed" — .claude/skills/code-qualities-assessment/SKILL.md:187)
  - `10` ("Regression mode: a comparable quality regressed, or scored evidence was lost" — .claude/skills/code-qualities-assessment/SKILL.md:188)
  - `11` ("Below configured thresholds (absolute mode, or a new file in regression mode)" — .claude/skills/code-qualities-assessment/SKILL.md:189)
  - `1` ("Script error (invalid args, unresolvable base, file not found)" — .claude/skills/code-qualities-assessment/SKILL.md:190)

## Invokes — required
- script scripts/assess.py — .claude/skills/code-qualities-assessment/SKILL.md:41
- reference calibration-examples.md — .claude/skills/code-qualities-assessment/SKILL.md:444
- reference refactoring-patterns.md — .claude/skills/code-qualities-assessment/SKILL.md:445
- reference dotnet-performance-patterns.md — .claude/skills/code-qualities-assessment/SKILL.md:446
- template .qualityrc.json — .claude/skills/code-qualities-assessment/SKILL.md:196
- skill analyze — .claude/skills/code-qualities-assessment/SKILL.md:70
- skill review — .claude/skills/code-qualities-assessment/SKILL.md:3
- skill quality-grades — .claude/skills/code-qualities-assessment/SKILL.md:3

## Invoked by — required
- command build — .claude/commands/build.md:67
- command test — .claude/commands/test.md:43
- skill review — .claude/skills/review/SKILL.md:99
- doc workflow-commands.md — docs/workflow-commands.md:104
- agent quality-auditor — .claude/agents/quality-auditor.md:3

## Concepts named — required, verbatim
- `code-qualities-assessment` — .claude/skills/code-qualities-assessment/SKILL.md:2 — defined here
- `cohesion` — .claude/skills/code-qualities-assessment/SKILL.md:3 — defined here
- `coupling` — .claude/skills/code-qualities-assessment/SKILL.md:3 — defined here
- `encapsulation` — .claude/skills/code-qualities-assessment/SKILL.md:3 — defined here
- `testability` — .claude/skills/code-qualities-assessment/SKILL.md:3 — defined here
- `non-redundancy` — .claude/skills/code-qualities-assessment/SKILL.md:3 — defined here
- `review` — .claude/skills/code-qualities-assessment/SKILL.md:3 — used here
- `quality-grades` — .claude/skills/code-qualities-assessment/SKILL.md:3 — used here
- `analyze` — .claude/skills/code-qualities-assessment/SKILL.md:70 — used here
- `Symbol Extraction` — .claude/skills/code-qualities-assessment/SKILL.md:82 — defined here
- `Quality Scoring` — .claude/skills/code-qualities-assessment/SKILL.md:87 — defined here
- `Comparison` — .claude/skills/code-qualities-assessment/SKILL.md:92 — defined here
- `Report Generation` — .claude/skills/code-qualities-assessment/SKILL.md:96 — defined here
- `Gate Enforcement` — .claude/skills/code-qualities-assessment/SKILL.md:101 — defined here
- `regression` — .claude/skills/code-qualities-assessment/SKILL.md:137 — defined here
- `absolute` — .claude/skills/code-qualities-assessment/SKILL.md:138 — defined here
- `DRY` — .claude/skills/code-qualities-assessment/SKILL.md:311 — used here
- `planner` — .claude/skills/code-qualities-assessment/SKILL.md:399 — used here
- `adr-review` — .claude/skills/code-qualities-assessment/SKILL.md:410 — used here
- `Sergeant` — .claude/skills/code-qualities-assessment/SKILL.md:475 — defined here
- `Privates` — .claude/skills/code-qualities-assessment/SKILL.md:476 — defined here
- `TDD` — .claude/skills/code-qualities-assessment/SKILL.md:486 — used here

## Structure
- # Code Qualities Assessment
- ## Triggers
- ## Quick Start
- ## Scripts
- ## The 5 Code Qualities
- ## When to Use
- ## Process
- ## Command Reference
- ### Basic Usage
- ### Parameters
- ### Gate Modes
- ### Exit Codes
- ## Configuration
- ## Anti-Patterns
- ## Verification
- ### Cohesion
- ### Coupling
- ### Encapsulation
- ### Testability
- ### Non-Redundancy
- ### Example 1: Single File Assessment
- ### Example 2: CI Integration
- ### Example 3: Full Codebase Report
- ### With planner
- ### With adr-review
- ### With analyze
- ## References
- ## Language Support
- ## Design Philosophy
- ### Timelessness: 9/10

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/code-qualities-assessment/scripts/assess.py`, language: Python, lines: 1731
- documented invocation: `python3 .claude/skills/code-qualities-assessment/scripts/assess.py --target "$TARGET_PATH"` — .claude/skills/code-qualities-assessment/SKILL.md:239
- **executed:** yes
- actual command run: `python3 .claude/skills/code-qualities-assessment/scripts/assess.py --target .claude/skills/code-qualities-assessment/SKILL.md`, abridged stdout: `# Code Quality Assessment Report\n## Summary\nFiles Assessed: 1\nAverage Cohesion: n/a\n...`, **actual exit code:** 0
- actual command run: `python3 .claude/skills/code-qualities-assessment/scripts/assess.py --target .claude/skills/code-qualities-assessment/scripts/assess.py`, abridged stdout: `❌ .../assess.py: Cohesion 1.0 < 7\n# Code Quality Assessment Report\n## Summary\nFiles Assessed: 1\nAverage Cohesion: 1.0/10...`, **actual exit code:** 11
- documented exit codes:
  - `0` ("Gate passed" — .claude/skills/code-qualities-assessment/SKILL.md:187) vs actual exit: line 1079 (via `check_thresholds` line 1485), line 1700
  - `10` ("Regression mode: a comparable quality regressed, or scored evidence was lost" — .claude/skills/code-qualities-assessment/SKILL.md:188) vs actual exit: line 1078
  - `11` ("Below configured thresholds (absolute mode, or a new file in regression mode)" — .claude/skills/code-qualities-assessment/SKILL.md:189) vs actual exit: line 1079 (via `check_thresholds` lines 1506, 1517, 1530)
  - `1` ("Script error (invalid args, unresolvable base, file not found)" — .claude/skills/code-qualities-assessment/SKILL.md:190) vs actual exit: line 1683, 1686, 1697, 1702, 1715
- for validators/gates: can exit non-zero (exits 10 on regression, 11 on threshold breach, 1 on script error). When run on the default branch against its own `assess.py`, it fails with exit code 11 because `assess.py` scores Cohesion 1.0 < 7.
- does output match documentation: Partially. Basic scoring and markdown output match, but `--format html` prints "HTML format not yet implemented" despite documentation claiming full HTML dashboard generation.

## Defects — required
- `doc-drift` · .claude/skills/code-qualities-assessment/SKILL.md:32 · Claims `--format html --output quality-report.html` produces an HTML dashboard report, but `scripts/assess.py:1619` returns `"HTML format not yet implemented"`.
- `missing-path` · .claude/skills/code-qualities-assessment/SKILL.md:352 · Cites `Related ADR: ADR-023 (Dependency Management)`, but `ADR-023` in `.agents/architecture/` is actually `ADR-023-quality-gate-prompt-testing.md`.
- `doc-drift` · .claude/skills/code-qualities-assessment/SKILL.md:476 · Describes architecture as delegating to "Privates (score_*.py): Focus on one quality each, report back", but no `score_*.py` files exist in the skill.
- `doc-drift` · .claude/skills/code-qualities-assessment/SKILL.md:248 · Verification checklist claims "Historical data saved to .quality-cache/", but `assess.py` contains no cache persistence logic and compares git merge-base blobs directly.

## Observations
- Language-agnostic heuristic scoring for 5 timeless maintainability principles (cohesion, coupling, encapsulation, testability, non-redundancy) across 5 primary languages (Python, TS/JS, C#, Java, Go) and 4 partial languages (Ruby, Rust, PHP, Kotlin).
- Regression gate mode compares head revisions against merge base blobs via `git show` rather than against the tip of base, preventing false-positive gate failures on changes merged to main after branching.
- Heuristic cohesion formula `10 - LOC/120 - 0.3 * (definitions - 1)` penalizes file growth (LOC and definition count) rather than measuring actual semantic cohesion (LCOM), which the documentation acknowledges may drop by 1.7 points from benign additions.

## Context cost
File size: 15,739 bytes (~3,935 tokens). Loads `templates/.qualityrc.json` (660 bytes), `references/calibration-examples.md` (11,720 bytes), `references/dotnet-performance-patterns.md` (4,165 bytes), `references/refactoring-patterns.md` (11,074 bytes), and `scripts/assess.py` (61,607 bytes). Total context cost: 104,965 bytes (~26,240 tokens).
