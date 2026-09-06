---
package: rjm
path: scripts/progress/reporter.py
type: script
bytes: 5708
unit: inv-rjm-256
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/progress/reporter.py, sha256: 3a09cf686fe7a267467190029851cc0ed3ce5ab9b9f68b573c48a84acb8b2cdb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/progress/reporter.py

## Purpose — required, verbatim
> "Progress reporter for session and skill-level operations." — scripts/progress/reporter.py:1

## Design intent — required
Provides standardized, structured progress reporting and checkpoint emission utilities (`ProgressReporter`, `emit_checkpoint`, `is_quiet_mode`) to stderr for long-running CLI sessions and skills. Born out of session interruption analysis showing 33% of sessions failed or were interrupted mid-execution due to opaque agent execution, this utility increases observable progress without polluting stdout.

## Phase — required
cross-phase

## Inputs — required
- "CLAUDE_PROGRESS_QUIET" — scripts/progress/reporter.py:5
- "step_name: Name of the current step (e.g., \"Processing files\")." — scripts/progress/reporter.py:48
- "current: Number of items processed so far." — scripts/progress/reporter.py:49
- "total: Total number of items to process." — scripts/progress/reporter.py:50
- "details: Optional additional context (e.g., current file name)." — scripts/progress/reporter.py:51
- "total_steps: Expected number of steps in the session." — scripts/progress/reporter.py:85

## Outputs — required
- "print(message, file=sys.stderr, flush=True)" — scripts/progress/reporter.py:74
- "print(f\"  Steps: {self.completed_steps}/{self.total_steps}\", file=sys.stderr)" — scripts/progress/reporter.py:162
- "print(f\"  Duration: {elapsed_str}\", file=sys.stderr)" — scripts/progress/reporter.py:163

## Invokes — required
none

## Invoked by — required
- script reporter — scripts/progress/__init__.py:18

## Concepts named — required, verbatim
- `ProgressReporter` — scripts/progress/reporter.py:78 — defined here
- `emit_checkpoint` — scripts/progress/reporter.py:36 — defined here
- `is_quiet_mode` — scripts/progress/reporter.py:23 — defined here
- `CLAUDE_PROGRESS_QUIET` — scripts/progress/reporter.py:5 — used here
- `CHECKPOINT` — scripts/progress/reporter.py:55 — used here
- `PROGRESS` — scripts/progress/reporter.py:120 — used here
- `SKILL` — scripts/progress/reporter.py:148 — used here
- `SUMMARY` — scripts/progress/reporter.py:161 — used here

## Structure
- def is_quiet_mode() -> bool: — scripts/progress/reporter.py:23
- def emit_checkpoint( — scripts/progress/reporter.py:36
- class ProgressReporter: — scripts/progress/reporter.py:78
- def start_phase(self, phase_name: str) -> None: — scripts/progress/reporter.py:110
- def complete_step(self, result: str | None = None) -> None: — scripts/progress/reporter.py:125
- def invoke_skill(self, skill_name: str) -> None: — scripts/progress/reporter.py:139
- def report_summary(self) -> None: — scripts/progress/reporter.py:153
- def _format_progress(self) -> str: — scripts/progress/reporter.py:168

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/progress/reporter.py`
- language: Python
- lines: 174
- documented invocation: `"emit_checkpoint(\"Scanning files\", current=5, total=20)" — scripts/progress/reporter.py:54`
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/progress/reporter.py`
- abridged stdout:
  ```text
  (exited 0 with no stdout/stderr; library module)
  ```
- **actual exit code**: 0
- documented exit codes: none documented (library module) vs. actual exit paths: no `sys.exit` calls in module; returns 0 on execution
- for validators/gates: not a validator or gate; progress reporting library
- does the output match what the documentation claims? yes, defines checkpoint and progress reporter utilities targeting stderr

## Defects — required
none

## Observations
- Designed specifically in response to Issue #670 telemetry where 33% of multi-step agent sessions were aborted due to lack of progress visibility.
- Routes all progress messages directly to `sys.stderr` with explicit `flush=True` so structured JSON or text on `sys.stdout` remains uncorrupted when piped.
- References `.agents/analysis/session-export-analysis-2025-12-30.md` at line 12 as empirical evidence for progress indicator requirements.

## Context cost
5708 bytes, approximately 1400 tokens.
