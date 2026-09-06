---
package: rjm
path: .claude/skills/golden-principles/scripts/scan_principles_core.py
type: script
bytes: 19011
unit: inv-rjm-123
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/golden-principles/scripts/scan_principles_core.py, sha256: 281c7740063bd71cd214eb615ad808b140663c2b079c523c7532c023f0f14638}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/golden-principles/scripts/scan_principles_core.py

## Purpose — required, verbatim
> "Core types, utilities, and git helpers for the golden-principles scanner." — .claude/skills/golden-principles/scripts/scan_principles_core.py:6

## Design intent — required
Implements the shared foundational data structures, constants, file traversal utilities, diff-scope analyzers, and git subprocess helpers for the golden principles scanner. It was split from `scan_principles.py` per issue #4028 to satisfy taste-lint line-count limits while preventing circular dependencies. It houses the dataclasses for `Violation` and `ScanResult`, safety checks against path traversal attacks (CWE-22) and argument injection (CWE-88), suppression comment parsers, ADR-080 model alias validators, and rule checkers for `script-language` (GP-001) and `agent-definition` (GP-004).

## Phase — required
cross-phase

## Inputs — required
- File paths passed for scanning or discovered via os.walk or git diff
- Git repository status and unified diff output (git diff --name-only, git diff -U0)
- Rule suppression comments in scanned files (# golden-principle: ignore <rule>)

## Outputs — required
- Dataclass instances `ScanResult` and `Violation` with error/warning counts and remediation instructions — .claude/skills/golden-principles/scripts/scan_principles_core.py:99-126

## Invokes — required
none

## Invoked by — required
- script scan_principles.py — .claude/skills/golden-principles/scripts/scan_principles.py:8

## Concepts named — required, verbatim
- `Exit codes` — .claude/skills/golden-principles/scripts/scan_principles_core.py:12 — defined here
- `EXIT_SUCCESS` — .claude/skills/golden-principles/scripts/scan_principles_core.py:25 — defined here
- `EXIT_ERROR` — .claude/skills/golden-principles/scripts/scan_principles_core.py:26 — defined here
- `EXIT_VIOLATIONS` — .claude/skills/golden-principles/scripts/scan_principles_core.py:27 — defined here
- `SUPPRESSION_PATTERN` — .claude/skills/golden-principles/scripts/scan_principles_core.py:28 — defined here
- `ALL_RULES` — .claude/skills/golden-principles/scripts/scan_principles_core.py:29 — defined here
- `Violation` — .claude/skills/golden-principles/scripts/scan_principles_core.py:35 — defined here
- `ScanResult` — .claude/skills/golden-principles/scripts/scan_principles_core.py:36 — defined here
- `script-language` — .claude/skills/golden-principles/scripts/scan_principles_core.py:60 — defined here
- `skill-frontmatter` — .claude/skills/golden-principles/scripts/scan_principles_core.py:61 — defined here
- `agent-definition` — .claude/skills/golden-principles/scripts/scan_principles_core.py:62 — defined here
- `yaml-logic` — .claude/skills/golden-principles/scripts/scan_principles_core.py:63 — defined here
- `actions-pinned` — .claude/skills/golden-principles/scripts/scan_principles_core.py:64 — defined here
- `ADR-080` — .claude/skills/golden-principles/scripts/scan_principles_core.py:70 — used here
- `GP-001` — .claude/skills/golden-principles/scripts/scan_principles_core.py:344 — used here
- `GP-003` — .claude/skills/golden-principles/scripts/scan_principles_core.py:375 — used here
- `GP-004` — .claude/skills/golden-principles/scripts/scan_principles_core.py:475 — used here

## Structure
- Module docstring and imports — .claude/skills/golden-principles/scripts/scan_principles_core.py:6-23
- Constants and patterns — .claude/skills/golden-principles/scripts/scan_principles_core.py:50-96
- Dataclasses — .claude/skills/golden-principles/scripts/scan_principles_core.py:98-126
- Path safety and file reading helpers — .claude/skills/golden-principles/scripts/scan_principles_core.py:128-183
- Git diff helpers — .claude/skills/golden-principles/scripts/scan_principles_core.py:185-328
- Rule checkers — .claude/skills/golden-principles/scripts/scan_principles_core.py:334-513

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/golden-principles/scripts/scan_principles_core.py`, language: Python, lines: 518
- documented invocation: none (imported by scan_principles.py; executed directly as python3 .claude/skills/golden-principles/scripts/scan_principles_core.py)
- **executed:** yes
- actual command run: `python3 .claude/skills/golden-principles/scripts/scan_principles_core.py`, stdout: (empty), **actual exit code:** 0
- documented exit codes: "0 = clean, 1 = script error, 10 = violations detected" — .claude/skills/golden-principles/scripts/scan_principles_core.py:13 vs. actual exit paths: module defines constants EXIT_SUCCESS = 0 (:50), EXIT_ERROR = 1 (:51), EXIT_VIOLATIONS = 10 (:52); no direct sys.exit calls in library module
- for validators/gates: core module is a library component; when imported by scan_principles.py, exits non-zero on violations or errors; running directly exits 0
- does the output match what the documentation claims? yes, loads cleanly with exit code 0

## Defects — required
- other · .claude/skills/golden-principles/scripts/scan_principles_core.py:2-5 · taste-lint suppression comment notes file length (518 lines) exceeds the 500-line ceiling due to git diff-line helpers, with tracked split pending.

## Observations
- Enforces strict security validation: `is_safe_path()` prevents directory traversal attacks (CWE-22) and `get_diff_files()` validates against argument injection (CWE-88) (.claude/skills/golden-principles/scripts/scan_principles_core.py:128-133, 227-228).
- Implements ADR-080 model alias validation for skill frontmatter, allowing only rolling aliases (`sonnet`, `opus`, `haiku`) and requiring `model-rationale` for cost-exception aliases (`haiku`) (.claude/skills/golden-principles/scripts/scan_principles_core.py:361-456).

## Context cost
19011 bytes. Approximately 4750 tokens.
