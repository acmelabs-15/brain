---
package: rjm
name: Magic numbers
slug: magic-numbers
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-dry-principle.md, sha256: 64a1c4d6a649c8223493fd2ee0bc7df70f1ce45dc32bdd08bb685df531359f0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Magic numbers

## Definition — verbatim
> "| Magic numbers | `if (status == 3)` repeated throughout |" — .claude/skills/golden-principles/references/design-dry-principle.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-dry-principle.md | 29 | defined here | Listed in the common violations table as repeated numeric literals representing unstated domain meaning. |

## Consumes
Hardcoded numeric literals, status codes, threshold values, and un-named numerical offsets embedded in application code.

## Produces
Named symbolic constants, enumerations, configuration settings, and self-documenting comparison expressions.

## When applied
Identified during code inspection and taste lint reviews whenever raw numbers appear directly within conditional checks or business logic algorithms.

## Sub-concepts
extract-constants

## Part of
dry-principle

## Implementation status
defects: missing-path

## Design notes
Magic numbers represent an anti-pattern under rjm's DRY principle where unexplained numeric values are scattered across logic branches. This practice obscures developer intent and creates maintenance liabilities, as modifying a threshold requires error-prone global searches. Remediating magic numbers via extracted constants creates a single point of definition and conveys explicit domain semantics.
