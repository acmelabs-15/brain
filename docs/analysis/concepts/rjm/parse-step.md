---
package: rjm
name: _parse_step
slug: parse-step
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/workflow/loader.py, sha256: 2c6b6b29ceef95cd8be24b14975396f72bbc4972f11fb49fcf5c21dcce6e80cd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# _parse_step

## Definition — verbatim
(used, not defined)

> "def _parse_step(data: Any) -> WorkflowStep:  # noqa: ANN401" — scripts/workflow/loader.py:74

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/workflow/loader.py | 74 | defined here | Internal helper function that deserializes a raw dictionary into a `WorkflowStep` instance with typed fields. |

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
defects: doc-drift, orphan

## Design notes
An internal Python helper function in `scripts/workflow/loader.py` that converts a step dictionary into a `WorkflowStep` object, classified as name-only per D-023.
