---
package: rjm
name: Per-agent rollback
slug: per-agent-rollback
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-039-agent-model-cost-optimization.md, sha256: 8c22565f67ff3b903c9bd5e455b5c11eb7d858702eff435639b0ce127ebccf1f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Per-agent rollback

## Definition — verbatim
> "**Per-agent rollback** (if quality degrades):" — .agents/architecture/ADR-039-agent-model-cost-optimization.md:249

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-039-agent-model-cost-optimization.md | 249 | defined here | Provides precise git commit extraction commands to revert model tier changes on individual agent configurations without reverting the entire system. |

## Consumes
Identified quality degradation or violation of failure thresholds for a specific agent.

## Produces
Restored prior agent prompt definitions at pre-downgrade commit states.

## When applied
When a specific agent exhibits degradation during provisional observation while others remain performant.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
Per-agent rollback is a targeted remediation pattern that isolates reversion procedures to individual agent configuration files using git checkout commands (`git show <commit>^:<path> > <path>`). This granularity ensures that if one agent fails its monitoring thresholds under a downgraded tier, its model assignment can be independently rolled back without forfeiting the cost savings achieved across other performing agents.
