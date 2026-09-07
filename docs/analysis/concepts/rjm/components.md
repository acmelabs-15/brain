---
package: rjm
name: Components
slug: components
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md, sha256: 120a612231ef1d8c2e15b62f6eb3b6de20d1125b1556c9e6ab716c376bb9f624}
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Components

## Definition — verbatim
(used, not defined)

> "## Components" — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:34

## Also called — verbatim
> "### Components" — .claude/skills/threat-modeling/templates/threat-model-template.md:62

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md | 34 | defined here | Architecture template table defining component responsibilities, state ownership, and dependencies. |
| .claude/skills/threat-modeling/templates/threat-model-template.md | 62 | used here | Threat model template table cataloging component IDs, types, descriptions, and team owners. |

## Consumes
System decomposition, service boundaries, data store mappings, and ownership rosters.

## Produces
Tabular inventory of architectural modules with explicit responsibilities and dependencies.

## When applied
Applied when specifying system architecture and cataloging assets for threat modeling.

## Sub-concepts
component-ownership, dependency-mapping

## Part of
architecture, threat-model-template

## Implementation status
clean

## Design notes
Components establishes the formal inventory of discrete building blocks that comprise a system. Across both architecture specifications and threat models, it enforces structured attribution—demanding that every component declare its single primary responsibility, owned data/state, external dependencies, and owning team—ensuring operational clarity and clear fault isolation.
