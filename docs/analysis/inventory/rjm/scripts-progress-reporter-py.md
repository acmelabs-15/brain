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
verified: 2026-09-05 quote-check+coverage
---

# scripts/progress/reporter.py

## Purpose — required, verbatim
> "Progress reporter for session and skill-level operations." — scripts/progress/reporter.py:1

## Design intent — required
Reduces user interruptions during long-running agent workflows by emitting standardized, human-readable progress checkpoints to `stderr`. It addresses session export analysis findings where one-third of sessions were interrupted mid-execution due to poor visibility into multi-step agent actions. By writing exclusively to `stderr` and supporting an environment-driven quiet mode, it provides operational observability without corrupting structured CLI pipeline data on `stdout`.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `CLAUDE_PROGRESS_QUIET`: "CLAUDE_PROGRESS_QUIET" — scripts/progress/reporter.py:5
- `step_name`: "Name of the current step (e.g., \"Processing files\")." — scripts/progress/reporter.py:48
- `current`: "Number of items processed so far." — scripts/progress/reporter.py:49
- `total`: "Total number of items to process." — scripts/progress/reporter.py:50
- `details`: "Optional additional context (e.g., current file name)." — scripts/progress/reporter.py:51
- `phase_name`: "Human-readable name of the phase." — scripts/progress/reporter.py:114
- `skill_name`: "Name of the skill being invoked." — scripts/progress/reporter.py:143

## Outputs — required
- Stderr progress checkpoint strings starting with `[CHECKPOINT]` — scripts/progress/reporter.py:63
- Stderr phase start indicator strings starting with `[PROGRESS]` — scripts/progress/reporter.py:120
- Stderr skill invocation notifications starting with `[SKILL]` — scripts/progress/reporter.py:148
- Stderr execution summary section starting with `[SUMMARY]` — scripts/progress/reporter.py:161

## Invokes — required
none

## Invoked by — required
- script reporter — scripts/progress/__init__.py:18

## Concepts named — required, verbatim
- `CLAUDE_PROGRESS_QUIET` — scripts/progress/reporter.py:5 — used here
- `is_quiet_mode` — scripts/progress/reporter.py:23 — defined here
- `emit_checkpoint` — scripts/progress/reporter.py:36 — defined here
- `ProgressReporter` — scripts/progress/reporter.py:78 — defined here
- `start_phase` — scripts/progress/reporter.py:110 — defined here
- `complete_step` — scripts/progress/reporter.py:125 — defined here
- `invoke_skill` — scripts/progress/reporter.py:139 — defined here
- `report_summary` — scripts/progress/reporter.py:153 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/progress/reporter.py`, language: Python 3, lines: 174
- documented invocation:
  - "from scripts.progress import emit_checkpoint" — scripts/progress/README.md:16
  - "from scripts.progress import ProgressReporter" — scripts/progress/README.md:40
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/progress/reporter.py`
  abridged stdout: `(empty)`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes: none (library module without a CLI `main` block).
  Actual exit paths in code: exits implicitly with code 0 on completion (no `sys.exit` or `exit` calls in file).
- for validators/gates: can it exit non-zero? no. Does it fail on the source repo's own default branch? no, exits 0.
- does the output match what the documentation claims? yes for function behavior, but docstring formatting drift exists (see defects).

## Defects — required
- `doc-drift` · scripts/progress/reporter.py:58 · Docstring example claims `emit_checkpoint("Validating", details="config.yaml")` outputs `[CHECKPOINT] Validating: config.yaml`, but string join with prefix `": "` produces `[CHECKPOINT] Validating : config.yaml` with a space before colon.
- `doc-drift` · scripts/progress/README.md:32 · README quick-start claims output is `[CHECKPOINT] Processing files (5/20): src/main.py`, but actual code at `scripts/progress/reporter.py:73` emits `[CHECKPOINT] Processing files (5/20) : src/main.py`.
- `orphan` · scripts/progress/reporter.py:1 · Exported progress reporting module is imported only by `scripts/progress/__init__.py`; no in-scope skill or command invokes it.

## Observations
Session export analysis evidence cited in the docstring (Issue #670) found that 2 of 6 sessions (33%) were interrupted mid-execution due to user uncertainty during long operations. All progress messages are written to `sys.stderr` with `flush=True` to ensure real-time terminal feedback while preserving `stdout` for clean piping.

## Context cost
5708 bytes (~1427 tokens).
