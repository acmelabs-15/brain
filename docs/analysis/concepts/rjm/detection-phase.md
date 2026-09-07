---
package: rjm
name: DETECTION PHASE
slug: detection-phase
kind: phase
package_phase: rjm:Code Quality
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/incoherence.py, sha256: 8db97228fdf182875839e2f43c3b7c510a26219f51ed1c1e212e01307cc8ae9e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DETECTION PHASE

## Definition — verbatim
> "DETECTION PHASE (Steps 1-13):" — scripts/incoherence.py:12

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 12 | defined here | Heading defining the first 13 steps of the incoherence detection workflow. |

## Consumes
Repository files, top-level orientation context, and selected abstract consistency dimensions.

## Produces
Survey findings, candidate incoherences, deep-dive verification results, and an Incoherence Report.

## When applied
Executed during steps 1 through 13 of the incoherence workflow to identify inconsistencies prior to human reconciliation.

## Sub-concepts
codebase-survey, dimension-selection, exploration-dispatch, broad-sweep, coverage-check

## Part of
incoherence-detector

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
The initial multi-step phase of the incoherence detector workflow, running survey, dimension selection, parallel broad sweeps, candidate synthesis, deep dives, and final report generation.
