---
package: rjm
path: .claude/skills/windows-image-updater/SKILL.md
type: skill
bytes: 7091
unit: inv-rjm-179
in_scope_via: .claude/skills/pipeline-validator/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/windows-image-updater/SKILL.md, sha256: 5b0330798cb4c66b87902f3afb3fd95ca8803dbbaa49a8db04f30154c713e27c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/windows-image-updater/SKILL.md

## Purpose — required, verbatim
> "Automates the end-to-end workflow for migrating Windows container images (e.g., LTSC2019 → LTSC2022) in OneBranch pipeline repositories. Handles package bumping, config regeneration, build validation, and PR creation." — .claude/skills/windows-image-updater/SKILL.md:10

## Design intent — required
Automates the migration of legacy Windows container images (such as LTSC2019 reaching end-of-life) to modern supported versions (LTSC2022) across Microsoft OneBranch pipeline repositories. It encapsulates the operational complexity of updating Central Package Management props files, regenerating pipeline YAML definitions via Topology and ConfigGen projects, resolving dependency downgrade cascades, and validating changes through draft PR creation and buddy build pipelines.

## Phase — required
rjm:build

## Inputs — required
- Azure DevOps repository URL or local repository path (.claude/skills/windows-image-updater/SKILL.md:26)
- Central Package Management props files (`Directory.Packages.props` or `Packages.props`) (.claude/skills/windows-image-updater/SKILL.md:62)
- Target configuration parameters: old image pattern (`ltsc2019`), expected new image (`ltsc2022`), package name (`ConfigurationGeneration.AdoPipelineGeneration`), feature branch name (`feat/windows-image-update`) (.claude/skills/windows-image-updater/SKILL.md:58-62)
- Topology / ConfigurationGeneration `.csproj` project files (.claude/skills/windows-image-updater/SKILL.md:104)

## Outputs — required
- Feature branch: `feat/windows-image-update` (.claude/skills/windows-image-updater/SKILL.md:61, 141)
- Regenerated pipeline YAML files under `.pipelines/*.yaml` with updated container image references (.claude/skills/windows-image-updater/SKILL.md:112, 121, 201)
- Draft Pull Request targeting the default branch in Azure DevOps (.claude/skills/windows-image-updater/SKILL.md:26, 131, 202)

## Invokes — required
- reference references/troubleshooting.md — .claude/skills/windows-image-updater/SKILL.md:225
- skill pipeline-validator — .claude/skills/windows-image-updater/SKILL.md:226

## Invoked by — required
- skill pipeline-validator — .claude/skills/pipeline-validator/SKILL.md:12

## Concepts named — required, verbatim
- `Windows Image Updater` — .claude/skills/windows-image-updater/SKILL.md:8 — defined here
- `OneBranch` — .claude/skills/windows-image-updater/SKILL.md:36 — defined here
- `ConfigGen` — .claude/skills/windows-image-updater/SKILL.md:37 — defined here
- `Topology project` — .claude/skills/windows-image-updater/SKILL.md:38 — defined here
- `LTSC` — .claude/skills/windows-image-updater/SKILL.md:39 — defined here
- `Buddy build` — .claude/skills/windows-image-updater/SKILL.md:40 — defined here
- `Buddy release` — .claude/skills/windows-image-updater/SKILL.md:41 — defined here
- `CPM` — .claude/skills/windows-image-updater/SKILL.md:42 — defined here
- `Directory.Packages.props` — .claude/skills/windows-image-updater/SKILL.md:42 — used here
- `pipeline-validator` — .claude/skills/windows-image-updater/SKILL.md:173 — used here

## Structure
- # Windows Image Updater — .claude/skills/windows-image-updater/SKILL.md:8
- ## Triggers — .claude/skills/windows-image-updater/SKILL.md:14
- ## Quick Reference — .claude/skills/windows-image-updater/SKILL.md:22
- ## Prerequisites — .claude/skills/windows-image-updater/SKILL.md:30
- ### Required Knowledge — .claude/skills/windows-image-updater/SKILL.md:32
- ### Required Tools — .claude/skills/windows-image-updater/SKILL.md:44
- ## Configuration — .claude/skills/windows-image-updater/SKILL.md:54
- ## Process — .claude/skills/windows-image-updater/SKILL.md:66
- ### Phase 1: Repository Setup — .claude/skills/windows-image-updater/SKILL.md:68
- ### Phase 3: Config Generation & Verification — .claude/skills/windows-image-updater/SKILL.md:94
- ## Anti-Patterns — .claude/skills/windows-image-updater/SKILL.md:187
- ## Verification — .claude/skills/windows-image-updater/SKILL.md:195
- ## Aborting / Rollback — .claude/skills/windows-image-updater/SKILL.md:207
- ## Extension Points — .claude/skills/windows-image-updater/SKILL.md:216
- ## References — .claude/skills/windows-image-updater/SKILL.md:223

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .claude/skills/windows-image-updater/SKILL.md:73-86 · incomplete code fences, orphaned shell commands, and missing numbered steps in Phase 1.
- doc-drift · .claude/skills/windows-image-updater/SKILL.md:94 · Phase 2 section header is completely missing, jumping directly from Phase 1 to Phase 3.
- doc-drift · .claude/skills/windows-image-updater/SKILL.md:116-126 · broken PowerShell snippet and fragmented text in step 3.
- doc-drift · .claude/skills/windows-image-updater/SKILL.md:131 · missing Phase 4 header before `Purpose: Create a draft PR, validate through pipelines, and attach results.`
- doc-drift · .claude/skills/windows-image-updater/SKILL.md:135-180 · severe corruption with truncated markdown, dangling code fences, and broken words (e.g. `alidate`).
- doc-drift · .claude/skills/windows-image-updater/SKILL.md:189 · table header row missing in Anti-Patterns table.
- doc-drift · .claude/skills/windows-image-updater/SKILL.md:210 · table header row missing in Aborting / Rollback table.

## Observations
The skill file contains extensive structural truncation in its Process section (phases skipped, code blocks interrupted, PR description template fragmented). Despite this source defect, the lifecycle intent and role delegation to `pipeline-validator` for automated pipeline execution and retry loops after PR creation remain well-specified.

## Context cost
7091 bytes (this file) + 2186 bytes (references/troubleshooting.md) = 9277 bytes (approx. 2320 tokens), excluding external pipeline-validator skill.
