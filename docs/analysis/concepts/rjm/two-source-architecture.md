---
package: rjm
name: two-source architecture
slug: two-source-architecture
kind: pattern
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

# two-source architecture

## Definition — verbatim
> "Adopt a **two-source architecture**:" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:50

## Also called — verbatim
`Two-Source Agent Template Architecture` — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:12

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 50 | defined here | Declares the core architectural decision maintaining distinct Claude-specific and shared-template sources. |

## Consumes
Platform-specific requirements and shared agent behaviors.

## Produces
Decoupled source streams for Claude Code hand-maintained prompts and shared templates for downstream generator compilation.

## When applied
Applied when structuring repository directories and build pipelines for multi-target agent deployment.

## Sub-concepts
shared-templates, synchronization-requirement

## Part of
two-source-agent-template-architecture

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
The foundational architectural pattern formalized in ADR-036 that divides agent definitions into two separate operational tracks, avoiding complex universal macro languages while allowing platform-specific capabilities to flourish.
