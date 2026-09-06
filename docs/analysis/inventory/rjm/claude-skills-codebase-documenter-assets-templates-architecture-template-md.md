---
package: rjm
path: .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md
type: skill
bytes: 2803
unit: inv-rjm-103
in_scope_via: .claude/skills/codebase-documenter/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md, sha256: 120a612231ef1d8c2e15b62f6eb3b6de20d1125b1556c9e6ab716c376bb9f624}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md

## Purpose — required, verbatim
> "[Two or three paragraphs that describe what the system does, the major moving parts, and the user-visible boundary. A reader should leave this section knowing the shape of the system without reading further.]" — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:5
(no explicit purpose statement)

## Design intent — required
Provides a standardized template and architectural document skeleton for software systems, structuring architectural documentation into essential sections: high-level system overview, explicit goals versus non-goals (providing reviewers an authoritative shield against feature creep), a lightweight Mermaid component diagram, a component responsibility/ownership matrix, request data flow tracing, architectural decision record (ADR) triggers and links, extension interfaces, failure mode mitigation tables, and operational notes (deploy, observability, on-call, and capacity). Without it, system architecture documentation frequently drifts into fragmented prose lacking actionable boundaries, failure semantics, or operational runbook integration.

## Phase — required
cross-phase

## Inputs — required
- Architectural facts, system goals/non-goals, component boundaries, state ownership, request flow stages, ADR references, and operational parameters supplied by the engineering team or scaffolding agent.

## Outputs — required
- ARCHITECTURE.md (or user-requested destination path) generated from the template structure.

## Invokes — required
none

## Invoked by — required
- skill codebase-documenter — .claude/skills/codebase-documenter/SKILL.md:51

## Concepts named — required, verbatim
- `Architecture` — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:1 — defined here
- `Overview` — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:3 — defined here
- `Goals and Non-Goals` — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:7 — defined here
- `Goals` — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:9 — defined here
- `Non-Goals` — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:15 — defined here
- `System Diagram` — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:20 — defined here
- `Components` — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:34 — defined here
- `Data Flow` — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:42 — defined here
- `Design Decisions` — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:53 — defined here
- `Extension Points` — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:61 — defined here
- `Failure Modes` — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:68 — defined here
- `Operational Notes` — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:76 — defined here

## Structure
- # Architecture — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:1
- ## Overview — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:3
- ## Goals and Non-Goals — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:7
- ### Goals — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:9
- ### Non-Goals — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:15
- ## System Diagram — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:20
- ## Components — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:34
- ## Data Flow — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:42
- ## Design Decisions — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:53
- ## Extension Points — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:61
- ## Failure Modes — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:68
- ## Operational Notes — .claude/skills/codebase-documenter/assets/templates/ARCHITECTURE.template.md:76

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
- Explicitly enforces phone-readable diagram limits (line 32: "Keep it readable on a phone screen. If the diagram needs more than ten nodes, split it."), preventing visual bloat and adhering to the anti-pattern guidance in `references/visual_aids_guide.md:81`.
- Integrates architecture directly with decision governance by prescribing exactly when to add an ADR (boundary change, dependency change, guarantee change) in `docs/adr/`.

## Context cost
2803 bytes (approx. 700 tokens).
