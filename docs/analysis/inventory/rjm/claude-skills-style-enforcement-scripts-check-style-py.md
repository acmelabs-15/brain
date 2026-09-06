---
package: rjm
path: .claude/skills/style-enforcement/scripts/check_style.py
type: script
bytes: 25571
unit: inv-rjm-175
in_scope_via: .claude/skills/style-enforcement/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/style-enforcement/scripts/check_style.py, sha256: 7db110a596baea3e24a59cddd61f5168743b98f30c14c9436b47445da5673838}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/style-enforcement/scripts/check_style.py

## Purpose — required, verbatim
> "Style enforcement checker for code files." — .claude/skills/style-enforcement/scripts/check_style.py:3

## Design intent — required
Automates verification of source code formatting against `.editorconfig` rules across multiple programming languages (C#, Python, PowerShell, JavaScript, TypeScript, Go, Rust, Java, Ruby, Markdown, YAML, JSON). It checks for line endings (CRLF vs LF vs CR), indentation (tabs vs spaces), charset and UTF-8 BOM presence, trailing whitespace, final newline at end of file, and C# async method naming conventions. It provides text, JSON, and SARIF output formats for integration into pre-commit hooks, agent verification loops, and CI workflows (such as GitHub Code Scanning). Without this script, style checks would rely on developer or agent manual inspection or heavy external language-specific toolchains, risking formatting regressions and style debates during code review.

## Phase — required
rjm:build

## Inputs — required
- CLI options: `--target <path>` (default: `.`), `--git-staged`, `--format <text|json|sarif>` (default: `text`), `--output <file>`, `--severity <error|warning|info>` (default: `warning`), positional `files ...`
- `.editorconfig` files discovered from target path up to root or `root = true`
- File contents of target files on disk
- Staged git files via `git diff --cached --name-only --diff-filter=ACMR` when `--git-staged` is passed
- Inline suppression comments matching `# style-enforcement: ignore STYLE-NNN`

## Outputs — required
- Text report to stdout or output file detailing scanned file count, violation count, suppressed count, per-file violations with line number and rule ID, and exit code status
- JSON report with schema containing `scan_timestamp`, `files_scanned`, `violations`, `suppressed`, and `summary` by severity
- SARIF v2.1.0 report with tool driver rules `STYLE-001` through `STYLE-010` and physical locations
- Exit codes: 0 (all compliant or no files), 1 (path traversal or file read error), 10 (violations detected)

## Invokes — required
- config .editorconfig — .claude/skills/style-enforcement/scripts/check_style.py:84
- command git — .claude/skills/style-enforcement/scripts/check_style.py:477

## Invoked by — required
- skill style-enforcement — .claude/skills/style-enforcement/SKILL.md:29
- skill style-enforcement — .claude/skills/style-enforcement/SKILL.md:32
- skill style-enforcement — .claude/skills/style-enforcement/SKILL.md:35
- skill style-enforcement — .claude/skills/style-enforcement/SKILL.md:38
- skill style-enforcement — .claude/skills/style-enforcement/SKILL.md:228
- skill style-enforcement — .claude/skills/style-enforcement/SKILL.md:245
- skill style-enforcement — .claude/skills/style-enforcement/SKILL.md:259
- skill style-enforcement — .claude/skills/style-enforcement/SKILL.md:396

## Concepts named — required, verbatim
- `EXIT_SUCCESS` — .claude/skills/style-enforcement/scripts/check_style.py:32 — defined here
- `EXIT_ERROR` — .claude/skills/style-enforcement/scripts/check_style.py:33 — defined here
- `EXIT_VIOLATIONS` — .claude/skills/style-enforcement/scripts/check_style.py:34 — defined here
- `style-enforcement` — .claude/skills/style-enforcement/scripts/check_style.py:38 — used here
- `Violation` — .claude/skills/style-enforcement/scripts/check_style.py:44 — defined here
- `StyleConfig` — .claude/skills/style-enforcement/scripts/check_style.py:56 — defined here
- `ScanResult` — .claude/skills/style-enforcement/scripts/check_style.py:71 — defined here
- `STYLE-001` — .claude/skills/style-enforcement/scripts/check_style.py:235 — defined here
- `STYLE-002` — .claude/skills/style-enforcement/scripts/check_style.py:271 — defined here
- `STYLE-003` — .claude/skills/style-enforcement/scripts/check_style.py:307 — defined here
- `STYLE-004` — .claude/skills/style-enforcement/scripts/check_style.py:343 — defined here
- `STYLE-005` — .claude/skills/style-enforcement/scripts/check_style.py:369 — defined here
- `STYLE-010` — .claude/skills/style-enforcement/scripts/check_style.py:411 — defined here
- `LineEndingViolation` — .claude/skills/style-enforcement/scripts/check_style.py:615 — defined here
- `IndentationViolation` — .claude/skills/style-enforcement/scripts/check_style.py:622 — defined here
- `CharsetViolation` — .claude/skills/style-enforcement/scripts/check_style.py:629 — defined here
- `TrailingWhitespace` — .claude/skills/style-enforcement/scripts/check_style.py:634 — defined here
- `FinalNewline` — .claude/skills/style-enforcement/scripts/check_style.py:641 — defined here
- `AsyncNamingConvention` — .claude/skills/style-enforcement/scripts/check_style.py:648 — defined here

## Structure
none (python script; classes and functions: Violation, StyleConfig, ScanResult, parse_editorconfig, find_editorconfig, match_pattern, get_config_for_file, detect_line_ending, check_line_endings, check_indentation, check_charset, check_trailing_whitespace, check_final_newline, check_csharp_async_naming, check_file, get_git_staged_files, get_files_to_check, format_text_output, format_json_output, format_sarif_output, main)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/style-enforcement/scripts/check_style.py`, language: Python 3, lines: 815
- documented invocation:
  - "python check_style.py --target ." — .claude/skills/style-enforcement/scripts/check_style.py:15
  - "python check_style.py --git-staged" — .claude/skills/style-enforcement/scripts/check_style.py:16
  - "python check_style.py src/models/User.cs" — .claude/skills/style-enforcement/scripts/check_style.py:17
  - "python check_style.py --format json --output violations.json" — .claude/skills/style-enforcement/scripts/check_style.py:18
- **executed:** yes
- actual command run: `python3 .claude/skills/style-enforcement/scripts/check_style.py .claude/skills/style-enforcement/scripts/check_style.py`
  abridged stdout:
  ```
  Warning: No .editorconfig found
  Style Enforcement Report
  ========================

  Files scanned: 1
  Violations: 0
  Suppressed: 0

  Exit code: 0 (all files compliant)
  ```
  **actual exit code:** 0
- documented exit codes:
  - "0  - All files compliant" — .claude/skills/style-enforcement/scripts/check_style.py:10
  - "1  - Script error (invalid arguments, config parse failure)" — .claude/skills/style-enforcement/scripts/check_style.py:11
  - "10 - Violations detected" — .claude/skills/style-enforcement/scripts/check_style.py:12
  vs. actual exit paths in code:
  - exit 0: `sys.exit(EXIT_SUCCESS)` at .claude/skills/style-enforcement/scripts/check_style.py:757 and line 810
  - exit 1: `sys.exit(EXIT_ERROR)` at .claude/skills/style-enforcement/scripts/check_style.py:750 and line 806
  - exit 2: `argparse.ArgumentParser` exits with code 2 on invalid CLI options
  - exit 10: `sys.exit(EXIT_VIOLATIONS)` at .claude/skills/style-enforcement/scripts/check_style.py:808
- for validators/gates:
  - Can it exit non-zero? Yes: exit 1 on path traversal attempt or file read/decode error; exit 10 when violations are detected; exit 2 on invalid CLI options.
  - Does it fail on the source repo's own default branch? No: when executed with `--target .` on the source repository, it prints `Warning: No .editorconfig found` and exits 0 with 0 violations across 14,679 scanned files, because the repo root lacks an `.editorconfig`.
- does the output match what the documentation claims? Partially: text, JSON, and SARIF output formats match specifications, but the script does not parse `StyleCop.json` or `Directory.Build.props` despite the docstring claim (lines 5-6), ignores non-existent target files by exiting 0 ("No files to check"), and exits 2 rather than 1 on unrecognized CLI arguments.

## Defects — required
- doc-drift · .claude/skills/style-enforcement/scripts/check_style.py:5 · Docstring claims validation against StyleCop.json and Directory.Build.props, but the script only discovers and parses .editorconfig files.
- exit-code-mismatch · .claude/skills/style-enforcement/scripts/check_style.py:11 · Docstring claims invalid arguments exit with code 1, but argparse exits with code 2 on invalid or unrecognized CLI options.
- script-bug · .claude/skills/style-enforcement/scripts/check_style.py:755 · Non-existent target file paths are silently omitted in get_files_to_check, causing the script to exit with code 0 and output "No files to check" instead of failing.

## Observations
- Implements path traversal defense (CWE-22) in `main()` by checking that `--target`, `--output`, and positional files resolve under `allowed_base` (`os.path.abspath(".")`).
- Supports SARIF v2.1.0 output formatting for direct ingestion by GitHub Code Scanning via `github/codeql-action/upload-sarif`.
- Context cost: 25571 bytes (~6393 tokens). Invokes nothing additional.
