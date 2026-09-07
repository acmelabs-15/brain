---
package: rjm
name: Activation Vocabulary Principle
slug: activation-vocabulary-principle
kind: pattern
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Activation Vocabulary Principle

## Definition — verbatim
> "For each skill or memory, imagine generating a list of **5 words** that describe it. That list is **gold** - it's your activation vocabulary." — .agents/archive/planning/PRD-skills-index-registry.md:306

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 302 | defined here | Architectural design principle optimizing file names and summary statements for LLM associative retrieval. |

## Consumes
Skill definitions and targeted retrieval scenarios.

## Produces
High-signal 5-word keyword sets embedded in file names and index statements to trigger LLM associative selection.

## When applied
Applied when authoring skill file names and registry summary statements in systems without vector embeddings.

## Sub-concepts
none

## Part of
skills-index-registry

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A retrieval design principle in rjm recognizing that LLMs operate over associative token spaces rather than strict symbolic logic. By embedding five high-signal activation words into skill file names and index summaries, it maximizes the probability that an LLM agent will select the relevant skill under lexical search without requiring vector embeddings.
