---
package: addy
path: external/context-engineering.md
type: external-doc
bytes: 26352
unit: inv-addy-17
deprecated: false
aliases: []
memo_inputs:
  - {path: external/context-engineering.md, sha256: a765b30399df4aeb3358a50d0a6cac1d95853e82426e003908aabc75111b56b0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/context-engineering.md

## Purpose — required, verbatim
> "Optimizes agent context setup. Configure rules files, pack context deliberately, and wire MCP integrations so the agent has exactly what it needs - no more, no less." — external/context-engineering.md:5

## Design intent — required
External web documentation catalog page for the `context-engineering` skill hosted on `skills.addy.ie`. It serves as the public catalog entry and installation portal for the skill within the Addy agent-skills ecosystem, providing direct CLI installation commands, a standardized six-part skill anatomy overview, lifecycle phase categorization (`addy:Build`), and hyperlinks to the underlying repository source (`skills/context-engineering/SKILL.md`) and related build-phase skills. Without it, developers discovering the skill through the web portal would lack copyable package manager commands, structured workflow documentation, and contextual links to related lifecycle tools.

## Phase — required
addy:Build ("Build phase" — external/context-engineering.md:5)

## Inputs — required
Web request routing parameters (`/skills/context-engineering/`), metadata describing agent rules files and MCP integrations, and links to GitHub repository assets. For users following the documentation, it consumes the skill package identifier passed to the skills CLI via "npx skills add addyosmani/agent-skills --skill context-engineering" — external/context-engineering.md:8.

## Outputs — required
none (static external documentation catalog page; produces no files, decisions, or commits directly, though it displays copyable CLI installation commands for local repository deployment).

## Invokes — required
- doc skills/context-engineering/SKILL.md — external/context-engineering.md:10
- command /build — external/context-engineering.md:12

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Build` — external/context-engineering.md:5 — used here
- `Build phase` — external/context-engineering.md:5 — used here
- `context-engineering` — external/context-engineering.md:5 — defined here
- `rules files` — external/context-engineering.md:5 — used here
- `MCP integrations` — external/context-engineering.md:5 — used here
- `#context` — external/context-engineering.md:5 — used here
- `#agents` — external/context-engineering.md:5 — used here
- `#mcp` — external/context-engineering.md:5 — used here
- `skills CLI` — external/context-engineering.md:6 — used here
- `Overview` — external/context-engineering.md:10 — used here
- `When to Use` — external/context-engineering.md:10 — used here
- `Process` — external/context-engineering.md:10 — used here
- `Rationalizations` — external/context-engineering.md:10 — used here
- `Red Flags` — external/context-engineering.md:10 — used here
- `Verification` — external/context-engineering.md:10 — used here
- `SKILL.md` — external/context-engineering.md:11 — used here
- `/build` — external/context-engineering.md:12 — used here
- `incremental-implementation` — external/context-engineering.md:12 — used here
- `/test` — external/context-engineering.md:12 — used here
- `test-driven-development` — external/context-engineering.md:12 — used here
- `source-driven-development` — external/context-engineering.md:12 — used here
- `thin vertical slices` — external/context-engineering.md:12 — used here
- `Rollback-friendly changes` — external/context-engineering.md:12 — used here
- `red-green-refactor` — external/context-engineering.md:12 — used here
- `test pyramid` — external/context-engineering.md:12 — used here
- `DAMP over DRY` — external/context-engineering.md:12 — used here
- `Beyoncé Rule` — external/context-engineering.md:12 — used here
- `The lifecycle` — external/context-engineering.md:15 — used here
- `Loop engineering` — external/context-engineering.md:15 — used here

## Structure
- `context-engineering` — external/context-engineering.md:5
- `Install just this skill` — external/context-engineering.md:5
- `How this skill is structured` — external/context-engineering.md:8
- `Build phase` — external/context-engineering.md:12
- `More in the Build phase` — external/context-engineering.md:12
- `Product` — external/context-engineering.md:15
- `Setup` — external/context-engineering.md:15
- `Resources` — external/context-engineering.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/context-engineering.md:5: The external page description adds MCP integration setup ("wire MCP integrations so the agent has exactly what it needs - no more, no less." — external/context-engineering.md:5) and alters the trigger list compared to the repository description ("description: Optimizes agent context setup. Use when starting a new session, when agent output quality degrades, when switching between tasks, or when you need to configure rules files and context for a project." — skills/context-engineering/SKILL.md:3).
- doc-drift — external/context-engineering.md:5: The external doc categorizes context-engineering under the Build phase ("Build phase" — external/context-engineering.md:5) and links it to command /build (external/context-engineering.md:12), but the skill is cross-cutting session setup and .claude/commands/build.md:5 does not invoke it ("Invoke the agent-skills:incremental-implementation skill alongside agent-skills:test-driven-development." — .claude/commands/build.md:5).
- doc-drift — external/context-engineering.md:9: The page claims "Every skill follows the same anatomy - a workflow the agent follows, not a doc it reads." — external/context-engineering.md:9 with six standard sections (external/context-engineering.md:10), but skills/context-engineering/SKILL.md interposes non-standard reference sections ("## The Context Hierarchy" — skills/context-engineering/SKILL.md:20 and "## MCP Integrations" — skills/context-engineering/SKILL.md:180).
- orphan — external/context-engineering.md:1: External documentation snapshot is not referenced, linked, or invoked by any file in the repository package.

## Observations
- Pre-rendered static HTML documentation generated by Astro containing embedded CSS styles, SVGs, and Netlify CWV/RUM analytics script.
- Provides copy-to-clipboard CLI install commands: "npx skills add addyosmani/agent-skills --skill context-engineering" — external/context-engineering.md:8 and "npx skills add addyosmani/agent-skills" — external/context-engineering.md:8.
- Curates related Build phase skills (incremental-implementation, test-driven-development, source-driven-development) with corresponding command tags (/build, /test).

## Context cost
26,352 bytes (~6,600 tokens) of HTML content. As an external documentation snapshot, it carries zero runtime cost for agent execution, but ingesting the page for analysis consumes ~6,600 tokens.
