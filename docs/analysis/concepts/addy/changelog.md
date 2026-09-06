---
package: addy
name: changelog
slug: changelog
kind: artifact
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

# changelog

## Definition — verbatim
> "A changelog is not `git log`." — skills/git-workflow-and-versioning/SKILL.md:299

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 299 | used here | Defined as the curated, consumer-facing summary of changes grouped by category. |

## Consumes
Categorized descriptions of added, changed, fixed, deprecated, removed, and security changes.

## Produces
A versioned changelog document (e.g. `CHANGELOG.md`) communicating product updates.

## When applied
Updated concurrently with every user-impacting code modification and finalized upon release.

## Sub-concepts
none

## Part of
- release-versioning
- git-workflow-and-versioning

## Implementation status
clean

## Design notes
A persistent project artifact communicating notable modifications to users and downstream consumers, grouped into standardized categories to facilitate safe upgrades.
