---
package: rjm
name: Portable Skill
slug: portable-skill
kind: template
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

# Portable Skill

## Definition — verbatim
> "### A.1 Portable Skill (Official Standard Only)" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:764

## Also called — verbatim
"Portable skills" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:148

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 764 | defined here | Appendix section providing a complete example of a skill conforming solely to the official standard. |

## Consumes
official-standard

## Produces
Exemplar skill structure demonstrating frontmatter and body conventions for cross-platform portability.

## When applied
Applied as a reference template when authoring skills designed to function across multiple platforms without repository-specific extensions.

## Sub-concepts
none

## Part of
two-tier-requirement-system

## Implementation status
defects: cross-file-contradiction, doc-drift (reconciles ADR-040 comma-separated allowed-tools and ADR-080 model field supersession)

## Design notes
An exemplar skill template in SKILL-STANDARDS-RECONCILED.md demonstrating an official-standard-only skill design that maximizes portability across runtimes by omitting proprietary extensions.
