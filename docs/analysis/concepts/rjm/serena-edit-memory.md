---
package: rjm
name: serena/edit_memory
slug: serena-edit-memory
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/quality-auditor.md, sha256: e1001a4917277fc3feaeb3cf561fbaa476a8265b3652e870e72488581a6ea646}
  - {path: templates/agents/quality-auditor.shared.md, sha256: 73cdee7f95b0c0e748d6ceeaea42ab94ddb32653de6c146cbeb4311d995d5713}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# serena/edit_memory

## Definition — verbatim
(used, not defined)

> "- `serena/edit_memory`: Update existing memory" — .claude/agents/quality-auditor.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/quality-auditor.md | 49 | used here | Serena MCP tool listed for updating existing persistent memory entries with new audit data. |
| templates/agents/quality-auditor.shared.md | 54 | used here | Serena MCP tool listed in shared template for updating existing audit memory entries. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An MCP tool identifier used to update existing memory entries in the Serena memory store rather than an operational lifecycle concept.
