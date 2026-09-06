---
package: rjm
path: scripts/ci/run_hook_bypass_audit.py
type: script
bytes: 3047
unit: inv-rjm-207
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/run_hook_bypass_audit.py, sha256: 01c716bf51bbe5d271b56e50fbbfe67de0235b5cde234cb2b36fab69b4abeef7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/run_hook_bypass_audit.py

## Purpose — required, verbatim
> "Run the hook-bypass detector and enforce its three-way exit contract." — scripts/ci/run_hook_bypass_audit.py:2

## Design intent — required
Enforces a three-way exit contract around `scripts/detect_hook_bypass.py` by ensuring clean audits (exit 0) and advisory detection findings (exit 1) are distinguished from detector crashes or missing/empty audit reports (exit >=2), replacing fragile inline shell error handling in `.github/workflows/audit-hook-bypass.yml` per ADR-006 and ADR-035.

## Phase — required
cross-phase

## Inputs — required
- CLI argument `"--detector"` — scripts/ci/run_hook_bypass_audit.py:42: path to `scripts/detect_hook_bypass.py`
- CLI argument `"--base-ref"` — scripts/ci/run_hook_bypass_audit.py:44: base ref to audit against
- CLI argument `"--output"` — scripts/ci/run_hook_bypass_audit.py:45: path for the audit JSON

## Outputs — required
- Audit report file path specified by `args.output` (`report = Path(args.output)`) — scripts/ci/run_hook_bypass_audit.py:81

## Invokes — required
- script scripts/detect_hook_bypass.py — scripts/ci/run_hook_bypass_audit.py:9

## Invoked by — required
orphan

## Concepts named — required, verbatim
`ADR-006` — scripts/ci/run_hook_bypass_audit.py:6 — used here
`detect_hook_bypass.py` — scripts/ci/run_hook_bypass_audit.py:9 — used here
`ADR-035` — scripts/ci/run_hook_bypass_audit.py:20 — used here
`EXIT_SUCCESS` — scripts/ci/run_hook_bypass_audit.py:33 — defined here
`EXIT_NO_REPORT` — scripts/ci/run_hook_bypass_audit.py:34 — defined here
`DETECTOR_CRASH_FLOOR` — scripts/ci/run_hook_bypass_audit.py:35 — defined here

## Structure
(no markdown headings; flat python script)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/run_hook_bypass_audit.py`, language: Python 3, lines: 91
- documented invocation: `"Run the hook-bypass detector and enforce its three-way exit contract." — scripts/ci/run_hook_bypass_audit.py:2`
- **executed:** yes
- actual command run: `python3 scripts/ci/run_hook_bypass_audit.py --help`, stdout: `usage: run_hook_bypass_audit.py [-h] --detector DETECTOR --base-ref BASE_REF --output OUTPUT`, **actual exit code**: 0
- documented exit codes: `"0  - Success: the detector ran; 0 or more indicators recorded" — scripts/ci/run_hook_bypass_audit.py:21`, `"1  - Error: the detector produced no usable report" — scripts/ci/run_hook_bypass_audit.py:22`, `"2+ - Error: forwarded from the detector's own crash code" — scripts/ci/run_hook_bypass_audit.py:23`; actual exit paths: `scripts/ci/run_hook_bypass_audit.py:73` (`return EXIT_NO_REPORT` [1] on OSError launching detector), `scripts/ci/run_hook_bypass_audit.py:79` (`return result.returncode` [>=2] if detector returncode >= DETECTOR_CRASH_FLOOR), `scripts/ci/run_hook_bypass_audit.py:84` (`return EXIT_NO_REPORT` [1] if report missing or empty), `scripts/ci/run_hook_bypass_audit.py:86` (`return EXIT_SUCCESS` [0]), `scripts/ci/run_hook_bypass_audit.py:90` (`sys.exit(main())`)
- for validators/gates: gate runner; returns non-zero (1 or detector returncode >= 2) when detector fails, crashes, or produces no valid report; passes with 0 when detector succeeds and writes non-empty report
- does the output match what the documentation claims? yes, enforces three-way exit contract and validates report existence

## Defects — required
none

## Observations
Addresses GitHub issue #2808 where detector crashes were previously masked as "0 indicators" by inline shell logic disabling `set -e`. Flushes stdout prior to child execution to avoid buffered log interleaving in CI pipes.

## Context cost
3047 bytes, approximately 762 tokens.
