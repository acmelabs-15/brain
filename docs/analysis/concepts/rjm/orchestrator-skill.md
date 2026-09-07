---
package: rjm
name: Orchestrator Skill
slug: orchestrator-skill
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/SKILL-STANDARDS-RECONCILED.md, sha256: 519c3146eb8bc63670a8219a2b2beb598d871658825c757990b0715cc12de505}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Orchestrator Skill

## Definition — verbatim
> "### A.3 Orchestrator Skill (Delegated Agents Inherit The Harness Model)" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:835

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 835 | defined here | Appendix section providing a complete example of an orchestrator skill coordinating multi-agent debate. |

## Consumes
Multi-agent task scope, triggering file events, and domain specifications.

## Produces
Coordinated multi-agent workflow executions with unpinned harness model inheritance.

## When applied
Applied when designing a skill that coordinates multiple subagents (e.g. adr-review) without hardcoding subagent model pins.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift (reconciles ADR-040 comma-separated allowed-tools and ADR-080 model field supersession)

## Design notes
A skill design pattern specialized in coordinating multi-agent debate and delegation workflows while strictly following ADR-080 model inheritance rules across subagents.
