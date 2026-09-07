---
package: rjm
name: Avoid Shipping the Org Chart
slug: avoid-shipping-the-org-chart
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md, sha256: 3b2ca37580d82af070bb89f7afeba53b0d1890f1652f9d0cf14ddd4e7b1f6106}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Avoid Shipping the Org Chart

## Definition — verbatim
> "Name components based on the problem they solve, not the team that owns them:" — .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md:32

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/style-enforcement/references/dotnet-monorepo-standards.md | 30 | defined here | Component naming guideline requiring components to be named after problem solved rather than team ownership. |

## Consumes
Component architectural scope and purpose.

## Produces
Problem-aligned, team-independent component naming and boundaries.

## When applied
When designing and naming new components, libraries, or namespaces in a monorepo.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Avoid Shipping the Org Chart is an architectural design pattern (countering Conway's Law) that mandates component names reflect functional problems solved rather than organizational reporting structures, preserving reusability across teams.
