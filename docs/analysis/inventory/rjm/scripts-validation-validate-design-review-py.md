---
package: rjm
path: scripts/validation/validate_design_review.py
type: script
bytes: 3715
unit: inv-rjm-308
in_scope_via: scripts/validation/pre_pr_sequence.py
aliases: []
memo_inputs:
  - {path: scripts/validation/validate_design_review.py, sha256: f661f67d438dac52a7cfbc335a1857408c16601a8a962cb387e637a2420ef671}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/validate_design_review.py

## Purpose — required, verbatim
> "DESIGN-REVIEW frontmatter validation for the pre-PR runner." — scripts/validation/validate_design_review.py:2

## Design intent — required
Validates architectural governance documents (`.agents/architecture/DESIGN-REVIEW-*.md`) to ensure they contain standardized, parseable frontmatter required by the PR submission pipeline and synthesis panel gates. Architecture reviews govern critical design decisions across engineering sessions; malformed frontmatter, missing metadata fields, or inconsistent blocking status can silently allow unreviewed or blocked proposals to merge. The validator checks five mandatory metadata fields (`status`, `priority`, `blocking`, `reviewer`, `date`), validates that `status` and `priority` match authorized enumeration values, and asserts blocking consistency (warning when a status like `BLOCKED`, `NEEDS_ADR`, or `REJECTED` is marked non-blocking).

## Phase — required
rjm:Verification

## Inputs — required
- Target repository root: `repo_root: Path` — scripts/validation/validate_design_review.py:27
- Architecture review directory: `.agents/architecture/` — scripts/validation/validate_design_review.py:40
- Markdown documents matching `DESIGN-REVIEW-*.md` — scripts/validation/validate_design_review.py:43

## Outputs — required
- Standard output: per-file validation results (`[PASS]`, `[FAIL]`, `[WARNING]`) — scripts/validation/validate_design_review.py:58, 65, 72, 79, 85, 91
- Standard output: blocking review warning list that triggers synthesis panel merge blocks — scripts/validation/validate_design_review.py:95, 98
- Return value: boolean `all_passed` (`True` if all files pass or none exist, `False` on any failure) — scripts/validation/validate_design_review.py:36, 100

## Invokes — required
- script _parse_yaml_frontmatter — scripts/validation/yaml_utils.py:18

## Invoked by — required
- script validate_design_review — scripts/validation/pre_pr_sequence.py:108
- script validate_design_review — scripts/validation/pre_pr.py:147

## Concepts named — required, verbatim
- `DESIGN-REVIEW` — scripts/validation/validate_design_review.py:2 — used here
- `_REQUIRED_FRONTMATTER_FIELDS` — scripts/validation/validate_design_review.py:21 — defined here
- `_VALID_STATUSES` — scripts/validation/validate_design_review.py:22 — defined here
- `_VALID_PRIORITIES` — scripts/validation/validate_design_review.py:23 — defined here
- `_BLOCKING_STATUSES` — scripts/validation/validate_design_review.py:24 — defined here
- `validate_design_review_frontmatter` — scripts/validation/validate_design_review.py:27 — defined here

## Structure
none

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/validate_design_review.py`, language: python3, lines: 101
- documented invocation: none (module extracted from `pre_pr.py`; entry point is function `validate_design_review_frontmatter(repo_root)`)
- executed: yes
- actual command run, abridged stdout, actual exit code:
  - Command: `uv run python3 scripts/validation/validate_design_review.py`, stdout: ``, actual exit code: 0
  - Function invocation command: `uv run python3 -c "import sys; from pathlib import Path; sys.path.insert(0, 'scripts/validation'); from validate_design_review import validate_design_review_frontmatter; print('Result:', validate_design_review_frontmatter(Path('.')))"`, stdout: `Validating 11 DESIGN-REVIEW file(s)...\n  [PASS] DESIGN-REVIEW-ADR-042-python-migration.md (status=NEEDS_CHANGES, blocking=False)\n  [PASS] DESIGN-REVIEW-PR-1085-session-log-cwe-fixes.md (status=APPROVED, blocking=False)\n...\nResult: True`, actual exit code: 0
- documented exit codes vs. actual exit paths in code: none documented (returns boolean rather than exit code); direct execution has no `sys.exit()` and exits 0; returns boolean `all_passed` (line 100)
- for validators/gates: returns `False` when missing frontmatter, missing required fields, or invalid enum values occur; returns `True` and passes on the source repository's default branch (11 documents validated)
- does the output match what the documentation claims: yes, validates frontmatter across DESIGN-REVIEW files and returns True

## Defects — required
none

## Observations
Note that blocking consistency check emits a `[WARNING]` (lines 84-86) when a blocking status lacks `blocking: true` rather than causing hard failure, preserving advisory semantics while recording warnings for the synthesis panel gate.

## Context cost
3715 bytes, approximately 950 tokens.
