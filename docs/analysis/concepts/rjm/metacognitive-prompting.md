---
package: rjm
name: Metacognitive Prompting
slug: metacognitive-prompting
kind: technique
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

# Metacognitive Prompting

## Definition — verbatim
> "For tasks requiring deep comprehension rather than pure reasoning (paraphrase detection, textual entailment, nuanced classification), **Metacognitive Prompting** guides the model through structured self-reflection." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1471

## Also called — verbatim
> "MP" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1473

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1469 | defined here | Defined as a structured 5-stage self-reflection technique for natural language understanding tasks. |

## Consumes
Natural language understanding task requiring nuanced contextual interpretation.

## Produces
Five-stage structured introspection output covering understanding clarification, preliminary judgment, critical assessment, final decision, and confidence rating.

## When applied
When executing complex NLU tasks requiring deep comprehension, while avoiding simple tasks where it induces overthinking.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Metacognitive Prompting guides models through five introspective stages (clarifying understanding, preliminary judgment, critical assessment, final decision, and confidence evaluation). This structured reflection improves accuracy on complex natural language understanding tasks, though it must be avoided on straightforward tasks where it can trigger overthinking or overcorrection.
