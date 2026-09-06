---
package: rjm
path: scripts/ci/verify_codeql_artifacts.py
type: script
bytes: 2139
unit: inv-rjm-210
in_scope_via: README.md
aliases: []
memo_inputs:
  - {path: scripts/ci/verify_codeql_artifacts.py, sha256: abda124f6dbe8089fa9e0659ed6070f298394457ab3a81a9543008035bec8e46}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/verify_codeql_artifacts.py

## Purpose — required, verbatim
> "Verify CodeQL scan artifacts exist after a scan run." — scripts/ci/verify_codeql_artifacts.py:2

## Design intent — required
Replaces an inline shell verification step in `.github/workflows/test-codeql-integration.yml` under ADR-006 and ADR-035 (standard exit codes). After CodeQL completes analysis for a specified language, this validator confirms that both the CodeQL database directory (`.codeql/db/<language>`) and the SARIF output file (`.codeql/results/<language>.sarif`) exist, and parses the SARIF JSON to verify valid structure and report findings count. Without it, CI workflows could silently proceed when CodeQL scans crash or fail to generate outputs, or rely on brittle inline shell scripts that lack JSON validation.

## Phase — required
none

## Inputs — required
Command-line arguments parsed by `argparse`:
- `--language`: CodeQL language name (`scripts/ci/verify_codeql_artifacts.py:56`)
- `--db-base`: base path for database directory, default `.codeql/db` (`scripts/ci/verify_codeql_artifacts.py:57`)
- `--results-base`: base path for results directory, default `.codeql/results` (`scripts/ci/verify_codeql_artifacts.py:58`)
Files read:
- Database directory at `<db-base>/<language>` (`scripts/ci/verify_codeql_artifacts.py:34`)
- SARIF JSON file at `<results-base>/<language>.sarif` (`scripts/ci/verify_codeql_artifacts.py:40`)

## Outputs — required
- Standard output logs reporting database and SARIF artifact presence and finding counts, or error messages
- Exit codes: 0 on success, 1 on missing artifacts or unparseable SARIF, 2 on usage error (ADR-035)
- Files produced: none

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `CodeQL` — scripts/ci/verify_codeql_artifacts.py:2 — used here
- `database directory and SARIF output file` — scripts/ci/verify_codeql_artifacts.py:4 — used here
- `test-codeql-integration.yml` — scripts/ci/verify_codeql_artifacts.py:5 — used here
- `EXIT CODES (ADR-035):` — scripts/ci/verify_codeql_artifacts.py:8 — used here
- `0 - All artifacts present` — scripts/ci/verify_codeql_artifacts.py:9 — defined here
- `1 - One or more artifacts missing` — scripts/ci/verify_codeql_artifacts.py:10 — defined here
- `2 - Usage error` — scripts/ci/verify_codeql_artifacts.py:11 — defined here
- `EXIT_OK = 0` — scripts/ci/verify_codeql_artifacts.py:21 — defined here
- `EXIT_MISSING = 1` — scripts/ci/verify_codeql_artifacts.py:22 — defined here
- `EXIT_USAGE = 2` — scripts/ci/verify_codeql_artifacts.py:23 — defined here
- `check_artifacts` — scripts/ci/verify_codeql_artifacts.py:26 — defined here
- `build_parser` — scripts/ci/verify_codeql_artifacts.py:54 — defined here

## Structure
- # Verify CodeQL scan artifacts exist after a scan run.
- # Exit code constants (EXIT_OK, EXIT_MISSING, EXIT_USAGE)
- # Artifact checking logic (check_artifacts)
- # Argument parser construction (build_parser)
- # Main entry point (main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/verify_codeql_artifacts.py`, Python 3, 72 lines
- documented invocation:
  "Verify CodeQL scan artifacts exist after a scan run." — scripts/ci/verify_codeql_artifacts.py:2
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 scripts/ci/verify_codeql_artifacts.py --language python`
  - Abridged stdout:
    ```
    ERROR: Database not created: .codeql/db/python
    ERROR: SARIF not created: .codeql/results/python.sarif
    ```
  - actual exit code: 1
  - Command 2 (happy path test with synthetic artifacts):
    - `python3 scripts/ci/verify_codeql_artifacts.py --language python --db-base /tmp/test-db --results-base /tmp/test-results`
    - actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented: "0 - All artifacts present" — scripts/ci/verify_codeql_artifacts.py:9
  - Documented: "1 - One or more artifacts missing" — scripts/ci/verify_codeql_artifacts.py:10
  - Documented: "2 - Usage error" — scripts/ci/verify_codeql_artifacts.py:11
  - Actual exit paths:
    - `return EXIT_MISSING if errors else EXIT_OK` — scripts/ci/verify_codeql_artifacts.py:67
    - `sys.exit(main())` — scripts/ci/verify_codeql_artifacts.py:71
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Yes, exits non-zero (exit code 1 if database or SARIF is missing, or SARIF is unparseable; exit code 2 on CLI usage error). On the source repo's default branch, running with `--language python` exits 1 because `.codeql/db/python` and `.codeql/results/python.sarif` do not exist.
- does output match what documentation claims:
  Yes, correctly verifies artifact presence and validates SARIF JSON syntax.

## Defects — required
- `missing-path` · scripts/ci/verify_codeql_artifacts.py:28-29 · Default paths `.codeql/db` and `.codeql/results` are not created by the script and do not exist in repository clones prior to running CodeQL.
- `orphan` · scripts/ci/verify_codeql_artifacts.py:1 · Script is invoked only from GitHub Actions workflow `.github/workflows/test-codeql-integration.yml:115` and tests; no caller in the in-scope manifest graph.

## Observations
- Compact utility conforming to ADR-035 standardized exit codes.
- Validates that SARIF output is parseable JSON and contains results (`data["runs"][0]["results"]`), catching truncated or malformed scan outputs.

## Context cost
2139 bytes, 72 lines. Loads no in-scope repository modules. Approximately 600 tokens.
