---
package: rjm
name: Large Class
slug: large-class
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

# Large Class

## Definition — verbatim
> "a class doing several jobs. Suggests Extract Class along the seams between jobs. Look at field clusters and method clusters as evidence." — .claude/skills/software-engineering-library/references/refactoring.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 54 | defined here | Defined as a code smell where a single class performs multiple jobs across distinct field and method clusters. |

## Consumes
Bloated classes with multiple unrelated responsibilities and distinct field clusters.

## Produces
Identification of responsibility boundaries for subsequent Extract Class refactoring.

## When applied
Flagged when a class accumulates multiple jobs, evident from distinct field and method clusters.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Large Class is a code smell in rjm indicating a violation of the Single Responsibility Principle. When a class assumes multiple roles, maintainability drops and the risk of unexpected side effects escalates. Identifying method and field clusters within a large class exposes natural seams where Extract Class can divide responsibilities into cohesive, decoupled components.
