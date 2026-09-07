---
package: rjm
name: git status --porcelain
slug: git-status-porcelain
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

# git status --porcelain

## Definition — verbatim
(used, not defined)

> "which configured a committer identity, tested `git status --porcelain` for" — scripts/ci/commit_and_push.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/commit_and_push.py | 5 | used here | Executed to inspect working tree dirty status strictly against specified target paths. |

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
A standard Git CLI command invoked to evaluate working directory modification status rather than an architectural lifecycle concept.
