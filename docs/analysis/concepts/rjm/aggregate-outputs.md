---
package: rjm
name: aggregate_outputs
slug: aggregate-outputs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflow/parallel.py, sha256: 3fb8b63e69e35f7930303a658d1c962b584f8cfb364cafc2217d7b9996798353}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# aggregate_outputs

## Definition — verbatim
(used, not defined)

> "def aggregate_outputs(" — scripts/workflow/parallel.py:277

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/parallel.py | 277 | defined here | Method that combines outputs from parallel steps according to MERGE, VOTE, or ESCALATE strategies. |

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
defects: doc-drift

## Design notes
A Python method on `ParallelStepExecutor` in `scripts/workflow/parallel.py` that combines outputs using configured aggregation strategies, classified as name-only per D-023.
