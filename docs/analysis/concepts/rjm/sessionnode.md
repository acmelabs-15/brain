---
package: rjm
name: SessionNode
slug: sessionnode
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/traceability/reconstruct_trace.py, sha256: ca583e5d73a03980877473ec231b4879af5011e2718eb188e5eded7369b9f081}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SessionNode

## Definition — verbatim
(used, not defined)

> "class SessionNode:" — scripts/traceability/reconstruct_trace.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/reconstruct_trace.py | 30 | defined here | Dataclass representing a node in the agent call graph delegation tree. |

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
A Python dataclass identifier in `reconstruct_trace.py` representing an individual session in an agent call graph, classified as `name-only` per D-023.
