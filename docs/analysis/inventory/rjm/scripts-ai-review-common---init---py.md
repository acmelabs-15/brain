---
package: rjm
path: scripts/ai_review_common/__init__.py
type: script
bytes: 2115
unit: inv-rjm-195
in_scope_via: .claude/skills/review/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/ai_review_common/__init__.py, sha256: 3f36c029f63472c8e276ce8896a4c8bcbda405c8e280eb6d341f7a5cc74fe20d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ai_review_common/__init__.py

## Purpose — required, verbatim
> "AI Review Common module: shared helpers for AI-powered review workflows." — scripts/ai_review_common/__init__.py:1

## Design intent — required
Top-level package initialization module for `scripts.ai_review_common` that aggregates and re-exports core utilities from `feature_review`, `issue_triage`, and `quality_gate`. Exposes a unified public API (`__all__`) providing verdict constants (`FAIL_VERDICTS`), recommendation sets (`VALID_RECOMMENDATIONS`), GitHub Actions output helpers, markdown formatters, verdict parsers, and retry mechanics. Without this file, consumers such as CI review scripts, triage workflows, and quality gates would have to couple directly to internal submodule implementations, increasing import churn and maintenance overhead across the review pipeline.

## Phase — required
rjm:review

## Inputs — required
none

## Outputs — required
none

## Invokes — required
- script scripts.ai_review_common.feature_review — scripts/ai_review_common/__init__.py:5
- script scripts.ai_review_common.issue_triage — scripts/ai_review_common/__init__.py:11
- script scripts.ai_review_common.quality_gate — scripts/ai_review_common/__init__.py:25

## Invoked by — required
scripts/quality_gate/check_critical_failures.py

## Concepts named — required, verbatim
- `AI Review Common module` — scripts/ai_review_common/__init__.py:1 — defined here
- `VALID_RECOMMENDATIONS` — scripts/ai_review_common/__init__.py:6 — used here
- `FAIL_VERDICTS` — scripts/ai_review_common/__init__.py:26 — used here
- `SAFE_NAME_PATTERN` — scripts/ai_review_common/__init__.py:27 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
The file itself is a Python module:
- path: `scripts/ai_review_common/__init__.py`, language: Python, lines: 82
- documented invocation: `python3 -c "import scripts.ai_review_common"`
- **executed:** yes
- actual command run: `python3 -c "import scripts.ai_review_common; print('ok')"`
- actual stdout (abridged): `ok`
- **actual exit code:** 0
- documented exit codes vs actual exit paths: none documented; exits 0 implicitly on clean import
- for validators/gates: not a validator or gate; cannot exit non-zero
- does the output match what the documentation claims? yes (imports and exposes `__all__` cleanly)

## Defects — required
none

## Observations
Clean, explicit `__all__` list exporting 35 symbols. `cache_guard.py` is intentionally omitted from `__all__` as it is an executable CLI guard for GitHub Actions rather than an imported library helper.

## Context cost
2,115 bytes (~530 tokens) standalone. Loads `feature_review.py`, `issue_triage.py`, and `quality_gate.py` upon import.
