---
package: rjm
name: Duplicated Code
slug: duplicated-code
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Duplicated Code

## Definition — verbatim
> "the same expression in two places. The same idea in two shapes is also duplication; do not let cosmetic differences fool you. Suggests Extract Function, Pull Up Method, or Form Template Method." — .claude/skills/software-engineering-library/references/refactoring.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 55 | defined here | Defined as a code smell where the same expression or concept appears in multiple places or shapes. |

## Consumes
Redundant logic, identical code blocks, or semantically equivalent algorithmic shapes.

## Produces
Consolidated logic targets for Extract Function, Pull Up Method, or Form Template Method.

## When applied
Detected when duplicate logic or structurally equivalent logic appears across multiple locations.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Duplicated Code is a primary code smell in rjm's refactoring catalog. It extends beyond literal syntactic duplication to include identical ideas expressed in subtly different shapes. Duplicate logic creates maintenance hazards because bug fixes and feature updates applied to one instance are frequently missed in copies. Remedying it restores DRY principles through functional extraction or inheritance templating.
