---
package: rjm
path: scripts/validation/check_spec_id_uniqueness.py
type: script
bytes: 3658
unit: inv-rjm-287
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_spec_id_uniqueness.py, sha256: 3423d17958f2be14d7d061d2172e3818165520ca8603b9374b446c32c95b36fa}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_spec_id_uniqueness.py

## Purpose — required, verbatim
> "Verify spec `id:` frontmatter values are unique within each spec category." — scripts/validation/check_spec_id_uniqueness.py:2

## Design intent — required
Enforces that every specification artifact under `.agents/specs/{requirements,design,tasks}/` possesses a globally unique identifier within its category. Duplicate requirement, design, or task IDs break traceability matrices and corrupt automated graph tooling that connects user requirements to technical designs and implementation tasks (Issue #2068). The script extracts the top-level `id:` YAML frontmatter field from every Markdown file in each category (excluding category `README.md` files), indexes the files by ID, and halts the build with an error listing all colliding paths if duplicate identifiers are discovered.

## Phase — required
none

## Inputs — required
- `--repo-root`: Repository root path (default: grandparent of `scripts/validation`) — scripts/validation/check_spec_id_uniqueness.py:79-84
- Markdown specification files in categories `requirements`, `design`, and `tasks` under `.agents/specs/` (excluding `README.md`) — scripts/validation/check_spec_id_uniqueness.py:26, 61-63, 86

## Outputs — required
- Console output: error messages for duplicate IDs or confirmation that all spec IDs are unique across categories — scripts/validation/check_spec_id_uniqueness.py:71-73, 96-106
- Exit codes: 0 (all IDs unique), 1 (one or more duplicate IDs detected), 2 (configuration error, e.g. specs directory missing) — scripts/validation/check_spec_id_uniqueness.py:12-16, 89, 104, 107
- Files produced: none

## Invokes — required
none

## Invoked by — required
- script checks_spec — scripts/validation/checks_spec.py:60
- reference spec-schemas.md — src/copilot-cli/skills/spec-generator/references/spec-schemas.md:454

## Concepts named — required, verbatim
- `frontmatter` — scripts/validation/check_spec_id_uniqueness.py:2 — used here
- `spec category` — scripts/validation/check_spec_id_uniqueness.py:2 — defined here
- `spec-graph tooling` — scripts/validation/check_spec_id_uniqueness.py:9 — used here
- `ADR-035` — scripts/validation/check_spec_id_uniqueness.py:12 — used here
- `CATEGORIES` — scripts/validation/check_spec_id_uniqueness.py:26 — defined here
- `ID_RE` — scripts/validation/check_spec_id_uniqueness.py:29 — defined here
- `_read_id` — scripts/validation/check_spec_id_uniqueness.py:35 — defined here
- `check_category` — scripts/validation/check_spec_id_uniqueness.py:55 — defined here
- `main` — scripts/validation/check_spec_id_uniqueness.py:76 — defined here

## Structure
- Shebang and module docstring — scripts/validation/check_spec_id_uniqueness.py:1-17
- Imports and category / regex constants — scripts/validation/check_spec_id_uniqueness.py:18-33
- Frontmatter ID reader function — scripts/validation/check_spec_id_uniqueness.py:35-53
- Category-level duplicate ID checker — scripts/validation/check_spec_id_uniqueness.py:55-74
- Argument parser and main CLI runner — scripts/validation/check_spec_id_uniqueness.py:76-112

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_spec_id_uniqueness.py`, language: Python 3, lines: 112
- documented invocation:
  - `python3 scripts/validation/check_spec_id_uniqueness.py`
  - "python3 scripts/validation/check_spec_id_uniqueness.py" — src/copilot-cli/skills/spec-generator/references/spec-schemas.md:454
- executed: yes
- actual command run: `python3 scripts/validation/check_spec_id_uniqueness.py`
- abridged stdout:
```
[PASS] All spec IDs unique across requirements/, design/, tasks/.
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - Documented:
    - `0 - all IDs unique` — scripts/validation/check_spec_id_uniqueness.py:13
    - `1 - one or more duplicates detected` — scripts/validation/check_spec_id_uniqueness.py:14
    - `2 - config error (e.g. specs directory missing)` — scripts/validation/check_spec_id_uniqueness.py:15
  - Actual exit paths:
    - Exit 2: `scripts/validation/check_spec_id_uniqueness.py:89` (specs directory not found)
    - Exit 1: `scripts/validation/check_spec_id_uniqueness.py:104` (duplicate IDs detected)
    - Exit 0: `scripts/validation/check_spec_id_uniqueness.py:107` (all spec IDs unique)
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  - Can exit non-zero: exits 1 on duplicate spec IDs, exits 2 on missing `.agents/specs/` directory.
  - Passes with exit code 0 on default branch.
- does the output match what the documentation claims?
  - Matches the script's internal pass message. Does not match the example output documented in `src/copilot-cli/skills/spec-generator/references/spec-schemas.md:459-464` (see Defects).

## Defects — required
- doc-drift · src/copilot-cli/skills/spec-generator/references/spec-schemas.md:459-464 documents example output for `check_spec_id_uniqueness.py` showing per-item validation (`✓ REQ-001: Valid`, `✗ DESIGN-002: Missing required field 'related'`), but `scripts/validation/check_spec_id_uniqueness.py:96-107` only checks ID uniqueness and outputs `[PASS] All spec IDs unique across requirements/, design/, tasks/.` or `[FAIL] Duplicate spec IDs detected (see issue #2068): ...`.

## Observations
- `_read_id` restricts regex matching specifically to the first `---` YAML frontmatter block, avoiding false positives on subsequent prose mentions of `id:`.
- Automatically ignores `README.md` (case-insensitive, line 62) within spec category folders.
- Pure standard library Python with no third-party package dependencies.
- Registered as pre-PR gate `Spec ID Uniqueness` in `scripts/validation/pre_pr_sequence.py:298` via `checks_spec.validate_spec_id_uniqueness`.

## Context cost
3658 bytes (~915 tokens) for `scripts/validation/check_spec_id_uniqueness.py`. Isolated script with no project imports. Total context cost: 3658 bytes (~915 tokens).
