---
package: rjm
name: Panel
slug: panel
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md, sha256: c1dd0e02bdb365dfc6c492fd2e5a9726aeaa054a6f0f442d18a0504f72521cb3}
  - {path: scripts/eval/_model_panel_core.py, sha256: df08d8058819785d7a4bd1419acf63539221c9c0a3b27274e5f75f5d231dccef}
  - {path: scripts/eval/eval-model-panel.py, sha256: b545769f2aec9f5be0caec08bce6804bd0466c270e9f726fe42949b4a54cb8bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Panel

## Definition — verbatim
> "**Panel:** 3-4 Opus agents with distinct evaluative lenses" — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md | 3 | defined here | Multi-agent review board consisting of 3-4 Opus agents with orthogonal evaluative lenses. |
| scripts/eval/_model_panel_core.py | 64 | defined here | Dataclass representing an ordered tier list of models and degradation drop threshold. |
| scripts/eval/eval-model-panel.py | 37 | used here | Imported configuration structure for sweeping evaluations across tiered model panels. |

## Consumes
Candidate skills or agent prompts, evaluation fixtures, and baseline performance data.

## Produces
Unanimous consensus verdicts in SkillForge; degradation classification reports across model tiers in eval sweeps.

## When applied
Applied during SkillForge Phase 4 synthesis and during model panel evaluation sweeps.

## Sub-concepts
panel-composition, panel-tier

## Part of
skillforge

## Implementation status
clean

## Design notes
An evaluation structure in rjm functioning both as a multi-agent adversarial review gate for skill validation and as a tiered model sweep matrix (frontier reference band plus lower probe tiers) for detecting agent degradation.
