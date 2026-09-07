---
package: rjm
name: Architecture
slug: architecture
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md, sha256: 120a612231ef1d8c2e15b62f6eb3b6de20d1125b1556c9e6ab716c376bb9f624}
  - {path: .claude/skills/skillforge/references/specification-template.md, sha256: 463bda085a9759fe1a448be4947b6f2877a8b635abd3c189c1372d14897c44c9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Architecture

## Definition — verbatim
(used, not defined)

> "# Architecture" — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:1

## Also called — verbatim
> "<architecture>" — .claude/skills/skillforge/references/specification-template.md:113

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md | 1 | defined here | Title heading for the canonical system architecture documentation template. |
| .claude/skills/skillforge/references/specification-template.md | 113 | defined here | XML element in skill specifications defining pattern selection, rationale, and lifecycle phases. |

## Consumes
System design decisions, component boundaries, data flow models, and failure mode mitigations.

## Produces
Standardized system architecture document (ARCHITECTURE.md) or skill architecture specification.

## When applied
Applied when designing, specifying, or documenting high-level system structures.

## Sub-concepts
system-diagram, components, data-flow, design-decisions, failure-modes

## Part of
codebase-documenter, skillforge

## Implementation status
clean

## Design notes
Architecture establishes the canonical documentation template and specification schema for system-level design. It mandates that systems articulate their moving parts, explicit goals and non-goals, component ownership boundaries, request data flows, material architectural decision records (ADRs), failure modes, and operational deployment procedures.
