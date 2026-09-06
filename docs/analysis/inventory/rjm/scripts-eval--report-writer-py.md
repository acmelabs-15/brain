---
package: rjm
path: scripts/eval/_report_writer.py
type: script
bytes: 17384
unit: inv-rjm-222
in_scope_via: .agents/architecture/ADR-058-agent-eval-discipline.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_report_writer.py, sha256: 2880d2a761552d864a734fd23db9f205c2ade9b2964f5892a7043ec3fb488fc7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_report_writer.py

## Purpose — required, verbatim
> "ReportWriter: render REPORT.md and report.json." — scripts/eval/_report_writer.py:1

## Design intent — required
Renders and persists human-readable markdown (`REPORT.md`) and machine-readable JSON (`report.json`) evaluation reports for the agent-vs-baseline evaluation harness. Implements atomic writes via write-temp-then-rename (`_atomic_write`) with fsync to guarantee that a mid-write crash or process interruption never leaves a corrupted or partial report on disk. It handles formatted presentation of statistical metrics (paired bootstrap confidence intervals, recall rates, recall deltas formatted in percentage points `pp`, per-fixture pass rates, token counts, cost estimates, and flakiness caveats) while preserving raw, unrounded fractions and metadata in JSON for downstream tooling.

## Phase — required
rjm:test

## Inputs — required
- `aggregate`: `AggregateResult` dataclass instance containing summary metrics and per-fixture pass rates from `_report_aggregator`
- `run_id`: string run identifier
- `model_id`: model name string (e.g. `claude-sonnet-4-6`)
- `agent_prompt_sha`: SHA hash string of the evaluated agent prompt
- `baseline_prompt_sha`: SHA hash string of the baseline prompt
- `fixture_set_sha`: SHA hash string of the fixture set
- `fixture_ids`: optional list of fixture string IDs (derived from `aggregate` if omitted)
- `wall_clock_seconds`: elapsed evaluation duration float
- `recommendation`: optional verdict string (`graduate-to-CI`, `keep-as-audit`, `scrap`, or `halt-due-to-flakiness`)
- `system_fingerprints`: optional list of string fingerprints
- `seed`: optional integer random seed
- `form_factor`: optional `FormFactorComparison` dataclass instance for agent vs skill comparisons

## Outputs — required
- `report.json` at `<reports_dir>/<run_id>/report.json`
- `REPORT.md` at `<reports_dir>/<run_id>/REPORT.md`

## Invokes — required
- script _eval_agent_types — scripts/eval/_report_writer.py:20
- script _report_aggregator — scripts/eval/_report_writer.py:21

## Invoked by — required
- script _report_writer — scripts/eval/eval-agent-vs-baseline.py:58

## Concepts named — required, verbatim
- `DESIGN-004` — scripts/eval/_report_writer.py:3 — used here
- `recommendation` — scripts/eval/_report_writer.py:5 — used here
- `graduate-to-CI` — scripts/eval/_report_writer.py:6 — used here
- `keep-as-audit` — scripts/eval/_report_writer.py:7 — used here
- `scrap` — scripts/eval/_report_writer.py:7 — used here
- `halt-due-to-flakiness` — scripts/eval/_report_writer.py:8 — used here
- `REPORT_SCHEMA_VERSION` — scripts/eval/_report_writer.py:20 — used here
- `AggregateResult` — scripts/eval/_report_writer.py:21 — used here
- `FormFactorComparison` — scripts/eval/_report_writer.py:21 — used here
- `_atomic_write` — scripts/eval/_report_writer.py:24 — defined here
- `_format_pct` — scripts/eval/_report_writer.py:43 — defined here
- `_format_pp` — scripts/eval/_report_writer.py:47 — defined here
- `_build_report_json` — scripts/eval/_report_writer.py:60 — defined here
- `_report_fixture_ids` — scripts/eval/_report_writer.py:127 — defined here
- `_form_factor_payload` — scripts/eval/_report_writer.py:135 — defined here
- `_render_summary_table` — scripts/eval/_report_writer.py:164 — defined here
- `_render_form_factor_section` — scripts/eval/_report_writer.py:181 — defined here
- `_render_per_fixture_section` — scripts/eval/_report_writer.py:201 — defined here
- `_render_ci_section` — scripts/eval/_report_writer.py:220 — defined here
- `ADR-058` — scripts/eval/_report_writer.py:223 — used here
- `_render_recommendation_section` — scripts/eval/_report_writer.py:269 — defined here
- `_render_cost_line` — scripts/eval/_report_writer.py:283 — defined here
- `_render_cost_section` — scripts/eval/_report_writer.py:302 — defined here
- `_render_flakiness_section` — scripts/eval/_report_writer.py:322 — defined here
- `_render_markdown` — scripts/eval/_report_writer.py:338 — defined here
- `ReportWriter` — scripts/eval/_report_writer.py:380 — defined here

## Structure
none (python module; functions and classes: _atomic_write, _format_pct, _format_pp, _build_report_json, _report_fixture_ids, _form_factor_payload, _render_summary_table, _render_form_factor_section, _render_per_fixture_section, _render_ci_section, _render_recommendation_section, _render_cost_line, _render_cost_section, _render_flakiness_section, _render_markdown, ReportWriter)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_report_writer.py`, language: Python 3, lines: 438
- documented invocation:
  "The writer does not interpret the value; it persists what the caller passes." — scripts/eval/_report_writer.py:9-10
  (no standalone CLI invocation documented; imported as a library module by `scripts/eval/eval-agent-vs-baseline.py`)
- executed: yes
- actual command run: `python3 sources/rjm/scripts/eval/_report_writer.py`
  abridged stdout: (empty)
  actual exit code: 0
- documented exit codes: none (pure library module without standalone CLI entrypoint or sys.exit calls) vs. actual exit paths in code: none (no sys.exit calls in file)
- for validators/gates: can it exit non-zero? no (pure library module)
- does the output match what the documentation claims? yes (executes and imports cleanly)

## Defects — required
none

## Observations
- Implements atomic file persistence via `_atomic_write` using `tempfile.mkstemp` in the target parent directory followed by `os.fsync` and `os.replace`, ensuring incomplete or corrupted reports cannot be read if execution terminates prematurely.
- Uses `_format_pp` for percentage-point deltas in the human-readable Markdown summary table to avoid ambiguous metric interpretation between percentage recall and delta fractions, while keeping unrounded floats in `report.json`.
- Safely handles models/providers with quota billing or unpriced tokens by omitting false dollar amounts rather than writing `$0.0000`.

## Context cost
17,384 bytes (~4,346 tokens). Loads dependencies `_eval_agent_types.py` (5,308 bytes) and `_report_aggregator.py` (19,759 bytes), bringing total loaded context to ~42,451 bytes (~10,612 tokens).
