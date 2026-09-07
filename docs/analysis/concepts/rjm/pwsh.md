---
package: rjm
name: pwsh
slug: pwsh
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-027-github-mcp-agent-isolation.md, sha256: 3a0cae5d7a44bc1fa4645e919b1e487e35e0c6ab4826e09df105a5c508907ac3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# pwsh

## Definition — verbatim
(used, not defined)

> "Each `pwsh` invocation from the Bash tool spawns a new process:" — .agents/architecture/ADR-027-github-mcp-agent-isolation.md:18

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-027-github-mcp-agent-isolation.md | 18 | used here | Cited as the PowerShell executable whose process-spawning overhead introduced 183-1,044ms latency per CLI tool call. |

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
clean

## Design notes
The command-line executable name for PowerShell 7, representing an external runtime binary rather than an agent lifecycle concept.
