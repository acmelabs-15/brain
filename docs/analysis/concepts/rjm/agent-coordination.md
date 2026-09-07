---
package: rjm
name: Agent Coordination
slug: agent-coordination
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Coordination

## Definition — verbatim
(used, not defined)

> "Agent Coordination" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:100

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 100 | defined here | Section heading in AGENT-SYSTEM.md replacing the four-tier hierarchy with ADR-009 consensus rules. |

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
defects: doc-drift

## Design notes
Section title in AGENT-SYSTEM.md governing multi-agent dispatch and consensus protocols, classified as name-only per D-023 as a document heading.
