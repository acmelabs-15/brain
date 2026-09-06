---
package: addy
name: Change Descriptions
slug: change-descriptions
kind: artifact
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

# Change Descriptions

## Definition — verbatim
> "Every change needs a description that stands alone in version control history." — skills/code-review-and-quality/SKILL.md:132

## Also called — verbatim
`Change Descriptions` — skills/code-review-and-quality/SKILL.md:130

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 130 | defined here | Section defining requirements for standalone pull request and commit descriptions in history |

## Consumes
Code changes, design rationale, bug numbers, benchmark metrics, and acknowledged trade-offs.

## Produces
Structured commit/PR description featuring an imperative first line and detailed context body.

## When applied
Authored for every pull request and commit prior to submitting for code review.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
In addy, Change Descriptions require every commit and pull request to provide standalone documentation in version control history. With a short imperative summary line and a body detailing context, rationale, and acknowledged trade-offs, it ensures history remains searchable and comprehensible without reading diffs.
