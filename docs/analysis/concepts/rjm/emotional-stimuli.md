---
package: rjm
name: Emotional Stimuli
slug: emotional-stimuli
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

# Emotional Stimuli

## Definition — verbatim
> "Emotional framing significantly impacts LLM performance." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:1063

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 1061 | defined here | Defined as a behavioral technique utilizing emotional framing and high-impact psychological phrases to focus attention. |

## Consumes
Task prompt where model attention allocation or rigorous constraint compliance needs enhancement.

## Produces
Increased attention allocation and higher fidelity execution across complex instruction sets.

## When applied
When tasks encounter reluctant execution, passive compliance, or require heightened attention to critical constraints.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Emotional Stimuli leverages phrases with psychological weight ("This is very important to my career", "Believe in your abilities") to shape model behavior. These stimuli operate through attention mechanisms rather than emotional resonance, causing the model to weight task instructions more heavily and produce higher-accuracy outputs.
