---
package: rjm
name: Script Agent
slug: script-agent
kind: role
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

# Script Agent

## Definition — verbatim
> "The Script Agent is activated when the skill includes a `scripts/` directory." — .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/phase4-synthesis-deep-dive.md | 16 | defined here | Section heading defining the conditional Opus agent evaluating script quality. |
| .claude/skills/skillforge/TRANSFORMATION_NOTES.md | 41 | used here | Records extraction of Script Agent specifications into references/phase4-synthesis-deep-dive.md. |

## Consumes
Executable scripts within `scripts/`, script documentation, and error handling implementations.

## Produces
Evaluation scores (8-10 production, 6-7 functional gaps, <6 revision required) and required changes.

## When applied
Triggered during Phase 4 synthesis when a skill contains a `scripts/` directory.

## Sub-concepts
pattern-compliance, agentic-capability, script-agent-scoring

## Part of
panel-composition

## Implementation status
clean

## Design notes
The fourth conditional evaluator in SkillForge's synthesis panel, responsible for ensuring scripts within skills can execute autonomously without human prompts and adhere to standardized result structures.
