---
package: rjm
name: SkillForge Quality Gates
slug: skillforge-quality-gates
kind: gate
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

# SkillForge Quality Gates

## Definition — verbatim
(used, not defined)

> "### SkillForge Quality Gates" — .agents/governance/SKILL-CREATION-CRITERIA.md:101

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-CREATION-CRITERIA.md | 101 | defined here | Defines the automated quality gates (timelessness >=7/10, panel approval, frontmatter validation, extension points, self-verifying scripts) enforced by SkillForge. |

## Consumes
Generated skill draft, analysis artifacts, and test scripts.

## Produces
Automated quality gate verdicts gating production readiness of newly authored skills.

## When applied
Enforced automatically during the synthesis panel and verification phase of SkillForge.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift

## Design notes
A set of automated quality gates integrated into the SkillForge meta-skill. These gates require timelessness scoring (>=7/10), unanimous multi-agent synthesis panel approval, frontmatter property validation, documented extension points, and self-verifying script architectures before any newly authored skill is admitted into the repository.
