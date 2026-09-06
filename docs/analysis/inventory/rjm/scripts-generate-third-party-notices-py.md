---
package: rjm
path: scripts/generate_third_party_notices.py
type: script
bytes: 18771
unit: inv-rjm-239
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/generate_third_party_notices.py, sha256: e3e00bb9d46ec4f25fdba742a185b1661b21630bb92b4fa3e094114854765e0e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/generate_third_party_notices.py

## Purpose — required, verbatim
> "Generate THIRD-PARTY-NOTICES.TXT from shipped plugin components." — scripts/generate_third_party_notices.py:2

## Design intent — required
Automates compliance and license attribution by generating `THIRD-PARTY-NOTICES.TXT` for all redistributed third-party components (forked code and runtime dependencies declared in requirements files) in shipped plugin paths defined by `.claude-plugin/marketplace.json`. It provides a `--check` verification mode for CI to catch uncommitted or stale notice files and unknown licenses.

## Phase — required
none

## Inputs — required
- Configuration file `.claude-plugin/marketplace.json` — scripts/generate_third_party_notices.py:4
- Metadata dictionary `FORKED_COMPONENTS` — scripts/generate_third_party_notices.py:50
- Metadata dictionary `RUNTIME_DEPENDENCIES` — scripts/generate_third_party_notices.py:115
- Any `requirements.txt` discovered within shipped plugin source paths — scripts/generate_third_party_notices.py:250
- CLI arguments `--output` (target notice file, defaults to `THIRD-PARTY-NOTICES.TXT`) and `--check` (verify without writing) — scripts/generate_third_party_notices.py:435,440

## Outputs — required
- Generated license notice files: `THIRD-PARTY-NOTICES.TXT`, `.claude/THIRD-PARTY-NOTICES.TXT`, and `src/copilot-cli/THIRD-PARTY-NOTICES.TXT` (or custom `--output` path) — scripts/generate_third_party_notices.py:30-32,427
- Standard output summary listing generated files and component counts, or status message in `--check` mode — scripts/generate_third_party_notices.py:419,478-482
- Standard error diagnostics on configuration errors or path escape attempts — scripts/generate_third_party_notices.py:153,163,170,183,450

## Invokes — required
none

## Invoked by — required
- doc docs/third-party-license-attribution.md — docs/third-party-license-attribution.md:49
- doc CONTRIBUTING.md — CONTRIBUTING.md:1106
- script scripts/validation/check_adr_lifecycle.py — scripts/validation/check_adr_lifecycle.py:1065

## Concepts named — required, verbatim
- `marketplace.json` — scripts/generate_third_party_notices.py:4 — used here
- `ADR-035` — scripts/generate_third_party_notices.py:12 — used here
- `ShippedComponent` — scripts/generate_third_party_notices.py:37 — defined here
- `FORKED_COMPONENTS` — scripts/generate_third_party_notices.py:50 — defined here
- `RUNTIME_DEPENDENCIES` — scripts/generate_third_party_notices.py:115 — defined here
- `load_marketplace_config` — scripts/generate_third_party_notices.py:148 — defined here
- `get_shipped_source_paths` — scripts/generate_third_party_notices.py:192 — defined here
- `find_forked_components` — scripts/generate_third_party_notices.py:209 — defined here
- `find_runtime_dependencies` — scripts/generate_third_party_notices.py:243 — defined here
- `_parse_requirements` — scripts/generate_third_party_notices.py:290 — defined here
- `format_notices` — scripts/generate_third_party_notices.py:303 — defined here
- `resolve_output_path` — scripts/generate_third_party_notices.py:383 — defined here
- `_check_outputs` — scripts/generate_third_party_notices.py:400 — defined here
- `_write_outputs` — scripts/generate_third_party_notices.py:423 — defined here
- `main` — scripts/generate_third_party_notices.py:430 — defined here

## Structure
- Module docstring and CLI specification (lines 1-16)
- Constants and default paths configuration (lines 27-34)
- `ShippedComponent` dataclass (lines 37-46)
- `FORKED_COMPONENTS` metadata registry (lines 50-110)
- `RUNTIME_DEPENDENCIES` metadata registry (lines 115-145)
- `load_marketplace_config` plugin manifest loader (lines 148-190)
- `get_shipped_source_paths` path resolution logic (lines 192-207)
- `find_forked_components` scanner (lines 209-241)
- `find_runtime_dependencies` and `_parse_requirements` dependency scanners (lines 243-301)
- `format_notices` and `_format_entry` text generation routines (lines 303-381)
- `resolve_output_path`, `_output_paths`, `_check_outputs`, `_write_outputs` file management functions (lines 383-428)
- `main` CLI entrypoint and execution flow (lines 430-494)
- Script runner entrypoint (lines 496-498)

## Scripts — required if type is script or the skill ships scripts
- **path:** `scripts/generate_third_party_notices.py`
- **language:** Python 3
- **lines:** 498
- **documented invocation:**
  > "python3 scripts/generate_third_party_notices.py [--output THIRD-PARTY-NOTICES.TXT]" — scripts/generate_third_party_notices.py:10
- **executed:** yes
- **command:** `python3 scripts/generate_third_party_notices.py --check` (from `sources/rjm`)
- **stdout:**
  ```text
  OK: third-party notices are up to date.
  ```
- **actual exit code:** 0
- **documented exit codes:**
  - `0 - Success` — scripts/generate_third_party_notices.py:13
  - `1 - Logic error (missing license data)` — scripts/generate_third_party_notices.py:14
  - `2 - Configuration error` — scripts/generate_third_party_notices.py:15
- **actual exit paths:**
  - `sys.exit(2)` — scripts/generate_third_party_notices.py:156,166,173,187
  - `return 1` — scripts/generate_third_party_notices.py:418,491
  - `return 0` — scripts/generate_third_party_notices.py:420,493
  - `return 2` — scripts/generate_third_party_notices.py:452,467
  - `sys.exit(main())` — scripts/generate_third_party_notices.py:497
- **for validators/gates:** can exit non-zero: exits 1 when notices are stale in `--check` mode or when any component has an unknown license; exits 2 on configuration error (missing/malformed marketplace config or directory escape). On default branch with `--check`, exits 0 ("OK: third-party notices are up to date.").
- **output matches documentation:** yes, accurately checks or writes the three packaged notice files matching the documented syntax and exit codes.

## Defects — required
none

## Observations
When output is the default `THIRD-PARTY-NOTICES.TXT`, `_output_paths` expands the write target to three synchronised locations: root `THIRD-PARTY-NOTICES.TXT`, `.claude/THIRD-PARTY-NOTICES.TXT`, and `src/copilot-cli/THIRD-PARTY-NOTICES.TXT`. Enforces boundary safety by raising `ValueError` or exiting 2 if the output path or current working directory escapes the project root.

## Context cost
18771 bytes, ~4690 tokens. Loads no other internal files. Total context cost: 18771 bytes.
