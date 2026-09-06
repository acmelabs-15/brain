---
package: rjm
path: scripts/validation/check_doc_interpreter_portability.py
type: script
bytes: 26041
unit: inv-rjm-278
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_doc_interpreter_portability.py, sha256: 62a3182550bff6eb7dfc04ce073fb53feb78bd52cde315062b3a2fe1543f8ac1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_doc_interpreter_portability.py

## Purpose — required, verbatim
> "Interpreter-portability ratchet for documented script invocations (issue #3791)." — scripts/validation/check_doc_interpreter_portability.py:3

## Design intent — required
Enforces an automated ratchet preventing documentation and script strings from instructing contributors to invoke Python scripts via bare `python`/`python3` commands when those scripts require third-party dependencies not present in a clean host interpreter. Stemming from an incident (issue #3791) where documented commands like `python3 scripts/sync_adr_protocol.py` failed with `ModuleNotFoundError: No module named 'yaml'` on clean checkouts, this validator parses tracked Markdown and Python files, AST-inspects import-time statements to find non-stdlib and non-repo module imports, and requires invocations to use the managed environment (`uv run python <script>`). Through an empty baseline ratchet (`doc_interpreter_baseline.json`), any unportable bare invocation is treated as a regression that fails CI, while allowing line-scoped declarations (`doc-interpreter-portability:`) for deliberate exemptions (such as CI installation quotes).

## Phase — required
rjm:test

## Inputs — required
- Tracked `*.md` and `*.py` files in git repository matching pattern via `git ls-files -z` (scripts/validation/check_doc_interpreter_portability.py:227, 395, 397)
- Baseline configuration file `scripts/validation/doc_interpreter_baseline.json` loaded via `load_baseline` (scripts/validation/check_doc_interpreter_portability.py:125, 437)
- CLI arguments `--repo-root`, `--baseline`, and `--update-baseline` parsed via `build_parser()` (scripts/validation/check_doc_interpreter_portability.py:499-509)

## Outputs — required
- Standard output: `check-doc-interpreter-portability: OK` on passing runs, `IMPROVED <line>` on baseline reductions, or `check-doc-interpreter-portability: wrote <baseline_path> (<n> files)` on `--update-baseline` (scripts/validation/check_doc_interpreter_portability.py:564, 600, 612)
- Standard error: drift diagnostic messages (`DRIFT <rel>: <count> invocation(s)...`), scan error messages, or failure warnings (scripts/validation/check_doc_interpreter_portability.py:472, 480, 555, 602, 606, 624, 630)
- Baseline file update: atomic replacement of `scripts/validation/doc_interpreter_baseline.json` via `replace_baseline_atomically` and `baseline_write_lock` when `--update-baseline` is specified (scripts/validation/check_doc_interpreter_portability.py:527, 563)
- Exit codes:
  - `0 - no drift (counts at or below baseline), or --update-baseline wrote the file` — scripts/validation/check_doc_interpreter_portability.py:90 (exited at lines 565, 613)
  - `1 - drift detected (a file exceeds its baseline or a new file offends)` — scripts/validation/check_doc_interpreter_portability.py:91 (exited at lines 560, 610)
  - `2 - configuration error (baseline unreadable, git unavailable)` — scripts/validation/check_doc_interpreter_portability.py:92 (exited at lines 530, 540, 546, 551, 596, 625, 631, 634)

## Invokes — required
- script doc_interpreter_subprocess — scripts/validation/check_doc_interpreter_portability.py:113
- script portability_baseline — scripts/validation/check_doc_interpreter_portability.py:116
- config doc_interpreter_baseline.json — scripts/validation/check_doc_interpreter_portability.py:125

## Invoked by — required
- script check_doc_interpreter_portability — scripts/validation/pre_pr_sequence.py:46
- script check_doc_interpreter_portability — scripts/validation/pre_pr.py:75

## Concepts named — required, verbatim
- `taste-lint` — scripts/validation/check_doc_interpreter_portability.py:2 — used here
- `file-size` — scripts/validation/check_doc_interpreter_portability.py:2 — used here
- `doc-interpreter-portability` — scripts/validation/check_doc_interpreter_portability.py:6 — defined here
- `ModuleNotFoundError` — scripts/validation/check_doc_interpreter_portability.py:12 — used here
- `ADR-035` — scripts/validation/check_doc_interpreter_portability.py:89 — used here
- `ScanStats` — scripts/validation/check_doc_interpreter_portability.py:130 — defined here
- `ScanError` — scripts/validation/check_doc_interpreter_portability.py:136 — defined here
- `HISTORICAL_ROOTS` — scripts/validation/check_doc_interpreter_portability.py:142 — defined here
- `GENERATED_ROOTS` — scripts/validation/check_doc_interpreter_portability.py:171 — defined here
- `GENERATED_PROMPT_PREFIX` — scripts/validation/check_doc_interpreter_portability.py:176 — defined here
- `FIXTURE_ROOTS` — scripts/validation/check_doc_interpreter_portability.py:181 — defined here
- `DECLARATION` — scripts/validation/check_doc_interpreter_portability.py:186 — defined here
- `INVOCATION_PATTERN` — scripts/validation/check_doc_interpreter_portability.py:196 — defined here
- `TOKEN_PATTERN` — scripts/validation/check_doc_interpreter_portability.py:204 — defined here
- `tracked_files` — scripts/validation/check_doc_interpreter_portability.py:227 — defined here
- `is_in_scope` — scripts/validation/check_doc_interpreter_portability.py:233 — defined here
- `is_declared` — scripts/validation/check_doc_interpreter_portability.py:242 — defined here
- `third_party_imports` — scripts/validation/check_doc_interpreter_portability.py:340 — defined here
- `find_offenses` — scripts/validation/check_doc_interpreter_portability.py:372 — defined here
- `scan` — scripts/validation/check_doc_interpreter_portability.py:389 — defined here
- `load_baseline` — scripts/validation/check_doc_interpreter_portability.py:437 — defined here
- `diff_against_baseline` — scripts/validation/check_doc_interpreter_portability.py:459 — defined here
- `validate_doc_interpreter_portability` — scripts/validation/check_doc_interpreter_portability.py:494 — defined here
- `build_parser` — scripts/validation/check_doc_interpreter_portability.py:499 — defined here

## Structure
- Module constants: _SCRIPT_DIR, _REPO_ROOT, _DEFAULT_BASELINE_NAME, _WRITE_LOCK_NAME, HISTORICAL_ROOTS, GENERATED_ROOTS, GENERATED_PROMPT_PREFIX, FIXTURE_ROOTS, DECLARATION, INVOCATION_PATTERN, TOKEN_PATTERN — scripts/validation/check_doc_interpreter_portability.py:109-204
- Dataclass: ScanStats — scripts/validation/check_doc_interpreter_portability.py:129
- Exception: ScanError(Exception) — scripts/validation/check_doc_interpreter_portability.py:136
- Function: _run_git — scripts/validation/check_doc_interpreter_portability.py:207
- Function: tracked_files — scripts/validation/check_doc_interpreter_portability.py:227
- Function: is_in_scope — scripts/validation/check_doc_interpreter_portability.py:233
- Function: is_declared — scripts/validation/check_doc_interpreter_portability.py:242
- Function: _import_time_nodes — scripts/validation/check_doc_interpreter_portability.py:251
- Function: _imported_roots — scripts/validation/check_doc_interpreter_portability.py:269
- Function: _local_modules — scripts/validation/check_doc_interpreter_portability.py:280
- Function: _tokens_are_uv_run_options — scripts/validation/check_doc_interpreter_portability.py:308
- Function: is_uv_run_prefixed — scripts/validation/check_doc_interpreter_portability.py:319
- Function: _tracked_regular_file — scripts/validation/check_doc_interpreter_portability.py:328
- Function: third_party_imports — scripts/validation/check_doc_interpreter_portability.py:340
- Function: find_offenses — scripts/validation/check_doc_interpreter_portability.py:372
- Function: scan — scripts/validation/check_doc_interpreter_portability.py:389
- Function: _scan_file — scripts/validation/check_doc_interpreter_portability.py:406
- Function: load_baseline — scripts/validation/check_doc_interpreter_portability.py:437
- Function: diff_against_baseline — scripts/validation/check_doc_interpreter_portability.py:459
- Function: validate_doc_interpreter_portability — scripts/validation/check_doc_interpreter_portability.py:494
- Function: build_parser — scripts/validation/check_doc_interpreter_portability.py:499
- Function: _resolve_roots — scripts/validation/check_doc_interpreter_portability.py:512
- Function: _update_baseline — scripts/validation/check_doc_interpreter_portability.py:518
- Function: _update_baseline_locked — scripts/validation/check_doc_interpreter_portability.py:533
- Function: _scan_repository — scripts/validation/check_doc_interpreter_portability.py:568
- Function: _baseline_path_is_unsafe — scripts/validation/check_doc_interpreter_portability.py:579
- Function: _validate_against_baseline — scripts/validation/check_doc_interpreter_portability.py:587
- Function: main — scripts/validation/check_doc_interpreter_portability.py:616

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_doc_interpreter_portability.py`
- language: Python
- lines: 642
- documented invocation:
  `uv run python scripts/sync_adr_protocol.py` — scripts/validation/check_doc_interpreter_portability.py:14
- executed: yes
- actual command run: `uv run python scripts/validation/check_doc_interpreter_portability.py`
- abridged stdout: `check-doc-interpreter-portability: OK`
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - documented:
    - `0 - no drift (counts at or below baseline), or --update-baseline wrote the file` — scripts/validation/check_doc_interpreter_portability.py:90
    - `1 - drift detected (a file exceeds its baseline or a new file offends)` — scripts/validation/check_doc_interpreter_portability.py:91
    - `2 - configuration error (baseline unreadable, git unavailable)` — scripts/validation/check_doc_interpreter_portability.py:92
  - actual exit paths in code:
    - `scripts/validation/check_doc_interpreter_portability.py:530`: `return 2` (OSError on lock)
    - `scripts/validation/check_doc_interpreter_portability.py:540`: `return 2` (_baseline_path_is_unsafe)
    - `scripts/validation/check_doc_interpreter_portability.py:546`: `return 2` (missing baseline file)
    - `scripts/validation/check_doc_interpreter_portability.py:551`: `return 2` (unparseable baseline)
    - `scripts/validation/check_doc_interpreter_portability.py:560`: `return 1` (refusing to raise baseline)
    - `scripts/validation/check_doc_interpreter_portability.py:565`: `return 0` (wrote baseline)
    - `scripts/validation/check_doc_interpreter_portability.py:596`: `return 2` (unparseable baseline in validate)
    - `scripts/validation/check_doc_interpreter_portability.py:610`: `return 1` (drift detected in validate)
    - `scripts/validation/check_doc_interpreter_portability.py:613`: `return 0` (clean validate)
    - `scripts/validation/check_doc_interpreter_portability.py:625`: `return 2` (OSError/ScanError/CalledProcessError)
    - `scripts/validation/check_doc_interpreter_portability.py:631`: `return 2` (zero-file scan)
    - `scripts/validation/check_doc_interpreter_portability.py:634`: `return 2` (_baseline_path_is_unsafe)
    - `scripts/validation/check_doc_interpreter_portability.py:641`: `raise SystemExit(main())`
- for validators/gates: can it exit non-zero? Yes (exits 1 on drift/unportable invocations, exits 2 on configuration error); does it fail on the source repo's own default branch? No, exits 0 with `check-doc-interpreter-portability: OK`.
- does the output match what the documentation claims? Yes, outputs `check-doc-interpreter-portability: OK` and exits 0 on clean repository scan.

## Defects — required
none

## Observations
- AST import-time filtering: `_import_time_nodes` specifically ignores function bodies (`ast.FunctionDef`, `ast.AsyncFunctionDef`), ensuring that lazy imports loaded only inside function invocations do not trigger false positive portability offenses.
- Granular line-scoped exemptions: accepts `doc-interpreter-portability:` on the offending line or the line directly above it (`is_declared`), allowing legitimate bare interpreter citations (such as verbatim CI setup steps) without granting broad file-level exemptions.
- Concurrency-safe baseline updates: `_update_baseline` acquires a dedicated lock file (`.check-doc-interpreter-portability.write-lock`) and atomically replaces the baseline file, preventing partial writes or race conditions during automated ratchet updates.

## Context cost
26,041 bytes for `scripts/validation/check_doc_interpreter_portability.py`. Plus imported modules `scripts/validation/doc_interpreter_subprocess.py` (4,679 bytes) and `scripts/validation/portability_baseline.py` (20,208 bytes), plus baseline `scripts/validation/doc_interpreter_baseline.json` (18 bytes). Total context cost ~51 KB, approximately 12,750 tokens.
