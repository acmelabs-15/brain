---
package: rjm
path: scripts/eval/_run_persistence.py
type: script
bytes: 26715
unit: inv-rjm-222
in_scope_via: .agents/architecture/ADR-058-agent-eval-discipline.md
aliases: []
memo_inputs:
  - {path: scripts/eval/_run_persistence.py, sha256: facf65b38609c84ab0dd4019a46a231303183d928a8e43daa25d4f57de3c47c8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/eval/_run_persistence.py

## Purpose — required, verbatim
> "RunPersistence: idempotent JSONL writer for eval-agent-vs-baseline." — scripts/eval/_run_persistence.py:10

## Design intent — required
Provides idempotent JSONL record persistence for the agent evaluation runner (`eval-agent-vs-baseline.py`). It manages `runs.jsonl` under each run directory, using the `(fixture_id, variant, run_index)` identity triple as an idempotency key. It supports two distinct operating modes: fresh-run mode (which fails immediately with `RunDirectoryNotFreshError` if the target directory already contains records, preventing accidental mixture of prompt SHAs or silent skips) and resume mode (which loads completed successful runs, skips them, and automatically retries errored runs by replacing them in-place). Every append and replace operation is performed atomically via write-temp-then-rename and fsync to prevent torn writes if interrupted mid-execution.

## Phase — required
rjm:test

## Inputs — required
- `run_dir`: `Path` to run directory where `runs.jsonl` resides
- `resume`: boolean flag enabling resume mode (default `False`)
- `seed`: optional integer random seed to verify run consistency during resume
- `runs.jsonl`: existing on-disk JSONL log file (if present)
- `record`: `RunRecord` dataclass instances passed to `write_record()`

## Outputs — required
- `runs.jsonl` atomically appended or updated at `<run_dir>/runs.jsonl`
- Iterated `RunRecord` dataclass instances returned by `iter_records()` generator

## Invokes — required
- script _eval_agent_types — scripts/eval/_run_persistence.py:48

## Invoked by — required
- script _run_persistence — scripts/eval/eval-agent-vs-baseline.py:59

## Concepts named — required, verbatim
- `taste-lint` — scripts/eval/_run_persistence.py:1 — used here
- `DESIGN-004` — scripts/eval/_run_persistence.py:12 — used here
- `REQ-004` — scripts/eval/_run_persistence.py:12 — used here
- `AGENTS.md` — scripts/eval/_run_persistence.py:24 — used here
- `RUN_RECORD_SCHEMA_VERSION` — scripts/eval/_run_persistence.py:49 — used here
- `AssertionKind` — scripts/eval/_run_persistence.py:50 — used here
- `AssertionResult` — scripts/eval/_run_persistence.py:51 — used here
- `RunRecord` — scripts/eval/_run_persistence.py:52 — used here
- `SchemaVersionError` — scripts/eval/_run_persistence.py:53 — used here
- `DuplicateRunError` — scripts/eval/_run_persistence.py:57 — defined here
- `MalformedRunRecordError` — scripts/eval/_run_persistence.py:68 — defined here
- `RunDirectoryNotFreshError` — scripts/eval/_run_persistence.py:81 — defined here
- `RunSeedMismatchError` — scripts/eval/_run_persistence.py:87 — defined here
- `RUNS_FILENAME` — scripts/eval/_run_persistence.py:93 — defined here
- `SUPPORTED_RUN_RECORD_SCHEMA_VERSIONS` — scripts/eval/_run_persistence.py:94 — defined here
- `_REQUIRED_RUN_RECORD_FIELDS` — scripts/eval/_run_persistence.py:95 — defined here
- `_record_key` — scripts/eval/_run_persistence.py:115 — defined here
- `_record_to_json_line` — scripts/eval/_run_persistence.py:119 — defined here
- `_strict_bool` — scripts/eval/_run_persistence.py:136 — defined here
- `_strict_int` — scripts/eval/_run_persistence.py:146 — defined here
- `_strict_number` — scripts/eval/_run_persistence.py:156 — defined here
- `_strict_str` — scripts/eval/_run_persistence.py:170 — defined here
- `_strict_optional_str` — scripts/eval/_run_persistence.py:180 — defined here
- `_normalize_seed` — scripts/eval/_run_persistence.py:190 — defined here
- `_validate_assertions` — scripts/eval/_run_persistence.py:195 — defined here
- `_validate_payload` — scripts/eval/_run_persistence.py:229 — defined here
- `_parse_record` — scripts/eval/_run_persistence.py:266 — defined here
- `_Counters` — scripts/eval/_run_persistence.py:318 — defined here
- `RunPersistence` — scripts/eval/_run_persistence.py:323 — defined here

## Structure
none (python module; functions and classes: DuplicateRunError, MalformedRunRecordError, RunDirectoryNotFreshError, RunSeedMismatchError, _record_key, _record_to_json_line, _strict_bool, _strict_int, _strict_number, _strict_str, _strict_optional_str, _normalize_seed, _validate_assertions, _validate_payload, _parse_record, _Counters, RunPersistence)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/eval/_run_persistence.py`, language: Python 3, lines: 627
- documented invocation:
  "Two modes (DESIGN-004 §Failure Modes):" — scripts/eval/_run_persistence.py:16
  (no standalone CLI invocation documented; imported and consumed as a class library by `scripts/eval/eval-agent-vs-baseline.py`)
- executed: yes
- actual command run: `python3 sources/rjm/scripts/eval/_run_persistence.py`
  abridged stdout: (empty)
  actual exit code: 0
- documented exit codes:
  "`DuplicateRunError` to exit 1 (logic) and `SchemaVersionError` plus" — scripts/eval/_run_persistence.py:22-23
  vs. actual exit paths in code: none in this file (`_run_persistence.py` raises exceptions that are caught and mapped to exit codes 1 and 2 by the runner CLI)
- for validators/gates: can it exit non-zero? no (library module)
- does the output match what the documentation claims? yes (executes and imports cleanly)

## Defects — required
none

## Observations
- Carries file-size lint suppression header (lines 1-9) explaining the design rationale: `_run_persistence.py` is the single owner of the `runs.jsonl` round-trip invariant, keeping serialization and deserialization validation co-located.
- Strict type validation functions (`_strict_bool`, `_strict_int`, etc.) prevent type coercions such as booleans passing as ints (`isinstance(True, int)`), ensuring exact conformance to the schema contract.
- Resume mode supports retrying errored runs via `_atomic_replace`, which filters out failed triples while preserving surrounding successful records.

## Context cost
26,715 bytes (~6,678 tokens). Loads dependency `_eval_agent_types.py` (5,308 bytes), bringing total loaded context to ~32,023 bytes (~8,006 tokens).
