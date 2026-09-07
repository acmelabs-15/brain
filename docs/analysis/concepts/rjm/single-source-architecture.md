---
package: rjm
name: single-source architecture
slug: single-source-architecture
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

# single-source architecture

## Definition — verbatim
> "A single-source architecture would require:" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 38 | used here | Evaluated as an architectural alternative requiring complex template syntax, rejected in ADR-036 but later adopted in ADR-052. |

## Consumes
Unified template definitions and universal compiler capabilities.

## Produces
Single centralized source tree generating agent definitions for all supported harnesses.

## When applied
Considered during agent template architecture design and later revived as target state in ADR-052.

## Sub-concepts
none

## Part of
template-strategy

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
An architectural design pattern that generates all harness-specific agent instructions from a single template source tree, initially deferred in ADR-036 to avoid template complexity but later selected in ADR-052 as the long-term solution to manual synchronization toil.
