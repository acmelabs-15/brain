---
package: matt
name: architecture improvements
slug: architecture-improvements
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/improve-codebase-architecture/agents/openai.yaml, sha256: c8cb20f68ebf0edb4e497bc11ae5fcaa196004e661cd189015b04f4109ced7f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# architecture improvements

## Definition — verbatim
(used, not defined)

> "Find and grill architecture improvements" — skills/engineering/improve-codebase-architecture/agents/openai.yaml:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/improve-codebase-architecture/agents/openai.yaml | 3 | used here | Used in OpenAI agent metadata description to define the primary purpose and output of the skill. |

## Consumes
Existing codebase structure, dependencies, call paths, and architectural boundaries.

## Produces
Refactoring proposals, candidate improvement cards, before/after diagrams, and ADRs.

## When applied
When reviewing codebase architecture to identify opportunities for deepening modules and simplifying interfaces.

## Sub-concepts
candidate-card

## Part of
improve-codebase-architecture

## Implementation status
clean

## Design notes
Structural enhancements to a codebase aimed at deepening shallow modules, consolidating scattered logic, eliminating leaks across seams, and establishing cleaner interfaces.
