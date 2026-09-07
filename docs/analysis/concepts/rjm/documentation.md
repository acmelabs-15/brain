---
package: rjm
name: Documentation
slug: documentation
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/CLAUDE.md, sha256: af43e1f532a0b899bec978fc4fc1c9cf23544efbeb645a71692fe13a71093bd6}
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
  - {path: .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md, sha256: c1dd0e02bdb365dfc6c492fd2e5a9726aeaa054a6f0f442d18a0504f72521cb3}
  - {path: .claude/skills/slo-designer/SKILL.md, sha256: 2025c0f10b197b62258b80667ebd80b1f0a11c7918bd35230ce63cabf6805f4e}
  - {path: docs/skill-reference.md, sha256: 579cab0d62a861c65cc7599f70e4f77ae0317e59b1cbd5f021f2fd49df3618d5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Documentation

## Definition — verbatim
> "Step 6: Documentation" — .claude/skills/planner/SKILL.md:221

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/CLAUDE.md | 119 | defined here | Section heading establishing SKILL.md as primary documentation and defining documentation placement rules. |
| .claude/skills/planner/scripts/executor.py | 11 | defined here | Step 6 in the planner execution workflow performing technical writing and documentation passes. |
| .claude/skills/planner/SKILL.md | 221 | defined here | Formal lifecycle phase in planner state machine where post-implementation documentation updates occur. |
| .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md | 25 | used here | Script agent evaluation criterion assessing the presence and clarity of usage examples. |
| .claude/skills/slo-designer/SKILL.md | 122 | defined here | Step 6 in the SLO designer process generating the final SLO specification document. |
| docs/skill-reference.md | 31 | defined here | Functional skill category in the reference catalog grouping documentation and markdown management tools. |

## Consumes
Completed code implementations, quality review findings, architectural decisions, and SLO definitions.

## Produces
Updated SKILL.md files, technical documentation, usage examples, and finalized SLO specifications.

## When applied
Applied as Step 6 in planner workflows, during SLO generation, and when updating skill and repository documentation.

## Sub-concepts
none

## Part of
planner

## Implementation status
clean

## Design notes
Documentation is an explicit lifecycle phase and evaluation dimension in rjm. In structured workflows like `planner` and `slo-designer`, documentation is executed as a dedicated post-implementation phase to ensure that architectural changes, usage examples, and operational SLAs are formally captured before task retrospective or merge.
