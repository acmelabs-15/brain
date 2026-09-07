---
package: rjm
name: Extract Class
slug: extract-class
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/code-qualities-assessment/references/refactoring-patterns.md, sha256: d3daeaa70210b68f3628a5fc26b44747c50453a7ac8e915e023306a4d4c9c560}
  - {path: .claude/skills/software-engineering-library/references/refactoring.md, sha256: 4df115ec2bd76ec116af2e77c07f38a6c1a8ad6fc837386afdeb85276858f6fc}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Extract Class

## Definition — verbatim
> "## Low Cohesion → Extract Class" — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/refactoring-patterns.md | 5 | defined here | Prescribed as the primary remediation pattern for decomposing classes with low cohesion. |
| .claude/skills/software-engineering-library/references/refactoring.md | 54 | used here | Identified as the canonical Fowler refactoring transformation to resolve Large Class, Divergent Change, and Data Clumps code smells. |

## Consumes
Large classes or modules with mixed responsibilities, divergent change reasons, or distinct clusters of data and methods.

## Produces
Two or more separate, cohesive classes dividing responsibilities along natural domain boundaries.

## When applied
Applied when a class handles multiple unrelated responsibilities, exhibits low cohesion, or suffers from large class code smells.

## Sub-concepts
none

## Part of
refactoring-patterns

## Implementation status
defects: internal-contradiction

## Design notes
Extract Class is a fundamental Martin Fowler refactoring transformation. In rjm, it bridges code quality remediation and engineering discipline: it serves as the prescribed fix for low cohesion scores (improving cohesion from 4/10 to 9/10) and the primary solution for Large Class, Divergent Change, and Data Clumps smells.
