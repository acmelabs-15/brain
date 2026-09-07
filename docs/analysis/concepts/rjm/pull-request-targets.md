---
package: rjm
name: pull_request_targets
slug: pull-request-targets
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/pull_request_targets.py, sha256: b77350e73d1b4850cd60902799c536ed7abc7caf2899059daf667c81687fe500}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pull_request_targets

## Definition — verbatim
(used, not defined)

> "def pull_request_targets(" — scripts/github_core/pull_request_targets.py:106

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/pull_request_targets.py | 106 | defined here | Helper function resolving a sequence of pull request numbers into target descriptors. |

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
defects: script-bug

## Design notes
A Python helper function in `pull_request_targets.py` that resolves a sequence of pull request numbers into target descriptors rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
