---
package: rjm
name: orchestrator agent
slug: orchestrator-agent
kind: role
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-issue-development.md, sha256: 71f847a86f2ad77877dbcee5cd3c3e4def0ec0ef01d5a31fc81b178148ae001c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# orchestrator agent

## Definition — verbatim
(used, not defined)

> "- The orchestrator agent should plan the implementation approach and coordinate sub-tasks" — docs/autonomous-issue-development.md:33

## Also called — verbatim
> "- **Orchestrator**: Plans and coordinates the implementation" — docs/autonomous-issue-development.md:127

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-issue-development.md | 32 | used here | Designated as the primary coordination agent responsible for planning and delegating sub-tasks during development. |

## Consumes
Selected issue details, project constraints, and architectural standards.

## Produces
Implementation plans, sub-task delegations to implementers, and synthesized development results.

## When applied
Invoked at Phase 3 of autonomous issue development to plan the technical approach and guide execution.

## Sub-concepts
none

## Part of
multi-agent-workflow

## Implementation status
defects: missing-path

## Design notes
The central coordination role in rjm responsible for breaking down feature requirements, managing implementation strategy, and orchestrating downstream specialist agents while preventing direct peer-to-peer agent sprawl.
