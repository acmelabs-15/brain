---
package: rjm
name: Re-Reading
slug: re-reading
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

# Re-Reading

## Definition — verbatim
> "RE2 consistently enhances the reasoning performance of LLMs through a simple re-reading strategy... RE2 facilitates a 'bidirectional' encoding in unidirectional decoder-only LLMs because the first pass could provide global information for the second pass." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:95

## Also called — verbatim
> "### Re-Reading (RE2)" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:93

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 93 | defined here | Defined as an input enhancement technique that prompts the model to re-read the question prior to reasoning. |

## Consumes
Problem query or comprehension task prompt.

## Produces
Bidirectional context encoding achieved through an explicit metacognitive re-reading prompt.

## When applied
Across general comprehension and reasoning tasks as a universal, plug-and-play enhancement.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Re-Reading (RE2) enhances reasoning performance by explicitly instructing the model to re-read the input prompt before generating an answer. Because decoder-only language models rely on unidirectional attention, this second pass leverages context from the initial read to resolve ambiguities and improve semantic comprehension.
