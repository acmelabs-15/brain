---
package: rjm
name: find_issues
slug: find-issues
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/find_copilot_ready_issues.py, sha256: faf9bb06e7fd11b6e0fd37e7d397cd119e07631df2eb92a142facbeabe9205a7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# find_issues

## Definition — verbatim
(used, not defined)

> "def find_issues() -> tuple[list[str], int, str]:" — scripts/ci/find_copilot_ready_issues.py:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/find_copilot_ready_issues.py | 25 | defined here | Function querying GitHub CLI for open issues tagged with the copilot-ready label. |

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
A utility function querying the GitHub CLI for open issues matching a target label rather than an operational lifecycle concept.
