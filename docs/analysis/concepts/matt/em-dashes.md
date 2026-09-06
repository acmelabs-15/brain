---
package: matt
name: em-dashes
slug: em-dashes
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/grilling-remove-em-dashes.md, sha256: 149094700d65fd5a4660e710603a70d65e24a3e12b755ffb54b51eaf0534303f}
  - {path: CLAUDE.md, sha256: fa8a2aaf79ca544e92c76401fe2a862aba0583fe62c3a4908af6f20ebadeb89e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# em-dashes

## Definition — verbatim
> "No em-dashes anywhere in this repo's prose" — CLAUDE.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/grilling-remove-em-dashes.md | 5 | used here | Changeset noting removal of em-dashes from SKILL.md in favor of colons and semicolons. |
| CLAUDE.md | 25 | defined here | Formulates repo-wide prose rule forbidding em-dashes in favor of explicit punctuation. |

## Consumes
Draft sentences and documentation containing em-dash punctuation.

## Produces
Rewritten prose utilizing commas, colons, semicolons, periods, or conjunctions.

## When applied
Applied across all documentation, skill bodies, ADRs, changesets, and code comments.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An explicit stylistic guardrail and authoring pattern across Matt's repository prohibiting em-dashes in prose. This discipline forces authors and models to deliberately structure sentences with standard punctuation (commas, colons, conjunctions), enhancing parsing reliability and plain-text clarity for both LLMs and humans.
