---
package: rjm
name: Front-gate
slug: front-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/plan.md, sha256: 93701a56a97cb5353e2af08e422ca5868d4a9fb96c9ec2c886c82b0ce38ae979}
  - {path: .claude/skills/panning-for-gold/SKILL.md, sha256: 1f40dc18c6cd6fb4bd569c0803ca82dc42d45a86b7277259f9781a32c1afe286}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Front-gate

## Definition — verbatim
> "Four phases: Front-gate, Extract, Evaluate, Synthesize." — .claude/skills/panning-for-gold/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/plan.md | 15 | used here | Precondition requiring an ungated idea to undergo front-gate validation via `/spec` before plan decomposition. |
| .claude/skills/panning-for-gold/SKILL.md | 10 | defined here | Defined as Phase 0 of the information capture pipeline, vetting incoming materials before extraction. |

## Consumes
Raw idea, feature request, or uncurated capture material.

## Produces
Gate pass/fail decision confirming a named blocked user, documented status quo, and concrete observation.

## When applied
Before any pipeline execution (`/plan`, `panning-for-gold`, or `/spec`) begins work decomposition or artifact synthesis.

## Sub-concepts
six-forcing-questions, front-gate-before-pipeline

## Part of
panning-for-gold, spec-command, plan-command

## Implementation status
defects: doc-drift

## Design notes
A critical entry verification gate preventing the generation of manufactured work. In rjm, autonomous agents and developers can easily generate plans and code for ungrounded ideas under reward bias; the front-gate forces upfront validation of user demand, status quo deficiencies, and observation validity before resources are spent decomposing tasks or executing pipelines.
