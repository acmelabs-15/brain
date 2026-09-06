---
package: rjm
path: scripts/quality_gate/check_critical_failures.py
type: script
bytes: 4873
unit: inv-rjm-256
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/quality_gate/check_critical_failures.py, sha256: 0a1301cd214490a3495f8a8e79ee17029c7c35087d15be762675a82d5cb2e3a8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/quality_gate/check_critical_failures.py

## Purpose — required, verbatim
> "Decide whether the AI PR quality gate blocks the merge." — scripts/quality_gate/check_critical_failures.py:2

## Design intent — required
Acts as the authoritative, deterministic quality gate evaluating the final aggregated review verdict and individual agent review verdicts passed via environment variables. Extracted from the inline `Check for Critical Failures` step in `.github/workflows/ai-pr-quality-gate.yml` under ADR-006, it enforces strict gating rules: failing if any agent verdict is missing (null/whitespace) or if the final verdict is blocking (`CRITICAL_FAIL`, `REJECTED`, `FAIL`, `NEEDS_REVIEW`, `NON_COMPLIANT`, `UNKNOWN`, `DID_NOT_RUN`), outputting GitHub Action workflow error annotations (`::error::`).

## Phase — required
rjm:review

## Inputs — required
- "FINAL_VERDICT" — scripts/quality_gate/check_critical_failures.py:27
- "SECURITY_VERDICT, QA_VERDICT, ANALYST_VERDICT, ARCHITECT_VERDICT," — scripts/quality_gate/check_critical_failures.py:28
- "DEVOPS_VERDICT, ROADMAP_VERDICT, RELIABILITY_VERDICT," — scripts/quality_gate/check_critical_failures.py:29
- "OBSERVABILITY_VERDICT, AGENT_SAFETY_VERDICT, DECISION_RIGOR_VERDICT" — scripts/quality_gate/check_critical_failures.py:30

## Outputs — required
- "::error::{name}: No verdict received from aggregate step" — scripts/quality_gate/check_critical_failures.py:128
- "::error::{entry}" — scripts/quality_gate/check_critical_failures.py:134
- "print(f\"✅ AI Quality Gate passed with verdict: {final_verdict}\")" — scripts/quality_gate/check_critical_failures.py:138
- "0 - gate passed" — scripts/quality_gate/check_critical_failures.py:33

## Invokes — required
- script path_utils — scripts/quality_gate/check_critical_failures.py:45

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-006` — scripts/quality_gate/check_critical_failures.py:5 — used here
- `ADR-035` — scripts/quality_gate/check_critical_failures.py:32 — used here
- `REQ-008-05` — scripts/quality_gate/check_critical_failures.py:22 — used here
- `BLOCKING_VERDICTS` — scripts/quality_gate/check_critical_failures.py:55 — defined here
- `FAIL_VERDICTS` — scripts/quality_gate/check_critical_failures.py:18 — used here
- `UNKNOWN` — scripts/quality_gate/check_critical_failures.py:21 — used here
- `DID_NOT_RUN` — scripts/quality_gate/check_critical_failures.py:22 — used here
- `CRITICAL_FAIL` — scripts/quality_gate/check_critical_failures.py:19 — used here
- `REJECTED` — scripts/quality_gate/check_critical_failures.py:19 — used here
- `NEEDS_REVIEW` — scripts/quality_gate/check_critical_failures.py:19 — used here
- `NON_COMPLIANT` — scripts/quality_gate/check_critical_failures.py:19 — used here

## Structure
- def collect_verdicts(env: dict[str, str]) -> list[tuple[str, str]]: — scripts/quality_gate/check_critical_failures.py:73
- def find_missing(verdicts: list[tuple[str, str]]) -> list[str]: — scripts/quality_gate/check_critical_failures.py:79
- def find_blocking(verdicts: list[tuple[str, str]]) -> list[str]: — scripts/quality_gate/check_critical_failures.py:85
- def _report_missing(missing: list[str]) -> None: — scripts/quality_gate/check_critical_failures.py:95
- def _report_blocking(failed: list[str]) -> None: — scripts/quality_gate/check_critical_failures.py:106
- def main(argv: list[str] | None = None) -> int: — scripts/quality_gate/check_critical_failures.py:117

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/quality_gate/check_critical_failures.py`
- language: Python
- lines: 144
- documented invocation: `"scripts/quality_gate/check_critical_failures.py" — scripts/quality_gate/external_signal_gate.py:11`
- **executed:** yes
- actual command run: `FINAL_VERDICT=PASS SECURITY_VERDICT=PASS QA_VERDICT=PASS ANALYST_VERDICT=PASS ARCHITECT_VERDICT=PASS DEVOPS_VERDICT=PASS ROADMAP_VERDICT=PASS RELIABILITY_VERDICT=PASS OBSERVABILITY_VERDICT=PASS AGENT_SAFETY_VERDICT=PASS DECISION_RIGOR_VERDICT=PASS python3 sources/rjm/scripts/quality_gate/check_critical_failures.py`
- abridged stdout: `✅ AI Quality Gate passed with verdict: PASS`
- **actual exit code**: 0
- documented exit codes: `"0 - gate passed" — scripts/quality_gate/check_critical_failures.py:33` vs. actual exit paths: line 139 returns 0; `"1 - gate failed (missing verdicts or a blocking final verdict)" — scripts/quality_gate/check_critical_failures.py:34` vs. actual exit paths: lines 130 and 136 return 1. Exits via `sys.exit(main())` at line 143.
- for validators/gates: can exit non-zero (exits 1 on missing agent verdicts or blocking verdicts). When executed with empty environment, exits 1 with missing verdict errors.
- does the output match what the documentation claims? yes, emits expected `::error::` GitHub Actions annotations and returns exit code 0 or 1.

## Defects — required
- `orphan` · scripts/quality_gate/check_critical_failures.py:4 · Extracted from CI workflow `.github/workflows/ai-pr-quality-gate.yml`; has no calling references among in-scope lifecycle scripts or commands.

## Observations
- Gate is intentionally stricter than `scripts/ai_review_common/verdict.py:FAIL_VERDICTS` by treating `UNKNOWN` and `DID_NOT_RUN` as blocking per REQ-008-05 (Issue #1934 and Issue #2818) to prevent unparseable or skipped reviews from passing silently.
- Maps ten review agents with emoji display names: Security, QA, Analyst, Architect, DevOps, Roadmap, Reliability, Observability, Agent Safety, Decision Rigor.

## Context cost
4873 bytes, approximately 1200 tokens.
