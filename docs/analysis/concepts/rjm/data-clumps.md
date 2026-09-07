---
package: rjm
name: Data Clumps
slug: data-clumps
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

# Data Clumps

## Definition — verbatim
> "the same group of fields or parameters appearing together. They want to be an object. Suggests Extract Class or Introduce Parameter Object." — .claude/skills/software-engineering-library/references/refactoring.md:59

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 59 | defined here | Defined as a code smell where repeating clusters of fields or parameters belong together as an object. |

## Consumes
Recurring groups of primitive variables or parameters that consistently appear in unison.

## Produces
A newly defined composite class or parameter object encapsulating the clustered fields.

## When applied
Identified when multiple fields or parameters repeatedly appear together across classes and methods.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Data Clumps is a code smell in rjm identifying groups of primitive values or parameters that consistently travel together (such as start/end dates, coordinate pairs, or address fields). These clumps signify nascent domain abstractions waiting to emerge. Encapsulating them into dedicated classes or parameter objects reduces repetition, enhances type safety, and provides a unified locus for domain validation.
