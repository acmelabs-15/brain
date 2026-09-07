---
package: rjm
name: Tier 2: Multi-Step Workflow
slug: tier-2-multi-step-workflow
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/SKILL-CREATION-CRITERIA.md, sha256: 27241f09bb7441e7cf128ddc9721db0c2ce7d3497721cafee4e0871c57f1586a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Tier 2: Multi-Step Workflow

## Definition — verbatim
(used, not defined)

> "### Tier 2: Multi-Step Workflow" — .agents/governance/SKILL-CREATION-CRITERIA.md:196

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-CREATION-CRITERIA.md | 196 | defined here | Defines the intermediate skill complexity tier for 2-4 phase workflows with phase gates between steps. |

## Consumes
Multi-step procedural workflow requirements with intermediate state transitions.

## Produces
Structured skill specification featuring 2 to 4 phases separated by explicit phase gates.

## When applied
Applied to workflows (such as merge conflict resolution) that require sequential evidence collection, analysis, and execution.

## Sub-concepts
none

## Part of
skill-complexity-tiers

## Implementation status
defects: doc-drift

## Design notes
The intermediate complexity tier in rjm's skill taxonomy, representing 2-4 phase workflows that enforce phase gates between major execution steps. Tier 2 skills ensure sequential rigor and prevent premature advancement during multi-step tasks such as merge conflict resolution.
