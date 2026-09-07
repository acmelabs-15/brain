---
package: rjm
name: Traceability Validation
slug: traceability-validation
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/AGENT-SYSTEM.md, sha256: c11a55e17a0f0d0eca7936fc3ba2f3a071fcedf37fcf1a462a65a77831259641}
  - {path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md, sha256: b3e971d5b084d026cc3d84d44c0a28f05a39b97de272200ba3f3ef611343e274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Traceability Validation

## Definition — verbatim
> "Before completion:" — .agents/AGENT-SYSTEM.md:1674

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/AGENT-SYSTEM.md | 1672 | defines | Pre-completion checklist verifying requirements-to-tasks, plan-to-code, and AC-to-test traceability. |
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 70 | used here | Cited as a primary example of cross-platform agent instructions requiring synchronized updates across prompt sources. |

## Consumes
Requirements specifications, task decomposition documents, implementation diffs, tests, and documentation updates.

## Produces
Validation confirmation ensuring an unbroken lineage from initial requirements through tests and documentation.

## When applied
> "Before completion:" — .agents/AGENT-SYSTEM.md:1674

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
A quality gate verifying end-to-end traceability across the development lifecycle before task completion. It requires checking that all tasks reference source requirements, implementation matches the approved plan, tests cover acceptance criteria, and repository documentation is updated, ensuring work does not drift from its original intent.
