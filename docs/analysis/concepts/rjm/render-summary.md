---
package: rjm
name: render_summary
slug: render-summary
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/check_codeql_sarif.py, sha256: e20a24e447806fac29fce1245d20683d67b25fda571e06fd6ee6c5d1ac359c13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# render_summary

## Definition — verbatim
(used, not defined)

> "def render_summary(tally: Tally) -> str:" — scripts/ci/check_codeql_sarif.py:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/check_codeql_sarif.py | 117 | defined here | Function rendering Markdown summary table of SARIF findings for GitHub job summary. |

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
A Python function identifier (`render_summary`) formatting Markdown tally summaries recorded during inventory analysis, classified as `name-only` per D-023.
