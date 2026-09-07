---
package: rjm
name: linked_issue_states
slug: linked-issue-states
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/report_pr_supersession.py, sha256: 2cc8d0c693bc7b20f4b2650c5336e8747819582cad59559c70c8883352626304}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# linked_issue_states

## Definition — verbatim
(used, not defined)

> "def linked_issue_states(pull_request: dict[str, Any]) -> tuple[list[int], list[int]]:" — scripts/report_pr_supersession.py:114

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/report_pr_supersession.py | 114 | defined here | Helper function partitioning linked closing issue references into lists of closed and open issue numbers. |

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
defects: missing-path

## Design notes
`linked_issue_states` is a Python function identifier extracting linked issue state numbers rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
