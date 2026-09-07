---
package: rjm
name: Iteration Workflow
slug: iteration-workflow
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/iteration-guide.md, sha256: 5118f4210e260b60388478c9f4035a565622871dcda0747f0765dc510aac2d2e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Iteration Workflow

## Definition — verbatim
> "## Iteration Workflow" — .claude/skills/skillforge/references/iteration-guide.md:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/iteration-guide.md | 7 | defined here | Defines the 6-step iteration loop: USE, NOTICE, IDENTIFY, IMPLEMENT, TEST, REPEAT. |

## Consumes
Skill in active use, task prompts, and execution logs.

## Produces
Incremental behavioral fixes targeted to SKILL.md, references, scripts, or assets.

## When applied
Applied during skill refinement to systematically address execution anomalies one behavior at a time.

## Sub-concepts
none

## Part of
iteration-guide

## Implementation status
defects: orphan

## Design notes
A six-step cyclical feedback process (USE, NOTICE, IDENTIFY, IMPLEMENT, TEST, REPEAT) designed to tune prompt instructions and tool interfaces incrementally rather than attempting wholesale rewrites.
