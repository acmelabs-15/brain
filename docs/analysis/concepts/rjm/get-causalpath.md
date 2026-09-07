---
package: rjm
name: Get-CausalPath
slug: get-causalpath
kind: name-only
package_phase: none
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-038-reflexion-memory-schema.md, sha256: c38ecd8c2fcbe6206a5ec4b4a80e06621ca3015db64a93894c4264f2bdfef509}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Get-CausalPath

## Definition — verbatim
(used, not defined)
> "Get-CausalPath -From" — .agents/architecture/ADR-038-reflexion-memory-schema.md:185

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-038-reflexion-memory-schema.md | 185 | defined here | Proposed PowerShell query cmdlet signature for tracing causal graph paths between decisions and outcomes |

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
defects: missing-path (scripts/ReflexionMemory.psm1 not implemented in PowerShell; memory subsystem is excluded from lifecycle scope)

## Design notes
PowerShell cmdlet identifier in the proposed Reflexion Memory query interface; not a development lifecycle concept.
