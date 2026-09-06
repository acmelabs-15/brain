---
package: rjm
path: scripts/ai_review_common/__init__.py
type: script
bytes: 2115
unit: inv-rjm-195
in_scope_via: .claude/skills/ai-agents-architecture-contract/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/ai_review_common/__init__.py, sha256: 3f36c029f63472c8e276ce8896a4c8bcbda405c8e280eb6d341f7a5cc74fe20d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ai_review_common/__init__.py

## Purpose — required, verbatim
> "AI Review Common module: shared helpers for AI-powered review workflows." — scripts/ai_review_common/__init__.py:1

## Design intent — required
Provides the public export interface for the `ai_review_common` package, aggregating and re-exporting feature review parsing helpers from `feature_review`, formatting and GitHub Actions logging helpers from `issue_triage`, and quality gate runners and verdict checkers from `quality_gate`. This exposes a single import surface for AI review tooling across the repository.

## Phase — required
rjm:REVIEW

## Inputs — required
- "from scripts.ai_review_common.feature_review import (" — scripts/ai_review_common/__init__.py:5
- "from scripts.ai_review_common.issue_triage import (" — scripts/ai_review_common/__init__.py:11
- "from scripts.ai_review_common.quality_gate import (" — scripts/ai_review_common/__init__.py:25

## Outputs — required
- "__all__ = [" — scripts/ai_review_common/__init__.py:46

## Invokes — required
- script scripts.ai_review_common.feature_review — scripts/ai_review_common/__init__.py:5
- script scripts.ai_review_common.issue_triage — scripts/ai_review_common/__init__.py:11
- script scripts.ai_review_common.quality_gate — scripts/ai_review_common/__init__.py:25

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `VALID_RECOMMENDATIONS` — scripts/ai_review_common/__init__.py:6 — used here
- `FAIL_VERDICTS` — scripts/ai_review_common/__init__.py:26 — used here
- `SAFE_NAME_PATTERN` — scripts/ai_review_common/__init__.py:27 — used here
- `assert_environment_variables` — scripts/ai_review_common/__init__.py:28 — used here
- `extract_verdict` — scripts/ai_review_common/__init__.py:29 — used here
- `merge_verdicts` — scripts/ai_review_common/__init__.py:41 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ai_review_common/__init__.py`
- language: Python
- lines: 82
- documented invocation: none
- executed: yes
- actual command run: `PYTHONPATH=. python3 -c "import scripts.ai_review_common; print(len(scripts.ai_review_common.__all__))"`, stdout: `34`, actual exit code: 0
- documented exit codes: none vs. actual exit paths: none (re-exports 34 module symbols; raises ModuleNotFoundError when executed directly without package context)
- for validators/gates: not a validator or gate
- does the output match what the documentation claims? none

## Defects — required
- orphan · scripts/ai_review_common/__init__.py:1 · package initializer is not directly imported by in-scope lifecycle scripts; synced to .claude/lib/ai_review_common and consumed by test suites.

## Observations
Exposes a clean facade of 34 symbols in `__all__`. Note that `cache_guard.py` is omitted from `__all__` as it operates as a standalone CLI action step rather than an exported library helper.

## Context cost
2115 bytes, ~528 tokens.
