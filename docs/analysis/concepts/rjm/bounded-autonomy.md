---
package: rjm
name: Bounded autonomy
slug: bounded-autonomy
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/references/agent-memory-inference-leakage.md, sha256: 83b83209ca6c21d8a0a459fb4b087cc23dd0a5e24f51c35bb23238da505fabbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Bounded autonomy

## Definition — verbatim
(used, not defined)

> "- Bounded autonomy: the tier model for what an agent may do unilaterally." — .claude/skills/security-scan/references/agent-memory-inference-leakage.md:72

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/agent-memory-inference-leakage.md | 72 | used here | Cited under Connections as the tier model governing unilateral agent actions. |

## Consumes
Agent role specifications, task definitions, and autonomy level declarations.

## Produces
Tiered boundaries establishing which operations an agent may execute unilaterally versus those requiring approval or explicit grants.

## When applied
Applied across all phases when configuring agent operational permissions and safety boundaries.

## Sub-concepts
standing-order

## Part of
none

## Implementation status
clean

## Design notes
The overarching operational model in rjm defining tiered boundaries and authority constraints for what autonomous agents are permitted to execute unilaterally without supervisor or human approval.
