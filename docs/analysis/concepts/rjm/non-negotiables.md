---
package: rjm
name: non-negotiables
slug: non-negotiables
kind: checklist
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/ai-agents-change-control/SKILL.md, sha256: f8f0c4123832af7d146b3fd9b057b5886f1eb103bbaa48514c118bf478b9bcb2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# non-negotiables

## Definition — verbatim
> "### Phase 4: Hold the non-negotiables" — .claude/skills/ai-agents-change-control/SKILL.md:79

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/ai-agents-change-control/SKILL.md | 79 | defined here | Section heading introducing the immutable repository rules derived from incident retrospectives. |

## Consumes
PR diffs, architectural proposals, and commit series.

## Produces
Pass/fail verification against core repository invariants.

## When applied
Applied as the final verification gate before merging any change.

## Sub-concepts
none

## Part of
change-control

## Implementation status
clean

## Design notes
Non-negotiables constitutes Phase 4 of change control, enforcing immutable core repository invariants born from painful incident retrospectives to prevent repeated regressions.
