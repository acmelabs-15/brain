---
package: rjm
name: ADR-precedent search
slug: adr-precedent-search
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: .claude/agents/critic.md, sha256: 85eae67441c3b6177c92a7fb6bd6f6c99687130bebb27e39b1202727f879808a}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR-precedent search

## Definition — verbatim
> "Before drafting any new ADR, search the existing ADR catalog for prior decisions in the same area." — .claude/agents/architect.md:63

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 63 | defined here | Rule A5 requiring searching existing ADRs and citing prior decisions before drafting a new ADR. |
| .claude/agents/critic.md | 36 | defined here | Critic validation check verifying that proposed designs do not violate precedent ADRs. |
| templates/agents/architect.shared.md | 78 | defined here | Shared architect template enforcing precedent ADR search and supersession linking. |

## Consumes
Proposed architectural decision topics and the repository ADR catalog (`.agents/architecture/`).

## Produces
Precedent ADR citations in decision drivers, or formal supersession links updating prior ADR statuses.

## When applied
Mandatory before drafting any new Architecture Decision Record or proposing changes to existing architecture.

## Sub-concepts
none

## Part of
architecture-reasoning-protocol

## Implementation status
clean

## Design notes
ADR-precedent search (rule A5) is an architectural consistency gate in rjm. It requires the architect and critic agents to inspect prior recorded decisions before introducing new ones, preventing accidental contradictions and ensuring proper versioning and supersession of architectural standards.
