---
package: rjm
name: PARSE_ERROR
slug: parse-error
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_e2e_delivery_core.py, sha256: f7aeb40a86977036c93513fb424b27e9249ddcde90e7e4dc92fdd0097340ccab}
  - {path: scripts/eval/eval_skill_router.py, sha256: 3aa5d1334db711e7d16cda841dd34bdde659def740f1f217a3ee4055d8a30b70}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PARSE_ERROR

## Definition — verbatim
(used, not defined)

> "PARSE_ERROR = \"PARSE_ERROR\"" — scripts/eval/_e2e_delivery_core.py:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_e2e_delivery_core.py | 62 | defined here | Sentinel constant returned when judge response JSON cannot be extracted or parsed. |
| scripts/eval/eval_skill_router.py | 331 | defined here | Fallback return string when a candidate skill cannot be resolved from the router output. |

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
A string sentinel constant identifier in `_e2e_delivery_core.py` and `eval_skill_router.py` signaling model output parsing failures, classified as `name-only` per D-023.
