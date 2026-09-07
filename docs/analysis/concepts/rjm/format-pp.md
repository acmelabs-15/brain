---
package: rjm
name: _format_pp
slug: format-pp
kind: name-only
package_phase: none
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

# _format_pp

## Definition — verbatim
(used, not defined)

> "def _format_pp(value: float) -> str:" — scripts/eval/_report_writer.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_report_writer.py | 47 | defined here | Utility rendering signed delta fractions as explicit percentage points with a pp suffix. |

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
_format_pp is a string formatting utility function rendering fractions as signed percentage points rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
