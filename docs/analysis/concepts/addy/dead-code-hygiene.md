---
package: addy
name: Dead Code Hygiene
slug: dead-code-hygiene
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Dead Code Hygiene

## Definition — verbatim
> "After any refactoring or implementation change, check for orphaned code:" — skills/code-review-and-quality/SKILL.md:231-233

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 231 | defined here | Outlines post-implementation procedure to identify and safely remove dead or orphaned code. |

## Consumes
Completed code modifications, refactorings, and codebase symbol cross-references.

## Produces
An explicit enumeration of unreferenced functions, components, or constants, paired with a confirmation prompt before deletion.

## When applied
Following any refactoring or implementation change before finalizing code review.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
A quality hygiene process requiring agents to explicitly detect unreachable or unreferenced code after modifying an implementation and prompt the author or user before deletion, balancing codebase cleanliness against the risk of uncoordinated deletions.
