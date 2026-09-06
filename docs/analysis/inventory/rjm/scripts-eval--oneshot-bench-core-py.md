---
package: rjm
path: scripts/eval/_oneshot_bench_core.py
type: script
bytes: 11629
unit: inv-rjm-218
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_oneshot_bench_core.py, sha256: ca0711a16c6783ec1ee13ffd37a3eae9dcc589eeb8dd2d79f2101029e9bb876a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_oneshot_bench_core.py

## Purpose — required, verbatim
> "Pure model and grading logic for the one-shot-vs-shipped benchmark (#2788)." — scripts/eval/_oneshot_bench_core.py:1

## Design intent — required
Provides pure data modeling, prompt construction, judge response parsing, and result aggregation for the one-shot-vs-shipped benchmark. Tests agent bug-fixing capabilities against closed bugs where merged fixes are withheld, using real human-merged code as ground truth and an LLM judge to evaluate proposed fixes against edge cases named in the issue discourse. Separates pure grading logic from network transport and API I/O to enable deterministic offline unit testing without network dependencies. Without this module, evaluating agent bug-fixing performance would rely on self-grading without real-world ground truth or would couple evaluation logic to live network calls.

## Phase — required
none

## Inputs — required
- Fixture JSON files or mapping payloads adhering to `REQUIRED_FIXTURE_FIELDS` (`id`, `source_repo`, `issue_number`, `title`, `discourse`, `shipped_fix`, and optional `edges_named_in_discourse`, `difficulty`) (scripts/eval/_oneshot_bench_core.py:32-39, 47-100).
- Directory path containing `*.json` test fixtures for batch loading (scripts/eval/_oneshot_bench_core.py:114-121).
- Raw judge text strings containing JSON response payloads (scripts/eval/_oneshot_bench_core.py:194-223).
- Graded `FixtureResult` instances for rollup aggregation (scripts/eval/_oneshot_bench_core.py:276-316).

## Outputs — required
- Instantiated dataclass objects: `Fixture` (scripts/eval/_oneshot_bench_core.py:47), `JudgeVerdict` (scripts/eval/_oneshot_bench_core.py:184), `FixtureResult` (scripts/eval/_oneshot_bench_core.py:233), and `BenchmarkSummary` (scripts/eval/_oneshot_bench_core.py:245).
- Formatted agent evaluation prompt string from `build_agent_prompt()` (scripts/eval/_oneshot_bench_core.py:136-149).
- Formatted judge prompt string from `build_judge_prompt()` (scripts/eval/_oneshot_bench_core.py:152-180).
- Aggregated benchmark evaluation metrics (`total`, `full`, `partial`, `none`, `edge_catch_rate`, `same_or_better_rate`, `verdict`) computed by `aggregate()` (scripts/eval/_oneshot_bench_core.py:245-316).

## Invokes — required
none

## Invoked by — required
- script _oneshot_bench_core — scripts/eval/eval-oneshot-vs-shipped.py:32

## Concepts named — required, verbatim
- `one-shot-vs-shipped benchmark` — scripts/eval/_oneshot_bench_core.py:1 — used here
- `LLM judge` — scripts/eval/_oneshot_bench_core.py:5 — used here
- `GRADES` — scripts/eval/_oneshot_bench_core.py:30 — defined here
- `REQUIRED_FIXTURE_FIELDS` — scripts/eval/_oneshot_bench_core.py:32 — defined here
- `FixtureError` — scripts/eval/_oneshot_bench_core.py:42 — defined here
- `Fixture` — scripts/eval/_oneshot_bench_core.py:47 — defined here
- `load_fixture` — scripts/eval/_oneshot_bench_core.py:103 — defined here
- `load_fixtures` — scripts/eval/_oneshot_bench_core.py:114 — defined here
- `select_hardest` — scripts/eval/_oneshot_bench_core.py:124 — defined here
- `build_agent_prompt` — scripts/eval/_oneshot_bench_core.py:136 — defined here
- `build_judge_prompt` — scripts/eval/_oneshot_bench_core.py:152 — defined here
- `JudgeVerdict` — scripts/eval/_oneshot_bench_core.py:184 — defined here
- `parse_judge_response` — scripts/eval/_oneshot_bench_core.py:194 — defined here
- `FixtureResult` — scripts/eval/_oneshot_bench_core.py:233 — defined here
- `BenchmarkSummary` — scripts/eval/_oneshot_bench_core.py:245 — defined here
- `aggregate` — scripts/eval/_oneshot_bench_core.py:276 — defined here

## Structure
none (python module; top-level functions and classes: GRADES, REQUIRED_FIXTURE_FIELDS, FixtureError, Fixture, load_fixture, load_fixtures, select_hardest, build_agent_prompt, build_judge_prompt, JudgeVerdict, parse_judge_response, _as_str_tuple, FixtureResult, BenchmarkSummary, aggregate)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_oneshot_bench_core.py`, language: Python 3, lines: 317
- documented invocation:
  "All API I/O lives in `eval-oneshot-vs-shipped.py` behind a single transport seam so the grading logic is unit-testable with no network." — scripts/eval/_oneshot_bench_core.py:10-11
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - Direct execution: `python3 sources/rjm/scripts/eval/_oneshot_bench_core.py`
    stdout: `(empty)`
    **actual exit code**: 0
  - Functional execution:
    `python3 -c 'import sys; sys.path.insert(0, "sources/rjm/scripts/eval"); import _oneshot_bench_core as obc; jv = obc.parse_judge_response("{\"grade\": \"FULL\", \"edges_caught\": [\"suppression\"], \"edges_missed\": [], \"reasoning\": \"handles edge correctly\"}"); print(f"grade={jv.grade} failed={jv.judge_failed} edges={jv.edges_caught}")'`
    stdout:
    ```
    grade=FULL failed=False edges=('suppression',)
    ```
    **actual exit code**: 0
- documented exit codes (verbatim) vs. actual exit paths in code:
  No exit codes documented; the module contains no `sys.exit()` or `exit()` calls. It raises `FixtureError` (scripts/eval/_oneshot_bench_core.py:42, lines 69, 77, 81, 88, 108, 110) on malformed fixtures and records `judge_failed=True` with grade `NONE` (scripts/eval/_oneshot_bench_core.py:195-223) on judge parsing failures.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Not a standalone CLI validator script. Fails fast by raising `FixtureError` when reading malformed fixture datasets.
- does the output match what the documentation claims?
  Yes, strict 3-tier grading (`FULL`, `PARTIAL`, `NONE`) and discourse edge tracking are faithfully implemented.

## Defects — required
none

## Observations
- The module solves the closed-loop evaluation challenge where agent self-grading is unreliable, by anchoring ground truth in human-merged fixes from real repositories.
- Parses judge responses with robust JSON substring extraction (`text[start : end + 1]`) and marks any malformed or non-JSON output as `judge_failed=True` with `NONE` grade rather than silent pass or exception propagation.

## Context cost
11,629 bytes, approximately 2,900 tokens. Isolated module (imports standard library `json`, `dataclasses`, `pathlib`, `typing` only).
