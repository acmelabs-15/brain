---
package: rjm
path: .claude/skills/observability/scripts/query_logs.py
type: script
bytes: 8860
unit: inv-rjm-128
in_scope_via: .claude/skills/observability/SKILL.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/observability/scripts/query_logs.py, sha256: 52b5d64d98daf4538a5dae49954b3d548feb8e0f606cc81ab8b991f0f17e909b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/observability/scripts/query_logs.py

## Purpose — required, verbatim
> "Parses and filters JSONL agent event logs for debugging and analysis." — .claude/skills/observability/scripts/query_logs.py:4

## Design intent — required
CLI query utility for agent observability logs in JSONL format. Provides rich filtering capabilities across event types, session IDs, agent roles, log levels, tool names, ISO timestamps (`--since`, `--until`), error-only filtering (`--errors-only`), and tool latency thresholds (`--slow <ms>`). Formats results as human-readable fixed-width tables, raw JSON, session-grouped summary statistics (aggregating event counts, tool calls, decisions, errors, and total durations), or tool-usage rollups (aggregating call counts, successes, failures, durations, and averages).

## Phase — required
cross-phase

## Inputs — required
- Positional argument `logfile`: Path to JSONL log file (.claude/skills/observability/scripts/query_logs.py:209).
- CLI filter flags: `--event-type`, `--session-id`, `--agent`, `--level`, `--tool`, `--since`, `--until`, `--errors-only`, `--slow`, `--output` (.claude/skills/observability/scripts/query_logs.py:210-231).

## Outputs — required
- Standard output: Formatted table, raw JSON array of filtered events, JSON session summary object (`summary-sessions`), or JSON tool summary object (`summary-tools`) (.claude/skills/observability/scripts/query_logs.py:258-265).
- Standard error: Warning messages for invalid JSON lines (.claude/skills/observability/scripts/query_logs.py:28-31) and error messages for missing or unreadable files (.claude/skills/observability/scripts/query_logs.py:236, 242).

## Invokes — required
none

## Invoked by — required
- script query_logs.py — .claude/skills/observability/SKILL.md:18
- script query_logs.py — .claude/skills/observability/SKILL.md:76
- script query_logs.py — .claude/skills/observability/SKILL.md:84
- script query_logs.py — .claude/skills/observability/SKILL.md:93
- script query_logs.py — .claude/skills/observability/SKILL.md:105

## Concepts named — required, verbatim
- `Agent observability log query utility` — .claude/skills/observability/scripts/query_logs.py:2 — defined here
- `parse_event` — .claude/skills/observability/scripts/query_logs.py:20 — defined here
- `load_events` — .claude/skills/observability/scripts/query_logs.py:35 — defined here
- `filter_events` — .claude/skills/observability/scripts/query_logs.py:46 — defined here
- `summarize_session` — .claude/skills/observability/scripts/query_logs.py:94 — defined here
- `summarize_tools` — .claude/skills/observability/scripts/query_logs.py:130 — defined here
- `format_table` — .claude/skills/observability/scripts/query_logs.py:167 — defined here
- `main` — .claude/skills/observability/scripts/query_logs.py:204 — defined here
- `argparse` — .claude/skills/observability/scripts/query_logs.py:14 — used here
- `JSONDecodeError` — .claude/skills/observability/scripts/query_logs.py:27 — used here
- `summary-sessions` — .claude/skills/observability/scripts/query_logs.py:228 — defined here
- `summary-tools` — .claude/skills/observability/scripts/query_logs.py:228 — defined here
- `slow_threshold_ms` — .claude/skills/observability/scripts/query_logs.py:56 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/observability/scripts/query_logs.py`, language: Python 3, lines: 272
- documented invocation: `python .claude/skills/observability/scripts/query_logs.py .agents/logs/sess-001.jsonl` — .claude/skills/observability/SKILL.md:105
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/observability/scripts/query_logs.py nonexistent_file.jsonl`
- stdout: (empty)
- stderr: `Error: File not found: nonexistent_file.jsonl`
- actual exit code: 1
- documented exit codes vs actual exit paths:
  Documented in `.claude/skills/observability/scripts/query_logs.py`:
  - `0 - Success: Query completed and results output` — .claude/skills/observability/scripts/query_logs.py:7
  - `1 - Error: File not found or invalid arguments` — .claude/skills/observability/scripts/query_logs.py:8
  - `2 - Error: Invalid JSONL format` — .claude/skills/observability/scripts/query_logs.py:9
  Actual exit paths in code:
  - `return 0` on successful query execution (.claude/skills/observability/scripts/query_logs.py:267)
  - `return 1` on missing file (.claude/skills/observability/scripts/query_logs.py:237)
  - `return 2` on unhandled exception during load_events (.claude/skills/observability/scripts/query_logs.py:243)
  - `sys.exit(main())` entry point (.claude/skills/observability/scripts/query_logs.py:271)
  - `argparse` automatically exits with code 2 on invalid arguments (e.g. unrecognized flags or missing required positional arguments), not exit code 1 as documented in docstring line 8.
  - Invalid JSON lines do not exit with code 2; `parse_event()` catches `json.JSONDecodeError` at line 27, emits a warning to stderr, skips the line, and `main()` returns exit code 0.
- for validators/gates: N/A (query and analysis utility, not a gate script).
- does the output match what the documentation claims: Yes, correctly queries, filters, and formats JSONL log events according to `--output` mode.

## Defects — required
- exit-code-mismatch — .claude/skills/observability/scripts/query_logs.py:8 — Docstring line 8 states exit code 1 is for `File not found or invalid arguments`, but `argparse` exits with code 2 on invalid arguments. Exit code 1 is only returned when the file does not exist.
- exit-code-mismatch — .claude/skills/observability/scripts/query_logs.py:9 — Docstring line 9 and SKILL.md line 99 state exit code 2 is for `Invalid JSONL format`, but `parse_event()` (line 27) catches `json.JSONDecodeError`, logs a warning to stderr, skips the line, and returns exit code 0.

## Observations
Gracefully tolerates malformed JSON lines with stderr warnings rather than aborting processing.

## Context cost
8860 bytes (~2215 tokens).
