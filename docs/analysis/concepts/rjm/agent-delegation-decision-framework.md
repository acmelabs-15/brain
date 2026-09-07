---
package: rjm
name: Agent Delegation Decision Framework
slug: agent-delegation-decision-framework
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/autonomous-pr-monitor.md, sha256: caca26ec0269cbd68d7d14d74e1c83c69e8fcda1aeffc8e550d09c4859bbfcba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent Delegation Decision Framework

## Definition — verbatim
> "## Agent Delegation Decision Framework" — docs/autonomous-pr-monitor.md:220
> "Determine whether to execute the task directly or delegate to the orchestrator agent." — docs/autonomous-pr-monitor.md:222

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 220 | defined here | Establishes decision criteria for determining whether an agent executes a task directly or delegates to the orchestrator agent. |

## Consumes
Incoming task description, scope of code changes, and multi-agent coordination requirements.

## Produces
Delegation decision: direct execution versus subagent dispatch via `Task(subagent_type="orchestrator", prompt="...")`.

## When applied
Applied during session analysis prior to task execution to route work between direct execution and multi-agent coordination.

## Sub-concepts
none

## Part of
autonomous-pr-monitoring-prompt

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The Agent Delegation Decision Framework bifurcates execution between lightweight direct responses and complex multi-agent workflows, delegating code modifications and multi-step tasks to the orchestrator agent to maintain disciplined execution.
