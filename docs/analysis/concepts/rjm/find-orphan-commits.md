---
package: rjm
name: find_orphan_commits
slug: find-orphan-commits
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

# find_orphan_commits

## Definition — verbatim
(used, not defined)

> "def find_orphan_commits(" — scripts/maintenance/detect_orphan_commits.py:55

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/detect_orphan_commits.py | 55 | defined here | Main entry function identifying merged PRs whose head branch moved post-merge. |

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
find_orphan_commits is a Python function in detect_orphan_commits.py finding unlanded commits on merged PR branches rather than an SDLC lifecycle concept, classified as name-only per D-023.
