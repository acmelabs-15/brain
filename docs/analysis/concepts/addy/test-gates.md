---
package: addy
name: test gates
slug: test-gates
kind: gate
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/cases/shipping-and-launch.json, sha256: 951445b40249b014e0daab37343fdbd18e9bc54fd3b0b8f30d7260fda6931436}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# test gates

## Definition — verbatim
(used, not defined)
> "An evidence-based no-go or hold decision that identifies the required rollback, monitoring, and test gates" — evals/cases/shipping-and-launch.json:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/cases/shipping-and-launch.json | 45 | used here | Specified in evaluation expected output as essential criteria required for a release decision. |

## Consumes
Test suites (unit, integration, end-to-end) and automated verification pipelines.

## Produces
Pass/fail verdicts that gate progression to subsequent release stages.

## When applied
Enforced in CI and during pre-launch assessments prior to any deployment decision.

## Sub-concepts
none

## Part of
pre-launch-checklist, shipping-and-launch

## Implementation status
clean

## Design notes
`test gates` are mandatory automated quality checkpoints that code must pass before moving across lifecycle phases. In the shipping phase, passing end-to-end and regression test gates is a strict prerequisite for release approval. Without uncompromised test gates, broken builds and regressions slip into production under the guise of urgent delivery.
