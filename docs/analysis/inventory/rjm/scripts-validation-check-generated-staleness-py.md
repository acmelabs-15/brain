---
package: rjm
path: scripts/validation/check_generated_staleness.py
type: script
bytes: 19171
unit: inv-rjm-279
in_scope_via: scripts/validation/pre_pr_sequence.py
aliases: []
memo_inputs:
  - {path: scripts/validation/check_generated_staleness.py, sha256: 1be3095eed20c44cb26605bb6632317cdaf00ab7551f9eef44d94386b0979e5b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_generated_staleness.py

## Purpose — required, verbatim
> "Gate: generated output is stale relative to its sources." — scripts/validation/check_generated_staleness.py:2

## Design intent — required
Prevents drift between generated repository artifacts and their canonical source definitions before PR submission. In multi-platform and agentic systems where artifacts under directories like `src/copilot-cli/` or `.claude/lib/` are derived from canonical source files, direct edits to generated targets or source changes without running generators lead to silent divergence. Crucially, generator sequence is an architectural contract: `.claude/rules/generated-artifacts.md` dictates running `scripts/sync_plugin_lib.py` before `build/scripts/build_all.py`, because `build_all.py` consumes `.claude/lib/` without populating it. Running them in reverse allows stale files to pass undetected. `check_generated_staleness.py` runs both checks sequentially in read-only `--check` mode, stopping at the first failure. Additionally, it implements a bounded execution budget with two-stage graceful termination (sending SIGINT first so generators run their cleanup `finally` blocks and restore snapshotted files, escalating to SIGKILL only after 30 seconds), and clamps its deadline to the remaining share of the outer lefthook timer (`PRE_PR_OUTER_CAP_SECONDS`). Without it, developers could submit inconsistent generated outputs, and ungraceful timeout kills could corrupt worktrees with partial writes.

## Phase — required
none

## Inputs — required
- Optional repository root argument `argv[0]` (default: `Path(__file__).resolve().parents[2]`) — scripts/validation/check_generated_staleness.py:409
- Environment variable `PRE_PR_OUTER_CAP_SECONDS` specifying outer timeout cap — scripts/validation/check_generated_staleness.py:180
- Generator script: `scripts/sync_plugin_lib.py` — scripts/validation/check_generated_staleness.py:12
- Generator script: `build/scripts/build_all.py` — scripts/validation/check_generated_staleness.py:8

## Outputs — required
- Standard output reporting generator audit status (`generated staleness: 0 stale in 2 generator check(s) examined`) — scripts/validation/check_generated_staleness.py:378-380
- Standard error emitting child output tails, failure diagnostics, or missing script errors — scripts/validation/check_generated_staleness.py:321-328, 333-336, 354-374
- Exit code 0 (`_Status.OK`): All generator checks passed cleanly with no staleness — scripts/validation/check_generated_staleness.py:141, 413
- Exit code 1 (`_Status.DRIFT`): A generator check reported staleness or failed — scripts/validation/check_generated_staleness.py:142, 413
- Exit code 2 (`_Status.CONFIG`): Invalid repository root or checked script absent — scripts/validation/check_generated_staleness.py:143, 412
- Exit code 3 (`_Status.EXTERNAL`): Bounded child killed on deadline expiry or timeout — scripts/validation/check_generated_staleness.py:144, 413

## Invokes — required
- script sync_plugin_lib.py — scripts/validation/check_generated_staleness.py:151
- script build_all.py — scripts/validation/check_generated_staleness.py:152

## Invoked by — required
- script check_generated_staleness — scripts/validation/pre_pr_sequence.py:50

## Concepts named — required, verbatim
- `REQ-003-005` — scripts/validation/check_generated_staleness.py:4 — used here
- `REQ-003-010` — scripts/validation/check_generated_staleness.py:45 — used here
- `ADR-035` — scripts/validation/check_generated_staleness.py:110 — used here
- `_Status` — scripts/validation/check_generated_staleness.py:136 — defined here
- `_CHECKS` — scripts/validation/check_generated_staleness.py:150 — defined here
- `_GATE_BUDGET_SECONDS` — scripts/validation/check_generated_staleness.py:168 — defined here
- `_TERMINATION_GRACE_SECONDS` — scripts/validation/check_generated_staleness.py:173 — defined here
- `_OUTER_CAP_ENV` — scripts/validation/check_generated_staleness.py:180 — defined here
- `_PROCESS_START` — scripts/validation/check_generated_staleness.py:184 — defined here
- `_MAX_OUTPUT_LINES` — scripts/validation/check_generated_staleness.py:186 — defined here
- `_decode` — scripts/validation/check_generated_staleness.py:189 — defined here
- `_echo_tail` — scripts/validation/check_generated_staleness.py:205 — defined here
- `_run_check` — scripts/validation/check_generated_staleness.py:224 — defined here
- `_remaining` — scripts/validation/check_generated_staleness.py:272 — defined here
- `_clamped_budget` — scripts/validation/check_generated_staleness.py:277 — defined here
- `check_generated_staleness` — scripts/validation/check_generated_staleness.py:302 — defined here
- `validate_generated_staleness` — scripts/validation/check_generated_staleness.py:384 — defined here
- `main` — scripts/validation/check_generated_staleness.py:406 — defined here

## Structure
- Shebang and module docstring: CI background, ordering rationale, timeout architecture, and ADR-035 exit codes — scripts/validation/check_generated_staleness.py:1-123
- Imports and status enum definition (_Status) — scripts/validation/check_generated_staleness.py:125-146
- Ordered generator check tuples and timeout constants — scripts/validation/check_generated_staleness.py:150-186
- Output normalization and bounded tail echo helpers — scripts/validation/check_generated_staleness.py:189-222
- Subprocess execution runner with two-stage SIGINT/SIGKILL cleanup handling — scripts/validation/check_generated_staleness.py:224-270
- Remaining deadline calculation and outer-cap budget clamping — scripts/validation/check_generated_staleness.py:272-300
- Staleness validation engine running ordered checks — scripts/validation/check_generated_staleness.py:302-382
- Pre-PR registry adapter function (validate_generated_staleness) — scripts/validation/check_generated_staleness.py:384-404
- Main CLI entry point with argument parsing and exit dispatch — scripts/validation/check_generated_staleness.py:406-418

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_generated_staleness.py`, language: Python, lines: 418
- documented invocation:
  - "0 - Success (no staleness detected)" — scripts/validation/check_generated_staleness.py:111
- executed: yes
- actual command run: `uv run python scripts/validation/check_generated_staleness.py`
- abridged stdout:
```
generated staleness: 0 stale in 2 generator check(s) examined (1.3s of 60s budget)
```
- actual exit code: 0
- documented exit codes vs. actual exit paths:
  - "0 - Success (no staleness detected)" — scripts/validation/check_generated_staleness.py:111
  - "1 - Logic error (a generator check failed: staleness or a child-reported" — scripts/validation/check_generated_staleness.py:112
  - "2 - Config error (invalid repository root, or a checked script is absent)" — scripts/validation/check_generated_staleness.py:114
  - "3 - External error (a bounded child was killed on deadline expiry)" — scripts/validation/check_generated_staleness.py:115
  - actual exit paths in code:
    - line 329: `return _Status.EXTERNAL` (exit 3) if gate deadline reached before check ran
    - line 337: `return _Status.CONFIG` (exit 2) if checked script is absent
    - line 359: `return _Status.EXTERNAL` (exit 3) if child killed on timeout
    - line 374: `return _Status.DRIFT` (exit 1) if generator check failed
    - line 381: `return _Status.OK` (exit 0) if all checks pass cleanly
    - line 412: `return int(_Status.CONFIG)` (exit 2) if invalid repository root
    - line 413: `return int(check_generated_staleness(repo_root))`
    - line 417: `raise SystemExit(main())`
- for validators/gates:
  - can it exit non-zero: yes (exits 1 on staleness or child failure, 2 on config error, 3 on timeout kill)
  - does it fail on the source repo's own default branch: no, exits 0 when executed in environment with project dependencies
- does output match what the documentation claims: yes, verifies that both generator checks pass in read-only mode and reports examined count and elapsed time

## Defects — required
none

## Observations
- Strict execution ordering: `sync_plugin_lib.py` runs before `build_all.py` because `build_all.py` reads `.claude/lib/` without writing it. Running out of order could mask drift.
- Two-stage process termination: Avoids `subprocess.run(timeout=...)` because SIGKILL bypasses Python's `finally` blocks, leaving worktrees dirty. Instead, SIGINT is sent first to trigger snapshot restoration, followed by SIGKILL only if the grace period expires.
- Dynamic timer clamping: Incorporates `PRE_PR_OUTER_CAP_SECONDS` to prevent lefthook parent timeouts from killing the process tree ungracefully.

## Context cost
19171 bytes, 418 lines, approximately 4800 tokens. Subprocess invocation loads `scripts/sync_plugin_lib.py` and `build/scripts/build_all.py` (~90924 bytes total, ~22700 tokens).
