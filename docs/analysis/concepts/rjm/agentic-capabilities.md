---
package: rjm
name: agentic_capabilities
slug: agentic-capabilities
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/assets/templates/skill-spec-template.xml, sha256: 58a4c3f18d2b7e35138bf1058d787f594d46638756ba61e344553b7ee476e3cc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# agentic_capabilities

## Definition — verbatim
> "    <agentic_capabilities>" — .claude/skills/skillforge/assets/templates/skill-spec-template.xml:215

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/assets/templates/skill-spec-template.xml | 215 | defined here | XML schema section evaluating autonomous execution, self-verification, error recovery, and state persistence. |

## Consumes
Script architecture specifications, automation plans, and CLI interface requirements.

## Produces
Structured XML specification section declaring whether and how autonomous execution, self-verification, error recovery, and state persistence are supported.

## When applied
Authored during Phase 2 (Specification) when designing or assessing skill scripts.

## Sub-concepts
none

## Part of
script-integration-framework

## Implementation status
clean

## Design notes
`agentic_capabilities` is a formal specification schema element in SkillForge assessing whether a skill and its helper scripts can execute autonomously, self-verify results, recover from common errors, and persist state without interactive human prompts.
