---
package: rjm
path: scripts/ci/subprocess_encoding_count_ratchet.py
type: script
bytes: 4123
unit: inv-rjm-208
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/subprocess_encoding_count_ratchet.py, sha256: f7908eed342041ee0688b4a809507595c39326ac8b2cea3c46a67166e1aca99e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/subprocess_encoding_count_ratchet.py

## Purpose — required, verbatim
> "Subprocess encoding convention count ratchet (issue #4261)." — scripts/ci/subprocess_encoding_count_ratchet.py:1

## Design intent — required
Enforces a repository-wide ratchet against subprocess encoding convention debt by counting calls to `subprocess.run`, `subprocess.Popen`, `subprocess.check_output`, and `subprocess.check_call` that use text mode (`text=` or `encoding=`) without explicitly specifying `errors=` (issue #4261). It prevents regressions beyond the recorded baseline (238) on tracked Python files (excluding test fixtures), permits improvements, and intentionally remains not merge-tree backed (`MERGE_TREE_BACKED = False`) so the `--base-ref` comparison serves as its sole stale-branch guard.

## Phase — required
rjm:test

## Inputs — required
- Git-tracked Python files matching `*.py` and `**/*.py` (excluding `tests/hooks/fixtures/`) (lines 76, 82)
- Baseline file `subprocess_encoding_count_baseline.txt` (line 49)
- CLI options: `--repo-root`, `--baseline`, `--update`, `--base-ref` (parsed via `build_parser`)

## Outputs — required
- Diagnostic console logs reporting violation counts, slack, or regression advice
- Updated baseline file `subprocess_encoding_count_baseline.txt` when `--update` is passed on improvement

## Invokes — required
- script count_ratchet — scripts/ci/subprocess_encoding_count_ratchet.py:28
- script check_subprocess_encoding — scripts/ci/subprocess_encoding_count_ratchet.py:37
- file subprocess_encoding_count_baseline.txt — scripts/ci/subprocess_encoding_count_ratchet.py:49

## Invoked by — required
- doc src/copilot-cli/instructions/ci-scripts.instructions.md — src/copilot-cli/instructions/ci-scripts.instructions.md:39

## Concepts named — required, verbatim
- `EXIT_CONFIG` — scripts/ci/subprocess_encoding_count_ratchet.py:29 — used here
- `EXIT_EXTERNAL` — scripts/ci/subprocess_encoding_count_ratchet.py:30 — used here
- `EXIT_OK` — scripts/ci/subprocess_encoding_count_ratchet.py:31 — used here
- `EXIT_REGRESSION` — scripts/ci/subprocess_encoding_count_ratchet.py:32 — used here
- `build_parser` — scripts/ci/subprocess_encoding_count_ratchet.py:33 — used here
- `run` — scripts/ci/subprocess_encoding_count_ratchet.py:34 — used here
- `tracked_files` — scripts/ci/subprocess_encoding_count_ratchet.py:35 — used here
- `find_all_violations` — scripts/ci/subprocess_encoding_count_ratchet.py:37 — used here
- `MERGE_TREE_BACKED` — scripts/ci/subprocess_encoding_count_ratchet.py:52 — defined here
- `current_count` — scripts/ci/subprocess_encoding_count_ratchet.py:74 — defined here
- `main` — scripts/ci/subprocess_encoding_count_ratchet.py:95 — defined here

## Structure
- `def current_count` — scripts/ci/subprocess_encoding_count_ratchet.py:74
- `def main` — scripts/ci/subprocess_encoding_count_ratchet.py:95

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/subprocess_encoding_count_ratchet.py`, language: Python, lines: 117
- documented invocation:
  - "Subprocess encoding convention count ratchet (issue #4261)." — scripts/ci/subprocess_encoding_count_ratchet.py:1
  - "subprocess_encoding_count_ratchet.py" — src/copilot-cli/instructions/ci-scripts.instructions.md:39
- **executed:** yes
- actual command run: `python3 scripts/ci/subprocess_encoding_count_ratchet.py`, abridged stdout:
  ```
  subprocess encoding count ratchet: OK (count == baseline 238).
  ```
  **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - documented:
    - "0 - ok (count <= baseline)" — scripts/ci/subprocess_encoding_count_ratchet.py:12
    - "1 - regression (count > baseline, or a successful fork-point comparison" — scripts/ci/subprocess_encoding_count_ratchet.py:13
    - "2 - config error (baseline missing or malformed, fork baseline absent," — scripts/ci/subprocess_encoding_count_ratchet.py:15
    - "3 - external error (checker, git, or fork baseline read failed)" — scripts/ci/subprocess_encoding_count_ratchet.py:17
  - actual exit paths:
    - `return None` — scripts/ci/subprocess_encoding_count_ratchet.py:78
    - `return 0` — scripts/ci/subprocess_encoding_count_ratchet.py:86
    - `return None` — scripts/ci/subprocess_encoding_count_ratchet.py:92
    - `raise SystemExit(main())` — scripts/ci/subprocess_encoding_count_ratchet.py:116
- for validators/gates: can exit non-zero (exits 1 on regression, 2 on config/baseline error, 3 on external tool error). On repository default branch checkout, passes cleanly with exit code 0 matching baseline 238.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
Explicitly documents why `MERGE_TREE_BACKED = False`: unlike other count ratchets, it is not registered in `merge_tree_ratchet_registry.py` and runs only in `pytest.yml`, making `--base-ref` its only defense against stale baselines.

## Context cost
4123 bytes, approximately 1030 tokens.
