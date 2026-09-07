---
package: rjm
name: Domain-to-Index Mapping
slug: domain-to-index-mapping
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/skillbook.md, sha256: 91f950500a94ec961cadfc48125029f649b3fe031969b91c398d7b8da4747398}
  - {path: templates/agents/skillbook.shared.md, sha256: 75728e08c68359b9eade70c8c9358d8de6dca100cfdae2b34906567f5edf188f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Domain-to-Index Mapping

## Definition — verbatim
> "## Domain-to-Index Mapping" — .claude/agents/skillbook.md:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/skillbook.md | 120 | defined here | Reference table mapping operational domains to their respective memory index file paths. |
| templates/agents/skillbook.shared.md | 123 | defined here | Shared template reference table defining canonical domain-to-index file associations. |

## Consumes
Candidate skill domain classifications (Architecture, Planning, Implementation, PR review, etc.).

## Produces
Target index file paths in `.serena/memories/` for indexing new skills.

## When applied
Consulted by skillbook prior to adding a new skill to identify the correct domain index.

## Sub-concepts
none

## Part of
skillbook-agent

## Implementation status
defects: missing-path

## Design notes
Domain-to-Index Mapping provides the canonical reference table associating operational functional domains (Architecture, Implementation, Planning, PR review, etc.) to their corresponding index files within .serena/memories/.
