---
package: rjm
name: Enforcement Planes
slug: enforcement-planes
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Enforcement Planes

## Definition — verbatim
> "a P0/P1 gate's sole relief must not be writable by the actor it gates" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:275-276

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 273 | used here | Cites ADR-101's enforcement-plane classification establishing separation between gated actors and relief mechanisms. |

## Consumes
Security and validation gate architectures, permission models, and bypass pathways.

## Produces
Architectural classification of enforcement boundaries separating gate evaluation from relief authorization.

## When applied
When designing quality gates, commit ceilings, or bypass mechanisms to prevent self-authorization vulnerabilities.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Governance design pattern established in ADR-101 that categorizes verification mechanisms into discrete enforcement planes to ensure that bypass or relief controls cannot be modified or self-applied by the actors subject to the gate.
