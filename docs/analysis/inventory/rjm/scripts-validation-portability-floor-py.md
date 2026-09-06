---
package: rjm
path: scripts/validation/portability_floor.py
type: script
bytes: 9329
unit: inv-rjm-298
in_scope_via: scripts/validation/portability_baseline.py
aliases: []
memo_inputs:
  - {path: scripts/validation/portability_floor.py, sha256: 880eb845d61bfdbabbe2065af1621f298c96a33719f50ed694a30a69e461f9d7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/portability_floor.py

## Purpose — required, verbatim
> "The evidence a portability ratchet is floored against." — scripts/validation/portability_floor.py:1

## Design intent — required
Provides tamper-resistant baseline reading by establishing the historical floor of violation debt against which any replacement baseline is evaluated. Because the baseline file on disk in the working tree is an input that a malicious or buggy process could alter or truncate before triggering an update, `portability_floor.py` decouples predecessor reading from the write path. It queries the strongest available witness: extracting the committed blob from `git HEAD` via `git cat-file` and comparing it with disk state, always taking the maximum (strongest) count per path across all guarded sections (`files`, `marker_files`, `drift_files`). It strictly validates integer types (rejecting booleans, floats, and negatives), guards against unhandled JSON sections being silently erased, and fails closed whenever git history records that a baseline existed but is missing or unreadable on disk. Without it, zeroing out or corrupting a local baseline file would bypass the ratchet and allow silent debt erasure.

## Phase — required
none

## Inputs — required
- Arguments to module functions:
  - `repo_root: Path` (scripts/validation/portability_floor.py:117, 180)
  - `path: Path` to baseline file (scripts/validation/portability_floor.py:117, 180)
  - `section: object` and `name: str` (scripts/validation/portability_floor.py:42)
  - `data: Mapping[str, Any]` (scripts/validation/portability_floor.py:60)
  - `raw: str` JSON text (scripts/validation/portability_floor.py:80)
  - `disk: Sections | None` and `committed: Sections | None` (scripts/validation/portability_floor.py:157)
- Git object database and commit history via `committed_blob`, `was_recorded`, and `git cat-file blob` (scripts/validation/portability_floor.py:23, 26, 134, 140, 207)
- Disk baseline file contents via `path.read_text()` (scripts/validation/portability_floor.py:205)

## Outputs — required
- In-memory data structures:
  - `Sections = dict[str, dict[str, int]]` parsed section dictionaries (scripts/validation/portability_floor.py:29, 106, 171)
  - `tuple[Sections | None, str | None]` returned by `read_previous_sections`, `_committed_sections`, and `_sections_from_text` (scripts/validation/portability_floor.py:80, 117, 181)
  - `tuple[dict[str, int] | None, str | None]` returned by `_coerce_counts` (scripts/validation/portability_floor.py:42)
  - List of unguarded section names from `_unguarded_sections` (scripts/validation/portability_floor.py:60)
- Diagnostic error and refusal explanation strings (scripts/validation/portability_floor.py:45, 53, 55, 85, 87, 91-95, 144, 149, 153, 211, 213, 216)

## Invokes — required
- script portability_git — scripts/validation/portability_floor.py:22

## Invoked by — required
- script portability_floor — scripts/validation/portability_baseline.py:33

## Concepts named — required, verbatim
- `portability ratchet` — scripts/validation/portability_floor.py:1 — used here
- `portability_baseline` — scripts/validation/portability_floor.py:3 — used here
- `portability_git` — scripts/validation/portability_floor.py:22 — used here
- `Sections` — scripts/validation/portability_floor.py:29 — defined here
- `COUNTED_SECTIONS` — scripts/validation/portability_floor.py:31 — defined here
- `files` — scripts/validation/portability_floor.py:34 — used here
- `marker_files` — scripts/validation/portability_floor.py:34 — used here
- `drift_files` — scripts/validation/portability_floor.py:35 — used here
- `_coerce_counts` — scripts/validation/portability_floor.py:42 — defined here
- `_unguarded_sections` — scripts/validation/portability_floor.py:60 — defined here
- `_sections_from_text` — scripts/validation/portability_floor.py:80 — defined here
- `_committed_sections` — scripts/validation/portability_floor.py:117 — defined here
- `--allow-baseline-shrink` — scripts/validation/portability_floor.py:126 — used here
- `refuse_undiffable_baseline` — scripts/validation/portability_floor.py:132 — used here
- `_strongest` — scripts/validation/portability_floor.py:157 — defined here
- `read_previous_sections` — scripts/validation/portability_floor.py:179 — defined here

## Structure
- `_coerce_counts` — scripts/validation/portability_floor.py:42
- `_unguarded_sections` — scripts/validation/portability_floor.py:60
- `_sections_from_text` — scripts/validation/portability_floor.py:80
- `_committed_sections` — scripts/validation/portability_floor.py:117
- `_strongest` — scripts/validation/portability_floor.py:157
- `read_previous_sections` — scripts/validation/portability_floor.py:179

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/portability_floor.py`, language: Python, lines: 222
- documented invocation:
  - "So the reading lives here, apart from the writing." — scripts/validation/portability_floor.py:8
- executed: yes
- actual command run:
  `python3 -m scripts.validation.portability_floor`
  abridged stdout: `""` (no output; library module)
  actual exit code: 0
- documented exit codes vs actual exit paths:
  Module is a library helper without a CLI `main()` entrypoint or direct `sys.exit()` calls. Returns `(sections, problem)` tuples where `problem` is an explanation string indicating why a baseline write must be refused (e.g. lines 85, 87, 91, 102, 112, 136, 142, 144, 149, 153, 202, 209, 211, 213, 216, 220).
- for validators/gates: can it exit non-zero? It does not call exit directly, but returns diagnostic failure strings for corrupt, missing, or unguarded sections, causing calling validators to exit code 2. Does it fail on default branch? No; unit tests in `test_portability_floor_lookup.py` pass cleanly.
- does output match what documentation claims? Yes; correctly queries git object database and disk to establish predecessor violation counts.

## Defects — required
none

## Observations
Implements predecessor reading decoupled from the write path. To prevent local working tree tampering from lowering ratchet thresholds, `read_previous_sections` loads both the committed blob from git HEAD via `git cat-file blob <sha>` and the local working tree file, and merges them using `_strongest` (taking the maximum count per file). It strictly requires JSON integers (rejecting booleans and floats) and enforces that all dictionary sections in a baseline are recognized in `COUNTED_SECTIONS`, failing closed with an informative error if an unknown section is encountered rather than silently dropping it.

## Context cost
File size: 9329 bytes, 222 lines, ~2100 tokens. Loaded with its imported dependency `scripts/validation/portability_git.py` (15589 bytes), total is ~24918 bytes (~5600 tokens).
