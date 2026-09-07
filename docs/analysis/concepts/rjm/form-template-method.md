---
package: rjm
name: Form Template Method
slug: form-template-method
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

# Form Template Method

## Definition — verbatim
(used, not defined)

> "Suggests Extract Function, Pull Up Method, or Form Template Method." — .claude/skills/software-engineering-library/references/refactoring.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 55 | used here | Recommended as a refactoring transformation to eliminate Duplicated Code with slight algorithmic variations. |

## Consumes
Subclass methods that execute similar steps in the same sequence but differ in specific step implementations.

## Produces
A template method in the superclass defining algorithmic skeleton with hook/abstract methods for variant steps.

## When applied
Applied when resolving Duplicated Code where algorithms follow the same overall sequence but vary in details.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Form Template Method is an object-oriented refactoring technique in rjm. When two subclass methods execute the same algorithmic sequence but differ in specific sub-operations, this transformation extracts the shared sequence into a template method in the parent class while delegating the varying steps to overridden subclass methods. This eliminates duplicate orchestration logic while preserving customized step behavior.
