---
package: rjm
name: Panel Composition
slug: panel-composition
kind: pattern
package_phase: rjm:Phase 4: Synthesis Panel
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/TRANSFORMATION_NOTES.md, sha256: ed538bcdcb7377b8c5b9ab335a0ce75698821bc9502b9d13e51b1bb66e4bc608}
  - {path: .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md, sha256: c1dd0e02bdb365dfc6c492fd2e5a9726aeaa054a6f0f442d18a0504f72521cb3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Panel Composition

## Definition — verbatim
> "## Panel Composition" — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md | 7 | defined here | Section heading defining the 3 core and 1 conditional agent roles on the synthesis panel. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 41 | used here | Cites panel composition specification extracted into references/phase4-synthesis-deep-dive.md. |

## Consumes
Evaluative requirements for skill synthesis.

## Produces
Defined panel board structure with 3 permanent agents (Design/Architecture, Audience/Usability, Evolution/Timelessness) and 1 conditional agent (Script/Automation).

## When applied
Configured and assembled whenever Phase 4 synthesis review executes on a candidate skill.

## Sub-concepts
design-architecture, audience-usability, evolution-timelessness, script-automation

## Part of
panel

## Implementation status
clean

## Design notes
The architectural specification for the multi-agent review board in SkillForge Phase 4, establishing orthogonal evaluative perspectives that must all agree before a skill is approved.
