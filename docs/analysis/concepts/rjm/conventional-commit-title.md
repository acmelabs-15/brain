---
package: rjm
name: Conventional Commit Title
slug: conventional-commit-title
kind: checklist
package_phase: rjm:ship
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/commands/validate-pr-description.md, sha256: a77b04b081da3955117fae000dcf4f7db5ce391b2d050bd272e2b50e777ee9f1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Conventional Commit Title

## Definition — verbatim
> "Title must match `<type>(<scope>)?: <description>` where type is one of:" — .claude/commands/validate-pr-description.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/commands/validate-pr-description.md | 22 | defined here | First validation criterion in `/validate-pr-description` requiring PR titles to follow conventional commit format. |

## Consumes
Candidate pull request title string provided by the user.

## Produces
Validation pass/fail verdict ensuring semantic commit title syntax compliance before PR creation.

## When applied
Evaluated during pre-submission PR validation in `/validate-pr-description` and `/ship`.

## Sub-concepts
none

## Part of
validate-pr-description

## Implementation status
defects: doc-drift, other

## Design notes
Conventional Commit Title enforces semantic commit formatting (`<type>(<scope>)?: <description>`) on PR titles prior to submission. Restricting change types to standard prefixes (`feat`, `fix`, `docs`, `refactor`, `test`, `chore`, etc.) enables automated changelog synthesis, deterministic semantic version bumps, and consistent repository history across tooling environments.
