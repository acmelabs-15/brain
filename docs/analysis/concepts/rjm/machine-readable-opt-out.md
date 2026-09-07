---
package: rjm
name: Machine-readable opt-out
slug: machine-readable-opt-out
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Machine-readable opt-out

## Definition — verbatim
(used, not defined)

> "Machine-readable opt-out (the issue's acceptance criterion):" — scripts/validation/check_skill_md_portability.py:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 27 | defined here | Docstring section heading describing how skills declare intentional path dependencies via HTML comment markers. |

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
defects: doc-drift

## Design notes
`Machine-readable opt-out` is a docstring section heading describing acceptance criteria for path opt-outs rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
