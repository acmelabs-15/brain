---
package: rjm
name: front-door router
slug: front-door-router
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md, sha256: 21223deef2b27e1961fbf9f2c04cb9d97eb086e088ae58ab38e73644c61b5139}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# front-door router

## Definition — verbatim
> "`autoplan` is the outer front-door router at the skill layer." — .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md:67

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-078-autoplan-orchestrator-router-boundary.md | 67 | defined here | Defines autoplan as the outer front-door router at the skill layer for unspecified requests. |

## Consumes
Vague or unspecified user requests naming no specific skill or command.

## Produces
Fast, direct routing to a single skill, lifecycle command, or handoff to orchestrator.

## When applied
Fires implicitly on any prompt that does not name a specific tool or lifecycle command.

## Sub-concepts
none

## Part of
autoplan-and-orchestrator-router-boundary

## Implementation status
defects: doc-drift

## Design notes
An architectural design pattern designating a lightweight, outer routing layer that classifies unspecified user requests and directs them immediately to their destination, avoiding the overhead of multi-agent coordination for simple tasks.
