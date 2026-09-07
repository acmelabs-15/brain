---
package: rjm
name: sel_consultations
slug: sel-consultations
kind: artifact
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/README.md, sha256: 0f391cb999a2e1691aac7a3e4e5464b79e3edfa407b876b8496bb3723c965df5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# sel_consultations

## Definition — verbatim
> "is never missing exactly where the answer is nonzero. `sel_consultations` is" — scripts/eval/README.md:1026

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/README.md | 1026 | defined here | Running total of consultations consumed against the held-out selection group across optimization steps. |

## Consumes
Held-out selection ledger lock and cumulative consultation count.

## Produces
Running total integer of consultations spent against the held-out selection group.

## When applied
Recorded in gate verdicts when the selection group ledger is successfully locked.

## Sub-concepts
none

## Part of
held-out-gated-optimization

## Implementation status
defects: missing-path, doc-drift, script-bug

## Design notes
A cumulative accounting metric tracking the running total of gate consultations spent against a specific held-out selection partition, enforcing budget caps across sequential optimization steps.
