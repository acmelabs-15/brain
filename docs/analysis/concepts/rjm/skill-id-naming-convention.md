---
package: rjm
name: Skill ID Naming Convention
slug: skill-id-naming-convention
kind: pattern
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill ID Naming Convention

## Definition — verbatim
> "**Pattern**: `Skill-{Domain}-{Number}`" — .agents/archive/planning/PRD-skills-index-registry.md:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 116 | defined here | Specified as functional requirement FR-5 enforcing the `Skill-{Domain}-{Number}` structure. |

## Consumes
Domain categories, sequential skill counters, and skill names.

## Produces
Globally unique, zero-padded identifiers (e.g. `Skill-Analysis-001`) that maintain alphabetical and numerical alignment.

## When applied
Applied whenever a new skill file is authored or registered in the index.

## Sub-concepts
none

## Part of
skills-index-registry

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A structural naming rule in rjm defining skill IDs as `Skill-{Domain}-{Number}` with 3-digit zero-padding. It guarantees global uniqueness across domains, preserves sort order consistency, and establishes reliable cross-referencing keys across agent workflows.
