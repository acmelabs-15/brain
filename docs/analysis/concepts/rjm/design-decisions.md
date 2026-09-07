---
package: rjm
name: Design Decisions
slug: design-decisions
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md, sha256: 120a612231ef1d8c2e15b62f6eb3b6de20d1125b1556c9e6ab716c376bb9f624}
  - {path: docs/architecture.md, sha256: 313b6db46f914559de625165f888be95ac076abd9a7bade6bb562d3339792453}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Design Decisions

## Definition — verbatim
> "Key architectural decisions are recorded as ADRs in `.agents/architecture/`." — docs/architecture.md:169

## Also called — verbatim
> "## Design Decisions" — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:53

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md | 53 | defined here | Architecture template section indexing material ADRs and defining triggers for new records. |
| docs/architecture.md | 167 | defined here | Architecture document section cataloging notable ADRs governing repository engineering choices. |

## Consumes
Architectural trade-offs, evaluated alternatives, and component boundary modifications.

## Produces
An index of formalized Architecture Decision Records (ADRs) capturing rationale and consequences.

## When applied
Applied whenever material architectural choices, boundary changes, or new dependencies are introduced.

## Sub-concepts
adr, architectural-decision-record

## Part of
architecture

## Implementation status
clean (ARCHITECTURE.template.md), defects: doc-drift (docs/architecture.md)

## Design notes
Design Decisions links system documentation to its historical decision log. Rather than allowing architectural choices to become folklore, it establishes criteria for authoring formal ADRs (e.g., boundary changes, new dependencies, replaced patterns) and maintains an indexed table of these decisions directly within system documentation.
