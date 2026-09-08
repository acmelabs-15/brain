---
package: rjm
name: _added_session_paths
slug: added-session-paths
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

# _added_session_paths

## Definition — verbatim
(used, not defined)

> "def _added_session_paths(" — scripts/validation/session_scope.py:143

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/session_scope.py | 143 | defined here | Helper function parsing git diff output to identify newly added session log files. |

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
An internal Python helper function identifying newly added session log paths from git diffs rather than an agent lifecycle concept, classified as name-only per D-023.
