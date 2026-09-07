---
package: rjm
name: check_state_consistency
slug: check-state-consistency
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/issue_triage.py, sha256: fcd6b841e0998709bc8e6c141ca452d89ea8238ba619daa7cbb301af9f851565}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# check_state_consistency

## Definition — verbatim
(used, not defined)

> "Return a reason string when the issue's state label is inconsistent." — scripts/issue_triage.py:257

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/issue_triage.py | 256 | defined here | Function checking issue state consistency such as unassigned Doing work or empty Planning bodies. |

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
`check_state_consistency` is an internal Python validation function in `scripts/issue_triage.py` checking GitHub issue state and assignee alignment rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
