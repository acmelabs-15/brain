---
package: rjm
path: scripts/validation/active_plan_closeout.py
type: script
bytes: 6113
unit: inv-rjm-271
in_scope_via: scripts/validation/pre_pr_sequence.py
aliases: []
memo_inputs:
  - {path: scripts/validation/active_plan_closeout.py, sha256: ff907bbadd21f365e739dbb46fb15c8a6d851a03644bb202e283ce2c1510d602}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/active_plan_closeout.py

## Purpose — required, verbatim
> "Advisory check for active execution plans whose tracking issues are closed." — scripts/validation/active_plan_closeout.py:2

## Design intent — required
Identifies completed or abandoned execution plans remaining in `.agents/plans/active/` whose referenced GitHub tracking issues or pull requests have already reached terminal status (`CLOSED` or `MERGED`). When working across multiple agents and complex implementation sessions, plans are frequently abandoned or left behind in active directories rather than moved to `completed/` or `abandoned/`. The script parses issue citations (`#123` or GitHub URLs) from active plans, queries GitHub issue states via the `gh` command-line tool, and alerts engineers when all tracking issues for an active plan are closed. To ensure validation stability in environments without network access or valid GitHub authentication, this gate is designed as strictly advisory: failures during issue state retrieval (`gh` missing, timed out, or network errors) produce advisory warnings without failing, and even confirmed stale plans emit warnings while preserving exit code 0 so as not to block local PR submission.

## Phase — required
none

## Inputs — required
- CLI option `--repo-root`: Path to target repository root (default: current working directory) — scripts/validation/active_plan_closeout.py:182
- Active plan directory: `.agents/plans/active/` containing markdown plan files — scripts/validation/active_plan_closeout.py:55
- GitHub CLI issue state probe via `gh issue view` subprocess calls — scripts/validation/active_plan_closeout.py:115

## Outputs — required
- Standard output emitting advisory status (`[PASS] Active plan closeout advisory:` or `[WARNING] Active execution plans have closed tracking issues:`) — scripts/validation/active_plan_closeout.py:167, 172
- Standard error emitting repository root directory errors — scripts/validation/active_plan_closeout.py:191
- Exit code `EXIT_OK` (0): Advisory check succeeded or reported advisory warnings — scripts/validation/active_plan_closeout.py:14, 195
- Exit code `EXIT_CONFIG` (2): Configuration error when repository root does not exist — scripts/validation/active_plan_closeout.py:15, 192

## Invokes — required
none

## Invoked by — required
- script active_plan_closeout — scripts/validation/pre_pr_sequence.py:42
- script active_plan_closeout — scripts/validation/pre_pr.py:58

## Concepts named — required, verbatim
- `EXIT_OK` — scripts/validation/active_plan_closeout.py:14 — defined here
- `EXIT_CONFIG` — scripts/validation/active_plan_closeout.py:15 — defined here
- `DEFAULT_REPO` — scripts/validation/active_plan_closeout.py:16 — defined here
- `GH_TIMEOUT_SECONDS` — scripts/validation/active_plan_closeout.py:17 — defined here
- `TERMINAL_STATES` — scripts/validation/active_plan_closeout.py:18 — defined here
- `NONTERMINAL_STATES` — scripts/validation/active_plan_closeout.py:19 — defined here
- `KNOWN_STATES` — scripts/validation/active_plan_closeout.py:20 — defined here
- `ISSUE_REF_RE` — scripts/validation/active_plan_closeout.py:21 — defined here
- `ActivePlanWarning` — scripts/validation/active_plan_closeout.py:27 — defined here
- `IssueStateLookup` — scripts/validation/active_plan_closeout.py:41 — defined here
- `issue_refs` — scripts/validation/active_plan_closeout.py:44 — defined here
- `active_plan_warnings` — scripts/validation/active_plan_closeout.py:49 — defined here
- `_normalize_state` — scripts/validation/active_plan_closeout.py:86 — defined here
- `_print_lookup_advisory` — scripts/validation/active_plan_closeout.py:93 — defined here
- `gh_issue_state` — scripts/validation/active_plan_closeout.py:103 — defined here
- `validate_active_plan_closeout` — scripts/validation/active_plan_closeout.py:159 — defined here
- `build_parser` — scripts/validation/active_plan_closeout.py:179 — defined here
- `main` — scripts/validation/active_plan_closeout.py:186 — defined here

## Structure
- Shebang and module docstring — scripts/validation/active_plan_closeout.py:1-3
- Imports, exit codes, and status constants — scripts/validation/active_plan_closeout.py:4-24
- ActivePlanWarning dataclass — scripts/validation/active_plan_closeout.py:26-39
- Issue reference extraction and active plan scanner — scripts/validation/active_plan_closeout.py:41-84
- State normalization and warning advisory helpers — scripts/validation/active_plan_closeout.py:86-98
- GitHub CLI issue state probe with timeout handling — scripts/validation/active_plan_closeout.py:100-157
- Advisory closeout validation engine — scripts/validation/active_plan_closeout.py:159-177
- Argument parser and main CLI runner — scripts/validation/active_plan_closeout.py:179-200

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/active_plan_closeout.py`, language: Python 3, lines: 200
- documented invocation:
  - "EXIT_OK = 0" — scripts/validation/active_plan_closeout.py:14
- executed: yes
- actual command run: `python3 scripts/validation/active_plan_closeout.py`
- abridged stdout:
```
[PASS] Active plan closeout advisory: no active plans with all tracking issues closed
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - "EXIT_OK = 0" — scripts/validation/active_plan_closeout.py:14
  - "EXIT_CONFIG = 2" — scripts/validation/active_plan_closeout.py:15
  - Actual exit paths:
    - line 192: `return EXIT_CONFIG` when `--repo-root` does not exist or is not a directory
    - line 195: `return EXIT_OK` on check completion
    - line 200: `raise SystemExit(main())`
- for validators/gates:
  - Can exit non-zero: only exit code 2 on configuration error (missing repo root); validation findings never produce a non-zero exit code
  - Verified on repository default branch: passes with exit code 0
- does output match what the documentation claims: yes, executes advisory scan of `.agents/plans/active/` and exits 0

## Defects — required
none

## Observations
- Purely advisory validator integrated into `pre_pr_sequence.py` as `Active Plan Closeout Advisory` with `_root_only` scope restriction.
- Implements resilient network handling: 30-second timeout on `gh issue view` and graceful fallback when `gh` is unavailable or issues cannot be queried.

## Context cost
6113 bytes, 200 lines, ~1530 tokens.
