---
package: rjm
name: _avg_scores
slug: avg-scores
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _avg_scores

## Definition — verbatim
(used, not defined)

> "def _avg_scores(score_list: list[dict[str, Any]]) -> dict[str, float]:" — scripts/eval/eval-agents.py:664

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-agents.py | 664 | defined here | Helper function averaging dimensional evaluation scores across a list of assessment score dictionaries. |

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
defects: missing-path

## Design notes
An internal Python helper function (`_avg_scores`) in `eval-agents.py` computing dimensional averages, classified as `name-only` per D-023.
