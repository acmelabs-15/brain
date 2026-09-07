---
package: rjm
name: flakiness gate
slug: flakiness-gate
kind: gate
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

# flakiness gate

## Definition — verbatim
> "#### AC-10: Reproducibility / flakiness gate {#req-ac10}" — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md | 154 | defines | Verification gate checking pass-rate variance across repeated runs to halt when results are nondeterministic. |

## Consumes
Run records, repeat evaluation passes, per-fixture variance statistics.

## Produces
`flakiness` flag, flaky fixture exclusions, or `halt-due-to-flakiness` verdict.

## When applied
During eval report aggregation to determine whether the evaluation methodology itself is sufficiently stable.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift, missing-path

## Design notes
A quality gate in the evaluation harness that detects non-deterministic prompt and model behavior across repeated runs, preventing unstable benchmarks from graduating to CI or biasing decisions.
