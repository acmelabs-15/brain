---
package: rjm
path: .claude/skills/business-strategy/references/obviously-awesome.md
type: reference
bytes: 7583
unit: inv-rjm-93
in_scope_via: .claude/skills/business-strategy/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/business-strategy/references/obviously-awesome.md, sha256: 815282fc06999fe8b3fde92377581c77e9a167bc4e3476ea6bd50f5e7c997656}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/business-strategy/references/obviously-awesome.md

## Purpose — required, verbatim
> "Reach for this when you must pick or change the market category a product competes in, or when a product is good but buyers do not understand it fast enough." — .claude/skills/business-strategy/references/obviously-awesome.md:10-11

## Design intent — required
Distills April Dunford's Obviously Awesome into an operational guide for positioning and market category selection. It provides a systematic 6-step method that works backward from competitive alternatives (including manual processes and "do nothing") to unique demonstrable attributes, maps attributes to customer value, identifies the best-fit buyer segment, and deliberately selects a market category that highlights those strengths while establishing favorable price and feature expectations. Without it, innovative products risk defaulting to unfavorable market categories where they are judged against irrelevant benchmarks.

## Phase — required
rjm:Positioning

## Inputs — required
- Real competitive alternatives (including "do nothing" and spreadsheets): "List the competitive alternatives. Write down what a buyer would actually use if" — .claude/skills/business-strategy/references/obviously-awesome.md:36
- Unique, demonstrable product attributes and capabilities: "Isolate your unique attributes. Find the features and capabilities you have that" — .claude/skills/business-strategy/references/obviously-awesome.md:39
- Scored checklist responses (7 criteria, 7 total points): "Score each criterion. 1 point if yes, 0 if no. Total 7. Pass at 5 or more." — .claude/skills/business-strategy/references/obviously-awesome.md:61

## Outputs — required
- Value mapping connecting unique features to buyer outcomes: "Map attributes to value. For each unique attribute, state the concrete benefit it" — .claude/skills/business-strategy/references/obviously-awesome.md:42
- Target buyer segment definition describing best-fit customers: "Find who cares the most. Identify the buyer segment for whom that value is urgent" — .claude/skills/business-strategy/references/obviously-awesome.md:44
- Deliberate market category choice establishing buyer frame: "Choose the market category that frames the value. Pick the context that makes your" — .claude/skills/business-strategy/references/obviously-awesome.md:47
- Market trend alignment (optional): "Layer on a trend only if it helps. Connect to a relevant market trend to make the" — .claude/skills/business-strategy/references/obviously-awesome.md:51

## Invokes — required
none

## Invoked by — required
- skill business-strategy — .claude/skills/business-strategy/SKILL.md:48

## Concepts named — required, verbatim
- `Positioning` — .claude/skills/business-strategy/references/obviously-awesome.md:3 — defined here
- `competitive alternatives` — .claude/skills/business-strategy/references/obviously-awesome.md:36 — defined here
- `unique attributes` — .claude/skills/business-strategy/references/obviously-awesome.md:39 — defined here
- `market category` — .claude/skills/business-strategy/references/obviously-awesome.md:47 — defined here
- `buy-vs-build-framework` — .claude/skills/business-strategy/references/obviously-awesome.md:28 — used here
- `Blue Ocean` — .claude/skills/business-strategy/references/obviously-awesome.md:98 — used here

## Structure
- # Obviously Awesome: Positioning and Category Choice — .claude/skills/business-strategy/references/obviously-awesome.md:1
- ## When to use — .claude/skills/business-strategy/references/obviously-awesome.md:8
- ## Decision tree — .claude/skills/business-strategy/references/obviously-awesome.md:16
- ## Core framework — .claude/skills/business-strategy/references/obviously-awesome.md:31
- ## Scored checklist — .claude/skills/business-strategy/references/obviously-awesome.md:59
- ## Honest limitations — .claude/skills/business-strategy/references/obviously-awesome.md:80
- ## Conflicts with other frameworks — .claude/skills/business-strategy/references/obviously-awesome.md:96
- ## Example — .claude/skills/business-strategy/references/obviously-awesome.md:108

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Distinguishes strategic positioning from downstream messaging: "Positioning is the strategy under the message, not the message itself." (.claude/skills/business-strategy/references/obviously-awesome.md:27).
- Cautions against uncritical category creation, noting that inventing a category is slow and expensive and should be treated as a last resort rather than a default strategy (.claude/skills/business-strategy/references/obviously-awesome.md:84-86).
- Resolves conflict with buy-vs-build-framework by sequencing: buy-vs-build governs the capability construction decision, while positioning governs market framing once the product is real (.claude/skills/business-strategy/references/obviously-awesome.md:103-107).

## Context cost
7583 bytes. Approximately 1950 tokens.
