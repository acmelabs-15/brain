---
package: matt
name: port
slug: port
kind: pattern
package_phase: matt:design
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/codebase-design/DEEPENING.md, sha256: f3dd099ce99289bd213914d8ee3e2429b78309c3957ca4583f7659551b1d53c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# port

## Definition — verbatim
> "Define a **port** (interface) at the seam. The deep module owns the logic; the transport is injected as an **adapter**." — skills/engineering/codebase-design/DEEPENING.md:19

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/codebase-design/DEEPENING.md | 19 | defined here | Architectural interface abstraction placed at a module seam separating business logic from transport adapters. |

## Consumes
An identified seam separating module logic from external or remote dependencies.

## Produces
An interface definition that callers and test adapters satisfy.

## When applied
When decoupling a deep module from remote or external dependencies across a seam.

## Sub-concepts
none

## Part of
ports-adapters, codebase-design

## Implementation status
clean

## Design notes
The interface abstraction in the Ports & Adapters pattern living at the boundary of a deep module. It defines the operations required by the module without coupling to concrete transport mechanisms, allowing in-memory adapters during unit testing and network adapters in production.
