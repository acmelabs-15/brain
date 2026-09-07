---
package: rjm
name: LLM-as-judge
slug: llm-as-judge
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md, sha256: d4d4d47d8635f0c96a17abe1ff50382189eea4aab68a7a7e39bf691d033c6e0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# LLM-as-judge

## Definition — verbatim
(used, not defined)

> "- [ ] Report MAY include an \"Advice Quality (Advisory)\" section using LLM-as-judge scoring on the agent's narrative response (mitigation specificity, STRIDE classification correctness, etc.)." — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:245

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 245 | uses | Evaluated as an advisory, non-gated signal for narrative quality, explicitly barred from gating decisions. |

## Consumes
Agent narrative responses, evaluation prompts, and rubric criteria.

## Produces
Qualitative advice scores and narrative evaluation commentary.

## When applied
When evaluating advice quality alongside deterministic recall metrics.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
An automated evaluation technique using large language models to grade model outputs, explicitly restricted to non-gated advisory roles in rjm to preserve deterministic reproducibility.
