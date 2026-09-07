---
package: rjm
name: Invoke-Pester
slug: invoke-pester
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-quality-gate-prompt-refinement.md, sha256: 2ce12204e8fcce359f0ece469370f710f3e9518ba9576a232239d592753fd963}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Invoke-Pester

## Definition — verbatim
(used, not defined)

> "Invoke-Pester tests/QualityGatePrompts.Tests.ps1" — .agents/archive/planning/PRD-quality-gate-prompt-refinement.md:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-quality-gate-prompt-refinement.md | 96 | used here | Documented as the CLI command executing the Pester regression test suite. |

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
defects: missing-path, internal-contradiction, doc-drift

## Design notes
A PowerShell cmdlet name and invocation command used in documentation for executing test suites rather than an operational lifecycle concept.
