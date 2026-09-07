---
package: rjm
name: Conservative branch join
slug: conservative-branch-join
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

# Conservative branch join

## Definition — verbatim
(used, not defined)

> "Conservative branch join: only credit when ALL reachable states agree." — scripts/ci/_main_binding.py:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/_main_binding.py | 17 | defined here | Control flow join strategy ensuring exit-contract credit is only granted when all execution branches agree. |

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
Conservative branch join is an AST static analysis control-flow join rule in `scripts/ci/_main_binding.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
