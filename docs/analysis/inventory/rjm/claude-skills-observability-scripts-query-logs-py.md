---
package: rjm
path: .claude/skills/observability/scripts/query_logs.py
type: script
bytes: 8860
unit: inv-rjm-128
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/observability/scripts/query_logs.py, sha256: 52b5d64d98daf4538a5dae49954b3d548feb8e0f606cc81ab8b991f0f17e909b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/observability/scripts/query_logs.py

## Purpose — required, verbatim
> "Agent observability log query utility." — .claude/skills/observability/scripts/query_logs.py:2

## Design intent — required
Provides a dedicated CLI query and aggregation tool for agent execution logs conforming to the agent observability JSONL schema. It allows operators and reviewing agents to filter event streams by event type, session ID, agent name, log level, specific tool invocations, ISO timestamp boundaries, errors only, and latency thresholds. It also computes statistical summaries by session and tool duration. Without it, inspecting and debugging agent behavior across sessions requires slow, error-prone manual JSONL inspection or ad-hoc custom shell scripts.

## Phase — required
cross-phase

## Inputs — required
- Positional argument `logfile`: path to JSONL log file (.claude/skills/observability/scripts/query_logs.py:209)
- Command-line flags and filter options:
  - `--event-type` (.claude/skills/observability/scripts/query_logs.py:210)
  - `--session-id` (.claude/skills/observability/scripts/query_logs.py:211)
  - `--agent` (.claude/skills/observability/scripts/query_logs.py:212)
  - `--level` (.claude/skills/observability/scripts/query_logs.py:213)
  - `--tool` (.claude/skills/observability/scripts/query_logs.py:214)
  - `--since` (.claude/skills/observability/scripts/query_logs.py:215)
  - `--until` (.claude/skills/observability/scripts/query_logs.py:216)
  - `--errors-only` (.claude/skills/observability/scripts/query_logs.py:218)
  - `--slow` (.claude/skills/observability/scripts/query_logs.py:221)
  - `--output` (`json`, `table`, `summary-sessions`, `summary-tools`) (.claude/skills/observability/scripts/query_logs.py:227)

## Outputs — required
Formatted output printed to stdout:
- Human-readable event table by default (.claude/skills/observability/scripts/query_logs.py:265)
- Formatted JSON list of matching events when `--output json` is set (.claude/skills/observability/scripts/query_logs.py:259)
- Formatted JSON session aggregates when `--output summary-sessions` is set (.claude/skills/observability/scripts/query_logs.py:261)
- Formatted JSON tool performance metrics when `--output summary-tools` is set (.claude/skills/observability/scripts/query_logs.py:263)

## Invokes — required
none

## Invoked by — required
- skill observability — .claude/skills/observability/SKILL.md:93

## Concepts named — required, verbatim
- `Agent observability log query utility` — .claude/skills/observability/scripts/query_logs.py:2 — defined here
- `ADR-035` — .claude/skills/observability/scripts/query_logs.py:6 — used here
- `parse_event` — .claude/skills/observability/scripts/query_logs.py:20 — defined here
- `load_events` — .claude/skills/observability/scripts/query_logs.py:35 — defined here
- `filter_events` — .claude/skills/observability/scripts/query_logs.py:46 — defined here
- `summarize_session` — .claude/skills/observability/scripts/query_logs.py:94 — defined here
- `summarize_tools` — .claude/skills/observability/scripts/query_logs.py:130 — defined here
- `format_table` — .claude/skills/observability/scripts/query_logs.py:167 — defined here
- `main` — .claude/skills/observability/scripts/query_logs.py:204 — defined here

## Structure
none (Python utility module defining functions: `parse_event`, `load_events`, `filter_events`, `summarize_session`, `summarize_tools`, `format_table`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/observability/scripts/query_logs.py`, language: Python 3, lines: 272
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
  Documented in script docstring:
  - "0 - Success: Query completed and results output" — .claude/skills/observability/scripts/query_logs.py:7
    Actual code: returns 0 at line 267 (.claude/skills/observability/scripts/query_logs.py:267)
  - "1 - Error: File not found or invalid arguments" — .claude/skills/observability/scripts/query_logs.py:8
    Actual code: returns 1 at line 237 on missing file (.claude/skills/observability/scripts/query_logs.py:237); argparse exits 2 on unrecognized arguments.
  - "2 - Error: Invalid JSONL format" — .claude/skills/observability/scripts/query_logs.py:9
    Actual code: line 243 returns 2 on unhandled exception during load_events (.claude/skills/observability/scripts/query_logs.py:243), but parse_event catches JSONDecodeError at line 27 (.claude/skills/observability/scripts/query_logs.py:27), emits a warning, and skips the line, causing invalid JSONL lines to exit with 0.
- for validators/gates: not a gate (diagnostic query utility). Can exit non-zero (exits 1 on missing file).
- does the output match what the documentation claims: yes for query and summary output; diverges on exit code 2 when parsing malformed JSON lines.

## Defects — required
- `script-bug` · `exit-code-mismatch` · .claude/skills/observability/scripts/query_logs.py:27 · The docstring (line 9) defines exit code 2 as "Error: Invalid JSONL format", but parse_event() catches json.JSONDecodeError at line 27, emits a warning to stderr, and skips the invalid line, causing the script to exit with code 0 instead of returning code 2.

## Observations
Follows ADR-035 for exit code standardization. Supports both human-readable table rendering and machine-readable JSON summary aggregates.

## Context cost
8860 bytes, ~2200 tokens.
