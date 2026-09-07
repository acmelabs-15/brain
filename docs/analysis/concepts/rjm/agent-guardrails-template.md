---
package: rjm
name: Agent Guardrails Template
slug: agent-guardrails-template
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/security-scan/references/agent-guardrails-template.md, sha256: 9cb3f3b258fa15cfa4a6bfec04f0de8d93e7b340285b21b84b153b056f97ac07}
  - {path: .claude/skills/security-scan/references/agent-memory-inference-leakage.md, sha256: 83b83209ca6c21d8a0a459fb4b087cc23dd0a5e24f51c35bb23238da505fabbd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Guardrails Template

## Definition — verbatim
> "# Agent Guardrails Template" — .claude/skills/security-scan/references/agent-guardrails-template.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/security-scan/references/agent-guardrails-template.md | 7 | defined here | Reference document specifying the Four Laws of Agent Safety and constraint model for autonomous agents. |
| .claude/skills/security-scan/references/agent-memory-inference-leakage.md | 75 | used here | Cited as the template defining Law 1 violated when an agent commits unauthorized memory modifications. |

## Consumes
Agent system prompts, tool schemas, and lifecycle hook configurations.

## Produces
Explicit operational constraints, confirmation tiers, audit requirements, and escalation paths.

## When applied
Applied when authoring or reviewing new agent prompts, skills, tools, or autonomous workflows.

## Sub-concepts
the-four-laws-of-agent-safety, constraints-enable-speed, law-1, law-2, law-3, law-4, confirmation-tier, audit-trail

## Part of
security-scan

## Implementation status
clean

## Design notes
An architectural template establishing boundary constraints for autonomous agent execution. By instituting the Four Laws of Agent Safety, it ensures agents operate within declared scopes, guard destructive actions behind confirmation tiers, maintain audit trails, and escalate uncertainties.
