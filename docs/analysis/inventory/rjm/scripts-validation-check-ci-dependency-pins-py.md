---
package: rjm
path: scripts/validation/check_ci_dependency_pins.py
type: script
bytes: 11644
unit: inv-rjm-277
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_ci_dependency_pins.py, sha256: 177f5e747f3b253a60b46edbf76d82947d9b04a1df1b56b674530e78d6a07f0d}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_ci_dependency_pins.py

## Purpose — required, verbatim
> "Assert every hand-written ``pkg==version`` pin in ``.github/`` YAML agrees" — scripts/validation/check_ci_dependency_pins.py:2

## Design intent — required
Enforces strict consistency between hand-written package version pins in GitHub Actions workflows and action configurations (`.github/**/*.yml`) and declared project dependency constraints in `pyproject.toml` (Issue #3377). When CI workflow files hardcode package versions independently, differing or outdated pins easily emerge across steps (as when separate workflows pinned pytest 9.0.3 and 8.3.3 simultaneously, leading PR #3361 to accidentally downgrade the correct pin). By parsing TOML dependency declarations across main dependencies, optional dependencies, and PEP 735 dependency groups, and evaluating every YAML literal pin against the combined specifier set, this gate prevents CI from silently installing unsupported or unaligned tool versions.

## Phase — required
rjm:test

## Inputs — required
- CLI arguments parsed via `build_parser()`:
  - `--root` (directory to scan for YAML pins, default: `_REPO_ROOT / ".github"` — scripts/validation/check_ci_dependency_pins.py:272)
  - `--pyproject` (path to constraint source, default: `_REPO_ROOT / "pyproject.toml"` — scripts/validation/check_ci_dependency_pins.py:274)
- Files read on disk:
  - `pyproject.toml` read and parsed via `tomllib.loads` (scripts/validation/check_ci_dependency_pins.py:168)
  - All `.yml` and `.yaml` files under the scan root (scripts/validation/check_ci_dependency_pins.py:202)
- Dependencies:
  - `packaging.requirements.Requirement` (scripts/validation/check_ci_dependency_pins.py:61)
  - `packaging.specifiers.SpecifierSet` (scripts/validation/check_ci_dependency_pins.py:62)
  - `packaging.utils.canonicalize_name` (scripts/validation/check_ci_dependency_pins.py:63)
  - `packaging.version.Version` (scripts/validation/check_ci_dependency_pins.py:64)

## Outputs — required
- GitHub Actions workflow commands and messages on stderr:
  - Missing pyproject: `::error::pyproject.toml not found: {pyproject}` (scripts/validation/check_ci_dependency_pins.py:244)
  - Missing scan root: `::error::scan root not found: {root}` (scripts/validation/check_ci_dependency_pins.py:247)
  - Parse error: `::error::cannot read constraints from {pyproject}: {exc}` (scripts/validation/check_ci_dependency_pins.py:253)
  - Rendered pin violation: `::error::{violation.render(_REPO_ROOT)}` (scripts/validation/check_ci_dependency_pins.py:261)
  - Summary error: `::error::{len(found)} CI pin(s) contradict pyproject.toml. Update the pin, not pyproject, unless the floor itself is wrong.` (scripts/validation/check_ci_dependency_pins.py:263)
  - File read warning: `::warning::skipping {path}: {exc}` (scripts/validation/check_ci_dependency_pins.py:207)
- Process exit codes (ADR-035):
  - `0` (`EXIT_OK`): every checked pin satisfies its declared constraint (scripts/validation/check_ci_dependency_pins.py:47, 66, 258)
  - `1` (`EXIT_LOGIC`): at least one pin violates its constraint (scripts/validation/check_ci_dependency_pins.py:48, 67, 267)
  - `2` (`EXIT_CONFIG`): pyproject.toml or scan root missing or unparseable (scripts/validation/check_ci_dependency_pins.py:49, 68, 245, 248, 254)

## Invokes — required
- config pyproject.toml — scripts/validation/check_ci_dependency_pins.py:15
- doc ADR-006 — scripts/validation/check_ci_dependency_pins.py:43
- doc ADR-042 — scripts/validation/check_ci_dependency_pins.py:43
- doc ADR-035 — scripts/validation/check_ci_dependency_pins.py:46

## Invoked by — required
- script check_ci_dependency_pins — scripts/validation/checks_tooling.py:534
- test test_check_ci_dependency_pins.py — tests/validation/test_check_ci_dependency_pins.py:13

## Concepts named — required, verbatim
- `Issue #3377` — scripts/validation/check_ci_dependency_pins.py:3 — used here
- `PR #3361` — scripts/validation/check_ci_dependency_pins.py:17 — used here
- `Issues #3341` — scripts/validation/check_ci_dependency_pins.py:20 — used here
- `Issue #3329` — scripts/validation/check_ci_dependency_pins.py:35 — used here
- `TestTheRealTree` — scripts/validation/check_ci_dependency_pins.py:37 — used here
- `validate_ci_dependency_pins` — scripts/validation/check_ci_dependency_pins.py:40 — used here
- `ADR-006` — scripts/validation/check_ci_dependency_pins.py:43 — used here
- `ADR-042` — scripts/validation/check_ci_dependency_pins.py:43 — used here
- `ADR-035` — scripts/validation/check_ci_dependency_pins.py:46 — used here
- `EXIT_OK` — scripts/validation/check_ci_dependency_pins.py:66 — defined here
- `EXIT_LOGIC` — scripts/validation/check_ci_dependency_pins.py:67 — defined here
- `EXIT_CONFIG` — scripts/validation/check_ci_dependency_pins.py:68 — defined here
- `_PIN_RE` — scripts/validation/check_ci_dependency_pins.py:79 — defined here
- `Pin` — scripts/validation/check_ci_dependency_pins.py:85 — defined here
- `Violation` — scripts/validation/check_ci_dependency_pins.py:99 — defined here
- `_requirement_strings` — scripts/validation/check_ci_dependency_pins.py:122 — defined here
- `PEP 735` — scripts/validation/check_ci_dependency_pins.py:126 — used here
- `_requirement_groups` — scripts/validation/check_ci_dependency_pins.py:147 — defined here
- `declared_constraints` — scripts/validation/check_ci_dependency_pins.py:154 — defined here
- `find_pins` — scripts/validation/check_ci_dependency_pins.py:189 — defined here
- `violations` — scripts/validation/check_ci_dependency_pins.py:222 — defined here
- `check` — scripts/validation/check_ci_dependency_pins.py:241 — defined here
- `build_parser` — scripts/validation/check_ci_dependency_pins.py:270 — defined here
- `main` — scripts/validation/check_ci_dependency_pins.py:279 — defined here

## Structure
- `Pin` — scripts/validation/check_ci_dependency_pins.py:85
- `Violation` — scripts/validation/check_ci_dependency_pins.py:99
- `_requirement_strings` — scripts/validation/check_ci_dependency_pins.py:122
- `_requirement_groups` — scripts/validation/check_ci_dependency_pins.py:147
- `declared_constraints` — scripts/validation/check_ci_dependency_pins.py:154
- `find_pins` — scripts/validation/check_ci_dependency_pins.py:189
- `violations` — scripts/validation/check_ci_dependency_pins.py:222
- `check` — scripts/validation/check_ci_dependency_pins.py:241
- `build_parser` — scripts/validation/check_ci_dependency_pins.py:270
- `main` — scripts/validation/check_ci_dependency_pins.py:279

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_ci_dependency_pins.py`, language: Python, lines: 286
- documented invocation:
  "validate_ci_dependency_pins" — scripts/validation/check_ci_dependency_pins.py:40
- executed: yes
- actual command run: `sources/rjm/.venv/bin/python3 sources/rjm/scripts/validation/check_ci_dependency_pins.py`
  abridged stdout: (clean exit, no stdout/stderr)
  actual exit code: `0`
  With missing root: `sources/rjm/.venv/bin/python3 sources/rjm/scripts/validation/check_ci_dependency_pins.py --root non_existent`
  abridged stdout: `::error::scan root not found: non_existent` (on stderr)
  actual exit code: `2`
- documented exit codes vs actual exit paths:
  - "0 - every checked pin satisfies its declared constraint" — scripts/validation/check_ci_dependency_pins.py:47
  - "1 - at least one pin violates its constraint (logic failure)" — scripts/validation/check_ci_dependency_pins.py:48
  - "2 - pyproject.toml or the scan root is missing or unparseable (config)" — scripts/validation/check_ci_dependency_pins.py:49
  Actual exit paths in code:
  - `return EXIT_CONFIG` — scripts/validation/check_ci_dependency_pins.py:245
  - `return EXIT_CONFIG` — scripts/validation/check_ci_dependency_pins.py:248
  - `return EXIT_CONFIG` — scripts/validation/check_ci_dependency_pins.py:254
  - `return EXIT_OK` — scripts/validation/check_ci_dependency_pins.py:258
  - `return EXIT_LOGIC` — scripts/validation/check_ci_dependency_pins.py:267
- for validators/gates:
  - Can it exit non-zero: yes (exit 1 on constraint violation, exit 2 on configuration error).
  - Does it fail on source repo's default branch: no, exits 0 cleanly.
- Does output match documentation: yes.

## Defects — required
none

## Observations
- Non-string filtering in dependency groups: Rather than rejecting a section when encountering complex TOML objects like `{include-group = "..."}`, `_requirement_strings` filters item-by-item to avoid silently dropping accompanying string constraints.
- GitHub Actions formatting: Diagnostic messages are emitted directly with GitHub Actions workflow command syntax (`::error::`, `::warning::`) for seamless integration with pull request annotations.

## Context cost
11644 bytes. External dependencies: `packaging` library. Approximately 3000 tokens.
