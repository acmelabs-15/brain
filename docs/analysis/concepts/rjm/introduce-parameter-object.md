---
package: rjm
name: Introduce Parameter Object
slug: introduce-parameter-object
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

# Introduce Parameter Object

## Definition — verbatim
(used, not defined)

> "Suggests Introduce Parameter Object or Preserve Whole Object." — .claude/skills/software-engineering-library/references/refactoring.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 53 | used here | Recommended as a transformation to resolve Long Parameter List and Data Clumps code smells. |

## Consumes
Methods or functions with long parameter lists or repeating parameter clusters.

## Produces
A structured parameter object or dataclass replacing multiple discrete arguments.

## When applied
Applied when resolving Long Parameter List or Data Clumps smells where parameters travel together.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Introduce Parameter Object is a refactoring technique in rjm's software engineering library. When multiple parameters are consistently passed together across function invocations, this transformation groups them into a cohesive record or object. This shrinks parameter lists, creates a natural home for domain validation logic, and stabilizes method signatures against future parameter additions.
