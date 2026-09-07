---
package: rjm
name: RE2
slug: re2
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md, sha256: d4baf475bf65bb62eebadd4ee3458feed74409068cf1fad9195fbade1ff5ae06}
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RE2

## Definition — verbatim
> "### Re-Reading (RE2)" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:93

## Also called — verbatim
`Re-Reading` — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:93

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-multi-turn.md | 5 | used here | Cited as an assumed single-turn prerequisite technique extended across message boundaries. |
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 93 | defined here | Defines RE2 (Re-Reading) as an input enhancement prompting strategy that repeats the question with a metacognitive re-reading directive. |

## Consumes
User query or reasoning problem statement.

## Produces
An enhanced prompt format instructing the model to re-read the input ("Read the question again: {question}") before beginning reasoning.

## When applied
Applied as a zero-cost input enhancement to reasoning tasks to improve comprehension in unidirectional decoder-only LLMs.

## Sub-concepts
none

## Part of
prompt-engineer

## Implementation status
clean

## Design notes
RE2 (Re-Reading) is an input enhancement technique that addresses the unidirectional attention limitations of decoder-only transformers. By explicitly appending "Read the question again: {question}", the model gains bidirectional encoding benefits where tokens in the second pass attend to the full first-pass context, yielding consistent benchmark accuracy gains.
