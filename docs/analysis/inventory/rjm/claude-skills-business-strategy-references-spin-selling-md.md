---
package: rjm
path: .claude/skills/business-strategy/references/spin-selling.md
type: reference
bytes: 6039
unit: inv-rjm-93
in_scope_via: .claude/skills/business-strategy/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/business-strategy/references/spin-selling.md, sha256: a92d32c272420a6c4bf96953b82293b68eb44b02b9aaca01eff33813081d9d10}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/business-strategy/references/spin-selling.md

## Purpose — required, verbatim
> "Use this when you sell a high-value, multi-stakeholder B2B product where the cost of a wrong purchase is high and one conversation will not close the deal." — .claude/skills/business-strategy/references/spin-selling.md:5

## Design intent — required
Distills Neil Rackham's SPIN Selling into an inquiry-led sales framework for high-stakes, multi-stakeholder B2B transactions. It replaces feature-heavy pitches with an intentional four-stage question sequence (Situation, Problem, Implication, Need-payoff) that uncovers implied needs, expands their perceived financial and operational consequences, and leads the buyer to articulate the concrete value of a solution in their own words. Without it, sellers in complex deals pitch features prematurely, triggering objections and stalling enterprise sales cycles.

## Phase — required
rjm:GoToMarket

## Inputs — required
- Pre-call account background research and workflow context: "Did you research the account so most facts are known before the call? (1)" — .claude/skills/business-strategy/references/spin-selling.md:31
- Customer responses to the four sequenced question types: "The method is a sequence of four question types. Move through them in order within a meeting and across the deal." — .claude/skills/business-strategy/references/spin-selling.md:18
- Pre-call checklist criteria (8 items, pass threshold: 6): "Total: 8. Pass threshold: 6. Below 6 means you pitched too early or skipped the Implication stage." — .claude/skills/business-strategy/references/spin-selling.md:40

## Outputs — required
- Buyer-articulated explicit problem statement: "Did you get the buyer to state at least one explicit problem in their words? (1)" — .claude/skills/business-strategy/references/spin-selling.md:33
- Buyer-stated solution payoff and business case: "Did the buyer, not you, articulate the payoff of solving the problem? (1)" — .claude/skills/business-strategy/references/spin-selling.md:35
- Agreed concrete advancement step (e.g. scoped pilot): "Did you define the next concrete step before the call ended? (1)" — .claude/skills/business-strategy/references/spin-selling.md:38

## Invokes — required
none

## Invoked by — required
- skill business-strategy — .claude/skills/business-strategy/SKILL.md:54

## Concepts named — required, verbatim
- `SPIN Selling` — .claude/skills/business-strategy/references/spin-selling.md:1 — defined here
- `Situation questions` — .claude/skills/business-strategy/references/spin-selling.md:20 — defined here
- `Problem questions` — .claude/skills/business-strategy/references/spin-selling.md:21 — defined here
- `implied need` — .claude/skills/business-strategy/references/spin-selling.md:21 — defined here
- `Implication questions` — .claude/skills/business-strategy/references/spin-selling.md:22 — defined here
- `Need-payoff questions` — .claude/skills/business-strategy/references/spin-selling.md:23 — defined here
- `Challenger` — .claude/skills/business-strategy/references/spin-selling.md:52 — used here

## Structure
- # SPIN Selling — .claude/skills/business-strategy/references/spin-selling.md:1
- ## When to use — .claude/skills/business-strategy/references/spin-selling.md:3
- ## Decision tree — .claude/skills/business-strategy/references/spin-selling.md:7
- ## Core framework — .claude/skills/business-strategy/references/spin-selling.md:16
- ## Scored checklist — .claude/skills/business-strategy/references/spin-selling.md:27
- ## Honest limitations — .claude/skills/business-strategy/references/spin-selling.md:42
- ## Conflicts with other frameworks — .claude/skills/business-strategy/references/spin-selling.md:50
- ## Example — .claude/skills/business-strategy/references/spin-selling.md:55

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Inverts traditional selling dynamics so the buyer builds urgency: "The arc: facts to problems to consequences to buyer-stated value. The seller asks; the buyer builds the urgency." (.claude/skills/business-strategy/references/spin-selling.md:25).
- Identifies Implication questions as the stage most often omitted by sales reps despite having the highest correlation with complex deal progression (.claude/skills/business-strategy/references/spin-selling.md:22).
- Explicitly warns that SPIN slows small, transactional sales and product-led growth motions where frictionless self-serve onboarding outperforms multi-meeting discovery (.claude/skills/business-strategy/references/spin-selling.md:9, 46).

## Context cost
6039 bytes. Approximately 1550 tokens.
