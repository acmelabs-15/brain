---
package: rjm
name: list_decisions
slug: list-decisions
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/consensus/decision_recorder.py, sha256: 685928c8108ab34bd2097a05886f27a74381a4291bd8bfd53b93ff4395ea72e3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# list_decisions

## Definition — verbatim
(used, not defined)

> "def list_decisions(" — scripts/consensus/decision_recorder.py:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/consensus/decision_recorder.py | 130 | defined here | Method listing stored decision records with optional limit and topic filtering. |

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
list_decisions is a Python method identifier in scripts/consensus/decision_recorder.py listing and filtering stored decisions rather than an operational lifecycle concept.
