---
package: rjm
path: scripts/validation/check_build_gates.py
type: script
bytes: 7655
unit: inv-rjm-276
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_build_gates.py, sha256: df1360e6ff865be7eecb97ece1f78d0979415b85c87ea4e19cf9b693ee511102}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_build_gates.py

## Purpose — required, verbatim
> "Static check that ``.claude/commands/build.md`` wires the required exit gates." — scripts/validation/check_build_gates.py:2

## Design intent — required
Pins the mandatory exit gate contract on `.claude/commands/build.md` to eliminate the "iteration paradox" identified in Layer 2 of PR #1887 retrospective analysis. Previously, code quality skills (`code-qualities-assessment`, `taste-lints`, `doc-accuracy`) were invoke-on-demand and advisory, allowing implementers to skip quality validation and leave review bots to catch defects that should have been resolved before handoff. This validator ensures at CI merge-time that `build.md` explicitly specifies a `## Mandatory Exit Gates` section heading, statically invokes all three mandatory exit skills via `Skill(skill="<name>")`, and requires `code-qualities-assessment` to pass regression flags (`--changed-only --base origin/main --gate-mode regression`) so pre-existing inherited debt does not fail local builds. Without it, regressions or accidental edits to `build.md` would drop quality enforcement from the implementer's exit path.

## Phase — required
rjm:test

## Inputs — required
- CLI arguments parsed via `_build_parser()`:
  - `--repo-root`: Repository root path (default: three levels above script, `Path(__file__).resolve().parent.parent.parent` — scripts/validation/check_build_gates.py:201)
- On-disk command file:
  - `.claude/commands/build.md` located via `_BUILD_MD_RELPATH` and read in UTF-8 (scripts/validation/check_build_gates.py:61, 111, 116)

## Outputs — required
- Standard output reports:
  - Pass report: "[PASS] All required exit gates present in" — scripts/validation/check_build_gates.py:216
  - Formatted failure report when violations exist: `BUILD GATE VIOLATIONS:` followed by per-violation messages formatted via `_format_violations` (scripts/validation/check_build_gates.py:176, 213)
- Standard error diagnostics:
  - Configuration errors when repo root is invalid (`[FAIL] Invalid repo root: <path>`) or `build.md` is missing or unreadable (`[FAIL] <error>`) — scripts/validation/check_build_gates.py:203, 209

## Invokes — required
- command build.md — scripts/validation/check_build_gates.py:61
- skill code-qualities-assessment — scripts/validation/check_build_gates.py:40
- skill taste-lints — scripts/validation/check_build_gates.py:44
- skill doc-accuracy — scripts/validation/check_build_gates.py:48

## Invoked by — required
- script scripts/validation/checks_spec.py — scripts/validation/checks_spec.py:38

## Concepts named — required, verbatim
- `exit gates` — scripts/validation/check_build_gates.py:2 — defined here
- `exit path` — scripts/validation/check_build_gates.py:4 — defined here
- `iteration paradox` — scripts/validation/check_build_gates.py:55 — used here
- `code-qualities-assessment` — scripts/validation/check_build_gates.py:6 — used here
- `taste-lints` — scripts/validation/check_build_gates.py:7 — used here
- `doc-accuracy` — scripts/validation/check_build_gates.py:7 — used here
- `invoke-on-demand` — scripts/validation/check_build_gates.py:7 — used here
- `ADR-035` — scripts/validation/check_build_gates.py:16 — used here
- `_REQUIRED_GATES` — scripts/validation/check_build_gates.py:38 — defined here
- `_MANDATORY_SECTION` — scripts/validation/check_build_gates.py:56 — defined here
- `_BUILD_MD_RELPATH` — scripts/validation/check_build_gates.py:61 — defined here
- `GateViolation` — scripts/validation/check_build_gates.py:65 — defined here
- `_option_value` — scripts/validation/check_build_gates.py:73 — defined here
- `_has_regression_arguments` — scripts/validation/check_build_gates.py:88 — defined here
- `--changed-only` — scripts/validation/check_build_gates.py:95 — used here
- `--gate-mode` — scripts/validation/check_build_gates.py:97 — used here
- `regression` — scripts/validation/check_build_gates.py:97 — used here
- `collect_violations` — scripts/validation/check_build_gates.py:103 — defined here
- `_format_violations` — scripts/validation/check_build_gates.py:176 — defined here
- `_build_parser` — scripts/validation/check_build_gates.py:183 — defined here
- `--repo-root` — scripts/validation/check_build_gates.py:188 — defined here

## Structure
- Module docstring detailing PR #1887 retrospective context and ADR-035 exit codes: lines 1-20
- Required gate regex patterns and section anchors (`_REQUIRED_GATES`, `_MANDATORY_SECTION`): lines 22-61
- Data class `GateViolation`: lines 64-70
- CLI option parsing helper `_option_value`: lines 73-85
- Regression flag verifier `_has_regression_arguments`: lines 88-100
- Violation collector `collect_violations`: lines 103-173
- Formatter `_format_violations`: lines 176-180
- Argument parser `_build_parser`: lines 183-194
- Main entry point: lines 197-222

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_build_gates.py`, language: Python 3, lines: 222
- documented invocation:
  - `python3 scripts/validation/check_build_gates.py` — scripts/validation/checks_spec.py:38
  - `--repo-root` — scripts/validation/check_build_gates.py:188
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - `python3 scripts/validation/check_build_gates.py`
    - stdout: `[PASS] All required exit gates present in .claude/commands/build.md`
    - exit code: 0
  - `python3 scripts/validation/check_build_gates.py --repo-root /tmp`
    - stderr: `[FAIL] missing build.md at /tmp/.claude/commands/build.md`
    - exit code: 2
- documented exit codes vs. actual exit paths in code:
  - Documented:
    - `0 - All required gates present.` — scripts/validation/check_build_gates.py:17
    - `1 - One or more required gates missing.` — scripts/validation/check_build_gates.py:18
    - `2 - Configuration error (build.md missing or unreadable).` — scripts/validation/check_build_gates.py:19
  - Actual exit paths:
    - Exit 0: `return 0` on line 217 when `violations` list is empty
    - Exit 1: `return 1` on line 214 when `violations` list contains items
    - Exit 2: `return 2` on line 204 (invalid `repo_root`) or line 210 (`FileNotFoundError`, `OSError`, `UnicodeDecodeError`)
  - Result: Documented exit codes match actual code exit paths per ADR-035.
- for validators/gates:
  - can it exit non-zero? Yes, exits 1 when gates/sections/flags are missing in `build.md` and 2 on config/read errors.
  - does it fail on the source repo's own default branch? No, passes cleanly (`[PASS] All required exit gates present in .claude/commands/build.md`, exit 0).
- does the output match what the documentation claims? Yes, validates the three required skills and section heading.

## Defects — required
- `missing-path` — `scripts/validation/check_build_gates.py:5, 147` — Module docstring and error message reference `.agents/retrospective/2026-05-05-pr-1887-iteration-paradox.md` ("Layer 2 of the PR #1887 retrospective"), but the referenced retrospective file does not exist on disk in `.agents/retrospective/`.

## Observations
- The check does not execute the skills or verify runtime behavior; it verifies static wiring within the markdown slash-command definition (`.claude/commands/build.md`).
- Anchoring against `^##\s+Mandatory Exit Gates\b` ensures the gates cannot be relegated to advisory guidance, directly resolving the process defect cited from PR #1887.
- Argument inspection parses inline backtick blocks using `shlex.split` to verify that `code-qualities-assessment` includes `--changed-only`, `--base origin/main`, and `--gate-mode regression`.

## Context cost
7,655 bytes, 222 lines (~1,700 tokens). Reads `.claude/commands/build.md` (6,412 bytes). Total evaluation context cost ~14,067 bytes (~3,200 tokens).
