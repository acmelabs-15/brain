---
package: rjm
name: Entry Criteria
slug: entry-criteria
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md, sha256: 21223deef2b27e1961fbf9f2c04cb9d97eb086e088ae58ab38e73644c61b5139}
  - {path: .agents/architecture/ADR-TEMPLATE.md, sha256: 9d9ce626ffb06bbe993eacd08dac582853969da5fb9a491680a5c4bf45f87fe1}
  - {path: .claude/skills/adr-generator/references/adr-template.md, sha256: b2e5e4d7d00674c28331639b8cc7d205f3ff649dcf12b20225a7f0a9997dd020}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Entry Criteria

## Definition — verbatim
> "Entry Criteria" — .agents/architecture/ADR-TEMPLATE.md:141

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md | 243 | used here | Defines concrete scenario, priority, and confidence routing criteria for autoplan and orchestrator. |
| .agents/architecture/ADR-TEMPLATE.md | 141 | defined here | Section heading in ADR template requiring scenario, priority, and confidence table for agent entry. |
| .claude/skills/adr-generator/references/adr-template.md | 188 | defined here | Reference template requiring entry criteria table specifying when to invoke the agent. |

## Consumes
User request scenarios, invocation patterns, capability boundaries.

## Produces
Decision table mapping request scenarios to invocation priority (P0/P1/P2) and routing confidence (High/Med/Low).

## When applied
Defined during agent specification and evaluated during request triage so routing decisions can be resolved quickly (< 30 seconds).

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path, doc-drift

## Design notes
A governance requirement and ADR section defining unambiguous entry criteria for agents. Enforces the second agent design principle ("Clear Entry Criteria: 'Should I use this?' answerable in < 30 seconds"), providing deterministic rules for when agents should be activated.
