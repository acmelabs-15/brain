---
package: rjm
path: scripts/issue_triage.py
type: script
bytes: 28826
unit: inv-rjm-249
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/issue_triage.py, sha256: fcd6b841e0998709bc8e6c141ca452d89ea8238ba619daa7cbb301af9f851565}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/issue_triage.py

## Purpose — required, verbatim
> "Phase 1 mechanical issue triage scanner." — scripts/issue_triage.py:2

## Design intent — required
Provides a deterministic, read-only mechanical triage layer (the ClawSweeper pattern) that scans a GitHub issue backlog without LLM invocations. It flags stale issues, tickets missing priority, area, or agent labels, state inconsistencies (such as in-progress work without an assignee or planning tickets without descriptions), concluded linked PRs, and candidate duplicate issues via title token similarity. Without it, issue backlog grooming requires continuous manual inspection, leading to unassigned or abandoned work, unclassified priorities, and duplicated engineering effort across unresolved tickets.

## Phase — required
cross-phase

## Inputs — required
- CLI options parsed via `argparse` (scripts/issue_triage.py:638-684):
  - `--owner`: "default=os.environ.get(\"GH_REPO_OWNER\", \"\")" — scripts/issue_triage.py:638
  - `--repo`: "default=os.environ.get(\"GH_REPO_NAME\", \"\")" — scripts/issue_triage.py:639
  - `--stale-days`: "Days of inactivity to flag as stale" — scripts/issue_triage.py:642
  - `--dup-threshold`: "Title-similarity threshold for duplicate candidates " — scripts/issue_triage.py:646
  - `--limit`: "Max issues to fetch from the API (0-1000, default: 300)." — scripts/issue_triage.py:651
  - `--format`: "Output format (default: human)." — scripts/issue_triage.py:655
  - `--input`: "Path to a JSON file with prefetched issues (skips gh call). " — scripts/issue_triage.py:660
  - `--state-file`: "Path to the incremental-scan state file. When set, the scan is " — scripts/issue_triage.py:665
  - `--since`: "ISO-8601 timestamp; restrict the scan to issues updated since " — scripts/issue_triage.py:671
  - `--full-scan`: "Ignore the --state-file last_run and scan all open issues." — scripts/issue_triage.py:676
  - `--check-linked-prs`: "Fetch each issue's timeline to detect merged/closed linked PRs. " — scripts/issue_triage.py:680
- Environment variables: `GH_REPO_OWNER` (scripts/issue_triage.py:638), `GH_REPO_NAME` (scripts/issue_triage.py:639)
- GitHub API responses queried via `gh issue list` (scripts/issue_triage.py:501-507) and `gh api repos/{owner}/{repo}/issues/{number}/timeline` (scripts/issue_triage.py:532-535)

## Outputs — required
- Structured output written to stdout (scripts/issue_triage.py:796-803):
  - JSON format via `json.dumps(asdict(report), indent=2)` (scripts/issue_triage.py:800)
  - Human-readable summary table via `format_human(report)` (scripts/issue_triage.py:802)
- State file side effect: persists JSON object with `last_run` timestamp to `--state-file` path via `save_scan_state(args.state_file, scan_started)` (scripts/issue_triage.py:583-585, 844)
- Process exit code: 0 on success, 2 on configuration/argument/input error, 3 on external gh CLI error (scripts/issue_triage.py:28-31, 809-849)

## Invokes — required
- script scripts.github_core.validation — scripts/issue_triage.py:54

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ClawSweeper` — scripts/issue_triage.py:5 — used here
- `ai-agents` — scripts/issue_triage.py:5 — used here
- `Stale` — scripts/issue_triage.py:8 — used here
- `Doing` — scripts/issue_triage.py:13 — used here
- `Planning` — scripts/issue_triage.py:13 — used here
- `ADR-035` — scripts/issue_triage.py:28 — used here
- `ADR-042` — scripts/issue_triage.py:33 — used here
- `IssueRecord` — scripts/issue_triage.py:84 — defined here
- `IssueFinding` — scripts/issue_triage.py:99 — defined here
- `DuplicateFinding` — scripts/issue_triage.py:108 — defined here
- `TriageReport` — scripts/issue_triage.py:119 — defined here
- `Jaccard similarity` — scripts/issue_triage.py:304 — used here
- `classify` — scripts/issue_triage.py:367 — defined here
- `build_report` — scripts/issue_triage.py:396 — defined here
- `LinkedPrFetchError` — scripts/issue_triage.py:523 — defined here

## Structure
none (python script; functions and definitions: `DEFAULT_STALE_DAYS`, `DEFAULT_DUP_THRESHOLD`, `PRIORITY_LABEL_PREFIX`, `AREA_LABEL_PREFIX`, `AGENT_LABEL_PREFIX`, `STATE_DOING`, `STATE_PLANNING`, `ADVANCING_PR_STATES`, `_CONVENTIONAL_PREFIX`, `_NON_WORD`, `_MIN_TOKEN_LEN`, `ISO_TIMESTAMP_PATTERN`, `IssueRecord`, `IssueFinding`, `DuplicateFinding`, `TriageReport`, `parse_iso_timestamp`, `_parse_assignees`, `_parse_linked_prs`, `parse_issue_record`, `is_stale`, `has_priority_label`, `has_area_label`, `has_agent_label`, `check_state_consistency`, `detect_linked_pr_status`, `normalize_title_tokens`, `jaccard_similarity`, `detect_duplicates`, `_label_findings`, `classify`, `build_report`, `_run_gh`, `_require_repo_identity`, `fetch_open_issues`, `LinkedPrFetchError`, `fetch_linked_prs`, `load_scan_state`, `save_scan_state`, `format_human`, `_render_findings`, `_render_duplicates`, `parse_args`, `load_issues_from_input`, `_resolve_since`, `_enrich_linked_prs`, `_InputError`, `_validate_args`, `_obtain_raw_issues`, `_parse_records`, `_emit`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/issue_triage.py`, language: Python 3, lines: 854
- documented invocation: `#!/usr/bin/env python3` — scripts/issue_triage.py:1
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/issue_triage.py --help`
  abridged stdout:
  ```
  usage: issue_triage.py [-h] [--owner OWNER] [--repo REPO]
                         [--stale-days STALE_DAYS]
                         [--dup-threshold DUP_THRESHOLD] [--limit LIMIT]
                         [--format {json,human}] [--input INPUT]
                         [--state-file STATE_FILE] [--since SINCE] [--full-scan]
                         [--check-linked-prs]

  Phase 1 mechanical issue triage scanner (ClawSweeper pattern).
  ```
  **actual exit code:** 0
- documented exit codes vs actual exit paths:
  Documented in module docstring:
  - "0 - Success: scan completed (findings may exist)" — scripts/issue_triage.py:29
  - "2 - Config error (bad input, environment, or invalid arguments)" — scripts/issue_triage.py:30
  - "3 - External error (gh CLI failure)" — scripts/issue_triage.py:31
  Actual exit paths in code:
  - `return 0` — scripts/issue_triage.py:849 (scan completed successfully)
  - `return invalid` — scripts/issue_triage.py:811 (returns 2 from `_validate_args` at lines 743, 746, 749, 752)
  - `return exc.code` — scripts/issue_triage.py:819, 827 (returns 2 on input/config error, 3 on gh execution error)
  - `return 2` — scripts/issue_triage.py:847 (when `--state-file` fails to write)
  - `sys.exit(main())` — scripts/issue_triage.py:853
- for validators/gates: can it exit non-zero? Yes, returns 2 on invalid arguments, negative stale days, bad timestamps, or missing repo; returns 3 on gh CLI failures. Does it fail on the source repo's own default branch? No, exits 0 on valid inputs or when given prefetched JSON.
- does the output match what the documentation claims? Yes, produces structured JSON or formatted human summaries reporting on stale issues, missing labels, state inconsistencies, linked PR statuses, and candidate duplicates.

## Defects — required
- orphan · scripts/issue_triage.py:1 · No in-scope file invokes this script directly; intended as an administrative CLI tool or periodic scheduled workflow.

## Observations
- Implements incremental scanning via `--state-file` using `updated:>TIMESTAMP` GitHub search filters, drastically reducing API rate limit consumption during high-frequency scans.
- Strips conventional commit prefixes (`_CONVENTIONAL_PREFIX = re.compile(r"^\s*[a-z]+(?:\([^)]*\))?!?:\s*", re.IGNORECASE)`) before computing Jaccard token similarity on issue titles, avoiding false duplicate positives between feature requests and bug fixes sharing the same module prefix.
- Enforces strict GitHub repository owner and name validation via `_require_repo_identity` to prevent path traversal injection attacks against interpolated GitHub CLI endpoints.

## Context cost
28826 bytes (~7206 tokens). Imports `scripts.github_core.validation` and standard library modules (`argparse`, `json`, `subprocess`, `datetime`, `dataclasses`).
