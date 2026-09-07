---
package: rjm
name: Deep nesting
slug: deep-nesting
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-programming-by-intention.md, sha256: 9bc7693d93b8a0f368ac9e99b06fcc6b33331afadc269e1dc3ffc410735e9509}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Deep nesting

## Definition — verbatim
> "| Deep nesting | Extract to named methods instead |" — .claude/skills/golden-principles/references/design-programming-by-intention.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-programming-by-intention.md | 80 | defined here | Listed in the anti-patterns table as excessive control flow depth that should be extracted into named methods. |

## Consumes
Deeply nested conditional blocks, nested iteration loops, and complex branch cascades.

## Produces
Flattened linear execution paths, early return guard clauses, and extracted predicate routines.

## When applied
Identified during complexity audits and static analysis whenever indentation depth exceeds reasonable thresholds (e.g., beyond 2-3 levels).

## Sub-concepts
extract-methods

## Part of
programming-by-intention

## Implementation status
defects: missing-path

## Design notes
Deep nesting is an anti-pattern in rjm that exponentially increases cognitive complexity and testing burden. Deeply nested branches create combinatorial explosion in execution paths and make edge cases easy to overlook. Decomposing nested branches into early return guards or dedicated named methods flattens method structure and maintains cognitive clarity.
