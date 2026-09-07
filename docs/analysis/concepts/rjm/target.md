---
package: rjm
name: TARGET
slug: target
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

# TARGET

## Definition — verbatim
(used, not defined)

> "- TARGET(stems): main resolves to known script stems via import or re-export" — scripts/ci/_main_binding.py:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/_main_binding.py | 13 | defined here | State model value indicating main resolves to known script stems via import or re-export. |

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
`TARGET` is an enum state value in the AST analysis module `scripts/ci/_main_binding.py` indicating resolution of main to target script stems rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
