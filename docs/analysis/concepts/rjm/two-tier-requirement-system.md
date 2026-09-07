---
package: rjm
name: TWO-TIER REQUIREMENT SYSTEM
slug: two-tier-requirement-system
kind: pattern
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

# TWO-TIER REQUIREMENT SYSTEM

## Definition — verbatim
> "**Resolution**: **TWO-TIER REQUIREMENT SYSTEM**" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:144

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 144 | defined here | Resolution framework establishing separate frontmatter requirements for portable versus project-internal skills. |

## Consumes
official-standard, ai-agents-project-extensions

## Produces
Two distinct validation targets: minimal portable skills (2 required fields) and project-internal skills (4 required fields).

## When applied
Applied during skill authoring and validation to determine which frontmatter requirements and quality checks govern a skill.

## Sub-concepts
portable-skills, project-internal-skills

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift (reconciles ADR-040 comma-separated allowed-tools and ADR-080 model field supersession)

## Design notes
An architectural conflict resolution policy that resolves tensions between minimal upstream specifications and strict internal quality demands by recognizing two distinct tiers: portable external skills and project-internal skills.
