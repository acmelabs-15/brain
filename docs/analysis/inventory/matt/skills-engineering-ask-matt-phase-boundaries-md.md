---
package: matt
path: skills/engineering/ask-matt/PHASE-BOUNDARIES.md
type: skill
bytes: 4249
unit: inv-matt-37
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/engineering/ask-matt/PHASE-BOUNDARIES.md, sha256: a8aa20158609ef39e2b308b6ba0660c91066838d07a867202e63a7744a88a3ed}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# skills/engineering/ask-matt/PHASE-BOUNDARIES.md

## Purpose — required, verbatim
> "A **phase** is a chunk of work inside a session: the grilling, the implementation, the QA. The definition is fuzzy on purpose: a phase ends when you think *"ok, we're done with that"*." — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:3 (no explicit purpose statement)

## Design intent — required
Defines an ordered 5-option decision tree for managing LLM context at phase boundaries (Continue > `/clear` > `/handoff` > Subagent > `/compact`). Explains the critical distinction between primary sources (full conversation history) and secondary sources (lossy summaries or handoffs), preventing premature compaction and enforcing that context boundary transitions occur only between phases rather than mid-phase.

## Phase — required
cross-phase

## Inputs — required
- Current session context state and token headroom (~150k token smart zone)
- Context relevance, necessity of cross-harness/directory portability, and AFK automation viability

## Outputs — required
- Context boundary determination selecting one of five actions: Continue, `/clear`, `/handoff`, Subagent, or `/compact`

## Invokes — required
- skill handoff — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:13

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:71

## Concepts named — required, verbatim
- `phase` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:3 — defined here
- `session` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:3 — used here
- `grilling` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:3 — used here
- `implementation` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:3 — used here
- `QA` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:3 — used here
- `phase boundary` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:5 — defined here
- `subagents` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:5 — used here
- `Continue` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:11 — defined here
- `/clear` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:12 — defined here
- `/handoff` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:13 — defined here
- `Subagent` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:14 — defined here
- `/compact` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:15 — defined here
- `primary source` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:21 — defined here
- `smart zone` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:21 — used here
- `portability` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:34 — defined here
- `AFK` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:36 — defined here
- `secondary source` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:44 — defined here

## Structure
- `# Phase boundaries` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:1
- `## The five options` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:7
- `## The tree` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:17
- `## Primary and secondary sources` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:42
- `## These are judgement calls` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:53

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Positions `/compact` as the default fall-through at the bottom of the tree rather than the first choice, countering the common anti-pattern of over-compacting.
- Establishes that `/handoff` is strictly for portability across harnesses, directories, or team members, rather than generic intra-session progression.
- Warns that compacting mid-phase causes agents to lose the thread of complex reasoning.

## Context cost
4249 bytes (~1062 tokens). Directly referenced companion document to `ask-matt` skill.
