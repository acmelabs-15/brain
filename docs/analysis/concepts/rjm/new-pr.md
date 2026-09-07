---
package: rjm
name: new_pr
slug: new-pr
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/new_validated_pr.py, sha256: e7f98eabae5a880bb1b95d1fe22e8e4c7af472ad07daac743e937c77d661d452}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# new_pr

## Definition — verbatim
(used, not defined)

> "Wrapper around the `new_pr` skill script that provides a convenient interface" — scripts/new_validated_pr.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/new_validated_pr.py | 4 | used here | Referenced in script docstring as the underlying GitHub skill script wrapped by `new_validated_pr.py`. |

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
A script and skill command identifier (`new_pr`) for PR creation rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
