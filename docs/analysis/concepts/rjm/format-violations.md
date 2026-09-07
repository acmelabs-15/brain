---
package: rjm
name: _format_violations
slug: format-violations
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_build_gates.py, sha256: df1360e6ff865be7eecb97ece1f78d0979415b85c87ea4e19cf9b693ee511102}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _format_violations

## Definition — verbatim
(used, not defined)

> "def _format_violations(violations: list[GateViolation]) -> str:" — scripts/validation/check_build_gates.py:176

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_build_gates.py | 176 | defined here | Formats gate violation objects into human-readable multi-line terminal output. |

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
defects: missing-path

## Design notes
`_format_violations` is an internal Python helper function identifier in `check_build_gates.py` formatting diagnostic output strings rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
