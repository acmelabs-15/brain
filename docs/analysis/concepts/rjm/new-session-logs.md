---
package: rjm
name: new_session_logs
slug: new-session-logs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/checks_tooling.py, sha256: e2bb66c5604fcd44f1b055a511bef6ebd5e8992ae473bad34d466c74b96ac738}
  - {path: scripts/validation/session_scope.py, sha256: 4681b6ffbc1a872813cfe4b75e2a2382b925a6dbe1313ac9555ad3ea478fb830}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# new_session_logs

## Definition — verbatim
(used, not defined)

> "def new_session_logs(" — scripts/validation/session_scope.py:376

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/checks_tooling.py | 40 | used here | Imported to identify new session logs requiring markdownlint validation. |
| scripts/validation/session_scope.py | 376 | defined here | Function returning the subset of session log paths being added rather than edited on the active branch. |

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
defects: doc-drift, other, exit-code-mismatch

## Design notes
`new_session_logs` is a Python function identifier in `session_scope.py` filtering newly added session log paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
