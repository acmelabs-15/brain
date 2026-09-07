---
package: rjm
name: fishers_exact_one_sided
slug: fishers-exact-one-sided
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-reviewer-asymmetry.py, sha256: c7751b7daf8566fcc141421c962287c577ed89966f15bf95cb39ac32b26ced9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fishers_exact_one_sided

## Definition — verbatim
(used, not defined)

> "def fishers_exact_one_sided(a: int, b: int, c: int, d: int) -> float:" — scripts/eval/eval-reviewer-asymmetry.py:204

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-reviewer-asymmetry.py | 204 | defined here | Function implementing one-sided Fisher's exact test on a 2x2 contingency table. |

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
A Python function in `eval-reviewer-asymmetry.py` implementing Fisher's exact test via standard library math combinations, classified as name-only per D-023.
