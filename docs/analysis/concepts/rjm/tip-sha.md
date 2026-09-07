---
package: rjm
name: _tip_sha
slug: tip-sha
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/detect_unlanded_commits.py, sha256: 15fdb7d7a4802f2ef25f9db95d4751ef67ffee7a4738f3305770117ab0398371}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _tip_sha

## Definition — verbatim
(used, not defined)

> "def _tip_sha(branch: str, repo: str) -> str:" — scripts/maintenance/detect_unlanded_commits.py:60

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_unlanded_commits.py | 60 | defined here | Helper resolving the current tip commit SHA for a branch via git rev-parse. |

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
defects: doc-drift, orphan

## Design notes
_tip_sha is a private helper resolving a Git branch's tip SHA via rev-parse rather than an SDLC lifecycle concept, classified as name-only per D-023.
