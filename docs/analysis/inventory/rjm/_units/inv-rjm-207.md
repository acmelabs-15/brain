---
unit: inv-rjm-207
phase: 1
package: rjm
session: 007
subagent_returned: complete
---

# Unit inv-rjm-207

## Files assigned
- [x] `scripts/ci/run_hook_bypass_audit.py`
- [x] `scripts/ci/run_pr_conflict_resolver.py`
- [x] `scripts/ci/run_pytest_non_tmp.py`
- [x] `scripts/ci/run_pytest_selected.py`
- [x] `scripts/ci/run_quality_grades.py`
- [x] `scripts/ci/show_drift_failure.py`
- [x] `scripts/ci/show_generated_agent_diff.py`
- [x] `scripts/ci/smoke_assert_vendored_tree.py`
- [x] `scripts/ci/smoke_first_turn_verify.py`
- [x] `scripts/ci/smoke_install_tarball.py`
- [x] `scripts/ci/smoke_report_result.py`
- [x] `scripts/ci/spec_external_signal_wrapper.py`

## Outputs produced
- `docs/analysis/inventory/rjm/scripts-ci-run-hook-bypass-audit-py.md` (3921 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-run-pr-conflict-resolver-py.md` (4376 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-run-pytest-non-tmp-py.md` (3012 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-run-pytest-selected-py.md` (3490 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-run-quality-grades-py.md` (3982 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-show-drift-failure-py.md` (3361 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-show-generated-agent-diff-py.md` (2906 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-smoke-assert-vendored-tree-py.md` (2932 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-smoke-first-turn-verify-py.md` (2942 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-smoke-install-tarball-py.md` (3396 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-smoke-report-result-py.md` (3319 bytes)
- `docs/analysis/inventory/rjm/scripts-ci-spec-external-signal-wrapper-py.md` (3974 bytes)

## Scripts executed
- `scripts/ci/run_hook_bypass_audit.py`: `python3 scripts/ci/run_hook_bypass_audit.py --help` (exit code: 0); `python3 scripts/ci/run_hook_bypass_audit.py --detector scripts/detect_hook_bypass.py --base-ref HEAD --output /tmp/test_audit.json` (exit code: 0); `python3 scripts/ci/run_hook_bypass_audit.py --detector non_existent.py --base-ref HEAD --output /tmp/test_audit.json` (exit code: 2)
- `scripts/ci/run_pr_conflict_resolver.py`: `python3 scripts/ci/run_pr_conflict_resolver.py` (exit code: 2); `GITHUB_OUTPUT=/tmp/gh_out.txt PR_NUMBER=123 HEAD_REF=feature BASE_REF=main REPO_OWNER=test REPO_NAME=test python3 scripts/ci/run_pr_conflict_resolver.py` (exit code: 0)
- `scripts/ci/run_pytest_non_tmp.py`: `python3 scripts/ci/run_pytest_non_tmp.py` (exit code: 2); `PYTEST_NON_TMP_ROOT=/tmp/pytest_non_tmp uv run python scripts/ci/run_pytest_non_tmp.py --version` (exit code: 0)
- `scripts/ci/run_pytest_selected.py`: `uv run python scripts/ci/run_pytest_selected.py --help` (exit code: 0); `PYTEST_NON_TMP_ROOT=/tmp/pytest_sel uv run python scripts/ci/run_pytest_selected.py --partition safe-push --collect-only` (exit code: 0)
- `scripts/ci/run_quality_grades.py`: `python3 scripts/ci/run_quality_grades.py --help` (exit code: 0); `python3 scripts/ci/run_quality_grades.py --grader src/copilot-cli/skills/quality-grades/scripts/grade_domains.py --json-out /tmp/grades.json --markdown-out /tmp/grades.md --top-n 3` (exit code: 0)
- `scripts/ci/show_drift_failure.py`: `VALIDATE_CONCLUSION=success LIB_MIRROR_CONCLUSION=success MANIFEST_PARITY_CONCLUSION=success python3 scripts/ci/show_drift_failure.py` (exit code: 0)
- `scripts/ci/show_generated_agent_diff.py`: `uv run python scripts/ci/show_generated_agent_diff.py --help` (exit code: 0); `uv run python scripts/ci/show_generated_agent_diff.py --repo-root .` (exit code: 0)
- `scripts/ci/smoke_assert_vendored_tree.py`: `python3 scripts/ci/smoke_assert_vendored_tree.py` (exit code: 1); mock demo directory test (exit code: 0)
- `scripts/ci/smoke_first_turn_verify.py`: `python3 scripts/ci/smoke_first_turn_verify.py` (exit code: 1); mock clean demo test (exit code: 0); mock banned path test (exit code: 1)
- `scripts/ci/smoke_install_tarball.py`: `python3 scripts/ci/smoke_install_tarball.py` (exit code: 1); `TARBALL=/tmp/fake.tgz python3 scripts/ci/smoke_install_tarball.py` (exit code: 254)
- `scripts/ci/smoke_report_result.py`: `python3 scripts/ci/smoke_report_result.py` (exit code: 1); `CHECK_PATHS_RESULT=success CLI_CHANGED=false python3 scripts/ci/smoke_report_result.py` (exit code: 0); `CHECK_PATHS_RESULT=success CLI_CHANGED=true SMOKE_RESULT=success VERIFY_RESULT=success python3 scripts/ci/smoke_report_result.py` (exit code: 0); `CHECK_PATHS_RESULT=success CLI_CHANGED=true SMOKE_RESULT=success VERIFY_RESULT=failure python3 scripts/ci/smoke_report_result.py` (exit code: 1)
- `scripts/ci/spec_external_signal_wrapper.py`: `PR_BODY="test spec" RUNNER_TEMP=/tmp python3 scripts/ci/spec_external_signal_wrapper.py` (exit code: 1); `PR_BODY="## Acceptance Criteria\n- [x] done" TRACE_VERDICT=PASS COMPLETENESS_VERDICT=PASS RUNNER_TEMP=/tmp python3 scripts/ci/spec_external_signal_wrapper.py` (exit code: 0)

## Coverage self-check
- [x] Every assigned file has an entry / card / artifact
- [x] Every required field in every output is non-empty (`none` written where nothing to report)
- [x] Every `path:line` cited was confirmed against the file
- [x] Every referenced path was checked with `ls`
- [x] Glossary convention applied (package-prefixed before decision; canonical after)

## Cross-unit notes
All 12 files in this unit are CI automation and verification scripts residing under `scripts/ci/`. They were extracted from inline GitHub Actions YAML / PowerShell / bash blocks into standalone Python testable modules conforming to ADR-006 ("thin workflows testable modules") and ADR-035 ("exit code standardization"). Several scripts interface directly with downstream tools or validators in other units:
- `run_pytest_selected.py` imports and invokes `run_pytest_non_tmp.py` (this unit) and `scripts/test_selection/select_tests.py` (inv-rjm-214).
- `run_hook_bypass_audit.py` wraps `scripts/detect_hook_bypass.py` (inv-rjm-210).
- `run_pr_conflict_resolver.py` wraps `.claude/skills/merge-resolver/scripts/resolve_pr_conflicts.py` (inv-rjm-119).
- `show_drift_failure.py` and `show_generated_agent_diff.py` trigger `build/generate_agents.py` and mirror sync scripts.
- `spec_external_signal_wrapper.py` wraps `scripts/quality_gate/spec_external_signal_gate.py` (inv-rjm-212).

## Blocked or uncertain
none

## Time and size
Source read: 36,333 bytes (12 files, ~9,083 tokens). Output written: 41,611 bytes across 12 inventory cards + ~3,500 bytes for work unit report (~11,278 tokens).
