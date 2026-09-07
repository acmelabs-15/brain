---
package: rjm
name: Get-LabelsFromAIOutput
slug: get-labelsfromaioutput
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

# Get-LabelsFromAIOutput

## Definition — verbatim
(used, not defined)

> "- ✅ Extract `Get-LabelsFromAIOutput` and `Get-MilestoneFromAIOutput` to `AIReviewCommon.psm1`" — .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md:52

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/002-pr-60-remediation-plan.md | 52 | defined here | Extracted PowerShell function designed to safely parse and sanitize label arrays from AI output. |

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
A PowerShell function identifier designed to extract and sanitize label arrays from untrusted AI output using strict regex matching; it is a function identifier rather than a lifecycle concept.
