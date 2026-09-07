---
package: rjm
name: Defect mitigation
slug: defect-mitigation
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/when-to-use.md, sha256: b1010165adfde7358c21c0b295d842c982690d7c5a74e28d1e830df2346ba6b3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Defect mitigation

## Definition — verbatim
> "Defect mitigation (fix the fix, recurring failure)" — docs/when-to-use.md:29

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/when-to-use.md | 29 | defined here | Task shape for recurring failures and fix-the-fix attempts requiring full lifecycle re-engagement. |

## Consumes
Bug reports for defects that have recurred or whose prior fixes failed.

## Produces
Complete root cause re-investigation via /spec and full lifecycle re-validation.

## When applied
Applied whenever a previous bug fix failed or a defect exhibits recurring failure modes.

## Sub-concepts
none

## Part of
fitness-table

## Implementation status
clean

## Design notes
A disciplined task shape in rjm requiring that fixes for already-failed fixes undergo the full lifecycle chain to rigorously isolate root causes rather than patching superficial symptoms.
