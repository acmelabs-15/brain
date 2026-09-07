---
package: rjm
name: Attainable
slug: attainable
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/diagnosis-and-actions.md, sha256: 54a8b65f88e7e48d47a34309d5e919d861b0e0fe1a13167a618ddece47794629}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Attainable

## Definition — verbatim
> "Within agent capability | Technically feasible" — .claude/skills/retrospective/references/diagnosis-and-actions.md:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/diagnosis-and-actions.md | 154 | defined here | SMART validation criterion verifying that a proposed skill is within agent capability and technically feasible. |

## Consumes
Proposed action items or candidate skill statements.

## Produces
Validation check determining whether proposed actions are technically possible within agent runtime constraints.

## When applied
Applied during Phase 3 (SMART Validation) before accepting a learning statement.

## Sub-concepts
none

## Part of
smart-validation, decide-what-to-do

## Implementation status
clean

## Design notes
Attainable is a SMART validation gate confirming that proposed remediation actions or skill enhancements are technically feasible and within the operational capabilities of the agent.
