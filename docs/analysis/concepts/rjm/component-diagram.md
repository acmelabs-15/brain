---
package: rjm
name: Component Diagram
slug: component-diagram
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Component Diagram

## Definition — verbatim
(used, not defined)

> "| **Component Diagram** | Service boundaries | Mermaid, PlantUML |" — .claude/skills/threat-modeling/SKILL.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 110 | used here | Architecture modeling diagram type recommended for visualizing service boundaries. |

## Consumes
Service definitions, architectural specifications, interface boundaries, and component lists.

## Produces
Visual component diagram rendered in Mermaid or PlantUML.

## When applied
Applied during Phase 1 (Scope and Decompose) when modeling system architecture for threat modeling.

## Sub-concepts
none

## Part of
threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`Component Diagram` is an architectural modeling artifact in `rjm` that visually depicts service boundaries, component relationships, and external interfaces to facilitate security decomposition.
