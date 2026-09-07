---
package: rjm
name: Deployment Diagram
slug: deployment-diagram
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Deployment Diagram

## Definition — verbatim
(used, not defined)

> "| **Deployment Diagram** | Infrastructure threats | Mermaid |" — .claude/skills/threat-modeling/SKILL.md:112

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/threat-modeling/SKILL.md | 112 | used here | Architecture modeling diagram type recommended for uncovering infrastructure-level threats. |

## Consumes
Infrastructure topologies, network diagrams, server node definitions, and hosting environment specs.

## Produces
Infrastructure deployment topology diagram rendered in Mermaid.

## When applied
Applied during Phase 1 (Scope and Decompose) when threat modeling infrastructure, network boundaries, and hosting tiers.

## Sub-concepts
none

## Part of
threat-modeling

## Implementation status
defects: exit-code-mismatch, missing-path

## Design notes
`Deployment Diagram` is an architectural visualization artifact in `rjm` used to map physical and virtual infrastructure configurations, exposing network boundaries and host environments to infrastructure-level threat analysis.
