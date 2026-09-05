---
package: matt
path: docs/productivity/handoff.md
type: doc
bytes: 8746
unit: inv-matt-8
deprecated: false
aliases: []
memo_inputs:
  - {path: docs/productivity/handoff.md, sha256: a8020faa68d0077e8a5701e817817c8858a5f1a70d5b3f16dc8034e7d8df0b44}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# docs/productivity/handoff.md

## Purpose — required, verbatim
> "`handoff` compacts the conversation you are in into a **handoff document**: one markdown file, written to your OS's temporary directory rather than into the workspace, that a fresh [agent](https://www.aihero.dev/ai-coding-dictionary/agent) can read to pick the work up." — docs/productivity/handoff.md:3

## Design intent — required
Compacts active conversation context into a standalone, portable markdown document in the OS temporary directory (referencing specs, ADRs, issues, and diffs by path/URL and redacting credentials), enabling in-flight engineering work to migrate across tool boundaries (harness changes, repository moves, colleague handoffs, or parallel subagent branching) where in-session continuation or `/compact` cannot reach.

## Phase — required
matt:productivity

## Inputs — required
Active conversational session context, and optional user note specifying the intended focus of the downstream session.

## Outputs — required
Markdown handoff document written to the OS temporary directory.

## Invokes — required
- doc prototype — docs/productivity/handoff.md:26
- doc ask-matt — docs/productivity/handoff.md:76

## Invoked by — required
- doc handoff — docs/productivity/teach.md:20

## Concepts named — required, verbatim
- `handoff document` — docs/productivity/handoff.md:3 — defined here
- `agent` — docs/productivity/handoff.md:3 — used here
- `portability` — docs/productivity/handoff.md:5 — defined here
- `harness` — docs/productivity/handoff.md:5 — used here
- `session` — docs/productivity/handoff.md:5 — used here
- `subagent` — docs/productivity/handoff.md:5 — used here
- `context` — docs/productivity/handoff.md:15 — used here
- `grilling` — docs/productivity/handoff.md:20 — used here
- `suggested skills` — docs/productivity/handoff.md:32 — defined here
- `primary source` — docs/productivity/handoff.md:42 — used here
- `secondary source` — docs/productivity/handoff.md:42 — used here
- `reach-for-it-anytime standalone` — docs/productivity/handoff.md:76 — defined here

## Structure
- ## What it does — docs/productivity/handoff.md:1
- ## When to reach for it — docs/productivity/handoff.md:7
- ## Branching is the use people skip — docs/productivity/handoff.md:22
- ## What travels, and what doesn't — docs/productivity/handoff.md:30
- ## Common questions — docs/productivity/handoff.md:36
- ## It's working if — docs/productivity/handoff.md:65
- ## Where it fits — docs/productivity/handoff.md:74

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `other` · docs/productivity/handoff.md:45 notes OS temporary directories suffer from platform-specific path friction on Windows and volatile lifetimes (Codex purging temp between sessions, macOS clearing `/private/tmp` on reboot).
- `doc-drift` · docs/productivity/handoff.md:51 warns that passing handoff text via shell command arguments (`claude "<summary>"`) corrupts backticks and `$(...)` through shell interpolation, causing silent truncation.

## Observations
Highlights parallel session branching (forking an exploratory sub-task out to a prototype session while leaving the primary design session intact) as the highest-leverage application of handoffs. Formulates the distinction between primary sources (the raw conversation) and secondary sources (the summarized handoff document), and cautions that incoming agents treat handoffs as unverified contracts.

## Context cost
8746 bytes (~2186 tokens).
