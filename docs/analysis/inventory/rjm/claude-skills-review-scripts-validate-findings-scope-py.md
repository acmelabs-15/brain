---
package: rjm
path: .claude/skills/review/scripts/validate_findings_scope.py
type: script
bytes: 12013
unit: inv-rjm-153
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/review/scripts/validate_findings_scope.py, sha256: 198ef64c60854624c8251678c5afc478e3b508537182e6b217d75f839adf8913}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/review/scripts/validate_findings_scope.py

## Purpose — required, verbatim
> "Validate that review-axis findings reference files in the PR diff." — .claude/skills/review/scripts/validate_findings_scope.py:2

## Design intent — required
`validate_findings_scope.py` scopes code review findings against a git three-dot diff (`git diff origin/<base>...HEAD`) so pre-existing issues do not block pull requests. In automated multi-axis reviews, review agents frequently analyze surrounding code or whole files and report pre-existing legacy issues outside the scope of the developer's changes. Without this script, authors would face spurious blocking verdicts on unmodified code, creating workflow friction and incentivizing developers to disable review gates. The script extracts file locations from findings text, checks them against the diff file list, tags out-of-scope lines with `[pre-existing - not in this PR diff]`, and downgrades all-out-of-scope blocking verdicts to `WARN` while preserving full visibility into the issues discovered.

## Phase — required
rjm:review

## Inputs — required
- CLI options and arguments (.claude/skills/review/scripts/validate_findings_scope.py:261-286):
  - `--worktree`: "Path to the git worktree to run" — .claude/skills/review/scripts/validate_findings_scope.py:267
  - `--base-branch`: "Base branch for the three-dot diff (default: main)." — .claude/skills/review/scripts/validate_findings_scope.py:272
  - `--text`: "Axis output text to validate. Reads from stdin when omitted." — .claude/skills/review/scripts/validate_findings_scope.py:276
  - `--emit-adjusted-text`: "Print axis text with out-of-scope findings marked and any" — .claude/skills/review/scripts/validate_findings_scope.py:282
- Axis findings text read via `--text` or `sys.stdin` containing `location:` fields or prose file paths (.claude/skills/review/scripts/validate_findings_scope.py:37-50, 288)
- Git repository state inspected via subprocess: `["git", "-C", worktree, "diff", "--name-only", f"origin/{base_branch}...HEAD"]` — .claude/skills/review/scripts/validate_findings_scope.py:110

## Outputs — required
- Adjusted findings text rendered to `sys.stdout` when `--emit-adjusted-text` is passed, tagging out-of-scope lines with `[pre-existing - not in this PR diff]` and appending an explanatory scope adjustment note when verdicts are downgraded (.claude/skills/review/scripts/validate_findings_scope.py:61, 253-255, 305)
- Warning and diagnostic messages emitted to `sys.stderr` for unavailable diffs or list of out-of-scope locations (.claude/skills/review/scripts/validate_findings_scope.py:295, 310-314)
- Process exit codes: 0 (all locations in scope or diff empty/unavailable) and 1 (one or more locations out of scope) — .claude/skills/review/scripts/validate_findings_scope.py:18-19, 301, 315, 317

## Invokes — required
none

## Invoked by — required
- skill review — .claude/skills/review/SKILL.md:96

## Concepts named — required, verbatim
- `location:` — .claude/skills/review/scripts/validate_findings_scope.py:5 — used here
- `three-dot diff` — .claude/skills/review/scripts/validate_findings_scope.py:6 — used here
- `[pre-existing - not in this PR diff]` — .claude/skills/review/scripts/validate_findings_scope.py:11 — defined here
- `WARN` — .claude/skills/review/scripts/validate_findings_scope.py:12 — used here
- `ADR-035` — .claude/skills/review/scripts/validate_findings_scope.py:17 — used here
- `PASS` — .claude/skills/review/scripts/validate_findings_scope.py:54 — used here
- `CRITICAL_FAIL` — .claude/skills/review/scripts/validate_findings_scope.py:54 — used here
- `REJECTED` — .claude/skills/review/scripts/validate_findings_scope.py:54 — used here
- `FAIL` — .claude/skills/review/scripts/validate_findings_scope.py:54 — used here
- `NEEDS_REVIEW` — .claude/skills/review/scripts/validate_findings_scope.py:54 — used here
- `NON_COMPLIANT` — .claude/skills/review/scripts/validate_findings_scope.py:55 — used here
- `COMPLIANT` — .claude/skills/review/scripts/validate_findings_scope.py:55 — used here
- `PARTIAL` — .claude/skills/review/scripts/validate_findings_scope.py:55 — used here
- `UNKNOWN` — .claude/skills/review/scripts/validate_findings_scope.py:55 — used here
- `_PRE_EXISTING_MARKER` — .claude/skills/review/scripts/validate_findings_scope.py:61 — defined here
- `Scope adjustment` — .claude/skills/review/scripts/validate_findings_scope.py:253 — defined here

## Structure
none (python script; top-level functions and definitions: _LOCATION_FIELD_RE, _PROSE_PATH_RE, _VERDICT_RE, _FAIL_VERDICTS, _PRE_EXISTING_MARKER, _PATH_EXTENSIONS, _looks_like_path, _strip_line_suffix, get_diff_files, extract_locations, _file_in_diff, validate_scope, extract_verdict, scope_adjusted_verdict, _replace_verdict, _annotate_out_of_scope_lines, format_scope_checked_text, main)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/review/scripts/validate_findings_scope.py`, language: Python 3, lines: 322
- documented invocation:
  - "python3 <validate_findings_scope.py> --worktree <WORKTREE_PATH> --base-branch <BASE_BRANCH> --text <AXIS_TEXT> --emit-adjusted-text" — .claude/skills/review/SKILL.md:96
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - Test 1 (in-scope / empty diff on default branch):
    `python3 .claude/skills/review/scripts/validate_findings_scope.py --text "location: foo.py:10\nVerdict: PASS"`
    stdout: `` (empty)
    **actual exit code**: 0
  - Test 2 (out-of-scope finding on diff branch with `--emit-adjusted-text`):
    `python3 .claude/skills/review/scripts/validate_findings_scope.py --base-branch vendor-provenance-base --text "location: nonexistent_file.py:42\nVerdict: CRITICAL_FAIL" --emit-adjusted-text`
    abridged stderr:
    ```
    OUT-OF-SCOPE (1 location(s) not in PR diff):
      nonexistent_file.py
    ```
    abridged stdout:
    ```
    location: nonexistent_file.py:42 [pre-existing - not in this PR diff]
    Verdict: WARN

    Scope adjustment: original verdict CRITICAL_FAIL downgraded to WARN because every cited location is outside the PR diff.
    ```
    **actual exit code**: 1
- documented exit codes vs. actual exit paths:
  - Documented in script docstring:
    - "0 - All locations are in scope, or the diff list is empty or unavailable." — .claude/skills/review/scripts/validate_findings_scope.py:18
    - "1 - One or more locations are out of scope." — .claude/skills/review/scripts/validate_findings_scope.py:19
  - Actual exit paths in code:
    - `sys.exit(main())` — .claude/skills/review/scripts/validate_findings_scope.py:321
    - `return 0` (.claude/skills/review/scripts/validate_findings_scope.py:301, 317) when diff is unavailable/empty or no locations are out of scope
    - `return 1` (.claude/skills/review/scripts/validate_findings_scope.py:315) when `out_of_scope` list is non-empty
- for validators/gates: can it exit non-zero? yes, exits 1 when out-of-scope locations are found. Does it fail on the source repo's own default branch? No, because `git diff origin/main...HEAD` is empty on the default branch, `validate_scope` treats all locations as in-scope and exits 0 (graceful degradation by design).
- does the output match what the documentation claims? Yes, flags out-of-scope lines with `[pre-existing - not in this PR diff]` and downgrades all-out-of-scope blocking verdicts to `WARN`.

## Defects — required
none

## Observations
- Graceful degradation on git failure: when git is not on PATH or the git subprocess fails, `get_diff_files` returns `None`, causing `main()` to log a warning to `sys.stderr` and exit 0 rather than blocking the review pipeline.
- Suffix path matching: `_file_in_diff` matches paths by suffix (`diff_file.endswith(f"/{location}")` or `location.endswith(f"/{diff_file}")`), accommodating relative paths cited from different directory levels.
- Heuristic prose filtering: `_looks_like_path` rejects prose tokens containing slashes such as `N/A` and single-character segment patterns to avoid false positives.

## Context cost
12013 bytes (~3000 tokens). Standalone Python script with standard library dependencies.
