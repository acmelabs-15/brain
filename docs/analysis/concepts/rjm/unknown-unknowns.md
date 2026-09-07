---
package: rjm
name: Unknown unknowns
slug: unknown-unknowns
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/philosophy-of-software-design.md, sha256: befb74458d7e26f163b688221fa3249bfeffe385a0ff863c0f970e17bc23b500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Unknown unknowns

## Definition — verbatim
> "**Unknown unknowns**: a reader cannot tell, from the interface alone, what they have to know to use it correctly. The most dangerous symptom. Fix by surfacing the constraint in the interface or eliminating it entirely." — .claude/skills/software-engineering-library/references/philosophy-of-software-design.md:28

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/philosophy-of-software-design.md | 28 | defined here | Defined in symptoms of complexity as the most dangerous symptom, where an interface hides implicit requirements or constraints. |

## Consumes
none

## Produces
none

## When applied
Applied during interface design and code review to surface hidden constraints, ordering rules, and undocumented preconditions.

## Sub-concepts
none

## Part of
complexity

## Implementation status
clean

## Design notes
Considered the most perilous form of complexity in rjm. When an interface fails to express its requirements—such as ordering prerequisites or unhandled error modes—callers make erroneous assumptions that lead to subtle runtime failures.
