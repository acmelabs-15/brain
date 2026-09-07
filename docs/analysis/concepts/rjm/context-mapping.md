---
package: rjm
name: Context Mapping
slug: context-mapping
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Context Mapping

## Definition — verbatim
> "## Context Mapping" — .claude/skills/software-engineering-library/references/domain-driven-design.md:185

## Also called — verbatim
`Context Map` — .claude/skills/software-engineering-library/references/domain-driven-design.md:24

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 185 | defined here | Section heading detailing the methodology of formalizing structural relationships between bounded contexts. |

## Consumes
Subsystem architecture models, team ownership boundaries, and interface dependencies.

## Produces
Formally classified integration relationships (Customer-Supplier, Conformist, ACL, Shared Kernel, Partnership, Open Host Service).

## When applied
Applied when two contexts must integrate non-trivially, when teams form around a new context, or when writing architecture decision records.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Context Mapping provides the strategic discipline of defining explicit boundaries and relationships between subsystems. It makes organizational and architectural dependencies visible, allowing teams to choose appropriate translation and collaboration patterns deliberately rather than accidentally.
