---
package: rjm
name: push-lock-historical
slug: push-lock-historical
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_push_lock_paths.py, sha256: 62161c502e0452a137d97f1f04b7777353fb9ed170994965ff1a78fa03e8473e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# push-lock-historical

## Definition — verbatim
(used, not defined)

> "carrying the token ``push-lock-historical`` on a line inside it." — scripts/validation/check_push_lock_paths.py:16

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_paths.py | 16 | defined here | Opt-out marker token allowing retrospective or audit prose to quote obsolete push-lock recipes without triggering validation errors. |

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
`push-lock-historical` is an opt-out marker token string used in Markdown blocks rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
