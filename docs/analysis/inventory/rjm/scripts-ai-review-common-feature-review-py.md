---
package: rjm
path: scripts/ai_review_common/feature_review.py
type: script
bytes: 4232
unit: inv-rjm-195
in_scope_via: .claude/skills/ai-agents-architecture-contract/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/ai_review_common/feature_review.py, sha256: f1df8a966212a49fd3ce788d13523421904304b0a7d576bcdf9c946f6951f522}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ai_review_common/feature_review.py

## Purpose — required, verbatim
> "Feature review parsing: recommendation, assignees, labels extraction." — scripts/ai_review_common/feature_review.py:1

## Design intent — required
Parses unstructured AI feature review outputs to extract structured data: recommendations (`PROCEED`, `DEFER`, `REQUEST_EVIDENCE`, `NEEDS_RESEARCH`, `DECLINE`), suggested assignees (filtering bot names and stop words), and GitHub labels (handling backtick and plain formatting). It applies conservative keyword precedence (`DECLINE` over `DEFER` over `PROCEED`) to prevent false-positive approvals.

## Phase — required
rjm:REVIEW

## Inputs — required
- "output: str" — scripts/ai_review_common/feature_review.py:57
- "RECOMMENDATION:" — scripts/ai_review_common/feature_review.py:22

## Outputs — required
- "VALID_RECOMMENDATIONS" — scripts/ai_review_common/feature_review.py:7
- "PROCEED" — scripts/ai_review_common/feature_review.py:9
- "DEFER" — scripts/ai_review_common/feature_review.py:10
- "REQUEST_EVIDENCE" — scripts/ai_review_common/feature_review.py:11
- "NEEDS_RESEARCH" — scripts/ai_review_common/feature_review.py:12
- "DECLINE" — scripts/ai_review_common/feature_review.py:13

## Invokes — required
none

## Invoked by — required
- script scripts.ai_review_common.feature_review — scripts/ai_review_common/__init__.py:5

## Concepts named — required, verbatim
- `VALID_RECOMMENDATIONS` — scripts/ai_review_common/feature_review.py:7 — defined here | used here
- `PROCEED` — scripts/ai_review_common/feature_review.py:9 — defined here | used here
- `DEFER` — scripts/ai_review_common/feature_review.py:10 — defined here | used here
- `REQUEST_EVIDENCE` — scripts/ai_review_common/feature_review.py:11 — defined here | used here
- `NEEDS_RESEARCH` — scripts/ai_review_common/feature_review.py:12 — defined here | used here
- `DECLINE` — scripts/ai_review_common/feature_review.py:13 — defined here | used here
- `_RECOMMENDATION_PATTERN` — scripts/ai_review_common/feature_review.py:21 — defined here | used here
- `_KEYWORD_FALLBACK_RULES` — scripts/ai_review_common/feature_review.py:29 — defined here | used here
- `get_feature_review_recommendation` — scripts/ai_review_common/feature_review.py:57 — defined here | used here
- `get_feature_review_assignees` — scripts/ai_review_common/feature_review.py:78 — defined here | used here
- `get_feature_review_labels` — scripts/ai_review_common/feature_review.py:107 — defined here | used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ai_review_common/feature_review.py`
- language: Python
- lines: 141
- documented invocation: none
- executed: yes
- actual command run: `python3 scripts/ai_review_common/feature_review.py`, stdout: `""` (empty), actual exit code: 0
- library execution test: `python3 -c "import sys; sys.path.insert(0, '.'); from scripts.ai_review_common.feature_review import get_feature_review_recommendation; print(get_feature_review_recommendation('RECOMMENDATION: PROCEED'))"`, stdout: `PROCEED`, actual exit code: 0
- documented exit codes: none vs. actual exit paths: none (library module; exits 0 upon module import)
- for validators/gates: not a standalone gate; helper parsing library used in issue feature review gates
- does the output match what the documentation claims? yes, extracts recommendations, assignees, and labels according to regex specifications

## Defects — required
none

## Observations
Employs conservative keyword fallback ordering where `DECLINE` takes precedence over `DEFER` and `PROCEED` to avoid accidental approvals. Uses word boundaries (`\b`) to avoid matching substrings such as `PROCEEDING`.

## Context cost
4232 bytes, ~1058 tokens.
