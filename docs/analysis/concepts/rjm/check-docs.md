---
package: rjm
name: check_docs
slug: check-docs
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

# check_docs

## Definition — verbatim
(used, not defined)

> "def check_docs(" — scripts/validation/check_python3_entrypoints.py:233

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_python3_entrypoints.py | 233 | defined here | Scanner function parsing documentation files for bare python3 script invocations. |

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
`check_docs` is a Python function in `check_python3_entrypoints.py` that scans documentation files for bare python3 script invocations and detects third-party dependency imports, classified as `kind: name-only` per D-023.
