---
package: rjm
name: aggregate_multi_run_scores
slug: aggregate-multi-run-scores
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_common.py, sha256: 68a26fff6cd877843cddfabd13608f4f1e8f30b0808e5e73888793b6dc811ad6}
  - {path: scripts/eval/eval-agents.py, sha256: 48eee5226245d9a269beecb305d41e7bdad5e7fd995e93a3da23d8c3c33bce4e}
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# aggregate_multi_run_scores

## Definition — verbatim
(used, not defined)

> "def aggregate_multi_run_scores(" — scripts/eval/_eval_common.py:138

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_common.py | 138 | defined here | Aggregation function averaging scores and calculating variance across multiple runs under ADR-057. |
| scripts/eval/eval-agents.py | 55 | used here | Imported to aggregate multi-run evaluation scores for agent testing. |
| scripts/eval/eval-agents.py | 683 | defined here | Wrapper function forwarding agent run scores and dimensions to aggregate_multi_run_scores. |
| scripts/eval/eval-knowledge-integration.py | 38 | used here | Imported to aggregate multi-run evaluation metrics across knowledge integration tests. |

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
defects: missing-path, doc-drift

## Design notes
aggregate_multi_run_scores is a Python scoring function implementing ADR-057 variance aggregation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
