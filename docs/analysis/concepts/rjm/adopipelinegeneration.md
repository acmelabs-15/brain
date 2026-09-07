---
package: rjm
name: AdoPipelineGeneration
slug: adopipelinegeneration
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/windows-image-updater/references/troubleshooting.md, sha256: 318c9266760343a7e4d105bec4c2cc2f8fbf2d2b6f89aa82688228f846e52c4d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AdoPipelineGeneration

## Definition — verbatim
(used, not defined)

> "**Cause:** Bumping AdoPipelineGeneration pulls in a newer transitive dependency, but another package in the solution pins an older version." — .claude/skills/windows-image-updater/references/troubleshooting.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/windows-image-updater/references/troubleshooting.md | 35 | used here | Cited as the primary dependency package whose upgrade triggers dependency resolution issues. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
`AdoPipelineGeneration` is an internal NuGet package dependency responsible for pipeline generation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
