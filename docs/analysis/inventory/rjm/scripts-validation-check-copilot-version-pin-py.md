---
package: rjm
path: scripts/validation/check_copilot_version_pin.py
type: script
bytes: 6116
unit: inv-rjm-278
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_copilot_version_pin.py, sha256: 1821fcb43cb7cb32c9d7740b80e25620a2efe62e3688b6f8a94d8f3b2c812350}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_copilot_version_pin.py

## Purpose — required, verbatim
> "Guard the pinned ``@github/copilot`` CLI version (Issue #2630)." — scripts/validation/check_copilot_version_pin.py:2

## Design intent — required
Validates the pinned `@github/copilot` CLI npm version in `.github/actions/ai-review/action.yml` to prevent regressions to known-bad releases. In particular, version `0.0.397` carried an invalid session ID bug deprecated by npm that broke PR Maintenance AI review steps. The validator parses the `COPILOT_VERSION="<version>"` assignment from the composite action, enforcing that exactly one pin is present, that the version string is parseable semver, and that it is not on a permanent denylist (`KNOWN_BAD_VERSIONS`). Enforced locally via pre-push hooks and in CI, it catches defective pins at the author's terminal before scheduled workflow runs fail.

## Phase — required
rjm:test

## Inputs — required
- Target composite action file: `.github/actions/ai-review/action.yml` (default `_DEFAULT_ACTION`) or path specified via `--action ACTION` CLI flag (scripts/validation/check_copilot_version_pin.py:64, 157)
- Version assignment regex: `_PIN_RE` matching `^[ \t]*(?:export[ \t]+)?COPILOT_VERSION=["']([^"']+)["']` (scripts/validation/check_copilot_version_pin.py:54)
- Semver pattern regex: `_VERSION_RE` matching `^\d+\.\d+\.\d+(?:-[0-9A-Za-z.]+)?$` (scripts/validation/check_copilot_version_pin.py:61)
- Denylist: `KNOWN_BAD_VERSIONS` set, seeded with `{"0.0.397"}` (scripts/validation/check_copilot_version_pin.py:46)

## Outputs — required
- Standard output: success status line `COPILOT_VERSION pin OK: <version>` (scripts/validation/check_copilot_version_pin.py:149)
- Standard error: GitHub Actions formatted error annotations (`::error::<message>`) for path traversal, missing action file, missing/duplicate pins, unparseable semver, or known-bad version (scripts/validation/check_copilot_version_pin.py:118, 124, 130, 135, 143)
- Exit codes:
  - `0 - pin is parseable and not known-bad` — scripts/validation/check_copilot_version_pin.py:28 (exited at line 150)
  - `1 - pin missing, unparseable, or known-bad (logic failure)` — scripts/validation/check_copilot_version_pin.py:29 (exited at lines 121, 131, 139, 147)
  - `2 - the target action file does not exist (config failure)` — scripts/validation/check_copilot_version_pin.py:30 (exited at line 125)

## Invokes — required
none

## Invoked by — required
- script check_copilot_version_pin — scripts/validation/checks_tooling.py:514
- doc CONTRIBUTING.md — CONTRIBUTING.md:768

## Concepts named — required, verbatim
- `ADR-006` — scripts/validation/check_copilot_version_pin.py:24 — used here
- `ADR-042` — scripts/validation/check_copilot_version_pin.py:25 — used here
- `ADR-035` — scripts/validation/check_copilot_version_pin.py:27 — used here
- `EXIT_OK` — scripts/validation/check_copilot_version_pin.py:40 — defined here
- `EXIT_LOGIC` — scripts/validation/check_copilot_version_pin.py:41 — defined here
- `EXIT_CONFIG` — scripts/validation/check_copilot_version_pin.py:42 — defined here
- `KNOWN_BAD_VERSIONS` — scripts/validation/check_copilot_version_pin.py:46 — defined here
- `VersionPinError` — scripts/validation/check_copilot_version_pin.py:68 — defined here
- `is_parseable` — scripts/validation/check_copilot_version_pin.py:72 — defined here
- `is_known_bad` — scripts/validation/check_copilot_version_pin.py:77 — defined here
- `extract_pinned_version` — scripts/validation/check_copilot_version_pin.py:82 — defined here
- `check_action` — scripts/validation/check_copilot_version_pin.py:108 — defined here

## Structure
- Constants: EXIT_OK, EXIT_LOGIC, EXIT_CONFIG, KNOWN_BAD_VERSIONS, _PIN_RE, _VERSION_RE, _DEFAULT_ACTION — scripts/validation/check_copilot_version_pin.py:40-64
- Class: VersionPinError(ValueError) — scripts/validation/check_copilot_version_pin.py:68
- Function: is_parseable — scripts/validation/check_copilot_version_pin.py:72
- Function: is_known_bad — scripts/validation/check_copilot_version_pin.py:77
- Function: extract_pinned_version — scripts/validation/check_copilot_version_pin.py:82
- Function: check_action — scripts/validation/check_copilot_version_pin.py:108
- Function: main — scripts/validation/check_copilot_version_pin.py:153

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_copilot_version_pin.py`
- language: Python
- lines: 168
- documented invocation:
  `uv run python scripts/validation/check_copilot_version_pin.py` — CONTRIBUTING.md:826
- executed: yes
- actual command run: `uv run python scripts/validation/check_copilot_version_pin.py`
- abridged stdout: `COPILOT_VERSION pin OK: 1.0.63`
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - documented:
    - `0 - pin is parseable and not known-bad` — scripts/validation/check_copilot_version_pin.py:28
    - `1 - pin missing, unparseable, or known-bad (logic failure)` — scripts/validation/check_copilot_version_pin.py:29
    - `2 - the target action file does not exist (config failure)` — scripts/validation/check_copilot_version_pin.py:30
  - actual exit paths in code:
    - `scripts/validation/check_copilot_version_pin.py:121`: `return EXIT_LOGIC` (1)
    - `scripts/validation/check_copilot_version_pin.py:125`: `return EXIT_CONFIG` (2)
    - `scripts/validation/check_copilot_version_pin.py:131`: `return EXIT_LOGIC` (1)
    - `scripts/validation/check_copilot_version_pin.py:139`: `return EXIT_LOGIC` (1)
    - `scripts/validation/check_copilot_version_pin.py:147`: `return EXIT_LOGIC` (1)
    - `scripts/validation/check_copilot_version_pin.py:150`: `return EXIT_OK` (0)
    - `scripts/validation/check_copilot_version_pin.py:167`: `raise SystemExit(main())`
- for validators/gates: can it exit non-zero? Yes (exits 1 on missing, unparseable, or known-bad pin; exits 2 on missing action file); does it fail on the source repo's own default branch? No, exits 0 with `COPILOT_VERSION pin OK: 1.0.63`.
- does the output match what the documentation claims? Yes, validates the action pin and prints `COPILOT_VERSION pin OK: 1.0.63`.

## Defects — required
none

## Observations
- Duplicate pin defense: `extract_pinned_version` (lines 97-101) raises `VersionPinError` if more than one `COPILOT_VERSION` match is found, preventing ambiguity since bash uses the last assignment before executing `npm install`.
- Path traversal guard: lines 114-121 ensure `resolved_path.relative_to(repo_root)` succeeds, returning `EXIT_LOGIC` (1) if traversal is detected.
- Uses standard library exclusively (`argparse`, `re`, `pathlib`, `sys`), meaning it runs without external third-party dependencies.

## Context cost
6,116 bytes for `scripts/validation/check_copilot_version_pin.py`. Loads `.github/actions/ai-review/action.yml` (11,716 bytes). Total context cost ~18 KB, approximately 4,500 tokens.
