---
package: rjm
name: check_push_not_in_flight
slug: check-push-not-in-flight
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

# check_push_not_in_flight

## Definition — verbatim
(used, not defined)

> "def check_push_not_in_flight(repo_root: Path) -> tuple[bool, str]:" — scripts/validation/check_push_lock_before_commit.py:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_push_lock_before_commit.py | 148 | defined here | Primary check function determining whether a push is currently in flight for the branch, returning allowed boolean and message. |

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
`check_push_not_in_flight` is a Python function entrypoint identifier implementing the commit-time push lock probe rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
