---
package: rjm
name: build-measure-learn
slug: build-measure-learn
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
  - {path: .claude/skills/business-strategy/references/crossing-the-chasm.md, sha256: 0e83c9e9ba5da03e71119e2521b0bb544f1e9f5f3111fc53b7e1736cfaa4d95a}
  - {path: .claude/skills/business-strategy/references/four-steps.md, sha256: 1153c76e5c629d228368c8e4db35c04e933c3fd7e4baf8d71d0b7c93f7e60372}
  - {path: .claude/skills/business-strategy/references/lean-startup.md, sha256: 2dced9a8a71a571271b621d0be2e74299d328252264c6f3cd9f9f81ffa7c91bd}
  - {path: .claude/skills/business-strategy/references/mom-test.md, sha256: 09980e08320f81700c21cb6346b6ea1b094637ea4566dc81d071508d84d090d3}
  - {path: .claude/skills/business-strategy/references/traction.md, sha256: 2f8e8bcb6eb1f87e80aee296179b4ce681a9ea641bac43930d093f9c0d369f2b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# build-measure-learn

## Definition — verbatim
> "run Build-Measure-Learn around your single riskiest assumption. Start here." — .claude/skills/business-strategy/references/lean-startup.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/references/crossing-the-chasm.md | 88 | used here | Reconciles rapid iterative experimentation with beachhead commitment once early adopters begin buying. |
| .claude/skills/business-strategy/references/four-steps.md | 91 | used here | Contrasted with upfront discovery interviews: resolve by market type (cheap web builds vs high-cost enterprise). |
| .claude/skills/business-strategy/references/lean-startup.md | 17 | defined here | Core iterative steering loop testing the single riskiest assumption via minimum viable products and actionable metrics. |
| .claude/skills/business-strategy/references/mom-test.md | 85 | used here | Framework reconciliation: conduct Mom Test customer interviews first to select problems, then iterate with build-measure-learn. |
| .claude/skills/business-strategy/references/traction.md | 103 | used here | Reconciles endless product feature iteration with distribution channel testing using the 50 percent rule. |
| .claude/skills/business-strategy/SKILL.md | 47 | used here | Directs founders who can build a product but have unproven demand to run Build-Measure-Learn on the riskiest assumption. |

## Consumes
Hypothesized business models, riskiest assumptions, and minimal testable artifacts (MVPs).

## Produces
Actionable metric data, empirical validation, and informed pivot-or-persevere decisions.

## When applied
When testing whether market demand exists for a product concept, starting with the single riskiest assumption.

## Sub-concepts
none

## Part of
lean-startup

## Implementation status
defects: missing-path

## Design notes
The central steering feedback loop in Lean Startup methodology within rjm. It turns ideas into products, measures real customer response using actionable metrics, and learns whether to pivot or persevere, minimizing cycle time across the entire loop.
