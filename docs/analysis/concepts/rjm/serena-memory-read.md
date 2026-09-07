---
package: rjm
name: Serena memory read
slug: serena-memory-read
kind: technique
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
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
