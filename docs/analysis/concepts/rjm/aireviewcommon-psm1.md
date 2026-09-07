---
package: rjm
name: AIReviewCommon.psm1
slug: aireviewcommon-psm1
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md, sha256: 5f3f48708d5dcd1bc3c82b12e518ae4e4739403000a0b9d94268cd93089299da}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# AIReviewCommon.psm1

## Definition — verbatim
(used, not defined)

> "- ✅ Extract `Get-LabelsFromAIOutput` and `Get-MilestoneFromAIOutput` to `AIReviewCommon.psm1`" — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md | 52 | used here | Target PowerShell script module for extracted AI output parsing and security helper functions. |

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
defects: missing-path, internal-contradiction, cross-file-contradiction

## Design notes
A PowerShell module filename intended to host extracted GitHub issue triage helpers and AI output sanitization functions; it is a file name rather than a lifecycle concept.
