---
package: rjm
path: .claude/skills/windows-image-updater/references/troubleshooting.md
type: reference
bytes: 2186
unit: inv-rjm-179
in_scope_via: .claude/skills/windows-image-updater/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/windows-image-updater/references/troubleshooting.md, sha256: 318c9266760343a7e4d105bec4c2cc2f8fbf2d2b6f89aa82688228f846e52c4d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/windows-image-updater/references/troubleshooting.md

## Purpose — required, verbatim
> "Common errors and their resolutions during the Windows container image update workflow." — .claude/skills/windows-image-updater/references/troubleshooting.md:3

## Design intent — required
Documents diagnostic symptoms, common failure modes, and resolution procedures for build issues, NuGet package dependency downgrades (NU1605, NU1608), compiler errors, and pipeline polling timeouts encountered while upgrading Windows container images in OneBranch repositories.

## Phase — required
rjm:cross-phase

## Inputs — required
- Build errors and compiler messages from `dotnet build` (.claude/skills/windows-image-updater/references/troubleshooting.md:11)
- Test failure logs from `dotnet test` (.claude/skills/windows-image-updater/references/troubleshooting.md:22)
- NuGet restore warning and error codes (`NU1605`, `NU1608`) (.claude/skills/windows-image-updater/references/troubleshooting.md:30, 52)
- Polling status from Azure DevOps pipeline validation runs (.claude/skills/windows-image-updater/references/troubleshooting.md:67-74)

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- skill windows-image-updater — .claude/skills/windows-image-updater/SKILL.md:225

## Concepts named — required, verbatim
- `Windows container image update` — .claude/skills/windows-image-updater/references/troubleshooting.md:3 — used here
- `dotnet build` — .claude/skills/windows-image-updater/references/troubleshooting.md:11 — used here
- `dotnet test` — .claude/skills/windows-image-updater/references/troubleshooting.md:22 — used here
- `NU1605` — .claude/skills/windows-image-updater/references/troubleshooting.md:30 — used here
- `AdoPipelineGeneration` — .claude/skills/windows-image-updater/references/troubleshooting.md:35 — used here
- `NU1608` — .claude/skills/windows-image-updater/references/troubleshooting.md:52 — used here
- `CS0246` — .claude/skills/windows-image-updater/references/troubleshooting.md:59 — used here

## Structure
- # Troubleshooting Guide — .claude/skills/windows-image-updater/references/troubleshooting.md:1
- ## Phase 1: Repository Setup Errors — .claude/skills/windows-image-updater/references/troubleshooting.md:7
- ### Build fails on default branch — .claude/skills/windows-image-updater/references/troubleshooting.md:9
- ### Tests fail on default branch — .claude/skills/windows-image-updater/references/troubleshooting.md:20
- ## Phase 2: Package Update Errors — .claude/skills/windows-image-updater/references/troubleshooting.md:28
- ### NU1605: Package downgrade detected — .claude/skills/windows-image-updater/references/troubleshooting.md:30
- ### NU1608: Detected package version outside of dependency constraint — .claude/skills/windows-image-updater/references/troubleshooting.md:52
- ### Pipeline validation fails — .claude/skills/windows-image-updater/references/troubleshooting.md:67
- ## General Tips — .claude/skills/windows-image-updater/references/troubleshooting.md:78

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .claude/skills/windows-image-updater/references/troubleshooting.md:17 · resolution list for build failures starts at step 3, omitting steps 1 and 2.
- doc-drift · .claude/skills/windows-image-updater/references/troubleshooting.md:24 · resolution section for default branch test failures is completely blank.
- doc-drift · .claude/skills/windows-image-updater/references/troubleshooting.md:38 · resolution list for package downgrades contains only steps 2 and 4, missing steps 1 and 3.
- doc-drift · .claude/skills/windows-image-updater/references/troubleshooting.md:58 · missing heading, unclosed code block, and missing resolution text for CS0246 error.
- doc-drift · .claude/skills/windows-image-updater/references/troubleshooting.md:71 · pipeline validation failure resolution steps jump from 1 to 3 and 4, skipping step 2.
- doc-drift · .claude/skills/windows-image-updater/references/troubleshooting.md:80 · general tips numbered list includes items 1, 3, and 5, missing items 2 and 4.

## Observations
The file exhibits pervasive truncation defects and missing numbered steps across nearly all troubleshooting sections, suggesting corrupted extraction or drafting in the upstream source. However, the diagnostic guidance (e.g. bumping package versions to match or exceed requirements to resolve NU1605) remains clear.

## Context cost
2186 bytes (approx. 550 tokens).
