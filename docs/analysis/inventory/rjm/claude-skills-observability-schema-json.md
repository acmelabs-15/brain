---
package: rjm
path: .claude/skills/observability/schema.json
type: skill
bytes: 3163
unit: inv-rjm-128
in_scope_via: .claude/skills/observability/SKILL.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/observability/schema.json, sha256: 1ace8993f809a4b99066c54b6612555cd89aaae0de1af9585a317fdb3b370632}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/observability/schema.json

## Purpose — required, verbatim
> "JSONL event schema for agent-legible observability. Each line in a .jsonl file is one event." — .claude/skills/observability/schema.json:4

## Design intent — required
Formal JSON Schema (draft 2020-12) specifying the standardized event structure for agent-legible observability. Governs structured JSONL logging across multi-agent sessions, requiring `timestamp`, `event_type`, and `session_id` on every event. Enumerates six canonical event types (`session_start`, `session_end`, `tool_call`, `decision`, `metric`, `error`) and four log levels (`DEBUG`, `INFO`, `WARN`, `ERROR`), with dedicated object schemas for tool execution telemetry (`name`, `duration_ms`, `success`, summaries), agent decision rationale (`action`, `reasoning`, `alternatives_considered`), metrics (`name`, `value`, `unit`), and errors (`message`, `category`, `recoverable`). Disallows additional properties (`additionalProperties: false`) to prevent schema drift.

## Phase — required
cross-phase

## Inputs — required
none

## Outputs — required
none

## Invokes — required
none

## Invoked by — required
- file schema.json — .claude/skills/observability/SKILL.md:41
- file schema.json — .claude/skills/observability/SKILL.md:152

## Concepts named — required, verbatim
- `Agent Observability Event` — .claude/skills/observability/schema.json:3 — defined here
- `timestamp` — .claude/skills/observability/schema.json:12 — defined here
- `event_type` — .claude/skills/observability/schema.json:17 — defined here
- `tool_call` — .claude/skills/observability/schema.json:20 — defined here
- `decision` — .claude/skills/observability/schema.json:21 — defined here
- `metric` — .claude/skills/observability/schema.json:22 — defined here
- `error` — .claude/skills/observability/schema.json:23 — defined here
- `session_start` — .claude/skills/observability/schema.json:24 — defined here
- `session_end` — .claude/skills/observability/schema.json:25 — defined here
- `session_id` — .claude/skills/observability/schema.json:29 — defined here
- `agent` — .claude/skills/observability/schema.json:33 — defined here
- `trace_id` — .claude/skills/observability/schema.json:37 — defined here
- `level` — .claude/skills/observability/schema.json:41 — defined here
- `duration_ms` — .claude/skills/observability/schema.json:58 — defined here
- `alternatives_considered` — .claude/skills/observability/schema.json:87 — defined here
- `additionalProperties` — .claude/skills/observability/schema.json:141 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
none

## Observations
Enforces capture of agent reasoning (`action`, `reasoning`, `alternatives_considered`) directly within observability logs, enabling post-session decision tracing and auditability.

## Context cost
3163 bytes (~791 tokens).
