---
package: rjm
name: RETIRED
slug: retired
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/agent-governance.md, sha256: 7f47f4eeb98932c35d1a40b57c785787eac15f369a21f1787e686f324ad291d2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RETIRED

## Definition — verbatim
(used, not defined)

> "PROPOSED -> APPROVED -> ACTIVE -> DEPRECATED -> RETIRED" — docs/agent-governance.md:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-governance.md | 64 | defined here | Terminal stage of the agent lifecycle state machine representing an archived agent. |

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
RETIRED is an agent lifecycle status enum and terminal state representing an archived agent rather than an active operational lifecycle concept, classified as kind: name-only per D-023.
