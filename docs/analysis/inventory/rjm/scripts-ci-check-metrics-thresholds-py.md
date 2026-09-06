---
package: rjm
path: scripts/ci/check_metrics_thresholds.py
type: script
bytes: 3205
unit: inv-rjm-200
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/check_metrics_thresholds.py, sha256: ef380a59e6b9a2283cc043c6ffff4d8589e2a34b09b14780b2f4009d767e08ae}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/check_metrics_thresholds.py

## Purpose — required, verbatim
> "Check agent metric thresholds and write outputs for the workflow." — scripts/ci/check_metrics_thresholds.py:2

## Design intent — required
Runs metric collection (`collect_metrics.py --output json`) and evaluates agent coverage against a 50% target and infrastructure review rate against a 100% target, surfacing warnings and exporting threshold results (`coverage`, `infra_rate`, `alert`) to `GITHUB_OUTPUT` for downstream CI jobs.

## Phase — required
cross-phase

## Inputs — required
- Output of `_COLLECT_SCRIPT` (.claude/skills/metrics/collect_metrics.py): `scripts/ci/check_metrics_thresholds.py:27`
- Environment variable `GITHUB_OUTPUT`: `scripts/ci/check_metrics_thresholds.py:94`

## Outputs — required
- Warning annotations `::warning::` to stdout: `scripts/ci/check_metrics_thresholds.py:59`, `scripts/ci/check_metrics_thresholds.py:63`
- Environment variables `coverage`, `infra_rate`, `alert` appended to `GITHUB_OUTPUT`: `scripts/ci/check_metrics_thresholds.py:80-82`
- Error message to stderr on collection or JSON parse failure: `scripts/ci/check_metrics_thresholds.py:89`

## Invokes — required
- script .claude/skills/metrics/collect_metrics.py — scripts/ci/check_metrics_thresholds.py:27

## Invoked by — required
orphan

## Concepts named — required, verbatim
`ADR-035` — scripts/ci/check_metrics_thresholds.py:9 — used here
`EXIT_OK` — scripts/ci/check_metrics_thresholds.py:23 — defined here
`EXIT_ERROR` — scripts/ci/check_metrics_thresholds.py:24 — defined here
`EXIT_USAGE` — scripts/ci/check_metrics_thresholds.py:25 — defined here
`_COLLECT_SCRIPT` — scripts/ci/check_metrics_thresholds.py:27 — defined here
`_COVERAGE_TARGET` — scripts/ci/check_metrics_thresholds.py:28 — defined here
`_INFRA_RATE_TARGET` — scripts/ci/check_metrics_thresholds.py:29 — defined here
`collect_metrics_json` — scripts/ci/check_metrics_thresholds.py:32 — defined here
`check_thresholds` — scripts/ci/check_metrics_thresholds.py:47 — defined here
`write_github_output` — scripts/ci/check_metrics_thresholds.py:72 — defined here
`main` — scripts/ci/check_metrics_thresholds.py:85 — defined here
`GITHUB_OUTPUT` — scripts/ci/check_metrics_thresholds.py:94 — used here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/check_metrics_thresholds.py`, language: Python 3, lines: 103
- documented invocation: `"Check agent metric thresholds and write outputs for the workflow." — scripts/ci/check_metrics_thresholds.py:2`
- **executed:** yes
- actual command run: `python3 scripts/ci/check_metrics_thresholds.py`, abridged stdout: `::warning::Agent coverage (13.5%) is below target (50.0%)\n::warning::Infrastructure review rate (0.0%) is below target (100.0%)`, **actual exit code**: 0
- documented exit codes: `"0  - Thresholds checked; outputs written when GITHUB_OUTPUT is set" — scripts/ci/check_metrics_thresholds.py:10`, `"1  - collect_metrics.py failed or output unparseable" — scripts/ci/check_metrics_thresholds.py:11`, `"2  - Usage error" — scripts/ci/check_metrics_thresholds.py:12` vs. actual exit paths: `scripts/ci/check_metrics_thresholds.py:98` (`return EXIT_OK`, 0), `scripts/ci/check_metrics_thresholds.py:90` (`return EXIT_ERROR`, 1); `EXIT_USAGE` (2) is defined at line 25 but never returned by `main`; dispatched via `sys.exit(main())` at `scripts/ci/check_metrics_thresholds.py:102`
- for validators/gates: can exit non-zero (exits 1 on collection/parsing failure); however, threshold violations do not cause a non-zero exit (they only set alert=true and emit warnings, returning 0)
- does the output match what the documentation claims? yes, evaluates coverage and infra rate against targets and writes to GITHUB_OUTPUT

## Defects — required
- `unfailable-gate` · `scripts/ci/check_metrics_thresholds.py:58-69` · Threshold breaches do not fail the step; the script emits warnings, sets alert=true, and always exits 0.
- `exit-code-mismatch` · `scripts/ci/check_metrics_thresholds.py:12` · Docstring documents exit code 2 for usage error, but main does not process arguments and never returns EXIT_USAGE.

## Observations
Requires running from repository root because `_COLLECT_SCRIPT = ".claude/skills/metrics/collect_metrics.py"` is hardcoded as a relative path without resolving against repo root.

## Context cost
3205 bytes, approximately 800 tokens.
