---
package: rjm
name: Verification-based compliance
slug: verification-based-compliance
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/analysis/002-project-constraints-consolidation.md, sha256: 74c855ae2dfa5a61bdffa01adf24b6715635da3b50add6f14531082e00a87394}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Verification-based compliance

## Definition — verbatim
(used, not defined)

> "Verification-based compliance (tool output required) succeeds." — .agents/analysis/002-project-constraints-consolidation.md:92

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 92 | used here | Contrasted against trust-based compliance to establish that mandatory tool outputs achieve 100% rule adherence. |

## Consumes
Tool executions, script runs, linter invocations, and observable output artifacts.

## Produces
Verifiable compliance evidence recorded in the session transcript or pull request.

## When applied
Required at all operational checkpoints where policy compliance must be proven before downstream tasks run.

## Sub-concepts
verification-based-enforcement, blocking-gate

## Part of
session-protocol

## Implementation status
defects: missing-path

## Design notes
Verification-based compliance is a core governance philosophy requiring observable tool output to substantiate rule adherence. Evidence from rjm showed that while passive guidelines resulted in multiple agent violations, mandatory gates requiring tool invocation (such as Serena project activation) achieved 100% compliance. Verification-based compliance ensures that requirements are validated by machine-readable proof rather than presumed diligence.
