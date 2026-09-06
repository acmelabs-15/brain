---
package: rjm
path: scripts/github_core/checks_rollup.py
type: script
bytes: 8696
unit: inv-rjm-241
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/github_core/checks_rollup.py, sha256: dede2391ab079ee5be7c7e9964ab3de3308368ecaf137ec632ffb7af4c0759a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/github_core/checks_rollup.py

## Purpose — required, verbatim
> "Shared logic for grouping and evaluating GitHub status check rollups." — scripts/github_core/checks_rollup.py:2

## Design intent — required
Provides shared logic for parsing, grouping, and evaluating GitHub status check rollups across both CheckRun and StatusContext entities. It prevents semantic drift between check reporting and merge-readiness gates by standardizing how multiple check runs are grouped by workflow run ID and attempt, evaluating required checks via logical OR, and comparing rollup contexts against repository branch rulesets to identify missing required checks.

## Phase — required
cross-phase

## Inputs — required
GitHub check run / status context dictionary representations, check detail URLs, GitHub repository branch rulesets fetched via `gh api` CLI.

## Outputs — required
Grouped check dictionaries, dictionaries mapping check names to required booleans, lists of pending and failed required checks, and lists of missing required contexts.

## Invokes — required
none

## Invoked by — required
- script checks_rollup — scripts/ci/ruleset_context_drift.py:34

## Concepts named — required, verbatim
- `isRequired` — scripts/github_core/checks_rollup.py:7 — used here
- `CheckRun` — scripts/github_core/checks_rollup.py:8 — used here
- `StatusContext` — scripts/github_core/checks_rollup.py:8 — used here
- `extract_workflow_run_id` — scripts/github_core/checks_rollup.py:27 — defined here
- `partition_rows_by_run` — scripts/github_core/checks_rollup.py:46 — defined here
- `group_checks_by_name` — scripts/github_core/checks_rollup.py:87 — defined here
- `extract_required_check_lists` — scripts/github_core/checks_rollup.py:127 — defined here
- `fetch_ruleset_required_contexts` — scripts/github_core/checks_rollup.py:162 — defined here
- `find_missing_required` — scripts/github_core/checks_rollup.py:212 — defined here

## Structure
- def extract_workflow_run_id — scripts/github_core/checks_rollup.py:27
- def extract_workflow_run_number — scripts/github_core/checks_rollup.py:40
- def partition_rows_by_run — scripts/github_core/checks_rollup.py:46
- def group_checks_by_name — scripts/github_core/checks_rollup.py:87
- def extract_required_check_lists — scripts/github_core/checks_rollup.py:127
- def fetch_ruleset_required_contexts — scripts/github_core/checks_rollup.py:162
- def find_missing_required — scripts/github_core/checks_rollup.py:212

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/github_core/checks_rollup.py`, Python, 223 lines
- **documented invocation:** none
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/github_core/checks_rollup.py`
- **abridged stdout:** (empty)
- **actual exit code:** 0
- **documented exit codes:** none vs. actual exit paths in code: none (library module without process exit calls)
- **validators/gates:** none
- **output match:** yes (clean execution as a library module)

## Defects — required
none

## Observations
Encodes key branch-protection and required-check semantics: ORs `isRequired` flags across rows, properly distinguishes workflow attempts using run attempts, and queries GitHub branch ruleset endpoints (`repos/{owner}/{repo}/rules/branches/{branch}`) rather than deprecated branch-protection endpoints.

## Context cost
8,696 bytes (~2,250 tokens). Loads standard library only.
