---
package: rjm
path: scripts/ci/run_quality_grades.py
type: script
bytes: 4135
unit: inv-rjm-207
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/run_quality_grades.py, sha256: d95368d2cd0f45fc240ee7498042e24dab973acdfc34c06737eedd1a0bf9944d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/run_quality_grades.py

## Purpose — required, verbatim
> "Run the quality-grades grader in both output formats and post the summary." — scripts/ci/run_quality_grades.py:2

## Design intent — required
Executes `grade_domains.py` to generate quality grades reports in both JSON and Markdown formats, validates the `top_n` parameter to avoid shell word-splitting pitfalls, and appends the Markdown report to `GITHUB_STEP_SUMMARY` in GitHub Actions, fulfilling ADR-006 and ADR-035.

## Phase — required
cross-phase

## Inputs — required
- CLI argument `"--grader"` — scripts/ci/run_quality_grades.py:76: path to `grade_domains.py`
- CLI argument `"--json-out"` — scripts/ci/run_quality_grades.py:77: path for JSON output
- CLI argument `"--markdown-out"` — scripts/ci/run_quality_grades.py:79: path for Markdown output
- CLI argument `"--top-n"` — scripts/ci/run_quality_grades.py:82: limit parameter
- Environment variable `"GITHUB_STEP_SUMMARY"` — scripts/ci/run_quality_grades.py:106

## Outputs — required
- JSON report file written to destination path (`destination.write_text(result.stdout, encoding="utf-8")` — scripts/ci/run_quality_grades.py:69)
- Markdown report file written to destination path — scripts/ci/run_quality_grades.py:69
- Step summary appended to GITHUB_STEP_SUMMARY (`handle.write(f"{SUMMARY_HEADING}\n\n{report}")` — scripts/ci/run_quality_grades.py:110)

## Invokes — required
- script grade_domains.py — scripts/ci/run_quality_grades.py:76

## Invoked by — required
orphan

## Concepts named — required, verbatim
`ADR-006` — scripts/ci/run_quality_grades.py:7 — used here
`ADR-035` — scripts/ci/run_quality_grades.py:17 — used here
`GITHUB_STEP_SUMMARY` — scripts/ci/run_quality_grades.py:19 — used here
`EXIT_SUCCESS` — scripts/ci/run_quality_grades.py:32 — defined here
`EXIT_GRADER_FAILED` — scripts/ci/run_quality_grades.py:33 — defined here
`EXIT_USAGE` — scripts/ci/run_quality_grades.py:34 — defined here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/run_quality_grades.py`, language: Python 3, lines: 116
- documented invocation: `"Run the quality-grades grader in both output formats and post the summary." — scripts/ci/run_quality_grades.py:2`
- **executed:** yes
- actual command run: `python3 scripts/ci/run_quality_grades.py --grader src/copilot-cli/skills/quality-grades/scripts/grade_domains.py --json-out /tmp/grades.json --markdown-out /tmp/grades.md --top-n 3`, **actual exit code**: 0
- documented exit codes: `"0  - Success: both reports written; the summary is appended only when" — scripts/ci/run_quality_grades.py:18`, `"1  - Error: the grader failed" — scripts/ci/run_quality_grades.py:20`, `"2  - Error: usage/configuration (non-numeric top_n, grader not found)" — scripts/ci/run_quality_grades.py:21`; actual exit paths: `scripts/ci/run_quality_grades.py:95` (`return EXIT_USAGE` [2] on invalid top_n), `scripts/ci/run_quality_grades.py:99` (`return EXIT_USAGE` [2] if grader not found), `scripts/ci/run_quality_grades.py:104` (`return EXIT_GRADER_FAILED` [1] if grading fails), `scripts/ci/run_quality_grades.py:111` (`return EXIT_SUCCESS` [0]), `scripts/ci/run_quality_grades.py:115` (`sys.exit(main())`)
- for validators/gates: automation and report aggregator; validates inputs and writes dual-format reports
- does the output match what the documentation claims? yes, invokes grader for JSON and markdown, appending to step summary when configured

## Defects — required
none

## Observations
Accepts arbitrary grader path as an argument rather than hardcoding it, isolating the runner from skill directory renames or relocations.

## Context cost
4135 bytes, approximately 1034 tokens.
