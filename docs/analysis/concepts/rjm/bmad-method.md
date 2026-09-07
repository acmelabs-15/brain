---
package: rjm
name: BMAD Method
slug: bmad-method
kind: reference
package_phase: rjm:cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# BMAD Method

## Definition — verbatim
> "BMAD Method" — .agents/architecture/ADR-007-memory-first-architecture.md:56

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 56 | used here | Cited as the source workflow framework for agent sidecars, critical action gates, and party mode. |

## Consumes
none

## Produces
none

## When applied
Referenced during architectural design to adopt scale-adaptive agent workflows and persistent agent sidecars.

## Sub-concepts
sidecar-files, critical-actions, party-mode

## Part of
memory-first-architecture

## Implementation status
not-implemented

## Design notes
An external multi-agent workflow framework (bmad-code-org/BMAD-METHOD) referenced in ADR-007 as architectural inspiration for scale-adaptive routing, agent-specific sidecar memories, critical action memory loading gates, and party mode multi-agent synthesis.
