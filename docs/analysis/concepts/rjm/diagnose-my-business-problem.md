---
package: rjm
name: diagnose my business problem
slug: diagnose-my-business-problem
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/business-strategy/SKILL.md, sha256: 367a3f83f1a5a7da8258c8cfb0d0c98909a69c4c84976f869c6a17d7b19ba1db}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# diagnose my business problem

## Definition — verbatim
> "| `diagnose my business problem` | Walk the decision tree below |" — .claude/skills/business-strategy/SKILL.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/business-strategy/SKILL.md | 34 | defined here | User trigger phrase activating the diagnostic decision tree to route symptoms to root causes. |

## Consumes
A felt founder symptom expressed in a concrete sentence with a numeric metric.

## Produces
Progressive traversal of the decision tree to identify the earliest broken funnel stage.

## When applied
Triggered when a founder experiences commercial underperformance but cannot pinpoint the breakdown.

## Sub-concepts
none

## Part of
business-strategy

## Implementation status
defects: missing-path

## Design notes
diagnose my business problem is a user trigger phrase that activates root-cause diagnostic routing in rjm. It initiates an upstream analysis that forces the user to quantify their symptom, preventing superficial fixes by addressing foundational positioning or pricing problems before examining downstream sales tactics.
