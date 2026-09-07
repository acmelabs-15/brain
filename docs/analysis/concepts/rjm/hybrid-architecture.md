---
package: rjm
name: hybrid architecture
slug: hybrid-architecture
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-031-hybrid-powershell-architecture.md, sha256: 578d49dd51a0f627f03dcf6b304dc4be8ce35f163748e4334af46d2d02c7f6f4}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# hybrid architecture

## Definition — verbatim
> "This record proposed a two-strategy hybrid architecture to cut PowerShell spawn" — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-031-hybrid-powershell-architecture.md | 18 | defined here | Architectural decision proposing a two-strategy execution model to mitigate process spawn overhead. |

## Consumes
PowerShell scripts, gh CLI tooling, and named-pipe communication infrastructure.

## Produces
Two-tier execution model combining fast CLI wrapper calls with a persistent daemon process.

## When applied
> "Implement a **hybrid architecture** for PowerShell skill execution:" — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:79

## Sub-concepts
strategy-1, strategy-2, named-pipe-daemon, routing-decision-tree

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
An architectural pattern proposed to minimize process spawn latency when invoking PowerShell skills from within a stateless CLI agent harness. The pattern splits operations into direct external CLI invocations for simple wrappers and a long-running named-pipe daemon for complex, stateful operations.
