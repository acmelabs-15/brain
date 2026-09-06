---
unit: inv-rjm-256
phase: 1
package: rjm
session: 011
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
- `docs/analysis/inventory/rjm/scripts-progress-reporter-py.md` (4342 bytes)
- `docs/analysis/inventory/rjm/scripts-quality-gate---init---py.md` (2359 bytes)
- `docs/analysis/inventory/rjm/scripts-quality-gate-check-critical-failures-py.md` (5857 bytes)
- `docs/analysis/inventory/rjm/scripts-quality-gate-external-signal-gate-py.md` (5524 bytes)
- `docs/analysis/inventory/rjm/scripts-quality-gate-path-utils-py.md` (2969 bytes)
- `docs/analysis/inventory/rjm/scripts-quality-gate-resolve-pytest-signal-py.md` (7970 bytes)
- `docs/analysis/inventory/rjm/scripts-quality-gate-run-pytest-py.md` (4880 bytes)
- `docs/analysis/inventory/rjm/scripts-quality-gate-spec-external-signal-gate-py.md` (5583 bytes)
- `docs/analysis/inventory/rjm/_units/inv-rjm-256.md`

## Scripts executed
- `scripts/progress/reporter.py`: `python3 sources/rjm/scripts/progress/reporter.py` (exit 0)
- `scripts/quality_gate/__init__.py`: `python3 sources/rjm/scripts/quality_gate/__init__.py` (exit 0)
- `scripts/quality_gate/check_critical_failures.py`: `FINAL_VERDICT=PASS SECURITY_VERDICT=PASS QA_VERDICT=PASS ANALYST_VERDICT=PASS ARCHITECT_VERDICT=PASS DEVOPS_VERDICT=PASS ROADMAP_VERDICT=PASS RELIABILITY_VERDICT=PASS OBSERVABILITY_VERDICT=PASS AGENT_SAFETY_VERDICT=PASS DECISION_RIGOR_VERDICT=PASS python3 sources/rjm/scripts/quality_gate/check_critical_failures.py` (exit 0); `python3 sources/rjm/scripts/quality_gate/check_critical_failures.py` (exit 1)
- `scripts/quality_gate/external_signal_gate.py`: `PYTEST_STATUS=PASS SECURITY_VERDICT=COMPLIANT QA_VERDICT=COMPLIANT ANALYST_VERDICT=COMPLIANT ARCHITECT_VERDICT=COMPLIANT DEVOPS_VERDICT=COMPLIANT ROADMAP_VERDICT=COMPLIANT RELIABILITY_VERDICT=COMPLIANT OBSERVABILITY_VERDICT=COMPLIANT AGENT_SAFETY_VERDICT=COMPLIANT DECISION_RIGOR_VERDICT=COMPLIANT python3 sources/rjm/scripts/quality_gate/external_signal_gate.py` (exit 0); `python3 sources/rjm/scripts/quality_gate/external_signal_gate.py` (exit 1)
- `scripts/quality_gate/path_utils.py`: `python3 sources/rjm/scripts/quality_gate/path_utils.py` (exit 0)
- `scripts/quality_gate/resolve_pytest_signal.py`: `python3 sources/rjm/scripts/quality_gate/resolve_pytest_signal.py --repo owner/repo --pr 123 --expected-head-sha 0123456789abcdef0123456789abcdef01234567` (exit 0); `python3 sources/rjm/scripts/quality_gate/resolve_pytest_signal.py` (exit 2)
- `scripts/quality_gate/run_pytest.py`: `GITHUB_OUTPUT=/tmp/pytest_out.txt python3 sources/rjm/scripts/quality_gate/run_pytest.py --project-root sources/rjm/scripts/quality_gate` (exit 0); `python3 sources/rjm/scripts/quality_gate/run_pytest.py` (exit 1); `python3 sources/rjm/scripts/quality_gate/run_pytest.py --project-root sources/rjm/scripts/quality_gate` (exit 2)
- `scripts/quality_gate/spec_external_signal_gate.py`: `PR_BODY_FILE=/tmp/pr_body.md TRACE_VERDICT=COMPLIANT COMPLETENESS_VERDICT=COMPLIANT python3 sources/rjm/scripts/quality_gate/spec_external_signal_gate.py` (exit 0); `python3 sources/rjm/scripts/quality_gate/spec_external_signal_gate.py` (exit 1)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
- `scripts/quality_gate/external_signal_gate.py` and `scripts/quality_gate/spec_external_signal_gate.py` depend on `scripts/external_signals/gate_aggregator.py` and `scripts/external_signals/acceptance_criteria.py` from outside this unit (`inv-rjm-254`).
- Remediated Phase 1V findings: `scripts/quality_gate/external_signal_gate.py` includes `script quality_gate_agents` in `## Invokes`, and both `external_signal_gate.py` and `spec_external_signal_gate.py` invoke `path_utils` rather than classifying `REPOSITORY_ROOT` as a script. All standalone scripts without in-scope callers record the `orphan` defect under `## Defects`.

## Blocked or uncertain
none

## Time and size
Approx. 12,500 tokens of source read; approx. 8,200 tokens of output written.
