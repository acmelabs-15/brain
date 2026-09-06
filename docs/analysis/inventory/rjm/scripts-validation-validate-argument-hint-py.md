---
package: rjm
path: scripts/validation/validate_argument_hint.py
type: script
bytes: 11679
unit: inv-rjm-308
in_scope_via: scripts/validation/pre_pr_sequence.py
aliases: []
memo_inputs:
  - {path: scripts/validation/validate_argument_hint.py, sha256: dcebf02783a325f6f9bbecd680faf59a4b10fcb221a48721e06358a43f855b4c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/validate_argument_hint.py

## Purpose — required, verbatim
> "Validate ``argument-hint`` YAML frontmatter values." — scripts/validation/validate_argument_hint.py:2

## Design intent — required
Prevents GitHub Copilot CLI command-loading failures caused by unsafe or ambiguous `argument-hint` values in markdown frontmatter. GitHub Copilot CLI's internal YAML command loader parses bracket syntax more strictly than standard PyYAML: adjacent unquoted bracketed groups (such as `[foo] [bar]`) are parsed as adjacent flow sequence nodes resulting in fatal syntax errors at load time, and unquoted single bracketed values (such as `[VALUE]`) parse as YAML lists/sequences rather than string scalars. This validation gate scans markdown command definitions (`.claude/commands/`, `.github/prompts/`, `SKILL.md`, `src/copilot-cli/`), verifies that every `argument-hint` evaluates to a safe string scalar, catches unbalanced square brackets, forbids adjacent bracket groups, and suggests single-quoted remediation. It provides both a standalone CLI with globbing and path-traversal protection and a callable wrapper (`validate_argument_hint`) for shift-left pre-PR test runners.

## Phase — required
rjm:Verification

## Inputs — required
- Command-line arguments: `targets` (optional files, directories, or glob patterns), `--repo-root` (repository root path) — scripts/validation/validate_argument_hint.py:268, 277
- Scanned markdown files matching default scan surfaces (`.claude/commands/`, `.github/prompts/`, `**/SKILL.md`, `src/copilot-cli/`) — scripts/validation/validate_argument_hint.py:31, 189
- Git tracked file listing via `git ls-files` subprocess when available — scripts/validation/validate_argument_hint.py:202

## Outputs — required
- Standard output: violation diagnostic report emitting path, line, column, reason, and suggested single-quoted fix, or pass confirmation — scripts/validation/validate_argument_hint.py:290, 295
- Standard error: error message if repository root or target is missing — scripts/validation/validate_argument_hint.py:326, 332
- Exit code 0: All scanned argument-hint values are safe strings — scripts/validation/validate_argument_hint.py:12, 337
- Exit code 1: One or more argument-hint values are unsafe — scripts/validation/validate_argument_hint.py:13, 337
- Exit code 2: Configuration error (repository root not found or target not found) — scripts/validation/validate_argument_hint.py:14, 327, 333

## Invokes — required
none

## Invoked by — required
- script validate_argument_hint — scripts/validation/pre_pr_sequence.py:107
- script validate_argument_hint — scripts/validation/pre_pr.py:142

## Concepts named — required, verbatim
- `argument-hint` — scripts/validation/validate_argument_hint.py:2 — used here
- `Copilot CLI` — scripts/validation/validate_argument_hint.py:4 — used here
- `ADR-035` — scripts/validation/validate_argument_hint.py:10 — used here
- `ArgumentHintViolation` — scripts/validation/validate_argument_hint.py:43 — defined here
- `find_argument_hint_violations` — scripts/validation/validate_argument_hint.py:152 — defined here
- `validate_argument_hint` — scripts/validation/validate_argument_hint.py:298 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/validate_argument_hint.py`, language: python3, lines: 342
- documented invocation:
  `python3 scripts/validation/validate_argument_hint.py` — scripts/validation/validate_argument_hint.py:308
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `uv run python3 scripts/validation/validate_argument_hint.py`, stdout: `[PASS] All argument-hint values are safe strings in 575 scanned file(s).`, actual exit code: 0
  - Command without dependencies: `python3 scripts/validation/validate_argument_hint.py`, stderr: `ModuleNotFoundError: No module named 'yaml'`, actual exit code: 1
- documented exit codes vs. actual exit paths in code:
  - Documented:
    ```
        0 - All scanned argument-hint values are safe strings
        1 - One or more argument-hint values are unsafe
        2 - Config error
    ```
  - Actual exit paths:
    - `scripts/validation/validate_argument_hint.py:327`: `return 2` (repo root not a directory)
    - `scripts/validation/validate_argument_hint.py:333`: `return 2` (target file/directory not found)
    - `scripts/validation/validate_argument_hint.py:337`: `return 1 if violations else 0`
    - `scripts/validation/validate_argument_hint.py:341`: `raise SystemExit(main())`
- for validators/gates: can exit non-zero (exits 1 on unsafe frontmatter values, 2 on config error); passes with exit code 0 across 575 scanned files on clean repository checkout
- does the output match what the documentation claims: yes, scans argument-hint values and reports pass summary

## Defects — required
none

## Observations
Includes strict path traversal prevention (CWE-22) in `_resolve_target` (lines 234-237, 241-243), rejecting paths or glob expansions that resolve outside the repository root.

## Context cost
11679 bytes, approximately 2900 tokens.
