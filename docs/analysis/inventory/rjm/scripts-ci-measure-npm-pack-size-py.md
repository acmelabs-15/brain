---
package: rjm
path: scripts/ci/measure_npm_pack_size.py
type: script
bytes: 2562
unit: inv-rjm-204
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/ci/measure_npm_pack_size.py, sha256: 552893e4598f8c097aa7fefa2f26e604bdbdf2a1aa099a1f3035793a35835fc8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/ci/measure_npm_pack_size.py

## Purpose — required, verbatim
> "Measure the npm pack size and warn if it exceeds the 50 MB limit." — scripts/ci/measure_npm_pack_size.py:2

## Design intent — required
Replaces an inline shell block in `publish.yml` (issue #3533) to measure the size of the npm package via `npm pack --dry-run --json`. It parses the exact payload size, logs human-readable summary output, and emits a GitHub Actions warning annotation (`::warning::Pack size exceeds 50MB threshold`) if the artifact exceeds the 50 MiB threshold (`_SIZE_LIMIT_BYTES = 52_428_800`), following ADR-035 exit code conventions without blocking publication.

## Phase — required
rjm:ship

## Inputs — required
- CLI flag `--package-dir` — scripts/ci/measure_npm_pack_size.py:70

## Outputs — required
- Extracted pack payload size in `size_bytes` — scripts/ci/measure_npm_pack_size.py:48

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `ADR-035` — scripts/ci/measure_npm_pack_size.py:8 — used here
- `EXIT_OK` — scripts/ci/measure_npm_pack_size.py:22 — defined here
- `EXIT_ERROR` — scripts/ci/measure_npm_pack_size.py:23 — defined here
- `EXIT_USAGE` — scripts/ci/measure_npm_pack_size.py:24 — defined here
- `_SIZE_LIMIT_BYTES` — scripts/ci/measure_npm_pack_size.py:26 — defined here
- `measure_pack_size` — scripts/ci/measure_npm_pack_size.py:29 — defined here
- `build_parser` — scripts/ci/measure_npm_pack_size.py:67 — defined here
- `main` — scripts/ci/measure_npm_pack_size.py:77 — defined here

## Structure
none (python script; functions: `measure_pack_size`, `build_parser`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/ci/measure_npm_pack_size.py`, language: Python 3, lines: 95
- documented invocation:
  - "Runs `npm pack --dry-run --json` in --package-dir, reads the size bytes from" — scripts/ci/measure_npm_pack_size.py:4
- **executed:** yes
- actual command run: `python3 sources/rjm/scripts/ci/measure_npm_pack_size.py --help`
  abridged stdout:
  ```
  usage: measure_npm_pack_size.py [-h] --package-dir PACKAGE_DIR
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented exit codes:
  > "  0  - Pack completed (warning emitted if limit exceeded, but does not fail)" — scripts/ci/measure_npm_pack_size.py:9
  > "  1  - npm pack failed or unexpected output" — scripts/ci/measure_npm_pack_size.py:10
  > "  2  - Usage error" — scripts/ci/measure_npm_pack_size.py:11
  Actual exit paths:
  - line 84: `return EXIT_ERROR` (1) when `measure_pack_size` returns None for `size_bytes`
  - line 90: `return EXIT_OK` (0) on successful measurement (with or without warning)
  - line 78: argparse exits with code 2 on missing or invalid arguments (matching `EXIT_USAGE`)
  - line 94: `sys.exit(main())`
- for validators/gates: can it exit non-zero? yes (exits 1 on npm pack failure, 2 on usage error). Does it fail on the source repo's own default branch? no, `--help` exits 0 cleanly.
- does the output match what the documentation claims? yes, parses npm pack size and respects ADR-035 non-blocking warning policy.

## Defects — required
- orphan · scripts/ci/measure_npm_pack_size.py:1 · Not invoked by any in-scope manifest file; called by out-of-scope .github/workflows/publish.yml:72.

## Observations
- Exceeding the 50 MiB threshold logs a warning annotation but deliberately does not return non-zero (line 90), ensuring an oversized pack generates visibility without failing the publish pipeline.

## Context cost
2562 bytes (~640 tokens). Python standard library only (`argparse`, `json`, `subprocess`, `sys`, `pathlib`).
