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
verified: 2026-09-05 quote-check+coverage
---

# docs/productivity/handoff.md

## Purpose — required, verbatim
> "`handoff` compacts the conversation you are in into a **handoff document**: one markdown file, written to your OS's temporary directory rather than into the workspace, that a fresh [agent](https://www.aihero.dev/ai-coding-dictionary/agent) can read to pick the work up." — docs/productivity/handoff.md:3

## Design intent — required
Documentation page for the user-invoked `handoff` productivity skill in the matt package published on aihero.dev. Defines the core value of `handoff` as portability across boundaries (swapping harnesses, moving workspaces, delegating to colleagues, or branching side tasks) rather than simple in-session context reduction. Analyzes the five phase boundary alternatives (continue, clear, handoff, delegate, compact), explains why documents reside in temporary storage rather than the workspace, outlines redaction of secrets, and details the fork-and-return pattern using `prototype`.

## Phase — required
matt:productivity

## Inputs — required
Current conversation state and history; user-specified argument stating the objective for the next session.

## Outputs — required
Markdown handoff document written to OS temporary directory (e.g. `/tmp/`), referencing project artifacts by path/URL with secrets redacted.

## Invokes — required
- skill ask-matt — docs/productivity/handoff.md:20
- skill prototype — docs/productivity/handoff.md:26

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `handoff` — docs/productivity/handoff.md:3 — defined here
- `handoff document` — docs/productivity/handoff.md:3 — defined here
- `portability` — docs/productivity/handoff.md:5 — defined here
- `suggested skills` — docs/productivity/handoff.md:32 — defined here
- `primary source` — docs/productivity/handoff.md:42 — defined here
- `secondary source` — docs/productivity/handoff.md:42 — defined here
- `temp directory` — docs/productivity/handoff.md:45 — used here
- `standing context` — docs/productivity/handoff.md:57 — defined here
- `reach-for-it-anytime standalone` — docs/productivity/handoff.md:76 — defined here

## Structure
- What it does — docs/productivity/handoff.md:1
- When to reach for it — docs/productivity/handoff.md:7
- Branching is the use people skip — docs/productivity/handoff.md:22
- What travels, and what doesn't — docs/productivity/handoff.md:30
- Common questions — docs/productivity/handoff.md:36
- It's working if — docs/productivity/handoff.md:65
- Where it fits — docs/productivity/handoff.md:74

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- other — docs/productivity/handoff.md:45 — OS temporary directories can be wiped between sessions or on reboot, causing transit handoff files to disappear.

## Observations
Establishes the criteria for standing configuration versus transit state: "Ask whether it's true next month. `CLAUDE.md` is standing context about the project, loaded into every session whether it's relevant or not. A handoff is about one piece of work in flight and is dead once that work lands." — docs/productivity/handoff.md:57. Highlights that receiving agents treat handoffs as authoritative contracts without verification, making unverified assumptions dangerous.

## Context cost
8746 bytes, ~2100 tokens.
