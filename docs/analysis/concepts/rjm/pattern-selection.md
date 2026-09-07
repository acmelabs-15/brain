---
package: rjm
name: Pattern Selection
slug: pattern-selection
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
  - {path: .claude/skills/software-engineering-library/references/domain-driven-design.md, sha256: c583cfc757bb83172503fb80bac19eabcd8bf94e1888cbf961c48a8436830d04}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pattern Selection

## Definition — verbatim
(used, not defined)

> "The dependency rule does not require all four layers in every component. Pick the smallest structure that keeps the rule intact." — .claude/skills/software-engineering-library/references/clean-architecture.md:130

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 128 | defined here | Section heading providing criteria to choose the minimal layer structure that keeps dependency rules intact. |
| .claude/skills/software-engineering-library/references/domain-driven-design.md | 214 | defined here | Section heading guiding the selection of tactical DDD patterns based on concrete domain problems. |

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
clean

## Design notes
A documentation section heading in clean-architecture.md and domain-driven-design.md organizing pattern selection criteria rather than an operational lifecycle concept, classified as kind: name-only per D-023.
