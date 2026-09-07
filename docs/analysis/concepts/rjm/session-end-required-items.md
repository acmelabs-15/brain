---
package: rjm
name: SESSION_END_REQUIRED_ITEMS
slug: session-end-required-items
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-060-rework-warning-session-log-persistence.md, sha256: ac709bb1d9ab072581f6f1fcaa31e89f028312a0f28c3123ce47edfb84604826}
  - {path: scripts/validate_session_json.py, sha256: 180dc59dc0fd7cf7e493f5f73d77fbe557de0867b908018276bc92e4288bdf39}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SESSION_END_REQUIRED_ITEMS

## Definition — verbatim
(used, not defined)

> "SESSION_END_REQUIRED_ITEMS = frozenset(" — scripts/validate_session_json.py:150

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-060-rework-warning-session-log-persistence.md | 42 | used here | Cited as the fixed set of mandatory items that validate_session_json.py verifies |
| scripts/validate_session_json.py | 150 | defined here | Defined as a frozenset constant containing mandatory session-end compliance keys |

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
defects: doc-drift, internal-contradiction, missing-path

## Design notes
SESSION_END_REQUIRED_ITEMS is a Python frozenset constant identifier specifying mandatory session-end checklist fields in scripts/validate_session_json.py, classified as name-only per D-023.
