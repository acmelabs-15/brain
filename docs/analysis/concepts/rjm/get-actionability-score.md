---
package: rjm
name: get_actionability_score
slug: get-actionability-score
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/update_reviewer_signal_stats.py, sha256: 4b6c1c52f7c49f9d5ba2b3884926800b17ce518c26602fa0f9089ee99c17b01e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_actionability_score

## Definition — verbatim
(used, not defined)

> "def get_actionability_score(" — scripts/update_reviewer_signal_stats.py:250

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_reviewer_signal_stats.py | 250 | defined here | Function evaluating comment actionability using pattern heuristics with optional LLM classification fallback. |

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
defects: orphan

## Design notes
`get_actionability_score` is a Python scoring function identifier in `scripts/update_reviewer_signal_stats.py` calculating comment quality rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
