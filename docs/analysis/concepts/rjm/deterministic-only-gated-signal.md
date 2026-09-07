---
package: rjm
name: deterministic-only gated signal
slug: deterministic-only-gated-signal
kind: gate
package_phase: cross-phase
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

# deterministic-only gated signal

## Definition — verbatim
> "It produces a deterministic-only gated signal, supplemented by an optional advisory LLM-as-judge sidecar." — .agents/architecture/ADR-058-agent-eval-discipline.md:53

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 53 | defined here | Architectural decision mandating that gating decisions rely exclusively on deterministic assertion outcomes. |

## Consumes
Structured agent outputs, token extraction regexes, and deterministic assertion rules.

## Produces
Automated pass/fail verdicts and blocking signals free from non-deterministic LLM variance.

## When applied
Enforced during evaluation harness executions and CI gating checks to determine pipeline pass/fail status.

## Sub-concepts
deterministic-scorable-output

## Part of
agent-vs-baseline-efficacy, agent-eval-discipline

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
An architectural requirement in ADR-058 establishing that pipeline gates must rely exclusively on deterministic checks (token matches, regex extraction, error counts, statistical bounds) rather than non-deterministic LLM-as-judge scores. This ensures that CI signals remain objective, reproducible, and impervious to evaluator model drift.
