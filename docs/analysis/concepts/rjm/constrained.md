---
package: rjm
name: Constrained
slug: constrained
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

# Constrained

## Definition — verbatim
> "<2000 characters maximum (content field only)" — .claude/skills/research-and-incorporate/references/workflow.md:361

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 361 | defined here | Specified as the second constraint under RULE 0, enforcing a strict character cap on memory content. |

## Consumes
Memory draft content.

## Produces
Bounded-length memory text within token and character budgets.

## When applied
Applied when authoring memory content in Phase 4 of research-and-incorporate.

## Sub-concepts
none

## Part of
forgetful-atomic-memories, phase-4-memory-integration

## Implementation status
defects: doc-drift

## Design notes
A sizing constraint that caps memory content at under 2000 characters, ensuring stored knowledge remains token-efficient and consumable by LLMs without dominating prompt context windows.
