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
verified: 2026-09-06 quote-check+coverage
---

# scripts/issue_triage.py

## Purpose — required, verbatim
> "Phase 1 mechanical issue triage scanner." — scripts/issue_triage.py:2

## Design intent — required
Provides a read-only mechanical triage scanner (ClawSweeper pattern) that scans open GitHub issues and classifies them against deterministic scriptable rules without invoking LLMs. Detects stale issues, missing priority/area/agent labels, state inconsistencies (such as "Doing" without an assignee or "Planning" without a description body), concluding linked pull requests whose state labels can advance, and duplicate candidate pairs via title tokenization and Jaccard similarity. Emits JSON or formatted human-readable reports and supports incremental scans using a persisted timestamp watermark.

## Phase — required
cross-phase

## Inputs — required
- Command-line arguments: `--owner`, `--repo`, `--stale-days` (default 60), `--dup-threshold` (default 0.7), `--limit` (default 300), `--format` (`json` or `human`), `--input` (JSON file path), `--state-file` (state file path), `--since` (ISO-8601 timestamp), `--full-scan` flag, `--check-linked-prs` flag (`scripts/issue_triage.py:638-682`)
- Environment variables: `GH_REPO_OWNER`, `GH_REPO_NAME` (`scripts/issue_triage.py:638-639`)
- External tool / CLI: GitHub CLI `gh issue list --repo ... --state open --limit ... --json number,title,updatedAt,labels,body,assignees` (`scripts/issue_triage.py:501-507`), `gh api repos/{owner}/{repo}/issues/{number}/timeline --paginate` (`scripts/issue_triage.py:531-535`)
- JSON file input: prefetched issue records via `--input` (`scripts/issue_triage.py:660, 687-696`)
- State file input: persisted incremental scan state file via `--state-file` (`scripts/issue_triage.py:562-575`)

## Outputs — required
- Formatted report to standard output: JSON (`json.dumps`) or human-readable summary via `_emit` (`scripts/issue_triage.py:796-803, 589-614`)
- Persisted state file: JSON object `{"last_run": timestamp}` written to path specified by `--state-file` (`scripts/issue_triage.py:578-586`)

## Invokes — required
- module scripts.github_core.validation — scripts/issue_triage.py:54
- command gh — scripts/issue_triage.py:502

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `IssueRecord` — scripts/issue_triage.py:84 — defined here
- `IssueFinding` — scripts/issue_triage.py:99 — defined here
- `DuplicateFinding` — scripts/issue_triage.py:108 — defined here
- `TriageReport` — scripts/issue_triage.py:119 — defined here
- `parse_iso_timestamp` — scripts/issue_triage.py:149 — defined here
- `parse_issue_record` — scripts/issue_triage.py:193 — defined here
- `is_stale` — scripts/issue_triage.py:226 — defined here
- `has_priority_label` — scripts/issue_triage.py:238 — defined here
- `has_area_label` — scripts/issue_triage.py:244 — defined here
- `has_agent_label` — scripts/issue_triage.py:250 — defined here
- `check_state_consistency` — scripts/issue_triage.py:256 — defined here
- `detect_linked_pr_status` — scripts/issue_triage.py:273 — defined here
- `normalize_title_tokens` — scripts/issue_triage.py:291 — defined here
- `jaccard_similarity` — scripts/issue_triage.py:303 — defined here
- `detect_duplicates` — scripts/issue_triage.py:315 — defined here
- `classify` — scripts/issue_triage.py:367 — defined here
- `build_report` — scripts/issue_triage.py:396 — defined here
- `fetch_open_issues` — scripts/issue_triage.py:485 — defined here
- `LinkedPrFetchError` — scripts/issue_triage.py:523 — defined here
- `fetch_linked_prs` — scripts/issue_triage.py:527 — defined here
- `load_scan_state` — scripts/issue_triage.py:562 — defined here
- `save_scan_state` — scripts/issue_triage.py:578 — defined here
- `format_human` — scripts/issue_triage.py:589 — defined here
- `parse_args` — scripts/issue_triage.py:632 — defined here
- `load_issues_from_input` — scripts/issue_triage.py:687 — defined here
- `is_github_name_valid` — scripts/issue_triage.py:54 — used here
- `ADR-035` — scripts/issue_triage.py:28 — used here
- `ADR-042` — scripts/issue_triage.py:33 — used here
- `ClawSweeper` — scripts/issue_triage.py:5 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/issue_triage.py`, language: Python 3, lines: 854
- documented invocation: `python3 scripts/issue_triage.py --help` (scripts/issue_triage.py:635-637)
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/issue_triage.py --help`, abridged stdout: `usage: issue_triage.py [-h] [--owner OWNER] [--repo REPO] ... Phase 1 mechanical issue triage scanner (ClawSweeper pattern).`, **actual exit code**: 0
- documented exit codes:
  - `> "0 - Success: scan completed (findings may exist)" — scripts/issue_triage.py:29`
  - `> "2 - Config error (bad input, environment, or invalid arguments)" — scripts/issue_triage.py:30`
  - `> "3 - External error (gh CLI failure)" — scripts/issue_triage.py:31`
  vs. actual exit paths: `scripts/issue_triage.py:742, 745, 748, 751, 764, 772, 777, 811, 819, 827, 847` exit 2; `scripts/issue_triage.py:779, 827` exit 3; `scripts/issue_triage.py:849` returns 0; `sys.exit(main())` at `scripts/issue_triage.py:853`
- for validators/gates: exits non-zero (code 2) on missing mandatory repo arguments or invalid inputs, exits non-zero (code 3) on GitHub CLI network/API failures.
- does the output match what the documentation claims? yes, conforms to ADR-035 exit codes 0, 2, and 3.

## Defects — required
- `orphan` — `scripts/issue_triage.py:1` — script is not invoked by any in-scope lifecycle command, agent, or workflow; referenced only in out-of-scope `tests/test_issue_triage.py`.

## Observations
- Implements the "ClawSweeper" pattern (issue #1799) for automated mechanical backlog hygiene without LLM inference cost.
- Jaccard title tokenization strips conventional-commit prefixes (`_CONVENTIONAL_PREFIX`) to avoid false collisions between `fix(x):` and `feat(x):`.
- State consistency check catches orphaned `Doing` issues (unassigned work in progress) and empty `Planning` issues.
- Incremental scan state is persisted only on scan success to prevent advancing watermarks on partial or failed runs.

## Context cost
28,826 bytes (~7,200 tokens).
