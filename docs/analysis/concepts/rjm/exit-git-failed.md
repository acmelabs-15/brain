---
package: rjm
name: EXIT_GIT_FAILED
slug: exit-git-failed
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/commit_and_push.py, sha256: 8a5521fc19a8b4d0e1e8bc522053eb632b16a30d35176a096464c4f1076cb8be}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# EXIT_GIT_FAILED

## Definition — verbatim
(used, not defined)

> "EXIT_GIT_FAILED = 1" — scripts/ci/commit_and_push.py:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/commit_and_push.py | 29 | defined here | Constant defining exit code 1 when a git subprocess execution fails. |

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
A script exit code constant signaling a Git subprocess execution error rather than a lifecycle concept.
