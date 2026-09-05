---
package: addy
path: external/documentation-and-adrs.md
type: external-doc
bytes: 26223
unit: inv-addy-19
deprecated: false
aliases: []
memo_inputs:
  - {path: external/documentation-and-adrs.md, sha256: 0675bd2747efda69bac54722bc4e2d1e56e0be56ec3d532088d71830c7e77977}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/documentation-and-adrs.md

## Purpose — required, verbatim
> "Records decisions and documentation. Architecture Decision Records, API docs, and inline documentation standards - capture the context future engineers and agents need to understand the codebase." — external/documentation-and-adrs.md:5

## Design intent — required
This external documentation page serves as the public web reference and catalog entry for the `documentation-and-adrs` skill on `skills.addy.ie`. It provides an overview of capturing architectural and technical rationale—focusing on Architecture Decision Records (ADRs), public API documentation, and inline documentation standards—so that future human maintainers and autonomous agents understand the constraints and reasons behind code implementations. Without this page, users and tooling discovering skills externally would lack a web-accessible summary, installation command via the skills CLI, and lifecycle classification within Addy's Ship phase.

## Phase — required
`addy:Ship` ("Ship phase" — external/documentation-and-adrs.md:5, 12)

## Inputs — required
Static web page (none directly consumed at runtime). From an engineering workflow perspective described by the page: architectural decisions, API modifications, and feature releases ("Making architectural decisions, changing APIs, or shipping features." — external/documentation-and-adrs.md:5), as well as the CLI command for adding the skill ("npx skills add addyosmani/agent-skills --skill documentation-and-adrs" — external/documentation-and-adrs.md:8).

## Outputs — required
none (pure reference documentation page). The documented skill produces architecture decision records, API documentation, and inline documentation ("Architecture Decision Records, API docs, and inline documentation standards" — external/documentation-and-adrs.md:5).

## Invokes — required
none

## Invoked by — required
none

## Concepts named — required, verbatim
- `Ship` — external/documentation-and-adrs.md:5 — used here
- `Ship phase` — external/documentation-and-adrs.md:5, 12 — used here
- `Architecture Decision Records` — external/documentation-and-adrs.md:5 — used here
- `API docs` — external/documentation-and-adrs.md:5 — used here
- `inline documentation standards` — external/documentation-and-adrs.md:5 — used here
- `adr` — external/documentation-and-adrs.md:5 — used here
- `skills CLI` — external/documentation-and-adrs.md:6 — used here
- `Overview` — external/documentation-and-adrs.md:10 — used here
- `When to Use` — external/documentation-and-adrs.md:10 — used here
- `Process` — external/documentation-and-adrs.md:10 — used here
- `Rationalizations` — external/documentation-and-adrs.md:10 — used here
- `Red Flags` — external/documentation-and-adrs.md:10 — used here
- `Verification` — external/documentation-and-adrs.md:10 — used here
- `git-workflow-and-versioning` — external/documentation-and-adrs.md:12 — used here
- `trunk-based development` — external/documentation-and-adrs.md:12 — used here
- `atomic commits` — external/documentation-and-adrs.md:12 — used here
- `ci-cd-and-automation` — external/documentation-and-adrs.md:12 — used here
- `Shift Left` — external/documentation-and-adrs.md:12 — used here
- `Faster is Safer` — external/documentation-and-adrs.md:12 — used here
- `feature flags` — external/documentation-and-adrs.md:12 — used here
- `quality-gate pipelines` — external/documentation-and-adrs.md:12 — used here
- `deprecation-and-migration` — external/documentation-and-adrs.md:12 — used here
- `code-as-liability mindset` — external/documentation-and-adrs.md:12 — used here
- `compulsory vs advisory deprecation` — external/documentation-and-adrs.md:12 — used here
- `zombie-code removal` — external/documentation-and-adrs.md:12 — used here
- `Lifecycle` — external/documentation-and-adrs.md:5 — used here
- `Loops` — external/documentation-and-adrs.md:5 — used here
- `Loop engineering` — external/documentation-and-adrs.md:15 — used here
- `Evals framework` — external/documentation-and-adrs.md:15 — used here

## Structure
- `documentation-and-adrs` — external/documentation-and-adrs.md:5
- `Install just this skill` — external/documentation-and-adrs.md:5
- `How this skill is structured` — external/documentation-and-adrs.md:8
- `Ship phase` — external/documentation-and-adrs.md:12
- `More in the Ship phase` — external/documentation-and-adrs.md:12
- `git-workflow-and-versioning` — external/documentation-and-adrs.md:12
- `ci-cd-and-automation` — external/documentation-and-adrs.md:12
- `deprecation-and-migration` — external/documentation-and-adrs.md:12
- `Product` — external/documentation-and-adrs.md:15
- `Setup` — external/documentation-and-adrs.md:15
- `Resources` — external/documentation-and-adrs.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/documentation-and-adrs.md:10: External page claims the skill anatomy includes step "Process" — external/documentation-and-adrs.md:10, but `skills/documentation-and-adrs/SKILL.md` contains no `## Process` section, instead structuring guidance into topic sections.
- doc-drift — external/documentation-and-adrs.md:10: External page lists anatomy item 04 as "Rationalizations" — external/documentation-and-adrs.md:10, whereas `skills/documentation-and-adrs/SKILL.md` titles the section "## Common Rationalizations" — skills/documentation-and-adrs/SKILL.md:259.

## Observations
- Canonical web hosting: Snapshot of the public documentation page hosted at "https://skills.addy.ie/skills/documentation-and-adrs/" — external/documentation-and-adrs.md:1, built with Astro and styled with scoped CSS.
- Standardized skill anatomy banner: The page advertises a universal 6-part anatomy ("Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/documentation-and-adrs.md:9), but `documentation-and-adrs` deviates by organizing around concrete artifact types (ADRs, inline comments, API docs, READMEs, and changelogs) rather than a sequential workflow.
- Installation tooling: Promotes CLI installation via "npx skills add addyosmani/agent-skills --skill documentation-and-adrs" — external/documentation-and-adrs.md:8 as well as the complete collection via "npx skills add addyosmani/agent-skills" — external/documentation-and-adrs.md:8.
- Phase placement: Explicitly assigned to the Ship phase ("Deploy with confidence - rollout, rollback, observe." — external/documentation-and-adrs.md:12) with command "/ship" — external/documentation-and-adrs.md:12, despite architectural decision records being relevant across earlier definition and implementation phases.

## Context cost
26,223 bytes (~6,550 tokens) for this file. Loads 0 additional files when viewed.
