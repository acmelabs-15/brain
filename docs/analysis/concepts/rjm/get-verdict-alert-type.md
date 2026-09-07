---
package: rjm
name: get_verdict_alert_type
slug: get-verdict-alert-type
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/generate_spec_report.py, sha256: 03c938e87089f77b57d6c5406c29320a94e562e7831ee2a49bc92224c4c7aad8}
  - {path: scripts/ai_review_common/issue_triage.py, sha256: 4ef473208dfacba52a514c4bc06155c9e877faf01bbb48bfdfb1795487e38061}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# get_verdict_alert_type

## Definition — verbatim
(used, not defined)

> "Map verdict to GitHub alert type: TIP, WARNING, CAUTION, or NOTE." — scripts/ai_review_common/issue_triage.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/generate_spec_report.py | 34 | used here | Imported from scripts.ai_review_common to determine GitHub alert callout types for reports. |
| scripts/ai_review_common/issue_triage.py | 49 | defined here | Helper function mapping triage verdict strings to GitHub alert callout types. |

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
defects: orphan, missing-path, script-bug, other

## Design notes
`get_verdict_alert_type` is a Python helper function identifier in `issue_triage.py` mapping verdict strings to GitHub Markdown alert types rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
