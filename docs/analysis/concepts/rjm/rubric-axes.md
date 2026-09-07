---
package: rjm
name: RUBRIC_AXES
slug: rubric-axes
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_e2e_delivery_core.py, sha256: f7aeb40a86977036c93513fb424b27e9249ddcde90e7e4dc92fdd0097340ccab}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RUBRIC_AXES

## Definition — verbatim
(used, not defined)

> "RUBRIC_AXES: dict[str, int] = {" — scripts/eval/_e2e_delivery_core.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_e2e_delivery_core.py | 38 | defined here | Dictionary constant defining the 5 scoring axes and their maximum point weights. |

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
A Python dictionary constant identifier in `_e2e_delivery_core.py` defining evaluation rubric point maximums, classified as `name-only` per D-023.
