---
package: rjm
path: scripts/compute_health_status.py
type: script
bytes: 17260
unit: inv-rjm-212
in_scope_via: scripts/README.md
aliases: []
memo_inputs:
  - {path: scripts/compute_health_status.py, sha256: 6eaa6186909dcbe2e368395148b24f0b3968685da7f351143d3378094749a863}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/compute_health_status.py

## Purpose — required, verbatim
> "Compute aggregate health status from collected metrics." — scripts/compute_health_status.py:2

## Design intent — required
Provides an automated diagnostic utility that aggregates and evaluates repository operational health across memory systems (`.serena/memories/`) and agent execution histories (`.agents/sessions/`). Without it, repository maintainers and orchestrators would lack a centralized health barometer to detect memory corruption, stale documentation/context, elevated session failure rates, or orchestrator context-retrieval omissions before they degrade agent performance.

## Phase — required
cross-phase

## Inputs — required
- Command-line arguments:
  - `--memories-dir` (default: `.serena/memories/`) — scripts/compute_health_status.py:435
  - `--sessions-dir` (default: `.agents/sessions/`) — scripts/compute_health_status.py:441
  - `--limit` (default: `50`) — scripts/compute_health_status.py:446
  - `--format` (`json`, `table`, `markdown`, default: `table`) — scripts/compute_health_status.py:452
  - `--project-root` (default: auto-detected repository root) — scripts/compute_health_status.py:458
- Files read from disk:
  - Memory markdown files (`*.md`) located under `.serena/memories/` — scripts/compute_health_status.py:232
  - Session execution log JSON files (`*.json`) located under `.agents/sessions/` — scripts/compute_health_status.py:440

## Outputs — required
- Formatted health status report printed to stdout in table, JSON, or markdown format — scripts/compute_health_status.py:494-499
- Process exit code indicating overall system health or error classification (0, 1, 2, or 3) — scripts/compute_health_status.py:481, 492, 503, 504

## Invokes — required
- doc ADR-035 Exit Code Standardization — scripts/compute_health_status.py:13
- doc Issue #178 - Add Health Status Computation from Metrics — scripts/compute_health_status.py:14

## Invoked by — required
- doc scripts/README.md — scripts/README.md:221

## Concepts named — required, verbatim
- `HealthLevel` — scripts/compute_health_status.py:29 — defined here
- `Threshold` — scripts/compute_health_status.py:38 — defined here
- `DEFAULT_THRESHOLDS` — scripts/compute_health_status.py:47 — defined here
- `memory_stale_rate` — scripts/compute_health_status.py:48 — defined here
- `memory_error_rate` — scripts/compute_health_status.py:49 — defined here
- `session_failure_rate` — scripts/compute_health_status.py:50 — defined here
- `context_retrieval_skip_rate` — scripts/compute_health_status.py:51 — defined here
- `ComponentHealth` — scripts/compute_health_status.py:56 — defined here
- `HealthStatusReport` — scripts/compute_health_status.py:79 — defined here
- `overall_level` — scripts/compute_health_status.py:86 — defined here
- `classify_level` — scripts/compute_health_status.py:209 — defined here
- `compute_memory_health` — scripts/compute_health_status.py:229 — defined here
- `compute_session_health` — scripts/compute_health_status.py:301 — defined here
- `compute_health` — scripts/compute_health_status.py:396 — defined here
- `ADR-035 Exit Code Standardization` — scripts/compute_health_status.py:13 — used here

## Structure
- class HealthLevel(Enum) — scripts/compute_health_status.py:29
- class Threshold — scripts/compute_health_status.py:38
- class ComponentHealth — scripts/compute_health_status.py:56
- class HealthStatusReport — scripts/compute_health_status.py:79
- def _level_icon — scripts/compute_health_status.py:170
- def _get_recommendations — scripts/compute_health_status.py:180
- def classify_level — scripts/compute_health_status.py:209
- def compute_memory_health — scripts/compute_health_status.py:229
- def compute_session_health — scripts/compute_health_status.py:301
- def compute_health — scripts/compute_health_status.py:396
- def main — scripts/compute_health_status.py:425
- def _print_table — scripts/compute_health_status.py:507

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/compute_health_status.py`, language: Python, lines: 541
- documented invocation: "uv run python scripts/compute_health_status.py --help" — scripts/README.md:221
- executed: yes
- actual command run: `python3 scripts/compute_health_status.py --help`
- abridged stdout:
```
usage: compute_health_status.py [-h] [--memories-dir MEMORIES_DIR]
                                [--sessions-dir SESSIONS_DIR] [--limit LIMIT]
                                [--format {json,table,markdown}]
                                [--project-root PROJECT_ROOT]

Compute aggregate health status from metrics
```
- actual exit code: 0
- execution without arguments: `python3 scripts/compute_health_status.py`
- abridged stdout:
```
=== Health Status: [FAIL] ERROR ===

Component                      Status        Value  Detail
--------------------------------------------------------------------------------
memory_stale_rate              [PASS]        0.0%  0/130 memories stale
memory_error_rate              [FAIL]      100.0%  130/130 memories with parse errors
session_failure_rate           [PASS]        0.0%  0/50 sessions failed

Summary: 2 healthy, 0 warning, 1 error

Recommendations:
  - Memory error rate is 100%. Fix malformed memory files in .serena/memories/.
```
- actual exit code: 1
- documented exit codes vs actual exit paths:
  - documented: "0 - Success: Health status computed, all components healthy or warning" — scripts/compute_health_status.py:8
  - documented: "1 - Error: At least one component in error state" — scripts/compute_health_status.py:9
  - documented: "2 - Error: Configuration or path error" — scripts/compute_health_status.py:10
  - documented: "3 - Error: Unexpected error" — scripts/compute_health_status.py:11
  - actual exit paths:
    - return 2: `return 2` — scripts/compute_health_status.py:481 (path traversal check fails)
    - return 3: `return 3` — scripts/compute_health_status.py:492 (unhandled exception in `compute_health`)
    - return 1: `return 1` — scripts/compute_health_status.py:503 (`report.overall_level == HealthLevel.ERROR`)
    - return 0: `return 0` — scripts/compute_health_status.py:504 (all components healthy or warning)
    - process exit: `sys.exit(main())` — scripts/compute_health_status.py:540
- for validators/gates: can it exit non-zero? Yes (exits 1 on error status, 2 on config/path error, 3 on unexpected exception). Does it fail on the source repo's own default branch? Yes, exits with code 1 because 130/130 markdown memory files in `.serena/memories/` fail frontmatter splitting, triggering `memory_error_rate = 1.0` (above the 0.15 error threshold).
- does the output match what the documentation claims? Yes, exit codes, threshold classifications, and format options behave exactly as documented.

## Defects — required
- `script-bug`: Frontmatter validation in `compute_memory_health` (`scripts/compute_health_status.py:257-264`) splits strictly on `"---"`, counting any memory file with absent or atypical frontmatter delimiters as an error, causing a 100% error rate on the repository's own `.serena/memories/` directory.
- `missing-path`: Referenced tracking ticket `"See: Issue #178 - Add Health Status Computation from Metrics"` at `scripts/compute_health_status.py:14` points to an external GitHub issue rather than an in-repo specification document.

## Observations
- Implements path traversal mitigation (CWE-22) via `is_relative_to(project_root)` at line 475 to guarantee supplied directories remain bounded within the repository root.
- Clean architectural separation between domain model (`HealthLevel`, `Threshold`, `ComponentHealth`, `HealthStatusReport`), computation logic (`compute_memory_health`, `compute_session_health`), and formatting sinks (`to_markdown`, `to_dict`, `_print_table`).
- Standardized exit codes strictly follow `ADR-035 Exit Code Standardization` (`scripts/compute_health_status.py:13`).

## Context cost
17,260 bytes (~4,315 tokens). Self-contained script with standard library dependencies only (`argparse`, `dataclasses`, `datetime`, `enum`, `json`, `pathlib`, `re`, `sys`).
