---
package: rjm
path: .claude/skills/taste-lints/scripts/taste_lints.py
type: script
bytes: 41729
unit: inv-rjm-176
in_scope_via: .claude/skills/taste-lints/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/taste-lints/scripts/taste_lints.py, sha256: 0291a0a69d6836830ca04174c8ddbfa2e15727b2775bdcace843df1e21162f80}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/taste-lints/scripts/taste_lints.py

## Purpose — required, verbatim
> "Taste invariant linter with agent-readable remediation instructions." — .claude/skills/taste-lints/scripts/taste_lints.py:2

## Design intent — required
`taste_lints.py` provides an automated static analysis engine tailored specifically for coding agent loops, enforcing non-standard architectural conventions that generic linters omit (file length ceilings, naming conventions, cyclomatic complexity limits, and skill prompt sizes). Instead of presenting passive error messages, the script embeds structured `AGENT_REMEDIATION` instructions directly into the diagnostic output, giving LLMs deterministic recipes (such as exact target filenames, sharding guidance, or git mv commands) to resolve issues autonomously. Furthermore, it incorporates practical engineering safeguards—such as defensive parsing against CWE-22 (path traversal) and CWE-88 (argument injection), frontmatter-aware comment suppression windows, and git diff scoping—ensuring that pre-flight checks remain fast, secure, and focused only on newly introduced lines or expanded files.

## Phase — required
rjm:build

## Inputs — required
- CLI options via `argparse`:
  - `files`: "Files to lint" — .claude/skills/taste-lints/scripts/taste_lints.py:1059
  - `--git-staged`: "Lint git staged files" — .claude/skills/taste-lints/scripts/taste_lints.py:1064
  - `--diff-scope`: "Lint only files changed in 'git diff --name-only BASE_BRANCH...HEAD'" — .claude/skills/taste-lints/scripts/taste_lints.py:1069
  - `--directory`: "Lint all scannable files in directory" — .claude/skills/taste-lints/scripts/taste_lints.py:1074
  - `--format`: "Output format (default: text)" — .claude/skills/taste-lints/scripts/taste_lints.py:1080
  - `--rules`: "Comma-separated rules to run (default: all)." — .claude/skills/taste-lints/scripts/taste_lints.py:1084
- Subprocess git commands:
  - staged files: `"--diff-filter=ACM"` — .claude/skills/taste-lints/scripts/taste_lints.py:209
  - git root: `"--show-toplevel"` — .claude/skills/taste-lints/scripts/taste_lints.py:239
  - diff files: `"--name-only"` — .claude/skills/taste-lints/scripts/taste_lints.py:276
  - diff lines: `"-U0"` — .claude/skills/taste-lints/scripts/taste_lints.py:319
  - diff base content: `"show"` — .claude/skills/taste-lints/scripts/taste_lints.py:917
- Scannable files matching extensions:
  - `.py` — .claude/skills/taste-lints/scripts/taste_lints.py:38
  - `.ps1` — .claude/skills/taste-lints/scripts/taste_lints.py:39
  - `.psm1` — .claude/skills/taste-lints/scripts/taste_lints.py:40
  - `.sh` — .claude/skills/taste-lints/scripts/taste_lints.py:41
  - `.bash` — .claude/skills/taste-lints/scripts/taste_lints.py:42
  - `.yml` — .claude/skills/taste-lints/scripts/taste_lints.py:43
  - `.yaml` — .claude/skills/taste-lints/scripts/taste_lints.py:44
  - `.md` — .claude/skills/taste-lints/scripts/taste_lints.py:45
  - `.json` — .claude/skills/taste-lints/scripts/taste_lints.py:46
- Suppression comments in source file header window:
  - `# taste-lint: ignore` — .claude/skills/taste-lints/scripts/taste_lints.py:51

## Outputs — required
- Text output formatted with `format_text`:
  - "taste-lints: {result.files_scanned} files scanned, no violations found." — .claude/skills/taste-lints/scripts/taste_lints.py:997
  - Diagnostic error blocks formatted with `AGENT_REMEDIATION`:
    - "AGENT_REMEDIATION: Split this file into smaller modules." — .claude/skills/taste-lints/scripts/taste_lints.py:578
    - "AGENT_REMEDIATION: Plan progressive disclosure refactoring" — .claude/skills/taste-lints/scripts/taste_lints.py:857
  - Summary: "taste-lints: {result.files_scanned} files scanned, " — .claude/skills/taste-lints/scripts/taste_lints.py:1009
- JSON output formatted with `format_json`:
  - JSON object reporting `files_scanned`, `files_by_category`, `error_count`, `warning_count`, and `violations` list — .claude/skills/taste-lints/scripts/taste_lints.py:1018-1036
- Process exit codes:
  - `EXIT_SUCCESS = 0` — .claude/skills/taste-lints/scripts/taste_lints.py:20
  - `EXIT_ERROR = 1` — .claude/skills/taste-lints/scripts/taste_lints.py:21
  - `EXIT_VIOLATIONS = 10` — .claude/skills/taste-lints/scripts/taste_lints.py:22

## Invokes — required
none

## Invoked by — required
- skill taste-lints — .claude/skills/taste-lints/SKILL.md:69
- skill taste-lints — .claude/skills/taste-lints/SKILL.md:78

## Concepts named — required, verbatim
- `Taste invariant linter` — .claude/skills/taste-lints/scripts/taste_lints.py:2 — defined here
- `remediation instructions` — .claude/skills/taste-lints/scripts/taste_lints.py:2 — defined here
- `EXIT_SUCCESS` — .claude/skills/taste-lints/scripts/taste_lints.py:20 — defined here
- `EXIT_ERROR` — .claude/skills/taste-lints/scripts/taste_lints.py:21 — defined here
- `EXIT_VIOLATIONS` — .claude/skills/taste-lints/scripts/taste_lints.py:22 — defined here
- `frontmatter` — .claude/skills/taste-lints/scripts/taste_lints.py:24 — used here
- `file-size` — .claude/skills/taste-lints/scripts/taste_lints.py:34 — defined here
- `naming` — .claude/skills/taste-lints/scripts/taste_lints.py:34 — defined here
- `complexity` — .claude/skills/taste-lints/scripts/taste_lints.py:34 — defined here
- `skill-size` — .claude/skills/taste-lints/scripts/taste_lints.py:34 — defined here
- `SCANNABLE_EXTENSIONS` — .claude/skills/taste-lints/scripts/taste_lints.py:37 — defined here
- `FILE_SIZE_EXEMPT_SUFFIX` — .claude/skills/taste-lints/scripts/taste_lints.py:76 — defined here
- `FILE_SIZE_EXEMPT_SEGMENTS` — .claude/skills/taste-lints/scripts/taste_lints.py:78 — defined here
- `Violation` — .claude/skills/taste-lints/scripts/taste_lints.py:158 — defined here
- `LintResult` — .claude/skills/taste-lints/scripts/taste_lints.py:171 — defined here
- `CWE-22` — .claude/skills/taste-lints/scripts/taste_lints.py:188 — used here
- `is_safe_path` — .claude/skills/taste-lints/scripts/taste_lints.py:187 — defined here
- `get_staged_files` — .claude/skills/taste-lints/scripts/taste_lints.py:201 — defined here
- `get_diff_files` — .claude/skills/taste-lints/scripts/taste_lints.py:255 — defined here
- `CWE-88` — .claude/skills/taste-lints/scripts/taste_lints.py:265 — used here
- `get_diff_line_numbers` — .claude/skills/taste-lints/scripts/taste_lints.py:336 — defined here
- `get_base_file_line_count` — .claude/skills/taste-lints/scripts/taste_lints.py:374 — defined here
- `get_files_from_directory` — .claude/skills/taste-lints/scripts/taste_lints.py:383 — defined here
- `check_file_size` — .claude/skills/taste-lints/scripts/taste_lints.py:557 — defined here
- `AGENT_REMEDIATION` — .claude/skills/taste-lints/scripts/taste_lints.py:568 — defined here
- `snake_case` — .claude/skills/taste-lints/scripts/taste_lints.py:637 — defined here
- `kebab-case` — .claude/skills/taste-lints/scripts/taste_lints.py:656 — defined here
- `check_naming` — .claude/skills/taste-lints/scripts/taste_lints.py:713 — defined here
- `check_complexity` — .claude/skills/taste-lints/scripts/taste_lints.py:761 — defined here
- `cyclomatic complexity` — .claude/skills/taste-lints/scripts/taste_lints.py:816 — used here
- `check_skill_size` — .claude/skills/taste-lints/scripts/taste_lints.py:821 — defined here
- `progressive disclosure` — .claude/skills/taste-lints/scripts/taste_lints.py:840 — used here
- `size-exception: true` — .claude/skills/taste-lints/scripts/taste_lints.py:827 — defined here
- `run_lint` — .claude/skills/taste-lints/scripts/taste_lints.py:953 — defined here
- `format_text` — .claude/skills/taste-lints/scripts/taste_lints.py:994 — defined here
- `format_json` — .claude/skills/taste-lints/scripts/taste_lints.py:1016 — defined here

## Structure
none (python script; functions and classes in order of definition: `_git_root_for_cwd`, `_repo_relative_parts`, `_generated_by_path`, `classify_file_category`, `Violation`, `LintResult`, `is_safe_path`, `get_staged_files`, `_git_root`, `get_diff_files`, `_parse_hunk_header`, `_run_git`, `get_diff_line_numbers`, `get_base_file_line_count`, `get_files_from_directory`, `read_file_lines`, `_looks_like_yaml_value`, `_looks_like_yaml_mapping`, `_suppression_window`, `has_suppression`, `_is_file_size_exempt`, `check_file_size`, `_check_python_naming`, `_check_yaml_naming`, `_check_hook_naming`, `_check_skill_dir_naming`, `check_naming`, `_emit_if_complex`, `_is_func_body_end`, `check_complexity`, `_complexity_violation`, `check_skill_size`, `_to_snake_case`, `_to_kebab_case`, `_filter_violations_for_diff`, `_lint_file_rules`, `run_lint`, `format_text`, `format_json`, `parse_rules`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/taste-lints/scripts/taste_lints.py`, language: Python 3.11+, lines: 1129
- documented invocation:
  - "Exit codes: 0 = clean, 1 = script error, 10 = violations detected." — .claude/skills/taste-lints/scripts/taste_lints.py:4
  - "python3 .claude/skills/taste-lints/scripts/taste_lints.py" — .claude/skills/taste-lints/SKILL.md:69
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - Test 1 (Clean scan on SKILL.md):
    `python3 sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py sources/rjm/.claude/skills/taste-lints/SKILL.md`
    stdout:
    ```
    taste-lints: 1 files scanned, no violations found.
    ```
    **actual exit code**: 0
  - Test 2 (Scan on self — file-size over 500 lines):
    `python3 sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py`
    stdout:
    ```
    [ERROR] authored file-size: sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py:1128
      File exceeds 500 lines (1128 lines)
      AGENT_REMEDIATION: Split this file into smaller modules. Consider extracting:
      1. Helper functions -> taste_lints_helpers.py
      2. Type definitions -> taste_lints_types.py
      3. Constants -> taste_lints_constants.py
      Target: each module under 300 lines for good cohesion.

    taste-lints: 1 files scanned, 1 error(s), 0 warning(s)
    ```
    **actual exit code**: 10
  - Test 3 (JSON formatted output):
    `python3 sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py --format json sources/rjm/.claude/skills/taste-lints/SKILL.md`
    stdout:
    ```json
    {
      "files_scanned": 1,
      "files_by_category": {
        "authored": 1
      },
      "error_count": 0,
      "warning_count": 0,
      "violations": []
    }
    ```
    **actual exit code**: 0
  - Test 4 (Invalid rule argument):
    `python3 sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py --rules foo sources/rjm/.claude/skills/taste-lints/SKILL.md`
    stderr:
    ```
    error: unknown rules: foo
    valid rules: file-size, naming, complexity, skill-size
    ```
    **actual exit code**: 1
- documented exit codes vs. actual exit paths:
  - Documented in docstring:
    - "Exit codes: 0 = clean, 1 = script error, 10 = violations detected." — .claude/skills/taste-lints/scripts/taste_lints.py:4
  - Actual exit paths in code:
    - `sys.exit(EXIT_ERROR)` — .claude/skills/taste-lints/scripts/taste_lints.py:1048
    - `return EXIT_ERROR` — .claude/skills/taste-lints/scripts/taste_lints.py:1102
    - `return EXIT_ERROR` — .claude/skills/taste-lints/scripts/taste_lints.py:1109
    - `return EXIT_SUCCESS` — .claude/skills/taste-lints/scripts/taste_lints.py:1113
    - `return EXIT_VIOLATIONS` — .claude/skills/taste-lints/scripts/taste_lints.py:1123
    - `return EXIT_SUCCESS` — .claude/skills/taste-lints/scripts/taste_lints.py:1124
    - `sys.exit(main())` — .claude/skills/taste-lints/scripts/taste_lints.py:1128
- for validators/gates: can it exit non-zero? Yes (exits 1 on error, 10 on violations). Does it fail on the source repo's own default branch? Yes, running on itself (`taste_lints.py`, 1129 lines) produces exit code 10 due to `file-size` violation.
- does the output match what the documentation claims? Yes, exit codes and diagnostic message formats match.

## Defects — required
- `other` · .claude/skills/taste-lints/scripts/taste_lints.py:1128 — The script exceeds its own file size threshold of 500 lines (1129 lines) and contains no `# taste-lint: ignore file-size` suppression comment, causing it to fail on itself with exit code 10.
- `doc-drift` · .claude/skills/taste-lints/scripts/taste_lints.py:34 — Only four rules (`file-size`, `naming`, `complexity`, `skill-size`) are supported; structured logging mentioned in `SKILL.md:4` is omitted.
- `doc-drift` · .claude/skills/taste-lints/scripts/taste_lints.py:722-730 — The naming convention validator only checks Python files, YAML files, and skill directory names, omitting the PowerShell PascalCase and uppercase constants described in `SKILL.md:55-56`.

## Observations
- Security hardening: The script explicitly verifies that path components do not contain `..` to prevent directory traversal attacks (CWE-22) and validates that the `--diff-scope` base argument does not start with `-` to avoid argument injection (CWE-88).
- Diff scoping for PRs: Uses git diff inspection (`--diff-scope`) to isolate violations strictly to lines modified in the PR branch or files that grew during the PR, avoiding noisy failures on existing legacy code.

## Context cost
41,729 bytes (~10,432 tokens). Standalone script with standard library and git CLI dependencies only.
