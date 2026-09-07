---
package: rjm
name: Runspace pool
slug: runspace-pool
kind: name-only
package_phase: none
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

# Runspace pool

## Definition — verbatim
(used, not defined)

> "| Runspace pool | 70-85% improvement, standard PowerShell | Violates pure-PowerShell preference, complex | Adds infrastructure complexity |" — .agents/architecture/ADR-031-hybrid-powershell-architecture.md:118

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-031-hybrid-powershell-architecture.md | 118 | used here | Evaluated as an alternative in ADR-031 providing concurrency but rejected due to infrastructure complexity. |

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
not-implemented

## Design notes
A PowerShell runtime multithreading mechanism evaluated as an alternative in ADR-031; it is a language runtime construct rather than a lifecycle concept.
