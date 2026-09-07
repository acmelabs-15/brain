---
package: rjm
name: Service Level
slug: service-level
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/golden-principles/references/design-separation-of-concerns.md, sha256: b5e6b4709e639d9d52ea6451db53246f2687ddaebac225d4b00413852e3bdfa5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Service Level

## Definition — verbatim
> "### Service Level" — .claude/skills/golden-principles/references/design-separation-of-concerns.md:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/golden-principles/references/design-separation-of-concerns.md | 54 | defined here | Section heading defining distributed system boundaries aligned by discrete business capabilities. |

## Consumes
Enterprise capabilities, bounded contexts, domain services, and inter-system communication networks.

## Produces
Autonomous microservices and distributed subsystems (Order Service, Inventory Service, Payment Service, Notification Service) communicating over explicit protocols.

## When applied
Applied during distributed system architecture design to partition coarse-grained capabilities across network and process boundaries.

## Sub-concepts
none

## Part of
levels-of-separation

## Implementation status
defects: missing-path

## Design notes
Service Level separation represents the coarsest boundary in rjm's separation of concerns hierarchy. By partitioning large distributed systems according to distinct business capabilities (such as Order, Inventory, and Payment services), it guarantees operational autonomy, isolated deployment lifecycles, and independent scaling across disparate business domains.
