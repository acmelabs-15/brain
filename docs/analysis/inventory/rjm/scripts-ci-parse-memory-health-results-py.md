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
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/parse_memory_health_results.py

## Purpose — required, verbatim
> "Parse memory health report results into GitHub Actions step outputs." — scripts/ci/parse_memory_health_results.py:2

## Design intent — required
Parses and validates the JSON output emitted by `memory_enhancement health --json` in CI, transforming flat health metrics (counts of memories and citations, stale memory counts, recommendation counts, and overall health score) into GitHub Actions step outputs. Replaces inline YAML logic under ADR-006, enforces report invariants (such as verifying that individual citation status counts sum to total citations), and fails closed if the report is missing or empty so that upstream crashes cannot masquerade as passing health checks.

## Phase — required
none

## Inputs — required
- `--results`: Path to the memory health JSON report, defaults to `health-report.json` — scripts/ci/parse_memory_health_results.py:133
- `GITHUB_OUTPUT` environment variable specifying the destination path for step output lines — scripts/ci/parse_memory_health_results.py:161

## Outputs — required
- GitHub Actions step output key-value lines written to `$GITHUB_OUTPUT` or printed to stdout: `total_memories`, `total_citations`, `valid_citations`, `stale_citations`, `broken_citations`, `unverified_citations`, `stale_memories`, `recommendations`, `health_score`, `has_issues` — scripts/ci/parse_memory_health_results.py:105-115, 161

## Invokes — required
none

## Invoked by — required
- `.github/workflows/memory-health.yml` (CI workflow, excluded from lifecycle analysis)

## Concepts named — required, verbatim
- `ADR-006` — scripts/ci/parse_memory_health_results.py:4 — used here
- `health_score` — scripts/ci/parse_memory_health_results.py:62 — defined here
- `HealthReport` — scripts/ci/parse_memory_health_results.py:78 — used here
- `has_issues` — scripts/ci/parse_memory_health_results.py:19 — defined here

## Structure
- module docstring — scripts/ci/parse_memory_health_results.py:2-21
- COUNT_FIELDS — scripts/ci/parse_memory_health_results.py:32
- LENGTH_FIELDS — scripts/ci/parse_memory_health_results.py:42
- _coerce_count — scripts/ci/parse_memory_health_results.py:45
- _coerce_length — scripts/ci/parse_memory_health_results.py:54
- _render_score — scripts/ci/parse_memory_health_results.py:61
- parse_report — scripts/ci/parse_memory_health_results.py:70
- _write_outputs — scripts/ci/parse_memory_health_results.py:118
- main — scripts/ci/parse_memory_health_results.py:129

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/parse_memory_health_results.py`, language: Python, lines: 167
- documented invocation: `python scripts/ci/parse_memory_health_results.py`
- executed: yes
- actual command: `python3 sources/rjm/scripts/ci/parse_memory_health_results.py --results nonexistent.json`
- stdout: `::error::nonexistent.json is missing or empty, so the health command crashed. Refusing to report a passing health check.`
- actual exit code: 1
- documented exit codes: none (no explicit table in docstring; exits 0 on success via `return 0` — scripts/ci/parse_memory_health_results.py:162; exits 1 on missing/empty results, JSON decode failure, or schema validation failure via `return 1` — scripts/ci/parse_memory_health_results.py:144, 150, 159)
- for validators/gates: can exit non-zero (exits 1 on missing file or schema error)
- does the output match what the documentation claims: yes, validates health schema and formats step outputs as documented

## Defects — required
none

## Observations
Extracted from `.github/workflows/memory-health.yml` under ADR-006 to eliminate inline logic in workflow YAML. Validates internal invariant that citation sub-counts sum to `total_citations`.

## Context cost
Bytes: 6055. Uses Python standard library only (`argparse`, `json`, `os`, `sys`, `pathlib`). Approximate tokens: ~1500.
