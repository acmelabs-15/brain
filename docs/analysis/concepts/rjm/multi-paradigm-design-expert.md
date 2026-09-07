---
package: rjm
name: multi_paradigm_design_expert
slug: multi-paradigm-design-expert
kind: role
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# multi_paradigm_design_expert

## Definition — verbatim
(used, not defined)

> "<expert>multi_paradigm_design_expert</expert>" — .claude/skills/cva-analysis/references/SKILL_SPEC.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 31 | used here | Cited as an expert perspective simulated during CVA specification analysis rounds. |

## Consumes
Domain models, language paradigm constraints, variability matrices, abstraction proposals.

## Produces
Recommendations on blending procedural, object-oriented, functional, and generic paradigms to capture variabilities cleanly.

## When applied
During multi-lens analysis and architectural design when evaluating multi-paradigm abstraction structures.

## Sub-concepts
none

## Part of
cva-analysis

## Implementation status
defects: doc-drift, missing-path

## Design notes
multi_paradigm_design_expert is a specialized architectural role simulated during rjm's multi-lens questioning process for CVA analysis. Grounded in James Coplien's multi-paradigm design methodology, it evaluates requirements across paradigms (inheritance, parametrization, templates, delegates) to find the most natural representation of commonalities and variabilities. Without this perspective, designs would reflexively force all problems into rigid single-paradigm hierarchies.
