---
package: rjm
name: Decide What to Do
slug: decide-what-to-do
kind: phase
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/retrospective.md, sha256: a6db89e860d0f09ec1369b84e736acbeec1de7e94eb5d3e460f43101360d8566}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Decide What to Do

## Definition — verbatim
> "Phase 3: Decide What to Do" — .claude/agents/retrospective.md:93

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/retrospective.md | 93 | defined here | Outline heading for Phase 3 transforming diagnostic findings into actionable plans. |

## Consumes
Prioritized diagnostic findings from Phase 2 (Diagnosis).

## Produces
Classified, SMART-validated, and dependency-ordered action plans.

## When applied
Fourth operational phase (Phase 3) of the retrospective lifecycle.

## Sub-concepts
action-classification, smart-validation, dependency-ordering

## Part of
retrospective

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
Decide What to Do is Phase 3 of the retrospective workflow. It converts abstract diagnostic findings into concrete, actionable engineering work by classifying proposed changes, validating them against SMART criteria, and establishing valid dependency execution sequences.
