---
package: matt
path: external/handoff.md
type: doc
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
verified: 2026-09-04 quote-check+coverage
---

# external/handoff.md

## Purpose — required, verbatim
> "Write up a long session so another agent can continue it." — external/handoff.md:24

## Design intent — required
Compacts a long conversation into a portable handoff document written to the OS temporary directory, enabling seamless transfer across sessions, harness switches (e.g. Claude Code to Codex), repository directory changes, or branching/forking exploratory spikes (such as detour prototyping). It prioritizes cross-boundary portability over in-place compression, recording the live thread, next steps, and suggested skills while strictly citing existing repository artifacts (specs, ADRs, diffs) by path or URL rather than duplicating their text.

## Phase — required
matt:Productivity Skills

## Inputs — required
Current conversation context, optional user argument specifying what the next session will focus on, and paths/URLs to referenced artifacts.

## Outputs — required
A markdown handoff document written to the OS temporary directory (e.g. `/tmp/` or `%TEMP%`) containing the live thread, next steps, and a suggested skills section.

## Invokes — required
- skill prototype — external/handoff.md:30
- skill ask-matt — external/handoff.md:31
- skill grill-me — external/handoff.md:68
- skill grill-with-docs — external/handoff.md:68
- skill wayfinder — external/handoff.md:68
- skill setup-matt-pocock-skills — external/handoff.md:68

## Invoked by — required
none

## Concepts named — required, verbatim
- `handoff document` — external/handoff.md:25 — defined here
- `temporary directory` — external/handoff.md:25 — defined here
- `portability` — external/handoff.md:26 — defined here
- `compression` — external/handoff.md:26 — defined here
- `branching` — external/handoff.md:32 — defined here
- `phase boundary` — external/handoff.md:35 — defined here
- `live thread` — external/handoff.md:37 — defined here
- `suggested skills` — external/handoff.md:37 — defined here
- `fork` — external/handoff.md:51 — defined here
- `CLAUDE.md` — external/handoff.md:52 — used here
- `standalone` — external/handoff.md:68 — defined here

## Structure
- # The /handoff Skill — external/handoff.md:24
- ## What it does — external/handoff.md:24
- ## When to reach for it — external/handoff.md:27
- ## Branching is the use people skip — external/handoff.md:32
- ## What travels, and what doesn't — external/handoff.md:36
- ## Common questions — external/handoff.md:39
- ## It's working if — external/handoff.md:58
- ## Where it fits — external/handoff.md:67
- ## Related reading — external/handoff.md:68
- ## Skill actions — external/handoff.md:68

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · external/handoff.md:45: Handoff documents are saved to OS temporary directories whose paths vary across platforms and are prone to premature deletion upon reboot or harness cleanups.
- `doc-drift` · external/handoff.md:24: External documentation subtitle defines skill as "Write up a long session so another agent can continue it." whereas SKILL.md:3 states "Compact the current conversation into a handoff document for another agent to pick up."
- `internal-contradiction` · external/handoff.md:55: Acknowledges repeated criticism that summaries capture the "what" rather than the "why", requiring explicit manual arguments to preserve reasoning.
- `doc-drift` · external/handoff.md:51: Mentions `/branch` and `--fork-session` as analogous workflows without clarifying whether they represent supported tool features or external harness capabilities.

## Observations
Contrasts three phase-boundary context management tools: `/compact` preserves intent in-place, `/clear` resets context entirely, and `/handoff` exports portable state across environmental boundaries. Emphasizes branching/forking as an underappreciated use case: spinning off throwaway prototype sessions without contaminating the primary design conversation.

## Context cost
380255 bytes, ~76000 tokens (HTML snapshot including full inline hydration payload).
