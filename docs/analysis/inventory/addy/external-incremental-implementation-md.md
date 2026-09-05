---
package: addy
path: external/incremental-implementation.md
type: doc
bytes: 26461
unit: inv-addy-24
aliases: []
memo_inputs:
  - {path: external/incremental-implementation.md, sha256: 4ae55418a30ac016ac45f955ec59ee4d67232d113fe6999478fb8f7fac8c378f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/incremental-implementation.md

## Purpose — required, verbatim
> "Delivers changes incrementally as thin vertical slices with feature flags, safe defaults, and rollback-friendly changes. Use when you’re about to write a large amount of code at once." — external/incremental-implementation.md:5

## Design intent — required
Provides the published web catalog entry and documentation page for the `incremental-implementation` skill on `skills.addy.ie`. It articulates the core execution discipline of delivering software changes as thin vertical slices rather than monolithic passes, details CLI installation instructions via the open `skills` CLI, maps the skill to the `Build` lifecycle phase and `/build` command, outlines the standardized six-part skill anatomy, and provides direct links to the canonical `SKILL.md` source and related Build-phase skills (`test-driven-development`, `context-engineering`, `source-driven-development`). Without this landing page, developers discovering or installing skills outside the git repository lack a web-indexable reference for incremental delivery workflows and package installation commands.

## Phase — required
addy:Build

## Inputs — required
- Trigger condition: "Any change touching more than one file." — external/incremental-implementation.md:5
- Large changes trigger: "when you’re about to write a large amount of code at once." — external/incremental-implementation.md:5
- Installation command: "npx skills add addyosmani/agent-skills --skill incremental-implementation" — external/incremental-implementation.md:8

## Outputs — required
- Single-skill installation CLI command: "npx skills add addyosmani/agent-skills --skill incremental-implementation" — external/incremental-implementation.md:8
- Full-pack installation CLI command: "npx skills add addyosmani/agent-skills" — external/incremental-implementation.md:8
- Slices with safe defaults: "thin vertical slices with feature flags, safe defaults, and rollback-friendly changes" — external/incremental-implementation.md:5

## Invokes — required
- skill incremental-implementation — external/incremental-implementation.md:5
- command /build — external/incremental-implementation.md:5
- doc SKILL.md — external/incremental-implementation.md:11
- skill test-driven-development — external/incremental-implementation.md:12
- command /test — external/incremental-implementation.md:12
- skill context-engineering — external/incremental-implementation.md:12
- skill source-driven-development — external/incremental-implementation.md:12
- doc CONTRIBUTING.md — external/incremental-implementation.md:15

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `incremental-implementation` — external/incremental-implementation.md:5 — defined here
- `Build phase` — external/incremental-implementation.md:5, 12 — used here
- `/build` — external/incremental-implementation.md:5, 12 — used here
- `thin vertical slices` — external/incremental-implementation.md:5 — used here
- `feature flags` — external/incremental-implementation.md:5 — used here
- `safe defaults` — external/incremental-implementation.md:5 — used here
- `rollback-friendly changes` — external/incremental-implementation.md:5 — used here
- `skills CLI` — external/incremental-implementation.md:6 — used here
- `anatomy` — external/incremental-implementation.md:9 — defined here
- `Overview` — external/incremental-implementation.md:10 — used here
- `When to Use` — external/incremental-implementation.md:10 — used here
- `Process` — external/incremental-implementation.md:10 — used here
- `Rationalizations` — external/incremental-implementation.md:10 — used here
- `Red Flags` — external/incremental-implementation.md:10 — used here
- `Verification` — external/incremental-implementation.md:10 — used here
- `SKILL.md` — external/incremental-implementation.md:11 — used here
- `test-driven-development` — external/incremental-implementation.md:12 — used here
- `/test` — external/incremental-implementation.md:12 — used here
- `Red-Green-Refactor` — external/incremental-implementation.md:12 — used here
- `test pyramid` — external/incremental-implementation.md:12 — used here
- `DAMP over DRY` — external/incremental-implementation.md:12 — used here
- `Beyoncé Rule` — external/incremental-implementation.md:12 — used here
- `context-engineering` — external/incremental-implementation.md:12 — used here
- `source-driven-development` — external/incremental-implementation.md:12 — used here
- `full lifecycle` — external/incremental-implementation.md:14 — used here
- `The lifecycle` — external/incremental-implementation.md:15 — used here
- `Loop engineering` — external/incremental-implementation.md:15 — used here
- `Evals framework` — external/incremental-implementation.md:15 — used here

## Structure
- "incremental-implementation" — external/incremental-implementation.md:5
- "Install just this skill" — external/incremental-implementation.md:5
- "How this skill is structured" — external/incremental-implementation.md:8
- "Build phase" — external/incremental-implementation.md:12
- "More in the Build phase" — external/incremental-implementation.md:12
- "Product" — external/incremental-implementation.md:15
- "Setup" — external/incremental-implementation.md:15
- "Resources" — external/incremental-implementation.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/incremental-implementation.md:9 · Page asserts that "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." specifying six standardized sections (01 Overview to 06 Verification), but repository skill definition skills/incremental-implementation/SKILL.md implements 11 sections (Overview, When to Use, The Increment Cycle, Slicing Strategies, Implementation Rules, Working with Agents, Increment Checklist, Common Rationalizations, Red Flags, Verification, See Also), omitting the increment cycle, slicing strategies, implementation rules, agent instructions, checklist, and references from the web anatomy.
- doc-drift · external/incremental-implementation.md:5 · External page summary ("Delivers changes incrementally as thin vertical slices with feature flags, safe defaults, and rollback-friendly changes. Use when you’re about to write a large amount of code at once.") and triggering condition ("Any change touching more than one file.") drifts from repository skill description in skills/incremental-implementation/SKILL.md:3 ("Delivers changes incrementally. Use when implementing any feature or change that touches more than one file. Use when you're about to write a large amount of code at once, or when a task feels too big to land in one step.").
- doc-drift · external/incremental-implementation.md:12 · External page's "More in the Build phase" section groups test-driven-development, context-engineering, and source-driven-development alongside incremental-implementation under the Build phase, whereas repository slash command commands/build.toml:4 only invokes incremental-implementation and test-driven-development.

## Observations
- Web documentation catalog snapshot generated via Astro (`data-astro-cid-*`) for `https://skills.addy.ie/skills/incremental-implementation/`.
- Documents skill installation via the Vercel open `skills` CLI: `npx skills add addyosmani/agent-skills --skill incremental-implementation` as well as full-pack installation `npx skills add addyosmani/agent-skills`.
- Integrates `incremental-implementation` into the `Build` phase of Addy's lifecycle, associating it with the `/build` slash command badge and sidebar card.
- Emphasizes execution discipline: building in thin vertical slices, utilizing feature flags for work-in-progress, enforcing safe conservative defaults, and structuring increments to be independently rollback-friendly.
- Links directly to the canonical skill definition on GitHub at `skills/incremental-implementation/SKILL.md`.

## Context cost
26,461 bytes (~6,615 tokens). As an external web catalog page, it is accessed over HTTP for discovery rather than loaded directly into coding agent prompt contexts.
