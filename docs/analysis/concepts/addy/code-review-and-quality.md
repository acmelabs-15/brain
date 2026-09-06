---
package: addy
name: code-review-and-quality
slug: code-review-and-quality
kind: technique
package_phase: addy:Review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .gemini/commands/code-simplify.toml, sha256: 5216ae4dc14077d1ac7f9b1d201972955909302eb7c0b63682e057f86a49c745}
  - {path: .gemini/commands/review.toml, sha256: a7ae7259a9e080731e0dd91368da728b89919d31488192e067b751cf472d5a8d}
  - {path: README.md, sha256: 70d0e32bfa384c6093229bab18802d475112168033e182caeb0328330a492bbc}
  - {path: evals/cases/code-review-and-quality.json, sha256: afeaca38540db520a3aca1b25c199001f76a540b4777b08ad668313dd1d2ad7c}
  - {path: external/code-review-and-quality.md, sha256: 9cd4e257b466f8e1700ef732f39b9dae5ac66573a0d022fdf67381796e011773}
  - {path: external/performance-optimization.md, sha256: d1fe0e9a06b111d8e6920adb8f275abf4f32a4c8bda25dcb38fa22c7814953ac}
  - {path: external/security-and-hardening.md, sha256: 47b655926f0b175781fed1412394deeb576f631554fad3bef4c73ac054e106f9}
  - {path: references/definition-of-done.md, sha256: d1c75d2ae65d2c7a9cd01f93fa8de63e00e75f2fe5d08be224d576157054dcee}
  - {path: skills/constraint-driven-development/SKILL.md, sha256: 19d0aba70ced988c67739d5edd2a9b124a0783788c2baa70a8cc64cdd90612e5}
  - {path: skills/doubt-driven-development/SKILL.md, sha256: 0a058297aa6bdf90b0ff45c3537af4cb0005f4af6b0d202fc07b7b5984db50ea}
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# code-review-and-quality

## Definition — verbatim
> "Conducts multi-axis code review across correctness, readability, architecture, security, and performance." — external/code-review-and-quality.md:5

## Also called — verbatim
> "/review" — README.md:17

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .gemini/commands/code-simplify.toml | 21 | used here | Recommends running code-review-and-quality to review simplification changes. |
| .gemini/commands/review.toml | 4 | used here | Invoked by /review slash command to conduct five-axis review. |
| evals/cases/code-review-and-quality.json | 2 | used here | Evaluation test case for code review and quality skill. |
| external/code-review-and-quality.md | 5 | defined here | External documentation defining the five-axis review skill. |
| external/performance-optimization.md | 12 | used here | Linked as related skill under Review phase in external documentation. |
| external/security-and-hardening.md | 12 | used here | Linked as related skill under Review phase in external documentation. |
| README.md | 56 | used here | README install command listing code-review-and-quality for five-axis review. |
| references/definition-of-done.md | 35 | used here | Cited as providing depth for the five-axis review in the Definition of Done. |
| skills/constraint-driven-development/SKILL.md | 10 | used here | Cites code-review-and-quality as defining what good looks like across five axes. |
| skills/doubt-driven-development/SKILL.md | 225 | used here | Explains relationship between doubt-driven development and /review. |
| skills/git-workflow-and-versioning/SKILL.md | 113 | used here | Cites splitting strategies in code-review-and-quality for breaking down large changes. |

## Consumes
Candidate code changes, git diff, tests, and task specification.

## Produces
Structured review feedback across five axes with standardized severity labels.

## When applied
Before merging any change into the main branch.

## Sub-concepts
none

## Part of
review

## Implementation status
defects: doc-drift, orphan (external page summary and structure drift from repository SKILL.md; external doc is unreferenced)

## Design notes
The primary quality gate in Addy's Review phase, providing structured multi-axis evaluation (correctness, readability, architecture, security, performance) with disciplined change sizing (~100 lines).
