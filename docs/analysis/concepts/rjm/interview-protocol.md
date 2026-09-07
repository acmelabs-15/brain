---
package: rjm
name: Interview Protocol
slug: interview-protocol
kind: technique
package_phase: cross-phase
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

# Interview Protocol

## Definition — verbatim
(used, not defined)

> "| Interview Protocol | `.agents/governance/agent-interview-protocol.md` | Capability discovery process |" — docs/agent-governance.md:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/agent-governance.md | 15 | used here | Table entry referencing the capability discovery process and protocol artifact for agent governance. |

## Consumes
Agent definitions, system prompts, operational history, and architectural specifications.

## Produces
Structured capability documentation, explicit limitations, and interview records.

## When applied
Applied during agent governance when onboarding new agents or assessing existing agents for capability overlap.

## Sub-concepts
none

## Part of
steering-committee

## Implementation status
clean

## Design notes
A standardized capability discovery process in rjm's governance framework that interrogates an agent's boundaries, limitations, and operational scope to prevent overlap and ensure accurate routing across the multi-agent system.
