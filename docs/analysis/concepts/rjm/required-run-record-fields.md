---
package: rjm
name: _REQUIRED_RUN_RECORD_FIELDS
slug: required-run-record-fields
kind: name-only
package_phase: rjm:test
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_run_persistence.py, sha256: facf65b38609c84ab0dd4019a46a231303183d928a8e43daa25d4f57de3c47c8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _REQUIRED_RUN_RECORD_FIELDS

## Definition — verbatim
(used, not defined)

> "_REQUIRED_RUN_RECORD_FIELDS = (" — scripts/eval/_run_persistence.py:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_run_persistence.py | 95 | defined here | Tuple of field names required on every run record payload during JSON deserialization. |

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
_REQUIRED_RUN_RECORD_FIELDS is an internal Python tuple constant specifying mandatory run record fields rather than an agent lifecycle concept.
