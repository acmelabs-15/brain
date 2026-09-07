---
package: rjm
name: Pester 5.x
slug: pester-5-x
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PR-60/003-pr-60-plan-critique.md, sha256: f6bcc9ac4bbf0d3838e7230fe466babdf046b8cc160ae3e1b7e2f20848b1c21b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Pester 5.x

## Definition — verbatim
(used, not defined)

> "- Framework: Pester 5.x" — .agents/archive/planning/PR-60/003-pr-60-plan-critique.md:148

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PR-60/003-pr-60-plan-critique.md | 148 | used here | Specified under Improvement 2 as the required test framework version for PowerShell test suites (*.Tests.ps1). |

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
defects: cross-file-contradiction (.agents/archive/planning/PR-60/003-pr-60-plan-critique.md:95)

## Design notes
`Pester 5.x` is a named version of an external PowerShell unit testing framework referenced in test specification guidance, classified as `name-only` per D-023.
