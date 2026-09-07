---
package: rjm
name: compute_bare_credit
slug: compute-bare-credit
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/_main_binding.py, sha256: 1009fe6ae95a4957bbb97bd561b2d48ac998636732375b335c3ef32dadacd60d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# compute_bare_credit

## Definition — verbatim
(used, not defined)

> "Map function/class definition lineno -> stems bare main() should credit." — scripts/ci/_main_binding.py:111

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/_main_binding.py | 105 | defined here | Function mapping definition line numbers to script stems that bare main() calls should credit. |

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
`compute_bare_credit` is an AST analysis helper function in `scripts/ci/_main_binding.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
