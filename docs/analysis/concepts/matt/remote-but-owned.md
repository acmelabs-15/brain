---
package: matt
name: remote-but-owned
slug: remote-but-owned
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: external/codebase-design.md, sha256: 2317e07ee6633c335c21ecea689bff5613f74d0233fcec8587991eec43e043d2}
  - {path: skills/engineering/codebase-design/DEEPENING.md, sha256: f3dd099ce99289bd213914d8ee3e2429b78309c3957ca4583f7659551b1d53c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# remote-but-owned

## Definition — verbatim
> "Your own services across a network boundary (microservices, internal APIs). Define a **port** (interface) at the seam. The deep module owns the logic; the transport is injected as an **adapter**. Tests use an in-memory adapter. Production uses an HTTP/gRPC/queue adapter." — skills/engineering/codebase-design/DEEPENING.md:19

## Also called — verbatim
`Remote but owned (Ports & Adapters)` — skills/engineering/codebase-design/DEEPENING.md:17

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| external/codebase-design.md | 43 | used here | Third dependency category in DEEPENING.md prescribing ports and adapters for internal network services. |
| skills/engineering/codebase-design/DEEPENING.md | 17 | defined here | Defines architecture for owned services across network boundaries using injected transport adapters. |

## Consumes
Dependencies on organization-owned services, internal microservices, or proprietary network APIs.

## Produces
Ports & Adapters architecture where the module owns domain logic while transport implementations (HTTP, gRPC, in-memory) are injected.

## When applied
When deepening modules communicating with owned services across a network boundary:
> "Your own services across a network boundary (microservices, internal APIs). Define a **port** (interface) at the seam. The deep module owns the logic; the transport is injected as an **adapter**. Tests use an in-memory adapter. Production uses an HTTP/gRPC/queue adapter." — skills/engineering/codebase-design/DEEPENING.md:19

## Sub-concepts
port, adapter, seam

## Part of
codebase-design, deepening

## Implementation status
clean

## Design notes
The third dependency tier in the deepening taxonomy, covering services and microservices owned by the same organization but deployed across network boundaries. Because the team controls both caller and callee contracts, the architecture establishes a clean Ports & Adapters boundary: the deep module owns the core business logic while network transports (HTTP, gRPC, message queues) and fast in-memory test doubles are injected as interchangeable adapters.
