---
package: rjm
name: Completeness Checkpoint Tags
slug: completeness-checkpoint-tags
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md, sha256: 18d14cb05a5fae5714355776fc4016fe1af5af0709f06bc8b4745e30b2771db9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Completeness Checkpoint Tags

## Definition — verbatim
> "Transform bullet points within tags into _required sub-tasks_:" — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:841

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md | 839 | defined here | Defined as an XML structure pattern transforming internal bullet points into mandatory checklist sub-tasks. |

## Consumes
Sub-task specifications and analytical checklists.

## Produces
Structured XML analyses systematically addressing each checklist item.

## When applied
> "The model addresses all sub-points or explicitly skips with justification." — .claude/skills/prompt-engineer/references/prompt-engineering-single-turn.md:853

## Sub-concepts
none

## Part of
thinking-tags

## Implementation status
clean

## Design notes
Completeness Checkpoint Tags structure internal XML reasoning blocks into explicit bulleted sub-tasks (e.g. `<analysis_checklist>`). By replacing vague instructions ("analyze thoroughly") with an explicit checklist, this pattern forces the model to evaluate every item or state reasons for omission.
