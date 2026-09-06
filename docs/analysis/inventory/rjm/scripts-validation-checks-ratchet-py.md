---
package: rjm
path: scripts/validation/checks_ratchet.py
type: script
bytes: 8842
unit: inv-rjm-292
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/checks_ratchet.py, sha256: f11eedc4dca23178e7d74dc884946ff7010c35fc54cfc9f35a6bdd3051c79156}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/checks_ratchet.py

## Purpose — required, verbatim
> "Run every count ratchet from one authoritative registry (issues #4251, #5317)." — scripts/validation/checks_ratchet.py:1

## Design intent — required
Provides an authoritative registry and unified runner for repository count ratchets across both the `pre_pr.py` validation runner and local `pre-push` git hooks. Previously, count ratchets (tracking ruff lint, ruff count, code taste, type-ignore comments, memory index count, CLI exit contracts, memory index tokens, and merge-tree invariants) ran only during pre-push in the same Lefthook group as the lengthy Python test suite, forcing developers to wait over 11 minutes (674 seconds) to discover small count regressions that evaluate in ~3 seconds. This module centralizes the 8 ratchet definitions into an immutable tuple (`RATCHETS`), handles branch base ref normalization and remote fetching, constructs commands via `uv run --frozen` (with optional `--extra dev` for ruff execution), applies an aggregate 85-second deadline, and suppresses verbose outputs on pass while capping failure logs to 60 lines.

## Phase — required
none

## Inputs — required
- Repository root path: `repo_root: Path` parameter passed to `validate_count_ratchets` — scripts/validation/checks_ratchet.py:194
- Base ref resolution: `_prepare_base_oid` — scripts/validation/checks_ratchet.py:171
- Subordinate ratchet scripts:
  - `ruff_ratchet.py` — scripts/validation/checks_ratchet.py:63
  - `ruff_count_ratchet.py` — scripts/validation/checks_ratchet.py:64
  - `taste_count_ratchet.py` — scripts/validation/checks_ratchet.py:65
  - `type_ignore_count_ratchet.py` — scripts/validation/checks_ratchet.py:68
  - `memory_index_count_ratchet.py` — scripts/validation/checks_ratchet.py:74
  - `cli_exit_contract_ratchet.py` — scripts/validation/checks_ratchet.py:80
  - `memory_index_token_ratchet.py` — scripts/validation/checks_ratchet.py:86
  - `merge_tree_ratchet_check.py` — scripts/validation/checks_ratchet.py:92

## Outputs — required
- Exit code 0 on all ratchets passing, exit code 1 on ratchet failure — scripts/validation/checks_ratchet.py:264
- Exit code 2 on configuration error: `MissingScriptSkip` — scripts/validation/checks_ratchet.py:261
- Boolean return value: `True` if all ratchets pass, `False` on failure — scripts/validation/checks_ratchet.py:254
- Standard error diagnostic message on failure:
  - `"[ERROR] count ratchets: base ref could not be resolved; refusing "` — scripts/validation/checks_ratchet.py:175
- Exceptions: raises `MissingScriptSkip` when `uv` is not found on PATH — scripts/validation/checks_ratchet.py:205

## Invokes — required
- function MissingScriptSkip — scripts/validation/checks_ratchet.py:34
- function _refresh_remote_base — scripts/validation/checks_ratchet.py:35
- function _resolve_default_base_ref — scripts/validation/checks_ratchet.py:36
- function _run_subprocess — scripts/validation/checks_ratchet.py:37
- script ruff_ratchet.py — scripts/validation/checks_ratchet.py:63
- script ruff_count_ratchet.py — scripts/validation/checks_ratchet.py:64
- script taste_count_ratchet.py — scripts/validation/checks_ratchet.py:65
- script type_ignore_count_ratchet.py — scripts/validation/checks_ratchet.py:68
- script memory_index_count_ratchet.py — scripts/validation/checks_ratchet.py:74
- script cli_exit_contract_ratchet.py — scripts/validation/checks_ratchet.py:80
- script memory_index_token_ratchet.py — scripts/validation/checks_ratchet.py:86
- script merge_tree_ratchet_check.py — scripts/validation/checks_ratchet.py:92

## Invoked by — required
- script checks_ratchet — scripts/validation/pre_pr_sequence.py:75

## Concepts named — required, verbatim
- `dataclass` — scripts/validation/checks_ratchet.py:23 — used here
- `MissingScriptSkip` — scripts/validation/checks_ratchet.py:34 — used here
- `_refresh_remote_base` — scripts/validation/checks_ratchet.py:35 — used here
- `_resolve_default_base_ref` — scripts/validation/checks_ratchet.py:36 — used here
- `_run_subprocess` — scripts/validation/checks_ratchet.py:37 — used here
- `Ratchet` — scripts/validation/checks_ratchet.py:42 — defined here
- `RATCHETS` — scripts/validation/checks_ratchet.py:62 — defined here
- `_AGGREGATE_TIMEOUT_SECONDS` — scripts/validation/checks_ratchet.py:98 — defined here
- `build_command` — scripts/validation/checks_ratchet.py:101 — defined here
- `_print_output` — scripts/validation/checks_ratchet.py:118 — defined here
- `_resolve_base_oid` — scripts/validation/checks_ratchet.py:128 — defined here
- `_normalize_remote_head` — scripts/validation/checks_ratchet.py:149 — defined here
- `_prepare_base_oid` — scripts/validation/checks_ratchet.py:171 — defined here
- `validate_count_ratchets` — scripts/validation/checks_ratchet.py:194 — defined here
- `main` — scripts/validation/checks_ratchet.py:257 — defined here

## Structure
- Module docstring — scripts/validation/checks_ratchet.py:1-16
- Imports and sys.path setup — scripts/validation/checks_ratchet.py:18-39
- Ratchet dataclass definition — scripts/validation/checks_ratchet.py:41-60
- RATCHETS registry declaration — scripts/validation/checks_ratchet.py:62-96
- Aggregate timeout constant — scripts/validation/checks_ratchet.py:98
- Command builder helper — scripts/validation/checks_ratchet.py:101-115
- Output truncation printer — scripts/validation/checks_ratchet.py:118-126
- Base OID and remote HEAD resolvers — scripts/validation/checks_ratchet.py:128-192
- Count ratchet validation engine — scripts/validation/checks_ratchet.py:194-254
- CLI entry point and exit handler — scripts/validation/checks_ratchet.py:257-268

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/checks_ratchet.py`, language: Python 3, lines: 269
- documented invocation:
  - "Run all registered ratchets for the current repository." — scripts/validation/checks_ratchet.py:258
- executed: yes
- actual command run:
  - `python3 scripts/validation/checks_ratchet.py` (cwd `sources/rjm`)
- actual exit code: 0
- abridged stdout:
```
(empty; all ratchets passed silently on default branch)
```
- documented exit codes vs actual exit paths:
  - Documented: exit 0 on pass, exit 1 on ratchet failure, exit 2 on MissingScriptSkip
  - Actual return paths:
    - line 263: `return 2` on `MissingScriptSkip`
    - line 264: `return 0 if passed else 1`
    - line 268: `raise SystemExit(main())`
- for validators/gates:
  - Can exit non-zero: yes, exits 1 when any ratchet fails or aggregate timeout (85s) is exhausted; exits 2 when `uv` is not found on PATH.
  - Tested on repository default branch: passes with exit code 0.
- does output match what the documentation claims: yes, runs all 8 registered ratchets against the resolved base OID and exits 0.

## Defects — required
none

## Observations
- Unlike the other 4 check modules in this unit which only add `_SCRIPT_DIR` to `sys.path`, `checks_ratchet.py` explicitly adds `_REPO_ROOT` to `sys.path` on lines 27-29:
  `_REPO_ROOT = _SCRIPT_DIR.parents[1]; if str(_REPO_ROOT) not in sys.path: sys.path.insert(0, str(_REPO_ROOT))`.
  Because of this, invoking `python3 scripts/validation/checks_ratchet.py` directly from `sources/rjm` succeeds without needing `PYTHONPATH=.`, avoiding the `ModuleNotFoundError` defect present in `checks_coverage.py`, `checks_dash.py`, `checks_mypy.py`, and `checks_plugin.py`.
- Enforces an aggregate timeout of 85 seconds (`_AGGREGATE_TIMEOUT_SECONDS`) across all 8 ratchets to prevent hung tests from blocking the developer pre-PR run.

## Context cost
8842 bytes, 269 lines, ~2210 tokens.
