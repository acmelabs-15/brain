---
package: rjm
name: Phase 0 triage
slug: phase-0-triage
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/SKILL.md, sha256: 48f99b914a2a3d461fcafe31057925156480895fffae14e6ba0aef9fefe88d19}
  - {path: .claude/skills/skillforge/references/external-skill-source-adaptation.md, sha256: d1bfe692aa70bcf7515f3849cc45814365dbd7e23605c0b1058dbb125f43ec79}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 0 triage

## Definition — verbatim
> "Phase 0 triage ensures you never duplicate existing functionality." — .claude/skills/skillforge/SKILL.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/external-skill-source-adaptation.md | 5 | used here | Referenced as the foundational triage discipline upon which external catalog adaptation gates are layered. |
| .claude/skills/skillforge/SKILL.md | 3 | defined here | Defined in skill description as the initial triage phase ensuring existing functionality is never duplicated. |

## Consumes
User prompts, skill requests, task descriptions, or foreign skill catalogs.

## Produces
Routing decision (build, improve, reuse, or reject) and duplication assessment.

## When applied
Triggered at the beginning of any SkillForge invocation before deep analysis or generation begins.

## Sub-concepts
none

## Part of
skillforge

## Implementation status
clean · defects: doc-drift, script-bug, missing-path

## Design notes
The initial intake gate in SkillForge that classifies incoming requests against existing capabilities to route tasks toward reuse or improvement, strictly preventing unnecessary skill duplication.
