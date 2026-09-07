---
package: rjm
name: Scope integrity
slug: scope-integrity
kind: technique
package_phase: rjm:plan
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/plan.md, sha256: 93701a56a97cb5353e2af08e422ca5868d4a9fb96c9ec2c886c82b0ce38ae979}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Scope integrity

## Definition — verbatim
> "1. **Scope integrity** - Nothing unnecessary, nothing missing" — .claude/commands/plan.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/plan.md | 29 | defined here | First evaluation axis in plan review, verifying that the plan contains neither bloated additions nor omitted necessities. |

## Consumes
Proposed task breakdown and original specification acceptance criteria.

## Produces
Validation verdict confirming exact 1:1 mapping between specification scope and planned implementation steps.

## When applied
During plan evaluation by the critic agent.

## Sub-concepts
none

## Part of
evaluation-axes, plan-command

## Implementation status
clean

## Design notes
An evaluation principle in plan review that enforces lean completeness. It guards against two opposite failure modes in AI planning: scope creep (adding speculative features or premature abstractions) and scope omission (skipping edge cases, migrations, or required verification steps).
