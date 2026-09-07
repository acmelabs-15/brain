---
package: rjm
name: Session Initialization Protocol
slug: session-initialization-protocol
kind: checklist
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

# Session Initialization Protocol

## Definition — verbatim
> "## Session Initialization Protocol (REQUIRED FOR NEW SESSIONS)" — docs/autonomous-pr-monitor.md:157
> "Before starting any work in a new Claude Code session, you must complete this blocking initialization sequence." — docs/autonomous-pr-monitor.md:159

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/autonomous-pr-monitor.md | 157 | defined here | Prescribes the mandatory three-phase initialization sequence (Serena initialization, context retrieval, continuity) required for new agent sessions. |

## Consumes
Conversation history indicators, Serena MCP tools, and per-issue handoff documents under `.agents/sessions/handoffs/`.

## Produces
Initialized agent environment with activated project instructions, loaded memories, and retrieved handoff context.

## When applied
Applied at the start of every new Claude Code session before executing any task instructions.

## Sub-concepts
none

## Part of
autonomous-pr-monitoring-prompt

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
The Session Initialization Protocol establishes an invariant bootstrap sequence for autonomous agents, ensuring that project context, semantic memories, and prior session handoffs are ingested before any action is undertaken.
