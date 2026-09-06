---
package: rjm
path: scripts/validation/check_skill_md_portability.py
type: script
bytes: 62742
unit: inv-rjm-286
in_scope_via: docs/workflow-commands.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_skill_md_portability.py

## Purpose — required, verbatim
> "Markdown vendor-portability ratchet for skill instruction files (issue #2050)." — scripts/validation/check_skill_md_portability.py:3

## Design intent — required
Establishes an automated, ratchet-based regression gate across Markdown prose in skill instruction files, reference docs, commands, and generated instruction mirrors to prevent non-portable upstream path dependencies from leaking into vendored consumer environments. While companion script `check_skill_portability.py` scopes strictly to executable scripts (`*.py`, `*.sh`, `*.ps1`), instruction prose also carries runtime directives directing agents or users to inspect, run, or write to paths. In vendored distributions (such as Copilot CLI plugins or external consumers), repository-internal directories like `.agents/`, `.claude/lib/`, `.claude/review-axes/`, `build/`, `scripts/`, `templates/agents/`, and `templates/platforms/` do not exist, causing agent actions targeting them to fail silently. The validator scans all shipped plugin roots (`.claude/skills`, `src/copilot-cli/skills`) and extra scan directories (`.claude/commands`, `templates/agents`, `src/copilot-cli/instructions`), stripping fenced and indented code blocks via CommonMark parsing while preserving prose and inline code. It grandfathered legacy references in a baseline JSON file (`skill_md_portability_baseline.json`), supports deliberate, machine-readable opt-outs via HTML comment markers (`<!-- vendor-portability: <free text> -->`) with exact-count suppression tracking and path-drift validation, and enforces a semantic baseline-conflict guard against PR branches that co-change baselines and measured inputs. Without it, upstream path references would silently proliferate throughout instruction prose, breaking prompt execution for external consumers.

## Phase — required
rjm:test

## Inputs — required
- Command-line arguments parsed via `build_parser()` (scripts/validation/check_skill_md_portability.py:742-765) and `build_portability_parser()` from `portability_common`:
  - `--repo-root` (CLI argument, resolved via `_resolve_root` — scripts/validation/check_skill_md_portability.py:1385)
  - `--baseline` (default: `skill_md_portability_baseline.json` — scripts/validation/check_skill_md_portability.py:274, resolved via `_resolve_baseline_path` — scripts/validation/check_skill_md_portability.py:1098)
  - `--update-baseline` (flag: rewrite baseline to current state and exit 0 — scripts/validation/check_skill_md_portability.py:743, 1403-1407)
  - `--allow-baseline-shrink` (flag: permit baseline rewrite that drops recorded entries — scripts/validation/check_skill_md_portability.py:743, 1316, 1328)
  - `--output-format` (`{human,json}`, default: human — scripts/validation/check_skill_md_portability.py:743, 1242, 1258)
  - `--base-ref` (git ref to diff working tree against for semantic baseline-conflict guard — scripts/validation/check_skill_md_portability.py:745-754, 1409-1422)
  - `--allow-marker-grow` (flag: allow total marker suppressed-ref count to increase during update — scripts/validation/check_skill_md_portability.py:756-764, 1323)
- On-disk Markdown files matching `.md` under scanned trees (scripts/validation/check_skill_md_portability.py:45-70, 278-327, 446-468, 659-688):
  - Plugin roots `skills/` trees: `.claude/skills/`, `src/copilot-cli/skills/`, `src/claude/skills/` (if present) (`PLUGIN_ROOTS`, scripts/validation/check_skill_md_portability.py:283, 659)
  - Extra scan roots: `.claude/commands/`, `templates/agents/`, `src/copilot-cli/instructions/` (`EXTRA_SCAN_ROOTS`, scripts/validation/check_skill_md_portability.py:312-316, 674)
- On-disk baseline file:
  - `scripts/validation/skill_md_portability_baseline.json` containing JSON with `files`, `marker_files`, and optional `drift_files` sections (scripts/validation/check_skill_md_portability.py:40, 274, 1102-1115, 1424-1430)
- Git repository state (when `--base-ref` is provided):
  - `git diff --name-only <base_ref>...HEAD` (scripts/validation/check_skill_md_portability.py:830-838)
  - `git ls-files --others --exclude-standard` (scripts/validation/check_skill_md_portability.py:848-856)
  - `git show <base_ref>:<rel>` (scripts/validation/check_skill_md_portability.py:967-975)
- Git commit tree state (during `--update-baseline`):
  - Previous committed section state via `read_previous_sections(root, baseline_path)` from `portability_floor` (scripts/validation/check_skill_md_portability.py:125, 1161)

## Outputs — required
- Formatted stdout reports:
  - Clean report (human format):
    > "No Markdown vendor-portability drift. " — scripts/validation/check_skill_md_portability.py:1286
    > "grandfathered refs across " — scripts/validation/check_skill_md_portability.py:1287
    > "Scanned" — scripts/validation/check_skill_md_portability.py:1289
  - Regression report (human format):
    > "Markdown vendor-portability drift detected (issue #2050):" — scripts/validation/check_skill_md_portability.py:1280
    > "  [DRIFT]" — scripts/validation/check_skill_md_portability.py:1282
  - Improvement report (human format):
    > "Portability improved (tighten the baseline with --update-baseline):" — scripts/validation/check_skill_md_portability.py:1276
    > "  [IMPROVED]" — scripts/validation/check_skill_md_portability.py:1278
  - JSON format output (when `--output-format json`):
    JSON dictionary with `regressions`, `improvements`, `current_total`, `baseline_total`, `scanned_by_root` (scripts/validation/check_skill_md_portability.py:1259-1270)
  - Baseline rewrite summary:
    > "Baseline written:" — scripts/validation/check_skill_md_portability.py:1228
- Formatted stderr reports:
  - Missing required skills root:
    > "Required skills dir not found under" — scripts/validation/check_skill_md_portability.py:1373
  - Missing required scan dir:
    > "Required scan dir not found under" — scripts/validation/check_skill_md_portability.py:1378
  - Empty required extra root:
    > "Required scan dir under" — scripts/validation/check_skill_md_portability.py:1355
  - Marker files growth refused:
    > "Refusing --update-baseline: marker_files total grew from " — scripts/validation/check_skill_md_portability.py:1170
  - Semantic baseline conflict:
    > "Semantic baseline conflict (issue #4195):" — scripts/validation/check_skill_md_portability.py:1059
  - Scanner changed warning:
    > "Scanner source changed, so the recorded counts were produced under " — scripts/validation/check_skill_md_portability.py:1034
  - Ref counts raised warning:
    > "Counts rose above the baseline recorded at" — scripts/validation/check_skill_md_portability.py:1048
  - External failure:
    > "External failure:" — scripts/validation/check_skill_md_portability.py:1459
- Files written (when `--update-baseline` is specified):
  - `scripts/validation/skill_md_portability_baseline.json` rewritten with updated `files`, `marker_files`, and optional `drift_files` objects via `write_baseline_json` (scripts/validation/check_skill_md_portability.py:1180-1232)
- Process exit codes:
  - `0`: no drift (counts at or below baseline), or baseline updated successfully (scripts/validation/check_skill_md_portability.py:72, 1232, 1452)
  - `1`: drift detected (count exceeded baseline, new offender, marker drift, or fatal semantic baseline conflict) (scripts/validation/check_skill_md_portability.py:73, 1422, 1452)
  - `2`: configuration error (missing required skills/extra root, empty required extra root, unresolvable or unreadable baseline, unsafe baseline write refused, marker files growth refused, unreadable scan root) (scripts/validation/check_skill_md_portability.py:74, 1318, 1324, 1360, 1374, 1379, 1391, 1395, 1401, 1414, 1430)
  - `3`: external git query failure (`GitQueryError` caught in `_run()`) (scripts/validation/check_skill_md_portability.py:1460)

## Invokes — required
- script markdown_parser — scripts/validation/check_skill_md_portability.py:90
- script check_skill_md_drift — scripts/validation/check_skill_md_portability.py:94
- script portability_common — scripts/validation/check_skill_md_portability.py:106
- script portability_floor — scripts/validation/check_skill_md_portability.py:125
- script tracked_paths — scripts/validation/check_skill_md_portability.py:128
- config skill_md_portability_baseline.json — scripts/validation/check_skill_md_portability.py:274

## Invoked by — required
- script checks_spec — scripts/validation/checks_spec.py:125
- config validate-vendor-portability.yml — .github/workflows/validate-vendor-portability.yml:49
- reference plugin-self-containment.instructions.md — src/copilot-cli/instructions/plugin-self-containment.instructions.md:168
- config skill_md_portability_baseline.json — scripts/validation/skill_md_portability_baseline.json:2
- script check_skill_md_drift.py — scripts/validation/check_skill_md_drift.py:3

## Concepts named — required, verbatim
- `taste-lint` — scripts/validation/check_skill_md_portability.py:2 — used here
- `file-size` — scripts/validation/check_skill_md_portability.py:2 — used here
- `Markdown vendor-portability ratchet` — scripts/validation/check_skill_md_portability.py:3 — defined here
- `check_skill_portability.py` — scripts/validation/check_skill_md_portability.py:5 — used here
- `SKILL.md` — scripts/validation/check_skill_md_portability.py:12 — used here
- `REQ-008-06` — scripts/validation/check_skill_md_portability.py:17 — used here
- `paths.py` — scripts/validation/check_skill_md_portability.py:25 — used here
- `Machine-readable opt-out` — scripts/validation/check_skill_md_portability.py:27 — defined here
- `vendor-portability` — scripts/validation/check_skill_md_portability.py:31 — defined here
- `Baseline ratchet` — scripts/validation/check_skill_md_portability.py:39 — defined here
- `skill_md_portability_baseline.json` — scripts/validation/check_skill_md_portability.py:40 — used here
- `PLUGIN_ROOTS` — scripts/validation/check_skill_md_portability.py:46 — defined here
- `EXTRA_SCAN_ROOTS` — scripts/validation/check_skill_md_portability.py:47 — defined here
- `generate_commands.py` — scripts/validation/check_skill_md_portability.py:51 — used here
- `generate_agents.py` — scripts/validation/check_skill_md_portability.py:54 — used here
- `generate_rules.py` — scripts/validation/check_skill_md_portability.py:57 — used here
- `MarkdownNestingError` — scripts/validation/check_skill_md_portability.py:91 — used here
- `blank_code_block_lines` — scripts/validation/check_skill_md_portability.py:92 — used here
- `_load_drift_baseline` — scripts/validation/check_skill_md_portability.py:95 — used here
- `drift_counts_from_failures` — scripts/validation/check_skill_md_portability.py:98 — used here
- `marker_path_drift` — scripts/validation/check_skill_md_portability.py:101 — used here
- `report_drift_ratchet` — scripts/validation/check_skill_md_portability.py:104 — used here
- `build_portability_parser` — scripts/validation/check_skill_md_portability.py:107 — used here
- `refuse_symlinked_scan_root` — scripts/validation/check_skill_md_portability.py:108 — used here
- `refuse_unsafe_baseline_write` — scripts/validation/check_skill_md_portability.py:109 — used here
- `resolve_path_within_root` — scripts/validation/check_skill_md_portability.py:110 — used here
- `write_baseline_json` — scripts/validation/check_skill_md_portability.py:111 — used here
- `read_previous_sections` — scripts/validation/check_skill_md_portability.py:126 — used here
- `GitQueryError` — scripts/validation/check_skill_md_portability.py:128 — used here
- `UPSTREAM_PATTERNS` — scripts/validation/check_skill_md_portability.py:239 — defined here
- `REQUIRED_SKILLS_ROOTS` — scripts/validation/check_skill_md_portability.py:290 — defined here
- `REQUIRED_EXTRA_ROOTS` — scripts/validation/check_skill_md_portability.py:326 — defined here
- `has_portability_marker` — scripts/validation/check_skill_md_portability.py:329 — defined here
- `_strip_code` — scripts/validation/check_skill_md_portability.py:338 — defined here
- `_strip_inline_code` — scripts/validation/check_skill_md_portability.py:360 — defined here
- `count_upstream_refs` — scripts/validation/check_skill_md_portability.py:365 — defined here
- `count_file_refs` — scripts/validation/check_skill_md_portability.py:378 — defined here
- `count_marker_suppressed_refs` — scripts/validation/check_skill_md_portability.py:389 — defined here
- `MarkdownScan` — scripts/validation/check_skill_md_portability.py:426 — defined here
- `scan_skill_markdown` — scripts/validation/check_skill_md_portability.py:471 — defined here
- `skills_dirs` — scripts/validation/check_skill_md_portability.py:507 — defined here
- `extra_scan_dirs` — scripts/validation/check_skill_md_portability.py:543 — defined here
- `missing_required_roots` — scripts/validation/check_skill_md_portability.py:578 — defined here
- `missing_required_extra_roots` — scripts/validation/check_skill_md_portability.py:593 — defined here
- `scan_all` — scripts/validation/check_skill_md_portability.py:611 — defined here
- `scan_plugin_roots` — scripts/validation/check_skill_md_portability.py:692 — defined here
- `scanned_markdown_by_root` — scripts/validation/check_skill_md_portability.py:698 — defined here
- `scan_marker_suppressions` — scripts/validation/check_skill_md_portability.py:709 — defined here
- `diff_against_baseline` — scripts/validation/check_skill_md_portability.py:730 — defined here
- `baseline-conflict guard` — scripts/validation/check_skill_md_portability.py:749 — defined here
- `_MEASURED_SCANNER_FILES` — scripts/validation/check_skill_md_portability.py:771 — defined here
- `_is_skill_markdown` — scripts/validation/check_skill_md_portability.py:802 — defined here
- `check_semantic_baseline_conflict` — scripts/validation/check_skill_md_portability.py:891 — defined here
- `diff_marker_baseline` — scripts/validation/check_skill_md_portability.py:1118 — defined here
- `_refuse_marker_files_growth` — scripts/validation/check_skill_md_portability.py:1139 — defined here
- `_write_baseline` — scripts/validation/check_skill_md_portability.py:1180 — defined here
- `_report` — scripts/validation/check_skill_md_portability.py:1235 — defined here
- `_run_update_baseline` — scripts/validation/check_skill_md_portability.py:1293 — defined here
- `_require_nonempty_extra_roots` — scripts/validation/check_skill_md_portability.py:1332 — defined here
- `_check_required_roots_exist` — scripts/validation/check_skill_md_portability.py:1363 — defined here

## Structure
- Docstring module description and scope specification — scripts/validation/check_skill_md_portability.py:3-75
- Module imports and shared validator dependencies — scripts/validation/check_skill_md_portability.py:77-128
- Upstream path regex patterns and boundary anchors — scripts/validation/check_skill_md_portability.py:130-264
- Marker pattern and plugin/extra scan root declarations — scripts/validation/check_skill_md_portability.py:266-327
- Code stripping and reference counting functions — scripts/validation/check_skill_md_portability.py:329-402
- Marker path-drift delegation wrappers — scripts/validation/check_skill_md_portability.py:404-424
- Markdown traversal and directory scanning logic — scripts/validation/check_skill_md_portability.py:426-728
- Baseline difference evaluation and CLI argument parser — scripts/validation/check_skill_md_portability.py:730-765
- Semantic baseline conflict detection and git inspection — scripts/validation/check_skill_md_portability.py:768-1066
- Execution orchestration, baseline update, and report formatting — scripts/validation/check_skill_md_portability.py:1068-1381
- Main entry point, exception wrapping, and exit handling — scripts/validation/check_skill_md_portability.py:1383-1465

## Scripts — required if type is script or the skill ships scripts
For scripts/validation/check_skill_md_portability.py:
- path, language, lines: `scripts/validation/check_skill_md_portability.py`, Python 3, 1465 lines
- documented invocation (verbatim, path:line):
  - > "check_skill_md_portability.py --update-baseline" — scripts/validation/check_skill_md_portability.py:1203
  - > "uv run python scripts/validation/check_skill_md_portability.py" — src/copilot-cli/instructions/plugin-self-containment.instructions.md:168
  - > "run: uv run --frozen python scripts/validation/check_skill_md_portability.py" — .github/workflows/validate-vendor-portability.yml:49
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - Command: `uv run python scripts/validation/check_skill_md_portability.py`
  - Exit code: `0`
  - Abridged stdout:
    ```
    No Markdown vendor-portability drift. 348 grandfathered refs across 105 files (baseline 348). Scanned .claude/skills (353), src/copilot-cli/skills (363), .claude/commands (26), templates/agents (31), src/copilot-cli/instructions (23).
    ```
  - Command: `uv run python scripts/validation/check_skill_md_portability.py --help`
  - Exit code: `0`
  - Command: `python3 scripts/validation/check_skill_md_portability.py` (without virtual environment dependencies installed)
  - Exit code: `1` (`ModuleNotFoundError: No module named 'markdown_it'`)
- documented exit codes (verbatim) vs. actual exit paths in code (`path:line` for each `exit`/`sys.exit`/`process.exit`):
  - Documented:
    - > "0 - no drift (counts at or below baseline), or --update-baseline wrote the file" — scripts/validation/check_skill_md_portability.py:72
    - > "1 - drift detected (a file exceeds its baseline or a new file offends)" — scripts/validation/check_skill_md_portability.py:73
    - > "2 - configuration error (skills dir missing, baseline unreadable)" — scripts/validation/check_skill_md_portability.py:74
  - Actual exit paths:
    - Exit 0: `return 1 if regressions else 0` — scripts/validation/check_skill_md_portability.py:1452; `return 0` on successful baseline write — scripts/validation/check_skill_md_portability.py:1232 (invoked by `_run_update_baseline` — scripts/validation/check_skill_md_portability.py:1293)
    - Exit 1: `return 1 if regressions else 0` — scripts/validation/check_skill_md_portability.py:1452; `return 1` on semantic baseline conflict — scripts/validation/check_skill_md_portability.py:1422
    - Exit 2: `return missing_root_exit` (exit 2) — scripts/validation/check_skill_md_portability.py:1388 (defined at lines 1374, 1379); `return 2` on baseline resolution failure — scripts/validation/check_skill_md_portability.py:1391; `return 2` on scan failure — scripts/validation/check_skill_md_portability.py:1395; `return empty_required_exit` (exit 2) — scripts/validation/check_skill_md_portability.py:1401 (defined at line 1360); `return 2` on unsafe baseline write refusal or marker growth refusal — scripts/validation/check_skill_md_portability.py:1318, 1324; `return rc` (code 2) if `write_baseline_json` fails — scripts/validation/check_skill_md_portability.py:1225; `return 2` on semantic baseline git failure — scripts/validation/check_skill_md_portability.py:1414; `return 2` on baseline load error — scripts/validation/check_skill_md_portability.py:1430
    - Exit 3: `return 3` — scripts/validation/check_skill_md_portability.py:1460 on external git query failure caught in `_run`
    - Process termination: `sys.exit(_run())` — scripts/validation/check_skill_md_portability.py:1464
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  - Can it exit non-zero? Yes: exits 1 on regression/drift or semantic baseline conflict; exits 2 on configuration, directory, or baseline errors; exits 3 on git query failures.
  - Does it fail on the source repo's own default branch? No: passes cleanly with exit code 0 on the default branch with 348 grandfathered references across 105 files matching baseline.
- does the output match what the documentation claims?
  Yes, stdout reports the exact count of grandfathered references and inspected roots.

## Defects — required
- doc-drift · scripts/validation/check_skill_md_portability.py:71-75 · Docstring enumerates exit codes 0, 1, and 2, but omits exit code 3 returned by `_run()` on `GitQueryError` (scripts/validation/check_skill_md_portability.py:1460), which implements `.claude/rules/ci-scripts.md:1079`.

## Observations
- Strips code blocks via CommonMark parsing: by integrating `scripts.utils.markdown_parser.blank_code_block_lines` (which uses `markdown_it`), the validator strips both fenced and indented code examples while preserving original line numbering, preventing false positives from example snippets while maintaining accurate line reporting.
- Comprehensive multi-root scan scope: scans both plugin roots (`.claude/skills`, `src/copilot-cli/skills`) and extra non-skills trees (`.claude/commands`, `templates/agents`, `src/copilot-cli/instructions`), explicitly ensuring that generated instruction files (`src/copilot-cli/instructions`) cannot be empty without failing the check (`_require_nonempty_extra_roots`).
- Double-ratchet with marker path-drift tracking: provides a reviewable escape hatch via `<!-- vendor-portability: <free text> -->` markers that zero the reference count for deliberate dependencies, but ratchets their exact suppressed count in `marker_files` in the baseline, refusing unflagged growth via `_refuse_marker_files_growth` and detecting path drift via `check_skill_md_drift`.
- Semantic baseline conflict guard: inspects `git diff` against `--base-ref` to prevent PR branches from masking regressions by silently regenerating the baseline file alongside changes to measured Markdown inputs.

## Context cost
- Bytes of `scripts/validation/check_skill_md_portability.py`: 62,742 bytes (~15,700 tokens).
- Loaded dependencies:
  - `scripts/utils/markdown_parser.py`: 19,410 bytes
  - `scripts/validation/check_skill_md_drift.py`: 17,984 bytes
  - `scripts/validation/portability_common.py`: 17,219 bytes
  - `scripts/validation/portability_floor.py`: 4,057 bytes
  - `scripts/validation/tracked_paths.py`: 12,042 bytes
  - `scripts/validation/skill_md_portability_baseline.json`: 8,767 bytes
- Total byte footprint: ~142,221 bytes (~35,500 tokens).
