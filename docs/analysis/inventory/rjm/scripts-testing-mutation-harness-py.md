---
package: rjm
path: scripts/testing/mutation_harness.py
type: script
bytes: 12860
unit: inv-rjm-263
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/testing/mutation_harness.py, sha256: 4a358071a44d214624a13c240c270f7c41c84e78d36caabcde41d075a9bba262}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/testing/mutation_harness.py

## Purpose — required, verbatim
> "Run targeted mutation batteries without silent no-op results." — scripts/testing/mutation_harness.py:1

## Design intent — required
Implements a deterministic, targeted mutation testing harness designed to verify that test suites reliably detect intentional software bugs rather than passing with ineffective or missing assertions. Unlike indiscriminate full-repo mutation tools that mutate every statement, this harness consumes structured JSON "battery" files where each entry specifies an exact string anchor replacement (`old` -> `new`) in a source file alongside the test command that must catch it. The runner pre-validates entries to reject identity mutations or ambiguous anchors, isolates mutations of tracked files in ephemeral git worktrees via `mutation_workspace.py` to prevent dirtying the active worktree, invalidates Python bytecode caches, enforces configurable per-command execution timeouts, and guarantees source restoration even when interrupted via SIGINT/Ctrl-C.

## Phase — required
rjm:test

## Inputs — required
- Positional CLI argument `battery`: JSON file path containing battery definitions — scripts/testing/mutation_harness.py:352
- Battery configuration dictionary: containing top-level `command` and a non-empty `entries` list — scripts/testing/mutation_harness.py:121, 130-131
- Target source files referenced by entry `path` — scripts/testing/mutation_harness.py:146-150
- Git repository root discovered via `_find_containment_root` to prevent path traversal — scripts/testing/mutation_harness.py:276-300

## Outputs — required
- Evaluation results emitted to stdout: `CAUGHT` or `MISSED` per battery entry with return code — scripts/testing/mutation_harness.py:212-213
- Validation or error diagnostics emitted to stderr on failure — scripts/testing/mutation_harness.py:359, 362, 365, 368
- Exit code: 0 if all mutations are caught, 1 if any mutation is missed, 2 on battery configuration error, 3 on external/IO/timeout error, 130 on interrupt — scripts/testing/mutation_harness.py:24-28, 55-59

## Invokes — required
- script mutation_workspace — scripts/testing/mutation_harness.py:48

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `CAUGHT` — scripts/testing/mutation_harness.py:20 — defined here
- `MISSED` — scripts/testing/mutation_harness.py:21 — defined here
- `BatteryConfigError` — scripts/testing/mutation_harness.py:64 — defined here
- `MutationTimeoutError` — scripts/testing/mutation_harness.py:68 — defined here
- `MutationEntry` — scripts/testing/mutation_harness.py:80 — defined here
- `MutationResult` — scripts/testing/mutation_harness.py:92 — defined here
- `ValidationProblem` — scripts/testing/mutation_harness.py:104 — defined here
- `load_battery` — scripts/testing/mutation_harness.py:111 — defined here
- `validate_battery` — scripts/testing/mutation_harness.py:166 — defined here
- `MutationRunner` — scripts/testing/mutation_harness.py:197 — defined here
- `format_validation_problems` — scripts/testing/mutation_harness.py:269 — defined here
- `main` — scripts/testing/mutation_harness.py:350 — defined here

## Structure
- Battery JSON schema — scripts/testing/mutation_harness.py:3-17
- BatteryConfigError and MutationTimeoutError — scripts/testing/mutation_harness.py:64-77
- MutationEntry, MutationResult, ValidationProblem dataclasses — scripts/testing/mutation_harness.py:79-109
- load_battery — scripts/testing/mutation_harness.py:111
- validate_battery — scripts/testing/mutation_harness.py:166
- MutationRunner — scripts/testing/mutation_harness.py:197
- format_validation_problems — scripts/testing/mutation_harness.py:269
- Containment root and path resolution — scripts/testing/mutation_harness.py:276-312
- main — scripts/testing/mutation_harness.py:350

## Scripts — required if type is script or the skill ships scripts
The file is an executable CLI script and test mutation runner:
- path: `scripts/testing/mutation_harness.py`, language: Python, lines: 376
- documented invocation:
  "python scripts/testing/mutation_harness.py battery" (CLI argument specification in help text and docstring)
- **executed:** yes
- actual command 1 (help display):
  ```bash
  python3 scripts/testing/mutation_harness.py --help
  ```
  - actual stdout: displays usage and documented exit code list
  - actual exit code: 0
- actual command 2 (caught mutation):
  ```bash
  python3 scripts/testing/mutation_harness.py .pytest_tmp/harness_verify_tmp/battery_caught.json
  ```
  - actual stdout: `CAUGHT test-caught returncode=1`
  - actual exit code: 0
- actual command 3 (missed mutation):
  ```bash
  python3 scripts/testing/mutation_harness.py .pytest_tmp/harness_verify_tmp/battery_missed.json
  ```
  - actual stdout: `MISSED test-missed returncode=0`
  - actual exit code: 1
- actual command 4 (config error):
  ```bash
  python3 scripts/testing/mutation_harness.py .pytest_tmp/harness_verify_tmp/battery_cfg.json
  ```
  - actual stderr: `CONFIG_ERROR mutation battery refused before running commands\ntest-cfg: ...: anchor occurrence count is 0, expected exactly 1`
  - actual exit code: 2
- actual command 5 (external error on missing file):
  ```bash
  python3 scripts/testing/mutation_harness.py nonexistent.json
  ```
  - actual stderr: `EXTERNAL_ERROR [Errno 2] No such file or directory: 'nonexistent.json'`
  - actual exit code: 3
- documented exit codes vs actual exit paths:
  - "0 - Success: all mutations were caught" — scripts/testing/mutation_harness.py:24
  - "1 - Logic error: one or more mutations were missed" — scripts/testing/mutation_harness.py:25
  - "2 - Config error: battery JSON, entry shape, or source anchors are invalid" — scripts/testing/mutation_harness.py:26
  - "3 - External error: source or process I/O failed" — scripts/testing/mutation_harness.py:27
  - "130 - Script-specific interrupt: source was restored after Ctrl-C" — scripts/testing/mutation_harness.py:28
  - `return EXIT_CONFIG_ERROR` — scripts/testing/mutation_harness.py:360
  - `return EXIT_EXTERNAL_ERROR` — scripts/testing/mutation_harness.py:363
  - `return EXIT_INTERRUPTED` — scripts/testing/mutation_harness.py:366
  - `return EXIT_EXTERNAL_ERROR` — scripts/testing/mutation_harness.py:369
  - `return EXIT_OK if all(result.caught for result in results) else EXIT_MUTATION_MISSED` — scripts/testing/mutation_harness.py:371
  - `raise SystemExit(main())` — scripts/testing/mutation_harness.py:375
- for validators/gates: can exit non-zero (exits 1 on missed mutations, 2 on malformed batteries, 3 on I/O failure); serves as a verification gate ensuring test assertions actively fail on bugs.

## Defects — required
- `orphan`: No in-scope file invokes scripts/testing/mutation_harness.py (invoked by out-of-scope test suites) — scripts/testing/mutation_harness.py:1

## Observations
- Containment enforcement: `_resolve_entry_path` verifies `resolved.is_relative_to(root)` (line 309), raising `BatteryConfigError` if any battery file attempts to mutate paths outside the repository containment root.
- Bytecode safety: `purge_bytecode(entry.path.parent)` is executed both before and after mutation in `_run_entry_in_place` (lines 238, 244) along with `PYTHONDONTWRITEBYTECODE=1` in subprocess environment to guarantee bytecode caches never cache mutated files.
- Worktree vs in-place mutation: Tracked files are executed inside isolated git worktrees via `isolated_mutation_worktree` (lines 227-230), whereas untracked files are mutated in-place within a strict `try...finally` block (lines 234-244).

## Context cost
12,860 bytes, ~3,200 tokens. Loads `scripts/testing/mutation_workspace.py` (17,102 bytes), total combined ~29.9 KB (~7,500 tokens).
