---
package: rjm
name: skip_cache_reason
slug: skip-cache-reason
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_common/cache_guard.py, sha256: 831609daa3a9693507ede9335562af1c3b2f85fc21491bcca96471cceef458c6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# skip_cache_reason

## Definition — verbatim
(used, not defined)

> "def skip_cache_reason(verdict: str, infra_failure: str) -> str | None:" — scripts/ai_review_common/cache_guard.py:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_common/cache_guard.py | 68 | defined here | Function determining reason why cache should be bypassed based on verdict or infrastructure failure. |

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
skip_cache_reason is a Python function identifier returning cache-bypass explanation strings rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
