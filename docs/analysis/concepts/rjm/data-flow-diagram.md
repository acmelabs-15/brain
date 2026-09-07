---
package: rjm
name: Data Flow Diagram
slug: data-flow-diagram
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/security/references/threat-model-template.md, sha256: eb6b22ffc3c10b5ebf2d88a64bfdf46fab3c99ecd746d8e39b566cbd4bfea895}
  - {path: .claude/skills/threat-modeling/SKILL.md, sha256: a4ed722e2a09f53130a86c1f42db100ac87f504c85e0198e726a5c40cfdbbb62}
  - {path: .claude/skills/threat-modeling/templates/threat-model-template.md, sha256: c71c0a861f9e434e26f25c1019c9ddf047f2a9dec295b7d012f7c59f28088a42}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Data Flow Diagram

## Definition — verbatim
> "## Data Flow Diagram" — .claude/agents/security/references/threat-model-template.md:25

## Also called — verbatim
> "Data Flow Diagram (DFD)" — .claude/skills/threat-modeling/SKILL.md:109

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/security/references/threat-model-template.md | 25 | defined here | Section heading in the agent threat model template representing data flow and trust boundaries. |
| .claude/skills/threat-modeling/SKILL.md | 109 | used here | Diagram type recommendation designating DFDs as the preferred visualization for threat models. |
| .claude/skills/threat-modeling/templates/threat-model-template.md | 41 | used here | Architecture overview section in the skill threat model template containing trust boundary ASCII/Mermaid flow. |

## Consumes
feature-architecture, trust-boundaries

## Produces
visualized-data-flows

## When applied
> "| **Data Flow Diagram (DFD)** | Most threat models | Mermaid, draw.io |" — .claude/skills/threat-modeling/SKILL.md:109

## Sub-concepts
trust-boundary

## Part of
threat-model

## Implementation status
defects: doc-drift, exit-code-mismatch, missing-path

## Design notes
An architectural visualization artifact that models the flow of information across external entities, processes, data stores, and trust boundaries. In rjm, the Data Flow Diagram provides the foundational spatial map upon which threats (STRIDE) and defensive controls are evaluated.
