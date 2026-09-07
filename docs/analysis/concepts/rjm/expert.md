---
package: rjm
name: Expert
slug: expert
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

# Expert

## Definition — verbatim
(used, not defined)

> "(Expert, Manager, Builder, Integration) across 149 lines" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 35 | used here | Top-level tier in the retired four-tier agent hierarchy, migrated to the strategic role. |

## Consumes
High-level architectural challenges and strategic planning directives.

## Produces
Strategic guidance, architectural decisions, and long-term planning artifacts.

## When applied
During system-level design and strategic alignment before task decomposition.

## Sub-concepts
none

## Part of
four-tier-agent-hierarchy

## Implementation status
defects: doc-drift

## Design notes
The highest authority tier in the legacy four-tier agent hierarchy, encompassing agents like architect, high-level-advisor, and independent-thinker, migrated to role strategic under ADR-098.
