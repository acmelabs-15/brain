---
package: rjm
name: RUN_RECORD_SCHEMA_VERSION
slug: run-record-schema-version
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/_eval_agent_types.py, sha256: 30e28546d4d1e89c23a330e6abba1b6ce9dd302924e96cef1dc134516b3b163a}
  - {path: scripts/eval/_run_persistence.py, sha256: facf65b38609c84ab0dd4019a46a231303183d928a8e43daa25d4f57de3c47c8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# RUN_RECORD_SCHEMA_VERSION

## Definition — verbatim
(used, not defined)

> "RUN_RECORD_SCHEMA_VERSION: int = 2" — scripts/eval/_eval_agent_types.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_eval_agent_types.py | 15 | defined here | Constant defining the schema version for serialized RunRecord artifacts. |
| scripts/eval/_run_persistence.py | 49 | used here | Imported schema version constant used when persisting and reading run records. |

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
An integer schema version constant identifier in `_eval_agent_types.py` tracking serialized evaluation run record format compatibility, classified as `name-only` per D-023.
