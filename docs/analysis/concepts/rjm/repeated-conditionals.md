---
package: rjm
name: Repeated Conditionals
slug: repeated-conditionals
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

# Repeated Conditionals

## Definition — verbatim
> "the same boolean expression appearing in many places. Suggests Extract Function with an intention-revealing name." — .claude/skills/software-engineering-library/references/refactoring.md:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 62 | defined here | Defined as a code smell where identical boolean expressions appear across multiple code locations. |

## Consumes
Multiple occurrences of identical or complex boolean expressions scattered across code.

## Produces
Extracted predicate functions with intention-revealing names replacing repeated expressions.

## When applied
Flagged when the same conditional logic or complex boolean check appears in multiple locations.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Repeated Conditionals is a code smell in rjm denoting identical or near-identical boolean expressions duplicated across multiple call sites. Such repetition obscures business intent and introduces drift when conditions are updated inconsistently. Extracting the expression into a named predicate function documents the rule's meaning and provides a single point of modification.
