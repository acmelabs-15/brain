---
package: rjm
name: two-tier ADR-to-Protocol sync process
slug: two-tier-adr-to-protocol-sync-process
kind: pattern
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

# two-tier ADR-to-Protocol sync process

## Definition — verbatim
> "**Establish a two-tier ADR-to-Protocol sync process: an automated audit script and a manual integration checklist.**" — .agents/architecture/ADR-050-adr-protocol-sync.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-050-adr-protocol-sync.md | 32 | defined here | Formulated in ADR-050 decision section as the dual-mechanism model combining automation and manual checklist. |

## Consumes
ADR documents and manual protocol update checklists.

## Produces
Synchronized governance across architectural records and operational agent protocols.

## When applied
Triggered when creating or modifying architectural decisions with enforceable agent requirements.

## Sub-concepts
automated-audit-script, manual-integration-checklist

## Part of
adr-to-protocol-sync-process

## Implementation status
defects: missing-path

## Design notes
A hybrid governance pattern combining manual checklist obligations at ADR authoring time with automated CI audit script verification, balancing human editorial alignment with deterministic mechanical enforcement.
