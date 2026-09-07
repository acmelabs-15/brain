---
package: rjm
name: _FAILURE_STATES
slug: failure-states
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/pr_maintenance_rollup.py, sha256: 5abba9ce87a2916bed28e35fbab18047b401209abb7609199134b86e6256fcd1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _FAILURE_STATES

## Definition — verbatim
(used, not defined)

> "_FAILURE_STATES = {" — scripts/pr_maintenance_rollup.py:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/pr_maintenance_rollup.py | 10 | defined here | Constant set defining failing status check conclusions and states. |

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
`_FAILURE_STATES` is an internal Python set constant defining failing status check conclusions in PR maintenance scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
