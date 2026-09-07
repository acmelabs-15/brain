---
package: rjm
name: Reverse import
slug: reverse-import
kind: pattern
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

# Reverse import

## Definition — verbatim
> "an entity or use case imports from an adapter or framework module. Invert the dependency: define a port, let the outer module implement it." — .claude/skills/software-engineering-library/references/clean-architecture.md:146

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/software-engineering-library/references/clean-architecture.md | 146 | defined here | Architectural anti-pattern defined in review guidance with remediation instructions to invert dependencies using abstract ports. |

## Consumes
Inner-layer modules (entities, use cases), outer-layer modules (adapters, frameworks).

## Produces
Dependency rule violation finding and dependency inversion remediation plan.

## When applied
When an inner domain layer attempts to directly reference or import outer infrastructure or adapter components.

## Sub-concepts
none

## Part of
clean-architecture

## Implementation status
clean

## Design notes
Reverse import represents a critical violation of Clean Architecture's inward dependency rule, occurring when core domain entities or use cases import outer-layer adapters, database drivers, or CLI tools. In rjm, reverse imports compromise architectural testability and portability; remediating them requires defining an abstract port in the inner layer and routing the fix through architect agent review.
