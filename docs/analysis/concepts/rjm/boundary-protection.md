---
package: rjm
name: Boundary Protection
slug: boundary-protection
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/software-engineering-library/references/clean-architecture.md, sha256: 05a2908c6aa793da85f31319368e04967eb1f225e7c32f9dc628f654bba8183a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Boundary Protection

## Definition — verbatim
> "Every boundary in the system is a place where dependencies could leak. The rules below keep them from leaking." — .claude/skills/software-engineering-library/references/clean-architecture.md:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 115 | defined here | Architectural guidelines and rules preventing dependency leakage across layer boundaries. |

## Consumes
Architectural layer interfaces and component boundaries.

## Produces
Leak-free architectural boundaries and decoupled subsystem interfaces.

## When applied
Applied when designing cross-layer interfaces, passing data across boundaries, or configuring tests.

## Sub-concepts
direction-by-name, plain-types-at-the-seam, one-owner-per-concept, explicit-ports, no-ambient-access, tests-respect-direction

## Part of
clean-architecture

## Implementation status
clean

## Design notes
Boundary Protection establishes a concrete set of six architectural enforcement rules designed to prevent dependency leakage between concentric Clean Architecture layers. In rjm, boundary protection ensures that multi-agent systems maintain clean separation of concerns without global state or leaky abstractions.
