---
package: rjm
path: scripts/validation/check_adr_uniqueness.py
type: script
bytes: 5361
unit: inv-rjm-276
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_adr_uniqueness.py, sha256: 3edae483b4be86c2960b172be8a075d30959d47c1552eadc093b43e1fe2b0a4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_adr_uniqueness.py

## Purpose — required, verbatim
> "Verify ADR numbers under `.agents/architecture/` are unique." — scripts/validation/check_adr_uniqueness.py:2

## Design intent — required
Prevents identifier collision and race conditions during concurrent development of Architectural Decision Records (ADRs). When multiple PR branches are authored simultaneously, each branch independently selects the next sequential ADR number from `main`. When the first PR merges, the remaining branches collide, necessitating manual renumbering and cascading reference updates. This deterministic merge-time gate enforces zero-exception ADR number uniqueness across `.agents/architecture/` matching `ADR-NNN-<slug>.md` and provides CLI helper flags (`--print-next`, `--print-next-padded`) to calculate and emit the exact next free sequential integer for incoming ADR authoring. Without it, duplicate ADR numbers would land on `main`, corrupting architecture indices, documentation traceability, and downstream automated tooling.

## Phase — required
rjm:test

## Inputs — required
- CLI arguments parsed via `argparse`:
  - `--repo-root`: Repository root path (default: two levels above script, `Path(__file__).resolve().parents[2]` — scripts/validation/check_adr_uniqueness.py:88)
  - `--print-next`: Flag to print next free ADR integer and exit 0 (scripts/validation/check_adr_uniqueness.py:92)
  - `--print-next-padded`: Integer width to zero-pad next free number (default: 3 — scripts/validation/check_adr_uniqueness.py:98)
- Filesystem records under `.agents/architecture/`:
  - Files matching `ADR-*.md` scanned via `collect_adr_numbers` and filtered against `ADR_FILENAME_RE` (`r"^ADR-(\d{2,})-[^/]+\.md$"` — scripts/validation/check_adr_uniqueness.py:38)

## Outputs — required
- Standard output reports:
  - Formatted pass message: "[PASS] All ADR numbers in .agents/architecture/ unique " — scripts/validation/check_adr_uniqueness.py:141
  - Failure message and collision listing: "[FAIL] Duplicate ADR numbers detected (see issue #2253):" followed by per-collision items `  - ADR-<NNN>: <paths>` and remediation guidance — scripts/validation/check_adr_uniqueness.py:121
  - Helper output: Next free ADR number emitted to stdout when `--print-next` is passed — scripts/validation/check_adr_uniqueness.py:115
- Standard error diagnostics:
  - Configuration error when architecture directory is missing: "[CONFIG] ADR directory not found:" — scripts/validation/check_adr_uniqueness.py:108

## Invokes — required
none

## Invoked by — required
- skill ai-agents-docs-of-record — .claude/skills/ai-agents-docs-of-record/SKILL.md:30
- skill adr-generator — .claude/skills/adr-generator/SKILL.md:122
- script scripts/validation/check_adr_lifecycle.py — scripts/validation/check_adr_lifecycle.py:158

## Concepts named — required, verbatim
- `ADR` — scripts/validation/check_adr_uniqueness.py:2 — used here
- `allowlist` — scripts/validation/check_adr_uniqueness.py:15 — used here
- `ADR-035` — scripts/validation/check_adr_uniqueness.py:19 — used here
- `--print-next` — scripts/validation/check_adr_uniqueness.py:25 — defined here
- `--print-next-padded` — scripts/validation/check_adr_uniqueness.py:26 — defined here
- `ADR_FILENAME_RE` — scripts/validation/check_adr_uniqueness.py:38 — defined here
- `KNOWN_DUPLICATES_ISSUE_2228` — scripts/validation/check_adr_uniqueness.py:43 — defined here
- `collect_adr_numbers` — scripts/validation/check_adr_uniqueness.py:46 — defined here
- `find_new_duplicates` — scripts/validation/check_adr_uniqueness.py:58 — defined here
- `next_free_number` — scripts/validation/check_adr_uniqueness.py:70 — defined here
- `_format_dupes` — scripts/validation/check_adr_uniqueness.py:75 — defined here

## Structure
- Header docstring with issue history, exit codes, and operator helpers: lines 1-27
- Module imports and regular expressions: lines 29-44
- `collect_adr_numbers(adr_dir)`: lines 46-55
- `find_new_duplicates(by_number, allowlist)`: lines 58-67
- `next_free_number(by_number)`: lines 70-72
- `_format_dupes(dupes, repo_root)`: lines 75-80
- `main()`: lines 83-145
- Script execution sentinel: lines 147-148

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_adr_uniqueness.py`, language: Python 3, lines: 149
- documented invocation:
  - `python3 scripts/validation/check_adr_uniqueness.py --print-next` — .claude/skills/adr-generator/SKILL.md:122
  - `--print-next` — scripts/validation/check_adr_uniqueness.py:25
  - `--print-next-padded` — scripts/validation/check_adr_uniqueness.py:26
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - `python3 scripts/validation/check_adr_uniqueness.py`
    - stdout: `[PASS] All ADR numbers in .agents/architecture/ unique (next free: 105).`
    - exit code: 0
  - `python3 scripts/validation/check_adr_uniqueness.py --print-next`
    - stdout: `105`
    - exit code: 0
  - `python3 scripts/validation/check_adr_uniqueness.py --repo-root /tmp`
    - stderr: `[CONFIG] ADR directory not found: /tmp/.agents/architecture`
    - exit code: 2
- documented exit codes vs. actual exit paths in code:
  - Documented:
    - `0 - all ADR numbers unique` — scripts/validation/check_adr_uniqueness.py:20
    - `1 - one or more duplicates detected` — scripts/validation/check_adr_uniqueness.py:21
    - `2 - config error (e.g. architecture directory missing)` — scripts/validation/check_adr_uniqueness.py:22
  - Actual exit paths:
    - Exit 0: `return 0` on `--print-next` success (scripts/validation/check_adr_uniqueness.py:116) and on clean scan (scripts/validation/check_adr_uniqueness.py:144)
    - Exit 1: `return 1` when `new_dupes` detected (scripts/validation/check_adr_uniqueness.py:138)
    - Exit 2: `return 2` when `adr_dir` does not exist (scripts/validation/check_adr_uniqueness.py:109)
  - Result: Documented exit codes match actual code exit paths exactly per ADR-035.
- for validators/gates:
  - can it exit non-zero? Yes, exits 1 on detected number collisions and 2 on missing architecture directory.
  - does it fail on the source repo's own default branch? No, passes cleanly on the source repo (104 ADRs scanned, next free: 105, exit 0).
- does the output match what the documentation claims? Yes, correctly reports pass status and calculates the next free ADR number.

## Defects — required
none

## Observations
- The script preserves backward compatibility in `find_new_duplicates` via `allowlist: frozenset[int] = KNOWN_DUPLICATES_ISSUE_2228`, but sets `KNOWN_DUPLICATES_ISSUE_2228` to an empty `frozenset()` following the resolution of historical collisions in Issue #2228.
- The gate only checks uniqueness of numeric identifiers (`ADR-(\d{2,})-[^/]+\.md`) and deliberately skips non-numeric filenames such as `ADR-EXAMPLE.md` (scripts/validation/check_adr_uniqueness.py:52). Frontmatter metadata and supersession chains are delegated to `scripts/validation/check_adr_lifecycle.py`.

## Context cost
5,361 bytes, 149 lines (~1,100 tokens). Self-contained script with no external imports or child script dependencies.
