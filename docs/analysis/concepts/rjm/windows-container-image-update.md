---
package: rjm
name: Windows container image update
slug: windows-container-image-update
kind: technique
package_phase: rjm:build
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

# Windows container image update

## Definition — verbatim
> "Common errors and their resolutions during the Windows container image update workflow." — .claude/skills/windows-image-updater/references/troubleshooting.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/windows-image-updater/references/troubleshooting.md | 3 | used here | Troubleshooting reference enumerating common failures and remediations during image update execution. |

## Consumes
Azure DevOps repository URL or local path, .NET SDK, OneBranch pipeline configurations.

## Produces
Draft pull request with upgraded dependency packages, regenerated YAML pipeline configurations, and passing builds.

## When applied
Applied when upgrading base Windows container images (such as LTSC2019 to LTSC2022) or remediating OneBranch deprecation warnings.

## Sub-concepts
none

## Part of
windows-image-updater

## Implementation status
defects: doc-drift

## Design notes
Windows container image update is an operational automation technique in rjm for migrating CI/CD build environments to updated Windows container images, coordinating package updates, config regeneration, and verification pipelines.
