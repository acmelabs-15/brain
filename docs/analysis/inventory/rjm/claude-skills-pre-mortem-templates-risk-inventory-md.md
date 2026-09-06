---
package: rjm
path: .claude/skills/pre-mortem/templates/risk-inventory.md
type: skill
bytes: 2963
unit: inv-rjm-137
in_scope_via: .claude/skills/pre-mortem/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/pre-mortem/templates/risk-inventory.md, sha256: ac90b8b19de3d44ddec3086ac8f70f38610f00b2092ef38908bba8bba9474dfa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/pre-mortem/templates/risk-inventory.md

## Purpose — required, verbatim
> "# Pre-Mortem Risk Inventory" — .claude/skills/pre-mortem/templates/risk-inventory.md:1 (no explicit purpose statement)

## Design intent — required
Provides the standardized document structure for recording the outputs of a pre-mortem session. It prescribes mandatory sections for project context (objective, timeline, key dependencies, success criteria), risk summary statistics table, severity-tiered risk registries (Critical, High, Medium, Low) with structured fields for likelihood, impact, root cause, and the Prevention/Detection/Response mitigation triad, an action items tracking table with owners, a review schedule, and raw failure reasons appendices.

## Phase — required
rjm:build

## Inputs — required
Project metadata, identified risk factors, likelihood and impact scores (1-5), mitigation definitions, ownership assignments, and review cadences.

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Pre-Mortem Risk Inventory` — .claude/skills/pre-mortem/templates/risk-inventory.md:1 — defined here
- `Project Context` — .claude/skills/pre-mortem/templates/risk-inventory.md:8 — defined here
- `Risk Summary` — .claude/skills/pre-mortem/templates/risk-inventory.md:33 — defined here
- `Critical Risks` — .claude/skills/pre-mortem/templates/risk-inventory.md:46 — defined here
- `High Risks` — .claude/skills/pre-mortem/templates/risk-inventory.md:65 — defined here
- `Medium Risks` — .claude/skills/pre-mortem/templates/risk-inventory.md:84 — defined here
- `Low Risks` — .claude/skills/pre-mortem/templates/risk-inventory.md:92 — defined here
- `Action Items` — .claude/skills/pre-mortem/templates/risk-inventory.md:100 — defined here
- `Review Schedule` — .claude/skills/pre-mortem/templates/risk-inventory.md:109 — defined here

## Structure
- # Pre-Mortem Risk Inventory
- ## Project Context
- ### Objective
- ### Timeline
- ### Key Dependencies
- ### Success Criteria
- ## Risk Summary
- ## Critical Risks (Score 15-25)
- ### R[N]: [Risk Name]
- ## High Risks (Score 8-14)
- ### R1: [Risk Name]
- ## Medium Risks (Score 4-7)
- ## Low Risks (Score 1-3)
- ## Action Items
- ## Review Schedule
- ## Appendix: Raw Failure Reasons
- ### Capture from Phase 3 before categorization
- #### Technical
- ### People
- ### Process
- ### Organizational
- ### External
- ### Unknown Unknowns
- ## Session Notes

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- orphan · .claude/skills/pre-mortem/templates/risk-inventory.md:1 · Nothing in scope references this template file directly; SKILL.md embeds its own inline template copy rather than linking to or reading this file.
- internal-contradiction · .claude/skills/pre-mortem/templates/risk-inventory.md:67 · High Risks section uses literal identifier R1 while Critical Risks uses placeholder R[N], creating an ID collision if used as written.
- doc-drift · .claude/skills/pre-mortem/templates/risk-inventory.md:117 · Template contains Appendix: Raw Failure Reasons and Session Notes sections which are absent from the inline template in SKILL.md.

## Observations
The template contains exact markdown comment and table headers checked by `pre-mortem.py`. When unpopulated, its placeholder tokens `[1-5]` fail validator parsing.

## Context cost
2963 bytes, ~740 tokens.
