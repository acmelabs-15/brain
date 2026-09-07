---
package: rjm
name: Gate Tier Placement
slug: gate-tier-placement
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md, sha256: 9c9d265c58a594d301eccfdd19ae672962b14346fafec48e28c327e3ce1fbf1c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Gate Tier Placement

## Definition — verbatim
> "Three local gate tiers exist. No record states what any of them may cost." — .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-104-gate-tier-placement-and-budgets.md | 13 | defined here | Title and governing subject of ADR-104 defining placement rules and wall-clock budgets across gate tiers. |

## Consumes
Validation checks, wall-clock timing measurements, and developer workflow interaction points.

## Produces
Tier assignments (pre-commit, pre-push fast, pre-push expensive, CI) and strict execution time budgets for each validation check.

## When applied
When designing, modifying, or scheduling validation checks and test suites across local hooks and CI workflows.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: cross-file-contradiction, doc-drift

## Design notes
Architectural framework establishing explicit time budgets and placement criteria across local validation tiers (pre-commit, pre-push fast/expensive, CI) to prevent slow checks from degrading developer feedback loops while maintaining critical safety invariants.
