---
package: rjm
name: BROAD SWEEP
slug: broad-sweep
kind: technique
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

# BROAD SWEEP

## Definition — verbatim
> "BROAD SWEEP [SUB-AGENT]" — scripts/incoherence.py:200

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 200 | defined here | Step 4 action instruction for sub-agents to conduct high-recall broad search for potential incoherences. |

## Consumes
Assigned consistency dimension and initial search strategy across documentation, code, configs, and tests.

## Produces
Preliminary list of potential conflicting locations (Location A and Location B) and tracked search paths.

## When applied
Executed during Step 4 of the Detection Phase by exploration sub-agents.

## Sub-concepts
none

## Part of
detection-phase

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
High-recall exploration technique where sub-agents cast a wide net across repository files to capture any potential incoherences while deferring precision filtering to later steps.
