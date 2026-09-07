---
package: rjm
name: Frontmatter Validation
slug: frontmatter-validation
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

# Frontmatter Validation

## Definition — verbatim
> "### 6.1 Frontmatter Validation" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:489

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 489 | defined here | Structural checklist and validation gate for SKILL.md YAML frontmatter headers. |

## Consumes
SKILL.md frontmatter blocks

## Produces
Validation verdict verifying formatting, required fields, naming regex compliance, model pin rules, and tool delimiter standards.

## When applied
Applied during automated pre-commit and CI quality checks before any agent skill modification is accepted.

## Sub-concepts
none

## Part of
SkillForge

## Implementation status
defects: cross-file-contradiction, doc-drift (reconciles ADR-040 comma-separated allowed-tools and ADR-080 model field supersession)

## Design notes
A quality gate and verification checklist ensuring that all YAML frontmatter headers in skills follow strict syntactical rules, conform to directory naming constraints, and obey repository model-pin governance policies.
