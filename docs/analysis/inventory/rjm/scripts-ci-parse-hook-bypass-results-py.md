---
package: rjm
path: scripts/ci/parse_hook_bypass_results.py
type: script
bytes: 3284
unit: inv-rjm-205
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/parse_hook_bypass_results.py, sha256: f64f6a9f0d591c6c512810bf6cd12f4510cbd9a98000767141afee1346bc3019}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/parse_hook_bypass_results.py

## Purpose — required, verbatim
> "Parse hook-bypass audit JSON into the indicator count the audit workflow reads." — scripts/ci/parse_hook_bypass_results.py:2

## Design intent — required
Parses audit JSON output emitted by `scripts/detect_hook_bypass.py` to extract the bare integer count of bypass indicators for `.github/workflows/audit-hook-bypass.yml`. Moving JSON parsing out of workflow YAML inline scripts complies with ADR-006 and standardizes error exit codes according to ADR-035.

## Phase — required
cross-phase

## Inputs — required
- `--input`: "Path to the hook-bypass audit JSON written by detect_hook_bypass.py." — scripts/ci/parse_hook_bypass_results.py:56
- `--count-out`: "Path to write the bare indicator count (integer) to." — scripts/ci/parse_hook_bypass_results.py:61
- JSON payload containing the list field:
  - "bypass_indicators" — scripts/ci/parse_hook_bypass_results.py:44

## Outputs — required
- Bare integer indicator count written to path given by `--count-out`:
  - `Path(args.count_out).write_text(f"{count}\n", encoding="utf-8")` — scripts/ci/parse_hook_bypass_results.py:93
- Exit codes:
  - `EXIT_SUCCESS = 0` — scripts/ci/parse_hook_bypass_results.py:35
  - `EXIT_MALFORMED = 1` — scripts/ci/parse_hook_bypass_results.py:36
  - `EXIT_USAGE = 2` — scripts/ci/parse_hook_bypass_results.py:37

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `hook-bypass` — scripts/ci/parse_hook_bypass_results.py:2 — used here
- `ADR-006` — scripts/ci/parse_hook_bypass_results.py:6 — used here
- `ADR-035` — scripts/ci/parse_hook_bypass_results.py:22 — used here
- `_indicator_count` — scripts/ci/parse_hook_bypass_results.py:40 — defined here
- `EXIT_SUCCESS` — scripts/ci/parse_hook_bypass_results.py:35 — defined here
- `EXIT_MALFORMED` — scripts/ci/parse_hook_bypass_results.py:36 — defined here
- `EXIT_USAGE` — scripts/ci/parse_hook_bypass_results.py:37 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/parse_hook_bypass_results.py`, language: Python, lines: 99
- documented invocation: "Path to write the bare indicator count (integer) to." — scripts/ci/parse_hook_bypass_results.py:61
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 sources/rjm/scripts/ci/parse_hook_bypass_results.py --help`
    stdout: `usage: parse_hook_bypass_results.py [-h] --input INPUT --count-out COUNT_OUT`
    actual exit code: 0
  - Command: with mock JSON input: `python3 sources/rjm/scripts/ci/parse_hook_bypass_results.py --input /tmp/audit.json --count-out /tmp/count.txt`
    stdout: `` (wrote indicator count to file)
    actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented:
    - "0  - Success: count written" — scripts/ci/parse_hook_bypass_results.py:23
    - "1  - Error: malformed input (bad JSON, missing/!list bypass_indicators)" — scripts/ci/parse_hook_bypass_results.py:24
    - "2  - Error: usage/configuration (file not found, bad argument)" — scripts/ci/parse_hook_bypass_results.py:25
  - Actual exit paths in code:
    - `return EXIT_SUCCESS` — scripts/ci/parse_hook_bypass_results.py:94
    - `return EXIT_MALFORMED` — scripts/ci/parse_hook_bypass_results.py:82, 85, 91
    - `return EXIT_USAGE` — scripts/ci/parse_hook_bypass_results.py:73, 79
    - `sys.exit(main())` — scripts/ci/parse_hook_bypass_results.py:98
- for validators/gates: can it exit non-zero?
  Yes, exits 1 on malformed JSON, UTF-8 decode errors, or non-list `bypass_indicators` (lines 82, 85, 91), and 2 on missing or unreadable files (lines 73, 79).
- does the output match what the documentation claims?
  Yes, writes bare integer count to the specified output file and returns ADR-035 exit codes.

## Defects — required
- orphan — scripts/ci/parse_hook_bypass_results.py:1 — No in-scope lifecycle file invokes this script; only referenced by .github/workflows/audit-hook-bypass.yml.

## Observations
Differentiates file-system access errors (returning code 2) from JSON decode errors and structure validation failures (returning code 1), ensuring that infrastructure and configuration issues are distinct from payload syntax errors.

## Context cost
3284 bytes, 99 lines. Approximate tokens: ~850.
