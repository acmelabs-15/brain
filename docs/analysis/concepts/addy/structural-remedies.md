---
package: addy
name: Structural Remedies
slug: structural-remedies
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

# Structural Remedies

## Definition — verbatim
> "When you flag a structural problem, propose the move — not just the problem." — skills/code-review-and-quality/SKILL.md:90

## Also called — verbatim
`Structural Remedies` — skills/code-review-and-quality/SKILL.md:88

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 88 | defined here | Section cataloging concrete refactoring moves to suggest when flagging architectural complexity |

## Consumes
Complex code structures (conditional chains, duplicated branches, tangled business logic/orchestration).

## Produces
Named refactoring suggestions: typed model/dispatcher, collapsed branch, separation of orchestration, helper extraction, or wrapper deletion.

## When applied
When identifying architectural debt or excessive complexity during code reviews.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
In addy, Structural Remedies elevates code review beyond vague criticism by requiring reviewers to propose specific, named refactoring moves. By prescribing actions like replacing conditional chains with typed models, moving logic to owning layers, or deleting passthrough wrappers, it turns review feedback into concrete structural improvements.
