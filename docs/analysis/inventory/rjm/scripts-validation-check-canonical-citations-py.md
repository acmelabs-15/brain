---
package: rjm
path: scripts/validation/check_canonical_citations.py
type: script
bytes: 10555
unit: inv-rjm-277
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_canonical_citations.py, sha256: e4e5b8b622488dcc368c7dea8195de353e5b8a3325a9a07da0b9c67bccef3dd5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_canonical_citations.py

## Purpose — required, verbatim
> "Heuristic check that mirror-claims cite a canonical path." — scripts/validation/check_canonical_citations.py:2

## Design intent — required
Enforces file-level citation discipline for mirror assertions to prevent ungrounded or ambiguous claims of alignment with other sources (addressing the failure mode documented in PR #1887 retrospective). By scanning docstrings and top-level comments in hooks, validation scripts, build scripts, and skills for indicator tokens (such as "matches the", "mirrors the", "aligned with") and verifying that at least one path-like reference is cited within those same areas, it catches uncited mirror claims before they become subtle maintenance bugs. The gate operates as a heuristic that tolerates soft warnings and false positives by default, upgrading to a hard exit-1 failure only when strict mode is explicitly enabled.

## Phase — required
rjm:test

## Inputs — required
- CLI arguments parsed via `parse_args()`:
  - `--repo-root` (default: grandparent's parent directory `Path(__file__).resolve().parent.parent.parent` — scripts/validation/check_canonical_citations.py:293)
  - `--strict` (boolean flag, default: `STRICT_CANONICAL_CHECK` environment variable in `("1", "true")` — scripts/validation/check_canonical_citations.py:280-282)
- Environment variable:
  - `STRICT_CANONICAL_CHECK` (upgrades soft warnings to hard exit code 1 failure — scripts/validation/check_canonical_citations.py:22, 282)
- Target Python files scanned across configured scan roots:
  - `.claude/hooks` (scripts/validation/check_canonical_citations.py:101)
  - `scripts/validation` (scripts/validation/check_canonical_citations.py:102)
  - `build/scripts` (scripts/validation/check_canonical_citations.py:103)
  - `.claude/skills` (scripts/validation/check_canonical_citations.py:104)

## Outputs — required
- Formatted stdout reports:
  - Clean pass notice: `[PASS] No uncited mirror-claims found.` (scripts/validation/check_canonical_citations.py:240)
  - Warning report in soft mode: `[WARN] {len(violations)} uncited mirror-claim(s) found.` (scripts/validation/check_canonical_citations.py:242, 244)
  - Failure report in strict mode: `[FAIL] {len(violations)} uncited mirror-claim(s) found.` (scripts/validation/check_canonical_citations.py:242, 244)
  - Violation lines listing path, matched token, and excerpt (scripts/validation/check_canonical_citations.py:254-256)
  - Skip notice when scan roots are absent: `[SKIP] no scan roots present (.claude/hooks, scripts/validation, build/scripts, .claude/skills).` (scripts/validation/check_canonical_citations.py:302-303)
- Stderr diagnostic messages:
  - `[FAIL] repo root not found: {repo_root}` (scripts/validation/check_canonical_citations.py:296)
  - `[SKIP] unparseable, module docstring not scanned` (scripts/validation/check_canonical_citations.py:162)
- Process exit codes (ADR-035):
  - `0`: success (no violations, or soft warnings when not strict, or no scan roots present) (scripts/validation/check_canonical_citations.py:26, 305, 312)
  - `1`: violations found and `strict=True` (`STRICT_CANONICAL_CHECK=1`) (scripts/validation/check_canonical_citations.py:30, 311)
  - `2`: configuration error when repository root directory is not found (scripts/validation/check_canonical_citations.py:31, 297)

## Invokes — required
- reference canonical-source-mirror.md — scripts/validation/check_canonical_citations.py:4
- doc 2026-05-05-pr-1887-iteration-paradox.md — scripts/validation/check_canonical_citations.py:15

## Invoked by — required
- script check_canonical_citations.py — scripts/validation/checks_spec.py:316
- skill ai-agents-docs-of-record — src/copilot-cli/skills/ai-agents-docs-of-record/SKILL.md:205
- skill ai-agents-docs-of-record — .claude/skills/ai-agents-docs-of-record/SKILL.md:205
- script check_canonical_citations.py — scripts/validation/check_orchestrator_citations.py:19

## Concepts named — required, verbatim
- `canonical-source-mirror.md` — scripts/validation/check_canonical_citations.py:4 — used here
- `PR #1887` — scripts/validation/check_canonical_citations.py:14 — used here
- `iteration-paradox` — scripts/validation/check_canonical_citations.py:15 — used here
- `WARNING` — scripts/validation/check_canonical_citations.py:21 — defined here
- `STRICT_CANONICAL_CHECK` — scripts/validation/check_canonical_citations.py:22 — defined here
- `FAIL` — scripts/validation/check_canonical_citations.py:23 — defined here
- `EXIT CODES` — scripts/validation/check_canonical_citations.py:25 — defined here
- `_MIRROR_TOKENS` — scripts/validation/check_canonical_citations.py:50 — defined here
- `_PATH_REF` — scripts/validation/check_canonical_citations.py:64 — defined here
- `_MODULE_DOCSTRING_RE` — scripts/validation/check_canonical_citations.py:82 — defined here
- `Violation` — scripts/validation/check_canonical_citations.py:90 — defined here
- `_scan_roots` — scripts/validation/check_canonical_citations.py:98 — defined here
- `_iter_python_files` — scripts/validation/check_canonical_citations.py:109 — defined here
- `_extract_docstring_and_top_comments` — scripts/validation/check_canonical_citations.py:118 — defined here
- `_find_mirror_token` — scripts/validation/check_canonical_citations.py:169 — defined here
- `_has_path_reference` — scripts/validation/check_canonical_citations.py:178 — defined here
- `scan_file` — scripts/validation/check_canonical_citations.py:183 — defined here
- `_excerpt_for_token` — scripts/validation/check_canonical_citations.py:213 — defined here
- `collect_violations` — scripts/validation/check_canonical_citations.py:224 — defined here
- `format_report` — scripts/validation/check_canonical_citations.py:237 — defined here
- `parse_args` — scripts/validation/check_canonical_citations.py:267 — defined here
- `main` — scripts/validation/check_canonical_citations.py:287 — defined here
- `ADR-035` — scripts/validation/check_canonical_citations.py:288 — used here

## Structure
- `Violation` — scripts/validation/check_canonical_citations.py:90
- `_scan_roots` — scripts/validation/check_canonical_citations.py:98
- `_iter_python_files` — scripts/validation/check_canonical_citations.py:109
- `_extract_docstring_and_top_comments` — scripts/validation/check_canonical_citations.py:118
- `_find_mirror_token` — scripts/validation/check_canonical_citations.py:169
- `_has_path_reference` — scripts/validation/check_canonical_citations.py:178
- `scan_file` — scripts/validation/check_canonical_citations.py:183
- `_excerpt_for_token` — scripts/validation/check_canonical_citations.py:213
- `collect_violations` — scripts/validation/check_canonical_citations.py:224
- `format_report` — scripts/validation/check_canonical_citations.py:237
- `parse_args` — scripts/validation/check_canonical_citations.py:267
- `main` — scripts/validation/check_canonical_citations.py:287

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_canonical_citations.py`, language: Python, lines: 317
- documented invocation:
  "STRICT_CANONICAL_CHECK=1" — scripts/validation/check_canonical_citations.py:22
- executed: yes
- actual command run: `python3 sources/rjm/scripts/validation/check_canonical_citations.py --repo-root sources/rjm`
  abridged stdout:
  `[WARN] 2 uncited mirror-claim(s) found.`
  `  - sources/rjm/scripts/validation/check_placeholder_identity.py`
  `      token: 'matches the'`
  `  - sources/rjm/.claude/skills/github/scripts/pr/edit_pr_body.py`
  `      token: 'matches the'`
  `Note: this is a soft warning. Set STRICT_CANONICAL_CHECK=1 to upgrade warnings to a hard failure.`
  actual exit code: `0`
  In strict mode: `STRICT_CANONICAL_CHECK=1 python3 sources/rjm/scripts/validation/check_canonical_citations.py --repo-root sources/rjm`
  actual exit code: `1`
  abridged stdout: `[FAIL] 2 uncited mirror-claim(s) found.`
- documented exit codes vs actual exit paths:
  - "0 - Success" — scripts/validation/check_canonical_citations.py:26
  - "1 - Violations found AND STRICT_CANONICAL_CHECK=1" — scripts/validation/check_canonical_citations.py:30
  - "2 - Configuration error" — scripts/validation/check_canonical_citations.py:31
  Actual exit paths in code:
  - `return 2` — scripts/validation/check_canonical_citations.py:297
  - `return 0` — scripts/validation/check_canonical_citations.py:305
  - `return 1` — scripts/validation/check_canonical_citations.py:311
  - `return 0` — scripts/validation/check_canonical_citations.py:312
- for validators/gates:
  - Can it exit non-zero: yes (exit 1 in strict mode with violations, exit 2 on invalid repo root).
  - Does it fail on source repo's default branch: exits 0 in default soft warning mode (with 2 warnings); exits 1 in strict mode due to false positives in placeholder identity check and PR body editing script.
- Does output match documentation: yes.

## Defects — required
none

## Observations
- Heuristic design tradeoffs: Employs a regex fallback `_MODULE_DOCSTRING_RE` to parse docstrings even if AST parsing encounters SyntaxErrors from in-flight edits.
- False positive tolerance: The check explicitly tolerates false positives (e.g. regex descriptions containing "matches the") rather than allowing uncited mirror claims to pass unnoticed.

## Context cost
10555 bytes. Standard library only (`argparse`, `ast`, `os`, `re`, `sys`, `collections.abc`, `dataclasses`, `pathlib`). Approximately 2800 tokens.
