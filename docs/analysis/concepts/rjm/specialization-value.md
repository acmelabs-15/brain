---
package: rjm
name: specialization value
slug: specialization-value
kind: technique
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-058-agent-eval-discipline.md, sha256: 772b9974abe96bcf928a8c9e89bd63fa9ecfb82e51baff7ccbfc07ce198daf51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# specialization value

## Definition — verbatim
> "This methodology measures **specialization value**: does the agent's curated content (system prompt, role, instructions) add lift over a generic prompt against the same model on the same fixtures?" — .agents/architecture/ADR-058-agent-eval-discipline.md:110

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 110 | defined here | Defines specialization value as the recall lift provided by curated agent prompt content over a generic baseline prompt |

## Consumes
Curated agent system prompts, naive baseline prompts, and held-out test fixtures with deterministic assertions.

## Produces
Measured recall delta and paired-bootstrap confidence intervals quantifying prompt specialization efficacy.

## When applied
Applied during offline agent-vs-baseline evaluation before graduating an agent system prompt to CI.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
Specialization value represents the empirical recall lift achieved by an agent's domain-specific instructions, role framing, and prompt tuning compared to a naive, generic prompt executed against identical fixtures and model versions. In rjm's eval discipline, measuring specialization value prevents prompt engineers from maintaining complex, untested agent prompts without evidence that the specialization actually improves performance.
