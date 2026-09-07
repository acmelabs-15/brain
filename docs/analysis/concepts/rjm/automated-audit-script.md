---
package: rjm
name: Automated Audit Script
slug: automated-audit-script
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

# Automated Audit Script

## Definition — verbatim
> "### Automated Audit Script" — .agents/architecture/ADR-050-adr-protocol-sync.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-050-adr-protocol-sync.md | 34 | defined here | Defined as Tier 1 of the sync process, parsing ADRs for RFC 2119 requirements and verifying protocol references. |

## Consumes
All ADR files in `.agents/architecture/` and `SESSION-PROTOCOL.md`.

## Produces
Coverage summary of synced ADRs and list of unreferenced MUST requirements.

## When applied
Executed locally and in CI to catch omissions in protocol synchronization.

## Sub-concepts
none

## Part of
adr-to-protocol-sync-process

## Implementation status
defects: missing-path

## Design notes
An automated mechanical verification tool that parses architectural decision records for RFC 2119 requirements and audits whether governing session protocols reference and enforce each requirement.
