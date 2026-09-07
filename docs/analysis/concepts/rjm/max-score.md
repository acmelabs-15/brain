---
package: rjm
name: MAX_SCORE
slug: max-score
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_e2e_delivery_core.py, sha256: f7aeb40a86977036c93513fb424b27e9249ddcde90e7e4dc92fdd0097340ccab}
  - {path: scripts/eval/eval-e2e-delivery.py, sha256: def5027d65244270d65f2bd9e0329765678c2808d15206622d8ee4c791c3b064}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# MAX_SCORE

## Definition — verbatim
(used, not defined)

> "MAX_SCORE: int = sum(RUBRIC_AXES.values())" — scripts/eval/_e2e_delivery_core.py:45

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_e2e_delivery_core.py | 45 | defined here | Constant calculating the maximum possible score across all rubric axes (11 points). |
| scripts/eval/eval-e2e-delivery.py | 51 | used here | Imported constant used in the CLI runner for score reporting and normalization. |

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
An integer constant identifier in `_e2e_delivery_core.py` representing the maximum attainable evaluation score, classified as `name-only` per D-023.
