---
package: rjm
name: BLOCK_MESSAGE
slug: block-message
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_push_lock_before_commit.py, sha256: 539d0cd22f8e575f3f1c1f6b32d9b19b5d499c93288c944020b6b69e026b1e44}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BLOCK_MESSAGE

## Definition — verbatim
(used, not defined)

> "BLOCK_MESSAGE = (" — scripts/validation/check_push_lock_before_commit.py:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 73 | defined here | Constant string template emitted to stderr when a commit is blocked by an in-flight branch push lock. |

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
`BLOCK_MESSAGE` is a Python string template constant identifier in `check_push_lock_before_commit.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
