---
package: rjm
name: Atomic
slug: atomic
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Atomic

## Definition — verbatim
> "ONE concept per memory (not a grab-bag of loosely related ideas)" — .claude/skills/research-and-incorporate/references/workflow.md:360

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 360 | defined here | Specified as the first core constraint under RULE 0 for Forgetful memory creation, requiring one concept per memory. |

## Consumes
Raw research findings and multi-concept notes.

## Produces
Focused, single-topic concept decompositions.

## When applied
Applied when designing and structuring memory items in Phase 4 of research-and-incorporate.

## Sub-concepts
none

## Part of
forgetful-atomic-memories, phase-4-memory-integration

## Implementation status
defects: doc-drift

## Design notes
A core knowledge-representation principle in rjm requiring every memory item to capture exactly one concept, preventing multi-topic grab-bags that degrade retrieval precision and semantic clustering in downstream agent operations.
