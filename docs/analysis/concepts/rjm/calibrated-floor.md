---
package: rjm
name: calibrated floor
slug: calibrated-floor
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/agent-design-principles.md, sha256: fd7551ca1f0c6ae2760203c6a390b6528ec36dffe80e7f5238facc7c69ee2ce0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# calibrated floor

## Definition — verbatim
> "An eval-derived floor (the lowest model tier at which this project's evals still pass) is a defensible number, not a guess." — .agents/governance/agent-design-principles.md:49

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/agent-design-principles.md | 37 | defined here | Defines the minimum model capability threshold below which instructions fail and observable symptoms (literalism, overthinking) appear. |

## Consumes
Benchmark evaluation scores and observable agent behavior diagnostics.

## Produces
Detection of model under-capability requiring investigation or model pin adjustment.

## When applied
Monitored when agents exhibit excessive literalism, plan drift, or loss of multi-step reasoning.

## Sub-concepts
none

## Part of
frontier-model-execution

## Implementation status
defects: other

## Design notes
The lower intelligence bound for executing rjm workflows. When a model operates below this floor, constrain-down guardrails fail to prevent brittle, overthought, or degraded execution, signaling that the underlying LLM lacks the assumed reasoning capacity.
