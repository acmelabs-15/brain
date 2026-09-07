---
package: rjm
name: diff_misses
slug: diff-misses
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/external_signals/acceptance_criteria.py, sha256: f11417815ba57aa29786c3c9c962fd0a811cb2ac651b9b466992e482bb8883e8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# diff_misses

## Definition — verbatim
(used, not defined)

> "def diff_misses(criteria: Iterable[Criterion], diff: str) -> list[str]:" — scripts/external_signals/acceptance_criteria.py:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/external_signals/acceptance_criteria.py | 129 | defines | Returns criterion texts whose extracted keywords do not appear in added lines of a unified diff. |

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
`diff_misses` is a Python helper function performing coarse smoke-grepping of diff additions for criterion keywords rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
