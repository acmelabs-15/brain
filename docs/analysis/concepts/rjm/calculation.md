---
package: rjm
name: Calculation
slug: calculation
kind: pattern
package_phase: rjm:Phase 3: Generation
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/references/script-integration-framework.md, sha256: f533a0f41ac2f818a735eb708e431d07a64afb758f20e2d3e7b8a618cd1ecda5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Calculation

## Definition — verbatim
> "Compute metrics or scores" — .claude/skills/skillforge/references/script-integration-framework.md:83

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/references/script-integration-framework.md | 83 | defined here | Defines Calculation as a script category for numerical processing and scoring rubrics. |

## Consumes
Raw numerical data, rubric scores, timing logs, or metric counters.

## Produces
Aggregated metrics, statistical summaries, compliance ratings, or evaluation scores.

## When applied
When computing numerical evaluations, analytics, or scoring rubrics deterministically.

## Sub-concepts
none

## Part of
script-categories

## Implementation status
clean

## Design notes
Isolates numerical and statistical calculations into deterministic scripts to avoid LLM arithmetic errors and ensure reproducible metric evaluation.
