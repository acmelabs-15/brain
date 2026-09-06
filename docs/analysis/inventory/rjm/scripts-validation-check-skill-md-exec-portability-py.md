---
package: rjm
path: scripts/validation/check_skill_md_exec_portability.py
type: script
bytes: 23625
unit: inv-rjm-285
in_scope_via: docs/SKILL-AUTHORING.md
aliases: []
memo_inputs:
  - {path: scripts/validation/check_skill_md_exec_portability.py, sha256: 176c423ce1b4d3957c58c67a909039ca428157be432a1170ee8157911ac1a051}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/validation/check_skill_md_exec_portability.py

## Purpose — required, verbatim
> "Exec-path vendor-portability ratchet for skill instruction files (issue #2838)." — scripts/validation/check_skill_md_exec_portability.py:3

## Design intent — required
Enforces executable path vendor-portability across skill instruction files (`SKILL.md`, references, and script READMEs) in both `.claude/skills` and `src/copilot-cli/skills`. In vendored plugin installations, the skill directory tree lives at the plugin root rather than `./.claude/skills/`, causing hardcoded `.claude/skills/...` command invocations to fail when executing skills from different working directories. The script ratchets against bare `.claude/skills/...`, `build/...`, and `scripts/...` invocations using regex patterns while allowing compliant harness variable forms (`${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}/skills/...`). It provides an intentional opt-out mechanism (`<!-- vendor-portability-exec: <reason> -->`), detects dangling skill-relative script references that resolve neither in the skill directory nor repository root, prevents ratchet baseline inflation (enforcing `--allow-marker-grow` and `--allow-baseline-shrink`), and guards against scanning outside repository boundaries via symlinked scan roots or relative escapes.

## Phase — required
none

## Inputs — required
- CLI option `--repo-root`: Repository root path resolved by `_resolve_root` — scripts/validation/check_skill_md_exec_portability.py:408
- CLI option `--baseline`: Baseline JSON path resolved by `_resolve_baseline_path` — scripts/validation/check_skill_md_exec_portability.py:414
- CLI option `--update-baseline` and `--allow-marker-grow` configured via `build_parser` — scripts/validation/check_skill_md_exec_portability.py:392
- Baseline file `skill_md_exec_portability_baseline.json` loaded via `_load_baseline` — scripts/validation/check_skill_md_exec_portability.py:311
- Marker baseline loaded via `_load_marker_baseline` — scripts/validation/check_skill_md_exec_portability.py:332
- Skill Markdown files across directories defined in `SCAN_ROOTS` — scripts/validation/check_skill_md_exec_portability.py:47

## Outputs — required
- Exit codes (0 clean, 1 drift or dangling, 2 config error) evaluated in `main` — scripts/validation/check_skill_md_exec_portability.py:556
- Formatted human or JSON scan report emitted by `_print_report` — scripts/validation/check_skill_md_exec_portability.py:509
- Baseline file written on update by `_write_baseline` — scripts/validation/check_skill_md_exec_portability.py:463
- List of dangling script references identified by `scan_dangling_skill_relative_scripts` — scripts/validation/check_skill_md_exec_portability.py:134

## Invokes — required
- script portability_common — scripts/validation/check_skill_md_exec_portability.py:32

## Invoked by — required
- doc SKILL-AUTHORING.md — docs/SKILL-AUTHORING.md:233
- script portability_common — scripts/validation/portability_common.py:173
- script check_skill_resolver_anchoring — scripts/validation/check_skill_resolver_anchoring.py:25

## Concepts named — required, verbatim
- `build_portability_parser` — scripts/validation/check_skill_md_exec_portability.py:33 — used here
- `read_previous_sections` — scripts/validation/check_skill_md_exec_portability.py:34 — used here
- `refuse_symlinked_scan_root` — scripts/validation/check_skill_md_exec_portability.py:35 — used here
- `refuse_unsafe_baseline_write` — scripts/validation/check_skill_md_exec_portability.py:36 — used here
- `resolve_path_within_root` — scripts/validation/check_skill_md_exec_portability.py:37 — used here
- `write_baseline_json` — scripts/validation/check_skill_md_exec_portability.py:38 — used here
- `_resolve_checked_baseline` — scripts/validation/check_skill_md_exec_portability.py:41 — used here
- `SCAN_ROOTS` — scripts/validation/check_skill_md_exec_portability.py:47 — defined here
- `EXEC_PATTERN` — scripts/validation/check_skill_md_exec_portability.py:55 — defined here
- `_SKILL_REL_SCRIPT_PAT` — scripts/validation/check_skill_md_exec_portability.py:61 — defined here
- `_CONTINUATION_PATTERN` — scripts/validation/check_skill_md_exec_portability.py:70 — defined here
- `_MARKER_PATTERN` — scripts/validation/check_skill_md_exec_portability.py:77 — defined here
- `_DEFAULT_BASELINE_NAME` — scripts/validation/check_skill_md_exec_portability.py:82 — defined here
- `SKILL_FILE_NAME` — scripts/validation/check_skill_md_exec_portability.py:84 — defined here
- `_repo_root` — scripts/validation/check_skill_md_exec_portability.py:87 — defined here
- `has_portability_marker` — scripts/validation/check_skill_md_exec_portability.py:96 — defined here
- `find_skill_relative_scripts` — scripts/validation/check_skill_md_exec_portability.py:101 — defined here
- `_scan_skill_for_dangling` — scripts/validation/check_skill_md_exec_portability.py:109 — defined here
- `scan_dangling_skill_relative_scripts` — scripts/validation/check_skill_md_exec_portability.py:134 — defined here
- `count_exec_invocations` — scripts/validation/check_skill_md_exec_portability.py:150 — defined here
- `count_file_invocations` — scripts/validation/check_skill_md_exec_portability.py:156 — defined here
- `count_marker_suppressed_invocations` — scripts/validation/check_skill_md_exec_portability.py:163 — defined here
- `_refuse_exec_escape` — scripts/validation/check_skill_md_exec_portability.py:171 — defined here
- `_reraise_os_error` — scripts/validation/check_skill_md_exec_portability.py:177 — defined here
- `_iter_reference_markdown` — scripts/validation/check_skill_md_exec_portability.py:181 — defined here
- `_iter_skill_roots` — scripts/validation/check_skill_md_exec_portability.py:207 — defined here
- `_iter_skill_files` — scripts/validation/check_skill_md_exec_portability.py:222 — defined here
- `scan_all` — scripts/validation/check_skill_md_exec_portability.py:251 — defined here
- `scan_skill_execs` — scripts/validation/check_skill_md_exec_portability.py:293 — defined here
- `scanned_files_by_root` — scripts/validation/check_skill_md_exec_portability.py:299 — defined here
- `scan_marker_suppressions` — scripts/validation/check_skill_md_exec_portability.py:305 — defined here
- `_load_baseline` — scripts/validation/check_skill_md_exec_portability.py:311 — defined here
- `_load_marker_baseline` — scripts/validation/check_skill_md_exec_portability.py:332 — defined here
- `diff_against_baseline` — scripts/validation/check_skill_md_exec_portability.py:348 — defined here
- `diff_marker_baseline` — scripts/validation/check_skill_md_exec_portability.py:376 — defined here
- `build_parser` — scripts/validation/check_skill_md_exec_portability.py:392 — defined here
- `_resolve_root` — scripts/validation/check_skill_md_exec_portability.py:408 — defined here
- `_resolve_baseline_path` — scripts/validation/check_skill_md_exec_portability.py:414 — defined here
- `_refuse_marker_files_growth` — scripts/validation/check_skill_md_exec_portability.py:419 — defined here
- `_write_baseline` — scripts/validation/check_skill_md_exec_portability.py:463 — defined here
- `_has_scan_root` — scripts/validation/check_skill_md_exec_portability.py:505 — defined here
- `_print_report` — scripts/validation/check_skill_md_exec_portability.py:509 — defined here
- `main` — scripts/validation/check_skill_md_exec_portability.py:556 — defined here

## Structure
- Shebang and module docstring with ADR-035 exit code specification — scripts/validation/check_skill_md_exec_portability.py:1-19
- Imports and sys.path resolution — scripts/validation/check_skill_md_exec_portability.py:21-42
- Constants and regular expressions for executable matching and marker suppression — scripts/validation/check_skill_md_exec_portability.py:44-85
- Repository root resolution and marker detection — scripts/validation/check_skill_md_exec_portability.py:87-99
- Skill-relative script detection and dangling script scanner — scripts/validation/check_skill_md_exec_portability.py:101-148
- Invocation and marker-suppressed invocation counting — scripts/validation/check_skill_md_exec_portability.py:150-169
- Filesystem traversal, path escape guards, and file iterators — scripts/validation/check_skill_md_exec_portability.py:171-249
- Unified multi-root scanning engine (scan_all) — scripts/validation/check_skill_md_exec_portability.py:251-309
- Baseline loading and diffing algorithms — scripts/validation/check_skill_md_exec_portability.py:311-390
- Argument parser construction with --allow-marker-grow — scripts/validation/check_skill_md_exec_portability.py:392-406
- Baseline path resolution and marker growth refusal guard — scripts/validation/check_skill_md_exec_portability.py:408-461
- Baseline serialization and file writing — scripts/validation/check_skill_md_exec_portability.py:463-503
- Reporting formatter and CLI main driver — scripts/validation/check_skill_md_exec_portability.py:505-620

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/validation/check_skill_md_exec_portability.py`, language: Python 3, lines: 620
- documented invocation:
  - "Use ``--update-baseline`` to tighten after fixes." — scripts/validation/check_skill_md_exec_portability.py:13
- executed: yes
- actual command run: `python3 scripts/validation/check_skill_md_exec_portability.py`
- abridged stdout:
```
No skill exec-path vendor-portability drift. 623 grandfathered invocations across 139 files (baseline 623).
```
- actual exit code: 0
- documented exit codes vs. actual exit paths in code:
  - "Exit codes (ADR-035): 0=clean, 1=drift, 2=config error." — scripts/validation/check_skill_md_exec_portability.py:18
  - Actual exit paths:
    - line 566: `return 2` when no skill scan roots exist under repo root
    - line 570: `return 2` when baseline path escapes root or cannot be resolved
    - line 577: `return 2` on OSError scanning skill files
    - line 588: `return 2` when `refuse_unsafe_baseline_write` refuses update
    - line 595: `return 2` when `_refuse_marker_files_growth` refuses update
    - line 597: `return _write_baseline(...)` returning 0 on success or 2 on write error
    - line 605: `return 2` on OSError or ValueError reading baseline
    - line 615: `return 1 if (regressions or dangling) else 0`
    - line 619: `sys.exit(main())`
- for validators/gates:
  - can it exit non-zero: yes, returns exit code 1 if regressions or dangling scripts are detected (`line 615`), and exit code 2 on configuration/filesystem errors (`lines 566, 570, 577, 588, 595, 605`)
  - does it fail on source repo default branch: passes with exit code 0 against committed baseline (`623 grandfathered invocations across 139 files`)
- does output match what documentation claims: yes, verifies 623 baseline invocations across 139 files and exits 0 cleanly

## Defects — required
- `other` · "taste-lint: ignore file-size, exec portability checker owns scan, parse, baseline, marker policy." — scripts/validation/check_skill_md_exec_portability.py:2 · script length (620 lines) exceeds repository 500-line ceiling, bypassed via inline taste-lint directive.

## Observations
- Distinguishes intentional bare invocations via `<!-- vendor-portability-exec: <reason> -->` from prose path dependencies (`vendor-portability`).
- Detects dangling skill-relative script references (`python3 scripts/foo.py`) that do not exist either within the skill directory or at the repository root (issue #3916).
- Unified scanning walk (`scan_all`) samples coverage and baseline counts from a single snapshot, eliminating concurrency windows during baseline update.
- Enforces strict marker growth verification (`_refuse_marker_files_growth`), requiring explicit `--allow-marker-grow` flag when intentionally increasing suppressed invocations.

## Context cost
23625 bytes, 620 lines, ~5900 tokens. Loads `scripts/validation/portability_common.py` (18892 bytes) and baseline `scripts/validation/skill_md_exec_portability_baseline.json` (9973 bytes); total context ~52490 bytes, ~13100 tokens.
