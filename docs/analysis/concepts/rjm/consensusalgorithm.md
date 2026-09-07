---
package: rjm
name: ConsensusAlgorithm
slug: consensusalgorithm
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/consensus/__init__.py, sha256: 9a6da91444611b98e86735832d13ec1f06cbad95954428945e540ca5bea930df}
  - {path: scripts/consensus/algorithms.py, sha256: 1877d5ff7c79a0ac61b50a53c7740142fb86aedb4c5b1c5be53274ac1bf20f67}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ConsensusAlgorithm

## Definition — verbatim
(used, not defined)

> "class ConsensusAlgorithm(StrEnum):" — scripts/consensus/algorithms.py:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/consensus/__init__.py | 19 | used here | Re-exported consensus algorithm enumeration symbol in public package namespace. |
| scripts/consensus/algorithms.py | 20 | defined here | Enumeration defining supported consensus algorithms (majority, weighted, quorum, unanimous). |

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
ConsensusAlgorithm is a Python string enumeration identifier defining supported consensus algorithms rather than an operational lifecycle concept.
