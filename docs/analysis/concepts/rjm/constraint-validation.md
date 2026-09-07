---
package: rjm
name: constraint validation
slug: constraint-validation
kind: gate
package_phase: rjm:Spec
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

# constraint validation

## Definition — verbatim
> "No BLOCKING gate for constraint validation in session protocol. Documentation exists but isn't enforced through verification-based checkpoints." — .agents/analysis/002-project-constraints-consolidation.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/002-project-constraints-consolidation.md | 25 | defined here | Identified as the missing verification-based gate required to enforce project constraints before work begins. |

## Consumes
PROJECT-CONSTRAINTS.md, active session plan, and proposed tool invocations.

## Produces
Verification evidence in session context confirming constraints were read and understood.

## When applied
Executed during session initialization (Phase 1.5) prior to performing any code edits or operational commands.

## Sub-concepts
phase-1-5, check-skillexists-ps1

## Part of
session-protocol, verification-based-enforcement

## Implementation status
defects: missing-path

## Design notes
Constraint validation is an architectural gating mechanism designed to shift rule verification left into session startup. Rather than discovering violations at code review or CI time, constraint validation forces agents to load and verify compliance with non-negotiable project rules (such as language restrictions, commit limits, and skill dependencies) before execution begins, cutting rework cycles.
