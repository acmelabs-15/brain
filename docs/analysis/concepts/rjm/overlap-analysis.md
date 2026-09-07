---
package: rjm
name: Overlap Analysis
slug: overlap-analysis
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md, sha256: 21223deef2b27e1961fbf9f2c04cb9d97eb086e088ae58ab38e73644c61b5139}
  - {path: .agents/architecture/ADR-TEMPLATE.md, sha256: 9d9ce626ffb06bbe993eacd08dac582853969da5fb9a491680a5c4bf45f87fe1}
  - {path: .agents/governance/agent-consolidation-process.md, sha256: 56aef84724d26f5b712b22f668fc779d18122670dd14a11d000aa196751c8691}
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Overlap Analysis

## Definition — verbatim
> "Overlap Analysis" — .agents/architecture/ADR-TEMPLATE.md:135

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md | 237 | used here | Analyzes capability overlap (~40%) between orchestrator and autoplan. |
| .agents/architecture/ADR-TEMPLATE.md | 135 | defined here | Section heading in ADR template requiring capability overlap comparison table for proposed agents. |
| .agents/governance/agent-consolidation-process.md | 32 | defined here | Governs capability comparison in Phase 1 identification of agent consolidation candidates. |
| .claude/skills/adr-generator/references/adr-template.md | 183 | defined here | Template reference requiring capability overlap mapping and differentiation analysis. |

## Consumes
Existing agent definitions, candidate agent capability lists, tool catalogs.

## Produces
Capability comparison matrix, numerical overlap percentage, and explicit differentiation statements.

## When applied
Required when proposing new agents, drafting agent ADRs, or evaluating redundant agents for consolidation.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
A governance evaluation technique and ADR section requiring proposed agents to tabulate capability overlap against existing agents. Enforces strict specialization limits (maximum 20% overlap in agent design principles) and triggers consolidation workflows when overlap exceeds allowable thresholds.
