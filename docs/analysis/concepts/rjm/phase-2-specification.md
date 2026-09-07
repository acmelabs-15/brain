---
package: rjm
name: Phase 2: Specification
slug: phase-2-specification
kind: phase
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 2: Specification

## Definition — verbatim
> "## Phase 2: Specification" — .claude/skills/skillforge/SKILL.md:164

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/SKILL.md | 164 | defined here | Second procedural phase of skill creation authoring the XML skill specification before file generation. |

## Consumes
Phase 1 analysis findings, explicit and implicit requirements, domain context, and cognitive model evaluations.

## Produces
Structured XML skill specification defining metadata, requirements, architecture, and validation criteria.

## When applied
Applied during SkillForge skill authoring after Phase 1 Deep Analysis is complete and before generating skill implementation files.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
Phase 2: Specification is the formal specification phase of the SkillForge skill authoring lifecycle in rjm, requiring full XML structural definition and validation before any skill code or prompts are generated.
