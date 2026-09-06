---
package: rjm
path: scripts/ci/parse_memory_health_results.py
type: script
bytes: 6055
unit: inv-rjm-206
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/parse_memory_health_results.py, sha256: 8aabd1dc6bcc49af67108b9fcab14c8d5e3e147a4f6efa7e93eb02c41a516963}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/parse_memory_health_results.py

## Purpose — required, verbatim
> "Parse memory health report results into GitHub Actions step outputs." — scripts/ci/parse_memory_health_results.py:2

## Design intent — required
Extracts memory health report JSON emitted by `memory_enhancement health --json` into GitHub Actions step outputs for `.github/workflows/memory-health.yml` under ADR-006 (no logic in workflow YAML). Ensures that missing, empty, or unparseable health reports are surfaced as CI errors rather than quietly defaulting to a green pass (the defect uncovered in issue #3971 and sibling issue #2808). Also validates that citation counts add up to `total_citations` before exposing metrics.

## Phase — required
cross-phase

## Inputs — required
- `--results`: "Path to the memory health JSON report." — scripts/ci/parse_memory_health_results.py:134
- JSON payload fields:
  - "total_memories" — scripts/ci/parse_memory_health_results.py:33
  - "total_citations" — scripts/ci/parse_memory_health_results.py:34
  - "valid_citations" — scripts/ci/parse_memory_health_results.py:35
  - "stale_citations" — scripts/ci/parse_memory_health_results.py:36
  - "broken_citations" — scripts/ci/parse_memory_health_results.py:37
  - "unverified_citations" — scripts/ci/parse_memory_health_results.py:38
  - "stale_memories" — scripts/ci/parse_memory_health_results.py:42
  - "recommendations" — scripts/ci/parse_memory_health_results.py:42
  - "health_score" — scripts/ci/parse_memory_health_results.py:62
- Environment variable: `GITHUB_OUTPUT`

## Outputs — required
- Key-value pairs written to `GITHUB_OUTPUT` or stdout:
  - "total_memories" — scripts/ci/parse_memory_health_results.py:33
  - "total_citations" — scripts/ci/parse_memory_health_results.py:34
  - "valid_citations" — scripts/ci/parse_memory_health_results.py:35
  - "stale_citations" — scripts/ci/parse_memory_health_results.py:36
  - "broken_citations" — scripts/ci/parse_memory_health_results.py:37
  - "unverified_citations" — scripts/ci/parse_memory_health_results.py:38
  - "stale_memories" — scripts/ci/parse_memory_health_results.py:42
  - "recommendations" — scripts/ci/parse_memory_health_results.py:42
  - "health_score" — scripts/ci/parse_memory_health_results.py:85
  - "has_issues" — scripts/ci/parse_memory_health_results.py:114

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/parse_memory_health_results.py:4 — used here
- `COUNT_FIELDS` — scripts/ci/parse_memory_health_results.py:32 — defined here
- `LENGTH_FIELDS` — scripts/ci/parse_memory_health_results.py:42 — defined here
- `HealthReport` — scripts/ci/parse_memory_health_results.py:78 — used here
- `has_issues` — scripts/ci/parse_memory_health_results.py:19 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/parse_memory_health_results.py`, language: Python, lines: 167
- documented invocation:
  "Path to the memory health JSON report." — scripts/ci/parse_memory_health_results.py:134
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 sources/rjm/scripts/ci/parse_memory_health_results.py --help`
    stdout: `usage: parse_memory_health_results.py [-h] [--results RESULTS]`
    actual exit code: 0
  - Command: `python3 sources/rjm/scripts/ci/parse_memory_health_results.py`
    stdout: `::error::health-report.json is missing or empty, so the health command crashed. Refusing to report a passing health check.`
    actual exit code: 1
- documented exit codes vs actual exit paths:
  - Documented: none explicitly enumerated in docstring (implicit: 0 on success, 1 on error)
  - Actual exit paths:
    - `return 1` on missing/empty results file — scripts/ci/parse_memory_health_results.py:145
    - `return 1` on JSON decode or OS error — scripts/ci/parse_memory_health_results.py:151
    - `return 1` on schema validation failure — scripts/ci/parse_memory_health_results.py:159
    - `return 0` on success — scripts/ci/parse_memory_health_results.py:162
    - `sys.exit(main())` — scripts/ci/parse_memory_health_results.py:166
- for validators/gates: can it exit non-zero?
  Yes, exits 1 on missing, empty, or unparseable reports, or schema/citation-sum violations.
  Does it fail on the source repo's own default branch?
  When run without an existing `health-report.json` file, exits 1.
- does the output match what the documentation claims?
  Yes, parses health report JSON and outputs formatted step outputs.

## Defects — required
- orphan — scripts/ci/parse_memory_health_results.py:1 — not referenced by any in-scope file (only referenced by out-of-scope .github/workflows/memory-health.yml).

## Observations
Defensively verifies that citation counts sum to total_citations (lines 93-103) before exporting outputs.

## Context cost
6055 bytes, 167 lines. Approximate tokens: ~1400.
