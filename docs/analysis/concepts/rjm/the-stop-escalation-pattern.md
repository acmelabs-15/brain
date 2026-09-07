---
package: rjm
name: The STOP Escalation Pattern
slug: the-stop-escalation-pattern
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# The STOP Escalation Pattern

## Definition — verbatim
> "For behaviors you need to _interrupt_, not just discourage, use explicit STOP commands:" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1290

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1288 | defined here | Defined as an escalation pattern using explicit STOP commands and mandatory alternatives to interrupt discouraged actions. |

## Consumes
Discouraged actions, default behaviors, and mandatory alternatives.

## Produces
Metacognitive pause instructions with mandatory replacement workflows.

## When applied
> "STOP creates a metacognitive checkpoint: the model must pause and re-evaluate before proceeding with the discouraged action." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1306

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
The STOP Escalation Pattern structures negative behavioral interventions into an explicit four-part sequence: acknowledging the anticipated impulse, issuing an unambiguous capitalized STOP command, specifying a mandatory alternative, and justifying the alternative's availability. This creates an effective metacognitive checkpoint where mild preference statements fail.
