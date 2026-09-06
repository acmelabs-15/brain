---
package: addy
name: Tag the release
slug: tag-the-release
kind: technique
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/git-workflow-and-versioning/SKILL.md, sha256: 39665e84d944fbb394dde5e4e60fc6497cd056002b5c7de6762213f7018ff0a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Tag the release

## Definition — verbatim
> "A release is an immutable point in history, not a moving branch. Tag it so it can always be reproduced:" — skills/git-workflow-and-versioning/SKILL.md:288

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 286 | defined here | Subsection heading defining release tagging as the single immutable source of truth. |

## Consumes
Tested release commit and verified semantic version number.

## Produces
Annotated git release tag (e.g. `git tag -a v1.4.0 -m "Release 1.4.0"`).

## When applied
When cutting an immutable release point in repository history.

## Sub-concepts
none

## Part of
- release-versioning
- git-workflow-and-versioning

## Implementation status
clean

## Design notes
A release governance practice establishing annotated git tags as immutable, reproducible historical markers from which package versions and artifacts are strictly derived.
