---
package: rjm
path: .github/scripts/check_spec_failures.py
type: script
bytes: 3835
unit: inv-rjm-182
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: .github/scripts/check_spec_failures.py, sha256: 424864cf5d928f58a94a5cc24eee49781ce48be65e9ad81d88ae6a30175c8a9b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .github/scripts/check_spec_failures.py

## Purpose — required, verbatim
> "Check spec validation verdicts and fail the workflow if needed." — .github/scripts/check_spec_failures.py:2

## Design intent — required
Authoritative quality gate script for the specification validation workflow (`ai-spec-validation.yml`). It consumes verdicts, findings, and infrastructure failure indicators from the requirement traceability and completeness validation steps, delegating verdict failure classification to `scripts.ai_review_common.spec_validation_failed`. Crucially, it distinguishes true specification gaps from transient infrastructure outages: if validation failed due to infrastructure errors, it logs GitHub Actions warning annotations (`::warning::`) and exits 0 instead of blocking the PR merge, while failing (exiting 1 with `::error::`) whenever requirements or design traceability chains are genuinely incomplete.

## Phase — required
cross-phase

## Inputs — required
- CLI arguments or environment variables (.github/scripts/check_spec_failures.py:40-68):
  - `--trace-verdict` / `TRACE_VERDICT`: "Verdict from traceability check" — .github/scripts/check_spec_failures.py:42
  - `--completeness-verdict` / `COMPLETENESS_VERDICT`: "Verdict from completeness check" — .github/scripts/check_spec_failures.py:47
  - `--trace-infra-failure` / `TRACE_INFRA_FAILURE`: "Whether trace failure was infrastructure-related" — .github/scripts/check_spec_failures.py:52
  - `--completeness-infra-failure` / `COMPLETENESS_INFRA_FAILURE`: "Whether completeness failure was infrastructure-related" — .github/scripts/check_spec_failures.py:57
  - `--trace-findings` / `TRACE_FINDINGS`: "Findings text from traceability check" — .github/scripts/check_spec_failures.py:62
  - `--completeness-findings` / `COMPLETENESS_FINDINGS`: "Findings text from completeness check" — .github/scripts/check_spec_failures.py:67
- Environment variable `GITHUB_WORKSPACE` (defaults to relative repository root) (.github/scripts/check_spec_failures.py:20)

## Outputs — required
- Console messages and GitHub Actions workflow commands to stdout:
  - "::warning::Traceability check skipped due to infrastructure failure." — .github/scripts/check_spec_failures.py:91
  - "::warning::Completeness check skipped due to infrastructure failure." — .github/scripts/check_spec_failures.py:97
  - "::warning::Spec validation partially completed; one check did not run." — .github/scripts/check_spec_failures.py:110
  - "Spec validation passed" — .github/scripts/check_spec_failures.py:114
- Exit codes: 0 on pass or infra failure; 1 on spec validation failure (.github/scripts/check_spec_failures.py:87, 106, 112, 115)

## Invokes — required
- script scripts.ai_review_common — .github/scripts/check_spec_failures.py:26

## Invoked by — required
- workflow .github/workflows/ai-spec-validation.yml — .github/workflows/ai-spec-validation.yml:246
- script scripts/quality_gate/spec_external_signal_gate.py — scripts/quality_gate/spec_external_signal_gate.py:14
- doc .github/instructions/ci-scripts.instructions.md — .github/instructions/ci-scripts.instructions.md:43
- test tests/test_check_spec_failures.py — tests/test_check_spec_failures.py:25

## Concepts named — required, verbatim
- `spec validation verdicts` — .github/scripts/check_spec_failures.py:2 — defined here
- `TRACE_VERDICT` — .github/scripts/check_spec_failures.py:5 — defined here
- `COMPLETENESS_VERDICT` — .github/scripts/check_spec_failures.py:6 — defined here
- `spec_validation_failed` — .github/scripts/check_spec_failures.py:26 — used here

## Structure
none (python script; functions: _is_infra_failure, build_parser, main)

## Scripts — required if type is script or the skill ships scripts
- path: `.github/scripts/check_spec_failures.py`, language: Python 3, lines: 120
- documented invocation:
  - "run: python3 .github/scripts/check_spec_failures.py" — .github/workflows/ai-spec-validation.yml:246
- **executed:** yes
- actual command run: `python3 .github/scripts/check_spec_failures.py`
- abridged stdout:
  ```
  Spec validation passed
  ```
- **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in docstring:
  - "Check spec validation verdicts and fail the workflow if needed." — .github/scripts/check_spec_failures.py:2
  Actual exit paths in code:
  - `sys.exit(main())` — .github/scripts/check_spec_failures.py:119
  - `return 0` (.github/scripts/check_spec_failures.py:87) when both checks had infrastructure failures
  - `return 1` (.github/scripts/check_spec_failures.py:106) when spec validation failed
  - `return 0` (.github/scripts/check_spec_failures.py:112) when one check was skipped due to infra failure and the other passed
  - `return 0` (.github/scripts/check_spec_failures.py:115) when spec validation passed
- for validators/gates: can it exit non-zero? Yes, exits 1 when spec validation failed. Does it fail on default branch? Exits 0 when invoked without arguments or with passing verdicts.
- does output match what documentation claims? Yes.

## Defects — required
none

## Observations
- Pure Python standard library implementation, importing `spec_validation_failed` from `scripts.ai_review_common` which is also pure standard library. This satisfies the constraint in `.github/instructions/ci-scripts.instructions.md:43` requiring bare `python3` workflow steps to import only standard library modules.

## Context cost
3835 bytes plus `scripts/ai_review_common.py` (~3KB) = ~7KB (~1750 tokens).
