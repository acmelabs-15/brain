---
package: rjm
name: _record_key
slug: record-key
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

# _record_key

## Definition — verbatim
(used, not defined)

> "def _record_key(record: RunRecord) -> tuple[str, str, int]:" — scripts/eval/_run_persistence.py:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_run_persistence.py | 115 | defined here | Helper function returning the `(fixture_id, variant, run_index)` identity triple for a `RunRecord`. |

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
_record_key is an internal Python helper function computing record identity triples rather than an agent lifecycle concept.
