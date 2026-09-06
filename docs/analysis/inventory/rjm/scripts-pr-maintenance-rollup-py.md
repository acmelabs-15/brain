---
package: rjm
path: scripts/pr_maintenance_rollup.py
type: script
bytes: 7153
unit: inv-rjm-255
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/pr_maintenance_rollup.py, sha256: 5abba9ce87a2916bed28e35fbab18047b401209abb7609199134b86e6256fcd1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/pr_maintenance_rollup.py

## Purpose — required, verbatim
> "Status-check rollup helpers for PR maintenance scripts." — scripts/pr_maintenance_rollup.py:1

## Design intent — required
Provides reusable helpers for querying and evaluating GitHub commit status check rollups via GraphQL or `gh` CLI. It paginates through `statusCheckRollup` contexts, deduplicates runs for the same check by timestamp to retain only the latest result, detects failures/timeouts/stale states, and flags whether PR status checks have passed or remain incomplete.

## Phase — required
none

## Inputs — required
- GraphQL query string defined in `_STATUS_CONTEXT_PAGE_QUERY` — scripts/pr_maintenance_rollup.py:25
- PR list with commit nodes passed to `complete_status_check_rollups` — scripts/pr_maintenance_rollup.py:174

## Outputs — required
- Status context pages retrieved via `fetch_status_context_page_with_graphql` — scripts/pr_maintenance_rollup.py:61
- Completed contexts with incomplete status flag evaluated via `contexts_are_incomplete` — scripts/pr_maintenance_rollup.py:149
- Boolean failure verdicts evaluated via `rollup_has_failing_checks` — scripts/pr_maintenance_rollup.py:158

## Invokes — required
none

## Invoked by — required
- script scripts.pr_maintenance_rollup — scripts/invoke_pr_maintenance.py:41
- script scripts.pr_maintenance_rollup — .github/scripts/invoke_pr_maintenance.py:25

## Concepts named — required, verbatim
- `_FAILURE_STATES` — scripts/pr_maintenance_rollup.py:10 — defined here
- `_CONTEXTS_MAX_PAGES` — scripts/pr_maintenance_rollup.py:19 — defined here
- `FetchContextPage` — scripts/pr_maintenance_rollup.py:21 — defined here
- `_STATUS_CONTEXT_PAGE_QUERY` — scripts/pr_maintenance_rollup.py:25 — defined here
- `fetch_status_context_page_with_graphql` — scripts/pr_maintenance_rollup.py:61 — defined here
- `fetch_status_context_page_with_gh` — scripts/pr_maintenance_rollup.py:79 — defined here
- `context_name` — scripts/pr_maintenance_rollup.py:110 — defined here
- `_context_timestamp` — scripts/pr_maintenance_rollup.py:116 — defined here
- `dedupe_contexts_by_latest` — scripts/pr_maintenance_rollup.py:125 — defined here
- `context_is_failing` — scripts/pr_maintenance_rollup.py:142 — defined here
- `contexts_are_incomplete` — scripts/pr_maintenance_rollup.py:149 — defined here
- `rollup_has_failing_checks` — scripts/pr_maintenance_rollup.py:158 — defined here
- `complete_status_check_rollups` — scripts/pr_maintenance_rollup.py:174 — defined here
- `_complete_commit_rollup` — scripts/pr_maintenance_rollup.py:190 — defined here

## Structure
- def fetch_status_context_page_with_graphql( — scripts/pr_maintenance_rollup.py:61
- def fetch_status_context_page_with_gh( — scripts/pr_maintenance_rollup.py:79
- def context_name(context: dict[str, Any]) -> str: — scripts/pr_maintenance_rollup.py:110
- def _context_timestamp(context: dict[str, Any]) -> str: — scripts/pr_maintenance_rollup.py:116
- def dedupe_contexts_by_latest(contexts: list[dict[str, Any]]) -> list[dict[str, Any]]: — scripts/pr_maintenance_rollup.py:125
- def context_is_failing(context: dict[str, Any]) -> bool: — scripts/pr_maintenance_rollup.py:142
- def contexts_are_incomplete(contexts: dict[str, Any]) -> bool: — scripts/pr_maintenance_rollup.py:149
- def rollup_has_failing_checks( — scripts/pr_maintenance_rollup.py:158
- def complete_status_check_rollups( — scripts/pr_maintenance_rollup.py:174
- def _complete_commit_rollup( — scripts/pr_maintenance_rollup.py:190

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/pr_maintenance_rollup.py`, language: Python, lines: 224
- documented invocation: none (pure library module without CLI entry point)
- **executed:** yes
- actual command run: `python3 scripts/pr_maintenance_rollup.py`, abridged stdout: ``, **actual exit code**: 0
- documented exit codes: none vs. actual exit paths: raises `RuntimeError` on gh CLI failure (scripts/pr_maintenance_rollup.py:102); no `sys.exit` calls; exits 0 on direct import/execution
- for validators/gates: `rollup_has_failing_checks` functions as a gate check returning `True` when any check fails or is incomplete
- does the output match what the documentation claims? yes, successfully parses and completes status check rollups

## Defects — required
none

## Observations
- Handles both `CheckRun` (with `conclusion`/`status`) and `StatusContext` (with `state`) GraphQL node typenames.
- Limits context pagination to 50 pages (`_CONTEXTS_MAX_PAGES = 50`) to guard against infinite loops on pathological PR check histories.

## Context cost
7153 bytes, approximately 1800 tokens.
