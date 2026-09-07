---
package: rjm
name: QUALITY_GATE_AGENT_DISPLAY_NAMES
slug: quality-gate-agent-display-names
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/quality_gate_agents.py, sha256: 8e6a842ebc6d91a06ed2422a2f5cb5f47c10755d98dcdd7a793d5fa528574f77}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# QUALITY_GATE_AGENT_DISPLAY_NAMES

## Definition — verbatim
(used, not defined)

> "QUALITY_GATE_AGENT_DISPLAY_NAMES = {" — .github/scripts/quality_gate_agents.py:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/quality_gate_agents.py | 19 | defined here | Constant dictionary mapping quality gate agent identifiers to human-readable display names. |

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
A Python dictionary constant identifier (`QUALITY_GATE_AGENT_DISPLAY_NAMES`) mapping agent identifiers to display strings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
