---
package: rjm
path: scripts/ci/smoke_report_result.py
type: script
bytes: 1590
unit: inv-rjm-207
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/smoke_report_result.py, sha256: 7340c37b7e14f5ba9224305891506ca6b76747ea90d98125c59b160f131015bb}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/smoke_report_result.py

## Purpose — required, verbatim
> "Report smoke matrix results (pass-through gate)." — scripts/ci/smoke_report_result.py:2

## Design intent — required
Functions as a concluding aggregation gate for the smoke matrix workflow, evaluating environment status flags from antecedent jobs (`check-paths`, `smoke matrix`, `typecheck/unit tests`) to allow safe skipping when no CLI files changed while ensuring any failure in required jobs triggers a non-zero workflow exit.

## Phase — required
cross-phase

## Inputs — required
- Environment variable `"CHECK_PATHS_RESULT"` — scripts/ci/smoke_report_result.py:26
- Environment variable `"CLI_CHANGED"` — scripts/ci/smoke_report_result.py:27
- Environment variable `"SMOKE_RESULT"` — scripts/ci/smoke_report_result.py:28
- Environment variable `"VERIFY_RESULT"` — scripts/ci/smoke_report_result.py:29

## Outputs — required
- Status verification log printed to stdout (`print("Smoke matrix passed on all 6 jobs; typecheck and unit tests passed.")` — scripts/ci/smoke_report_result.py:47)

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`cli-smoke.yml` — scripts/ci/smoke_report_result.py:5 — used here
`ADR-006` — scripts/ci/smoke_report_result.py:5 — used here
`ADR-035` — scripts/ci/smoke_report_result.py:13 — used here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/smoke_report_result.py`, language: Python 3, lines: 58
- documented invocation: `"Report smoke matrix results (pass-through gate)." — scripts/ci/smoke_report_result.py:2`
- **executed:** yes
- actual command run: `CHECK_PATHS_RESULT=success CLI_CHANGED=false python3 scripts/ci/smoke_report_result.py`, stdout: `No CLI files changed - smoke matrix skipped.`, **actual exit code**: 0
- documented exit codes: `"0 - all required jobs passed (or CLI unchanged)" — scripts/ci/smoke_report_result.py:14`, `"1 - one or more required jobs failed" — scripts/ci/smoke_report_result.py:15`; actual exit paths: `scripts/ci/smoke_report_result.py:33` (`return 1` if check_paths_result != success), `scripts/ci/smoke_report_result.py:37` (`return 0` if cli_changed != true), `scripts/ci/smoke_report_result.py:41` (`return 1` if smoke_result != success), `scripts/ci/smoke_report_result.py:45` (`return 1` if verify_result != success), `scripts/ci/smoke_report_result.py:48` (`return 0`), `scripts/ci/smoke_report_result.py:53` (`return run()`), `scripts/ci/smoke_report_result.py:57` (`sys.exit(main())`)
- for validators/gates: pass-through aggregation gate; fails with 1 if check-paths, smoke-matrix, or typecheck/unit tests failed; succeeds with 0 if all passed or CLI was untouched
- does the output match what the documentation claims? yes, evaluates status of all upstream matrix jobs

## Defects — required
none

## Observations
Serves as the single unified status check required for branch protection / ruleset verification for matrix jobs in `cli-smoke.yml`.

## Context cost
1590 bytes, approximately 398 tokens.
