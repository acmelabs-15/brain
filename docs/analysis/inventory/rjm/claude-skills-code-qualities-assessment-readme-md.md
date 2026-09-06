---
package: rjm
path: .claude/skills/code-qualities-assessment/README.md
type: skill
bytes: 2582
unit: inv-rjm-100
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/README.md, sha256: 7986954754bee5447b0a744ceccd2c0272ecf1966dd9dd85bc8df21031887d5e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/code-qualities-assessment/README.md

## Purpose — required, verbatim
> "Assess code maintainability through 5 foundational software engineering qualities." — .claude/skills/code-qualities-assessment/README.md:3

## Design intent — required
Provide a concise, developer-facing overview and quick-start entry point for the `code-qualities-assessment` skill. Summarizes the 5 foundational software design qualities (cohesion, coupling, encapsulation, testability, non-redundancy), presents directory layout and configuration options (`.qualityrc.json`), lists language support tiers (Python, TypeScript/JavaScript, C#, Java, Go fully supported; Ruby, Rust, PHP, Kotlin partially supported), provides CI/CD and pre-commit hook integration examples, and highlights the historical theoretical foundations of the 5 qualities spanning the 1960s to 1990s. Without this file, developers inspecting the skill directory would lack an immediate entry point explaining the skill's purpose, usage commands, file layout, and integration patterns without reading the much longer `SKILL.md` or inspecting `scripts/assess.py`.

## Phase — required
rjm:build

## Inputs — required
- Target file, directory, or glob pattern to assess (`--target`) — .claude/skills/code-qualities-assessment/README.md:9
- Git change indicators (`--changed-only`) for diff-scoped assessment — .claude/skills/code-qualities-assessment/README.md:12
- Project configuration file (`.qualityrc.json`) defining thresholds and ignore patterns — .claude/skills/code-qualities-assessment/README.md:43
- Cached git index paths via `git diff --cached --name-only` for pre-commit hooks — .claude/skills/code-qualities-assessment/README.md:83

## Outputs — required
- Assessment reports formatted as text/markdown to stdout — .claude/skills/code-qualities-assessment/README.md:84
- JSON output report files (e.g. `quality.json`) — .claude/skills/code-qualities-assessment/README.md:75
- HTML output report files (e.g. `report.html`) — .claude/skills/code-qualities-assessment/README.md:15

## Invokes — required
- script scripts/assess.py — .claude/skills/code-qualities-assessment/README.md:9
- script scripts/assess.py — .claude/skills/code-qualities-assessment/README.md:12
- script scripts/assess.py — .claude/skills/code-qualities-assessment/README.md:15
- doc SKILL.md — .claude/skills/code-qualities-assessment/README.md:30
- config .qualityrc.json — .claude/skills/code-qualities-assessment/README.md:35
- reference calibration-examples.md — .claude/skills/code-qualities-assessment/README.md:37
- reference refactoring-patterns.md — .claude/skills/code-qualities-assessment/README.md:38
- config .qualityrc.json — .claude/skills/code-qualities-assessment/README.md:43
- script scripts/assess.py — .claude/skills/code-qualities-assessment/README.md:71
- script scripts/assess.py — .claude/skills/code-qualities-assessment/README.md:82

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Cohesion` — .claude/skills/code-qualities-assessment/README.md:20 — defined here
- `Coupling` — .claude/skills/code-qualities-assessment/README.md:21 — defined here
- `Encapsulation` — .claude/skills/code-qualities-assessment/README.md:22 — defined here
- `Testability` — .claude/skills/code-qualities-assessment/README.md:23 — defined here
- `Non-Redundancy` — .claude/skills/code-qualities-assessment/README.md:24 — defined here
- `CI mode` — .claude/skills/code-qualities-assessment/README.md:11 — used here
- `.qualityrc.json` — .claude/skills/code-qualities-assessment/README.md:35 — used here
- `thresholds` — .claude/skills/code-qualities-assessment/README.md:47 — used here
- `CI/CD Pipeline` — .claude/skills/code-qualities-assessment/README.md:65 — used here
- `Pre-commit Hook` — .claude/skills/code-qualities-assessment/README.md:78 — used here
- `Timelessness` — .claude/skills/code-qualities-assessment/README.md:87 — used here
- `DRY` — .claude/skills/code-qualities-assessment/README.md:94 — used here

## Structure
- `# Code Qualities Assessment Skill` — .claude/skills/code-qualities-assessment/README.md:1
- `## Quick Start` — .claude/skills/code-qualities-assessment/README.md:5
- `## The 5 Qualities` — .claude/skills/code-qualities-assessment/README.md:18
- `## Files` — .claude/skills/code-qualities-assessment/README.md:26
- `## Configuration` — .claude/skills/code-qualities-assessment/README.md:41
- `## Language Support` — .claude/skills/code-qualities-assessment/README.md:58
- `## Integration Examples` — .claude/skills/code-qualities-assessment/README.md:63
- `### CI/CD Pipeline` — .claude/skills/code-qualities-assessment/README.md:65
- `### Pre-commit Hook` — .claude/skills/code-qualities-assessment/README.md:78
- `## Timelessness: 9/10` — .claude/skills/code-qualities-assessment/README.md:87
- `## License` — .claude/skills/code-qualities-assessment/README.md:98

## Scripts — required if type is script or the skill ships scripts
The skill ships `scripts/assess.py`:
- path: `.claude/skills/code-qualities-assessment/scripts/assess.py`, language: Python, lines: 1730
- documented invocation: `python3 scripts/assess.py --target src/services/auth.py` — .claude/skills/code-qualities-assessment/README.md:9
- **executed:** yes
- actual command run: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/code-qualities-assessment/scripts/assess.py --target /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/code-qualities-assessment/scripts/assess.py --format markdown`
- actual stdout (abridged):
  ```
  ❌ /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/code-qualities-assessment/scripts/assess.py: Cohesion 1.0 < 7
  # Code Quality Assessment Report
  ## Summary
  **Files Assessed**: 1
  **Average Cohesion**: 1.0/10
  **Average Coupling**: 1.0/10
  **Average Encapsulation**: 10.0/10
  **Average Testability**: 10.0/10
  **Average Non-Redundancy**: 7.3/10
  ```
- **actual exit code:** 11
- documented exit codes vs actual exit paths:
  In `scripts/assess.py`:
  - `sys.exit(0)` on gate pass (line 1667)
  - `sys.exit(10)` on regression detected (line 1673)
  - `sys.exit(11)` on thresholds not met (line 1676)
  - `sys.exit(1)` on configuration/argument errors (lines 1604, 1610, 1621)
- for validators/gates: can exit non-zero (exits 11 when thresholds fail, 10 on regression); on the source repo's own default branch running against itself it fails with exit code 11 due to cohesion 1.0 < 7 min threshold.
- does output match documentation claim: Yes, outputs markdown quality report with summary and per-file quality metrics.

## Defects — required
- doc-drift · .claude/skills/code-qualities-assessment/README.md:36 · Directory tree under `## Files` lists `references/calibration-examples.md` and `references/refactoring-patterns.md` but omits `references/dotnet-performance-patterns.md`, which exists in the references directory.
- other · .claude/skills/code-qualities-assessment/README.md:16 · Markdown syntax defect: code blocks close with ` ```text ` instead of standard markdown closing fence ` ``` ` (lines 16, 39, 56, 76, 85).
- doc-drift · .claude/skills/code-qualities-assessment/README.md:12 · CI mode example demonstrates `python3 scripts/assess.py --target . --changed-only --format json` without `--base`, but `SKILL.md:140` specifies `--gate-mode regression` requires both `--changed-only` and `--base`.
- orphan · .claude/skills/code-qualities-assessment/README.md:1 · No in-scope file or entry point directly invokes or references this README file; callers invoke the skill via `.claude/commands/build.md` and `.claude/skills/review/SKILL.md`.

## Observations
- Summarizes the historical academic and software engineering foundations of the 5 qualities: Parnas (1972) and Stevens (1974) for cohesion/coupling, 1960s OOP for encapsulation, 1990s-2000s TDD for testability, and Hunt & Thomas (1999) Pragmatic Programmer for DRY.
- Provides practical integrations for both CI/CD pipeline and pre-commit git hooks.
- Distinguishes language support tiers between full symbol/AST extraction and heuristic support.

## Context cost
2582 bytes (~645 tokens) for README.md.
Full bundled skill context across scripts, templates, references, and SKILL.md is 106297 bytes (~26574 tokens).
