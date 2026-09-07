---
package: rjm
name: Get-MemoryRouterStatus
slug: get-memoryrouterstatus
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-037-memory-router-architecture.md, sha256: 3fa19f71fe2972e04042582a4a1363d81c041f9e6f172dff587c04a2d53218e5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Get-MemoryRouterStatus

## Definition — verbatim
(used, not defined)

> "Get-MemoryRouterStatus" — .agents/architecture/ADR-037-memory-router-architecture.md:252

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-037-memory-router-architecture.md | 252 | defined here | Declared as the PowerShell cmdlet signature for inspecting Memory Router operational health and daemon availability. |

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
defects: doc-drift, missing-path

## Design notes
Get-MemoryRouterStatus is a PowerShell cmdlet function identifier for inspecting Memory Router operational health rather than an operational lifecycle concept.
