---
package: rjm
path: scripts/validation/check_dual_priority_labels.py
type: script
bytes: 6429
unit: inv-rjm-278
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_dual_priority_labels.py, sha256: 0a9a6320c38db8908cb300092f87e7e96b51b3672aa115743e270266c54d4504}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_dual_priority_labels.py

## Purpose — required, verbatim
> "Flag any issue or PR that carries more than one ``priority:*`` label." — scripts/validation/check_dual_priority_labels.py:2

## Design intent — required
Detects contradictory priority label assignments on GitHub issues and pull requests (issue #2623). Because multiple automated bots and human triage agents apply priority labels independently without a mutual exclusion mechanism, issues can accumulate multiple conflicting priority labels (e.g., both `priority:P1` and `priority:P2`), rendering priority queries unanswerable. This script provides an evaluation engine and CLI interface to inspect labels directly via `--labels` or fetch them over the GitHub API using `gh view`, flagging any target with more than one `priority:*` label so triage can reconcile it.

## Phase — required
rjm:test

## Inputs — required
- CLI argument `--labels [LABELS ...]`: label names to check directly in-memory without network calls (scripts/validation/check_dual_priority_labels.py:136, 149)
- CLI argument `--issue ISSUE`: issue number to fetch via GitHub CLI (`gh issue view <issue> --json labels`) (scripts/validation/check_dual_priority_labels.py:141, 158)
- CLI argument `--pr PR`: PR number to fetch via GitHub CLI (`gh pr view <pr> --json labels`) (scripts/validation/check_dual_priority_labels.py:142, 160)
- External GitHub CLI API response: JSON payload from `gh <kind> view <number> --json labels` bounded by `GH_TIMEOUT_SECONDS = 15` (scripts/validation/check_dual_priority_labels.py:48, 89, 121)

## Outputs — required
- Standard output: status line `OK: <target> has <count> priority label[s] (<suffix>)` or `FAIL: <target> has <count> priority labels: <joined>` (scripts/validation/check_dual_priority_labels.py:79, 83, 151, 172)
- Standard error / stdout: error messages `FAIL: provide only one of --issue or --pr`, `FAIL: provide --labels, --issue, or --pr`, or external failures (`FAIL: gh CLI not found`, `FAIL: gh <kind> view timed out after 15s`, `FAIL: gh <kind> view failed (exit <rc>)`, `FAIL: gh returned unparseable JSON`) (scripts/validation/check_dual_priority_labels.py:109, 114, 118, 123, 155, 163, 168)
- Exit codes:
  - `0 - at most one priority label present (clean)` — scripts/validation/check_dual_priority_labels.py:29 (exited at lines 79, 152, 173)
  - `1 - more than one priority label present (logic failure: contradiction)` — scripts/validation/check_dual_priority_labels.py:30 (exited at lines 82, 152, 173)
  - `2 - usage/configuration error (missing required argument)` — scripts/validation/check_dual_priority_labels.py:31 (exited at lines 156, 164)
  - `3 - external error (gh unavailable / API failure / not authenticated)` — scripts/validation/check_dual_priority_labels.py:32 (exited at line 169)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `VALID_PRIORITIES` — scripts/validation/check_dual_priority_labels.py:15 — used here
- `ADR-035` — scripts/validation/check_dual_priority_labels.py:28 — used here
- `PRIORITY_PREFIX` — scripts/validation/check_dual_priority_labels.py:45 — defined here
- `GH_TIMEOUT_SECONDS` — scripts/validation/check_dual_priority_labels.py:48 — defined here
- `EXIT_OK` — scripts/validation/check_dual_priority_labels.py:50 — defined here
- `EXIT_DUAL` — scripts/validation/check_dual_priority_labels.py:51 — defined here
- `EXIT_CONFIG` — scripts/validation/check_dual_priority_labels.py:52 — defined here
- `EXIT_EXTERNAL` — scripts/validation/check_dual_priority_labels.py:53 — defined here
- `find_priority_labels` — scripts/validation/check_dual_priority_labels.py:56 — defined here
- `evaluate` — scripts/validation/check_dual_priority_labels.py:72 — defined here

## Structure
- Constants: PRIORITY_PREFIX, GH_TIMEOUT_SECONDS, EXIT_OK, EXIT_DUAL, EXIT_CONFIG, EXIT_EXTERNAL — scripts/validation/check_dual_priority_labels.py:45-53
- Function: find_priority_labels — scripts/validation/check_dual_priority_labels.py:56
- Function: evaluate — scripts/validation/check_dual_priority_labels.py:72
- Function: _run_gh_view — scripts/validation/check_dual_priority_labels.py:87
- Function: _fetch_labels — scripts/validation/check_dual_priority_labels.py:100
- Function: _build_parser — scripts/validation/check_dual_priority_labels.py:131
- Function: main — scripts/validation/check_dual_priority_labels.py:146

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_dual_priority_labels.py`
- language: Python
- lines: 178
- documented invocation:
  `Exit 1 when an issue/PR carries more than one priority:* label.` — scripts/validation/check_dual_priority_labels.py:133
- executed: yes
- actual command run: `uv run python scripts/validation/check_dual_priority_labels.py --labels priority:P1`
- abridged stdout: `OK: labels has 1 priority label (priority:P1)`
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - documented:
    - `0 - at most one priority label present (clean)` — scripts/validation/check_dual_priority_labels.py:29
    - `1 - more than one priority label present (logic failure: contradiction)` — scripts/validation/check_dual_priority_labels.py:30
    - `2 - usage/configuration error (missing required argument)` — scripts/validation/check_dual_priority_labels.py:31
    - `3 - external error (gh unavailable / API failure / not authenticated)` — scripts/validation/check_dual_priority_labels.py:32
  - actual exit paths in code:
    - `scripts/validation/check_dual_priority_labels.py:152`: `return exit_code` (0 if <=1 priority label, 1 if >1 priority label)
    - `scripts/validation/check_dual_priority_labels.py:156`: `return EXIT_CONFIG` (2, both issue and pr provided)
    - `scripts/validation/check_dual_priority_labels.py:164`: `return EXIT_CONFIG` (2, neither labels, issue, nor pr provided)
    - `scripts/validation/check_dual_priority_labels.py:169`: `return err_code` (3, external gh failure)
    - `scripts/validation/check_dual_priority_labels.py:173`: `return exit_code` (0 or 1 on evaluated fetched labels)
    - `scripts/validation/check_dual_priority_labels.py:177`: `raise SystemExit(main())`
- for validators/gates: can it exit non-zero? Yes (exits 1 on dual priority labels, exits 2 on argument errors, exits 3 on gh errors); does it fail on the source repo's own default branch? No, exits 0 with `OK: labels has 1 priority label (priority:P1)` when tested with a single valid label.
- does the output match what the documentation claims? Yes, evaluates priority labels and returns matching status string and exit codes.

## Defects — required
- orphan — scripts/validation/check_dual_priority_labels.py:1 — Not invoked by any in-scope lifecycle script, workflow, or entry point; documented in tests/ci/test_validation_scripts_are_reachable.py:91 as an unwired triage report for issue #2623 awaiting a scheduled runner.

## Observations
- Permissive label matching: lines 21-26 intentionally match any case-insensitive `priority:*` prefix rather than restricting to `VALID_PRIORITIES = ("P0", "P1", "P2", "P3")`, ensuring non-canonical labels (like `priority:high`) are detected when colliding with another priority label.
- Timeout enforcement: outbound `gh` call uses `GH_TIMEOUT_SECONDS = 15` per `release-it.md` conventions, preventing blocking calls on network latencies.

## Context cost
6,429 bytes for `scripts/validation/check_dual_priority_labels.py`. Loads no local repository files. Total context cost ~6.4 KB, approximately 1,600 tokens.
