---
package: rjm
name: Platform Capability Matrix
slug: platform-capability-matrix
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-036-two-source-agent-template-architecture.md, sha256: b3e971d5b084d026cc3d84d44c0a28f05a39b97de272200ba3f3ef611343e274}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Platform Capability Matrix

## Definition — verbatim
> "## Platform Capability Matrix" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:180

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 18 | defined here | References the capability matrix as an authoritative reference preserved across architecture supersession. |

## Consumes
Feature specifications and empirical constraints of supported AI agent platforms.

## Produces
Tabular capability mappings guiding agent design and prompt differentiation.

## When applied
Consulted when designing multi-platform agent features, memory integrations, and tool assignments.

## Sub-concepts
intentional-divergence

## Part of
two-source-agent-template-architecture

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
An authoritative reference table in ADR-036 comparing native capabilities across Claude Code, Copilot CLI, VS Code Copilot, and GitHub Copilot Web, providing empirical justification for platform-specific prompt differentiation.
