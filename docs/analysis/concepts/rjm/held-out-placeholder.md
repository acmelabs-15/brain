---
package: rjm
name: _HELD_OUT_PLACEHOLDER
slug: held-out-placeholder
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/eval/optimize-artifact.py, sha256: 0df36122ac74e0681e0caeb878ed07ab01ce7dea50d1881e6bd1f7c4e998b765}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _HELD_OUT_PLACEHOLDER

## Definition — verbatim
(used, not defined)

> "_HELD_OUT_PLACEHOLDER = \"<held-out group>\"" — scripts/eval/optimize-artifact.py:1481

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/eval/optimize-artifact.py | 1481 | defined here | Constant string used to redact holdout partition key digests from error messages and logs. |

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
defects: doc-drift

## Design notes
`_HELD_OUT_PLACEHOLDER` is an internal string constant used to scrub sensitive holdout group keys from error messages and logs rather than an SDLC lifecycle concept.
