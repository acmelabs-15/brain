---
package: rjm
name: Single Responsibility
slug: single-responsibility
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/quality-grades/references/solid-principles.md, sha256: b9f5ab503d00e1e3a0b32954a4570aa4b6269853bd9c896faad8365d304eaab4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Single Responsibility

## Definition — verbatim
> "A class should have one reason to change" — .claude/skills/quality-grades/references/solid-principles.md:15

## Also called — verbatim
> "Single Responsibility (SRP)" — .claude/skills/quality-grades/references/solid-principles.md:15

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/quality-grades/references/solid-principles.md | 15 | defined here | Principle definition stating that a class should have one reason to change. |

## Consumes
Class definitions, module boundaries, responsibility allocations.

## Produces
High cohesion within classes and modules through isolated reasons for change.

## When applied
Applied during object-oriented design, class decomposition, and domain quality audits.

## Sub-concepts
none

## Part of
solid-principles

## Implementation status
defects: missing-path

## Design notes
The first SOLID principle in rjm, requiring classes to maintain a single encapsulated responsibility with only one reason to change, maximizing cohesion and avoiding God objects.
