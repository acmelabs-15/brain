---
package: addy
name: human checkpoint
slug: human-checkpoint
kind: gate
package_phase: cross-phase
implementation_in_scope: true
memo_inputs:
  - {path: docs/comparison.md, sha256: 652e4df31f4bc1e1d456db768ee15c6cc5fdd6dee754d9dfccffe5ce1eac7194}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# human checkpoint

## Definition — verbatim
(used, not defined)
> "Driving a feature through every phase with a human checkpoint at each" — docs/comparison.md:28

## Also called — verbatim
- `human gate` — docs/comparison.md:94

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/comparison.md | 28 | used here | Highlighted as the core strength of agent-skills for driving features through development phases with checkpoints. |

## Consumes
Phase deliverables and completion artifacts (specifications, execution plans, implemented code, test runs, or review outputs).

## Produces
Human developer approval, critique, or corrective redirection before transitioning to the next lifecycle phase.

## When applied
At every major phase boundary across the development lifecycle (Define, Plan, Build, Verify, Review, Ship).

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A human checkpoint enforces an explicit governance gate between development phases. In contrast to fully autonomous pipelines that execute from requirements to deployment without human interaction, agent-skills uses human checkpoints to ensure human oversight, validate design decisions early, and stop compounding errors before they reach production.
