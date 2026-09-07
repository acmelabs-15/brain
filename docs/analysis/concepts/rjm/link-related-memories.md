---
package: rjm
name: Link Related Memories
slug: link-related-memories
kind: technique
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .claude/skills/research-and-incorporate/references/workflow.md, sha256: 4be33ea79eb624e5dba9c924a4984ec3a30a6ea9e6f2f9861454b032f9ce3d69}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Link Related Memories

## Definition — verbatim
> "### 4C: Link Related Memories" — .claude/skills/research-and-incorporate/references/workflow.md:399

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/research-and-incorporate/references/workflow.md | 399 | defined here | Prescribed as Sub-phase 4C procedure to query related existing memories and execute link_memories. |

## Consumes
Newly created memory IDs and query results for related concepts.

## Produces
Explicit relationship links between memories in the vector database.

## When applied
Applied in Sub-phase 4C immediately after all atomic memories have been created.

## Sub-concepts
none

## Part of
phase-4-memory-integration, research-and-incorporate

## Implementation status
out-of-scope

## Design notes
A procedural technique for establishing semantic graph relationships between newly created memories and existing knowledge via Forgetful tool calls (`query_memory` and `link_memories`). Implementation is out of scope per METHOD §1.2 due to Forgetful exclusion.
