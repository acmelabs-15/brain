---
package: addy
name: Release & Versioning
slug: release-versioning
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

# Release & Versioning

## Definition — verbatim
> "Commits are how *you* track change; a **version** is how your *consumers* track it." — skills/git-workflow-and-versioning/SKILL.md:272

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/git-workflow-and-versioning/SKILL.md | 270 | defined here | Section heading introducing the consumer-facing versioning contract. |

## Consumes
Working codebase changes, release milestones, and semantic impact assessments.

## Produces
Semantic version numbers, release tags, and curated human-readable changelog updates.

## When applied
Whenever software is released to external or downstream consumers who rely on backward compatibility and clear upgrade instructions.

## Sub-concepts
- tag-the-release
- changelog
- keep-a-changelog-written-for-humans

## Part of
- git-workflow-and-versioning

## Implementation status
clean

## Design notes
The release contract bridging internal commit progression and consumer-facing stability, ensuring changes are clearly classified via semantic versioning and accompanied by human-readable changelogs.
