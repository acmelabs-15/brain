---
package: rjm
name: "Second-Order Effects"
slug: second-order-effects
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md, sha256: b2e62451bc202e69bce365986c0189d44776bc7ee1d6ee58ebe5b60c85061298}
  - {path: .claude/skills/cva-analysis/references/SKILL_SPEC.md, sha256: bbd5bfc3a226248265e589c01e3fd36d3855ad83010b7eeeee3e2f2576bb8b4a}
  - {path: .claude/skills/skillforge/assets/templates/skill-spec-template.xml, sha256: 58a4c3f18d2b7e35138bf1058d787f594d46638756ba61e344553b7ee476e3cc}
  - {path: .claude/skills/skillforge/references/multi-lens-framework.md, sha256: b716c53f819caa1acd7b80de5bafc085922e78dbe55183d3ddc5a2753afb5e65}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Second-Order Effects

## Definition — verbatim
> "### 3. Second-Order Effects" — .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md:66

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/buy-vs-build-framework/references/PHASE1_ANALYSIS.md | 66 | defined here | Thinking model tracing subsequent consequences, skill gains, and maintenance burdens following build/buy choices. |
| .claude/skills/cva-analysis/references/SKILL_SPEC.md | 19 | used here | Thinking lens applied during capability value analysis to evaluate downstream architectural implications. |
| .claude/skills/skillforge/assets/templates/skill-spec-template.xml | 28 | used here | XML template element listing second-order effects as an analytical questioning lens for skill specifications. |
| .claude/skills/skillforge/references/multi-lens-framework.md | 68 | defined here | Lens 3 in multi-lens framework examining consequences that unfold after initial direct impacts occur. |

## Consumes
Initial decision proposal, direct consequences, and expected primary outcomes.

## Produces
Identification of indirect consequences, delayed systemic burdens, and downstream organizational impacts.

## When applied
Applied during architectural evaluation, buy-vs-build decision analysis, and multi-lens skill design.

## Sub-concepts
none

## Part of
multi-lens-framework

## Implementation status
defects: doc-drift, missing-path

## Design notes
An essential thinking technique across rjm that compels agents and engineers to evaluate the downstream reverberations of decisions rather than stopping at immediate outcomes. In buy-vs-build decisions, it surfaces recurring maintenance obligations and vendor dependency; in skill design, it uncovers unexpected failure modes before prompts and schemas are frozen.
