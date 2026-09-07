---
package: rjm
name: System Diagram
slug: system-diagram
kind: template
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md, sha256: 120a612231ef1d8c2e15b62f6eb3b6de20d1125b1556c9e6ab716c376bb9f624}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# System Diagram

## Definition — verbatim
(used, not defined)

> "## System Diagram" — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:20

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md | 20 | defined here | Template section providing a Mermaid flowchart diagram of core system components. |

## Consumes
Component relationship models, communication topologies, and boundary definitions.

## Produces
Compact, mobile-readable visual diagram of system topology (e.g. Mermaid flowchart).

## When applied
Required visual summary section in system architecture documentation.

## Sub-concepts
mermaid-diagram, flowchart

## Part of
architecture

## Implementation status
clean

## Design notes
System Diagram prescribes a visual architecture rendering (via text-based Mermaid flowcharts) illustrating system components and external boundaries. It enforces a clarity constraint—limiting diagrams to ten nodes or fewer to remain legible on mobile screens—preventing over-complicated visual schematics that obscure rather than clarify architecture.
