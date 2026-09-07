---
package: rjm
name: Verification Checklist
slug: verification-checklist
kind: checklist
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/SKILL.md, sha256: 3bebfe39adb559c75a55a96b2ecebb91143bfb2522de30fc96b12606ca2aba03}
  - {path: .claude/skills/codebase-documenter/SKILL.md, sha256: f94be5947e115a61caff598d81516af3606284caa0bb4f4ed4db4fe36973b12a}
  - {path: .claude/skills/cva-analysis/SKILL.md, sha256: 43e45215d0c6aa5ae0d384806b42a6bbe2610a1cb5c2b73b2a840b6c44ea85a9}
  - {path: .claude/skills/dx-review/SKILL.md, sha256: 3318726b8ddca8d9ea852f25f38bfe20f3d918858d954e5c462358e95db1d435}
  - {path: .claude/skills/pipeline-validator/SKILL.md, sha256: e2f8fd7386caf66807b65a69ac0decff9289c4f6ff2d6421a278345a0aea5e8c}
  - {path: .claude/skills/research-and-incorporate/SKILL.md, sha256: 0bf25d65f94311bf6deb98374ae1b0b1715fa3b7aaa47436208f7c813a03a69e}
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Verification Checklist

## Definition — verbatim
> "## Verification Checklist" — .claude/skills/chaos-experiment/SKILL.md:312

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/SKILL.md | 312 | defined here | Pre-execution safety checklist verifying scope, baselines, rollback, and alerts prior to chaos testing. |
| .claude/skills/codebase-documenter/SKILL.md | 73 | defined here | Documentation quality checklist ensuring portable paths, active voice, and formatting consistency. |
| .claude/skills/cva-analysis/SKILL.md | 367 | defined here | Analysis verification checklist validating dimension coverage, weight normalization, and scoring evidence. |
| .claude/skills/dx-review/SKILL.md | 261 | defined here | Developer experience review checklist verifying onboarding clarity, error messaging, and documentation flow. |
| .claude/skills/pipeline-validator/SKILL.md | 432 | defined here | CI/CD pipeline validation checklist verifying stage dependencies, secret handling, and caching. |
| .claude/skills/research-and-incorporate/SKILL.md | 134 | defined here | Research verification checklist ensuring canonical citations, attribution, and license compliance. |
| .claude/skills/skillforge/SKILL.md | 253 | defined here | Skill authoring verification checklist verifying frontmatter schema, trigger definitions, and script contracts. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 132 | used here | Transformation guidance noting the addition of standardized verification checklists across migrated skills. |

## Consumes
Draft artifacts, completed analysis documents, or pre-execution operational states.

## Produces
Systematic binary gate confirmation that all necessary prerequisites, quality bounds, and safety controls are met.

## When applied
Applied prior to finalizing skill deliverables or executing potentially disruptive operations across multiple skills.

## Sub-concepts
none

## Part of
quality-assurance

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path, script-bug, internal-contradiction

## Design notes
`Verification Checklist` is a recurring standard section pattern used across rjm skills to enforce explicit, auditable pre-flight criteria and deliverable completeness before proceeding.
