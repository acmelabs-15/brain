---
package: rjm
name: resolve_deadline
slug: resolve-deadline
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/establish_ai_review_deadline.py, sha256: 54901cf4d6d02196ebc876a3be82c92f9e8bb550d804f5e1027d13daa35a2a0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# resolve_deadline

## Definition — verbatim
(used, not defined)

> "def resolve_deadline(env: Mapping[str, str], *, now: float) -> float:" — scripts/ci/establish_ai_review_deadline.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/establish_ai_review_deadline.py | 21 | defined here | Function resolving the absolute deadline timestamp for AI review action execution. |

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
A helper function computing execution deadline timestamps from environment variables rather than an operational lifecycle concept.
