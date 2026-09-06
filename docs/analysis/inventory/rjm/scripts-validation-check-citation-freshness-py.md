---
package: rjm
path: scripts/validation/check_citation_freshness.py
type: script
bytes: 15752
unit: inv-rjm-277
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_citation_freshness.py, sha256: 2cabc79d74cce6a5aef3cdbb5db6b92d10164f69e0c58717646e8ca8fe68406a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_citation_freshness.py

## Purpose — required, verbatim
> "Verify ``path:line`` citations on added lines against HEAD content." — scripts/validation/check_citation_freshness.py:2

## Design intent — required
Automates verification of file and line-number citations (`path:line` and `path:line-line`) on newly added lines between a base ref and HEAD (issue #5337). Because code moves as repositories evolve, hard-coded line citations in markdown and comments frequently become stale, pointing to incorrect code or failing to anchor properly. By limiting the inspection scope strictly to added lines (leaving historical commits exempt), resolving cited paths and line spans against repository HEAD, searching for citing anchor tokens (backtick identifiers, quoted phrases, continuation quotes), and providing exact line relocation hints when anchors have shifted, this gate prevents stale documentation and invalid citations from shipping without imposing maintenance friction on untouched historical documents.

## Phase — required
rjm:test

## Inputs — required
- CLI arguments parsed via `build_parser()`:
  - `--repo-root` (default: `.` — scripts/validation/check_citation_freshness.py:385)
  - `--base` (base ref to diff against, default: resolved default base ref via `_resolve_default_base_ref` — scripts/validation/check_citation_freshness.py:402)
- Git repository state:
  - Tracked paths at HEAD via `_head_tracked_paths(repo_root)` (scripts/validation/check_citation_freshness.py:65, 278)
  - Added lines diff between base ref and HEAD via `_added_lines_since_base(repo_root, base_ref)` (scripts/validation/check_citation_freshness.py:64, 281)
  - File contents cached at HEAD via `_HeadFileCache` (scripts/validation/check_citation_freshness.py:66, 285)
- In-source exemption directive:
  - Escape marker `citation-freshness: ignore -- <reason>` on the citation line or preceding line (scripts/validation/check_citation_freshness.py:70, 103, 108)
- Sibling validation modules:
  - `_resolve_default_base_ref` from `checks_common` (scripts/validation/check_citation_freshness.py:51)
  - `_CITATION`, `_URL`, `_anchor_candidates`, `_anchor_matches`, `_atx_heading`, `_context_lines`, `_continuation_quote`, `_same_line_segment` from `citation_anchors` (scripts/validation/check_citation_freshness.py:52-61)
  - `HeadReadError`, `_added_lines_since_base`, `_head_tracked_paths`, `_HeadFileCache` from `citation_head_state` (scripts/validation/check_citation_freshness.py:62-67)
  - `HISTORICAL_ROOTS` from `stale_script_refs` (scripts/validation/check_citation_freshness.py:68)

## Outputs — required
- Formatted stdout reports:
  - Summary progress: `[citation-freshness] examined {citations_checked} citation(s) across {files_scanned} changed file(s) vs {base_ref}` (scripts/validation/check_citation_freshness.py:342)
  - Detailed findings: formatted line `{self.citing_file}:{self.citing_line}: {self.citation}: {self.reason}` (scripts/validation/check_citation_freshness.py:91, 351)
  - Remediation instructions: `[citation-freshness] {len(findings)} stale citation(s). Fix the line numbers against HEAD, or mark a deliberate exception with '{IGNORE_MARKER} -- <reason>' on the citing line or the line directly above it.` (scripts/validation/check_citation_freshness.py:354-357)
  - Benign skip message when no base ref is resolved: `[SKIP] citation-freshness: no base ref resolved; nothing to diff against` (scripts/validation/check_citation_freshness.py:370, 404)
- Diagnostic stderr messages:
  - Missing git repository error: `[citation-freshness] not a git repository: {repo_root}` (scripts/validation/check_citation_freshness.py:399)
  - Git operational read failure: `[citation-freshness] git failed while reading repository state` (scripts/validation/check_citation_freshness.py:374, 409)
  - Git file read failure: `[citation-freshness] git could not read {error} at HEAD` (scripts/validation/check_citation_freshness.py:297)
- Process exit codes (ADR-035):
  - `0`: clean run (no findings), or benign skip (no base ref resolved) (scripts/validation/check_citation_freshness.py:27, 405, 412)
  - `1`: stale citation findings detected (scripts/validation/check_citation_freshness.py:30, 412)
  - `2`: configuration error (not a git repository, or git subprocess execution error) (scripts/validation/check_citation_freshness.py:31, 400, 410)
- Python function return values:
  - `validate_citation_freshness(repo_root)` returns `bool` (`True` if clean or skipped, `False` on findings or failure) (scripts/validation/check_citation_freshness.py:361, 377)

## Invokes — required
- script checks_common — scripts/validation/check_citation_freshness.py:51
- script citation_anchors — scripts/validation/check_citation_freshness.py:52
- script citation_head_state — scripts/validation/check_citation_freshness.py:62
- script stale_script_refs — scripts/validation/check_citation_freshness.py:68
- doc canonical-source-mirror.md — scripts/validation/check_citation_freshness.py:5
- doc ci-scripts.md — scripts/validation/check_citation_freshness.py:19

## Invoked by — required
- script check_citation_freshness — scripts/validation/pre_pr.py:74
- script check_citation_freshness — scripts/validation/pre_pr_sequence.py:45
- instruction canonical-source-mirror.instructions.md — src/copilot-cli/instructions/canonical-source-mirror.instructions.md:80
- test test_check_citation_freshness.py — tests/validation/test_check_citation_freshness.py:5

## Concepts named — required, verbatim
- `canonical-source-mirror.md` — scripts/validation/check_citation_freshness.py:5 — used here
- `issue #5337` — scripts/validation/check_citation_freshness.py:5 — used here
- `stale_script_refs` — scripts/validation/check_citation_freshness.py:16 — used here
- `HISTORICAL_ROOTS` — scripts/validation/check_citation_freshness.py:17 — used here
- `ci-scripts.md` — scripts/validation/check_citation_freshness.py:19 — used here
- `citation-freshness: ignore` — scripts/validation/check_citation_freshness.py:24 — defined here
- `EXIT CODES` — scripts/validation/check_citation_freshness.py:27 — defined here
- `ADR-035` — scripts/validation/check_citation_freshness.py:27 — used here
- `checks_common` — scripts/validation/check_citation_freshness.py:43 — used here
- `citation_anchors` — scripts/validation/check_citation_freshness.py:52 — used here
- `citation_head_state` — scripts/validation/check_citation_freshness.py:62 — used here
- `IGNORE_MARKER` — scripts/validation/check_citation_freshness.py:70 — defined here
- `_FIXTURE_FRAGMENTS` — scripts/validation/check_citation_freshness.py:73 — defined here
- `_EXTRA_HISTORICAL_ROOTS` — scripts/validation/check_citation_freshness.py:78 — defined here
- `Finding` — scripts/validation/check_citation_freshness.py:81 — defined here
- `_is_exempt_citing_file` — scripts/validation/check_citation_freshness.py:94 — defined here
- `_IGNORE_WITH_REASON` — scripts/validation/check_citation_freshness.py:103 — defined here
- `_has_ignore_marker` — scripts/validation/check_citation_freshness.py:106 — defined here
- `_resolve_cited_range` — scripts/validation/check_citation_freshness.py:118 — defined here
- `_citation_anchors` — scripts/validation/check_citation_freshness.py:150 — defined here
- `_relocation_hint` — scripts/validation/check_citation_freshness.py:174 — defined here
- `_anchor_finding` — scripts/validation/check_citation_freshness.py:193 — defined here
- `_check_citation` — scripts/validation/check_citation_freshness.py:218 — defined here
- `find_stale_citations` — scripts/validation/check_citation_freshness.py:276 — defined here
- `_scan_added_lines` — scripts/validation/check_citation_freshness.py:303 — defined here
- `_report_findings` — scripts/validation/check_citation_freshness.py:348 — defined here
- `validate_citation_freshness` — scripts/validation/check_citation_freshness.py:361 — defined here
- `build_parser` — scripts/validation/check_citation_freshness.py:380 — defined here
- `main` — scripts/validation/check_citation_freshness.py:394 — defined here

## Structure
- `Finding` — scripts/validation/check_citation_freshness.py:81
- `_is_exempt_citing_file` — scripts/validation/check_citation_freshness.py:94
- `_has_ignore_marker` — scripts/validation/check_citation_freshness.py:106
- `_resolve_cited_range` — scripts/validation/check_citation_freshness.py:118
- `_citation_anchors` — scripts/validation/check_citation_freshness.py:150
- `_relocation_hint` — scripts/validation/check_citation_freshness.py:174
- `_anchor_finding` — scripts/validation/check_citation_freshness.py:193
- `_check_citation` — scripts/validation/check_citation_freshness.py:218
- `find_stale_citations` — scripts/validation/check_citation_freshness.py:276
- `_scan_added_lines` — scripts/validation/check_citation_freshness.py:303
- `_report_findings` — scripts/validation/check_citation_freshness.py:348
- `validate_citation_freshness` — scripts/validation/check_citation_freshness.py:361
- `build_parser` — scripts/validation/check_citation_freshness.py:380
- `main` — scripts/validation/check_citation_freshness.py:394

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_citation_freshness.py`, language: Python, lines: 417
- documented invocation:
  "citation-freshness: ignore" — scripts/validation/check_citation_freshness.py:24
- executed: yes
- actual command run: `sources/rjm/.venv/bin/python3 sources/rjm/scripts/validation/check_citation_freshness.py --repo-root sources/rjm`
  abridged stdout: `[citation-freshness] examined 0 citation(s) across 0 changed file(s) vs refs/remotes/origin/HEAD`
  actual exit code: `0`
  With non-git repo root: `sources/rjm/.venv/bin/python3 sources/rjm/scripts/validation/check_citation_freshness.py --repo-root /tmp`
  abridged stdout: `[citation-freshness] not a git repository: /private/tmp` (on stderr)
  actual exit code: `2`
- documented exit codes vs actual exit paths:
  - "0 = no findings" — scripts/validation/check_citation_freshness.py:27
  - "1 = findings" — scripts/validation/check_citation_freshness.py:30-31
  - "2 = configuration error" — scripts/validation/check_citation_freshness.py:31
  Actual exit paths in code:
  - `return 2` — scripts/validation/check_citation_freshness.py:400
  - `return 0` — scripts/validation/check_citation_freshness.py:405
  - `return 2` — scripts/validation/check_citation_freshness.py:410
  - `return 1 if findings else 0` — scripts/validation/check_citation_freshness.py:412
- for validators/gates:
  - Can it exit non-zero: yes (exit 1 when findings exist, exit 2 on git or configuration error).
  - Does it fail on source repo's default branch: no, exits 0 cleanly.
- Does output match documentation: yes.

## Defects — required
none

## Observations
- Relocation assistance: Provides automated suggestions (`_relocation_hint`) by scanning for the moved anchor text across single lines and 2-line sliding windows, accelerating author remediation.
- Modular architecture: Factored heavy git operations and anchor extraction logic into sibling modules (`citation_head_state.py` and `citation_anchors.py`) to remain within strict module size constraints.

## Context cost
15752 bytes. Transitive module imports: `checks_common.py`, `citation_anchors.py`, `citation_head_state.py`, `stale_script_refs.py`. Approximately 4000 tokens.
