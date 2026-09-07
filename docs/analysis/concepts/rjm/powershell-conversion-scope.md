---
package: rjm
name: PowerShell Conversion Scope
slug: powershell-conversion-scope
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/003-pr-60-plan-critique.md, sha256: f6bcc9ac4bbf0d3838e7230fe466babdf046b8cc160ae3e1b7e2f20848b1c21b}
  - {path: .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md, sha256: e11aa763a1febe5a2c62d0a51c49614ecebe5c619126b422219b604722fd1107}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# PowerShell Conversion Scope

## Definition — verbatim
(used, not defined)

> "Condition 2: Clarify PowerShell Conversion Scope" — .agents/archive/planning/PR-60/003-pr-60-plan-critique.md:78

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/003-pr-60-plan-critique.md | 78 | defined here | Defined as Condition 2, requiring explicit clarification between converting only label parsing logic versus converting the entire workflow. |
| .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md | 49 | used here | Identified as blocking condition C2 to prevent scope creep during PR-60 remediation. |

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
defects: cross-file-contradiction, internal-contradiction (.agents/archive/planning/PR-60/003-pr-60-plan-critique.md:95; .agents/archive/planning/PR-60/005-consolidated-agent-review-summary.md:56, 94)

## Design notes
`PowerShell Conversion Scope` is a planning condition heading in archived PR-60 review artifacts establishing boundaries between minimal script extraction and full workflow migration, classified as `name-only` per D-023.
