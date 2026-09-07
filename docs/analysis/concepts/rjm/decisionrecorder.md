---
package: rjm
name: DecisionRecorder
slug: decisionrecorder
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/consensus/__init__.py, sha256: 9a6da91444611b98e86735832d13ec1f06cbad95954428945e540ca5bea930df}
  - {path: scripts/consensus/decision_recorder.py, sha256: 685928c8108ab34bd2097a05886f27a74381a4291bd8bfd53b93ff4395ea72e3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DecisionRecorder

## Definition — verbatim
(used, not defined)

> "class DecisionRecorder:" — scripts/consensus/decision_recorder.py:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/consensus/__init__.py | 27 | used here | Re-exported decision persistence class symbol from decision_recorder submodule. |
| scripts/consensus/decision_recorder.py | 45 | defined here | Class providing persistence, indexing, and retrieval of multi-agent decisions on disk. |

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
DecisionRecorder is a Python class identifier in scripts/consensus/decision_recorder.py providing storage management for multi-agent decisions rather than an operational lifecycle concept.
