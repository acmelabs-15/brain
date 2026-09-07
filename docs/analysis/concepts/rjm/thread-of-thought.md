---
package: rjm
name: Thread of Thought
slug: thread-of-thought
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

# Thread of Thought

## Definition — verbatim
> "ThoT prompting adeptly maintains the logical progression of reasoning without being overwhelmed... ThoT represents the unbroken continuity of ideas that individuals maintain while sifting through vast information, allowing for the selective extraction of relevant details and the dismissal of extraneous ones." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:393

## Also called — verbatim
> "ThoT" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:393

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 389 | defined here | Defined as a reasoning technique for segmented context analysis in chaotic or multi-source environments. |

## Consumes
Multi-source or chaotic reference documents and context passages.

## Produces
Segmented analysis summarizing and evaluating context in manageable parts before answer generation.

## When applied
When prompts contain extensive, chaotic, or multi-passage context requiring structured comprehension.

## Sub-concepts
none

## Part of
prompt-engineering-patterns

## Implementation status
clean

## Design notes
Thread of Thought (ThoT) structures the comprehension of chaotic or multi-source context by prompting models to walk through information in manageable, sequential increments. By systematically filtering extraneous details before answering, it prevents models from being overwhelmed by noisy input environments.
