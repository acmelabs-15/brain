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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/subprocess_encoding_count_ratchet.py

## Purpose — required, verbatim
> "Subprocess encoding convention count ratchet (issue #4261)." — scripts/ci/subprocess_encoding_count_ratchet.py:1

## Design intent — required
Enforces a non-increasing ceiling on subprocess calls (`subprocess.run`, `subprocess.Popen`, `subprocess.check_output`, `subprocess.check_call`) that use text mode (`text=` or `encoding=`) but omit explicit `errors=` parameter handling across git-tracked Python files. Operates as a whole-repo count ratchet preventing regressions while allowing improvements to decrease the baseline. Deliberately not registered in `merge_tree_ratchet_registry.py` because it runs exclusively in CI workflows rather than local pr-validation or pre-push gates.

## Phase — required
none

## Inputs — required
- CLI argument `--base-ref` for fork-point comparison — scripts/ci/subprocess_encoding_count_ratchet.py:14
- Baseline text file `subprocess_encoding_count_baseline.txt` — scripts/ci/subprocess_encoding_count_ratchet.py:49
- Git-tracked Python source files matching `*.py` — scripts/ci/subprocess_encoding_count_ratchet.py:76

## Outputs — required
- Status messages reporting violation count vs baseline to stdout
- Updated integer baseline written to `subprocess_encoding_count_baseline.txt` if `--update` is specified and violations decreased
- Process exit codes (0 = ok, 1 = regression, 2 = config error, 3 = external error) — scripts/ci/subprocess_encoding_count_ratchet.py:12

## Invokes — required
- script count_ratchet — scripts/ci/subprocess_encoding_count_ratchet.py:28
- script check_subprocess_encoding — scripts/ci/subprocess_encoding_count_ratchet.py:37
- script subprocess_encoding_count_baseline.txt — scripts/ci/subprocess_encoding_count_ratchet.py:49

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `issue #4261` — scripts/ci/subprocess_encoding_count_ratchet.py:1 — used here
- `AGENTS.md` — scripts/ci/subprocess_encoding_count_ratchet.py:11 — used here
- `EXIT_CONFIG` — scripts/ci/subprocess_encoding_count_ratchet.py:29 — defined here
- `EXIT_EXTERNAL` — scripts/ci/subprocess_encoding_count_ratchet.py:30 — defined here
- `EXIT_OK` — scripts/ci/subprocess_encoding_count_ratchet.py:31 — defined here
- `EXIT_REGRESSION` — scripts/ci/subprocess_encoding_count_ratchet.py:32 — defined here
- `MERGE_TREE_BACKED` — scripts/ci/subprocess_encoding_count_ratchet.py:52 — defined here
- `merge_tree_ratchet_registry.py` — scripts/ci/subprocess_encoding_count_ratchet.py:53 — used here
- `scripts/ci/merge_tree_ratchet_check.py` — scripts/ci/subprocess_encoding_count_ratchet.py:57 — used here
- `tests/ci/test_merge_tree_backing_declarations.py` — scripts/ci/subprocess_encoding_count_ratchet.py:69 — used here
- `current_count` — scripts/ci/subprocess_encoding_count_ratchet.py:74 — defined here
- `main` — scripts/ci/subprocess_encoding_count_ratchet.py:95 — defined here

## Structure
none (python script; constants and functions: _BASELINE_PATH, _FIXTURE_PREFIX, MERGE_TREE_BACKED, current_count, main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/subprocess_encoding_count_ratchet.py`, language: Python 3, lines: 117
- documented invocation:
  "Subprocess encoding convention count ratchet (issue #4261)." — scripts/ci/subprocess_encoding_count_ratchet.py:1
  (CLI command: `python3 scripts/ci/subprocess_encoding_count_ratchet.py`)
- executed: yes
- actual command run: `python3 scripts/ci/subprocess_encoding_count_ratchet.py` (executed from `sources/rjm`)
  abridged stdout: `subprocess encoding count ratchet: OK (count == baseline 238).`
  actual exit code: 0
- documented exit codes:
  `0 - ok (count <= baseline)` — scripts/ci/subprocess_encoding_count_ratchet.py:12
  `1 - regression (count > baseline, or a successful fork-point comparison proves the recorded baseline sits above the one at --base-ref)` — scripts/ci/subprocess_encoding_count_ratchet.py:13-14
  `2 - config error (baseline missing or malformed, fork baseline absent, bad args)` — scripts/ci/subprocess_encoding_count_ratchet.py:15-16
  `3 - external error (checker, git, or fork baseline read failed)` — scripts/ci/subprocess_encoding_count_ratchet.py:17
  vs. actual exit paths in code:
  `scripts/ci/subprocess_encoding_count_ratchet.py:101` (`return run(...)`, where `count_ratchet.run` returns `EXIT_OK` (0), `EXIT_REGRESSION` (1), `EXIT_CONFIG` (2), or `EXIT_EXTERNAL` (3))
  `scripts/ci/subprocess_encoding_count_ratchet.py:116` (`raise SystemExit(main())`)
- for validators/gates: can it exit non-zero? yes (exits 1 on count regression or raised baseline vs `--base-ref`, 2 on config error, 3 on checker/git external failure). does it fail on the source repo's own default branch? no (passes with count 238 matching baseline).
- does the output match what the documentation claims? yes (outputs status message and exit code 0 when count <= baseline)

## Defects — required
- `orphan — scripts/ci/subprocess_encoding_count_ratchet.py:58 — not invoked by any in-scope lifecycle file (runs only in out-of-scope .github/workflows/pytest.yml)`

## Observations
- Sets `MERGE_TREE_BACKED = False` (line 52) with an extensive docstring explaining why it is not registered in `merge_tree_ratchet_registry.py`: doing so would add a sixth check to local count-ratchets aggregate and pr-validation, altering the gate definition (ci-scripts MUST-13).
- Explicitly filters out fixture files matching `tests/hooks/fixtures/` (`_FIXTURE_PREFIX`) from the violation scan.

## Context cost
4,123 bytes (~1,030 tokens). Loads `scripts/ci/count_ratchet.py` (47,457 bytes), `scripts/validation/check_subprocess_encoding.py` (71,105 bytes), and `scripts/ci/subprocess_encoding_count_baseline.txt` (4 bytes), totaling ~122,689 bytes (~30,672 tokens).
