---
package: rjm
name: _CONTEXT_REFERENCE
slug: context-reference
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

# _CONTEXT_REFERENCE

## Definition — verbatim
(used, not defined)

> "_CONTEXT_REFERENCE: re.Pattern[str] = re.compile(" — scripts/validate_workflows.py:338

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 338 | defined here | Regular expression pattern matching context references within GitHub Actions expressions regardless of wrapping functions. |

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
`_CONTEXT_REFERENCE` is an internal Python regex pattern in `validate_workflows.py` extracting context references from workflow expressions rather than an operational lifecycle concept, classified as `kind: name-only` per D-023.
