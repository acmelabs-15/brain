---
package: rjm
name: Method Level
slug: method-level
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-separation-of-concerns.md, sha256: b5e6b4709e639d9d52ea6451db53246f2687ddaebac225d4b00413852e3bdfa5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Method Level

## Definition — verbatim
> "### Method Level" — .claude/skills/golden-principles/references/design-separation-of-concerns.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-separation-of-concerns.md | 24 | defined here | Section heading outlining intra-method separation of workflow from implementation via Programming by Intention. |

## Consumes
Procedural statements, control flow blocks, validation logic, calculation algorithms, and business operations within a routine.

## Produces
Cohesive method invocations where a top-level orchestrator dispatches discrete concerns (validation, totals, discounts, persistence, notifications) to dedicated methods.

## When applied
Applied when authoring or refactoring individual routines to ensure workflow coordination is separate from operational execution.

## Sub-concepts
the-sergeant-pattern, method-cohesion

## Part of
levels-of-separation

## Implementation status
defects: missing-path

## Design notes
Method Level separation represents the finest granularity in rjm's separation of concerns model. By leveraging Programming by Intention to separate high-level workflow orchestration from individual operational concerns (such as validation, calculation, and persistence), methods remain concise, readable, and focused on coordinating intent rather than accumulating implementation details.
