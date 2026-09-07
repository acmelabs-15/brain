---
package: rjm
name: Design Structure
slug: design-structure
kind: template
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/SKILL.md, sha256: 08f84b382679ed61ac10f81382ea6e67e33218cbf4ab38c9412548f64cb46d0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Design Structure

## Definition — verbatim
> "### Design Structure" — .claude/skills/spec-generator/SKILL.md:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/SKILL.md | 136 | defined here | Defines the frontmatter schema and 8-part body layout for technical design documents. |

## Consumes
Requirements specifications (`REQ-NNN`), architectural decisions, and ontology decision rules (`O5`).

## Produces
A technical design document (`DESIGN-NNN-{slug}.md`) covering component architecture, technology decisions, security, and test strategy.

## When applied
Applied during Step 6 of `/spec` when formalizing the technical architecture tier of 3-tier specifications.

## Sub-concepts
none

## Part of
3-tier-specifications

## Implementation status
clean

## Design notes
Design Structure standardizes the architecture specification tier in rjm, mandating traceability links to parent REQ documents, technology decision rationales, and explicit decision-rule mappings.
