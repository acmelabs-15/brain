---
package: rjm
path: .claude/skills/observability/schema.json
type: skill
bytes: 3163
unit: inv-rjm-128
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/observability/schema.json, sha256: 1ace8993f809a4b99066c54b6612555cd89aaae0de1af9585a317fdb3b370632}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/observability/schema.json

## Purpose — required, verbatim
> "JSONL event schema for agent-legible observability. Each line in a .jsonl file is one event." — .claude/skills/observability/schema.json:4

## Design intent — required
Defines the official JSON Schema (draft 2020-12) for agent execution observability event logs in JSONL format. It standardizes the mandatory envelope fields (`timestamp`, `event_type`, `session_id`) and payload schemas for six core event types (`session_start`, `session_end`, `tool_call`, `decision`, `metric`, `error`). A critical capability is capturing agent reasoning alongside actions via the `decision` object (`action`, `reasoning`, `alternatives_considered`). Without this schema, agent execution logs would lack consistent structure, making automated telemetry parsing, tool latency profiling, error classification, and reasoning audits across agents impossible.

## Phase — required
cross-phase

## Inputs — required
Agent execution lifecycle events across tool invocations, reasoning decisions, metric recordings, and error occurrences.

## Outputs — required
JSON Schema specification validating individual agent event log lines.

## Invokes — required
none

## Invoked by — required
- skill observability — .claude/skills/observability/SKILL.md:41

## Concepts named — required, verbatim
- `Agent Observability Event` — .claude/skills/observability/schema.json:3 — defined here
- `JSONL event schema` — .claude/skills/observability/schema.json:4 — defined here
- `agent-legible observability` — .claude/skills/observability/schema.json:4 — defined here
- `timestamp` — .claude/skills/observability/schema.json:7 — defined here
- `event_type` — .claude/skills/observability/schema.json:8 — defined here
- `session_id` — .claude/skills/observability/schema.json:9 — defined here
- `tool_call` — .claude/skills/observability/schema.json:20 — defined here
- `decision` — .claude/skills/observability/schema.json:21 — defined here
- `metric` — .claude/skills/observability/schema.json:22 — defined here
- `error` — .claude/skills/observability/schema.json:23 — defined here
- `session_start` — .claude/skills/observability/schema.json:24 — defined here
- `session_end` — .claude/skills/observability/schema.json:25 — defined here
- `agent` — .claude/skills/observability/schema.json:33 — defined here
- `trace_id` — .claude/skills/observability/schema.json:37 — defined here
- `level` — .claude/skills/observability/schema.json:41 — defined here
- `tool` — .claude/skills/observability/schema.json:51 — defined here
- `alternatives_considered` — .claude/skills/observability/schema.json:87 — defined here
- `recoverable` — .claude/skills/observability/schema.json:128 — defined here
- `message` — .claude/skills/observability/schema.json:136 — defined here

## Structure
none (JSON Schema document defining properties: `timestamp`, `event_type`, `session_id`, `agent`, `trace_id`, `level`, `tool`, `decision`, `metric`, `error`, `message`)

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Schema specifies `additionalProperties: false` at line 141, strictly forbidding undeclared top-level attributes and ensuring schema conformance across all agent loggers.

## Context cost
3163 bytes, ~800 tokens.
