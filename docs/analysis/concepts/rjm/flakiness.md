---
package: rjm
name: flakiness
slug: flakiness
kind: technique
package_phase: rjm:Test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# flakiness

## Definition — verbatim
> "Flakiness flag: per-fixture pass-rate variance > 0 across identical SHA runs (AC-10)" — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:275

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md | 275 | defined here | Specified as a boolean report field flagging non-zero pass-rate variance across repeated runs at temperature=0. |

## Consumes
Pass rates recorded across N=3 repeated runs on identical prompt and fixture content SHAs.

## Produces
A boolean flag (`true`/`false`) in evaluation reports indicating non-deterministic behavior.

## When applied
Evaluated during report aggregation when prompt testing is run at temperature=0.

## Sub-concepts
none

## Part of
report, reportaggregator

## Implementation status
clean

## Design notes
`flakiness` is a stability metric and quality gate in rjm's evaluation harness. Because evaluation runs execute at temperature=0, any variance in assertion pass rates across repeated runs with identical prompt and fixture SHAs indicates non-deterministic model behavior or unpinned environmental dependencies, triggering the flakiness flag to invalidate reliable prompt comparisons.
