---
package: rjm
name: session_log_is_new
slug: session-log-is-new
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/session_scope.py, sha256: 4681b6ffbc1a872813cfe4b75e2a2382b925a6dbe1313ac9555ad3ea478fb830}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# session_log_is_new

## Definition — verbatim
(used, not defined)

> "Return whether ``path`` is added by this branch rather than edited." — scripts/validation/session_scope.py:388

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/session_scope.py | 387 | defined here | Predicate determining whether a single session log path represents a new log addition versus an edit. |

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
A Python predicate function in `session_scope.py` distinguishing new session log additions from edits, classified as name-only per D-023.
