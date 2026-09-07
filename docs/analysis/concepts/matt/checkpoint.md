---
package: matt
name: Checkpoint
slug: checkpoint
kind: gate
package_phase: matt:in-progress
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/in-progress/loop-me/SKILL.md, sha256: e44d1cc3e760fb86ac42964c2a5f1fcac511715db50fb375f3f7be814de1eaa7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Checkpoint

## Definition — verbatim
> "**Checkpoint**: a human-in-the-loop point where the user is asked to verify or decide. Some workflows have none and run autonomously; some use no AI at all." — skills/in-progress/loop-me/SKILL.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/in-progress/loop-me/SKILL.md | 21 | defined here | Human-in-the-loop verification gate where users make decisions or confirm outputs. |

## Consumes
A decision brief and generated assets prepared by prior workflow steps.

## Produces
Human approval, rejection, or steering guidance allowing the workflow to proceed.

## When applied
Positioned late in workflow execution when human verification or authorization is strictly necessary.

## Sub-concepts
push-right, brief

## Part of
loop-me, workflow

## Implementation status
clean

## Design notes
A human-in-the-loop gate in loop-me designed to preserve user oversight while maximizing automation. Checkpoints are optional and governed by the "push right" rule, ensuring humans are asked to review only when necessary and with decision-ready materials.
