---
package: rjm
path: .claude/skills/observability/SKILL.md
type: skill
bytes: 6308
unit: inv-rjm-128
in_scope_via: .claude/skills/review/references/observability.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/observability/SKILL.md, sha256: d07aa90e79ffe8c33b566756e2d80f22aabbcbb71daf128c132d2f1047d1d23f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/observability/SKILL.md

## Purpose — required, verbatim
> "Query and analyze agent JSONL event logs for debugging, performance analysis, and decision tracing." — .claude/skills/observability/SKILL.md:6

## Design intent — required
Operator skill enabling AI coding agents and human engineers to inspect, query, and analyze structured JSONL event logs emitted during multi-agent sessions. Solves the problem of debugging agent failures, tracing complex routing and tool decisions across sub-agents, and pinpointing slow tool executions. Defines trigger phrases, when-to-use criteria (contrasted against direct inspection for tiny logs), event taxonomy matching `schema.json`, log directory locations (`.agents/logs/{session-id}.jsonl`), execution anti-patterns, script execution examples with `query_logs.py`, verification checklists, and cross-references to observability theory and Prometheus recording rules.

## Phase — required
cross-phase

## Inputs — required
- Trigger phrases: `query agent logs`, `find slow tool calls`, `show agent errors`, `summarize session performance`, `analyze tool usage` (.claude/skills/observability/SKILL.md:18-22).
- Agent JSONL event logs at `.agents/logs/{session-id}.jsonl` (.claude/skills/observability/SKILL.md:68-71).
- CLI filter parameters passed to `scripts/query_logs.py` (.claude/skills/observability/SKILL.md:104-129).

## Outputs — required
- Terminal query results formatted as tables, JSON, session summaries, or tool summaries (.claude/skills/observability/SKILL.md:117-129).

## Invokes — required
- script query_logs.py — .claude/skills/observability/SKILL.md:18
- file schema.json — .claude/skills/observability/SKILL.md:41
- script query_logs.py — .claude/skills/observability/SKILL.md:76
- script query_logs.py — .claude/skills/observability/SKILL.md:84
- script query_logs.py — .claude/skills/observability/SKILL.md:93
- script query_logs.py — .claude/skills/observability/SKILL.md:105
- reference three-pillars-reference.md — .claude/skills/observability/SKILL.md:146
- reference prometheus-recording-rules.md — .claude/skills/observability/SKILL.md:147
- reference otel-migration-reference.md — .claude/skills/observability/SKILL.md:148
- file schema.json — .claude/skills/observability/SKILL.md:152
- skill metrics — .claude/skills/observability/SKILL.md:153

## Invoked by — required
- reference observability.md — .claude/skills/review/references/observability.md:51
- skill review — .claude/skills/review/SKILL.md:91
- skill ai-agents-debugging-playbook — .claude/skills/ai-agents-debugging-playbook/SKILL.md:34

## Concepts named — required, verbatim
- `query agent logs` — .claude/skills/observability/SKILL.md:18 — defined here
- `find slow tool calls` — .claude/skills/observability/SKILL.md:19 — defined here
- `show agent errors` — .claude/skills/observability/SKILL.md:20 — defined here
- `summarize session performance` — .claude/skills/observability/SKILL.md:21 — defined here
- `analyze tool usage` — .claude/skills/observability/SKILL.md:22 — defined here
- `session_start` — .claude/skills/observability/SKILL.md:47 — defined here
- `session_end` — .claude/skills/observability/SKILL.md:48 — defined here
- `tool_call` — .claude/skills/observability/SKILL.md:49 — defined here
- `decision` — .claude/skills/observability/SKILL.md:50 — defined here
- `metric` — .claude/skills/observability/SKILL.md:51 — defined here
- `error` — .claude/skills/observability/SKILL.md:52 — defined here
- `schema.json` — .claude/skills/observability/SKILL.md:41 — used here
- `query_logs.py` — .claude/skills/observability/SKILL.md:18 — used here
- `three-pillars-reference.md` — .claude/skills/observability/SKILL.md:146 — used here
- `prometheus-recording-rules.md` — .claude/skills/observability/SKILL.md:147 — used here
- `otel-migration-reference.md` — .claude/skills/observability/SKILL.md:148 — used here
- `Agent Metrics Skill` — .claude/skills/observability/SKILL.md:153 — used here

## Structure
- `# Agent Observability Skill` — .claude/skills/observability/SKILL.md:10
- `## Triggers` — .claude/skills/observability/SKILL.md:14
- `## When to Use` — .claude/skills/observability/SKILL.md:24
- `## Event Schema` — .claude/skills/observability/SKILL.md:39
- `### Event Types` — .claude/skills/observability/SKILL.md:43
- `### Example Events` — .claude/skills/observability/SKILL.md:54
- `## Log File Location` — .claude/skills/observability/SKILL.md:63
- `## Process` — .claude/skills/observability/SKILL.md:73
- `## Anti-Patterns` — .claude/skills/observability/SKILL.md:80
- `## Scripts` — .claude/skills/observability/SKILL.md:89
- `## Quick Start` — .claude/skills/observability/SKILL.md:101
- `## Verification` — .claude/skills/observability/SKILL.md:131
- `## References` — .claude/skills/observability/SKILL.md:140
- `## Related Documents` — .claude/skills/observability/SKILL.md:150

## Scripts — required if type is script or the skill ships scripts
The skill ships script `scripts/query_logs.py`:
- path: `.claude/skills/observability/scripts/query_logs.py`, language: Python 3.8+, lines: 272
- documented invocation: `python .claude/skills/observability/scripts/query_logs.py .agents/logs/sess-001.jsonl` — .claude/skills/observability/SKILL.md:105
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/observability/scripts/query_logs.py nonexistent_file.jsonl`
- stdout: (empty)
- stderr: `Error: File not found: nonexistent_file.jsonl`
- actual exit code: 1
- documented exit codes vs actual exit paths:
  Documented in `.claude/skills/observability/SKILL.md`:
  - `0` — Query completed and results output (.claude/skills/observability/SKILL.md:97)
  - `1` — File not found or invalid arguments (.claude/skills/observability/SKILL.md:98)
  - `2` — Invalid JSONL format (.claude/skills/observability/SKILL.md:99)
  Actual exit paths in code:
  - Returns 0 on successful execution (.claude/skills/observability/scripts/query_logs.py:267).
  - Returns 1 when file does not exist (.claude/skills/observability/scripts/query_logs.py:237).
  - Returns 2 when an unhandled exception occurs in `load_events()` (.claude/skills/observability/scripts/query_logs.py:243).
  - Argparse exits with code 2 on invalid arguments, not code 1.
  - Invalid JSONL lines are skipped with a warning and return code 0, not code 2.
- does output match what documentation claims: Yes, correctly queries, filters, and formats JSONL log events according to `--output` mode.

## Defects — required
- doc-drift — .claude/skills/observability/SKILL.md:144-149 — References table at lines 144-149 lists only 3 references (`three-pillars-reference.md`, `prometheus-recording-rules.md`, `otel-migration-reference.md`), omitting 2 references physically located in `references/` (`distributed-systems-fallacies.md`, `otel-semantic-conventions.md`).
- exit-code-mismatch — .claude/skills/observability/SKILL.md:99 — SKILL.md lists exit code 2 as `Invalid JSONL format`, but `scripts/query_logs.py` handles invalid JSON lines by printing a warning to stderr and skipping them (line 27), exiting with code 0.

## Observations
Frontmatter configures `model: haiku` with cost optimization rationale referencing ADR-080 rule 3.

## Context cost
6308 bytes (~1577 tokens) for SKILL.md.
Total bundled skill context with all 5 references (17323 bytes), schema.json (3163 bytes), and query_logs.py (8860 bytes) is 35654 bytes (~8914 tokens).
