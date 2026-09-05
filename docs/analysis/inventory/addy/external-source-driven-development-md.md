---
package: addy
path: external/source-driven-development.md
type: doc
bytes: 26358
unit: inv-addy-30
aliases: []
memo_inputs:
  - {path: external/source-driven-development.md, sha256: e9a6631930fd39b81980521292daa88ad03e7ac05ea570aa464a183db1559d06}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# external/source-driven-development.md

## Purpose — required, verbatim
> "Grounds every implementation decision in official documentation. Verify against sources, cite them, and flag anything unverified so the code stays free of outdated patterns." — external/source-driven-development.md:5

## Design intent — required
Serves as the public web catalog entry and documentation preview for the `source-driven-development` skill on `skills.addy.ie`. It establishes the skill's positioning within the Addy agent-skills ecosystem as a Build-phase skill (`addy:Build`), articulating its core purpose of grounding implementation decisions in official documentation, citing sources, and flagging unverified code patterns to eliminate outdated training-data hallucinations. It provides open `skills CLI` installation commands (`npx skills add addyosmani/agent-skills --skill source-driven-development` and full pack install), summarizes the six-part standardized skill anatomy, links to the authoritative repository source (`skills/source-driven-development/SKILL.md`), and presents related Build-phase skills (`incremental-implementation`, `test-driven-development`, `context-engineering`). Without this page, developers exploring the agent-skills catalog on the web would lack browser-accessible documentation, triggering conditions ("You want authoritative, source-cited code for any framework or library"), CLI installation snippets, and cross-skill discovery for documentation-grounded development.

## Phase — required
addy:Build

## Inputs — required
- Skill triggering conditions: "You want authoritative, source-cited code for any framework or library." — external/source-driven-development.md:5
- Upstream source repository reference: "https://github.com/addyosmani/agent-skills/blob/main/skills/source-driven-development/SKILL.md" — external/source-driven-development.md:10
- Installation tool: open "skills CLI" — external/source-driven-development.md:6

## Outputs — required
- Skill install command: "npx skills add addyosmani/agent-skills --skill source-driven-development" — external/source-driven-development.md:8
- Full pack install command: "npx skills add addyosmani/agent-skills" — external/source-driven-development.md:8
- No files produced on disk (none)

## Invokes — required
- skill source-driven-development — external/source-driven-development.md:10
- command /build — external/source-driven-development.md:12
- skill incremental-implementation — external/source-driven-development.md:12
- skill test-driven-development — external/source-driven-development.md:12
- command /test — external/source-driven-development.md:12
- skill context-engineering — external/source-driven-development.md:12
- doc CONTRIBUTING.md — external/source-driven-development.md:15

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `source-driven-development` — external/source-driven-development.md:5 — defined here
- `official documentation` — external/source-driven-development.md:5 — defined here
- `outdated patterns` — external/source-driven-development.md:5 — defined here
- `Build phase` — external/source-driven-development.md:5, 12 — used here
- `documentation` — external/source-driven-development.md:5 — used here
- `correctness` — external/source-driven-development.md:5 — used here
- `skills CLI` — external/source-driven-development.md:6 — used here
- `anatomy` — external/source-driven-development.md:9, 10 — defined here
- `Overview` — external/source-driven-development.md:10 — used here
- `When to Use` — external/source-driven-development.md:10 — used here
- `Process` — external/source-driven-development.md:10 — used here
- `Rationalizations` — external/source-driven-development.md:10 — used here
- `Red Flags` — external/source-driven-development.md:10 — used here
- `Verification` — external/source-driven-development.md:10 — used here
- `SKILL.md` — external/source-driven-development.md:10, 11 — used here
- `/build` — external/source-driven-development.md:12 — used here
- `vertical slices` — external/source-driven-development.md:12 — used here
- `incremental-implementation` — external/source-driven-development.md:12 — used here
- `test-driven-development` — external/source-driven-development.md:12 — used here
- `/test` — external/source-driven-development.md:12 — used here
- `Red-Green-Refactor` — external/source-driven-development.md:12 — used here
- `test pyramid` — external/source-driven-development.md:12 — used here
- `DAMP over DRY` — external/source-driven-development.md:12 — used here
- `Beyoncé Rule` — external/source-driven-development.md:12 — used here
- `context-engineering` — external/source-driven-development.md:12 — used here
- `rules files` — external/source-driven-development.md:12 — used here
- `context packing` — external/source-driven-development.md:12 — used here
- `MCP` — external/source-driven-development.md:12 — used here
- `full lifecycle` — external/source-driven-development.md:14 — used here
- `The lifecycle` — external/source-driven-development.md:15 — used here
- `Loop engineering` — external/source-driven-development.md:15 — used here
- `Evals framework` — external/source-driven-development.md:15 — used here

## Structure
- "source-driven-development" — external/source-driven-development.md:5
- "Install just this skill" — external/source-driven-development.md:5
- "How this skill is structured" — external/source-driven-development.md:8
- "Build phase" — external/source-driven-development.md:12
- "More in the Build phase" — external/source-driven-development.md:12
- "Product" — external/source-driven-development.md:15
- "Setup" — external/source-driven-development.md:15
- "Resources" — external/source-driven-development.md:15

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · external/source-driven-development.md:9-10 · Web catalog anatomy panel claims "Every skill follows the same anatomy" listing six generic sections (01 Overview to 06 Verification), but skills/source-driven-development/SKILL.md implements eight distinct sections including "The Process" (with four detailed steps and a Retrieval Safety subsection), "Common Rationalizations", and a 9-item verification checklist.
- doc-drift · external/source-driven-development.md:12 · Page associates source-driven-development with slash command /build in sidebar and related metadata, but .claude/commands/build.md does not orchestrate or invoke source-driven-development.
- orphan · external/source-driven-development.md:1 · External documentation snapshot from skills.addy.ie is not linked or referenced by any repository file in sources/addy/.

## Observations
- External documentation web snapshot generated via Astro (`data-astro-cid-*`) representing the public catalog entry at `https://skills.addy.ie/skills/source-driven-development/`.
- Documents skill distribution via the Vercel open `skills` CLI using `npx skills add addyosmani/agent-skills --skill source-driven-development` (or pack installation `npx skills add addyosmani/agent-skills`).
- Embeds the skill into the `Build` phase taxonomy alongside sibling skills `incremental-implementation`, `test-driven-development`, and `context-engineering`.
- Links directly to the `/build` slash command badge and repository skill source on GitHub (`skills/source-driven-development/SKILL.md`).
- Contains interactive client-side components (clipboard copy buttons for CLI commands, responsive navigation drawer) and Netlify RUM telemetry (`netlify-rum-container`). Over 90% of byte content is HTML/CSS presentation rather than executable instruction.

## Context cost
26,358 bytes (~6,590 tokens) for this documentation file alone. If combined with the target skill `skills/source-driven-development/SKILL.md` (9,949 bytes, ~2,487 tokens), total context cost is 36,307 bytes (~9,077 tokens). As an external web landing page, its presentation overhead makes it unsuitable for direct injection into agent prompt contexts.
