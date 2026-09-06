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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/ruleset_required_contexts.py

## Purpose — required, verbatim
> "Pinned required-context contract for ruleset 11104075." — scripts/ci/ruleset_required_contexts.py:1

## Design intent — required
Defines the canonical in-tree contract for the 9 required status check contexts enforced by GitHub ruleset 11104075 on the `main` branch of `rjmurillo/ai-agents`. Consumed by scheduled drift detection (`scripts/ci/ruleset_context_drift.py`) and merge readiness validation, establishing a single authoritative definition to avoid diverging baselines.

## Phase — required
cross-phase

## Inputs — required
none (declares constants)

## Outputs — required
- Exported constants:
  - `REPOSITORY`
  - `BRANCH`
  - `RULESET_ID`
  - `REQUIRED_CONTEXTS`
  - `REFRESH_COMMAND`

## Invokes — required
none

## Invoked by — required
- script scripts/ci/ruleset_context_drift.py — scripts/ci/ruleset_context_drift.py:113

## Concepts named — required, verbatim
- `REPOSITORY` — scripts/ci/ruleset_required_contexts.py:5 — defined here
- `BRANCH` — scripts/ci/ruleset_required_contexts.py:6 — defined here
- `RULESET_ID` — scripts/ci/ruleset_required_contexts.py:7 — defined here
- `REQUIRED_CONTEXTS` — scripts/ci/ruleset_required_contexts.py:11 — defined here
- `REFRESH_COMMAND` — scripts/ci/ruleset_required_contexts.py:25 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/ruleset_required_contexts.py`, language: Python, lines: 31
- documented invocation:
  "Pinned required-context contract for ruleset 11104075." — scripts/ci/ruleset_required_contexts.py:1
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 sources/rjm/scripts/ci/ruleset_required_contexts.py`
    stdout: ``
    actual exit code: 0
- documented exit codes: none (constant module) vs. actual exit paths in code: none
- for validators/gates: can it exit non-zero? no (module defining constants)
- does the output match what the documentation claims? yes (defines the 9 required contexts)

## Defects — required
none

## Observations
Includes `REFRESH_COMMAND` (lines 25-30) showing the exact GitHub CLI `gh api` command used to inspect and refresh the required status checks.

## Context cost
898 bytes, 31 lines. Approximate tokens: ~250.
