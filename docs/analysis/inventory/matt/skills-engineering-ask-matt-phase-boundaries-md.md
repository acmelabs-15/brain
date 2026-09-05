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
verified: 2026-09-05 quote-check+coverage
---

# skills/engineering/ask-matt/PHASE-BOUNDARIES.md

## Purpose — required, verbatim
> "The **phase boundary** is the gap between two phases, and it is the only place this decision belongs. Mid-phase there is no decision to make: continue, or split the work that's left into subagents. Compacting mid-phase makes the agent lose the thread." — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:5

## Design intent — required
Establishes a principled, sequential decision framework for context transitions between development lifecycle phases. Prohibits mid-phase compacting (which degrades reasoning thread coherence), defining an ordered priority tree evaluated strictly at phase boundaries: (1) Continue, (2) `/clear`, (3) `/handoff`, (4) Subagent, and (5) `/compact`. Details the trade-off between lossless primary sources (unbroken session context) and lossy secondary sources (compressed summaries), cautioning against reflexive context compaction.

## Phase — required
cross-phase

## Inputs — required
Context window state (token usage within ~150k token smart zone), relevance of session history to subsequent tasks, need for cross-harness/cross-directory mobility, and unattended task autonomy.

## Outputs — required
Decision guidance directing the agent and human to continue, clear, handoff, delegate to a subagent, or compact context.

## Invokes — required
- skill handoff — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:13

## Invoked by — required
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:71

## Concepts named — required, verbatim
- `phase` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:3 — defined here
- `phase boundary` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:5 — defined here
- `Continue` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:11 — defined here
- `/clear` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:12 — defined here
- `/handoff` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:13 — defined here
- `Subagent` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:14 — defined here
- `/compact` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:15 — defined here
- `primary source` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:21 — defined here
- `smart zone` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:21 — used here
- `portability` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:34 — defined here
- `secondary sources` — skills/engineering/ask-matt/PHASE-BOUNDARIES.md:42 — defined here
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
Provides foundational lifecycle guidance for LLM context management: treating unbroken context as a primary source containing critical design rationale that lossy compression flattened. Demotes `/compact` from default behavior to fallback option #5 after cheaper or higher-fidelity options are evaluated.

## Context cost
4249 bytes, 56 lines, approximately 950 tokens.
