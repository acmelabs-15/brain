---
package: rjm
name: markdownLintRun
slug: markdownlintrun
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

# markdownLintRun

## Definition — verbatim
(used, not defined)

> "        \"markdownLintRun\"," — scripts/validate_session_json.py:155

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_session_json.py | 155 | used here | Specified as a required session-end checklist item in SESSION_END_REQUIRED_ITEMS. |

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
`markdownLintRun` is a session-end checklist key identifier in `scripts/validate_session_json.py` recording whether markdown linting was executed during the session rather than an independent lifecycle concept.
