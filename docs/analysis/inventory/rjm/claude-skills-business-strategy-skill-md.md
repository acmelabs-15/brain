---
package: rjm
path: .claude/skills/business-strategy/SKILL.md
type: skill
bytes: 8625
unit: inv-rjm-94
in_scope_via: docs/skill-reference.md
aliases: []
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/business-strategy/SKILL.md

## Purpose — required, verbatim
> "Route a founder problem to the right business framework, then load that framework on demand." — .claude/skills/business-strategy/SKILL.md:4

## Design intent — required
Provides a lightweight, progressive-disclosure front-door router for founders diagnosing early-stage business symptoms across discovery, validation, positioning, pricing, sales, and traction without premature framework commitment. Instead of dumping 14 classic business books into LLM context simultaneously, it requires the user to articulate a single concrete numeric symptom, walks an upstream decision tree to identify root causes (e.g. diagnosing a weak close as an upstream positioning failure), and selectively loads exactly one scored, decision-tree reference (with conditional follow-up only if the primary stage passes). Without it, founders and agents would either flood LLM context with irrelevant frameworks, treat symptomatic failures downstream with wrong remedies, or guess frameworks without objective verification criteria.

## Phase — required
none

## Inputs — required
- Trigger phrases:
  - "diagnose my business problem" — .claude/skills/business-strategy/SKILL.md:34
  - "what framework applies" — .claude/skills/business-strategy/SKILL.md:35
  - "validate demand or find customers" — .claude/skills/business-strategy/SKILL.md:36
  - "price or position this" — .claude/skills/business-strategy/SKILL.md:37
  - "get leads or close deals" — .claude/skills/business-strategy/SKILL.md:38
- User symptom description:
  - Concrete symptom stated with a number ("20 trials, 1 paid" — .claude/skills/business-strategy/SKILL.md:59)
  - Numeric symptom input requirement ("The method needs a concrete numeric symptom" — .claude/skills/business-strategy/SKILL.md:109)
- Self-assessment responses:
  - 6-item scored questionnaire (total 8 points, pass threshold 4) evaluating symptom clarity, stage ambiguity, and data readiness (.claude/skills/business-strategy/SKILL.md:73-83)

## Outputs — required
- Routing recommendation to primary reference file under `references/`:
  - `references/mom-test.md` — .claude/skills/business-strategy/SKILL.md:46
  - `references/four-steps.md` — .claude/skills/business-strategy/SKILL.md:46
  - `references/lean-startup.md` — .claude/skills/business-strategy/SKILL.md:47
  - `references/obviously-awesome.md` — .claude/skills/business-strategy/SKILL.md:48
  - `references/crossing-the-chasm.md` — .claude/skills/business-strategy/SKILL.md:49
  - `references/blue-ocean-strategy.md` — .claude/skills/business-strategy/SKILL.md:49
  - `references/monetizing-innovation.md` — .claude/skills/business-strategy/SKILL.md:50
  - `references/100m-offers.md` — .claude/skills/business-strategy/SKILL.md:51
  - `references/100m-leads.md` — .claude/skills/business-strategy/SKILL.md:52
  - `references/storybrand.md` — .claude/skills/business-strategy/SKILL.md:53
  - `references/made-to-stick.md` — .claude/skills/business-strategy/SKILL.md:53
  - `references/spin-selling.md` — .claude/skills/business-strategy/SKILL.md:54
  - `references/influence.md` — .claude/skills/business-strategy/SKILL.md:54
  - `references/traction.md` — .claude/skills/business-strategy/SKILL.md:55
- Scored checklist result:
  - "That reference's scored checklist was applied and produced a pass/fail with a number." — .claude/skills/business-strategy/SKILL.md:101
- Falsifiable success metric:
  - "A falsifiable success metric was set, so the founder knows when to stop or re-diagnose." — .claude/skills/business-strategy/SKILL.md:102

## Invokes — required
- reference references/mom-test.md — .claude/skills/business-strategy/SKILL.md:117
- reference references/four-steps.md — .claude/skills/business-strategy/SKILL.md:118
- reference references/lean-startup.md — .claude/skills/business-strategy/SKILL.md:119
- reference references/obviously-awesome.md — .claude/skills/business-strategy/SKILL.md:120
- reference references/crossing-the-chasm.md — .claude/skills/business-strategy/SKILL.md:121
- reference references/blue-ocean-strategy.md — .claude/skills/business-strategy/SKILL.md:122
- reference references/monetizing-innovation.md — .claude/skills/business-strategy/SKILL.md:123
- reference references/100m-offers.md — .claude/skills/business-strategy/SKILL.md:124
- reference references/100m-leads.md — .claude/skills/business-strategy/SKILL.md:125
- reference references/spin-selling.md — .claude/skills/business-strategy/SKILL.md:126
- reference references/influence.md — .claude/skills/business-strategy/SKILL.md:127
- reference references/traction.md — .claude/skills/business-strategy/SKILL.md:128
- reference references/storybrand.md — .claude/skills/business-strategy/SKILL.md:129
- reference references/made-to-stick.md — .claude/skills/business-strategy/SKILL.md:130

## Invoked by — required
- doc docs/skill-reference.md — docs/skill-reference.md:172
- doc docs/installation.md — docs/installation.md:143

## Concepts named — required, verbatim
- `business-strategy` — .claude/skills/business-strategy/SKILL.md:2 — defined here
- `Discovery` — .claude/skills/business-strategy/SKILL.md:9 — used here
- `Validation` — .claude/skills/business-strategy/SKILL.md:9 — used here
- `Positioning` — .claude/skills/business-strategy/SKILL.md:9 — used here
- `GoToMarket` — .claude/skills/business-strategy/SKILL.md:9 — used here
- `Persuasion` — .claude/skills/business-strategy/SKILL.md:9 — used here
- `founder-playbook` — .claude/skills/business-strategy/SKILL.md:10 — used here
- `Business Strategy` — .claude/skills/business-strategy/SKILL.md:13 — defined here
- `decision tree` — .claude/skills/business-strategy/SKILL.md:20 — used here
- `scored checklist` — .claude/skills/business-strategy/SKILL.md:20 — used here
- `cross-book conflicts` — .claude/skills/business-strategy/SKILL.md:21 — used here
- `SPIN Selling` — .claude/skills/business-strategy/SKILL.md:27 — used here
- `diagnose my business problem` — .claude/skills/business-strategy/SKILL.md:34 — defined here
- `what framework applies` — .claude/skills/business-strategy/SKILL.md:35 — defined here
- `validate demand or find customers` — .claude/skills/business-strategy/SKILL.md:36 — defined here
- `price or position this` — .claude/skills/business-strategy/SKILL.md:37 — defined here
- `get leads or close deals` — .claude/skills/business-strategy/SKILL.md:38 — defined here
- `Decision tree: symptom to reference` — .claude/skills/business-strategy/SKILL.md:40 — defined here
- `Build-Measure-Learn` — .claude/skills/business-strategy/SKILL.md:47 — used here
- `MVP` — .claude/skills/business-strategy/SKILL.md:47 — used here
- `beachhead` — .claude/skills/business-strategy/SKILL.md:49 — used here
- `willingness-to-pay` — .claude/skills/business-strategy/SKILL.md:50 — used here
- `need-payoff` — .claude/skills/business-strategy/SKILL.md:54 — used here
- `progressive disclosure` — .claude/skills/business-strategy/SKILL.md:57 — used here
- `Self-assessment: is the router the right entry point?` — .claude/skills/business-strategy/SKILL.md:71 — defined here
- `Honest limitations` — .claude/skills/business-strategy/SKILL.md:85 — defined here
- `Single-bottleneck bias` — .claude/skills/business-strategy/SKILL.md:89 — defined here
- `Founder-context bias` — .claude/skills/business-strategy/SKILL.md:91 — defined here
- `Verification` — .claude/skills/business-strategy/SKILL.md:95 — defined here
- `Anti-Patterns` — .claude/skills/business-strategy/SKILL.md:104 — defined here
- `The Mom Test` — .claude/skills/business-strategy/SKILL.md:117 — used here
- `The Four Steps to the Epiphany` — .claude/skills/business-strategy/SKILL.md:118 — used here
- `The Lean Startup` — .claude/skills/business-strategy/SKILL.md:119 — used here
- `Obviously Awesome` — .claude/skills/business-strategy/SKILL.md:120 — used here
- `Crossing the Chasm` — .claude/skills/business-strategy/SKILL.md:121 — used here
- `Blue Ocean Strategy` — .claude/skills/business-strategy/SKILL.md:122 — used here
- `Monetizing Innovation` — .claude/skills/business-strategy/SKILL.md:123 — used here
- `$100M Offers` — .claude/skills/business-strategy/SKILL.md:124 — used here
- `$100M Leads` — .claude/skills/business-strategy/SKILL.md:125 — used here
- `Influence` — .claude/skills/business-strategy/SKILL.md:127 — used here
- `Traction` — .claude/skills/business-strategy/SKILL.md:128 — used here
- `Building a StoryBrand` — .claude/skills/business-strategy/SKILL.md:129 — used here
- `Made to Stick` — .claude/skills/business-strategy/SKILL.md:130 — used here
- `Founder Playbook` — .claude/skills/business-strategy/SKILL.md:134 — used here

## Structure
- `# Business Strategy` — .claude/skills/business-strategy/SKILL.md:13
- `## When to use` — .claude/skills/business-strategy/SKILL.md:24
- `## Triggers` — .claude/skills/business-strategy/SKILL.md:30
- `## Decision tree: symptom to reference` — .claude/skills/business-strategy/SKILL.md:40
- `## Process (progressive disclosure)` — .claude/skills/business-strategy/SKILL.md:57
- `## Self-assessment: is the router the right entry point?` — .claude/skills/business-strategy/SKILL.md:71
- `## Honest limitations` — .claude/skills/business-strategy/SKILL.md:85
- `## Verification` — .claude/skills/business-strategy/SKILL.md:95
- `## Anti-Patterns` — .claude/skills/business-strategy/SKILL.md:104
- `## References` — .claude/skills/business-strategy/SKILL.md:113

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .claude/skills/business-strategy/SKILL.md:4 · references negative trigger skill `decision-critic`, but no `.claude/skills/decision-critic` or `.claude/agents/decision-critic.md` exists in the repository runtime tree (only present in `src/copilot-cli/skills/decision-critic/SKILL.md`).
- missing-path · .claude/skills/business-strategy/SKILL.md:4 · references "the engineering rules" ("Do NOT use for software design (use the engineering rules)"), which refers to `src/copilot-cli/instructions/unified-software-engineering.instructions.md` not accessible in the Claude plugin runtime tree.

## Observations
- Architecture pattern: Implements progressive disclosure routing to protect agent context windows; the router is 8,625 bytes and points founders to exactly one primary reference (around 6–7.5 KB each) rather than dumping all 14 book distillations (totaling 94,490 bytes) into the LLM context.
- Provenance and pattern credit: Explicitly attributes its structure (decision trees, scored checklists, honest limitations, cross-book conflict resolution) to `getagentseal/founder-playbook` (MIT license) in frontmatter and body (.claude/skills/business-strategy/SKILL.md:10, 134).
- Self-assessment gateway: Incorporates a 6-question weighted self-assessment scoring rubric (lines 73-83) with an explicit pass threshold of 4/8 to divert founders who already know their target framework away from the router to avoid unnecessary routing overhead.
- Packaging as optional pack: Packaged as an optional pack in `rjm` installable via `npx ai-agents init --pack business` rather than installed by default, reflecting domain separation between software engineering lifecycle automation and early-stage startup business strategy.

## Context cost
- File itself: 8,625 bytes (~2,156 tokens).
- Reference files available on demand (14 files under `references/`): 94,490 bytes (~23,623 tokens).
- Single-route invocation cost (router + 1 reference): ~15,000 bytes (~3,750 tokens).
- Total package corpus: 103,115 bytes (~25,779 tokens).
