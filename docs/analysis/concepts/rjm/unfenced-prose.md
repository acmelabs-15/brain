---
package: rjm
name: unfenced prose
slug: unfenced-prose
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

# unfenced prose

## Definition — verbatim
(used, not defined)

> "Return (start, end) indices for each run of unfenced prose, end exclusive." — scripts/validation/check_push_lock_paths.py:129

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_paths.py | 129 | used here | Describes runs of Markdown paragraph text outside code fences scanned for push-lock path prescriptions. |

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
`unfenced prose` is a descriptive term for Markdown paragraph text outside code blocks rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
