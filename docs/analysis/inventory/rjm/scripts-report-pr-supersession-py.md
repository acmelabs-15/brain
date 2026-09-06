---
package: rjm
path: scripts/report_pr_supersession.py
type: script
bytes: 12125
unit: inv-rjm-257
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/report_pr_supersession.py, sha256: 2cc8d0c693bc7b20f4b2650c5336e8747819582cad59559c70c8883352626304}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/report_pr_supersession.py

## Purpose — required, verbatim
> "Report open PRs whose work may already be on the base branch." — scripts/report_pr_supersession.py:2

## Design intent — required
Proactive diagnostic reporting tool designed to detect open pull requests whose underlying bug fixes or feature changes have already landed on the base branch (`main`) while the PR sat idle (addressing issue #4355). Replaces manual, expensive rebase conflict resolution by querying the GitHub GraphQL API for open PR metadata and evaluating three distinct supersession indicators: closed linked issues (`closed-linked-issue`), distance behind base ref exceeding a configurable threshold (`stale-base`, default 20 commits), and stale PRs lacking linked issues (`no-linked-issue`). It is deliberately structured as an advisory report rather than an automated closure gate, avoiding false positive closures when a linked issue was resolved by an unrelated PR (#4163).

## Phase — required
rjm:ship

## Inputs — required
- Command-line arguments:
  - `--owner` — scripts/report_pr_supersession.py:303
  - `--repo` — scripts/report_pr_supersession.py:304
  - `--limit` — scripts/report_pr_supersession.py:305
  - `--stale-base` — scripts/report_pr_supersession.py:307
  - `--output-format` — scripts/report_pr_supersession.py:312
- GitHub GraphQL API query `OPEN_PRS_QUERY` results — scripts/report_pr_supersession.py:77
- GitHub compare REST endpoint `repos/{owner}/{repo}/compare/{base}...{head}` — scripts/report_pr_supersession.py:278

## Outputs — required
- Formatted human-readable report on stdout via `render_human` — scripts/report_pr_supersession.py:187
- Structured JSON report on stdout via `build_report` — scripts/report_pr_supersession.py:168
- Error messages emitted to `sys.stderr` — scripts/report_pr_supersession.py:323

## Invokes — required
- script scripts.github_core.api — scripts/report_pr_supersession.py:64
- reference .claude/rules/ci-scripts.md — scripts/report_pr_supersession.py:60

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `issue #4355` — scripts/report_pr_supersession.py:5 — used here
- `closed-linked-issue` — scripts/report_pr_supersession.py:18 — defined here
- `stale-base` — scripts/report_pr_supersession.py:21 — defined here
- `no-linked-issue` — scripts/report_pr_supersession.py:24 — defined here
- `check_pr_live_state.py` — scripts/report_pr_supersession.py:33 — used here
- `ADR-035` — scripts/report_pr_supersession.py:44 — used here
- `pr-maintenance.yml` — scripts/report_pr_supersession.py:58 — used here
- `.claude/rules/ci-scripts.md` — scripts/report_pr_supersession.py:60 — used here
- `DEFAULT_STALE_BASE` — scripts/report_pr_supersession.py:71 — defined here
- `REASON_CLOSED_ISSUE` — scripts/report_pr_supersession.py:73 — defined here
- `REASON_NO_ISSUE` — scripts/report_pr_supersession.py:74 — defined here
- `REASON_STALE_BASE` — scripts/report_pr_supersession.py:75 — defined here
- `OPEN_PRS_QUERY` — scripts/report_pr_supersession.py:77 — defined here
- `Finding` — scripts/report_pr_supersession.py:97 — defined here
- `linked_issue_states` — scripts/report_pr_supersession.py:114 — defined here
- `classify_pull_request` — scripts/report_pr_supersession.py:138 — defined here
- `build_report` — scripts/report_pr_supersession.py:168 — defined here
- `render_human` — scripts/report_pr_supersession.py:187 — defined here
- `GitHubReadError` — scripts/report_pr_supersession.py:223 — defined here
- `_run_gh` — scripts/report_pr_supersession.py:227 — defined here
- `fetch_open_pull_requests` — scripts/report_pr_supersession.py:244 — defined here
- `fetch_base_distance` — scripts/report_pr_supersession.py:268 — defined here
- `collect_distances` — scripts/report_pr_supersession.py:287 — defined here
- `build_parser` — scripts/report_pr_supersession.py:301 — defined here
- `main` — scripts/report_pr_supersession.py:316 — defined here

## Structure
- Module docstring describing supersession problem, false positive rationale, reason taxonomy, and exit codes (lines 1-45)
- Imports, path resolution, and constants (lines 47-75)
- GraphQL query definition `OPEN_PRS_QUERY` (lines 77-93)
- `Finding` frozen dataclass (lines 96-112)
- Domain logic: `linked_issue_states`, `classify_pull_request`, `build_report`, `render_human` (lines 114-216)
- I/O adapter and GitHub API execution: `GitHubReadError`, `_run_gh`, `fetch_open_pull_requests`, `fetch_base_distance`, `collect_distances` (lines 218-294)
- CLI parser and execution: `build_parser`, `main`, `__main__` entrypoint (lines 297-335)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/report_pr_supersession.py`
- **language:** Python 3
- **lines:** 335
- **documented invocation:**
  - `python3 scripts/report_pr_supersession.py` — scripts/report_pr_supersession.py:58
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/report_pr_supersession.py --help`
- **stdout:**
  ```text
  usage: report_pr_supersession.py [-h] [--owner OWNER] [--repo REPO]
                                   [--limit LIMIT] [--stale-base STALE_BASE]
                                   [--output-format {human,json}]

  Report open PRs whose work may already be on the base branch.
  ```
- **actual exit code:** 0
- **documented exit codes:**
  - > "  0 - report produced (findings or not)" — scripts/report_pr_supersession.py:40
  - > "  2 - usage or configuration error" — scripts/report_pr_supersession.py:41
  - > "  3 - external error (GitHub API unreachable)" — scripts/report_pr_supersession.py:42
- **actual exit paths:**
  - `return 3` — scripts/report_pr_supersession.py:324
  - `return 0` — scripts/report_pr_supersession.py:330
  - `sys.exit(main())` — scripts/report_pr_supersession.py:334
  - `build_parser().parse_args(argv)` exits 2 on argument parsing errors
- **for validators/gates:** Not a gate (expressly documented as an advisory report: "This is a REPORT, not a gate. It never closes a PR and never fails on a finding"). Can exit 2 on invalid CLI options (tested: `python3 sources/rjm/scripts/report_pr_supersession.py --invalid-arg` exited 2) and exits 3 when the GitHub CLI or API fails (tested: `python3 sources/rjm/scripts/report_pr_supersession.py --owner dummy --repo dummy` exited 3). Exits 0 on `--help` and when report generation completes.
- **output matches documentation:** yes, parses CLI arguments and outputs structured human or JSON reports.

## Defects — required
- `missing-path` · "check_pr_live_state.py" — scripts/report_pr_supersession.py:33 · Docstring references `check_pr_live_state.py` without specifying its location under `src/copilot-cli/skills/github/scripts/pr/check_pr_live_state.py`.

## Observations
- Deliberately rejects patch-id supersession matching (`git cherry`) because bug fixes reimplemented on `main` do not share commit patch IDs with the PR branch, causing `git cherry` to report `superseded=0` despite full functional supersession (lines 33-37).
- Implements `.claude/rules/ci-scripts.md` MUST 12 by always logging the examined count in human-readable output (`f"PR supersession report: {report['flagged']} flagged of {report['examined']} open PRs examined"`), ensuring that clean runs are distinguishable from runs where no PRs were processed.

## Context cost
12125 bytes + `scripts/github_core/api.py` (7736 bytes). Approximate tokens: ~4965 tokens.
