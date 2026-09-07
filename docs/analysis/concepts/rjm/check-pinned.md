---
package: rjm
name: _check_pinned
slug: check-pinned
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_workflows.py, sha256: 79f3e393f6cbe540ef6a3d5b2c4399226ed9dde0aa7ef2f5b5cc338ba9ebbb22}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _check_pinned

## Definition — verbatim
(used, not defined)

> "def _check_pinned(self, file_path: Path, where: str, uses: object) -> None:" — scripts/validate_workflows.py:166

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 166 | defined here | Helper method validating that a 'uses' directive points to a local path or a 40-hex commit SHA. |

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
`_check_pinned` is an internal Python helper method identifier verifying that an action reference uses a 40-hex SHA or local path rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
