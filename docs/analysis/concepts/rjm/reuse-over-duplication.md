---
package: rjm
name: Reuse over duplication
slug: reuse-over-duplication
kind: gate
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

# Reuse over duplication

## Definition — verbatim
> "2. **Reuse over duplication.** Route each reusable idea to an existing local" — .claude/skills/skillforge/SKILL.md:140

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/SKILL.md | 140 | defined here | Second gate for external skill adaptation routing reusable ideas to existing local skills and rejecting redundancy. |

## Consumes
Candidate skill capability description and local skill/agent catalog.

## Produces
Routing decision to extend existing skill/command or justification for a verified new capability gap.

## When applied
Applied when assessing candidate capabilities from external skill sources during triage.

## Sub-concepts
none

## Part of
adapting-an-external-skill-source

## Implementation status
defects: doc-drift, missing-path, script-bug

## Design notes
Reuse over duplication is an architectural catalog gate preventing sprawl by routing candidate external capabilities into existing local skills, permitting a new skill only when an irreconcilable capability gap exists.
