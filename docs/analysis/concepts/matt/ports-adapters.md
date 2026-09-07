---
package: matt
name: Ports & Adapters
slug: ports-adapters
kind: pattern
package_phase: matt:design
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/codebase-design/DEEPENING.md, sha256: f3dd099ce99289bd213914d8ee3e2429b78309c3957ca4583f7659551b1d53c1}
  - {path: skills/engineering/codebase-design/DESIGN-IT-TWICE.md, sha256: 8e740bf98446dbd4dfdc132ac4346d9a7eedaf93de6a495889171cf7f99f16bd}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Ports & Adapters

## Definition — verbatim
> "### 3. Remote but owned (Ports & Adapters)" — skills/engineering/codebase-design/DEEPENING.md:17

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/codebase-design/DEEPENING.md | 17 | defined here | Dependency category for remote but owned services prescribing ports at seams and swappable transport adapters. |
| skills/engineering/codebase-design/DESIGN-IT-TWICE.md | 28 | used here | Design angle prompt directing an exploration agent to structure designs around ports & adapters for cross-seam dependencies. |

## Consumes
Cross-network boundaries, owned remote services, or external I/O interfaces.

## Produces
Decoupled deep modules with well-defined interface ports and swappable production/test adapters.

## When applied
When designing or deepening modules that communicate across process or network boundaries with owned services.

## Sub-concepts
port, adapter

## Part of
codebase-design

## Implementation status
clean

## Design notes
An architectural pattern (hexagonal architecture) adapted for module deepening in Matt's design philosophy. When a module depends on remote but owned services, it defines a port (interface) at the seam while core logic stays inside the deep module. Transport mechanisms (HTTP, gRPC, queues, or in-memory test fakes) are injected as adapters, preserving fast local testability.
