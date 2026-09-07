---
package: rjm
name: Manager
slug: manager
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md, sha256: d094c9283eee8c0798076191cc7f2bb8cb21db28a457234065a56952a25408c5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Manager

## Definition — verbatim
(used, not defined)

> "(Expert, Manager, Builder, Integration) across 149 lines" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 35 | used here | Coordination tier in the retired four-tier agent hierarchy, migrated to the coordinator role. |

## Consumes
Strategic plans and milestone targets.

## Produces
Task decompositions, review syntheses, and operational coordination plans.

## When applied
During plan decomposition and multi-agent workflow orchestration.

## Sub-concepts
none

## Part of
four-tier-agent-hierarchy

## Implementation status
defects: doc-drift

## Design notes
The supervisory tier in the legacy four-tier agent hierarchy, encompassing agents like milestone-planner, critic, and issue-feature-review, migrated to role coordinator under ADR-098.
