---
package: rjm
name: Forbidden Output Phrases Pattern
slug: forbidden-output-phrases-pattern
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

# Forbidden Output Phrases Pattern

## Definition — verbatim
> "This works because it shows the model _exactly_ what the undesired output looks like, rather than describing it abstractly." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:547

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 537 | defined here | Defined as an output control pattern enumerating exact forbidden boilerplate phrases to suppress conversational clutter. |

## Consumes
Output schemas and typical LLM conversational boilerplate strings.

## Produces
Concrete lists of forbidden literal phrases embedded in system prompts.

## When applied
> "You MUST avoid text before/after your response, such as:" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:540

## Sub-concepts
none

## Part of
contrastive-examples

## Implementation status
clean

## Design notes
The Forbidden Output Phrases Pattern suppresses extraneous conversational filler by enumerating the exact literal phrases the model is forbidden to generate (e.g. `"The answer is <answer>."`, `"Based on the information provided..."`). This concrete pattern replacement proves far more effective than general warnings against verbosity.
