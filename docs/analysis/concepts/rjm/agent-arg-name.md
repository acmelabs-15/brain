---
package: rjm
name: agent_arg_name
slug: agent-arg-name
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

# agent_arg_name

## Definition — verbatim
(used, not defined)

> "def agent_arg_name(agent: str) -> str:" — .github/scripts/quality_gate_agents.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/quality_gate_agents.py | 38 | defined here | Helper function converting an agent name into an argparse destination attribute name. |

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
A Python helper function identifier (`agent_arg_name`) converting agent names into CLI argument destination attributes rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
