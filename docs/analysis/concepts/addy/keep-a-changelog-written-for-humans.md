---
package: addy
name: Keep a changelog written for humans
slug: keep-a-changelog-written-for-humans
kind: pattern
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

# Keep a changelog written for humans

## Definition — verbatim
> "A changelog is not `git log`." — skills/git-workflow-and-versioning/SKILL.md:299

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 297 | defined here | Subsection heading defining consumer-focused changelog authoring rules. |

## Consumes
User-facing modifications, deprecations, breaking changes, and security fixes.

## Produces
Categorized, human-readable changelog entries written concurrently with code modifications.

## When applied
> "Write the entry in the same change that makes the change, while the impact is fresh — not reconstructed from commit archaeology at release time." — skills/git-workflow-and-versioning/SKILL.md:311

## Sub-concepts
- changelog

## Part of
- release-versioning
- git-workflow-and-versioning

## Implementation status
clean

## Design notes
A documentation discipline requiring developers to write changelog entries concurrently with the code changes that inspire them, focusing on user impact rather than internal implementation mechanics.
