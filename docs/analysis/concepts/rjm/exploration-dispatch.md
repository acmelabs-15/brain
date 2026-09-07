---
package: rjm
name: EXPLORATION DISPATCH
slug: exploration-dispatch
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

# EXPLORATION DISPATCH

## Definition — verbatim
> "EXPLORATION DISPATCH" — scripts/incoherence.py:171

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 171 | defined here | Step 3 action instruction launching parallel sub-agents for each selected consistency dimension. |

## Consumes
List of selected dimensions and the dimension exploration task prompt template.

## Produces
Parallel invocation of lightweight exploration sub-agents across dimensions.

## When applied
Executed during Step 3 of the Detection Phase after dimensions are selected.

## Sub-concepts
none

## Part of
detection-phase

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Dispatch technique that launches parallel sub-agents in a single message, assigning each agent to explore one consistency dimension independently to maximize recall and speed.
