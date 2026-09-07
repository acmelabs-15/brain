---
package: rjm
name: Synchronization Requirement
slug: synchronization-requirement
kind: checklist
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

# Synchronization Requirement

## Definition — verbatim
> "### Synchronization Requirement" — .agents/architecture/ADR-036-two-source-agent-template-architecture.md:68

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-036-two-source-agent-template-architecture.md | 68 | defined here | Mandates dual-source manual synchronization whenever editing governance sections affecting all platforms. |

## Consumes
Changes to shared governance policies, validation checklists, or protocol sections.

## Produces
Verified simultaneous updates across `templates/agents/*.shared.md` and `src/claude/*.md`.

## When applied
Enforced whenever modifying cross-platform agent instructions under the two-source architecture.

## Sub-concepts
none

## Part of
two-source-agent-template-architecture

## Implementation status
defects: internal-contradiction, missing-path

## Design notes
A procedural checklist and operational rule in ADR-036 requiring contributors to manually duplicate universal governance updates across both shared templates and Claude-specific prompts, preventing cross-harness policy divergence.
