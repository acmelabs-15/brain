---
package: rjm
name: Token Efficiency
slug: token-efficiency
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-017-tiered-memory-index-architecture.md, sha256: 64a961c19917209b4057c9db9a9ed7ae8798a49d842c7455ba077fddfdacfe99}
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Token Efficiency

## Definition — verbatim
> "1. **Token Efficiency**: LLM context windows are finite and expensive" — .agents/architecture/ADR-017-tiered-memory-index-architecture.md:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-017-tiered-memory-index-architecture.md | 41 | used here | Identified as the primary architectural driver for optimizing memory storage and retrieval hierarchy. |
| .claude/skills/research-and-incorporate/references/workflow.md | 507 | defined here | Defined as an operational guideline emphasizing reuse over recreation, linking memories, and atomic queries. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 16 | used here | Cited as the core motivation for pruning auxiliary files and extracting deep-dive references. |

## Consumes
Context budgets, prompt tokens, documentation structures, and retrieval indices.

## Produces
Lean prompts, pure lookup tables, atomic references, and minimal token consumption per task.

## When applied
Applied across all agent workflows, memory design, skill authoring, and architectural documentation.

## Sub-concepts
zero-retrieval-value-content-elimination, progressive-refinement

## Part of
none

## Implementation status
defects: internal-contradiction, missing-path, doc-drift, orphan

## Design notes
Token efficiency is a core architectural priority throughout rjm. Because context windows are finite and expensive, systems minimize token footprint through progressive disclosure, lean lookup tables, atomic reference extraction, and avoiding redundant prose.
