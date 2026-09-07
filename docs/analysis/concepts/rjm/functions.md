---
package: rjm
name: Functions
slug: functions
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

# Functions

## Definition — verbatim
> "- **Functions**: Same logic implemented multiple times" — .claude/skills/golden-principles/references/design-dry-principle.md:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-dry-principle.md | 16 | defined here | Enumerated as a scope of redundancy where equivalent computational logic is implemented in multiple locations. |

## Consumes
Routine implementations, algorithmic blocks, business rules, and repeated control flow structures across codebase units.

## Produces
Extracted shared methods, reusable helper libraries, and unified functional implementations.

## When applied
Applied during code review and refactoring passes when multiple routines execute identical or near-identical logical transformations.

## Sub-concepts
extract-methods

## Part of
dry-principle

## Implementation status
defects: missing-path

## Design notes
Functional redundancy in rjm refers to duplicate implementations of business or algorithmic logic. When the same behavior is authored across several functions, defect corrections in one copy leave others vulnerable. The golden principles framework demands extracting duplicate logic into unified methods to ensure bug fixes apply globally across all callers.
