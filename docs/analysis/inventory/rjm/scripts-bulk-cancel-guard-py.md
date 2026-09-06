---
package: rjm
path: scripts/bulk_cancel_guard.py
type: script
bytes: 15995
unit: inv-rjm-197
in_scope_via: scripts/github_core/pull_request_targets.py
aliases: []
memo_inputs:
  - {path: scripts/bulk_cancel_guard.py, sha256: ab3973edd5a813192e5cb59c448bfaaf557c121f33667246bf911e7da8dbcc9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/bulk_cancel_guard.py

## Purpose — required, verbatim
> "Guard a bulk cancellation of PR workflow runs behind a recovery manifest." — scripts/bulk_cancel_guard.py:2

## Design intent — required
Prevents destructive bulk cancellations of CI workflow runs from leaving PRs in unrecoverable states with permanently cancelled or missing required status checks (incident #4835). Analyzes active or captured workflow runs against pinned ruleset required contexts (`scripts/ci/ruleset_required_contexts.py`) and workflow event subscriptions, refusing cancellation (exit 1) unless every required check has a verified recovery event (e.g. `reopened`, `synchronize`). Only mutates state when passed `--confirm`, generating a durable recovery manifest for replays.

## Phase — required
cross-phase

## Inputs — required
- Mutually exclusive run source:
  - `--runs-file`: "JSON file holding a captured run inventory, or a recovery " — scripts/bulk_cancel_guard.py:114
  - `--all-open-prs`: "Enumerate active runs for every open pull request." — scripts/bulk_cancel_guard.py:121
  - `--pr`: "Enumerate active runs for this pull request. Repeatable." — scripts/bulk_cancel_guard.py:128
- Recovery configuration options:
  - `--recovery-event`: "Event that will regenerate cancelled required contexts. Omitting " — scripts/bulk_cancel_guard.py:135
  - `--branch`: "Protected branch whose required contexts apply (default and only " — scripts/bulk_cancel_guard.py:151
  - `--workflows-dir`: "Directory of workflow files used to verify event subscriptions." — scripts/bulk_cancel_guard.py:159
  - `--confirm`: "Actually cancel the runs. Without it nothing is mutated." — scripts/bulk_cancel_guard.py:174
- Pinned ruleset configuration imported from `scripts.ci.ruleset_required_contexts` (REPOSITORY, BRANCH, REQUIRED_CONTEXTS)
- Local GitHub workflow YAML definitions in `.github/workflows/`

## Outputs — required
- Blast radius report printed to stdout listing run counts, PR counts, branches, workflows, queued/in-progress counts, required context counts, and blocked runs (scripts/bulk_cancel_guard.py:192-216)
- Recovery manifest JSON written to path specified by `--manifest` or default `.agents/scratch/bulk-cancel-recovery.json` under `--confirm` (scripts/bulk_cancel_guard.py:95, 237-242)
- Diagnostics written to stderr for contract mismatches, unauthenticated `gh` sessions, API errors, and blocking unrecoverable contexts (scripts/bulk_cancel_guard.py:346, 353, 364, 367, 389, 394)
- Process exit codes: 0 (clean plan or cancellation complete), 1 (blocked by unrecoverable context), 2 (configuration error), 3 (API/cancellation failure), 4 (authentication missing) (scripts/bulk_cancel_guard.py:35-39, 78-82)

## Invokes — required
- script ruleset_required_contexts — scripts/bulk_cancel_guard.py:52
- script gh_client — scripts/bulk_cancel_guard.py:57
- script protocol — scripts/bulk_cancel_guard.py:58
- script pull_request_targets — scripts/bulk_cancel_guard.py:59
- script recovery_manifest — scripts/bulk_cancel_guard.py:63
- script runs_file — scripts/bulk_cancel_guard.py:69
- script workflow_event_subscriptions — scripts/bulk_cancel_guard.py:70
- script workflow_provenance — scripts/bulk_cancel_guard.py:75
- script workflow_runs — scripts/bulk_cancel_guard.py:76

## Invoked by — required
- script pull_request_targets.py — scripts/github_core/pull_request_targets.py:3
- script runs_file.py — scripts/github_core/runs_file.py:3
- script workflow_runs.py — scripts/github_core/workflow_runs.py:3

## Concepts named — required, verbatim
- `EXIT_OK` — scripts/bulk_cancel_guard.py:78 — defined here
- `EXIT_BLOCKED` — scripts/bulk_cancel_guard.py:79 — defined here
- `EXIT_CONFIG` — scripts/bulk_cancel_guard.py:80 — defined here
- `EXIT_EXTERNAL` — scripts/bulk_cancel_guard.py:81 — defined here
- `EXIT_AUTH` — scripts/bulk_cancel_guard.py:82 — defined here
- `_DEFAULT_WORKFLOWS_DIR` — scripts/bulk_cancel_guard.py:84 — defined here
- `_DEFAULT_MANIFEST_PATH` — scripts/bulk_cancel_guard.py:94 — defined here
- `build_parser` — scripts/bulk_cancel_guard.py:99 — defined here
- `gather_runs` — scripts/bulk_cancel_guard.py:179 — defined here
- `format_report` — scripts/bulk_cancel_guard.py:192 — defined here
- `resolve_manifest_path` — scripts/bulk_cancel_guard.py:219 — defined here
- `write_manifest` — scripts/bulk_cancel_guard.py:237 — defined here
- `_execute` — scripts/bulk_cancel_guard.py:245 — defined here
- `pinned_contract_error` — scripts/bulk_cancel_guard.py:274 — defined here
- `_authenticated` — scripts/bulk_cancel_guard.py:303 — defined here
- `_needs_credentials` — scripts/bulk_cancel_guard.py:311 — defined here
- `_resolve_live_subscriptions` — scripts/bulk_cancel_guard.py:322 — defined here
- `main` — scripts/bulk_cancel_guard.py:340 — defined here

## Structure
- Module docstring with incident #4835 background, usage examples, and exit codes (scripts/bulk_cancel_guard.py:1-40)
- Future annotations and standard library imports (scripts/bulk_cancel_guard.py:42-50)
- Imports from `scripts.github_core` and `scripts.ci.ruleset_required_contexts` (scripts/bulk_cancel_guard.py:52-76)
- Exit code constant definitions `EXIT_OK` through `EXIT_AUTH` (scripts/bulk_cancel_guard.py:78-82)
- Default path constants `_DEFAULT_WORKFLOWS_DIR` and `_DEFAULT_MANIFEST_PATH` (scripts/bulk_cancel_guard.py:84-96)
- `build_parser`: CLI argument parser setup (scripts/bulk_cancel_guard.py:99-176)
- `gather_runs`: retrieves runs from offline file or GitHub API targets (scripts/bulk_cancel_guard.py:179-190)
- `format_report`: formats textual blast radius and blocked list (scripts/bulk_cancel_guard.py:192-217)
- `resolve_manifest_path`: computes destination for recovery manifest (scripts/bulk_cancel_guard.py:219-235)
- `write_manifest`: serializes `RecoveryManifest` to disk (scripts/bulk_cancel_guard.py:237-243)
- `_execute`: invokes GitHub API cancellation with retry guidance (scripts/bulk_cancel_guard.py:245-272)
- `pinned_contract_error`: validates repository and branch against contract (scripts/bulk_cancel_guard.py:274-301)
- `_authenticated` and `_needs_credentials`: authentication checks (scripts/bulk_cancel_guard.py:303-320)
- `_resolve_live_subscriptions`: live workflow definition resolution (scripts/bulk_cancel_guard.py:322-338)
- `main`: orchestrates parsing, authentication, planning, reporting, and execution (scripts/bulk_cancel_guard.py:340-415)
- Script entry point invocation (scripts/bulk_cancel_guard.py:417-418)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/bulk_cancel_guard.py`
- **language:** Python (python3 via `uv`)
- **lines:** 419
- **documented invocation:**
  - `uv run python scripts/bulk_cancel_guard.py --all-open-prs \` — scripts/bulk_cancel_guard.py:18
  - `uv run python scripts/bulk_cancel_guard.py --runs-file runs.json \` — scripts/bulk_cancel_guard.py:22
  - `uv run python scripts/bulk_cancel_guard.py --runs-file runs.json \` — scripts/bulk_cancel_guard.py:26
  - `uv run python scripts/bulk_cancel_guard.py --runs-file recovery.json \` — scripts/bulk_cancel_guard.py:31
- **executed:** yes
- **actual command run:** `uv run python scripts/bulk_cancel_guard.py --runs-file /tmp/test_empty.json --recovery-event synchronize`
- **abridged stdout:**
```
bulk cancel guard: rjmurillo/ai-agents
  recovery event      : synchronize
  workflow runs       : 0
  pull requests       : 0
  branches            : 0
  distinct workflows  : 0
  queued runs         : 0
  in-progress runs    : 0 (occupying runners)
  required contexts   : 0
[PASS] dry run: 0 runs are recoverable. Re-run with --confirm to cancel them.
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0 - the plan validates; with --confirm, every run was cancelled" — scripts/bulk_cancel_guard.py:35
    - "1 - at least one required context has no verified recovery path" — scripts/bulk_cancel_guard.py:36
    - "2 - configuration error (bad arguments, unreadable or malformed input)" — scripts/bulk_cancel_guard.py:37
    - "3 - external error (GitHub API failure, or a partial cancellation)" — scripts/bulk_cancel_guard.py:38
    - "4 - authentication error (gh has no usable credentials)" — scripts/bulk_cancel_guard.py:39
  - Actual code paths:
    - `return EXIT_OK` — scripts/bulk_cancel_guard.py:263
    - `return EXIT_OK` — scripts/bulk_cancel_guard.py:406
    - `return EXIT_BLOCKED` — scripts/bulk_cancel_guard.py:399
    - `return EXIT_CONFIG` — scripts/bulk_cancel_guard.py:347
    - `return EXIT_CONFIG` — scripts/bulk_cancel_guard.py:365
    - `return EXIT_CONFIG` — scripts/bulk_cancel_guard.py:390
    - `return EXIT_EXTERNAL` — scripts/bulk_cancel_guard.py:271
    - `return EXIT_EXTERNAL` — scripts/bulk_cancel_guard.py:368
    - `return EXIT_AUTH` — scripts/bulk_cancel_guard.py:359
    - `sys.exit(main())` — scripts/bulk_cancel_guard.py:418
  - Result: Documented exit codes match actual exit paths in code exactly.
- **for validators/gates:** Can exit non-zero: exits 1 (`EXIT_BLOCKED`) if required contexts lack recovery events; exits 2 on configuration error; exits 4 on missing GitHub authentication. Verified: empty runs file exits 0; runs with unverified required contexts exit 1.
- **does the output match what the documentation claims:** Yes, outputs formatted blast radius report and writes structured recovery manifest JSON.

## Defects — required
- doc-drift · scripts/bulk_cancel_guard.py:18 · Invocation examples cite `uv run python scripts/bulk_cancel_guard.py` without noting that running with bare `python3` fails with `ModuleNotFoundError: No module named 'yaml'` because `github_core` depends on `PyYAML` in the project venv.

## Observations
- Fail-closed security architecture: explicitly refuses any repository or branch other than `rjmurillo/ai-agents main` (lines 274-301) to ensure runs are never scored against the wrong ruleset.
- Manifest circular usability: the recovery manifest emitted by this script matches the JSON shape accepted by `--runs-file`, enabling immediate retry of failed cancellations without data reformatting (lines 29-32).
- Ensures durability: confirmed cancellations (`--confirm`) always force a manifest write to `.agents/scratch/bulk-cancel-recovery.json` if `--manifest` was not supplied by the operator (lines 222-234).

## Context cost
15995 bytes, 419 lines, ~4000 tokens (plus imported `github_core` modules ~45 KB).
