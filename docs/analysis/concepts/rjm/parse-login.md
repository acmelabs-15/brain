---
package: rjm
name: _parse_login
slug: parse-login
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/diagnose_copilot_cli.py, sha256: d05040c1d6bdaab669157a383c9f470e3cbc1261e0cb4974c89666ee59ec0b39}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _parse_login

## Definition — verbatim
(used, not defined)

> "def _parse_login(auth_response: str) -> str:" — scripts/ci/diagnose_copilot_cli.py:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/diagnose_copilot_cli.py | 78 | defined here | Helper function parsing GitHub user login string from an auth status JSON response. |

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
`_parse_login` is an internal Python helper function identifier extracting the username from GitHub auth JSON payloads rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
