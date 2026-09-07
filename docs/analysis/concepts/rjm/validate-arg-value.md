---
package: rjm
name: _validate_arg_value
slug: validate-arg-value
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/mcp_cli/wrapper.py, sha256: e26e2aaec24230446e7e9c5bfe06ae1888d4272a50de3ca8c93295dd002715e1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _validate_arg_value

## Definition — verbatim
> "def _validate_arg_value(key: str, value: str) -> None:" — scripts/mcp_cli/wrapper.py:47

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/mcp_cli/wrapper.py | 47 | defined here | Helper function validating CLI argument values against injection attacks by rejecting dash prefixes and NUL bytes. |

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
`_validate_arg_value` is an internal security validation function in `scripts/mcp_cli/wrapper.py` preventing CLI argument injection attacks rather than a lifecycle concept, classified as `name-only` per D-023.
