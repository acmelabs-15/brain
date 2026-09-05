---
package: addy
path: external/git-workflow-and-versioning.md
type: doc
bytes: 26317
unit: inv-addy-22
aliases: []
memo_inputs:
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/git-workflow-and-versioning.md

## Purpose — required, verbatim
> "Structures git workflow practices. Trunk-based development, atomic commits, change sizing (~100 lines), and the commit-as-save-point pattern - plus branching, conflicts, releases, and semantic versioning." — external/git-workflow-and-versioning.md:5

## Design intent — required
Web documentation catalog entry and web preview hosted at `skills.addy.ie/skills/git-workflow-and-versioning/` serving as the public documentation portal and installation gateway for the `git-workflow-and-versioning` skill. It introduces human developers and autonomous AI coding agents to disciplined version control habits tailored for high-speed AI code generation, emphasizing trunk-based development, atomic commits, small change sizing (~100 lines), the commit-as-save-point pattern, branching strategies, conflict resolution, releases, and semantic versioning. It provides direct installation commands via the open `skills` CLI (`npx skills add addyosmani/agent-skills --skill git-workflow-and-versioning` or the full pack), outlines the standard six-part skill anatomy (Overview, When to Use, Process, Rationalizations, Red Flags, Verification), links to the canonical `SKILL.md` on GitHub, categorizes the skill in the `Ship` lifecycle phase under the `/ship` command, and provides cross-navigation to peer Ship-phase skills (`ci-cd-and-automation`, `deprecation-and-migration`, `documentation-and-adrs`). Without this external catalog page, users and autonomous agents discovering skills outside GitHub would lack a web-accessible summary of git workflow practices, installation commands, triggering conditions ("Making any code change (always)"), and lifecycle integration guidance.

## Phase — required
addy:Ship

## Inputs — required
- Triggering conditions / Use when: "Making any code change (always)." — external/git-workflow-and-versioning.md:5
- Upstream source repository reference: "https://github.com/addyosmani/agent-skills/blob/main/skills/git-workflow-and-versioning/SKILL.md" — external/git-workflow-and-versioning.md:10
- Installation tool: open "skills CLI" — external/git-workflow-and-versioning.md:6
- Peer skill references in Ship phase: "ci-cd-and-automation" — external/git-workflow-and-versioning.md:12, "deprecation-and-migration" — external/git-workflow-and-versioning.md:12, "documentation-and-adrs" — external/git-workflow-and-versioning.md:12

## Outputs — required
- Skill install command: "npx skills add addyosmani/agent-skills --skill git-workflow-and-versioning" — external/git-workflow-and-versioning.md:8
- Full pack install command: "npx skills add addyosmani/agent-skills" — external/git-workflow-and-versioning.md:8
- Recommended development practices: "Trunk-based development, atomic commits, change sizing (~100 lines), and the commit-as-save-point pattern - plus branching, conflicts, releases, and semantic versioning." — external/git-workflow-and-versioning.md:5
- No files produced on disk (none)

## Invokes — required
- skill git-workflow-and-versioning — external/git-workflow-and-versioning.md:10
- skill ci-cd-and-automation — external/git-workflow-and-versioning.md:12
- skill deprecation-and-migration — external/git-workflow-and-versioning.md:12
- skill documentation-and-adrs — external/git-workflow-and-versioning.md:12
- command /ship — external/git-workflow-and-versioning.md:12
- doc CONTRIBUTING.md — external/git-workflow-and-versioning.md:15

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Trunk-based development` — external/git-workflow-and-versioning.md:5 — defined here
- `atomic commits` — external/git-workflow-and-versioning.md:5 — defined here
- `change sizing` — external/git-workflow-and-versioning.md:5 — defined here
- `commit-as-save-point` — external/git-workflow-and-versioning.md:5 — defined here
- `branching` — external/git-workflow-and-versioning.md:5 — defined here
- `conflicts` — external/git-workflow-and-versioning.md:5 — defined here
- `releases` — external/git-workflow-and-versioning.md:5 — defined here
- `semantic versioning` — external/git-workflow-and-versioning.md:5 — defined here
- `Ship phase` — external/git-workflow-and-versioning.md:5, 12 — used here
- `skills CLI` — external/git-workflow-and-versioning.md:6 — used here
- `anatomy` — external/git-workflow-and-versioning.md:9 — defined here
- `Overview` — external/git-workflow-and-versioning.md:10 — defined here
- `When to Use` — external/git-workflow-and-versioning.md:10 — defined here
- `Process` — external/git-workflow-and-versioning.md:10 — defined here
- `Rationalizations` — external/git-workflow-and-versioning.md:10 — defined here
- `Red Flags` — external/git-workflow-and-versioning.md:10 — defined here
- `Verification` — external/git-workflow-and-versioning.md:10 — defined here
- `SKILL.md` — external/git-workflow-and-versioning.md:11 — used here
- `/ship` — external/git-workflow-and-versioning.md:12 — used here
- `ci-cd-and-automation` — external/git-workflow-and-versioning.md:12 — used here
- `Shift Left` — external/git-workflow-and-versioning.md:12 — used here
- `Faster is Safer` — external/git-workflow-and-versioning.md:12 — used here
- `feature flags` — external/git-workflow-and-versioning.md:12 — used here
- `quality-gate pipelines` — external/git-workflow-and-versioning.md:12 — used here
- `deprecation-and-migration` — external/git-workflow-and-versioning.md:12 — used here
- `code-as-liability mindset` — external/git-workflow-and-versioning.md:12 — used here
- `compulsory vs advisory deprecation` — external/git-workflow-and-versioning.md:12 — used here
- `zombie-code removal` — external/git-workflow-and-versioning.md:12 — used here
- `documentation-and-adrs` — external/git-workflow-and-versioning.md:12 — used here
- `Architecture Decision Records` — external/git-workflow-and-versioning.md:12 — used here
- `api docs` — external/git-workflow-and-versioning.md:12 — used here
- `inline standards` — external/git-workflow-and-versioning.md:12 — used here
- `Loop engineering` — external/git-workflow-and-versioning.md:15 — used here
- `Evals framework` — external/git-workflow-and-versioning.md:15 — used here

## Structure
- git-workflow-and-versioning — external/git-workflow-and-versioning.md:5
- Install just this skill — external/git-workflow-and-versioning.md:5
- How this skill is structured — external/git-workflow-and-versioning.md:8
- Ship phase — external/git-workflow-and-versioning.md:12
- More in the Ship phase — external/git-workflow-and-versioning.md:12
- Product — external/git-workflow-and-versioning.md:15
- Setup — external/git-workflow-and-versioning.md:15
- Resources — external/git-workflow-and-versioning.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/git-workflow-and-versioning.md:10 · Anatomy section asserts the skill follows a generic 6-section template (Overview, When to Use, Process, Rationalizations, Red Flags, Verification), whereas the actual SKILL.md (skills/git-workflow-and-versioning/SKILL.md) structures content into specialized sections (Core Principles, Workflows, Integration with Workflow Commands, Releases and Versioning) and titles its rationalizations section "Common Rationalizations".
- doc-drift · external/git-workflow-and-versioning.md:5 · Web preview condenses triggering conditions to "Making any code change (always)", whereas skills/git-workflow-and-versioning/SKILL.md:3 expands triggers to include committing, branching, resolving conflicts, opening or reviewing PRs, pushing to remotes, multi-stream parallel work, cutting releases, semantic version bumps, tagging, and writing changelogs.
- orphan · external/git-workflow-and-versioning.md:1 · External documentation snapshot is published on skills.addy.ie but is not referenced or linked from any repository file under sources/addy/.

## Observations
Static web documentation snapshot generated by Astro (`data-astro-cid-*`) from `https://skills.addy.ie/skills/git-workflow-and-versioning/` (20 lines, 26,317 bytes). Demonstrates Addy's standardized web catalog format for agent skills, integrating copy-paste CLI installation commands via `npx skills` (`npx skills add addyosmani/agent-skills --skill git-workflow-and-versioning`), visual categorization tags (`#git`, `#workflow`), lifecycle phase alignment with `Ship` under the `/ship` command, a 6-part skill anatomy overview, direct linking to the upstream GitHub `SKILL.md`, cross-promotion of related Ship-phase skills (`ci-cd-and-automation`, `deprecation-and-migration`, `documentation-and-adrs`), and footer navigation links (`CONTRIBUTING.md`, evals framework, tutorials, lifecycle). Over 90% of the byte content consists of HTML/CSS presentation markup and navigation scaffolding rather than agent-executable operational guidance.

## Context cost
26,317 bytes (~6,579 tokens) for this documentation HTML snapshot. If an executing agent loads this file along with the linked `skills/git-workflow-and-versioning/SKILL.md` (14,063 bytes, ~3,515 tokens), total context cost is approximately 40,380 bytes (~10,094 tokens). Nearly all of this file's bytes represent UI presentation and styling that an autonomous agent cannot operationalize.
