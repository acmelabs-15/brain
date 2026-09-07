---
package: rjm
name: Protocol drift
slug: protocol-drift
kind: pattern
package_phase: rjm:cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md, sha256: f9858d8a57344768ff57519852ffc367dc1b7ca3a21aed20435a5c75e6c27945}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Protocol drift

## Definition — verbatim
(used, not defined)

> "Protocol drift**: Under time pressure, agents skip steps" — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 27 | used here | Identified as a failure mode of manual enforcement where agents omit required steps under pressure. |

## Consumes
Manual process guidelines and multi-step agent compliance rules.

## Produces
Omitted session logs, skipped handoffs, and inconsistent operational artifacts.

## When applied
Identified as a recurring failure mode when process adherence depends on manual discipline under time pressure.

## Sub-concepts
none

## Part of
lifecycle-hooks

## Implementation status
defects: missing-path

## Design notes
An operational anti-pattern and failure mode identified in ADR-008 where agents operating under cognitive load or time constraints skip manual protocol steps (such as logging sessions or verifying handoffs). ADR-008 replaces manual steps with deterministic lifecycle hooks to systematically eliminate protocol drift.
