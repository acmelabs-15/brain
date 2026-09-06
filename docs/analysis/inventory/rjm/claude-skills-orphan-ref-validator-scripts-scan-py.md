---
package: rjm
path: .claude/skills/orphan-ref-validator/scripts/scan.py
type: script
bytes: 39760
unit: inv-rjm-130
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/orphan-ref-validator/scripts/scan.py, sha256: 253e1f54d8dd0d57be65abf503eef2de2c9b18e4d85b24a2f1722ae4b759a99f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/orphan-ref-validator/scripts/scan.py

## Purpose — required, verbatim
> "Orphan-ref validator: detect references to absent entities in structured artifacts." — .claude/skills/orphan-ref-validator/scripts/scan.py:10

## Design intent — required
Orchestrates working-tree validation of structured artifacts (specs, architectural decision records, rule definitions, Copilot instructions, test suites, and plugin manifests) against on-disk entity existence to eliminate orphan references (deleted or renamed skill names, removed script paths, missing rules, and missing instruction mirrors) prior to commit. Without it, dead references accumulate across documentation and specification files, causing silent failures during tool invocation or costly multi-round pull-request review iterations in downstream quality gates. It acts as Gate 4 of `/build` and `/test`, enforcing strict ADR-056 envelopes and ADR-035 exit codes while offering suppression directives (`<!-- orphan-ref-ignore -->`, `<!-- orphan-ref-ignore-file -->`) and baselining (`--baseline`) to allow legacy debt to be tracked without blocking development on unmaintained files.

## Phase — required
rjm:build

## Inputs — required
- CLI options parsed via `parse_args` (.claude/skills/orphan-ref-validator/scripts/scan.py:887):
  - `--targets`: "Target paths to scan (files or directories). Defaults to standard repo paths." — .claude/skills/orphan-ref-validator/scripts/scan.py:895
  - `--include-adrs`: "Also scan .agents/architecture/ and docs/ (opt-in; high-noise historical surface)." — .claude/skills/orphan-ref-validator/scripts/scan.py:901
  - `--include-skill-descriptions`: "Also scan .claude/skills/*/SKILL.md (opt-in until preexisting drift is cleaned)." — .claude/skills/orphan-ref-validator/scripts/scan.py:907
  - `--repo-root`: "Repository root. Default: walk up from CWD looking for the nearest" — .claude/skills/orphan-ref-validator/scripts/scan.py:913
  - `--baseline`: "Path to a baseline file of known pre-existing finding keys" — .claude/skills/orphan-ref-validator/scripts/scan.py:922
  - `--allow-missing-targets`: "Treat missing scan targets as optional vendored-install paths." — .claude/skills/orphan-ref-validator/scripts/scan.py:934
  - `--allow-empty-scan`: "Permit a completed scan to pass after scanning zero files." — .claude/skills/orphan-ref-validator/scripts/scan.py:942
  - `--output`: "Output format. Default: json (ADR-056 envelope)." — .claude/skills/orphan-ref-validator/scripts/scan.py:948
  - `--log-level`: "Logging level. Default: WARNING." — .claude/skills/orphan-ref-validator/scripts/scan.py:954
- Tracked policy roots when `--targets` is omitted (.claude/skills/orphan-ref-validator/scripts/scan.py:47-58):
  - Tracked text files from `git ls-files` matching prefixes:
    - `.agents/specs/` (.claude/skills/orphan-ref-validator/scripts/scan.py:48)
    - `.claude/rules/` (.claude/skills/orphan-ref-validator/scripts/scan.py:49)
    - `.github/instructions/` (.claude/skills/orphan-ref-validator/scripts/scan.py:50)
    - `src/copilot-cli/instructions/` (.claude/skills/orphan-ref-validator/scripts/scan.py:51)
    - `tests/` (.claude/skills/orphan-ref-validator/scripts/scan.py:52)
  - Exact target files:
    - `.claude/.claude-plugin/plugin.json` (.claude/skills/orphan-ref-validator/scripts/scan.py:55)
    - `.claude-plugin/marketplace.json` (.claude/skills/orphan-ref-validator/scripts/scan.py:56)
    - `.github/plugin/marketplace.json` (.claude/skills/orphan-ref-validator/scripts/scan.py:57)
- Target file contents read from disk (.claude/skills/orphan-ref-validator/scripts/scan.py:288) decoded supporting UTF-8, UTF-8-sig, UTF-16, and UTF-32 BOMs (.claude/skills/orphan-ref-validator/scripts/scan.py:289-299).
- Baseline file if passed (JSON list, ADR-056 envelope, or plain text key lines) (.claude/skills/orphan-ref-validator/scripts/scan.py:646-708).
- Working tree directory structures: `.claude/skills/`, sibling artifacts (`agents`, `commands`, `review` axes, Serena memories) via `enumerate_sibling_artifacts` (.claude/skills/orphan-ref-validator/scripts/scan.py:769).

## Outputs — required
- ADR-056 JSON envelope or human-readable summary on stdout:
  - In `json` mode: JSON string containing `Success`, `Data` (`findings`, `verdict`, `counts`, `directive_suppressed`, `incomplete_scans`), `Error` (`Message`, `Code`, `Type`), and `Metadata` (`Script`, `Version`, `Timestamp`) followed by trailing newline and `VERDICT: <verdict>` (.claude/skills/orphan-ref-validator/scripts/scan.py:1070).
  - In `human` mode: formatted text summary listing file counts, findings, suppressions, and incomplete scans followed by `VERDICT: <verdict>` (.claude/skills/orphan-ref-validator/scripts/scan.py:1070).
- Exit code following ADR-035:
  - 0: `PASS` or `WARN` (.claude/skills/orphan-ref-validator/scripts/scan.py:19, 1083)
  - 1: `CRITICAL_FAIL` (.claude/skills/orphan-ref-validator/scripts/scan.py:20, 1082) or logic error in scan error
  - 2: Configuration error (.claude/skills/orphan-ref-validator/scripts/scan.py:21, 998, 1005, 1047, 1069, 1080)
  - 3: External error (.claude/skills/orphan-ref-validator/scripts/scan.py:22, 1060 via scan_error_exit_code)
  - 4: Authentication/permission error (.claude/skills/orphan-ref-validator/scripts/scan.py:23, 1060 via scan_error_exit_code)
- Stderr warnings for ignored flags or unhandled exceptions (.claude/skills/orphan-ref-validator/scripts/scan.py:1009, 1015, 1077).

## Invokes — required
- script counts — .claude/skills/orphan-ref-validator/scripts/scan.py:71
- script envelope — .claude/skills/orphan-ref-validator/scripts/scan.py:75
- script filters — .claude/skills/orphan-ref-validator/scripts/scan.py:87
- script patterns — .claude/skills/orphan-ref-validator/scripts/scan.py:95
- script walking — .claude/skills/orphan-ref-validator/scripts/scan.py:107

## Invoked by — required
- command build — .claude/commands/build.md:70
- command test — .claude/commands/test.md:96
- skill orphan-ref-validator — .claude/skills/orphan-ref-validator/SKILL.md:41
- skill orphan-ref-validator — .claude/skills/orphan-ref-validator/SKILL.md:175
- skill orphan-ref-validator — .claude/skills/orphan-ref-validator/SKILL.md:294

## Concepts named — required, verbatim
- `Orphan-ref validator` — .claude/skills/orphan-ref-validator/scripts/scan.py:10 — defined here
- `ADR-056 envelope` — .claude/skills/orphan-ref-validator/scripts/scan.py:13 — used here
- `ADR-035` — .claude/skills/orphan-ref-validator/scripts/scan.py:14 — used here
- `REQ-009` — .claude/skills/orphan-ref-validator/scripts/scan.py:16 — used here
- `DESIGN-009` — .claude/skills/orphan-ref-validator/scripts/scan.py:16 — used here
- `Exit codes` — .claude/skills/orphan-ref-validator/scripts/scan.py:18 — defined here
- `PASS` — .claude/skills/orphan-ref-validator/scripts/scan.py:19 — used here
- `WARN` — .claude/skills/orphan-ref-validator/scripts/scan.py:19 — used here
- `CRITICAL_FAIL` — .claude/skills/orphan-ref-validator/scripts/scan.py:20 — used here
- `FileScanOutcome` — .claude/skills/orphan-ref-validator/scripts/scan.py:187 — defined here
- `scan_file` — .claude/skills/orphan-ref-validator/scripts/scan.py:196 — defined here
- `file-scope ignore directive` — .claude/skills/orphan-ref-validator/scripts/scan.py:205 — used here
- `file ignore directive` — .claude/skills/orphan-ref-validator/scripts/scan.py:241 — used here
- `rule_path` — .claude/skills/orphan-ref-validator/scripts/scan.py:267 — used here
- `instruction_path` — .claude/skills/orphan-ref-validator/scripts/scan.py:278 — used here
- `line-scope ignore directives` — .claude/skills/orphan-ref-validator/scripts/scan.py:303 — used here
- `line ignore directive` — .claude/skills/orphan-ref-validator/scripts/scan.py:309 — used here
- `skill_name` — .claude/skills/orphan-ref-validator/scripts/scan.py:344 — used here
- `KNOWN_RETIRED_KEBAB_SKILLS` — .claude/skills/orphan-ref-validator/scripts/scan.py:354 — used here
- `sibling_names` — .claude/skills/orphan-ref-validator/scripts/scan.py:367 — used here
- `KEBAB_DENYLIST` — .claude/skills/orphan-ref-validator/scripts/scan.py:372 — used here
- `AC-2` — .claude/skills/orphan-ref-validator/scripts/scan.py:377 — used here
- `vendored install` — .claude/skills/orphan-ref-validator/scripts/scan.py:441 — used here
- `script_path` — .claude/skills/orphan-ref-validator/scripts/scan.py:488 — used here
- `MAX_FINDINGS` — .claude/skills/orphan-ref-validator/scripts/scan.py:626 — defined here
- `BaselineError` — .claude/skills/orphan-ref-validator/scripts/scan.py:642 — defined here
- `load_baseline` — .claude/skills/orphan-ref-validator/scripts/scan.py:646 — defined here
- `scan` — .claude/skills/orphan-ref-validator/scripts/scan.py:744 — defined here
- `scan_truncated` — .claude/skills/orphan-ref-validator/scripts/scan.py:853 — used here
- `RepoRootError` — .claude/skills/orphan-ref-validator/scripts/scan.py:959 — defined here
- `main` — .claude/skills/orphan-ref-validator/scripts/scan.py:985 — defined here
- `ERROR` — .claude/skills/orphan-ref-validator/scripts/scan.py:987 — used here
- `/build gate contract` — .claude/skills/orphan-ref-validator/scripts/scan.py:1076 — used here

## Structure
none (python script; functions and definitions: DOT_AGENTS, DEFAULT_TARGETS, DEFAULT_TRACKED_PREFIXES, DEFAULT_EXACT_TARGETS, OPT_IN_ADR_TARGETS, OPT_IN_SKILL_TARGETS, _path_under, _exists_under_repo, _requires_typed_skill_refs, FileScanOutcome, scan_file, _read_supported_text, directive_suppressed_refs, _suppressed_refs_for_text, _io_error_type, _check_skill_refs, _skill_ref_finding, _script_ref_resolves, _check_script_refs, _check_skill_script_refs, _check_repo_path_refs, _expand_target, _default_tracked_text_targets, _missing_target_issue, MAX_FINDINGS, _suppress_baselined, BaselineError, load_baseline, _load_baseline_json, _strip_verdict_suffix, _deduplicate_findings, scan, _prioritize_findings, parse_args, RepoRootError, _resolve_repo_root, main)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/orphan-ref-validator/scripts/scan.py`, language: Python 3, lines: 1088
- documented invocation:
  - "uv run python \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}\"/skills/orphan-ref-validator/scripts/scan.py \\" — .claude/skills/orphan-ref-validator/SKILL.md:41
  - "uv run python \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}\"/skills/orphan-ref-validator/scripts/scan.py --help" — .claude/skills/orphan-ref-validator/SKILL.md:166
  - "uv run python \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}\"/skills/orphan-ref-validator/scripts/scan.py --targets missing.md" — .claude/skills/orphan-ref-validator/SKILL.md:167
  - "uv run python \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}\"/skills/orphan-ref-validator/scripts/scan.py" — .claude/skills/orphan-ref-validator/SKILL.md:294
  - "uv run python \"${COPILOT_PLUGIN_ROOT:-${CLAUDE_PLUGIN_ROOT:-.claude}}\"/skills/orphan-ref-validator/scripts/scan.py --output human" — .claude/skills/orphan-ref-validator/SKILL.md:301
- **executed:** yes
- actual command run: `python3 .claude/skills/orphan-ref-validator/scripts/scan.py --output human` in `sources/rjm`
  abridged stdout:
  ```text
  orphan-ref-validator 1.0.0
    files_scanned:        217
    files_skipped:        10
    refs_checked:         702
    findings:             44
    suppressed:           0
    directive_suppressed: 191
    incomplete_scans:     0
    [critical] .agents/specs/design/DESIGN-005-command-skill-bundling.md:44 skill_name `session-init` -- Skill `session-init` not present at .claude/skills/. Update reference, restore the skill, or remove the mention.
    [critical] .agents/specs/design/DESIGN-005-command-skill-bundling.md:45 skill_name `session-end` -- Skill `session-end` not present at .claude/skills/. Update reference, restore the skill, or remove the mention.
  ...
  VERDICT: CRITICAL_FAIL
  ```
  **actual exit code**: 1
- actual command run: `python3 .claude/skills/orphan-ref-validator/scripts/scan.py --targets missing.md` in `sources/rjm`
  abridged stdout:
  ```json
  {
    "Success": false,
    "Data": {
      "findings": [],
      "verdict": "ERROR",
      "counts": {
        "files_scanned": 0,
        "files_skipped": 0,
        "refs_checked": 0,
        "findings_total": 0,
        "findings_suppressed": 0,
        "directive_suppressed": 0,
        "incomplete_scans": 1
      },
      "directive_suppressed": [],
      "incomplete_scans": [
        {
          "target": "missing.md",
          "reason": "target does not exist or glob matched no files",
          "error_type": "config"
        }
      ]
    },
    "Error": {
      "Message": "scan incomplete: one or more requested targets could not be scanned",
      "Code": 2,
      "Type": "InvalidParams"
    },
    "Metadata": {
      "Script": "scan.py",
      "Version": "1.0.0",
      "Timestamp": "2026-09-05T15:21:44.062651+00:00"
    }
  }
  VERDICT: ERROR
  ```
  **actual exit code**: 2
- actual command run: `python3 sources/rjm/.claude/skills/orphan-ref-validator/scripts/scan.py --help`
  abridged stdout:
  ```text
  usage: scan.py [-h] [--targets TARGETS [TARGETS ...]] [--include-adrs]
                 [--include-skill-descriptions] [--repo-root REPO_ROOT]
                 [--baseline BASELINE] [--allow-missing-targets]
                 [--allow-empty-scan] [--output {json,human}]
                 [--log-level {DEBUG,INFO,WARNING,ERROR}]

  Detect orphan refs in structured artifacts (REQ-009).
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0 - PASS or WARN (no critical findings)" — .claude/skills/orphan-ref-validator/scripts/scan.py:19
  - "1 - CRITICAL_FAIL (one or more critical findings)" — .claude/skills/orphan-ref-validator/scripts/scan.py:20
  - "2 - Configuration error (bad CLI args, missing repo root)" — .claude/skills/orphan-ref-validator/scripts/scan.py:21
  - "3 - External error" — .claude/skills/orphan-ref-validator/scripts/scan.py:22
  - "4 - Authentication/authorization error, including permission denied" — .claude/skills/orphan-ref-validator/scripts/scan.py:23
  Actual exit paths in code:
  - `sys.exit(main())` — .claude/skills/orphan-ref-validator/scripts/scan.py:1087
  - `return 2` (.claude/skills/orphan-ref-validator/scripts/scan.py:998) on invalid CLI arguments (argparse SystemExit).
  - `return 2` (.claude/skills/orphan-ref-validator/scripts/scan.py:1005) on RepoRootError (invalid `--repo-root`).
  - `return 2` (.claude/skills/orphan-ref-validator/scripts/scan.py:1047) on BaselineError (invalid `--baseline`).
  - `return int(scan_error_exit_code(result))` (.claude/skills/orphan-ref-validator/scripts/scan.py:1060) on incomplete scan: returns 4 for "auth", 3 for "external", 1 for "logic", 2 for "config".
  - `return 2` (.claude/skills/orphan-ref-validator/scripts/scan.py:1069) when zero files are scanned without `--allow-empty-scan`.
  - `return 2` (.claude/skills/orphan-ref-validator/scripts/scan.py:1080) on unhandled exception in `main()`.
  - `return 1` (.claude/skills/orphan-ref-validator/scripts/scan.py:1082) when `result.verdict == "CRITICAL_FAIL"`.
  - `return 0` (.claude/skills/orphan-ref-validator/scripts/scan.py:1083) on `PASS` or `WARN`.
- for validators/gates: can it exit non-zero? yes, exits 1 on CRITICAL_FAIL or logic errors, 2 on configuration/parse errors, 3 on external errors, 4 on permission errors. Does it fail on the source repo's own default branch? Yes, on the default branch of `sources/rjm`, running the default scan exits 1 with `VERDICT: CRITICAL_FAIL` due to 44 pre-existing critical orphan references across `.agents/specs/` (e.g. `session-init`, `session-end`).
- does the output match what the documentation claims? Partially: it matches the ADR-056 JSON envelope schema, human formatter output, and exit codes, but contradicts the verification checklist claim in SKILL.md:168 that running from the repo root exits 0 with `VERDICT: PASS` on default tracked text targets (due to 44 un-baselined pre-existing orphan refs).

## Defects — required
- `doc-drift` · .claude/skills/orphan-ref-validator/SKILL.md:168 · SKILL.md verification checklist claims running `scan.py` from repo root exits 0 with `VERDICT: PASS` on default tracked text targets, but actual execution on `sources/rjm` default branch exits 1 with `VERDICT: CRITICAL_FAIL` (44 pre-existing orphan findings), which SKILL.md:320 acknowledges ("A default repo-wide scan (no --targets) fails on pre-existing orphan refs that predate the gate").
- `exit-code-mismatch` · .claude/skills/orphan-ref-validator/scripts/scan.py:1080 · Unhandled runtime exception in `main()` caught by generic `except Exception` returns exit code 2 (configuration error) and emits `Type: General` rather than exit code 1 (logic error) or exit code 3 (external error).
- `exit-code-mismatch` · .claude/skills/orphan-ref-validator/scripts/scan.py:1069 · Empty scan without `--allow-empty-scan` returns exit code 2 (configuration error) rather than a dedicated empty-scope error code.

## Observations
- Defensive orchestration: `scan.py` wraps `main()` in an all-encompassing `try...except Exception` block (.claude/skills/orphan-ref-validator/scripts/scan.py:1071-1080) specifically to ensure that unexpected runtime errors still emit an ADR-056 JSON error envelope and `VERDICT: ERROR` line rather than an unhandled Python traceback that would break the `/build` gate parser.
- Memory bounding and truncation: defines `MAX_FINDINGS = 500` (.claude/skills/orphan-ref-validator/scripts/scan.py:626); if findings exceed this limit, it replaces the excess with a synthetic `scan_truncated` finding (.claude/skills/orphan-ref-validator/scripts/scan.py:853) and marks the scan incomplete so callers know to narrow targets.
- Pre-truncation deduplication: `_deduplicate_findings` (.claude/skills/orphan-ref-validator/scripts/scan.py:719-742) drops duplicate findings matching on `(target_file, line, kind, referenced_entity)` before truncation check, reclaiming slots in the `MAX_FINDINGS` budget when multiple extractors flag the same token.
- Multi-format baseline parsing: `load_baseline` (.claude/skills/orphan-ref-validator/scripts/scan.py:646-708) flexibly accepts either a JSON list of key strings, a saved ADR-056 scan envelope (`Data.findings`), or newline-delimited keys with comments, stripping trailing `VERDICT:` lines (.claude/skills/orphan-ref-validator/scripts/scan.py:711-716).
- Security path containment: `_exists_under_repo` (.claude/skills/orphan-ref-validator/scripts/scan.py:157-164) and `scan` (.claude/skills/orphan-ref-validator/scripts/scan.py:782, 802) strictly enforce that target paths and symlink targets resolve within `repo_root`, catching path traversal attempts (CWE-22 / CWE-59) as incomplete scans.

## Context cost
39760 bytes (~9940 tokens). Imports local helper modules (`counts.py`, `envelope.py`, `filters.py`, `patterns.py`, `walking.py`) totaling ~80 KB across the skill scripts directory.
