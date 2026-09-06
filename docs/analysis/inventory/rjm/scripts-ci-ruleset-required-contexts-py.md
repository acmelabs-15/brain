---
package: rjm
path: scripts/ci/ruleset_required_contexts.py
type: script
bytes: 898
unit: inv-rjm-206
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/ruleset_required_contexts.py, sha256: e20d3bab6c5e8d2312db178d5a46b54f27f0a1fc6401ccd229996a4f7f57234b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/ruleset_required_contexts.py

## Purpose — required, verbatim
> "Pinned required-context contract for ruleset 11104075." — scripts/ci/ruleset_required_contexts.py:1

## Design intent — required
Serves as the single canonical source of truth for the required status check contexts enforced on the `main` branch by GitHub ruleset `11104075`. Centralizing these contexts in one module prevents drift across the merge-group readiness gate, the drift detector script, and CI test suites. Also documents the exact `gh api` command needed to query and refresh the pinned list directly from GitHub.

## Phase — required
none

## Inputs — required
none

## Outputs — required
- Exports module constants including `REPOSITORY`, `BRANCH`, `RULESET_ID`, `REQUIRED_CONTEXTS`, and `REFRESH_COMMAND` — scripts/ci/ruleset_required_contexts.py:25

## Invokes — required
none

## Invoked by — required
- `script ruleset_context_drift.py — scripts/ci/ruleset_context_drift.py:27`
- `.agents/architecture/ADR-100-retire-pr-size-ceilings.md:52`
- `tests/ci/test_merge_group_readiness.py:18`
- `tests/ci/test_ruleset_context_drift.py:12`

## Concepts named — required, verbatim
- `RULESET_ID` — scripts/ci/ruleset_required_contexts.py:7 — defined here
- `REQUIRED_CONTEXTS` — scripts/ci/ruleset_required_contexts.py:11 — defined here
- `REFRESH_COMMAND` — scripts/ci/ruleset_required_contexts.py:25 — defined here

## Structure
- module docstring — scripts/ci/ruleset_required_contexts.py:1
- REPOSITORY — scripts/ci/ruleset_required_contexts.py:5
- BRANCH — scripts/ci/ruleset_required_contexts.py:6
- RULESET_ID — scripts/ci/ruleset_required_contexts.py:7
- REQUIRED_CONTEXTS — scripts/ci/ruleset_required_contexts.py:11
- REFRESH_COMMAND — scripts/ci/ruleset_required_contexts.py:25

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/ruleset_required_contexts.py`, language: Python, lines: 31
- documented invocation:
  > "gh api repos/{REPOSITORY}/rulesets/{RULESET_ID} \\\n" — scripts/ci/ruleset_required_contexts.py:26
- executed: yes
- actual command: `python3 sources/rjm/scripts/ci/ruleset_required_contexts.py`
- stdout: none
- actual exit code: 0
- documented exit codes: none (module constants definition; executes successfully with returncode 0)
- for validators/gates: no (data module)
- does the output match what the documentation claims: yes, defines the 9 required status checks matching the live ruleset

## Defects — required
- `other` · scripts/ci/ruleset_required_contexts.py:1 · Classified in manifest as script rather than config.

## Observations
Pins exactly 9 required status checks: `Analyze (actions)`, `Analyze (python)`, `Run Python Tests`, `Validate Generated Files`, `Validate Path Normalization`, `Validate PR`, `Validate PR title`, `Validate Plugin Version Bump`, `Validate Spec Coverage`.

## Context cost
Bytes: 898. Approximate tokens: ~250.
