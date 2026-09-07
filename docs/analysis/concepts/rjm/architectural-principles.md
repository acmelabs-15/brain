---
package: rjm
name: Architectural Principles
slug: architectural-principles
kind: reference
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/agents/architect.md, sha256: b109baee5c61acd4fd24d1a6b2832b7f77749be8424c85b1fc054216c42cd5e1}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Architectural Principles

## Definition — verbatim
(used, not defined)

> "- **Consistency**: Follow established patterns" — .claude/agents/architect.md:591

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/architect.md | 589 | defined here | Five core design tenets (Consistency, Simplicity, Testability, Extensibility, Separation) guiding architectural governance. |
| templates/agents/architect.shared.md | 514 | defined here | Five core design tenets (Consistency, Simplicity, Testability, Extensibility, Separation) guiding architectural governance. |

## Consumes
System proposals, design reviews, module boundaries, and implementation plans.

## Produces
Architectural evaluations grounded in non-negotiable software design qualities.

## When applied
Applied continuously by the architect agent to evaluate all design proposals, ADRs, and structural reviews.

## Sub-concepts
none

## Part of
architect

## Implementation status
defects: missing-path

## Design notes
Architectural Principles defines the core design tenets enforced by the architect agent: Consistency (following established patterns), Simplicity (preferring simple over complex), Testability (ensuring designs can be verified), Extensibility (open for extension, closed for modification), and Separation (maintaining clear boundaries between components). These serve as the foundational criteria for accepting or rejecting proposed system changes.
