---
package: rjm
name: Go/no-go gate
slug: go-no-go-gate
kind: gate
package_phase: rjm:chaos-experiment
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md, sha256: 6f709db1093b8f67931da79d032f5171bdf85aabad2deba67d29e9350156983f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Go/no-go gate

## Definition — verbatim
> "- **Go/no-go gate**: Error budget status determines whether experiments proceed" — .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/chaos-experiment/references/slo-sli-sla-reference.md | 60 | defined here | Decision gate establishing that current error budget status determines whether chaos experiments proceed. |

## Consumes
Current remaining error budget balance and estimated experiment risk profile.

## Produces
Binary authorization verdict permitting or blocking chaos experiment execution.

## When applied
Evaluated immediately prior to executing any chaos experiment.

## Sub-concepts
none

## Part of
chaos-experiment

## Implementation status
defects: missing-path

## Design notes
The Go/no-go gate protects production reliability by prohibiting intentional failure injection when a service's error budget is exhausted or near depletion. In RJM, it ensures chaos testing only takes place when adequate reliability headroom exists.
