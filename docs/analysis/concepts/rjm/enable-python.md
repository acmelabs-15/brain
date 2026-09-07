---
package: rjm
name: ENABLE_PYTHON
slug: enable-python
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/verify_code_env.py, sha256: 17870be01d0b77be3b7a8784741d5c900e9a24f1d4f13984ea71f1dad8d0e963}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ENABLE_PYTHON

## Definition — verbatim
(used, not defined)

> "ENABLE_PYTHON" — scripts/ci/verify_code_env.py:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/verify_code_env.py | 117 | used here | Environment variable flag inspected to determine if Python tooling verification should be performed. |

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
A CI configuration environment variable (`ENABLE_PYTHON`) toggling Python toolchain verification, classified as `name-only` per D-023.
