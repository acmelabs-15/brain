---
package: rjm
name: Phase 4: Synthesis Deep Dive
slug: phase-4-synthesis-deep-dive
kind: phase
package_phase: rjm:Phase 4: Synthesis Panel
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md, sha256: c1dd0e02bdb365dfc6c492fd2e5a9726aeaa054a6f0f442d18a0504f72521cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Phase 4: Synthesis Deep Dive

## Definition — verbatim
> "# Phase 4: Synthesis Deep Dive" — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md | 1 | defined here | Reference document defining the multi-agent synthesis panel, scoring rubrics, and consensus protocol. |

## Consumes
Generated skill artifacts from Phase 3 (SKILL.md, references, scripts) and validated specification from Phase 2.

## Produces
Multi-agent review reports, scores, issues tables, and unanimous approval verdict or Phase 1 feedback loops.

## When applied
Executed during Phase 4 of the SkillForge lifecycle before skill finalization.

## Sub-concepts
panel, panel-composition, script-agent, agent-evaluation, consensus-protocol

## Part of
skillforge

## Implementation status
clean

## Design notes
The fourth lifecycle phase of SkillForge where an adversarial board of 3–4 Opus agents reviews candidate skills across distinct evaluative lenses, enforcing unanimous consensus before a skill can be finalized.
