---
package: rjm
name: _render_ci_section
slug: render-ci-section
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

# _render_ci_section

## Definition — verbatim
(used, not defined)

> "def _render_ci_section(aggregate: AggregateResult) -> str:" — scripts/eval/_report_writer.py:220

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_report_writer.py | 220 | defined here | Formats bootstrap confidence interval metrics and flakiness caveats in evaluation reports. |

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
An internal formatting function rendering confidence interval metrics in evaluation reports rather than an agent lifecycle concept.
