---
package: rjm
name: _invoke_gh_once
slug: invoke-gh-once
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/gh_retry_helpers.py, sha256: c89bd3c3d70fed06aa06c88d1d2d6cadbaca7930afc4ebab86ca53f2a1013051}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _invoke_gh_once

## Definition — verbatim
(used, not defined)

> "def _invoke_gh_once(arguments: list[str], timeout: float) -> CommandResult:" — scripts/gh_retry_helpers.py:154

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/gh_retry_helpers.py | 154 | defines | Executes a single subprocess call to the gh CLI with timeout handling and specialized PR diff rewrites. |

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
`_invoke_gh_once` is a Python helper executing a single GitHub CLI invocation with timeout and diff optimization rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
