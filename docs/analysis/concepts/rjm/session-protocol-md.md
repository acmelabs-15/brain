---
package: rjm
name: SESSION-PROTOCOL.md
slug: session-protocol-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-011-session-state-mcp.md, sha256: 1f587e02f76255cdbfcfe6270ec3765a1e843830f3408b5ae5847068f08e02f1}
  - {path: .agents/architecture/ADR-050-adr-protocol-sync.md, sha256: b19f1dcefa7f4fc2b5d2ca4e8f5e0c0c8407ae4c803857418a2621ce744bc9ab}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# SESSION-PROTOCOL.md

## Definition — verbatim
(used, not defined)

> "SESSION-PROTOCOL.md is the canonical enforcement document that agents follow during sessions." — .agents/architecture/ADR-050-adr-protocol-sync.md:24

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-011-session-state-mcp.md | 24 | used here | Cited as the multi-phase session protocol document containing RFC 2119 requirements. |
| .agents/architecture/ADR-050-adr-protocol-sync.md | 24 | used here | Identified as the canonical operational enforcement document that agents follow during sessions. |

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
defects: missing-path

## Design notes
A file name identifying the repository's operational protocol document (.agents/SESSION-PROTOCOL.md) rather than an operational lifecycle concept.
