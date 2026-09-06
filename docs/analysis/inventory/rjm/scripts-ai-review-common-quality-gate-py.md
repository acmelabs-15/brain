---
package: rjm
path: scripts/ai_review_common/quality_gate.py
type: script
bytes: 715
unit: inv-rjm-196
in_scope_via: .claude/skills/ai-agents-architecture-contract/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/ai_review_common/quality_gate.py, sha256: 4b256216d3a93ee6f649647aa42dde223b52202cbd69d3fa1077d3e3854d8adb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ai_review_common/quality_gate.py

## Purpose — required, verbatim
> "Quality gate facade: re-exports from retry, verdict, workflow submodules." — scripts/ai_review_common/quality_gate.py:1

## Design intent — required
Acts as a unified facade and re-export module consolidating key review gate utilities from `retry`, `verdict`, and `workflow` submodules. Without this facade, consumers across quality gate scripts and test suites would have to import from three separate submodules instead of a single canonical entry point.

## Phase — required
rjm:review

## Inputs — required
None directly; pure re-export module that loads symbols from `scripts.ai_review_common` submodules.

## Outputs — required
Re-exported symbols: `invoke_with_retry`, `FAIL_VERDICTS`, `SAFE_NAME_PATTERN`, `extract_verdict`, `get_failure_category`, `get_labels`, `get_labels_from_ai_output`, `get_milestone`, `get_milestone_from_ai_output`, `get_verdict`, `merge_verdicts`, `spec_validation_failed`, `assert_environment_variables`, `get_concurrency_group_from_run`, `get_pr_changed_files`, `get_workflow_runs_by_pr`, `initialize_ai_review`, `runs_overlap`.

## Invokes — required
- script retry — scripts/ai_review_common/quality_gate.py:3
- script verdict — scripts/ai_review_common/quality_gate.py:6
- script workflow — scripts/ai_review_common/quality_gate.py:19

## Invoked by — required
- script quality_gate — scripts/ai_review_common/__init__.py:25

## Concepts named — required, verbatim
- `invoke_with_retry` — scripts/ai_review_common/quality_gate.py:4 — used here
- `FAIL_VERDICTS` — scripts/ai_review_common/quality_gate.py:7 — used here
- `SAFE_NAME_PATTERN` — scripts/ai_review_common/quality_gate.py:8 — used here
- `extract_verdict` — scripts/ai_review_common/quality_gate.py:9 — used here
- `get_failure_category` — scripts/ai_review_common/quality_gate.py:10 — used here
- `get_labels` — scripts/ai_review_common/quality_gate.py:11 — used here
- `get_labels_from_ai_output` — scripts/ai_review_common/quality_gate.py:12 — used here
- `get_milestone` — scripts/ai_review_common/quality_gate.py:13 — used here
- `get_milestone_from_ai_output` — scripts/ai_review_common/quality_gate.py:14 — used here
- `get_verdict` — scripts/ai_review_common/quality_gate.py:15 — used here
- `merge_verdicts` — scripts/ai_review_common/quality_gate.py:16 — used here
- `spec_validation_failed` — scripts/ai_review_common/quality_gate.py:17 — used here
- `assert_environment_variables` — scripts/ai_review_common/quality_gate.py:20 — used here
- `get_concurrency_group_from_run` — scripts/ai_review_common/quality_gate.py:21 — used here
- `get_pr_changed_files` — scripts/ai_review_common/quality_gate.py:22 — used here
- `get_workflow_runs_by_pr` — scripts/ai_review_common/quality_gate.py:23 — used here
- `initialize_ai_review` — scripts/ai_review_common/quality_gate.py:24 — used here
- `runs_overlap` — scripts/ai_review_common/quality_gate.py:25 — used here

## Structure
- Quality gate facade — scripts/ai_review_common/quality_gate.py:1

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ai_review_common/quality_gate.py`
- language: Python
- lines: 27
- documented invocation:
  "Quality gate facade: re-exports from retry, verdict, workflow submodules." — scripts/ai_review_common/quality_gate.py:1
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm python3 sources/rjm/scripts/ai_review_common/quality_gate.py`
- abridged stdout: (empty)
- **actual exit code:** 0
- documented exit codes: none
- actual exit paths in code:
  No exit paths in code; pure re-export module.
- for validators/gates:
  Does not exit directly; re-exports validator functions such as `spec_validation_failed` and `extract_verdict`.
- does the output match what the documentation claims?
  Yes, successfully imports and exposes all target submodules and functions.

## Defects — required
- `script-bug` · scripts/ai_review_common/quality_gate.py:3 · Direct execution without setting `PYTHONPATH` (`python3 scripts/ai_review_common/quality_gate.py`) fails with `ModuleNotFoundError: No module named 'scripts'` due to absolute import style.
- `internal-contradiction` · scripts/ai_review_common/quality_gate.py:3 · Uses absolute import syntax `from scripts.ai_review_common...` whereas sibling `issue_triage.py` uses relative imports `from .verdict import...`.

## Observations
- Pure facade module (27 lines) providing a single point of entry for quality gate routines across the codebase.

## Context cost
File size: 715 bytes (27 lines). Imports `retry.py` (2,777 bytes), `verdict.py` (10,325 bytes), and `workflow.py` (6,366 bytes). Total imported size: 20,183 bytes (~5,100 tokens).
