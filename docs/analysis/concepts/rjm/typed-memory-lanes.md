---
package: rjm
name: Typed memory lanes
slug: typed-memory-lanes
kind: pattern
package_phase: cross-phase
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

# Typed memory lanes

## Definition — verbatim
> "Typed memory lanes**: Each hook writes to its own state (per hilyfux feedback on #1703)" — .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md:205

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-008-protocol-automation-lifecycle-hooks.md | 205 | defined here | Architectural design principle establishing isolated, hook-specific state storage directories. |

## Consumes
Hook runtime execution events and intermediate telemetry.

## Produces
Isolated state directories under `.agents/.hook-state/` per hook type.

## When applied
Applied whenever hooks persist state, metrics, or audit logs to disk.

## Sub-concepts
none

## Part of
lifecycle-hooks

## Implementation status
clean. Implemented across surviving hooks writing state to dedicated namespaces under `.agents/.hook-state/`.

## Design notes
An architectural partitioning pattern ensuring that concurrent or sequential hooks maintain separate, typed state files rather than colliding in a shared mutable state store.
