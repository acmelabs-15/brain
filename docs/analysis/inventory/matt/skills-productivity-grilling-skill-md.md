---
package: matt
path: skills/productivity/grilling/SKILL.md
type: skill
bytes: 1987
unit: inv-matt-45
deprecated: false
aliases: []
memo_inputs:
  - {path: skills/productivity/grilling/SKILL.md, sha256: 10ff989e7498b23b5acb49d5048f11dcd906757d2f79c5cdf8a00001381296f2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# skills/productivity/grilling/SKILL.md

## Purpose — required, verbatim
> "description: Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases." — skills/productivity/grilling/SKILL.md:3

## Design intent — required
Foundational interview primitive that stress-tests plans, designs, and decisions through iterative, structured questioning. Models problem spaces as dependency-ordered design trees and interrogates the user across batched "rounds." Restricts questions in each round strictly to the current "frontier" (decisions whose prerequisites are already settled), numbering each question and providing agent-recommended answers to minimize user cognitive friction. Enforces an explicit separation between fact-finding (which the agent must execute autonomously via tools or sub-agents) and decision-making (which belongs solely to the user).

## Phase — required
matt:Productivity

## Inputs — required
- User's initial plan, idea, or design decision to stress-test (skills/productivity/grilling/SKILL.md:3).
- User responses to numbered frontier question rounds (skills/productivity/grilling/SKILL.md:8, 24).
- Environmental facts autonomously retrieved via filesystem, search, or tools (skills/productivity/grilling/SKILL.md:26).

## Outputs — required
- Structured rounds of numbered questions formatted with question titles, bodies, and recommended answers (skills/productivity/grilling/SKILL.md:13-21).
- Dispatched sub-agents to gather environmental facts asynchronously (skills/productivity/grilling/SKILL.md:26).
- Mutual confirmation of shared understanding once the frontier is empty (skills/productivity/grilling/SKILL.md:28).

## Invokes — required
none

## Invoked by — required
- doc README.md — README.md:230
- doc skills/productivity/README.md — skills/productivity/README.md:19
- skill grill-me — skills/productivity/grill-me/SKILL.md:7
- skill grill-with-docs — skills/engineering/grill-with-docs/SKILL.md:7
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:78
- skill triage — skills/engineering/triage/SKILL.md:76
- skill improve-codebase-architecture — skills/engineering/improve-codebase-architecture/SKILL.md:64

## Concepts named — required, verbatim
- `grilling` — skills/productivity/grilling/SKILL.md:2 — defined here
- `design tree` — skills/productivity/grilling/SKILL.md:6 — defined here
- `shared understanding` — skills/productivity/grilling/SKILL.md:6 — defined here
- `rounds` — skills/productivity/grilling/SKILL.md:8 — defined here
- `frontier` — skills/productivity/grilling/SKILL.md:8 — defined here
- `recommended answer` — skills/productivity/grilling/SKILL.md:8 — defined here
- `settled decisions` — skills/productivity/grilling/SKILL.md:24 — defined here
- `facts` — skills/productivity/grilling/SKILL.md:26 — defined here
- `sub-agent` — skills/productivity/grilling/SKILL.md:26 — used here
- `decisions` — skills/productivity/grilling/SKILL.md:26 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
`grilling` serves as the underlying engine for multiple composite workflows across the package (including `grill-me`, `grill-with-docs`, `triage`, and `improve-codebase-architecture`). Its mandate that "Finding facts is your job, never the user's" (line 26) provides a critical behavioral directive against asking users for discoverable codebase information.

## Context cost
1987 bytes, 29 lines, approximately 420 tokens.
