---
package: rjm
name: four-tier agent hierarchy
slug: four-tier-agent-hierarchy
kind: pattern
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

# four-tier agent hierarchy

## Definition — verbatim
> "section 2.5 documented a four-tier agent hierarchy" — .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md:34

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-098-agent-role-metadata-replaces-tier-hierarchy.md | 34 | defined here | Historical agent organization model retired by ADR-098 due to lack of enforcement and contradiction of prompts. |

## Consumes
Agent definitions and delegation policies.

## Produces
Hierarchical agent rank classification across Expert, Manager, Builder, and Integration tiers.

## When applied
Historically applied in AGENT-SYSTEM.md section 2.5 before retirement by ADR-098.

## Sub-concepts
expert, manager, builder, integration

## Part of
agent-coordination

## Implementation status
defects: doc-drift

## Design notes
A legacy architectural taxonomy that organized agents into four hierarchical tiers with supposed delegation authority, retired after analysis revealed it was unenforced, lacked basis in ADR-009, and contradicted agent delegation denials.
