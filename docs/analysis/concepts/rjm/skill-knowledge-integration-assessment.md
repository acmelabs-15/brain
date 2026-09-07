---
package: rjm
name: Skill Knowledge Integration Assessment
slug: skill-knowledge-integration-assessment
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-knowledge-integration.py, sha256: cb592498e314781566e1d645748d3885e0715382ee8a49446d0045cdfa3a733f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Skill Knowledge Integration Assessment

## Definition — verbatim
> "Skill Knowledge Integration Assessment: Evaluate how skill context improves responses." — scripts/eval/eval-knowledge-integration.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-knowledge-integration.py | 2 | defined here | Named in module docstring as the evaluation harness measuring value added by skill definitions over unassisted baselines. |

## Consumes
Skill files (`SKILL.md` and `references/`), prompt scenarios across evaluation domains, and baseline LLM responses.

## Produces
Comparative evaluation scores across accuracy, depth, and specificity, with overall delta and kill gate verdicts.

## When applied
During skill development and validation to ensure adding skill context delivers measurable response improvements without prompt bloat.

## Sub-concepts
- accuracy
- depth
- specificity
- kill-gate

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
An empirical evaluation technique in rjm that quantifies the marginal utility of skill documentation by comparing LLM responses generated with skill context against unassisted baseline responses on identical domain scenarios.
