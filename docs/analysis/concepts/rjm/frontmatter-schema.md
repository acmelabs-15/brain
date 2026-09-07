---
package: rjm
name: Frontmatter Schema
slug: frontmatter-schema
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md, sha256: 456c2b45675af44c0b9b0ab432e98a4f33d1b5b3d57a0fa91fccb9ae5e4ca239}
  - {path: docs/SKILL-AUTHORING.md, sha256: db5db754421869dc7fb420e1bc025ab2b2e94bd40db6a14bda714efee8fd5c25}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Frontmatter Schema

## Definition — verbatim
(used, not defined)

> "### Frontmatter Schema" — .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-051-synthesis-panel-frontmatter-standard.md | 43 | defined here | Section heading introducing the YAML frontmatter specification for design review synthesis panel documents. |
| docs/SKILL-AUTHORING.md | 7 | defined here | Section heading introducing the required and optional YAML frontmatter fields for skill definitions. |

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
defects: missing-path

## Design notes
Frontmatter Schema is a section heading used across ADR-051 and skill authoring documentation to define structured metadata requirements, classified as name-only per D-023.
