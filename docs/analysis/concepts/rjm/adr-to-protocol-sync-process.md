---
package: rjm
name: ADR-to-Protocol Sync Process
slug: adr-to-protocol-sync-process
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-050-adr-protocol-sync.md, sha256: b19f1dcefa7f4fc2b5d2ca4e8f5e0c0c8407ae4c803857418a2621ce744bc9ab}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR-to-Protocol Sync Process

## Definition — verbatim
> "# ADR-050: ADR-to-Protocol Sync Process" — .agents/architecture/ADR-050-adr-protocol-sync.md:12

## Also called — verbatim
`two-tier ADR-to-Protocol sync process` — .agents/architecture/ADR-050-adr-protocol-sync.md:32

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-050-adr-protocol-sync.md | 12 | defined here | Defined as an architectural governance process ensuring ADR requirements propagate into session protocols. |

## Consumes
Architectural Decision Records (`.agents/architecture/ADR-*.md`) containing RFC 2119 requirements.

## Produces
Updated `SESSION-PROTOCOL.md` and audit reports flagging unsynchronized requirements.

## When applied
Applied whenever an ADR introducing MUST/SHOULD requirements is authored, accepted, or updated.

## Sub-concepts
two-tier-adr-to-protocol-sync-process, automated-audit-script, manual-integration-checklist, protocol-integration

## Part of
architecture-governance

## Implementation status
defects: missing-path

## Design notes
A governance synchronization technique that bridges the gap between static architectural decision records and active session protocols by ensuring all RFC 2119 MUST/SHOULD requirements defined in ADRs are systematically propagated into the prompt instructions executed by autonomous agents.
