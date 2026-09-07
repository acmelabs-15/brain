---
package: rjm
name: get_verdict_exit_code
slug: get-verdict-exit-code
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ai_review_common/issue_triage.py, sha256: 4ef473208dfacba52a514c4bc06155c9e877faf01bbb48bfdfb1795487e38061}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_verdict_exit_code

## Definition — verbatim
(used, not defined)

> "def get_verdict_exit_code(verdict: str) -> int:" — scripts/ai_review_common/issue_triage.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ai_review_common/issue_triage.py | 54 | defined here | Returns process exit code 1 for failure verdicts and 0 for success. |

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
defects: script-bug, other

## Design notes
A Python helper function identifier (get_verdict_exit_code) mapping review verdict strings to process exit codes rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
