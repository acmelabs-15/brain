---
package: rjm
path: scripts/ci/spec_external_signal_wrapper.py
type: script
bytes: 3521
unit: inv-rjm-207
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/spec_external_signal_wrapper.py, sha256: b5256d2b0f4034320171fecba5e5d4915835033974ca2fb812e2b89da57c5d15}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/spec_external_signal_wrapper.py

## Purpose — required, verbatim
> "Wrap spec_external_signal_gate.py and surface output in the step summary." — scripts/ci/spec_external_signal_wrapper.py:2

## Design intent — required
Executes `spec_external_signal_gate.py` with PR body context (falling back to GitHub API lookup via `gh` CLI if needed), captures and tees output to stdout and temporary JSON artifacts, formats and appends the JSON results to `GITHUB_STEP_SUMMARY`, and forwards the gate's exit code per ADR-006 and ADR-035.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"PR_BODY"` — scripts/ci/spec_external_signal_wrapper.py:58
- Environment variable `"PR_NUMBER"` — scripts/ci/spec_external_signal_wrapper.py:59
- Environment variable `"GITHUB_REPOSITORY"` — scripts/ci/spec_external_signal_wrapper.py:60
- Environment variable `"GITHUB_RUN_ID"` — scripts/ci/spec_external_signal_wrapper.py:61
- Environment variable `"GITHUB_RUN_ATTEMPT"` — scripts/ci/spec_external_signal_wrapper.py:62
- Environment variable `"RUNNER_TEMP"` — scripts/ci/spec_external_signal_wrapper.py:63
- Environment variable `"GITHUB_STEP_SUMMARY"` — scripts/ci/spec_external_signal_wrapper.py:64

## Outputs — required
- Step summary appended to GITHUB_STEP_SUMMARY (`fh.write("### External-signal gate (observe)\n\n```json\n")` — scripts/ci/spec_external_signal_wrapper.py:101)
- Gate diagnostic JSON printed to standard output

## Invokes — required
- script scripts/quality_gate/spec_external_signal_gate.py — scripts/ci/spec_external_signal_wrapper.py:78

## Invoked by — required
orphan

## Concepts named — required, verbatim
`spec_external_signal_gate.py` — scripts/ci/spec_external_signal_wrapper.py:2 — used here
`ai-spec-validation.yml` — scripts/ci/spec_external_signal_wrapper.py:5 — used here
`ADR-006` — scripts/ci/spec_external_signal_wrapper.py:5 — used here
`ADR-035` — scripts/ci/spec_external_signal_wrapper.py:18 — used here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/spec_external_signal_wrapper.py`, language: Python 3, lines: 119
- documented invocation: `"Wrap spec_external_signal_gate.py and surface output in the step summary." — scripts/ci/spec_external_signal_wrapper.py:2`
- **executed:** yes
- actual command run: `PR_BODY="test spec" RUNNER_TEMP=/tmp python3 scripts/ci/spec_external_signal_wrapper.py`, stdout: `{"verdict": "NEEDS_REVIEW", "reason": "closed-loop:external-signal-inconclusive"`, **actual exit code**: 1
- documented exit codes: `"0   - gate passed or was skipped" — scripts/ci/spec_external_signal_wrapper.py:19`, `"N>0 - gate returned non-zero (signals observation failure)" — scripts/ci/spec_external_signal_wrapper.py:20`; actual exit paths: `scripts/ci/spec_external_signal_wrapper.py:109` (`return gate_rc`), `scripts/ci/spec_external_signal_wrapper.py:114` (`return run()`), `scripts/ci/spec_external_signal_wrapper.py:118` (`sys.exit(main())`)
- for validators/gates: quality gate runner and reporter; passes along the exit code of `spec_external_signal_gate.py` (0 for pass/skip, >0 for observation failure) while guaranteeing step summary visibility
- does the output match what the documentation claims? yes, runs external signal gate, prints output, and appends JSON to summary

## Defects — required
none

## Observations
Provides a fallback mechanism using GitHub CLI `gh pr view` when `PR_BODY` environment variable is not directly provided by workflow triggers. Cleans up temporary body and summary files in a finally-equivalent flow before returning.

## Context cost
9270 bytes (3521 script + 5749 spec_external_signal_gate), approximately 2318 tokens.
