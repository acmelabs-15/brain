---
package: rjm
path: scripts/measure_context_retrieval_metrics.py
type: script
bytes: 9980
unit: inv-rjm-253
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/measure_context_retrieval_metrics.py, sha256: 02cfed6442a9a6f67c9374b9808c64b11b04ed0fb0791e1b287b90180ffe27ea}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/measure_context_retrieval_metrics.py

## Purpose — required, verbatim
> "Measure context-retrieval auto-invocation metrics from session logs." — scripts/measure_context_retrieval_metrics.py:2

## Design intent — required
Parses historical session logs in `.agents/sessions/` to extract metrics on context-retrieval agent auto-invocations during task orchestration. Quantifies auto-invocation rates against targets (such as >=90% on eligible tasks), computes domain complexity statistics, and presents summary metrics in human-readable table or JSON formats to monitor context-retrieval orchestration health.

## Phase — required
cross-phase

## Inputs — required
- Session log files (`*.json`) located in `.agents/sessions/` or directory specified via `--sessions-dir` (scripts/measure_context_retrieval_metrics.py:95, 206)
- CLI options:
  - `--sessions-dir`: "Path to sessions directory (default: .agents/sessions/)" — scripts/measure_context_retrieval_metrics.py:208
  - `--limit`: "Maximum number of session logs to analyze (default: 50)" — scripts/measure_context_retrieval_metrics.py:214
  - `--format`: "Output format (default: table)" — scripts/measure_context_retrieval_metrics.py:220

## Outputs — required
- Formatted summary metrics table printed to stdout (default format) detailing session counts, eligible orchestrations, invoked/skipped counts, auto-invocation rate, and target comparisons (scripts/measure_context_retrieval_metrics.py:255-285)
- JSON-formatted metrics object printed to stdout when `--format json` is specified (scripts/measure_context_retrieval_metrics.py:253)
- Error messages printed to stderr if sessions directory is outside project root or missing (scripts/measure_context_retrieval_metrics.py:230, 240)
- Process exit codes: 0 (success), 1 (missing/invalid sessions dir), 2 (unexpected error) (scripts/measure_context_retrieval_metrics.py:8-10, 235, 244, 250, 287)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — scripts/measure_context_retrieval_metrics.py:12 — used here
- `InvocationRecord` — scripts/measure_context_retrieval_metrics.py:25 — defined here
- `Metrics` — scripts/measure_context_retrieval_metrics.py:39 — defined here
- `find_session_logs` — scripts/measure_context_retrieval_metrics.py:95 — defined here
- `extract_context_retrieval_data` — scripts/measure_context_retrieval_metrics.py:102 — defined here
- `collect_metrics` — scripts/measure_context_retrieval_metrics.py:179 — defined here
- `main` — scripts/measure_context_retrieval_metrics.py:199 — defined here

## Structure
- Module docstring and exit code specifications — scripts/measure_context_retrieval_metrics.py:1
- InvocationRecord dataclass — scripts/measure_context_retrieval_metrics.py:24
- Metrics aggregator dataclass with dictionary conversion — scripts/measure_context_retrieval_metrics.py:38
- find_session_logs log file discovery — scripts/measure_context_retrieval_metrics.py:95
- extract_context_retrieval_data log parser function — scripts/measure_context_retrieval_metrics.py:102
- collect_metrics aggregation function — scripts/measure_context_retrieval_metrics.py:179
- CLI entrypoint main and argument parsing — scripts/measure_context_retrieval_metrics.py:199

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/measure_context_retrieval_metrics.py`
- **language:** Python (python3)
- **lines:** 292
- **documented invocation:**
  - `none` (standard CLI utility, executed as `measure_context_retrieval_metrics.py [options]`)
- **executed:** yes
- **actual command run:** `python3 sources/rjm/scripts/measure_context_retrieval_metrics.py`
- **abridged stdout:**
```text
=== Context-Retrieval Auto-Invocation Metrics ===
Sessions analyzed: 0
Eligible orchestrations: 0
Context-retrieval invoked: 0
Context-retrieval skipped: 0
Invocation rate: 0.0%

--- Targets ---
  Auto-invocation rate: 0.0% (target: >=90%)
  Token overhead: N/A (requires runtime measurement)
  Context reuse: N/A (requires downstream tracking)
  False positive rate: N/A (requires relevance scoring)
```
- **actual exit code:** 0
- **documented exit codes vs. actual exit paths in code:**
  - Documented:
    - "0  - Success: Metrics collected and reported" — scripts/measure_context_retrieval_metrics.py:8
    - "1  - Error: No session logs found or parsing failed" — scripts/measure_context_retrieval_metrics.py:9
    - "2  - Error: Unexpected error" — scripts/measure_context_retrieval_metrics.py:10
  - Actual code paths:
    - `return 1` — scripts/measure_context_retrieval_metrics.py:235 (sessions dir outside project root)
    - `return 1` — scripts/measure_context_retrieval_metrics.py:244 (sessions dir not found)
    - `return 2` — scripts/measure_context_retrieval_metrics.py:250 (unexpected exception during collect_metrics)
    - `return 0` — scripts/measure_context_retrieval_metrics.py:287 (successful execution)
    - `sys.exit(main())` — scripts/measure_context_retrieval_metrics.py:291
- **for validators/gates:**
  - Can exit non-zero: yes, exits 1 when sessions directory is invalid/missing, exits 2 on unexpected parsing failure.
  - Verified on default branch: exits 0 on default run when `.agents/sessions` is present.
- **does the output match what the documentation claims:** yes, produces tabular metrics summary matching target specifications.

## Defects — required
- `doc-drift`: "1  - Error: No session logs found or parsing failed" — scripts/measure_context_retrieval_metrics.py:9 claims exit code 1 when no logs are found, but code returns 0 with empty metrics when no session logs exist in an existing sessions directory (scripts/measure_context_retrieval_metrics.py:287).

## Observations
- Enforces CWE-22 path containment ensuring `--sessions-dir` cannot resolve outside the project root directory.

## Context cost
9980 bytes, 292 lines, ~2400 tokens.
