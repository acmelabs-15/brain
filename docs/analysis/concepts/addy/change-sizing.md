---
package: addy
name: Change sizing
slug: change-sizing
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
  - {path: skills/code-review-and-quality/SKILL.md, sha256: 8f3cabca581bbf7cb5f0add3f7454e7a4523f9d4353a6a4a217e6fa515309612}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Change sizing

## Definition — verbatim
> "Small, focused changes are easier to review, faster to merge, and safer to deploy." — skills/code-review-and-quality/SKILL.md:105

## Also called — verbatim
> "Change sizing" — external/code-review-and-quality.md:5
> "Size Your Changes" — skills/git-workflow-and-versioning/SKILL.md:111

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/code-review-and-quality.md | 5 | used here | Highlighted as a key review principle targeting ~100 lines |
| external/git-workflow-and-versioning.md | 5 | used here | Summarized as a core git workflow rule (~100 lines) |
| skills/code-review-and-quality/SKILL.md | 103 | defined here | Detailed with line-count guidelines, inspection signals, and splitting strategies |

## Consumes
Proposed code modifications, task breakdowns, commits.

## Produces
Scoped commits and pull requests sized around ~100 lines changed (acceptable up to ~300 lines; over ~1000 lines requires splitting).

## When applied
When authoring commits, implementing tasks, or preparing pull requests for review.

## Sub-concepts
`splitting-strategies`

## Part of
`code-review-and-quality`, `git-workflow-and-versioning`

## Implementation status
clean

## Design notes
Change sizing establishes clear line-count targets for changes, ensuring diffs remain small and focused so that both human and AI reviewers can thoroughly verify logic without fatigue, while making rollbacks clean and isolated.
