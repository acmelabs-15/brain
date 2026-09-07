---
package: rjm
name: Pull Request Guidelines
slug: pull-request-guidelines
kind: checklist
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 09a1205b99939ad49462139c47ccd0ef1a4a191fc70839a1f532016a1ee66ffa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pull Request Guidelines

## Definition — verbatim
> "## Pull Request Guidelines" — CONTRIBUTING.md:830

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 830 | defined here | Section heading introducing the six core requirements for preparing and submitting repository pull requests. |

## Consumes
Completed code changes, validated templates, passing test suites, and associated planning specifications.

## Produces
Standardized pull requests satisfying spec reference traceability, template regeneration, and conventional commit message formats.

## When applied
Followed whenever a contributor or coding agent creates and opens a pull request for review.

## Sub-concepts
commit-count-thresholds, contextual-reference-sections, spec-reference-best-practices

## Part of
rjm:ship

## Implementation status
defects: doc-drift, internal-contradiction, missing-path

## Design notes
Pull Request Guidelines establish the foundational quality checklist in rjm governing contributions prior to merge. The guidelines mandate that feature changes link to formal specifications, generated artifacts remain strictly synchronized with templates, tests pass, and commits adhere to conventional syntax, protecting the repository against untracked scope creep and breaking changes.
