---
package: rjm
name: validate_session_json.py
slug: validate-session-json-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-060-rework-warning-session-log-persistence.md, sha256: ac709bb1d9ab072581f6f1fcaa31e89f028312a0f28c3123ce47edfb84604826}
  - {path: scripts/AGENTS.md, sha256: c36cd367a4f2c02dd84b708c93bcef1a0b76d811885f9f768ae4a98ac70cdc5a}
  - {path: scripts/README.md, sha256: 551daff8daf63618ebc955fce182f2eddd5e1bc7d87ee330de6f523d06fed2c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate_session_json.py

## Definition — verbatim
(used, not defined)

> "### validate_session_json.py" — scripts/AGENTS.md:240

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-060-rework-warning-session-log-persistence.md | 42 | used here | Cited as the validator that checks required session-end items while ignoring unknown optional fields |
| scripts/AGENTS.md | 240 | defined here | used here | Section heading documenting the validation rules, roles, and schema checks of the validator |
| scripts/README.md | 40 | defined here | Section heading introducing validate_session_json.py as session protocol compliance validator |

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
defects: doc-drift, internal-contradiction, missing-path, orphan

## Design notes
validate_session_json.py is the file path and script identifier for the session JSON log compliance validator CLI, classified as name-only per D-023.
