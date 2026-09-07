---
package: rjm
name: Extract Function
slug: extract-function
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

# Extract Function

## Definition — verbatim
> "## High Duplication → Extract Function" — .claude/skills/code-qualities-assessment/references/refactoring-patterns.md:268

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/code-qualities-assessment/references/refactoring-patterns.md | 268 | defined here | Prescribed refactoring pattern to unify copy-pasted logic into a single authoritative function. |
| .claude/skills/software-engineering-library/references/refactoring.md | 15 | used here | Named mechanical transformation in Fowler's core discipline for decomposing long functions and eliminating duplicated code. |

## Consumes
Code fragments within existing functions that perform coherent sub-computations, repeat logic, or obscure high-level intent.

## Produces
A newly declared function with an intention-revealing name called from the original sites.

## When applied
Applied when resolving Long Function, Duplicated Code, Repeated Conditionals, or code explained by comments.

## Sub-concepts
none

## Part of
refactoring-patterns

## Implementation status
defects: internal-contradiction

## Design notes
Extract Function is the primary workhorse transformation in Martin Fowler's refactoring catalog. In rjm, it is used mechanically to decompose overgrown procedures, eliminate duplicate calculation code, and replace vague code blocks with self-documenting, intention-revealing function names that can be tested independently.
