---
package: rjm
name: Meta-principle
slug: meta-principle
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Meta-principle

## Definition — verbatim
> "**Meta-principle**: The value of multi-turn prompting comes from separation of concerns: each turn has a distinct cognitive goal (generate, critique, verify, synthesize). Mixing these goals within a single turn reduces effectiveness." — .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 7 | defined here | Articulates the core design rule that multi-turn effectiveness relies on separating distinct cognitive goals (generate, critique, verify, synthesize) across turns. |

## Consumes
Multi-turn conversational architecture and prompt design plans.

## Produces
Architectural separation of conversational turns by distinct cognitive objectives.

## When applied
Applied whenever designing multi-turn agent interactions or prompt sequences to prevent mixed-goal degradation.

## Sub-concepts
none

## Part of
prompt-engineer, multi-turn-prompts

## Implementation status
clean

## Design notes
The meta-principle defines the foundational philosophy of multi-turn prompting in rjm. It asserts that performance gains in multi-turn interactions originate entirely from cognitive separation of concerns—assigning generation, critique, verification, and synthesis to separate messages rather than overloading a single prompt with competing goals.
