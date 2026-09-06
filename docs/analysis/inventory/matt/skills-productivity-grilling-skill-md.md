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
verified: 2026-09-06 quote-check+coverage
---

# skills/productivity/grilling/SKILL.md

## Purpose — required, verbatim
> "Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases." — skills/productivity/grilling/SKILL.md:3

## Design intent — required
Provides a reusable interview primitive to stress-test thinking about a plan, decision, or idea before acting on it. Constructs an explicit design tree where decisions branch into dependent decisions. Operates in iterative rounds by querying the entire decision frontier (all questions whose prerequisites are settled) at once, attaching a recommended answer to each question. Requires the agent to investigate environment facts autonomously via tools or background subagents rather than prompting the user, while reserving all actual decisions for the human. Concludes only when the frontier is empty and shared understanding is confirmed.

## Phase — required
matt:productivity

## Inputs — required
- User's plan, decision, or idea under review
- User's answers to frontier questions
- Environment facts investigated by the agent via tools or subagents (filesystem, environment) — skills/productivity/grilling/SKILL.md:26

## Outputs — required
- Clarified plan and shared understanding confirmed with user — skills/productivity/grilling/SKILL.md:28
- Traversed and settled design tree — skills/productivity/grilling/SKILL.md:28

## Invokes — required
none

## Invoked by — required
- doc skills/productivity/README.md — skills/productivity/README.md:19
- doc README.md — README.md:230
- skill loop-me — skills/in-progress/loop-me/SKILL.md:8
- skill writing-fragments — skills/in-progress/writing-fragments/SKILL.md:9
- doc docs/productivity/grilling.md — docs/productivity/grilling.md:3
- doc docs/engineering/grill-with-docs.md — docs/engineering/grill-with-docs.md:27

## Concepts named — required, verbatim
- `grilling` — skills/productivity/grilling/SKILL.md:2 — defined here
- `design tree` — skills/productivity/grilling/SKILL.md:6 — defined here
- `shared understanding` — skills/productivity/grilling/SKILL.md:6 — defined here
- `rounds` — skills/productivity/grilling/SKILL.md:8 — defined here
- `frontier` — skills/productivity/grilling/SKILL.md:8 — defined here
- `recommended answer` — skills/productivity/grilling/SKILL.md:8 — defined here
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
The interview loop enforces a strict separation between facts (which the agent must investigate via tools or background subagents without asking the user) and decisions (which belong solely to the user). The round-based frontier batching reduces question fatigue by presenting all currently askable questions together with recommended answers, rather than dragging the user through sequential single-question turns.

## Context cost
1987 bytes, 29 lines, approximately 420 tokens.
