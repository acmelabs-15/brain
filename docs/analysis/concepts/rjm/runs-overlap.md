---
package: rjm
name: runs_overlap
slug: runs-overlap
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_common/quality_gate.py, sha256: 4b256216d3a93ee6f649647aa42dde223b52202cbd69d3fa1077d3e3854d8adb}
  - {path: scripts/ai_review_common/workflow.py, sha256: afc062433185e6daf4a066162000ab7a13caa0b4e33383ff2dd450065de240ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# runs_overlap

## Definition — verbatim
(used, not defined)

> "def runs_overlap(run1: dict[str, Any], run2: dict[str, Any]) -> bool:" — scripts/ai_review_common/workflow.py:150

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_common/quality_gate.py | 25 | used here | Re-exports workflow run temporal overlap check from the quality gate facade. |
| scripts/ai_review_common/workflow.py | 150 | defined here | Evaluates whether timestamps of two workflow runs represent overlapping intervals. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A Python helper function identifier (runs_overlap) determining whether two workflow runs overlap in execution interval rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
