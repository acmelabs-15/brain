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
verified: 2026-09-05 quote-check+coverage
---

# scripts/quality_gate/check_critical_failures.py

## Purpose — required, verbatim
> "Decide whether the AI PR quality gate blocks the merge." — scripts/quality_gate/check_critical_failures.py:2

## Design intent — required
Acts as the authoritative, blocking merge gate for AI code reviews in CI. Extracted from `.github/workflows/ai-pr-quality-gate.yml` per ADR-006, it checks ten reviewer agent verdicts and the aggregate final verdict. Crucially, it enforces a stricter policy than canonical verdict rules by refusing merge on `UNKNOWN` or `DID_NOT_RUN` verdicts, ensuring that infrastructure dropouts, unparseable outputs, or crashed agent reviewers cannot slip past as a silent pass.

## Phase — required
rjm:build

## Inputs — required
- Environment variable `FINAL_VERDICT`: "FINAL_VERDICT" — scripts/quality_gate/check_critical_failures.py:27
- Environment variable `SECURITY_VERDICT`: "SECURITY_VERDICT" — scripts/quality_gate/check_critical_failures.py:28
- Environment variable `QA_VERDICT`: "QA_VERDICT" — scripts/quality_gate/check_critical_failures.py:28
- Environment variable `ANALYST_VERDICT`: "ANALYST_VERDICT" — scripts/quality_gate/check_critical_failures.py:28
- Environment variable `ARCHITECT_VERDICT`: "ARCHITECT_VERDICT" — scripts/quality_gate/check_critical_failures.py:28
- Environment variable `DEVOPS_VERDICT`: "DEVOPS_VERDICT" — scripts/quality_gate/check_critical_failures.py:29
- Environment variable `ROADMAP_VERDICT`: "ROADMAP_VERDICT" — scripts/quality_gate/check_critical_failures.py:29
- Environment variable `RELIABILITY_VERDICT`: "RELIABILITY_VERDICT" — scripts/quality_gate/check_critical_failures.py:29
- Environment variable `OBSERVABILITY_VERDICT`: "OBSERVABILITY_VERDICT" — scripts/quality_gate/check_critical_failures.py:30
- Environment variable `AGENT_SAFETY_VERDICT`: "AGENT_SAFETY_VERDICT" — scripts/quality_gate/check_critical_failures.py:30
- Environment variable `DECISION_RIGOR_VERDICT`: "DECISION_RIGOR_VERDICT" — scripts/quality_gate/check_critical_failures.py:30

## Outputs — required
- GitHub Actions error annotations `::error::` for missing verdicts: "::error::{name}: No verdict received from aggregate step" — scripts/quality_gate/check_critical_failures.py:128
- GitHub Actions error annotations `::error::` for blocking verdicts: "::error::{entry}" — scripts/quality_gate/check_critical_failures.py:134
- Standard output success message: "✅ AI Quality Gate passed with verdict: {final_verdict}" — scripts/quality_gate/check_critical_failures.py:138
- Process exit code (0 on pass, 1 on failure)

## Invokes — required
- script path_utils — scripts/quality_gate/check_critical_failures.py:45

## Invoked by — required
- script scripts/quality_gate/check_critical_failures.py — scripts/quality_gate/external_signal_gate.py:11

## Concepts named — required, verbatim
- `ADR-006` — scripts/quality_gate/check_critical_failures.py:5 — used here
- `FAIL_VERDICTS` — scripts/quality_gate/check_critical_failures.py:18 — used here
- `UNKNOWN` — scripts/quality_gate/check_critical_failures.py:21 — used here
- `DID_NOT_RUN` — scripts/quality_gate/check_critical_failures.py:24 — used here
- `ADR-035` — scripts/quality_gate/check_critical_failures.py:32 — used here
- `BLOCKING_VERDICTS` — scripts/quality_gate/check_critical_failures.py:55 — defined here
- `collect_verdicts` — scripts/quality_gate/check_critical_failures.py:73 — defined here
- `find_missing` — scripts/quality_gate/check_critical_failures.py:79 — defined here
- `find_blocking` — scripts/quality_gate/check_critical_failures.py:85 — defined here
- `main` — scripts/quality_gate/check_critical_failures.py:117 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/quality_gate/check_critical_failures.py`, language: Python 3, lines: 144
- documented invocation: none (invoked in CI workflow step via environment variables)
- **executed:** yes
- actual command run: `FINAL_VERDICT=PASS SECURITY_VERDICT=PASS QA_VERDICT=PASS ANALYST_VERDICT=PASS ARCHITECT_VERDICT=PASS DEVOPS_VERDICT=PASS ROADMAP_VERDICT=PASS RELIABILITY_VERDICT=PASS OBSERVABILITY_VERDICT=PASS AGENT_SAFETY_VERDICT=PASS DECISION_RIGOR_VERDICT=PASS python3 sources/rjm/scripts/quality_gate/check_critical_failures.py`
  abridged stdout: `✅ AI Quality Gate passed with verdict: PASS`
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes:
  - "0 - gate passed" — scripts/quality_gate/check_critical_failures.py:33
  - "1 - gate failed (missing verdicts or a blocking final verdict)" — scripts/quality_gate/check_critical_failures.py:34
  Actual exit paths in code:
  - `return 1` (missing verdicts) — scripts/quality_gate/check_critical_failures.py:130
  - `return 1` (blocking final verdict) — scripts/quality_gate/check_critical_failures.py:136
  - `return 0` (gate passed) — scripts/quality_gate/check_critical_failures.py:139
  - `sys.exit(main())` — scripts/quality_gate/check_critical_failures.py:143
- for validators/gates: can it exit non-zero? yes (exits 1 on missing or blocking verdicts). Does it fail on the source repo's own default branch? exits 1 when run without environment variables set.
- does the output match what the documentation claims? yes, accurately emits annotations and exits according to ADR-035 contract.

## Defects — required
none

## Observations
Implements intentional policy tightening over standard `FAIL_VERDICTS` by treating `UNKNOWN` (REQ-008-05, issue #1934) and `DID_NOT_RUN` (issue #2818) as blocking verdicts. Formats missing and failed verdicts with GitHub Actions workflow command syntax (`::error::`) so specific failing agent reviews immediately pin to PR summaries.

## Context cost
4873 bytes (~1218 tokens).
