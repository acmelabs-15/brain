---
package: rjm
name: Pull Up Method
slug: pull-up-method
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

# Pull Up Method

## Definition — verbatim
(used, not defined)

> "Suggests Extract Function, Pull Up Method, or Form Template Method." — .claude/skills/software-engineering-library/references/refactoring.md:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/refactoring.md | 55 | used here | Suggested as a refactoring transformation to eliminate Duplicated Code across subclasses. |

## Consumes
Identical or near-identical methods implemented across multiple sibling subclasses.

## Produces
A unified method implementation relocated to the shared superclass.

## When applied
Applied when multiple subclasses share identical method logic that can be centralized in their parent.

## Sub-concepts
none

## Part of
refactoring

## Implementation status
defects: internal-contradiction

## Design notes
Pull Up Method is an object-oriented refactoring technique in rjm. When identical methods appear across multiple subclasses, this transformation migrates the common logic into their common superclass. This eliminates duplicate code, unifies method maintenance in one location, and enforces behavioral consistency across the class hierarchy.
