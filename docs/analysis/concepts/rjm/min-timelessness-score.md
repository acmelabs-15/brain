---
package: rjm
name: min_timelessness_score
slug: min-timelessness-score
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/configuration.md, sha256: 73fa64c70668a0942abb7d2c48f4d049464cda36ae9224c6e667dc3e36fa8e59}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# min_timelessness_score

## Definition — verbatim
> "    min_timelessness_score: 7" — .claude/skills/skillforge/references/configuration.md:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/configuration.md | 21 | defined here | Configuration parameter specifying the minimum numeric timelessness score (7 out of 10) required for skill approval. |

## Consumes
Evaluated timelessness score calculated by the evolution lens or panel.

## Produces
Gating verdict (pass if score ≥7, fail if <7 requiring iterative revision).

## When applied
Enforced during Phase 2 specification validation and Phase 4 synthesis panel evaluation.

## Sub-concepts
none

## Part of
skillforge-configuration

## Implementation status
defects: doc-drift

## Design notes
`min_timelessness_score` defines the non-negotiable quantitative hurdle (score ≥ 7/10) that every skill must satisfy before graduating from SkillForge, ensuring that ephemeral or poorly abstracted tools are rejected.
