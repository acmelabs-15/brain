---
package: rjm
name: Temporary Field
slug: temporary-field
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

# Temporary Field

## Definition — verbatim
> "a field set only in some branches and ignored in others. Suggests Extract Class to hold the optional state, or rework the control flow so the field is always meaningful." — .claude/skills/software-engineering-library/references/refactoring.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 67 | defined here | Defined as a code smell where an instance field is populated only during specific branches or executions. |

## Consumes
Classes holding transient or conditional state variables that remain unused or null during standard lifecycles.

## Produces
Extracted classes encapsulating optional state or reworked control flows with consistently populated fields.

## When applied
Identified when an object field is set and accessed only within specific operational branches.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Temporary Field is a code smell in rjm indicating that an object is burdened with instance variables that are only meaningful under specific circumstances or algorithm runs. Storing optional or transient state in object fields creates confusion regarding object invariants and state validity. Extracting a specialized class for the optional data or passing state as parameters restores cohesive object lifecycles.
