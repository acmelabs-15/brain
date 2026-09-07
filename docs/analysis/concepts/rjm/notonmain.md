---
package: rjm
name: notOnMain
slug: notonmain
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_session_json.py, sha256: 180dc59dc0fd7cf7e493f5f73d77fbe557de0867b908018276bc92e4288bdf39}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# notOnMain

## Definition — verbatim
(used, not defined)

> "        \"notOnMain\"," — scripts/validate_session_json.py:145

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 145 | used here | Specified as a required session-start checklist item in SESSION_START_REQUIRED_ITEMS preventing direct work on main. |

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
defects: doc-drift, missing-path

## Design notes
`notOnMain` is a session-start checklist key identifier in `scripts/validate_session_json.py` asserting that the current session is not executing directly on the default main branch rather than an independent lifecycle concept.
