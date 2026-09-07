---
package: rjm
name: ADR Existence
slug: adr-existence
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-033-routing-level-enforcement-gates.md, sha256: 0b62580ef09da6d1986775cd9119f65f6e379d09e69716a0591c743fb81946c1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR Existence

## Definition — verbatim
> "Gate: ADR Existence" — .agents/architecture/ADR-033-routing-level-enforcement-gates.md:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-033-routing-level-enforcement-gates.md | 84 | defined here | Defined as Gate G4 in the PreToolUse hook layer architecture diagram. |

## Consumes
Proposed code modifications impacting repository architecture, system design, or governance policies.

## Produces
A validation verdict checking whether an Architecture Decision Record exists for the change before allowing commit or PR creation.

## When applied
Applied before committing or submitting architectural changes to verify that an ADR document has been authored.

## Sub-concepts
none

## Part of
routing-level-enforcement-gates

## Implementation status
defects: doc-drift, missing-path

## Design notes
ADR Existence is Gate G4 in ADR-033's enforcement gate architecture. It mechanically verifies that architecturally significant modifications are accompanied by an authoritative Architecture Decision Record, ensuring design choices and rationales are preserved and preventing undocumented architectural drift.
