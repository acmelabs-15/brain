---
package: rjm
name: Input Validation
slug: input-validation
kind: technique
package_phase: rjm:build
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security/references/powershell-security-checklist.md, sha256: 716f0b004472e48c8f42c408cf4679633293a8eead54861d4163cffcfb208f29}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Input Validation

## Definition — verbatim
> "## Input Validation" — .claude/agents/security/references/powershell-security-checklist.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security/references/powershell-security-checklist.md | 5 | defined here | Checklist category for validating script parameters and inputs before execution. |

## Consumes
user-input

## Produces
validated-input

## When applied
> "When reviewing PowerShell scripts (.ps1, .psm1), verify:" — .claude/agents/security/references/powershell-security-checklist.md:3

## Sub-concepts
validatepattern, validateset, validatescript, validaterange, validatelength

## Part of
powershell-security-review

## Implementation status
clean

## Design notes
A defensive programming technique and review requirement ensuring all inputs to scripts and tools are constrained to acceptable formats, sets, ranges, and types prior to processing. In rjm's architecture, enforcing input validation prevents downstream vulnerabilities such as injection attacks, unexpected runtime crashes, and path traversal.
