---
package: rjm
path: scripts/validation/check_skill_md_drift.py
type: script
bytes: 15824
unit: inv-rjm-285
in_scope_via: scripts/validation/check_skill_md_portability.py
aliases: []
memo_inputs:
  - {path: scripts/validation/check_skill_md_drift.py, sha256: 6b40fae460dc8dfe9dcc290ea47974ca5af1f625d54bcd0d897c62e4d6d41155}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_skill_md_drift.py

## Purpose — required, verbatim
> "Marker path-drift validation for vendor-portability markers (issue #4116)." — scripts/validation/check_skill_md_drift.py:1

## Design intent — required
Provides marker path-drift detection and ratchet gating for vendor-portability markers in skill Markdown files. Extracted from `check_skill_md_portability.py` to respect the 500-line file-size ceiling under issue #4116, this module isolates path extraction from marker and prose spans, validates that paths declared in `<!-- vendor-portability: ... -->` comments match referenced paths, detects stale declarations, catches undeclared prose references, and verifies that declared or referenced paths actually exist in the repository git index (with exemptions for consumer workspace paths and declared build artifacts). It also implements ratchet baseline comparisons (`_load_drift_baseline`, `diff_drift_baseline`, `report_drift_ratchet`) to ensure non-regression across code reviews and baseline updates.

## Phase — required
none

## Inputs — required
- Markdown text from skill files (`text`) passed to path extraction and drift functions — scripts/validation/check_skill_md_drift.py:172
- Repository root path (`repo_root`) to resolve and verify tracked file existence — scripts/validation/check_skill_md_drift.py:229
- Markdown code stripping callables (`strip_code_fn`) injected from callers — scripts/validation/check_skill_md_drift.py:173
- Baseline JSON file containing allowed drift counts loaded by `_load_drift_baseline` — scripts/validation/check_skill_md_drift.py:334

## Outputs — required
- List of human-readable path-drift failure strings (empty list when clean) returned by `marker_path_drift` — scripts/validation/check_skill_md_drift.py:227
- Aggregated drift counts mapping file paths to integer failure counts from `drift_counts_from_failures` — scripts/validation/check_skill_md_drift.py:380
- Tuple of regression and improvement lists returned by `diff_drift_baseline` — scripts/validation/check_skill_md_drift.py:353
- Standard output emissions reporting drift regressions and improvements in `report_drift_ratchet` — scripts/validation/check_skill_md_drift.py:390

## Invokes — required
- script tracked_paths — scripts/validation/check_skill_md_drift.py:17

## Invoked by — required
- script check_skill_md_drift — scripts/validation/check_skill_md_portability.py:420
- script check_skill_md_drift — tests/validation/test_check_skill_md_drift.py:1
- script check_skill_md_drift — tests/validation/test_tracked_paths.py:19

## Concepts named — required, verbatim
- `path_exists_in_repo` — scripts/validation/check_skill_md_drift.py:17 — used here
- `_CONSUMER_WORKSPACE_PATHS` — scripts/validation/check_skill_md_drift.py:23 — defined here
- `_GENERATED_ARTIFACTS` — scripts/validation/check_skill_md_drift.py:34 — defined here
- `_MARKER_PATTERN` — scripts/validation/check_skill_md_drift.py:39 — defined here
- `_HTML_COMMENT_PATTERN` — scripts/validation/check_skill_md_drift.py:45 — defined here
- `_strip_html_comments` — scripts/validation/check_skill_md_drift.py:51 — defined here
- `_PATH_CHAR` — scripts/validation/check_skill_md_drift.py:57 — defined here
- `_SIMPLE_ANCHOR` — scripts/validation/check_skill_md_drift.py:58 — defined here
- `_KNOWN_SUBDIRS` — scripts/validation/check_skill_md_drift.py:59 — defined here
- `_extract_paths_from_text` — scripts/validation/check_skill_md_drift.py:69 — defined here
- `_is_phrase` — scripts/validation/check_skill_md_drift.py:98 — defined here
- `_is_valid_path` — scripts/validation/check_skill_md_drift.py:110 — defined here
- `marker_declared_paths` — scripts/validation/check_skill_md_drift.py:171 — defined here
- `prose_declared_paths` — scripts/validation/check_skill_md_drift.py:192 — defined here
- `_is_consumer_workspace_path` — scripts/validation/check_skill_md_drift.py:213 — defined here
- `marker_path_drift` — scripts/validation/check_skill_md_drift.py:227 — defined here
- `_is_path_contained` — scripts/validation/check_skill_md_drift.py:325 — defined here
- `_load_drift_baseline` — scripts/validation/check_skill_md_drift.py:334 — defined here
- `diff_drift_baseline` — scripts/validation/check_skill_md_drift.py:353 — defined here
- `drift_counts_from_failures` — scripts/validation/check_skill_md_drift.py:380 — defined here
- `report_drift_ratchet` — scripts/validation/check_skill_md_drift.py:390 — defined here

## Structure
- Module docstring and issue citation — scripts/validation/check_skill_md_drift.py:1-8
- Imports and consumer workspace / generated artifact exemptions — scripts/validation/check_skill_md_drift.py:10-36
- Regex patterns and HTML comment stripping — scripts/validation/check_skill_md_drift.py:38-54
- Path extraction engine and path validation helpers — scripts/validation/check_skill_md_drift.py:56-169
- Marker and prose declared path extractors — scripts/validation/check_skill_md_drift.py:171-210
- Consumer workspace path predicate — scripts/validation/check_skill_md_drift.py:213-225
- Marker path-drift validator and containment checker — scripts/validation/check_skill_md_drift.py:227-332
- Drift baseline loading, diffing, aggregation, and ratchet reporting — scripts/validation/check_skill_md_drift.py:334-409

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_skill_md_drift.py`, language: Python 3, lines: 409
- documented invocation:
  - "Extracted from check_skill_md_portability.py to respect the 500-line file-size" — scripts/validation/check_skill_md_drift.py:3
- executed: yes
- actual command run: `python3 -m scripts.validation.check_skill_md_drift`
- abridged stdout:
```
(clean module load with exit code 0)
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - "ceiling. This module provides:" — scripts/validation/check_skill_md_drift.py:4
  - Actual exit paths:
    - line 338: `raise ValueError("Baseline must be a JSON object")`
    - line 347: `raise ValueError(f"Drift baseline count for {key!r} is not an integer") from exc`
    - no direct `sys.exit()` calls; returns structured results (`list[str]`, `dict[str, int]`, `tuple[list[str], list[str]]`) to callers
- for validators/gates:
  - can it exit non-zero: module has no CLI entry point; validation functions raise `ValueError` on malformed inputs and return non-empty failure lists on drift
  - does it fail on source repo default branch: clean when invoked via `check_skill_md_portability.py` against default branch
- does output match what documentation claims: yes, cleanly exports drift validation functions without side effects

## Defects — required
- `doc-drift` · "Comparison is case-sensitive (Linux filesystem semantics)." — scripts/validation/check_skill_md_drift.py:248 · on case-insensitive filesystems (such as macOS APFS), the filesystem fallback in `tracked_paths.py` allows case-mismatched paths to pass existence checks in non-git directories, contradicting the documented Linux filesystem case-sensitivity guarantee.

## Observations
- Component-based prefix checking in `_is_consumer_workspace_path` prevents directory spoofing (e.g. `.agents/sessions` matches `.agents/sessions/foo` but rejects `.agents/sessions-evil/bar`).
- Strict containment verification via `_is_path_contained` ensures symlink resolution does not escape the repository boundary.
- Single-segment prefixes (`.agents`, `build`, `scripts`) require separator plus continuation to avoid false matches on bare English words, and slash-separated English phrases are filtered by `_is_phrase`.

## Context cost
15824 bytes, 409 lines, ~3950 tokens. Loads `scripts/validation/tracked_paths.py` (6579 bytes); total context ~22403 bytes, ~5600 tokens.
