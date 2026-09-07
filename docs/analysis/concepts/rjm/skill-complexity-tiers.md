---
package: rjm
name: Skill Complexity Tiers
slug: skill-complexity-tiers
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

# Skill Complexity Tiers

## Definition — verbatim
(used, not defined)

> "## Skill Complexity Tiers" — .agents/governance/SKILL-CREATION-CRITERIA.md:175

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-CREATION-CRITERIA.md | 175 | defined here | Section defining the 3-tier complexity model aligning skill structure with task requirements. |

## Consumes
Task scope, step count, tool coordination needs, and verification requirements.

## Produces
Classification of a skill into Tier 1 (Simple Wrapper), Tier 2 (Multi-Step Workflow), or Tier 3 (Orchestrated Pipeline).

## When applied
Applied during skill design to choose the appropriate architectural structure and phase gate density.

## Sub-concepts
tier-1-simple-wrapper, tier-2-multi-step-workflow, tier-3-orchestrated-pipeline

## Part of
skill-creation-criteria

## Implementation status
defects: doc-drift

## Design notes
An architectural classification pattern that categorizes skills into three structural tiers: single-step wrappers without gates (Tier 1), 2-4 phase workflows with intermediate phase gates (Tier 2), and multi-agent orchestrated pipelines with formal review gates (Tier 3). This aligns implementation complexity directly with problem scope.
