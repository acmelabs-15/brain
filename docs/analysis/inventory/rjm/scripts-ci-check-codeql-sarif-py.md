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
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/check_codeql_sarif.py

## Purpose — required, verbatim
> "Grade CodeQL SARIF findings and gate the merge on critical ones." — scripts/ci/check_codeql_sarif.py:2

## Design intent — required
Evaluates CodeQL SARIF security findings across matrix analysis jobs and gates pull requests by blocking any merge containing critical security findings (severity score >= 9.0). Extracted from workflow YAML under ADR-006 (issue #3529), it fixes a defect in the PowerShell predecessor where string comparison evaluated `"10.0" -ge "9"` as false, allowing maximum CVSS 10.0 findings to pass (issue #3926). It also produces GitHub Actions step summaries with Markdown tables of findings.

## Phase — required
none

## Inputs — required
- CLI options: `--sarif-dir` — scripts/ci/check_codeql_sarif.py:158 (directory containing SARIF files)
- Environment variable: `GITHUB_STEP_SUMMARY` — scripts/ci/check_codeql_sarif.py:175

## Outputs — required
- Step summary: Markdown summary table written to `summary_path` — scripts/ci/check_codeql_sarif.py:177 (from `GITHUB_STEP_SUMMARY` — scripts/ci/check_codeql_sarif.py:175)
- Error annotations: `::error::` lines printed on unparseable SARIF or critical findings — scripts/ci/check_codeql_sarif.py:168, 181-184
- Console summary text: finding counts printed to stdout — scripts/ci/check_codeql_sarif.py:189-191

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/check_codeql_sarif.py:4 — used here
- `Tally` — scripts/ci/check_codeql_sarif.py:36 — defined here
- `grade` — scripts/ci/check_codeql_sarif.py:82 — defined here
- `render_summary` — scripts/ci/check_codeql_sarif.py:117 — defined here
- `load_documents` — scripts/ci/check_codeql_sarif.py:135 — defined here
- `find_sarif_files` — scripts/ci/check_codeql_sarif.py:149 — defined here
- `main` — scripts/ci/check_codeql_sarif.py:156 — defined here
- `GITHUB_STEP_SUMMARY` — scripts/ci/check_codeql_sarif.py:175 — used here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/check_codeql_sarif.py`, language: Python, lines: 197
- documented invocation:
  > "Grade CodeQL SARIF findings and gate the merge on critical ones." — scripts/ci/check_codeql_sarif.py:2
- executed: yes
- actual command run: `python3 sources/rjm/scripts/ci/check_codeql_sarif.py --help`
  abridged stdout: `usage: check_codeql_sarif.py [-h] --sarif-dir SARIF_DIR ...`
  actual exit code: 0
- documented exit codes:
  "critical finding is present." — scripts/ci/check_codeql_sarif.py:9
  vs. actual exit paths in code:
  `return 1` — scripts/ci/check_codeql_sarif.py:164 (no SARIF files found)
  `return 1` — scripts/ci/check_codeql_sarif.py:169 (SARIF parse error)
  `return 1` — scripts/ci/check_codeql_sarif.py:185 (critical findings detected)
  `return 0` — scripts/ci/check_codeql_sarif.py:192 (analysis complete, no critical findings)
  `sys.exit(main())` — scripts/ci/check_codeql_sarif.py:196
- for validators/gates: can it exit non-zero? yes (exits 1 on missing directory/files, JSON parse failures, or critical findings >= 9.0). Does it fail on default branch? Exits 1 when pointed to an empty directory (`--sarif-dir /tmp`).
- does the output match what the documentation claims? yes (counts findings, formats summary, blocks on critical findings).

## Defects — required
- orphan — scripts/ci/check_codeql_sarif.py:1 — Not invoked by any in-scope lifecycle script or agent; only referenced in tests and out-of-scope `.github/workflows/codeql-analysis.yml`.

## Observations
- Highlights a subtle bug in PowerShell string-coercion semantics (`"10.0" -ge "9"` evaluated as false) that allowed maximum CVSS 10.0 vulnerabilities to merge unnoticed prior to issue #3926.
- Safely handles malformed SARIF structures by validating types at every nesting level using helper `_dig`.

## Context cost
6889 bytes (~1700 tokens). Uses Python standard library only.
