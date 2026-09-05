---
package: matt
path: external/handoff.md
type: external-doc
bytes: 380255
unit: inv-matt-18
deprecated: false
aliases: []
memo_inputs:
  - {path: external/handoff.md, sha256: e5ac1ebb0b42a1e7c5fbddb1e0b75cff7e08aadb480e116082812741225e6f5f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# external/handoff.md

## Purpose — required, verbatim
> "Write up a long session so another agent can continue it." — external/handoff.md:24

## Design intent — required
Serves as the public web documentation and conceptual guide for the `/handoff` skill on Matt Pocock's AI Hero catalog (aihero.dev/skills-handoff). It explains the architectural and workflow role of `/handoff`: providing portability for in-flight work across execution boundaries (switching harnesses from Claude to Codex, moving to a separate repository/directory, sharing with a colleague, or branching a side task into a parallel subagent session) rather than mere in-session conversation compression. It articulates why a standalone transit file in the OS temporary directory is superior to shell-interpolated briefs or persistent project docs for active tasks, establishing clear operational boundaries between `/compact`, `/clear`, and `/handoff`. Without this document, developers and autonomous agents would likely conflate `/handoff` with `/compact` or miss the high-value parallel branching and prototype-detour workflows it enables.

## Phase — required
matt:Productivity Skills

## Inputs — required
- User argument or focus prompt: "Pass a note about what the next session is for, and the document is written for it." — external/handoff.md:28
- Prior conversation history: "compacts the conversation you are in into a" — external/handoff.md:25

## Outputs — required
- Standalone handoff transit file in temporary directory: "one markdown file" — external/handoff.md:25 written to "temporary directory rather than into the workspace" — external/handoff.md:25
- Suggested skills section recommending follow-up skills: "suggested skills" — external/handoff.md:37 "naming what the next agent should reach for." — external/handoff.md:37

## Invokes — required
- skill ask-matt — external/handoff.md:31
- skill prototype — external/handoff.md:34
- command /compact — external/handoff.md:31
- command /clear — external/handoff.md:35
- skill grill-me — external/handoff.md:68
- skill to-questionnaire — external/handoff.md:68

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `The /handoff Skill` — external/handoff.md:24 — defined here
- `handoff document` — external/handoff.md:25 — defined here
- `portability` — external/handoff.md:26 — used here
- `harness` — external/handoff.md:26 — used here
- `session` — external/handoff.md:26 — used here
- `subagent` — external/handoff.md:26 — used here
- `/compact` — external/handoff.md:26 — used here
- `/clear` — external/handoff.md:26 — used here
- `/handoff` — external/handoff.md:28 — defined here
- `context` — external/handoff.md:30 — used here
- `grilling` — external/handoff.md:31 — used here
- `ask-matt` — external/handoff.md:31 — used here
- `prototype` — external/handoff.md:34 — used here
- `suggested skills` — external/handoff.md:37 — defined here
- `primary source` — external/handoff.md:43 — used here
- `secondary source` — external/handoff.md:43 — used here
- `/branch` — external/handoff.md:50 — used here
- `--fork-session` — external/handoff.md:50 — used here
- `CLAUDE.md` — external/handoff.md:52 — used here
- `Productivity Skills` — external/handoff.md:68 — used here
- `The Main Flow` — external/handoff.md:68 — used here
- `Shaping` — external/handoff.md:68 — used here
- `Upkeep` — external/handoff.md:68 — used here
- `Reference Skills` — external/handoff.md:68 — used here
- `Getting Started` — external/handoff.md:68 — used here

## Structure
- # The /handoff Skill
- ## What it does
- ## When to reach for it
- ## Branching is the use people skip
- ## What travels, and what doesn't
- ## Common questions
- ## It's working if
- ## Where it fits
- ### Let the next agent resume the work, not reconstruct it.
- ## Install the skills
- ## Related reading
- ### Learn
- ### Cohorts
- ### Account
- ### Agents

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift — external/handoff.md:68 — Promotional copy claims "One command installs all 22 skills, /handoff included." — external/handoff.md:68 whereas header metadata indicates 25 skills ("17 / 25" — external/handoff.md:24) and .claude-plugin/plugin.json defines 25 skills.
- orphan — external/handoff.md:1 — External documentation page snapshot is an orphan not referenced or linked by any in-scope file in sources/matt/.

## Observations
- Distinguishes `/compact`, `/clear`, and `/handoff`: `/compact` preserves intent within an active window, `/clear` starts from nothing, and `/handoff` serializes state to disk to preserve the work's ability to travel across environments.
- Highlights the branching/forking pattern where an agent pauses a primary session to delegate a prototype question to a secondary agent session, then feeds the answer back without blowing up the main context window.
- Outlines the deliberate decision to write handoff documents to the OS temporary directory as transit files, while documenting failure modes (e.g. Codex wiping temp between sessions, macOS clearing `/tmp` on reboot).
- Warns against CLI string interpolation `claude "<summary>"` due to shell expansion mangling backticks or `$()` expressions, advising operators: "Open the fresh session and point it at the path: read this file, then continue." — external/handoff.md:49.
- Emphasizes avoiding unverified assumptions in handoff files: "watch for confident claims the session never actually verified:" — external/handoff.md:55.
- Snapshot source URL: "https://aihero.dev/skills-handoff" — external/handoff.md:1.
- Highlights boundary between standing context and ephemeral task state: `CLAUDE.md` "is standing context about the project, loaded into every session whether it" — external/handoff.md:53 is relevant or not, while `/handoff` captures work in flight.
- Mentions architectural classification: `/handoff` is a "reach-for-it-anytime standalone" — external/handoff.md:68 that "lives at the seam between sessions rather than inside a build chain" — external/handoff.md:68.

## Context cost
380255 bytes, approximately 95,000 tokens (full HTML snapshot including Next.js script bundles, stylesheets, and hydration state). 0 loaded runtime dependencies.
