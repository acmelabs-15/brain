---
package: rjm
path: scripts/ci/cli_exit_contract_ratchet.py
type: script
bytes: 7547
unit: inv-rjm-201
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/cli_exit_contract_ratchet.py, sha256: 70922e7da82e56e1d9e67083a1a4aed6ed4a29d53e56346cfad7214a517c78f7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/cli_exit_contract_ratchet.py

## Purpose — required, verbatim
> "CLI exit-contract ratchet for extracted CI scripts (issue #4068)." — scripts/ci/cli_exit_contract_ratchet.py:2

## Design intent — required
Automated regression prevention gate enforcing that Python scripts extracted from GitHub Actions workflow `run:` blocks (under ADR-006) maintain their failure-detecting contract. Because workflow shell steps execute under `set -e`, any nonzero command immediately fails the step; however, Python conversions tend to return silent sentinel values (`None`, empty strings, warnings followed by `return 0`) that turn what was once a hard failure into a silent pass. By enforcing that every script in `scripts/ci/*.py` and `.github/scripts/*.py` defining `main` must have a corresponding test that asserts a nonzero exit code on `main(argv)` or a subprocess call within the same test function, this ratchet mechanically prevents silent-pass regressions using an equality ratchet with baseline tracking (`cli_exit_contract_baseline.txt`).

## Phase — required
rjm:test

## Inputs — required
- Command-line arguments parsed via `count_ratchet.build_parser`:
  - `--repo-root`: repository root path (defaults to current working directory)
  - `--baseline`: baseline count file path (defaults to `cli_exit_contract_baseline.txt`) — scripts/ci/cli_exit_contract_ratchet.py:76
  - `--update`: flag to lower baseline count when count improves
  - `--base-ref`: git ref for fork-point comparison
- Baseline file: `cli_exit_contract_baseline.txt` — scripts/ci/cli_exit_contract_ratchet.py:76
- Tracked script files matching `_SCRIPT_GLOBS`: `("scripts/ci/*.py", ".github/scripts/*.py")` — scripts/ci/cli_exit_contract_ratchet.py:89
- Tracked test files matching `_TEST_GLOBS`: `("tests/**/*.py", "tests/*.py")` — scripts/ci/cli_exit_contract_ratchet.py:90
- Git index probed via `count_ratchet.tracked_files` (scripts/ci/cli_exit_contract_ratchet.py:121)

## Outputs — required
- Process exit code: 0 (ok), 1 (regression), 2 (config error), 3 (external error) — scripts/ci/cli_exit_contract_ratchet.py:38-41
- Diagnostic output printed to stdout: `  {script}: no test asserts a nonzero exit from main()` — scripts/ci/cli_exit_contract_ratchet.py:159
- Status summary printed to stdout/stderr: `cli exit contract ratchet: OK (count == baseline 18).`
- Updated baseline file `cli_exit_contract_baseline.txt` when `--update` records a count decrease

## Invokes — required
- script cli_exit_contract_coverage — scripts/ci/cli_exit_contract_ratchet.py:52
- script count_ratchet — scripts/ci/cli_exit_contract_ratchet.py:53

## Invoked by — required
- script scripts/validation/checks_ratchet.py — scripts/validation/checks_ratchet.py:80

## Concepts named — required, verbatim
- `exit-contract ratchet` — scripts/ci/cli_exit_contract_ratchet.py:2 — defined here
- `ADR-006` — scripts/ci/cli_exit_contract_ratchet.py:4 — used here
- `set -e` — scripts/ci/cli_exit_contract_ratchet.py:5 — used here
- `silent-pass generator` — scripts/ci/cli_exit_contract_ratchet.py:9 — defined here
- `silent-pass detector` — scripts/ci/cli_exit_contract_ratchet.py:10 — defined here
- `main(argv)` — scripts/ci/cli_exit_contract_ratchet.py:14 — used here
- `helper-level assertion` — scripts/ci/cli_exit_contract_ratchet.py:14 — defined here
- `exit-code defect` — scripts/ci/cli_exit_contract_ratchet.py:15 — defined here
- `AST scan` — scripts/ci/cli_exit_contract_ratchet.py:19 — used here
- `workflow-wiring assertion` — scripts/ci/cli_exit_contract_ratchet.py:29 — defined here
- `equality` — scripts/ci/cli_exit_contract_ratchet.py:32 — used here
- `AGENTS.md` — scripts/ci/cli_exit_contract_ratchet.py:37 — used here
- `cli_exit_contract_baseline.txt` — scripts/ci/cli_exit_contract_ratchet.py:76 — defined here
- `MERGE_TREE_BACKED` — scripts/ci/cli_exit_contract_ratchet.py:78 — defined here
- `merge_tree_ratchet_registry.py` — scripts/ci/cli_exit_contract_ratchet.py:79 — used here
- `git-health probe` — scripts/ci/cli_exit_contract_ratchet.py:117 — defined here

## Structure
- Module docstring and exit contract specification (lines 1-42)
- Imports and export declarations (lines 44-74)
- Baseline configuration and merge-tree declaration (lines 76-85)
- Glob patterns and `_read` helper (lines 89-98)
- `uncovered_scripts` dual-scope scanner (lines 100-146)
- `current_count` counting function with diagnostic prints (lines 148-161)
- `main` CLI runner and parser configuration (lines 163-184)
- Entrypoint execution (lines 186-188)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/cli_exit_contract_ratchet.py`
- **language:** Python 3
- **lines:** 188
- **documented invocation:**
  > "python scripts/ci/cli_exit_contract_ratchet.py" — tests/ci/test_cli_exit_contract_ratchet.py:357
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/cli_exit_contract_ratchet.py --repo-root sources/rjm`
- **stdout:**
  ```text
    .github/scripts/check_design_review_gate.py: no test asserts a nonzero exit from main()
    .github/scripts/extract_incremental_scope.py: no test asserts a nonzero exit from main()
    .github/scripts/generate_spec_report.py: no test asserts a nonzero exit from main()
    .github/scripts/parse_artifact_insights.py: no test asserts a nonzero exit from main()
    .github/scripts/parse_feature_review.py: no test asserts a nonzero exit from main()
    scripts/ci/artifact_build_context.py: no test asserts a nonzero exit from main()
    scripts/ci/artifact_collect.py: no test asserts a nonzero exit from main()
    scripts/ci/artifact_write_summary.py: no test asserts a nonzero exit from main()
    scripts/ci/drift_collect_details.py: no test asserts a nonzero exit from main()
    scripts/ci/drift_run_detection.py: no test asserts a nonzero exit from main()
    scripts/ci/drift_write_summary.py: no test asserts a nonzero exit from main()
    scripts/ci/invoke_copilot_cli.py: no test asserts a nonzero exit from main()
    scripts/ci/show_drift_failure.py: no test asserts a nonzero exit from main()
    scripts/ci/show_generated_agent_diff.py: no test asserts a nonzero exit from main()
    scripts/ci/spec_external_signal_wrapper.py: no test asserts a nonzero exit from main()
    scripts/ci/spec_prepare_context.py: no test asserts a nonzero exit from main()
    scripts/ci/sweep_copilot_synthesis.py: no test asserts a nonzero exit from main()
    scripts/ci/update_needs_split_label.py: no test asserts a nonzero exit from main()
  cli exit contract ratchet: OK (count == baseline 18).
  ```
- **actual exit code:** 0
- **documented exit codes:**
  - > "0 - ok (count == baseline, or --update records a decrease)" — scripts/ci/cli_exit_contract_ratchet.py:38
  - > "1 - regression (count != baseline, or baseline raised vs --base-ref)" — scripts/ci/cli_exit_contract_ratchet.py:39
  - > "2 - config error (baseline missing or malformed, bad args)" — scripts/ci/cli_exit_contract_ratchet.py:40
  - > "3 - external error (git could not run)" — scripts/ci/cli_exit_contract_ratchet.py:41
- **actual exit paths:**
  - `sys.exit(main())` — scripts/ci/cli_exit_contract_ratchet.py:187 delegates to `count_ratchet.run`, which returns:
    - `EXIT_OK` (0) on matching count or valid decrease with `--update` (scripts/ci/count_ratchet.py:410)
    - `EXIT_REGRESSION` (1) on count regression (scripts/ci/count_ratchet.py:408)
    - `EXIT_CONFIG` (2) on missing/malformed baseline or bad args (scripts/ci/count_ratchet.py:380, 396)
    - `EXIT_EXTERNAL` (3) on git error (scripts/ci/count_ratchet.py:387)
- **for validators/gates:** Can exit non-zero: exits 1 on regression where uncovered script count does not match baseline, 2 on config/baseline error, and 3 on external git failure. When run against the source repository's own default branch, it passes cleanly with exit code 0 (`OK (count == baseline 18)`).
- **output matches documentation:** yes, lists the 18 uncovered scripts and reports equality against baseline 18.

## Defects — required
none

## Observations
Demonstrates strict empirical defense against silent error swallowing resulting from CI workflow refactoring. The author notes that AST parsing was rejected because "a sentinel-tracing AST scan is high false-positive and only catches shapes already enumerated", whereas tracking whether a test asserts on nonzero process termination from `main` or subprocess execution is mechanically decidable and immune to data-flow obfuscation. Furthermore, dual-scope tracking (`_SCRIPT_GLOBS` and `_TEST_GLOBS`) unifies git status queries to prevent duplicate warning messages on unmerged paths (resolving issue #4746).

## Context cost
7547 bytes, ~1887 tokens. Imports `scripts.ci.cli_exit_contract_coverage` (17656 bytes) and `scripts.ci.count_ratchet` (47457 bytes), for an invocation context of ~72660 bytes (~18165 tokens).
