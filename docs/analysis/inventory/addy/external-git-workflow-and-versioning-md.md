---
package: addy
path: external/git-workflow-and-versioning.md
type: external-doc
bytes: 26317
unit: inv-addy-22
deprecated: false
aliases: []
memo_inputs:
  - {path: external/git-workflow-and-versioning.md, sha256: 5e099b35e9a7d6f08b9168d86d7e4ba061dbfc5e02fe7508c3f584ff361acdb4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/git-workflow-and-versioning.md

## Purpose — required, verbatim
> "Structures git workflow practices. Trunk-based development, atomic commits, change sizing (~100 lines), and the commit-as-save-point pattern - plus branching, conflicts, releases, and semantic versioning." — external/git-workflow-and-versioning.md:5

## Design intent — required
This external documentation page (`https://skills.addy.ie/skills/git-workflow-and-versioning/`) provides a public web landing page and structured catalog entry for the `git-workflow-and-versioning` skill. It serves developers and agents browsing Addy Osmani's agent skills library by summarizing the skill's purpose, scope, and triggering condition ("Making any code change (always)"), presenting the standardized six-part skill anatomy, providing installation commands via the skills CLI (`npx skills add`), and contextualizing the skill within the Ship lifecycle phase alongside related skills (`ci-cd-and-automation`, `deprecation-and-migration`, `documentation-and-adrs`). Without this page, public web discovery and high-level evaluation of the skill's workflow practices and installation mechanics outside the raw GitHub repository would be lost.

## Phase — required
addy:Ship — explicitly placed in the "Ship phase" — external/git-workflow-and-versioning.md:5 and tied to the lifecycle command "/ship" — external/git-workflow-and-versioning.md:12.

## Inputs — required
As an external web documentation page, it does not take interactive inputs or arguments. It documents triggers and source references:
- Trigger condition: "Making any code change (always)." — external/git-workflow-and-versioning.md:5
- Source repository link: "https://github.com/addyosmani/agent-skills/blob/main/skills/git-workflow-and-versioning/SKILL.md" — external/git-workflow-and-versioning.md:10
- CLI package target: "npx skills add addyosmani/agent-skills --skill git-workflow-and-versioning" — external/git-workflow-and-versioning.md:8

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Trunk-based development` — external/git-workflow-and-versioning.md:5 — used here
- `atomic commits` — external/git-workflow-and-versioning.md:5 — used here
- `change sizing` — external/git-workflow-and-versioning.md:5 — used here
- `commit-as-save-point pattern` — external/git-workflow-and-versioning.md:5 — used here
- `branching` — external/git-workflow-and-versioning.md:5 — used here
- `conflicts` — external/git-workflow-and-versioning.md:5 — used here
- `releases` — external/git-workflow-and-versioning.md:5 — used here
- `semantic versioning` — external/git-workflow-and-versioning.md:5 — used here
- `Ship phase` — external/git-workflow-and-versioning.md:5 — used here
- `skills CLI` — external/git-workflow-and-versioning.md:6 — used here
- `How this skill is structured` — external/git-workflow-and-versioning.md:8 — defined here
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
- `deprecation-and-migration` — external/git-workflow-and-versioning.md:12 — used here
- `documentation-and-adrs` — external/git-workflow-and-versioning.md:12 — used here
- `Shift Left` — external/git-workflow-and-versioning.md:12 — used here
- `Faster is Safer` — external/git-workflow-and-versioning.md:12 — used here
- `feature flags` — external/git-workflow-and-versioning.md:12 — used here
- `quality-gate pipelines` — external/git-workflow-and-versioning.md:12 — used here
- `code-as-liability mindset` — external/git-workflow-and-versioning.md:12 — used here
- `compulsory vs advisory deprecation` — external/git-workflow-and-versioning.md:12 — used here
- `zombie-code removal` — external/git-workflow-and-versioning.md:12 — used here
- `Architecture Decision Records` — external/git-workflow-and-versioning.md:12 — used here
- `API docs` — external/git-workflow-and-versioning.md:12 — used here
- `inline standards` — external/git-workflow-and-versioning.md:12 — used here

## Structure
- "git-workflow-and-versioning" — external/git-workflow-and-versioning.md:5
- "Install just this skill" — external/git-workflow-and-versioning.md:5
- "How this skill is structured" — external/git-workflow-and-versioning.md:8
- "Overview" — external/git-workflow-and-versioning.md:10
- "When to Use" — external/git-workflow-and-versioning.md:10
- "Process" — external/git-workflow-and-versioning.md:10
- "Rationalizations" — external/git-workflow-and-versioning.md:10
- "Red Flags" — external/git-workflow-and-versioning.md:10
- "Verification" — external/git-workflow-and-versioning.md:10
- "Ship phase" — external/git-workflow-and-versioning.md:12
- "More in the Ship phase" — external/git-workflow-and-versioning.md:12
- "Product" — external/git-workflow-and-versioning.md:15
- "Setup" — external/git-workflow-and-versioning.md:15
- "Resources" — external/git-workflow-and-versioning.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — "Process" — external/git-workflow-and-versioning.md:10 — Page lists section 03 as "Process" ("Step-by-step workflow"), but skills/git-workflow-and-versioning/SKILL.md has no ## Process section.
- doc-drift — "Rationalizations" — external/git-workflow-and-versioning.md:10 — Page labels section 04 as "Rationalizations", whereas skills/git-workflow-and-versioning/SKILL.md:313 titles the section "## Common Rationalizations".
- orphan — external/git-workflow-and-versioning.md:1 — External documentation snapshot from skills.addy.ie that is not referenced or imported by any file in the repository.

## Observations
- Summarizes the skill trigger as "Making any code change (always)." — external/git-workflow-and-versioning.md:5, matching the package overview table in "Making any code change (always)" — README.md:277.
- Summarizes the core workflow practices as "Trunk-based development, atomic commits, change sizing (~100 lines), and the commit-as-save-point pattern - plus branching, conflicts, releases, and semantic versioning." — external/git-workflow-and-versioning.md:5.
- Provides CLI installation commands for the single skill ("npx skills add addyosmani/agent-skills --skill git-workflow-and-versioning" — external/git-workflow-and-versioning.md:8) and the entire package ("npx skills add addyosmani/agent-skills" — external/git-workflow-and-versioning.md:8).
- Places the skill under the Ship phase, associating it with command "/ship" — external/git-workflow-and-versioning.md:12, and links to related Ship skills: ci-cd-and-automation, deprecation-and-migration, and documentation-and-adrs ("More in the Ship phase" — external/git-workflow-and-versioning.md:12).
- High context cost for LLM consumption: as an Astro-rendered HTML file (26,317 bytes), the vast majority of tokens consist of UI boilerplates, CSS styles, SVGs, and client-side JavaScript rather than actionable engineering guidelines.

## Context cost
26,317 bytes (external HTML document); 0 additional bytes loaded. Total context cost: 26,317 bytes (~6,500 tokens).
