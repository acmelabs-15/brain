---
package: rjm
name: Agent and Hook Event Coverage
slug: agent-and-hook-event-coverage
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/references/observability.md, sha256: 6983df4d518ec2dc87e6bd546c4e7850acb7e9fbcc9644305773239ade46c4ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Agent and Hook Event Coverage

## Definition — verbatim
> "### 4. Agent and Hook Event Coverage" — .claude/skills/review/references/observability.md:76

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/observability.md | 76 | defined here | Focus area checklist verifying that new agent steps or hooks emit the JSONL telemetry events (decisions, tool calls, timings) consumed by the observability skill. |

## Consumes
Agent execution logic, plugin hooks, tool dispatch invocations, and JSONL telemetry event streams.

## Produces
Review findings evaluating whether agent steps emit necessary telemetry to diagnose slow tool calls, stalled conversation turns, or unhandled errors.

## When applied
Applied during observability review whenever a pull request adds or alters agent steps, lifecycle hooks, or tool execution paths.

## Sub-concepts
none

## Part of
observability

## Implementation status
clean

## Design notes
A specialized review checklist in rjm tailored for AI agent architectures, verifying that every agent step and plugin hook emits structured JSONL telemetry for downstream debugging, performance monitoring, and decision tracking.
