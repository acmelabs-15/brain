---
package: rjm
name: Re-Baseline Cadence
slug: re-baseline-cadence
kind: name-only
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

# Re-Baseline Cadence

## Definition — verbatim
(used, not defined)

> "Re-Baseline Cadence" — .agents/architecture/ADR-058-agent-eval-discipline.md:204

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-058-agent-eval-discipline.md | 204 | defined here | ADR section heading detailing triggers for re-running offline evaluations (model bumps, quarterly cadence, prompt edits) |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, internal-contradiction

## Design notes
Re-Baseline Cadence is an architectural decision record section heading establishing schedules and triggers for re-evaluating baseline models rather than a lifecycle concept.
