---
package: rjm
path: scripts/error_classification.py
type: script
bytes: 10403
unit: inv-rjm-214
in_scope_via: .agents/architecture/ADR-005-powershell-only-scripting.md
aliases: []
memo_inputs:
  - {path: scripts/error_classification.py, sha256: 3484ef44fd2a97b6598992c1270e09d269abc214304607bf05653a9f763dab85}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/error_classification.py

## Purpose — required, verbatim
> "Error classification and recovery hint system." — scripts/error_classification.py:1
> "Classifies tool execution failures into a taxonomy aligned with ADR-035 exit codes. Provides recovery hints from a YAML configuration file. Logs errors for pattern learning and graduation to MEMORY.md." — scripts/error_classification.py:3-5

## Design intent — required
Provides an automated diagnostic classification engine that categorizes tool execution failures into an agent-centric taxonomy (e.g. tool failure, reasoning drift, infinite loop, context overflow) and retrieves actionable remediation hints from `.agents/recovery-hints.yaml`. Additionally, it logs structured error records (`.agents/sessions/errors.jsonl`) to track repeated failure patterns and identify successful recoveries that meet the threshold for graduation into persistent memory (`MEMORY.md`).

## Phase — required
cross-phase

## Inputs — required
- Function arguments to `classify_error`: `tool_name` (str), `exit_code` (int), `stderr` (str), `call_history` (list[str] | None), `hints_db` (dict | None) (lines 194-201)
- Recovery hints database loaded from YAML: `.agents/recovery-hints.yaml` (line 112)
- Session error log file: `.agents/sessions/errors.jsonl` (lines 33, 276-278)

## Outputs — required
- Dataclass instances of `ClassifiedError`: contains `error_type`, `tool_name`, `exit_code`, `stderr`, `is_transient`, and `recovery_hints` tuple (lines 81-90)
- Appended JSONL records to `.agents/sessions/errors.jsonl` via `_locked_append` (lines 175, 290)
- List of graduation candidate dictionaries from `get_graduation_candidates` (lines 293-342)
- Documented exit codes:
  - "0 = success" — scripts/error_classification.py:8
  - "1 = logic/validation error" — scripts/error_classification.py:9
  - "2 = configuration error" — scripts/error_classification.py:10
  - "3 = external service error" — scripts/error_classification.py:11
  - "4 = authentication error" — scripts/error_classification.py:12

## Invokes — required
- config recovery-hints.yaml — scripts/error_classification.py:112
- script hook_utilities — scripts/error_classification.py:169

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — scripts/error_classification.py:3 — used here
- `exit codes` — scripts/error_classification.py:4 — used here
- `recovery hints` — scripts/error_classification.py:4 — used here
- `MEMORY.md` — scripts/error_classification.py:5 — used here
- `Exit Codes (ADR-035)` — scripts/error_classification.py:7 — used here
- `_DEFAULT_ERROR_LOG` — scripts/error_classification.py:33 — defined here
- `_GRADUATION_THRESHOLD` — scripts/error_classification.py:34 — defined here
- `ErrorType` — scripts/error_classification.py:37 — defined here
- `TOOL_FAILURE` — scripts/error_classification.py:40 — defined here
- `REASONING_DRIFT` — scripts/error_classification.py:41 — defined here
- `INFINITE_LOOP` — scripts/error_classification.py:42 — defined here
- `SCOPE_CREEP` — scripts/error_classification.py:43 — defined here
- `CONTEXT_OVERFLOW` — scripts/error_classification.py:44 — defined here
- `_EXIT_CODE_MAP` — scripts/error_classification.py:48 — defined here
- `_TRANSIENT_PATTERNS` — scripts/error_classification.py:55 — defined here
- `RecoveryHint` — scripts/error_classification.py:65 — defined here
- `ClassifiedError` — scripts/error_classification.py:81 — defined here
- `ErrorLogEntry` — scripts/error_classification.py:250 — defined here

## Structure
none (python module; classes and functions: ErrorType, RecoveryHint, ClassifiedError, _is_transient, load_recovery_hints, _match_hints, _try_lock_helpers, _locked_append, classify_error, ErrorLogEntry, log_error, get_graduation_candidates)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/error_classification.py`, language: Python 3, lines: 342
- documented invocation:
  none (library module without CLI entrypoint; consumed via Python import)
- executed: yes
- actual command run: `uv run python -c "from scripts.error_classification import classify_error; print(classify_error('git', 1, 'fatal: not a git repository'))"`
  abridged stdout:
  ```
  ClassifiedError(error_type=<ErrorType.TOOL_FAILURE: 'tool_failure'>, tool_name='git', exit_code=1, stderr='fatal: not a git repository', is_transient=False, recovery_hints=('Current directory is not a git repo. Verify working directory.',))
  ```
  actual exit code: 0
  (Note: direct standalone invocation `python3 scripts/error_classification.py` exits 1 with `ModuleNotFoundError: No module named 'yaml'` because PyYAML is not in the system Python environment, whereas `uv run python scripts/error_classification.py` exits 0 with empty stdout.)
- documented exit codes:
  - "0 = success" — scripts/error_classification.py:8
  - "1 = logic/validation error" — scripts/error_classification.py:9
  - "2 = configuration error" — scripts/error_classification.py:10
  - "3 = external service error" — scripts/error_classification.py:11
  - "4 = authentication error" — scripts/error_classification.py:12
  vs. actual exit paths:
  none in module (the documented exit codes describe ADR-035 process codes classified by the function, rather than exit codes returned by this file).
- for validators/gates: can it exit non-zero?
  Not a CLI gate or validator; it is an importable Python helper module.
- does output match what the documentation claims?
  Yes, classifies tool errors into taxonomy types and loads pattern-based recovery hints.

## Defects — required
- orphan — scripts/error_classification.py:1 — Not imported or invoked by any in-scope production command, agent, or skill script in the repository (only exercised by unit tests).
- exit-code-mismatch — scripts/error_classification.py:7 — Docstring lists "Exit Codes (ADR-035)" 0 through 4 as if it were a CLI executable, but the script lacks a `main()` entrypoint or CLI argument parser.

## Observations
- Uses advisory file locking via `hook_utilities.lock_file` / `unlock_file` (with graceful fallback if unimportable) for thread/process-safe concurrent appends to `errors.jsonl`.
- Defines an automated threshold-based graduation mechanism (`_GRADUATION_THRESHOLD = 3`) to promote effective recovery patterns into `MEMORY.md`.

## Context cost
10403 bytes (~2600 tokens) plus `.agents/recovery-hints.yaml` (2010 bytes, ~500 tokens). Total context cost: ~3100 tokens.
