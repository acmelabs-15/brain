---
package: rjm
name: Semver
slug: semver
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-generation-and-release/SKILL.md, sha256: f21f81ca99b028e049733f4a75da58c62b2603d0c74e74bfd6a88459ae76272d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Semver

## Definition — verbatim
> "Semver: semantic version string MAJOR.MINOR.PATCH. The plugin manifests carry no version at all (ADR-092); the npm package still does." — .claude/skills/ai-agents-generation-and-release/SKILL.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-generation-and-release/SKILL.md | 18 | defined here | Defined in jargon as the MAJOR.MINOR.PATCH versioning format retained for npm packages but eliminated from plugin manifests under ADR-092. |

## Consumes
Package metadata, release changesets.

## Produces
Versioned npm package releases.

## When applied
Applied during release and publication workflows for npm packages.

## Sub-concepts
none

## Part of
ai-agents-generation-and-release

## Implementation status
defects: unfailable-gate, doc-drift

## Design notes
Semver represents semantic versioning (MAJOR.MINOR.PATCH) in rjm. Following ADR-092, version fields were intentionally eliminated from internal plugin manifests to prevent high-frequency merge conflicts in concurrent PR workflows, retaining Semver exclusively on external distribution artifacts like the npm package.
