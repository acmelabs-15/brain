---
package: rjm
name: ConsensusResult
slug: consensusresult
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/consensus/__init__.py, sha256: 9a6da91444611b98e86735832d13ec1f06cbad95954428945e540ca5bea930df}
  - {path: scripts/consensus/algorithms.py, sha256: 1877d5ff7c79a0ac61b50a53c7740142fb86aedb4c5b1c5be53274ac1bf20f67}
  - {path: scripts/consensus/decision_recorder.py, sha256: 685928c8108ab34bd2097a05886f27a74381a4291bd8bfd53b93ff4395ea72e3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ConsensusResult

## Definition — verbatim
(used, not defined)

> "class ConsensusResult:" — scripts/consensus/algorithms.py:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/consensus/__init__.py | 20 | used here | Re-exported consensus result data structure symbol in public package namespace. |
| scripts/consensus/algorithms.py | 53 | defined here | Frozen dataclass defining evaluation results including decision outcome, algorithm, confidence, and vote counts. |
| scripts/consensus/decision_recorder.py | 17 | used here | Imported under TYPE_CHECKING for persisting consensus decision results to JSON files. |

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
defects: orphan, script-bug

## Design notes
ConsensusResult is a Python dataclass identifier modeling consensus outcome, confidence scores, and vote tallies rather than an operational lifecycle concept.
