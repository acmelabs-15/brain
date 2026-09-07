---
package: rjm
name: _validate_assertions
slug: validate-assertions
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

# _validate_assertions

## Definition — verbatim
(used, not defined)

> "def _validate_assertions(payload: dict[str, Any], line_context: str) -> list[AssertionResult]:" — scripts/eval/_run_persistence.py:195

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/_run_persistence.py | 195 | defined here | Validates raw assertions list from record payload and converts items into typed `AssertionResult` objects. |

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
_validate_assertions is an internal schema validation helper for assertion results rather than an agent lifecycle concept.
