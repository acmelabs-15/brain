---
package: addy
path: external/deprecation-and-migration.md
type: external-doc
bytes: 26252
unit: inv-addy-18
deprecated: false
aliases: []
memo_inputs:
  - {path: external/deprecation-and-migration.md, sha256: a1d9b5a8d3237126b624e386d75e89e29bc5112edd61057bfa2fa97003050a23}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/deprecation-and-migration.md

## Purpose — required, verbatim
> "Manages deprecation and migration. A code-as-liability mindset, compulsory vs advisory deprecation, migration patterns, and zombie-code removal for deciding whether to maintain or sunset existing code." — external/deprecation-and-migration.md:5

## Design intent — required
Provides a public web catalog documentation and discovery page for the `deprecation-and-migration` skill within Addy Osmani's agent-skills repository. It articulates the core philosophy of deprecation and migration ("A code-as-liability mindset"), outlines triggering circumstances ("Removing old systems, migrating users, or sunsetting features."), provides installation instructions via the `skills` CLI, and documents the standardized 6-part anatomy of agent skills (Overview, When to Use, Process, Rationalizations, Red Flags, Verification). It classifies the skill into the `addy:Ship` lifecycle phase, associates it with the `/ship` command, and highlights interrelated ship-phase practices including `git-workflow-and-versioning`, `ci-cd-and-automation`, and `documentation-and-adrs`. Without this page, developers and autonomous agents browsing the public skills catalog would lack authoritative catalog metadata, installation commands, and lifecycle categorization for sunsetting code.

## Phase — required
`addy:Ship`
> "Ship phase" — external/deprecation-and-migration.md:5

## Inputs — required
- HTTP GET requests to `https://skills.addy.ie/skills/deprecation-and-migration/`
- Render inputs from the Astro site build system: repository skill definition from `skills/deprecation-and-migration/SKILL.md` and catalog navigation metadata

## Outputs — required
- Rendered web documentation page for `deprecation-and-migration`
- CLI installation commands: `npx skills add addyosmani/agent-skills --skill deprecation-and-migration` and `npx skills add addyosmani/agent-skills`
- Hyperlinks to `skills/deprecation-and-migration/SKILL.md` on GitHub, `/skills/git-workflow-and-versioning/`, `/skills/ci-cd-and-automation/`, `/skills/documentation-and-adrs/`, and `/lifecycle/`

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Ship phase` — external/deprecation-and-migration.md:5 — used here
- `code-as-liability` — external/deprecation-and-migration.md:5 — used here
- `compulsory vs advisory deprecation` — external/deprecation-and-migration.md:5 — used here
- `migration patterns` — external/deprecation-and-migration.md:5 — used here
- `zombie-code removal` — external/deprecation-and-migration.md:5 — used here
- `Overview` — external/deprecation-and-migration.md:10 — used here
- `When to Use` — external/deprecation-and-migration.md:10 — used here
- `Process` — external/deprecation-and-migration.md:10 — used here
- `Rationalizations` — external/deprecation-and-migration.md:10 — used here
- `Red Flags` — external/deprecation-and-migration.md:10 — used here
- `Verification` — external/deprecation-and-migration.md:10 — used here
- `/ship` — external/deprecation-and-migration.md:12 — used here
- `git-workflow-and-versioning` — external/deprecation-and-migration.md:12 — used here
- `ci-cd-and-automation` — external/deprecation-and-migration.md:12 — used here
- `documentation-and-adrs` — external/deprecation-and-migration.md:12 — used here

## Structure
1. `deprecation-and-migration` (h1)
2. `Install just this skill` (h2)
3. `How this skill is structured` (h2)
4. `Ship phase` (h3 aside)
5. `More in the Ship phase` (h2)
6. `git-workflow-and-versioning` (h3 related skill)
7. `ci-cd-and-automation` (h3 related skill)
8. `documentation-and-adrs` (h3 related skill)
9. `Product` (h3 footer)
10. `Setup` (h3 footer)
11. `Resources` (h3 footer)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `doc-drift` — "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/deprecation-and-migration.md:9 asserts a uniform 6-part anatomy including "Process" at line 10, but skills/deprecation-and-migration/SKILL.md structures its migration lifecycle across multiple specialized sections: "The Deprecation Decision" — skills/deprecation-and-migration/SKILL.md:37, "Compulsory vs Advisory Deprecation" — skills/deprecation-and-migration/SKILL.md:58, "The Migration Process" — skills/deprecation-and-migration/SKILL.md:67, "Migration Patterns" — skills/deprecation-and-migration/SKILL.md:120, and "Zombie Code" — skills/deprecation-and-migration/SKILL.md:192.
- `doc-drift` — "Manages deprecation and migration. A code-as-liability mindset, compulsory vs advisory deprecation, migration patterns, and zombie-code removal for deciding whether to maintain or sunset existing code." — external/deprecation-and-migration.md:5 differs from the repository description "Manages deprecation and migration. Use when removing old systems, APIs, or features. Use when migrating users from one implementation to another. Use when deciding whether to maintain or sunset existing code." — skills/deprecation-and-migration/SKILL.md:3.

## Observations
- Complete Astro-generated HTML artifact (26,252 bytes, 20 lines) representing the external documentation page at `https://skills.addy.ie/skills/deprecation-and-migration/`.
- Embedded styling rules (`<style data-astro-cid-f2mrhd7z>`) and Netlify RUM analytics script account for the bulk of byte size.
- Assigns `deprecation-and-migration` to the `Ship` lifecycle phase and pairs it with the `/ship` slash command.
- Features related ship-phase recommendations: `git-workflow-and-versioning`, `ci-cd-and-automation`, and `documentation-and-adrs`.
- Highlights runtime platform compatibility across Claude Code, Codex, Cursor, and Antigravity.

## Context cost
26,252 bytes (~6,500 tokens). Loads no external files at runtime.
