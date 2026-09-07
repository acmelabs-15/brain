---
package: rjm
name: Depth
slug: depth
kind: checklist
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

# Depth

## Definition — verbatim
> "- **Depth** (1-5): Does the response go beyond surface-level and show understanding?" — scripts/eval/eval-knowledge-integration.py:326

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-knowledge-integration.py | 326 | defined here | Defined in scoring prompt as an evaluation rubric dimension assessing thoroughness and conceptual understanding. |

## Consumes
Model responses and problem prompts.

## Produces
Integer score from 1 to 5 measuring depth of understanding.

## When applied
When evaluating LLM response quality during knowledge integration assessments.

## Sub-concepts
none

## Part of
skill-knowledge-integration-assessment

## Implementation status
defects: doc-drift

## Design notes
An evaluation rubric dimension in `eval-knowledge-integration.py` that rates whether an agent response provides thorough analysis exploring nuances and trade-offs rather than superficial summaries.
