---
package: rjm
path: scripts/guard_diff.py
type: script
bytes: 7191
unit: inv-rjm-245
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/guard_diff.py, sha256: a3745f7b8d93313ff30f1db905d2607694d0b873e95d8b87b6fb1b3e74504d64}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/guard_diff.py

## Purpose — required, verbatim
> "Differential guard scanner." — scripts/guard_diff.py:1

## Design intent — required
Compares two revisions of a static guard callable against a shared Python codebase to detect newly introduced detections (guard strengthened) and removed detections (guard lost test coverage). Keying detections on `(relative_path, normalized_source_line_text, occurrence_index)` rather than purely line numbers eliminates false regression alerts caused by harmless line shifts above flagged call sites (Issue #4286).

## Phase — required
cross-phase

## Inputs — required
- Path to Python guard script (`guard_path: Path`).
- Name of guard callable attribute (`attr: str = "unpinned_lines"`).
- Target directory root to scan (`scan_root: Path`).
- Target findings baseline JSON file (`baseline_path: Path`).
- Python source files (`*.py`) read from filesystem.

## Outputs — required
- Dictionary mapping relative paths to sorted line numbers (`dict[str, list[int]]`) from `scan_corpus`.
- Set of normalized, content-keyed findings (`set[Finding]`) from `content_findings` and `load_baseline_findings`.
- Tuple of added and removed finding sets (`tuple[set[Finding], set[Finding]]`) from `diff_findings`.
- Diagnostic error and skip messages printed to `sys.stderr`.

## Invokes — required
none

## Invoked by — required
orphan

## Concepts named — required, verbatim
- `Finding` — scripts/guard_diff.py:50 — defined here
- `GuardFn` — scripts/guard_diff.py:51 — defined here
- `load_guard` — scripts/guard_diff.py:54 — defined here
- `scan_corpus` — scripts/guard_diff.py:73 — defined here
- `content_findings` — scripts/guard_diff.py:99 — defined here
- `diff_findings` — scripts/guard_diff.py:132 — defined here
- `load_baseline_findings` — scripts/guard_diff.py:159 — defined here

## Structure
- `load_guard` — scripts/guard_diff.py:54
- `scan_corpus` — scripts/guard_diff.py:73
- `content_findings` — scripts/guard_diff.py:99
- `diff_findings` — scripts/guard_diff.py:132
- `load_baseline_findings` — scripts/guard_diff.py:159

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/guard_diff.py`, language: Python 3, lines: 177
- documented invocation:
  `"from scripts.guard_diff import load_guard, scan_corpus, diff_findings" — scripts/guard_diff.py:9`
- **executed:** yes
- actual command run: `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python sources/rjm/scripts/guard_diff.py`
  abridged stdout: (empty)
  **actual exit code:** 0
- actual command run (module exercise): `PYTHONPATH=sources/rjm sources/rjm/.venv/bin/python -c "from scripts.guard_diff import diff_findings; b={'a.py': [10]}; a={'a.py': [10, 20]}; added, removed = diff_findings(b, a); print('diff:', added, removed)"`
  abridged stdout: `diff: {('a.py', '20', 0)} set()`
  **actual exit code:** 0
- documented exit codes: none vs. actual exit paths in code:
  - no `sys.exit` calls; raises `ImportError` when guard module specification or loader fails. Standalone module execution exits 0.
- for validators/gates:
  - can it exit non-zero? no direct exit; caller assertions test returned diff sets.
  - does it fail on the source repo's own default branch? no, imports cleanly and runs with exit code 0.
- does the output match what the documentation claims? yes

## Defects — required
- `orphan` · scripts/guard_diff.py:1 · Utility module is not invoked by any in-scope production lifecycle command or script; invoked only by unit test `tests/test_guard_diff.py`.

## Observations
- Isolated module namespace: `load_guard` generates a unique module name per file path using hash (`_guard_diff_rev_{hash}`) to avoid cache collisions in `sys.modules` when comparing revisions (lines 60-63).
- Resilient corpus walk: `scan_corpus` catches both `OSError` (file read failure) and arbitrary guard exceptions, outputting stderr diagnostics while continuing the corpus scan (lines 86-93).
- Baseline format support: `load_baseline_findings` supports v2 structured JSON baselines (`{relative_path: [[text, occ], ...]}`), contrasting with v1 line-number lists (lines 159-176).

## Context cost
7,191 bytes (~1,798 tokens).
