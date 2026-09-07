---
package: rjm
name: _uses_lefthook
slug: uses-lefthook
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_git_hook_health.py, sha256: 994cbeca1efab1c3e1fa9fac5a2e1f7bf19447ebc27da86cf4925a6ef85ffee2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _uses_lefthook

## Definition — verbatim
(used, not defined)

> "def _uses_lefthook(repo_root: Path) -> bool:" — scripts/validation/check_git_hook_health.py:124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_git_hook_health.py | 124 | defined here | Helper function checking whether the repository contains any recognized lefthook configuration file. |

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
_uses_lefthook is an internal Python helper function identifier checking for lefthook config files rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
