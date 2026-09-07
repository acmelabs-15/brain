---
package: rjm
name: expand-contract
slug: expand-contract
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md, sha256: 9010d2ac17b09423f0d984afeafdbbbc5144f1a5b43452dcd80d9936ac6dab5d}
  - {path: .agents/projects/v0.4.0/PLAN.md, sha256: baac365e5ebb496bc12b222f22255687cd233cfaa43be637433f2d3f8a898570}
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# expand-contract

## Definition — verbatim
> "Change schemas/APIs without downtime through parallel deployment:" — templates/agents/architect.shared.md:636

## Also called — verbatim
`Expand/Contract (Safe Schema Evolution)` — templates/agents/architect.shared.md:634

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/architect.shared.md | 634 | defined here | Defined in architect agent template as a safe schema and API evolution pattern with expand, migrate, and contract phases |
| .agents/architecture/ADR-045-framework-extraction-via-plugin-marketplace.md | 203 | used here | Applied to framework extraction migration to add plugin, verify functionality, and then remove originals |
| .agents/projects/v0.4.0/PLAN.md | 544 | used here | Specified in implementation plan step for removing extracted files after verifying plugin operation |

## Consumes
Existing schema, API, or file structure and planned target replacement.

## Produces
Phased transition sequence maintaining continuous compatibility until deprecated structures are safely retired.

## When applied
Applied when modifying shared schemas, interfaces, or repository structures where downtime, broken references, or abrupt breaking changes cannot be tolerated.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Expand-contract is an architectural migration pattern that introduces new interfaces alongside existing ones, transitions consumers incrementally, and contracts obsolete paths only after complete verification.
