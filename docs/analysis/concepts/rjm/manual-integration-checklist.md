---
package: rjm
name: Manual Integration Checklist
slug: manual-integration-checklist
kind: checklist
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

# Manual Integration Checklist

## Definition — verbatim
> "### Manual Integration Checklist" — .agents/architecture/ADR-050-adr-protocol-sync.md:42

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-050-adr-protocol-sync.md | 42 | defined here | Defined as Tier 2 of the sync process, specifying a 4-step checklist for ADR authors. |

## Consumes
Newly authored or revised ADR with MUST/SHOULD requirements.

## Produces
ADR Protocol Integration section and corresponding update to `SESSION-PROTOCOL.md`.

## When applied
Executed whenever an author drafts or updates an ADR with enforceable requirements.

## Sub-concepts
none

## Part of
adr-to-protocol-sync-process

## Implementation status
defects: missing-path

## Design notes
A procedural checklist executed by ADR authors requiring them to identify MUST requirements, add a Protocol Integration section to the ADR, and update session protocol files accordingly.
