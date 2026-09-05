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
verified: 2026-09-04 quote-check+coverage
---

# skills/productivity/grilling/SKILL.md

## Purpose — required, verbatim
> "description: Grill the user relentlessly about a plan, decision, or idea. Use when the user wants to stress-test their thinking, or uses any 'grill' trigger phrases." — skills/productivity/grilling/SKILL.md:3

## Design intent — required
Defines the model-invoked interview loop and foundational questioning primitive for Matt Pocock's skills repository. Models plans and ideas as hierarchical design trees and batches prerequisite-settled inquiries into frontier rounds formatted with question titles and explicit agent recommendations. Autonomously delegates factual environment lookups to background sub-agents so research never blocks the interview round, while strictly guarding human decision authority until a confirmed shared understanding is reached.

## Phase — required
matt:productivity

## Inputs — required
A plan, decision, or idea to stress-test, plus user answers to frontier round questions.

## Outputs — required
Interactive round-by-round interview dialogue, settled decisions, and confirmed shared understanding.

## Invokes — required
none

## Invoked by — required
- skill grill-me — skills/productivity/grill-me/SKILL.md:7
- skill grill-with-docs — skills/engineering/grill-with-docs/SKILL.md:7
- doc README — skills/productivity/README.md:19
- skill ask-matt — skills/engineering/ask-matt/SKILL.md:78

## Concepts named — required, verbatim
- `grilling` — skills/productivity/grilling/SKILL.md:2 — defined here
- `design tree` — skills/productivity/grilling/SKILL.md:6 — defined here
- `rounds` — skills/productivity/grilling/SKILL.md:8 — defined here
- `frontier` — skills/productivity/grilling/SKILL.md:8 — defined here
- `sub-agent` — skills/productivity/grilling/SKILL.md:26 — used here
- `shared understanding` — skills/productivity/grilling/SKILL.md:28 — defined here

## Structure
(no markdown section headings; sequential prose instructions)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Separates factual exploration from user decision-making: factual lookups are delegated autonomously to background sub-agents without blocking the interview frontier, while decisions remain exclusively with the user. The interview terminates when the frontier is empty and the user confirms shared understanding.

## Context cost
1987 bytes (~500 tokens). Self-contained, single-file interview primitive with zero external document dependencies.
