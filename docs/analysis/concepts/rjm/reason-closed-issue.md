---
package: rjm
name: REASON_CLOSED_ISSUE
slug: reason-closed-issue
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

# REASON_CLOSED_ISSUE

## Definition — verbatim
(used, not defined)

> "REASON_CLOSED_ISSUE = \"closed-linked-issue\"" — scripts/report_pr_supersession.py:73

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/report_pr_supersession.py | 73 | defined here | Constant defining the string identifier for closed linked issue supersession findings. |

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
`REASON_CLOSED_ISSUE` is a Python constant identifier binding the closed linked issue reason string rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
