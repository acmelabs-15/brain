---
package: rjm
name: Party Mode
slug: party-mode
kind: technique
package_phase: rjm:cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-007-memory-first-architecture.md, sha256: 35acfcd104b6cfce3961f49b902453921ff02c6d02b5ca03ee95a43443fa37aa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Party Mode

## Definition — verbatim
> "Party Mode: Multi-agent collaboration for complex decisions" — .agents/architecture/ADR-007-memory-first-architecture.md:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-007-memory-first-architecture.md | 61 | used here | Highlighted as a BMAD collaboration pattern for complex multi-agent decisions. |

## Consumes
Multiple agent perspectives, domain memory stores, and complex decision contexts.

## Produces
Synthesized multi-agent consensus, trade-off evaluations, and architectural decisions.

## When applied
When tackling multifaceted architectural decisions or high-impact choices requiring cross-domain perspective synthesis.

## Sub-concepts
none

## Part of
bmad-method

## Implementation status
not-implemented

## Design notes
A collaborative multi-agent execution pattern adopted from the BMAD framework that pools multiple specialist agents and their respective memory stores together. Used for complex architectural decisions where no single agent has complete domain visibility, synthesizing diverse perspectives into a coherent resolution.
