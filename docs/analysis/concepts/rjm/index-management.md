---
package: rjm
name: Index Management
slug: index-management
kind: technique
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

# Index Management

## Definition — verbatim
> "## Index Management" — .claude/agents/skillbook.md:94

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/skillbook.md | 94 | defined here | Operational rules requiring index files to contain pure lookup tables without headers or commentary. |
| templates/agents/skillbook.shared.md | 97 | defined here | Shared template section defining strict index table formatting and update flows. |

## Consumes
New or updated skill file descriptors and searchable keyword lists.

## Produces
Alphabetically sorted lookup table rows in `.serena/memories/skills-{domain}-index.md`.

## When applied
Applied after writing or modifying any skill file to ensure discoverability across subagent sessions.

## Sub-concepts
none

## Part of
skillbook-agent

## Implementation status
defects: missing-path

## Design notes
Index Management governs the maintenance of domain lookup tables (skills-{domain}-index.md), mandating pure markdown tables without headers or prose commentary to allow high-speed keyword retrieval and subagent discoverability.
