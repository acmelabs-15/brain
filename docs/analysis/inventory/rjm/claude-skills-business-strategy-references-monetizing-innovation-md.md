---
package: rjm
path: .claude/skills/business-strategy/references/monetizing-innovation.md
type: reference
bytes: 6368
unit: inv-rjm-93
in_scope_via: .claude/skills/business-strategy/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/business-strategy/references/monetizing-innovation.md, sha256: 79ad63f1ddd7e541184342dffb6214a1e38eab6391234a384bb43b710602b269}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/business-strategy/references/monetizing-innovation.md

## Purpose — required, verbatim
> "Use when you are deciding what to charge, how to package, or whether a feature set will sell at a viable price, ideally before the product is locked." — .claude/skills/business-strategy/references/monetizing-innovation.md:7

## Design intent — required
Distills Madhavan Ramanujam and Georg Tacke's Monetizing Innovation into a decision framework that treats pricing as a primary design constraint rather than a post-launch afterthought. It guides teams to evaluate customer willingness-to-pay (WTP) before writing code, segment customers by value perception rather than demographics, categorize features into leaders, fillers, and killers, and structure pricing models so that charges scale with realized customer value. Without it, engineering efforts risk building features that depress revenue or products that cannot close a viable business case.

## Phase — required
rjm:Validation

## Inputs — required
- Customer willingness-to-pay (WTP) interview data: "If you have not asked customers about willingness-to-pay (WTP) yet, then stop feature work and run WTP interviews first." — .claude/skills/business-strategy/references/monetizing-innovation.md:11
- Candidate feature list classified by customer perceived value: "Sort features into leaders (drive the purchase, worth a premium), fillers (nice to have, low pull), and killers (erode WTP when bundled in)." — .claude/skills/business-strategy/references/monetizing-innovation.md:23
- Scored checklist responses (7 criteria, 10 total points): "Score each yes as the listed points. Total is 10. Pass at 7 or higher." — .claude/skills/business-strategy/references/monetizing-innovation.md:29

## Outputs — required
- WTP-based customer segment definitions: "Segment by willingness-to-pay, not by demographics. Group customers by what they value and will pay for." — .claude/skills/business-strategy/references/monetizing-innovation.md:22
- Feature packaging architecture isolating leaders, fillers, and killers: "Design product configuration and bundling to match segments. Sort features into leaders (drive the purchase, worth a premium), fillers (nice to have, low pull), and killers (erode WTP when bundled in)." — .claude/skills/business-strategy/references/monetizing-innovation.md:23
- Defined pricing model and metric scaling with customer value: "Choose the pricing model and price metric. Decide how you charge (per seat, per usage, flat subscription, freemium, outcome-based) so the metric scales with the value the customer receives." — .claude/skills/business-strategy/references/monetizing-innovation.md:24
- Validated business case closing at accepted customer prices: "The business case closes at a price customers said they would pay, without assuming heroic discounts." — .claude/skills/business-strategy/references/monetizing-innovation.md:36

## Invokes — required
none

## Invoked by — required
- skill business-strategy — .claude/skills/business-strategy/SKILL.md:50

## Concepts named — required, verbatim
- `willingness-to-pay` — .claude/skills/business-strategy/references/monetizing-innovation.md:11 — defined here
- `WTP` — .claude/skills/business-strategy/references/monetizing-innovation.md:11 — defined here
- `leaders` — .claude/skills/business-strategy/references/monetizing-innovation.md:23 — defined here
- `fillers` — .claude/skills/business-strategy/references/monetizing-innovation.md:23 — defined here
- `killers` — .claude/skills/business-strategy/references/monetizing-innovation.md:23 — defined here
- `pricing model` — .claude/skills/business-strategy/references/monetizing-innovation.md:24 — defined here
- `price metric` — .claude/skills/business-strategy/references/monetizing-innovation.md:24 — defined here
- `buy-vs-build-framework` — .claude/skills/business-strategy/references/monetizing-innovation.md:17 — used here
- `jobs-to-be-done` — .claude/skills/business-strategy/references/monetizing-innovation.md:52 — used here
- `JTBD` — .claude/skills/business-strategy/references/monetizing-innovation.md:52 — used here

## Structure
- # Monetizing Innovation — .claude/skills/business-strategy/references/monetizing-innovation.md:1
- ## When to use — .claude/skills/business-strategy/references/monetizing-innovation.md:5
- ## Decision tree — .claude/skills/business-strategy/references/monetizing-innovation.md:9
- ## Core framework — .claude/skills/business-strategy/references/monetizing-innovation.md:19
- ## Scored checklist — .claude/skills/business-strategy/references/monetizing-innovation.md:27
- ## Honest limitations — .claude/skills/business-strategy/references/monetizing-innovation.md:41
- ## Conflicts with other frameworks — .claude/skills/business-strategy/references/monetizing-innovation.md:49
- ## Example — .claude/skills/business-strategy/references/monetizing-innovation.md:54

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Argues that most new product failures stem from treating price as an afterthought rather than a primary engineering specification (.claude/skills/business-strategy/references/monetizing-innovation.md:3-4).
- Highlights the necessity of identifying and isolating "killer" features that inadvertently depress willingness-to-pay when bundled into base offerings (.claude/skills/business-strategy/references/monetizing-innovation.md:23, 58-60).
- Cautions that stated willingness-to-pay from customer interviews overstates actual revealed willingness-to-pay and requires validation through pilots or pre-orders (.claude/skills/business-strategy/references/monetizing-innovation.md:43).

## Context cost
6368 bytes. Approximately 1600 tokens.
