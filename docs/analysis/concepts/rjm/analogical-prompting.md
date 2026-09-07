---
package: rjm
name: Analogical Prompting
slug: analogical-prompting
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

# Analogical Prompting

## Definition — verbatim
> "**Analogical Prompting** has the model generate its own examples before solving the problem." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:614

## Also called — verbatim
> "### Analogical Prompting: Self-Generated Examples" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:612

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 612 | defined here | Defined as an example design technique prompting LLMs to self-generate relevant exemplars in context. |

## Consumes
Problem statement where hand-labeled few-shot demonstrations are unavailable.

## Produces
Self-generated analogous problem exemplars and subsequent tailored problem solution.

## When applied
When hand-crafted examples are absent but the model possesses relevant domain knowledge from training.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Analogical Prompting instructs the language model to recall and solve analogous problems before addressing the target task. This activates pre-trained domain representations in-context, generating tailored few-shot demonstrations on the fly without manual dataset curation.
