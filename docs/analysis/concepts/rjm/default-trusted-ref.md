---
package: rjm
name: _DEFAULT_TRUSTED_REF
slug: default-trusted-ref
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/assert_trusted_smoke_context.py, sha256: 0a355565c4c6ba7affa91fe058e64a1dec6c1053f3744814c618994a3bd0796a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _DEFAULT_TRUSTED_REF

## Definition — verbatim
(used, not defined)

> "_DEFAULT_TRUSTED_REF = \"refs/heads/main\"" — scripts/validation/assert_trusted_smoke_context.py:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/assert_trusted_smoke_context.py | 43 | defined here | Constant defining the default trusted git reference for smoke test execution contexts. |

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
A module-level configuration constant identifier in `assert_trusted_smoke_context.py` holding the default trusted Git reference branch name, classified as `name-only` per D-023 because it is a Python code identifier rather than a development lifecycle concept.
