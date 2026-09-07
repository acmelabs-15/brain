---
package: rjm
name: _DEFAULT_DOCS
slug: default-docs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_python3_entrypoints.py, sha256: 3c912c65a5f3222d8997fcf46364951669a7be2c7b1b2131e014b30899c34cb6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _DEFAULT_DOCS

## Definition — verbatim
(used, not defined)

> "_DEFAULT_DOCS: list[str] = [" — scripts/validation/check_python3_entrypoints.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_python3_entrypoints.py | 54 | defined here | Default list of documentation file paths scanned for bare python3 invocations. |

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
defects: orphan

## Design notes
`_DEFAULT_DOCS` is an internal Python list constant specifying default documentation target files for entrypoint validation, classified as `kind: name-only` per D-023.
