---
package: rjm
name: SoR ownership
slug: sor-ownership
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-060-rework-warning-session-log-persistence.md, sha256: ac709bb1d9ab072581f6f1fcaa31e89f028312a0f28c3123ce47edfb84604826}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SoR ownership

## Definition — verbatim
(used, not defined)

> "requires: explicit SoR ownership, schema evolution via optional fields with" — .agents/architecture/ADR-060-rework-warning-session-log-persistence.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-060-rework-warning-session-log-persistence.md | 32 | used here | Identifies System of Record ownership architectural rule governing state persistence in session logs |

## Consumes
System data architecture with multiple data stores or state representations.

## Produces
Clear designation of the single authoritative System of Record (SoR) for each entity.

## When applied
Applied when designing data storage, handoffs, and session state persistence across agents.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift, internal-contradiction

## Design notes
System of Record (SoR) ownership is an architectural data pattern derived from Designing Data-Intensive Applications (DDIA) dictating that every piece of state has exactly one authoritative owner. In rjm's architecture, enforcing SoR ownership prevents conflicting sources of truth between session logs, handoff documents, and memory stores.
