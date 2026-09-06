---
unit: inv-rjm-256
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-256

## Files assigned
- [x] `scripts/progress/reporter.py`
- [x] `scripts/quality_gate/__init__.py`
- [x] `scripts/quality_gate/check_critical_failures.py`
- [x] `scripts/quality_gate/external_signal_gate.py`
- [x] `scripts/quality_gate/path_utils.py`
- [x] `scripts/quality_gate/resolve_pytest_signal.py`
- [x] `scripts/quality_gate/run_pytest.py`
- [x] `scripts/quality_gate/spec_external_signal_gate.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-progress-reporter-py.md` (4840 bytes)
- `docs/analysis/inventory/rjm/scripts-quality-gate---init---py.md` (2353 bytes)
- `docs/analysis/inventory/rjm/scripts-quality-gate-check-critical-failures-py.md` (6038 bytes)
- `docs/analysis/inventory/rjm/scripts-quality-gate-external-signal-gate-py.md` (5350 bytes)
- `docs/analysis/inventory/rjm/scripts-quality-gate-path-utils-py.md` (2811 bytes)
- `docs/analysis/inventory/rjm/scripts-quality-gate-resolve-pytest-signal-py.md` (7277 bytes)
- `docs/analysis/inventory/rjm/scripts-quality-gate-run-pytest-py.md` (4571 bytes)
- `docs/analysis/inventory/rjm/scripts-quality-gate-spec-external-signal-gate-py.md` (5244 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-256.md` (2450 bytes)

## Scripts executed
- `scripts/progress/reporter.py`: `python3 sources/rjm/scripts/progress/reporter.py`, exit code 0
- `scripts/quality_gate/__init__.py`: `python3 sources/rjm/scripts/quality_gate/__init__.py`, exit code 0
- `scripts/quality_gate/check_critical_failures.py`: `FINAL_VERDICT=PASS SECURITY_VERDICT=PASS QA_VERDICT=PASS ANALYST_VERDICT=PASS ARCHITECT_VERDICT=PASS DEVOPS_VERDICT=PASS ROADMAP_VERDICT=PASS RELIABILITY_VERDICT=PASS OBSERVABILITY_VERDICT=PASS AGENT_SAFETY_VERDICT=PASS DECISION_RIGOR_VERDICT=PASS python3 sources/rjm/scripts/quality_gate/check_critical_failures.py`, exit code 0; unconfigured run exit code 1
- `scripts/quality_gate/external_signal_gate.py`: `PYTEST_STATUS=PASS SECURITY_VERDICT=PASS QA_VERDICT=PASS ANALYST_VERDICT=PASS ARCHITECT_VERDICT=PASS DEVOPS_VERDICT=PASS ROADMAP_VERDICT=PASS RELIABILITY_VERDICT=PASS OBSERVABILITY_VERDICT=PASS AGENT_SAFETY_VERDICT=PASS DECISION_RIGOR_VERDICT=PASS python3 sources/rjm/scripts/quality_gate/external_signal_gate.py`, exit code 0; `--unrecognized-argument` exit code 2; failing pytest exit code 1
- `scripts/quality_gate/path_utils.py`: `python3 sources/rjm/scripts/quality_gate/path_utils.py`, exit code 0
- `scripts/quality_gate/resolve_pytest_signal.py`: `python3 sources/rjm/scripts/quality_gate/resolve_pytest_signal.py --repo owner/repo --pr 123 --expected-head-sha 0123456789abcdef0123456789abcdef01234567`, exit code 0; `--repo invalid-repo` exit code 2
- `scripts/quality_gate/run_pytest.py`: `tmp_out=$(mktemp) && GITHUB_OUTPUT="$tmp_out" python3 scripts/quality_gate/run_pytest.py --project-root scripts/quality_gate && rm "$tmp_out"`, exit code 0; unconfigured GITHUB_OUTPUT exit code 2; unsafe project root exit code 1
- `scripts/quality_gate/spec_external_signal_gate.py`: `tmp_body=$(mktemp) && echo "## Acceptance Criteria\n- [x] All tests pass" > "$tmp_body" && PR_BODY_FILE="$tmp_body" TRACE_VERDICT=PASS COMPLETENESS_VERDICT=PASS python3 sources/rjm/scripts/quality_gate/spec_external_signal_gate.py && rm "$tmp_body"`, exit code 0; `--unrecognized-arg` exit code 2; unchecked criteria exit code 1

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- ADR-006 ("no logic in YAML") is the driving architectural pattern for `scripts/quality_gate/`, which extracts multi-step CI workflow logic from `.github/workflows/ai-pr-quality-gate.yml` into testable Python modules with standard `main(argv)` entrypoints.
- The closed-loop rule (Issues #2108 / #1855) is enforced across both `external_signal_gate.py` (test gate) and `spec_external_signal_gate.py` (spec gate): no quality gate is permitted to pass based on LLM reviewer agent verdicts alone without an external, deterministic grounding signal (test suite status or checked acceptance criteria).
- `resolve_pytest_signal.py` implements shadow mode (Issue #4822 Phase 1) to read GitHub Actions workflow job step names directly, allowing CI to retire redundant secondary pytest runs once shadow validation completes.

## Blocked or uncertain
none

## Time and size
Approximate source read: 49,917 bytes (~12,479 tokens); approximate output written: ~40,940 bytes (~10,235 tokens).
