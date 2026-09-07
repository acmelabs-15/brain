---
package: rjm
name: Requirement Structure
slug: requirement-structure
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

# Requirement Structure

## Definition — verbatim
> "### Requirement Structure" — .claude/skills/spec-generator/SKILL.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/SKILL.md | 95 | defined here | Defines the frontmatter schema and 6-part body layout for requirement specification documents. |

## Consumes
PRD inputs, feature scope, and domain ontology entities.

## Produces
A standardized requirement specification document (`REQ-NNN-{slug}.md`) containing frontmatter, statement, context, ontology, acceptance criteria, rationale, and dependencies.

## When applied
Applied during Step 6 of `/spec` when generating the requirements tier of 3-tier specifications.

## Sub-concepts
spdd-reasons-canvas

## Part of
3-tier-specifications

## Implementation status
clean

## Design notes
Requirement Structure standardizes the definition of requirements in rjm, mandating YAML frontmatter fields (type, id, title, status, priority, category) and a strict 6-section body (EARS Statement, Context, Ontology, Acceptance Criteria, Rationale, Dependencies) to ensure testability and prevent ambiguous specifications.
