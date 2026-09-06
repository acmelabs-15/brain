---
package: rjm
path: scripts/ci/find_copilot_ready_issues.py
type: script
bytes: 2212
unit: inv-rjm-203
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/find_copilot_ready_issues.py, sha256: faf9bb06e7fd11b6e0fd37e7d397cd119e07631df2eb92a142facbeabe9205a7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# scripts/ci/find_copilot_ready_issues.py

## Purpose — required, verbatim
> "Find issues with the copilot-ready label." — scripts/ci/find_copilot_ready_issues.py:1

## Design intent — required
Queries GitHub for open issues bearing the `copilot-ready` label, formatting matching issue numbers into a space-delimited list and recording the total issue count in `GITHUB_OUTPUT`. It extracts inline shell logic from `copilot-context-synthesis.yml` per ADR-006, ensuring ADR-035 exit code compliance with sanitized error diagnostics.

## Phase — required
none

## Inputs — required
- Environment variable `GITHUB_OUTPUT` — scripts/ci/find_copilot_ready_issues.py:54
- Open issues with `copilot-ready` label fetched via `gh` CLI — scripts/ci/find_copilot_ready_issues.py:29,33

## Outputs — required
- Appends `issues=<space-separated list>` to GITHUB_OUTPUT — scripts/ci/find_copilot_ready_issues.py:74
- Appends `count=<number>` to GITHUB_OUTPUT — scripts/ci/find_copilot_ready_issues.py:75

## Invokes — required
- command gh — scripts/ci/find_copilot_ready_issues.py:29

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `copilot-context-synthesis.yml` — scripts/ci/find_copilot_ready_issues.py:3 — used here
- `ADR-006` — scripts/ci/find_copilot_ready_issues.py:4 — used here
- `ADR-035` — scripts/ci/find_copilot_ready_issues.py:8 — used here
- `EXIT_SUCCESS` — scripts/ci/find_copilot_ready_issues.py:20 — defined here
- `EXIT_FAILURE` — scripts/ci/find_copilot_ready_issues.py:21 — defined here
- `EXIT_CONFIG` — scripts/ci/find_copilot_ready_issues.py:22 — defined here
- `find_issues` — scripts/ci/find_copilot_ready_issues.py:25 — defined here
- `copilot-ready` — scripts/ci/find_copilot_ready_issues.py:33 — used here
- `main` — scripts/ci/find_copilot_ready_issues.py:53 — defined here

## Structure
- Module docstring detailing ADR-006 extraction and ADR-035 exit codes (lines 1-12)
- Exit code constants `EXIT_SUCCESS`, `EXIT_FAILURE`, and `EXIT_CONFIG` (lines 20-22)
- Query helper `find_issues` executing `gh issue list` (lines 25-50)
- Entrypoint `main` parsing results and writing to `GITHUB_OUTPUT` (lines 53-83)
- Execution block (lines 85-86)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/ci/find_copilot_ready_issues.py`
- **language:** Python 3
- **lines:** 87
- **documented invocation:** none explicit (executed in CI workflow `copilot-context-synthesis.yml`)
- **executed:** yes
- **command:** `python3 sources/rjm/scripts/ci/find_copilot_ready_issues.py`
- **stdout:**
  ```text
  ERROR: GITHUB_OUTPUT not set
  ```
- **actual exit code:** 2
- **documented exit codes:**
  - `> "0  - Success (includes zero-issues case)" — scripts/ci/find_copilot_ready_issues.py:9`
  - `> "1  - gh CLI failure" — scripts/ci/find_copilot_ready_issues.py:10`
  - `> "2  - Configuration error (GITHUB_OUTPUT not set)" — scripts/ci/find_copilot_ready_issues.py:11`
- **actual exit paths:**
  - `return EXIT_CONFIG` — scripts/ci/find_copilot_ready_issues.py:57
  - `return EXIT_FAILURE` — scripts/ci/find_copilot_ready_issues.py:68
  - `return EXIT_SUCCESS` — scripts/ci/find_copilot_ready_issues.py:82
  - `sys.exit(main())` — scripts/ci/find_copilot_ready_issues.py:86
- **for validators/gates:** Not a validator or gate; issue discovery script. Exits 2 if `GITHUB_OUTPUT` is not set, exits 1 if the `gh issue list` subprocess fails, and exits 0 on success (including when zero issues match).
- **output matches documentation:** yes, writes `issues=` and `count=` variables to `GITHUB_OUTPUT`.

## Defects — required
- orphan — scripts/ci/find_copilot_ready_issues.py:3 — not invoked by any in-scope file; replaces inline bash in copilot-context-synthesis.yml workflow

## Observations
Gracefully handles the zero-issues scenario as a clean exit 0 rather than a failure, and sanitizes stderr messages with URL-style escapes before printing GitHub workflow error annotations.

## Context cost
2,212 bytes source (~550 tokens).
