---
package: rjm
name: Single Database, Single Model
slug: single-database-single-model
kind: pattern
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

# Single Database, Single Model

## Definition — verbatim
> "- **Single Database, Single Model**: every team writes to one schema and shares one set of types. Boundaries are imaginary. Introduce contexts and translate at the seam." — .claude/skills/software-engineering-library/references/domain-driven-design.md:234

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 234 | defined here | Anti-pattern catalog entry highlighting the hazard of shared schemas and universal types across distinct domains. |

## Consumes
Monolithic database schemas and universal data structures shared across teams.

## Produces
Architectural guidance to introduce explicit bounded contexts and translate at boundary seams.

## When applied
Identified when multiple independent subsystems share a single relational schema and type definition without encapsulation.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Single Database, Single Model creates fictitious architectural boundaries while tying all services to a shared data model. Introducing bounded contexts and explicit translation layers restores independent evolution and prevents schema coupling.
