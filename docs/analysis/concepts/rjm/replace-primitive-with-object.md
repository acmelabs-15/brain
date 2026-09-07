---
package: rjm
name: Replace Primitive with Object
slug: replace-primitive-with-object
kind: technique
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

# Replace Primitive with Object

## Definition — verbatim
(used, not defined)

> "Suggests Replace Primitive with Object, especially at boundaries where validation should live." — .claude/skills/software-engineering-library/references/refactoring.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 60 | used here | Suggested as a refactoring transformation to resolve Primitive Obsession at system boundaries. |

## Consumes
Primitive variables, fields, or parameters carrying implicit domain rules or validation requirements.

## Produces
Dedicated value objects or classes with encapsulated validation rules and domain operations.

## When applied
Applied to address Primitive Obsession, particularly at system boundaries requiring rigorous input validation.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Replace Primitive with Object is a refactoring technique in rjm's software engineering library. It wraps raw primitive types in rich domain objects (value objects), establishing a single canonical location for formatting, validation, and domain-specific operations. This eliminates repeated ad-hoc parsing across calling code and prevents invalid states from entering core business logic.
