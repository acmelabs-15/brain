---
package: rjm
name: fetch_remote_tips
slug: fetch-remote-tips
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/detect_orphan_commits.py, sha256: a126d8109929ca58f674167780622ca7184a8866649cb345e7878426dfb54c58}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# fetch_remote_tips

## Definition — verbatim
(used, not defined)

> "def fetch_remote_tips(remote: str = "origin") -> dict[str, str]:" — scripts/maintenance/detect_orphan_commits.py:124

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_orphan_commits.py | 124 | defined here | Helper retrieving current remote branch head commit SHAs via git ls-remote. |

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
fetch_remote_tips is a Python helper function in detect_orphan_commits.py querying remote Git references rather than an SDLC lifecycle concept, classified as name-only per D-023.
