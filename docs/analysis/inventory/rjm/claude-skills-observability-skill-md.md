---
package: rjm
path: .claude/skills/observability/SKILL.md
type: skill
bytes: 6308
unit: inv-rjm-128
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/observability/SKILL.md, sha256: d07aa90e79ffe8c33b566756e2d80f22aabbcbb71daf128c132d2f1047d1d23f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/observability/SKILL.md

## Purpose — required, verbatim
> "Query structured JSONL event logs to understand agent behavior, debug failures, and analyze performance." — .claude/skills/observability/SKILL.md:12

## Design intent — required
Provides operational procedures, command patterns, schema references, and triage guidelines for querying agent execution event logs in JSONL format. It equips reviewing agents and developers with standardized CLI triggers (`query agent logs`, `find slow tool calls`, `show agent errors`) to inspect agent decisions, tool durations, session summaries, and runtime errors. Without it, developers and agents lack consistent tooling to trace agent decision logic, detect latency bottlenecks, or correlate multi-agent orchestration events.

## Phase — required
cross-phase

## Inputs — required
- Trigger phrases: `query agent logs`, `find slow tool calls`, `show agent errors`, `summarize session performance`, `analyze tool usage` (.claude/skills/observability/SKILL.md:18-22)
- Structured JSONL event logs located at `.agents/logs/{session-id}.jsonl` (.claude/skills/observability/SKILL.md:70)

## Outputs — required
Formatted log analysis, session summaries, tool usage profiles, and error breakdowns emitted to stdout via `scripts/query_logs.py`.

## Invokes — required
- script query_logs.py — .claude/skills/observability/SKILL.md:93
- reference three-pillars-reference.md — .claude/skills/observability/SKILL.md:146
- reference prometheus-recording-rules.md — .claude/skills/observability/SKILL.md:147
- reference otel-migration-reference.md — .claude/skills/observability/SKILL.md:148
- skill schema.json — .claude/skills/observability/SKILL.md:152
- skill metrics — .claude/skills/observability/SKILL.md:153

## Invoked by — required
- reference observability — .claude/skills/review/references/observability.md:51
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-debugging-playbook/SKILL.md:34
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:49

## Concepts named — required, verbatim
- `observability` — .claude/skills/observability/SKILL.md:2 — defined here
- `haiku` — .claude/skills/observability/SKILL.md:4 — used here
- `ADR-080` — .claude/skills/observability/SKILL.md:5 — used here
- `query agent logs` — .claude/skills/observability/SKILL.md:6 — defined here
- `find slow tool calls` — .claude/skills/observability/SKILL.md:6 — defined here
- `show agent errors` — .claude/skills/observability/SKILL.md:6 — defined here
- `Agent Observability Skill` — .claude/skills/observability/SKILL.md:10 — defined here
- `JSONL event logs` — .claude/skills/observability/SKILL.md:12 — used here
- `summarize session performance` — .claude/skills/observability/SKILL.md:21 — defined here
- `analyze tool usage` — .claude/skills/observability/SKILL.md:22 — defined here
- `JSON Schema` — .claude/skills/observability/SKILL.md:41 — used here
- `session_start` — .claude/skills/observability/SKILL.md:47 — used here
- `session_end` — .claude/skills/observability/SKILL.md:48 — used here
- `tool_call` — .claude/skills/observability/SKILL.md:49 — used here
- `decision` — .claude/skills/observability/SKILL.md:50 — used here
- `metric` — .claude/skills/observability/SKILL.md:51 — used here
- `error` — .claude/skills/observability/SKILL.md:52 — used here
- `sess-001` — .claude/skills/observability/SKILL.md:57 — used here
- `implementer` — .claude/skills/observability/SKILL.md:57 — used here
- `alternatives_considered` — .claude/skills/observability/SKILL.md:59 — used here
- `test_failure` — .claude/skills/observability/SKILL.md:60 — used here
- `recoverable` — .claude/skills/observability/SKILL.md:60 — used here
- `query_logs.py` — .claude/skills/observability/SKILL.md:93 — used here

## Structure
# Agent Observability Skill — .claude/skills/observability/SKILL.md:10
## Triggers — .claude/skills/observability/SKILL.md:14
## When to Use — .claude/skills/observability/SKILL.md:24
## Event Schema — .claude/skills/observability/SKILL.md:39
### Event Types — .claude/skills/observability/SKILL.md:43
### Example Events — .claude/skills/observability/SKILL.md:54
## Log File Location — .claude/skills/observability/SKILL.md:63
## Process — .claude/skills/observability/SKILL.md:73
## Anti-Patterns — .claude/skills/observability/SKILL.md:80
## Scripts — .claude/skills/observability/SKILL.md:89
## Quick Start — .claude/skills/observability/SKILL.md:101
## Verification — .claude/skills/observability/SKILL.md:131
## References — .claude/skills/observability/SKILL.md:140
## Related Documents — .claude/skills/observability/SKILL.md:150

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/observability/scripts/query_logs.py`, language: Python 3.8+, lines: 272
- documented invocation:
  - "python .claude/skills/observability/scripts/query_logs.py .agents/logs/sess-001.jsonl" — .claude/skills/observability/SKILL.md:105
  - "python .claude/skills/observability/scripts/query_logs.py .agents/logs/sess-001.jsonl --errors-only" — .claude/skills/observability/SKILL.md:108
  - "python .claude/skills/observability/scripts/query_logs.py .agents/logs/sess-001.jsonl --slow 500" — .claude/skills/observability/SKILL.md:111
  - "python .claude/skills/observability/scripts/query_logs.py .agents/logs/sess-001.jsonl --agent implementer" — .claude/skills/observability/SKILL.md:114
  - "python .claude/skills/observability/scripts/query_logs.py .agents/logs/sess-001.jsonl --output summary-sessions" — .claude/skills/observability/SKILL.md:117
  - "python .claude/skills/observability/scripts/query_logs.py .agents/logs/sess-001.jsonl --output summary-tools" — .claude/skills/observability/SKILL.md:120
  - "python .claude/skills/observability/scripts/query_logs.py .agents/logs/sess-001.jsonl \" — .claude/skills/observability/SKILL.md:127
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/observability/scripts/query_logs.py .agents/logs/sess-001.jsonl`
  abridged stdout:
  ```
  Error: File not found: .agents/logs/sess-001.jsonl
  ```
  **actual exit code:** 1
  Execution with valid test log:
  Command: `python3 sources/rjm/.claude/skills/observability/scripts/query_logs.py <sample_log.jsonl>`
  abridged stdout:
  ```
  Timestamp                  Type           Agent          Details
  --------------------------------------------------------------------------------
  2026-03-30T10:00:00Z       session_start  implementer    Session started
  2026-03-30T10:00:01Z       tool_call      implementer    Read (45ms)
  2026-03-30T10:00:02Z       decision       implementer    Edit existing function
  2026-03-30T10:00:10Z       error          implementer    Test failed: assertion error in test_par
  ```
  **actual exit code:** 0
- documented exit codes vs actual exit paths:
  Documented in SKILL.md:96-99:
  - "0" — .claude/skills/observability/SKILL.md:97 / "Query completed and results output" — .claude/skills/observability/SKILL.md:97
    Actual code: returns 0 at line 267 (.claude/skills/observability/scripts/query_logs.py:267)
  - "1" — .claude/skills/observability/SKILL.md:98 / "File not found or invalid arguments" — .claude/skills/observability/SKILL.md:98
    Actual code: returns 1 at line 237 on missing file (.claude/skills/observability/scripts/query_logs.py:237); argparse exits 2 on invalid arguments.
  - "2" — .claude/skills/observability/SKILL.md:99 / "Invalid JSONL format" — .claude/skills/observability/SKILL.md:99
    Actual code: returns 2 at line 244 on unhandled exception during load_events (.claude/skills/observability/scripts/query_logs.py:244), but parse_event catches JSONDecodeError at line 27 (.claude/skills/observability/scripts/query_logs.py:27), emits a warning, and skips the line, causing invalid JSONL lines to exit with 0.
- for validators/gates: not a gate.
- does the output match what the documentation claims: matches table and summary output claims; diverges on exit code 2 when parsing malformed JSON lines.

## Defects — required
- `missing-path` · .claude/skills/observability/SKILL.md:105 · Quick Start section references example log file `.agents/logs/sess-001.jsonl`, but `.agents/logs/` directory does not exist in the repository.
- `doc-drift` · .claude/skills/observability/SKILL.md:144 · References table enumerates `three-pillars-reference.md`, `prometheus-recording-rules.md`, and `otel-migration-reference.md`, but omits `distributed-systems-fallacies.md` and `otel-semantic-conventions.md` located in the same `references/` directory.

## Observations
Specifies model tier `haiku` in frontmatter with rationale citing ADR-080 rule 3 ("routing/mechanical work where the cheaper tier suffices"). Standardizes `.agents/logs/{session-id}.jsonl` as the default location for agent execution telemetry.

## Context cost
6308 bytes + 8860 (query_logs.py) + 3163 (schema.json) + 3765 (distributed-systems-fallacies.md) + 3606 (otel-migration-reference.md) + 3474 (otel-semantic-conventions.md) + 3493 (prometheus-recording-rules.md) + 2985 (three-pillars-reference.md) = 35,654 bytes, ~8,900 tokens.
