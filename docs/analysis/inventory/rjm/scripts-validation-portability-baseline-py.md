---
package: rjm
path: scripts/validation/portability_baseline.py
type: script
bytes: 20208
unit: inv-rjm-298
in_scope_via: scripts/validation/portability_common.py
aliases: []
memo_inputs:
  - {path: scripts/validation/portability_baseline.py, sha256: 713e756f9d9bf1db3006bc3cf53182484d338b62c39b18292fd60f1fcba5cca6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/portability_baseline.py

## Purpose — required, verbatim
> "Baseline artifact lifecycle for the portability ratchets." — scripts/validation/portability_baseline.py:1

## Design intent — required
Provides write-side lifecycle protections and safety guards for portability ratchet baseline JSON files (such as `skill_portability_baseline.json` and `skill_md_portability_baseline.json`). While tree coverage checks verify whether a scan observed all required repository directories, this module ensures that a replacement baseline does not silently forgive recorded debt, drop tracked files, or introduce regressions without an explicit `--allow-baseline-shrink` flag. It defends against multiple tampering and failure modes: symlinks redirecting writes outside repository boundaries, `.gitattributes` setting `-diff` or `binary` to conceal count changes from code reviewers, padding baselines beyond forge diff rendering limits (200 KB ceiling), unreadable or corrupt predecessors, and concurrent baseline modifications (via advisory lock and atomic tempfile replacement). Without it, automated ratchet updates could launder debt erasure, wipe baselines during partial checkouts, or conceal regressions from human reviewers.

## Phase — required
none

## Inputs — required
- Arguments to module functions:
  - `repo_root: Path` (scripts/validation/portability_baseline.py:41, 147, 177, 193, 231, 346, 362, 401)
  - `baseline_path: Path` (scripts/validation/portability_baseline.py:177, 193, 231, 362, 402, 450)
  - `payload: Mapping[str, Any]` (scripts/validation/portability_baseline.py:403)
  - `counted: Mapping[str, Mapping[str, int]]` (scripts/validation/portability_baseline.py:404)
  - `previous: Sections | None` (scripts/validation/portability_baseline.py:85)
  - `current: Mapping[str, Mapping[str, int]]` (scripts/validation/portability_baseline.py:86)
  - `unit: str` (scripts/validation/portability_baseline.py:87, 405)
  - `allow_shrink: bool` (scripts/validation/portability_baseline.py:88, 406)
  - `problem: str | None` (scripts/validation/portability_baseline.py:89)
- Git repository attributes checked via `git check-attr -z diff` and `git check-attr diff` (scripts/validation/portability_baseline.py:303, 352)
- Git repository toplevel checked via `git rev-parse --show-toplevel` (scripts/validation/portability_baseline.py:259)
- Environment variables: `GIT_DIR`, `GIT_WORK_TREE`, `GIT_COMMON_DIR` (scripts/validation/portability_baseline.py:66-68, 290)
- Filesystem metadata via `Path.stat().st_size`, `Path.is_symlink()`, `Path.is_junction()`, and `Path.resolve()` (scripts/validation/portability_baseline.py:142, 174, 185, 464)

## Outputs — required
- Return code `int` from `write_baseline_json` (0 on success, 2 on refusal or error — scripts/validation/portability_baseline.py:424, 427, 431, 440, 441)
- Atomic writing of baseline JSON file via `replace_baseline_atomically` (scripts/validation/portability_baseline.py:433-437)
- Advisory write lock file at `.{baseline_name}.write-lock` via `baseline_write_lock` (scripts/validation/portability_baseline.py:420, 422)
- Boolean refusal verdicts from `refuse_dropped_entries`, `refuse_symlinked_baseline`, `refuse_undiffable_baseline`, `refuse_diff_suppressed_baseline`, and `refuse_oversized_baseline` (scripts/validation/portability_baseline.py:84, 193, 231, 362, 449)
- Redirecting path component or None from `find_symlinked_component` (scripts/validation/portability_baseline.py:147)
- Diagnostic messages on stderr when baselines cannot be diffed, are symlinked, drop entries, or exceed reviewability ceilings (scripts/validation/portability_baseline.py:109-115, 127-134, 210-215, 220-225, 261-265, 291-299, 305-309, 312-317, 325-330, 334-340, 377-380, 383-387, 391-396, 439, 468-474)

## Invokes — required
- script portability_baseline_write — scripts/validation/portability_baseline.py:29
- script portability_floor — scripts/validation/portability_baseline.py:33
- script portability_git — scripts/validation/portability_baseline.py:38

## Invoked by — required
- script portability_baseline — scripts/validation/portability_common.py:11

## Concepts named — required, verbatim
- `portability ratchets` — scripts/validation/portability_baseline.py:1 — defined here
- `Tree coverage` — scripts/validation/portability_baseline.py:3 — used here
- `portability_floor` — scripts/validation/portability_baseline.py:14 — used here
- `portability_baseline_write` — scripts/validation/portability_baseline.py:29 — used here
- `portability_git` — scripts/validation/portability_baseline.py:38 — used here
- `COUNTED_SECTIONS` — scripts/validation/portability_baseline.py:46 — used here
- `Sections` — scripts/validation/portability_baseline.py:47 — used here
- `baseline_write_lock` — scripts/validation/portability_baseline.py:48 — used here
- `find_symlinked_component` — scripts/validation/portability_baseline.py:49 — defined here
- `read_previous_sections` — scripts/validation/portability_baseline.py:50 — used here
- `replace_baseline_atomically` — scripts/validation/portability_baseline.py:51 — used here
- `refuse_dropped_entries` — scripts/validation/portability_baseline.py:52 — defined here
- `refuse_oversized_baseline` — scripts/validation/portability_baseline.py:53 — defined here
- `refuse_symlinked_baseline` — scripts/validation/portability_baseline.py:54 — defined here
- `refuse_undiffable_baseline` — scripts/validation/portability_baseline.py:55 — defined here
- `write_baseline_json` — scripts/validation/portability_baseline.py:56 — defined here
- `_GIT_POINTER_VARS` — scripts/validation/portability_baseline.py:65 — defined here
- `--allow-baseline-shrink` — scripts/validation/portability_baseline.py:132 — used here
- `refuse_diff_suppressed_baseline` — scripts/validation/portability_baseline.py:362 — defined here
- `_BASELINE_SIZE_CEILING` — scripts/validation/portability_baseline.py:446 — defined here

## Structure
- `_run_git` — scripts/validation/portability_baseline.py:41
- `_regressions` — scripts/validation/portability_baseline.py:72
- `refuse_dropped_entries` — scripts/validation/portability_baseline.py:84
- `_resolved` — scripts/validation/portability_baseline.py:139
- `find_symlinked_component` — scripts/validation/portability_baseline.py:147
- `_is_redirecting_link` — scripts/validation/portability_baseline.py:172
- `_escaping_parent` — scripts/validation/portability_baseline.py:177
- `refuse_symlinked_baseline` — scripts/validation/portability_baseline.py:193
- `refuse_undiffable_baseline` — scripts/validation/portability_baseline.py:231
- `_diff_attribute` — scripts/validation/portability_baseline.py:346
- `refuse_diff_suppressed_baseline` — scripts/validation/portability_baseline.py:362
- `write_baseline_json` — scripts/validation/portability_baseline.py:400
- `refuse_oversized_baseline` — scripts/validation/portability_baseline.py:449

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/portability_baseline.py`, language: Python, lines: 477
- documented invocation:
  - "The artifact comparison reasons about one file whose" — scripts/validation/portability_baseline.py:10
- executed: yes
- actual command run:
  `python3 -m scripts.validation.portability_baseline`
  abridged stdout: `""` (no output; library module defining ratchet lifecycle functions)
  actual exit code: 0
- documented exit codes vs actual exit paths:
  This file is a library module with no CLI `main()` entrypoint or direct `sys.exit()` calls. The public write function `write_baseline_json` returns `0` on successful write (scripts/validation/portability_baseline.py:441) and `2` on refusal or OSError (scripts/validation/portability_baseline.py:424, 427, 431, 440).
- for validators/gates: can it exit non-zero? `write_baseline_json` returns code 2 on symlink refusal, diff suppression, dropped entries, or write failure. Does it fail on the source repo's own default branch? No; unit and integration tests pass cleanly.
- does output match what documentation claims? Yes, exports functions that enforce tamper-resistant baseline updates and git diffability.

## Defects — required
none

## Observations
This module enforces the write-side integrity of portability baselines. It encapsulates multi-layer defenses against debt evasion: checking symlinks up the entire directory hierarchy (`find_symlinked_component`), refusing un-diffable baselines using `git check-attr` to prevent reviewers from being blinded by `-diff` in `.gitattributes`, bounding baseline file size to under 200 KB (`_BASELINE_SIZE_CEILING`) to prevent diff suppression on web forges, acquiring an advisory file lock (`.{baseline_name}.write-lock`), and performing atomic replacement via sibling temporary files. It contains two distinct implementations of git diff attribute verification: `refuse_undiffable_baseline` (using `git check-attr -z`) and `refuse_diff_suppressed_baseline` (using plain string split), with `write_baseline_json` invoking the latter.

## Context cost
File size: 20208 bytes, 477 lines, ~4500 tokens. When loaded with its imported dependencies `scripts/validation/portability_baseline_write.py` (4695 bytes), `scripts/validation/portability_floor.py` (9329 bytes), and `scripts/validation/portability_git.py` (15589 bytes), total is ~49821 bytes (~11500 tokens).
