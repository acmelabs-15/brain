---
package: rjm
name: _render_recommendation_section
slug: render-recommendation-section
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_report_writer.py, sha256: 2880d2a761552d864a734fd23db9f205c2ade9b2964f5892a7043ec3fb488fc7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _render_recommendation_section

## Definition — verbatim
(used, not defined)

> "def _render_recommendation_section(recommendation: str | None = None) -> str:" — scripts/eval/_report_writer.py:269

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_report_writer.py | 269 | defined here | Helper function rendering the evaluation recommendation or verdict section. |

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
An internal report writer formatting function for evaluation verdicts rather than an agent lifecycle concept.
