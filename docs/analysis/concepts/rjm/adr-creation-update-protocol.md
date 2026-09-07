---
package: rjm
name: ADR Creation/Update Protocol
slug: adr-creation-update-protocol
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR Creation/Update Protocol

## Definition — verbatim
> "MANDATORY: Orchestrator MUST invoke adr-review skill before proceeding." — .claude/agents/architect.md:638

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 626 | defined here | Mandatory blocking protocol requiring orchestrators to invoke adr-review before downstream execution. |

## Consumes
Newly created or modified ADR files in `.agents/architecture/ADR-*.md`.

## Produces
Mandatory orchestrator command routing directly to the `adr-review` multi-agent debate skill.

## When applied
Triggered immediately upon the creation or amendment of any ADR document.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: missing-path

## Design notes
ADR Creation/Update Protocol enforces a mandatory blocking gate whenever architectural decisions are authored or modified. The protocol strictly forbids routing execution directly to planning or implementation agents until the orchestrator has invoked the `adr-review` multi-agent critique skill, ensuring all architectural commitments undergo rigorous consensus debate before work commences.
