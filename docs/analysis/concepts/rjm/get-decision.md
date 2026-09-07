---
package: rjm
name: get_decision
slug: get-decision
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

# get_decision

## Definition — verbatim
(used, not defined)

> "def get_decision(self, decision_id: str) -> Decision | None:" — scripts/consensus/decision_recorder.py:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/consensus/decision_recorder.py | 115 | defined here | Method retrieving a previously recorded decision by its unique identifier. |

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
get_decision is a Python method identifier in scripts/consensus/decision_recorder.py retrieving decision records from storage rather than an operational lifecycle concept.
