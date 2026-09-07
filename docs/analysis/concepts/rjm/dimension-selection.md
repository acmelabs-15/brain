---
package: rjm
name: DIMENSION SELECTION
slug: dimension-selection
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

# DIMENSION SELECTION

## Definition — verbatim
> "DIMENSION SELECTION" — scripts/incoherence.py:156

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/incoherence.py | 156 | defined here | Step 2 action instruction selecting abstract consistency dimensions based on surveyed info sources. |

## Consumes
Codebase survey results from Step 1 and the abstract dimension catalog (categories A–K).

## Produces
List of selected consistency dimensions with rationale.

## When applied
Executed during Step 2 of the Detection Phase following the codebase survey.

## Sub-concepts
none

## Part of
detection-phase

## Implementation status
defects: missing-path, doc-drift, internal-contradiction, orphan

## Design notes
Selection technique that matches available repository information sources against the 11 abstract consistency categories without opening detailed files or creating ad-hoc domain dimensions.
