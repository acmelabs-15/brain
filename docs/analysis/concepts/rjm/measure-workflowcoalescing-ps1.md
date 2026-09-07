---
package: rjm
name: Measure-WorkflowCoalescing.ps1
slug: measure-workflowcoalescing-ps1
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md, sha256: 48b83cec30a7d8ce92b0d31dd5a2b30f5a5ac4331c035e9420b431f16933e392}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Measure-WorkflowCoalescing.ps1

## Definition — verbatim
(used, not defined)

> "Use `Measure-WorkflowCoalescing.ps1` to track:" — .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md:303

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-026-pr-automation-concurrency-and-safety.md | 303 | used here | Cited as the measurement script for evaluating workflow coalescing effectiveness and race condition rates. |

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
A PowerShell script file name cited in ADR-026 for monitoring GitHub Actions concurrency coalescing effectiveness, representing a missing measurement script rather than an agent lifecycle concept.
