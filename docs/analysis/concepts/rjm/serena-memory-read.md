---
package: rjm
name: Serena memory read
slug: serena-memory-read
kind: technique
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_memory_references.py, sha256: 85b6b9c797c4a756e3141d78be4e36d47e3dc5eabaa3f374c8badc6d741d1bc3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Serena memory read

## Definition — verbatim
> "Fail when instructions command a Serena memory read that cannot resolve." — scripts/validation/check_skill_memory_references.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_memory_references.py | 2 | used here | Describes agent execution instructions commanding memory retrieval via the Serena memory system. |

## Consumes
Target memory filename and Serena memory repository files under `.serena/memories/`.

## Produces
Retrieved memory document content during agent execution.

## When applied
Executed by agents when instruction markdown commands them to load project knowledge or skill context from Serena memories.

## Sub-concepts
none

## Part of
none

## Implementation status
out-of-scope

## Design notes
An agent technique for retrieving structured memory files via Serena MCP tools during task execution, whose underlying memory storage engine is excluded from the synthesis scope per METHOD §1.2.
