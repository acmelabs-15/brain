---
package: rjm
name: Portable skills
slug: portable-skills
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

# Portable skills

## Definition — verbatim
> "Portable skills, cross-platform" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:148

## Also called — verbatim
"Portable Skill" — .agents/architecture/SKILL-STANDARDS-RECONCILED.md:764

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/SKILL-STANDARDS-RECONCILED.md | 148 | defined here | Classification tier in requirement matrix defining skills adhering solely to official standards for cross-platform portability. |

## Consumes
official-standard

## Produces
Portable agent skills compatible across multiple harness platforms without dependency on internal tools or metadata extensions.

## When applied
Applied when authoring skills designed for export or multi-platform distribution across Claude Code, GitHub Copilot CLI, and other systems.

## Sub-concepts
none

## Part of
two-tier-requirement-system

## Implementation status
defects: cross-file-contradiction, doc-drift (reconciles ADR-040 comma-separated allowed-tools and ADR-080 model field supersession)

## Design notes
The class of skills adhering strictly to the minimal two-field upstream standard (`name` and `description`), prioritizing broad platform portability and interoperability over project-specific metadata and tooling dependencies.
