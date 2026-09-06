---
package: rjm
path: scripts/ci/check_codeql_sarif.py
type: script
bytes: 6889
unit: inv-rjm-200
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/check_codeql_sarif.py, sha256: e20a24e447806fac29fce1245d20683d67b25fda571e06fd6ee6c5d1ac359c13}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/check_codeql_sarif.py

## Purpose — required, verbatim
> "Grade CodeQL SARIF findings and gate the merge on critical ones." — scripts/ci/check_codeql_sarif.py:2

## Design intent — required
Aggregates and grades CodeQL static analysis findings across SARIF files from CI matrix jobs, generating a markdown summary for GitHub Actions job summaries and blocking merges on findings with CVSS security severity >= 9.0 (fixing a PowerShell type coercion bug where string comparison allowed CVSS 10.0 findings through).

## Phase — required
cross-phase

## Inputs — required
- Directory containing SARIF files via `--sarif-dir`: `scripts/ci/check_codeql_sarif.py:158`
- Environment variable `GITHUB_STEP_SUMMARY`: `scripts/ci/check_codeql_sarif.py:175`

## Outputs — required
- Markdown summary table appended to `GITHUB_STEP_SUMMARY`: `scripts/ci/check_codeql_sarif.py:178`
- Error annotations `::error::` to stdout on critical findings or unparseable files: `scripts/ci/check_codeql_sarif.py:168`, `scripts/ci/check_codeql_sarif.py:182`
- Summary lines printed to stdout: `scripts/ci/check_codeql_sarif.py:174`, `scripts/ci/check_codeql_sarif.py:189`

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
`ADR-006` — scripts/ci/check_codeql_sarif.py:4 — used here
`_CRITICAL_SEVERITY` — scripts/ci/check_codeql_sarif.py:32 — defined here
`Tally` — scripts/ci/check_codeql_sarif.py:36 — defined here
`_severity` — scripts/ci/check_codeql_sarif.py:45 — defined here
`_message` — scripts/ci/check_codeql_sarif.py:64 — defined here
`_dig` — scripts/ci/check_codeql_sarif.py:73 — defined here
`grade` — scripts/ci/check_codeql_sarif.py:82 — defined here
`render_summary` — scripts/ci/check_codeql_sarif.py:117 — defined here
`load_documents` — scripts/ci/check_codeql_sarif.py:135 — defined here
`find_sarif_files` — scripts/ci/check_codeql_sarif.py:149 — defined here
`main` — scripts/ci/check_codeql_sarif.py:156 — defined here
`GITHUB_STEP_SUMMARY` — scripts/ci/check_codeql_sarif.py:175 — used here

## Structure
(no headings, flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/check_codeql_sarif.py`, language: Python 3, lines: 197
- documented invocation: `"Grade CodeQL SARIF findings and gate the merge on critical ones." — scripts/ci/check_codeql_sarif.py:2`
- **executed:** yes
- actual command run: `python3 scripts/ci/check_codeql_sarif.py --sarif-dir .`, abridged stdout: `No SARIF files found - analysis may have failed`, **actual exit code**: 1
- documented exit codes: none verbatim in docstring; actual exit paths: `scripts/ci/check_codeql_sarif.py:192` (returns 0 when analysis complete and critical findings == 0), `scripts/ci/check_codeql_sarif.py:164` (returns 1 when no SARIF files found), `scripts/ci/check_codeql_sarif.py:169` (returns 1 when one or more SARIF files could not be parsed), `scripts/ci/check_codeql_sarif.py:185` (returns 1 when critical findings > 0), argparse exits 2 on missing `--sarif-dir` at line 160; dispatched via `sys.exit(main())` at `scripts/ci/check_codeql_sarif.py:196`
- for validators/gates: can exit non-zero (exits 1 if no SARIF files found, parse errors, or critical findings present); blocks merge when critical findings >= 9.0
- does the output match what the documentation claims? yes, grades SARIF files by numeric severity and blocks merges on critical security findings

## Defects — required
none

## Observations
Correctly parses `security-severity` as float, resolving issue #3926 where PowerShell string comparison `"10.0" -ge "9"` evaluated to false, allowing CVSS 10.0 findings through.

## Context cost
6889 bytes, approximately 1720 tokens.
