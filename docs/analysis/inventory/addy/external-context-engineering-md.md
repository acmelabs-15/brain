---
package: addy
path: external/context-engineering.md
type: doc
bytes: 26352
unit: inv-addy-17
aliases: []
memo_inputs:
  - {path: external/context-engineering.md, sha256: a765b30399df4aeb3358a50d0a6cac1d95853e82426e003908aabc75111b56b0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/context-engineering.md

## Purpose — required, verbatim
> "Optimizes agent context setup. Configure rules files, pack context deliberately, and wire MCP integrations so the agent has exactly what it needs - no more, no less." — external/context-engineering.md:5

## Design intent — required
Provides an external web documentation entry point for the `context-engineering` skill on the `skills.addy.ie` site, articulating the skill's purpose, installation commands (via `npx skills add`), structural anatomy, triggering conditions, and related build-phase tooling. Without this external landing page, developers discovering or installing the skill package outside git repositories lack a web-accessible summary of the context engineering workflow, CLI installation instructions, and contextual navigation within the Addy agent-skills build phase.

## Phase — required
addy:Build

## Inputs — required
- Trigger condition: "Starting a session, switching tasks, or when output quality drops." — external/context-engineering.md:5
- Installation CLI command: "npx skills add addyosmani/agent-skills --skill context-engineering" — external/context-engineering.md:8
- Target skill source link: `skills/context-engineering/SKILL.md` — external/context-engineering.md:10

## Outputs — required
none

## Invokes — required
- skill context-engineering — external/context-engineering.md:5
- command /build — external/context-engineering.md:12
- skill incremental-implementation — external/context-engineering.md:12
- skill test-driven-development — external/context-engineering.md:12
- skill source-driven-development — external/context-engineering.md:12

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `context-engineering` — external/context-engineering.md:5 — defined here
- `Build phase` — external/context-engineering.md:5, 12 — used here
- `Use when` — external/context-engineering.md:5 — defined here
- `#context` — external/context-engineering.md:5 — used here
- `#agents` — external/context-engineering.md:5 — used here
- `#mcp` — external/context-engineering.md:5 — used here
- `skills CLI` — external/context-engineering.md:6 — used here
- `This skill only` — external/context-engineering.md:8 — defined here
- `All skills` — external/context-engineering.md:8 — defined here
- `anatomy` — external/context-engineering.md:9 — defined here
- `Overview` — external/context-engineering.md:10 — defined here
- `When to Use` — external/context-engineering.md:10 — defined here
- `Process` — external/context-engineering.md:10 — defined here
- `Rationalizations` — external/context-engineering.md:10 — defined here
- `Red Flags` — external/context-engineering.md:10 — defined here
- `Verification` — external/context-engineering.md:10 — defined here
- `SKILL.md` — external/context-engineering.md:10, 11 — used here
- `/build` — external/context-engineering.md:12 — used here
- `thin, tested vertical slices` — external/context-engineering.md:12 — used here
- `incremental-implementation` — external/context-engineering.md:12 — used here
- `test-driven-development` — external/context-engineering.md:12 — used here
- `source-driven-development` — external/context-engineering.md:12 — used here
- `Red-Green-Refactor` — external/context-engineering.md:12 — used here
- `test pyramid` — external/context-engineering.md:12 — used here
- `DAMP over DRY` — external/context-engineering.md:12 — used here
- `Beyoncé Rule` — external/context-engineering.md:12 — used here
- `full lifecycle` — external/context-engineering.md:14 — used here
- `Skills catalog` — external/context-engineering.md:15 — used here
- `The lifecycle` — external/context-engineering.md:15 — used here
- `Loop engineering` — external/context-engineering.md:15 — used here

## Structure
- "context-engineering" — external/context-engineering.md:5
- "Install just this skill" — external/context-engineering.md:5
- "How this skill is structured" — external/context-engineering.md:8
- "Build phase" — external/context-engineering.md:12
- "More in the Build phase" — external/context-engineering.md:12
- "Product" — external/context-engineering.md:15
- "Setup" — external/context-engineering.md:15
- "Resources" — external/context-engineering.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/context-engineering.md:9-10 · Page asserts "Every skill follows the same anatomy" specifying six standardized sections (01 Overview to 06 Verification), but skills/context-engineering/SKILL.md implements sections The Context Hierarchy, Context Packing Strategies, MCP Integrations, and Confusion Management with no dedicated "Process" section.
- doc-drift · external/context-engineering.md:12 · Page associates context-engineering with slash command /build in sidebar and category metadata, but .claude/commands/build.md does not orchestrate or invoke context-engineering.
- orphan · external/context-engineering.md:1-20 · External documentation snapshot is not invoked, referenced, or linked by any in-scope file within the repository.

## Observations
- External documentation web snapshot generated via Astro (`data-astro-cid-*`) representing the public catalog entry at `https://skills.addy.ie/skills/context-engineering/`.
- Documents skill distribution via the Vercel open `skills` CLI using `npx skills add addyosmani/agent-skills --skill context-engineering` (or pack installation `npx skills add addyosmani/agent-skills`).
- Embeds the skill into the `Build` phase taxonomy alongside sibling skills `incremental-implementation`, `test-driven-development`, and `source-driven-development`.
- Links directly to the `/build` slash command badge and repository skill source on GitHub (`skills/context-engineering/SKILL.md`).
- Contains interactive client-side components (clipboard copy buttons for CLI commands, responsive navigation drawer) and telemetry (`netlify-rum-container`).

## Context cost
26,352 bytes (~6,588 tokens). As an external web landing page, it is loaded over HTTP by users or browser agents rather than injected directly into coding agent conversation windows.
