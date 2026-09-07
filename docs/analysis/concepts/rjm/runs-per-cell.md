---
package: rjm
name: runs_per_cell
slug: runs-per-cell
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/eval-e2e-delivery.py, sha256: def5027d65244270d65f2bd9e0329765678c2808d15206622d8ee4c791c3b064}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# runs_per_cell

## Definition — verbatim
(used, not defined)

> "\"runs_per_cell\": args.runs," — scripts/eval/eval-e2e-delivery.py:192

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/eval-e2e-delivery.py | 192 | defined here | Output JSON key indicating the number of evaluation repetitions executed per (agent, fixture) cell. |

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
clean

## Design notes
A JSON output property key (`runs_per_cell`) in `eval-e2e-delivery.py` reporting run repetition configuration, classified as `name-only` per D-023.
