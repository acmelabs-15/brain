---
package: rjm
name: evolution_timelessness
slug: evolution-timelessness
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/configuration.md, sha256: 73fa64c70668a0942abb7d2c48f4d049464cda36ae9224c6e667dc3e36fa8e59}
  - {path: .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md, sha256: c1dd0e02bdb365dfc6c492fd2e5a9726aeaa054a6f0f442d18a0504f72521cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# evolution_timelessness

## Definition — verbatim
> "| **Evolution/Timelessness** | Future-proofing, extension, ecosystem | Score ≥7, extension points clear, ecosystem fit | Always |" — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/configuration.md | 7 | used here | Declared as the mandatory core analytical lens under `SKILLCREATOR_CONFIG.core_lens`. |
| .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md | 13 | defined here | Synthesis panel agent role and evaluation lens focusing on future-proofing, extension points, and timelessness scoring. |

## Consumes
Draft skill specifications, temporal projections, and extension point declarations.

## Produces
Timelessness score, anti-obsolescence review findings, and approval verdict.

## When applied
Applied continuously during Phase 1 (Analysis), Phase 2 (Specification), and Phase 4 (Synthesis).

## Sub-concepts
none

## Part of
skillforge

## Implementation status
defects: doc-drift

## Design notes
`evolution_timelessness` is the foundational evaluative lens and synthesis panel agent in SkillForge dedicated to future-proofing skills, ensuring every created skill scores at least 7/10 on timelessness and defines clean extension points before approval.
