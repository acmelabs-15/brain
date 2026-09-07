---
package: rjm
name: SkillForge validator
slug: skillforge-validator
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/SKILL-STANDARDS-RECONCILED.md, sha256: 519c3146eb8bc63670a8219a2b2beb598d871658825c757990b0715cc12de505}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SkillForge validator

## Definition — verbatim
(used, not defined)
> "SkillForge validator requirement" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 60 | used here | Validation engine cited as enforcing semantic versioning requirements in skill frontmatter. |

## Consumes
Skill definitions, frontmatter metadata, and directory layouts

## Produces
Pass/fail verification verdicts enforcing schema compliance and structural standards across skills.

## When applied
Applied during skill generation, modification, and automated repository gating to validate skill structure.

## Sub-concepts
none

## Part of
SkillForge

## Implementation status
defects: cross-file-contradiction, doc-drift (reconciles ADR-040 comma-separated allowed-tools and ADR-080 model field supersession)

## Design notes
The validation engine embedded within the SkillForge skill ecosystem that enforces structural integrity, frontmatter schema compliance, and versioning rules on skills before they can be registered or used.
