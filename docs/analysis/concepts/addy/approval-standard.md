---
package: addy
name: approval standard
slug: approval-standard
kind: gate
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

# approval standard

## Definition — verbatim
> "Approve a change when it definitely improves overall code health, even if it isn't perfect." — skills/code-review-and-quality/SKILL.md:12

## Also called — verbatim
`The approval standard` — skills/code-review-and-quality/SKILL.md:12

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/code-review-and-quality/SKILL.md | 12 | defined here | Core review standard mandating approval when a change definitely improves overall code health |

## Consumes
Code review diffs, pull request modifications, test coverage, and project style conventions.

## Produces
Review verdict (Approve vs. Request changes) based on net code health improvement.

## When applied
During every code review decision before merging changes into the repository.

## Sub-concepts
none

## Part of
code-review-and-quality

## Implementation status
clean

## Design notes
In addy, the approval standard sets a pragmatic threshold for code reviews: approve changes that definitely improve overall codebase health rather than blocking them in search of perfection or personal stylistic preferences. It prioritizes continuous codebase improvement and developer momentum over gatekeeping.
