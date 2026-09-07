---
package: rjm
name: _render_form_factor_section
slug: render-form-factor-section
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

# _render_form_factor_section

## Definition — verbatim
(used, not defined)

> "def _render_form_factor_section(form_factor: FormFactorComparison | None) -> str:" — scripts/eval/_report_writer.py:181

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_report_writer.py | 181 | defined here | Helper function rendering the Markdown table section comparing agent and skill form factors. |

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
An internal formatting helper function in the report writer rather than an agent lifecycle concept.
