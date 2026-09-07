---
package: rjm
name: _coerce_record
slug: coerce-record
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_run_rollup_core.py, sha256: 7b724d731f03e48a368c4833f20009d8afbd8265de0771c03c225831de8bcbe6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _coerce_record

## Definition — verbatim
(used, not defined)

> "def _coerce_record(payload: dict[str, Any]) -> _CoercedRecord | None:" — scripts/eval/_run_rollup_core.py:186

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_run_rollup_core.py | 186 | defined here | Validates and coerces raw JSON dictionary entries into typed _CoercedRecord instances. |

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
_coerce_record is an internal validation function coercing raw JSON into typed records with graceful failure rather than a lifecycle concept.
