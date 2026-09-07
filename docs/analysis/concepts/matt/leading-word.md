---
package: matt
name: leading word
slug: leading-word
kind: technique
package_phase: matt:Productivity
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/productivity/wait-what.md, sha256: 5523a8be6520dc2aa09e1aab9ea3e5e59e6f0d41ffefa5130c3404dd2e34c677}
  - {path: skills/in-progress/writing-fragments/SKILL.md, sha256: 298b0edd23df229183630de592ed8aa4289233560f2040691f6eb77caeaad4ea}
  - {path: skills/productivity/writing-for-agents/SKILL-MECHANICS.md, sha256: c768e6307c7c10728c401c213f2c4ba71c542127eeb7ad2956aabd15a0fa0059}
  - {path: skills/productivity/writing-for-agents/SKILL.md, sha256: 551adca942227b44192edba88acd4e8db911f0121ce58ad16944ccf6a896a74a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# leading word

## Definition — verbatim
> "A **leading word** is a compact concept already living in the model's pretraining that the agent thinks with while running the document (_lesson_, _fog of war_, _tracer bullets_)." — skills/productivity/writing-for-agents/SKILL.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/productivity/wait-what.md | 5 | defined here | Describes wait-what as carrying a single precise leading word ("wait") that grounds agent behavior. |
| skills/in-progress/writing-fragments/SKILL.md | 36 | defined here | Defines leading word as a compact metaphor or coinage an entire piece can hang on. |
| skills/productivity/writing-for-agents/SKILL-MECHANICS.md | 18 | used here | Explains that distinct leading words justify splitting off a model-invoked skill. |
| skills/productivity/writing-for-agents/SKILL.md | 63 | defined here | Defines leading word as a compact pretrained concept that anchors agent thinking in minimal tokens. |

## Consumes
A recurring behavioral pattern, fuzzy instruction, or multi-word explanation.

## Produces
A single evocative token that recruits model pretraining priors.

## When applied
When authoring prompt instructions, naming skills, or refining context pointers and rules.

## Sub-concepts
none

## Part of
writing-for-agents, wait-what

## Implementation status
clean

## Design notes
A cornerstone prompt-engineering technique in Matt's design. Rather than spending dozens of tokens explaining nuanced behaviors, authoring documents leverage compact pretrained tokens (e.g. *wait*, *tight*, *red*) that recruit extensive latent model priors at near-zero token cost.
