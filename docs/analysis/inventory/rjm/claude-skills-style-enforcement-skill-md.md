---
package: rjm
path: .claude/skills/style-enforcement/SKILL.md
type: skill
bytes: 12088
unit: inv-rjm-175
in_scope_via: docs/skill-reference.md
aliases: []
memo_inputs:
  - {path: .claude/skills/style-enforcement/SKILL.md, sha256: b9ecc0242fe04b599b23d64edacb59ecfbf55b0b8e9b0d7e78bb338a2d7d9da7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/style-enforcement/SKILL.md

## Purpose — required, verbatim
> "Validate code files against configured style rules from project configuration files." — .claude/skills/style-enforcement/SKILL.md:11

## Design intent — required
Provides an agent skill and automated gate for enforcing code style and formatting standards derived from `.editorconfig` (and nominally StyleCop / MSBuild props) before code submission. It guides agents on when to use lightweight style enforcement versus full auto-formatters (e.g., `black`, `prettier`, `dotnet format`) or linter toolchains (`dotnet build`, ESLint), details rule definitions for line endings, indentation, encoding, trailing whitespace, EOF newline, and C# naming conventions, and specifies pre-commit hook and CI SARIF upload configurations. Without this skill, coding agents would submit code with inconsistent indentation, stray CRLF endings, missing EOF newlines, or unconventional naming, triggering manual review feedback cycles (which moq.analyzers historical data cited in the skill showed accounted for 9.8% of review comments).

## Phase — required
rjm:build

## Inputs — required
- Trigger phrases: `check style compliance`, `validate editorconfig rules`, `run style enforcement`, `check naming conventions`, `validate line endings` (.claude/skills/style-enforcement/SKILL.md:17-21)
- Target file or directory path (`--target`, default `.`)
- Git staged changes (`--git-staged`)
- Configuration sources: `.editorconfig`, `.stylecop.json` / `stylecop.json`, `Directory.Build.props` (.claude/skills/style-enforcement/SKILL.md:57-64)
- Minimum severity threshold (`--severity`: `error`, `warning`, `info`)

## Outputs — required
- Console text report showing file, line, rule ID, violation message, and exit code
- JSON violation artifact (`violations.json`) with per-severity counts
- SARIF report (`style-results.sarif` / `results.sarif`) for GitHub Code Scanning
- Gate exit status: exit 0 (pass), exit 10 (violations present), exit 1 (tool error)

## Invokes — required
- script .claude/skills/style-enforcement/scripts/check_style.py — .claude/skills/style-enforcement/SKILL.md:228
- skill code-qualities-assessment — .claude/skills/style-enforcement/SKILL.md:411
- skill analyze — .claude/skills/style-enforcement/SKILL.md:412
- skill security-scan — .claude/skills/style-enforcement/SKILL.md:413
- reference references/dotnet-monorepo-standards.md — .claude/skills/style-enforcement/SKILL.md:421

## Invoked by — required
- skill prose-self-check — .claude/skills/prose-self-check/SKILL.md:268
- skill doc-accuracy — .claude/skills/doc-accuracy/SKILL.md:262
- skill validation-authority — .claude/skills/validation-authority/SKILL.md:137
- skill analysis-provenance — .claude/skills/analysis-provenance/SKILL.md:142
- doc docs/skill-reference.md — docs/skill-reference.md:98

## Concepts named — required, verbatim
- `style-enforcement` — .claude/skills/style-enforcement/SKILL.md:2 — defined here
- `moq.analyzers` — .claude/skills/style-enforcement/SKILL.md:45 — used here
- `.editorconfig` — .claude/skills/style-enforcement/SKILL.md:61 — used here
- `.stylecop.json` — .claude/skills/style-enforcement/SKILL.md:62 — used here
- `Directory.Build.props` — .claude/skills/style-enforcement/SKILL.md:63 — used here
- `dotnet_naming_rule` — .claude/skills/style-enforcement/SKILL.md:80 — used here
- `dotnet_naming_style` — .claude/skills/style-enforcement/SKILL.md:84 — used here
- `STYLE-001` — .claude/skills/style-enforcement/SKILL.md:96 — defined here
- `STYLE-002` — .claude/skills/style-enforcement/SKILL.md:106 — defined here
- `STYLE-003` — .claude/skills/style-enforcement/SKILL.md:116 — defined here
- `STYLE-004` — .claude/skills/style-enforcement/SKILL.md:126 — defined here
- `STYLE-005` — .claude/skills/style-enforcement/SKILL.md:136 — defined here
- `STYLE-010` — .claude/skills/style-enforcement/SKILL.md:146 — defined here
- `Configuration Discovery` — .claude/skills/style-enforcement/SKILL.md:157 — defined here
- `Rule Compilation` — .claude/skills/style-enforcement/SKILL.md:163 — defined here
- `File Scanning` — .claude/skills/style-enforcement/SKILL.md:168 — defined here
- `Report Generation` — .claude/skills/style-enforcement/SKILL.md:173 — defined here
- `Pre-commit Hook` — .claude/skills/style-enforcement/SKILL.md:219 — defined here
- `GitHub Actions` — .claude/skills/style-enforcement/SKILL.md:234 — defined here
- `Agent Pre-Submission` — .claude/skills/style-enforcement/SKILL.md:254 — defined here
- `Suppression` — .claude/skills/style-enforcement/SKILL.md:324 — defined here

## Structure
- `# Style Enforcement` — .claude/skills/style-enforcement/SKILL.md:9
- `## Triggers` — .claude/skills/style-enforcement/SKILL.md:15
- `## Quick Start` — .claude/skills/style-enforcement/SKILL.md:25
- `## Evidence` — .claude/skills/style-enforcement/SKILL.md:43
- `## Configuration Sources` — .claude/skills/style-enforcement/SKILL.md:55
- `### .editorconfig Properties Checked` — .claude/skills/style-enforcement/SKILL.md:65
- `### .editorconfig Naming Conventions (C#)` — .claude/skills/style-enforcement/SKILL.md:76
- `## Detection Capabilities` — .claude/skills/style-enforcement/SKILL.md:89
- `### Line Ending Violations` — .claude/skills/style-enforcement/SKILL.md:91
- `### Indentation Violations` — .claude/skills/style-enforcement/SKILL.md:101
- `### Charset Violations` — .claude/skills/style-enforcement/SKILL.md:111
- `### Trailing Whitespace` — .claude/skills/style-enforcement/SKILL.md:121
- `### Final Newline` — .claude/skills/style-enforcement/SKILL.md:131
- `### Naming Convention Violations (C#)` — .claude/skills/style-enforcement/SKILL.md:141
- `## Process` — .claude/skills/style-enforcement/SKILL.md:153
- `## Command Reference` — .claude/skills/style-enforcement/SKILL.md:182
- `### Basic Usage` — .claude/skills/style-enforcement/SKILL.md:184
- `### Parameters` — .claude/skills/style-enforcement/SKILL.md:190
- `### Exit Codes` — .claude/skills/style-enforcement/SKILL.md:201
- `## Scripts` — .claude/skills/style-enforcement/SKILL.md:211
- `## Integration` — .claude/skills/style-enforcement/SKILL.md:217
- `### Pre-commit Hook` — .claude/skills/style-enforcement/SKILL.md:219
- `### GitHub Actions` — .claude/skills/style-enforcement/SKILL.md:234
- `### Agent Pre-Submission` — .claude/skills/style-enforcement/SKILL.md:254
- `## Examples` — .claude/skills/style-enforcement/SKILL.md:266
- `### Example 1: Check Single File` — .claude/skills/style-enforcement/SKILL.md:268
- `### Example 2: JSON Output for CI` — .claude/skills/style-enforcement/SKILL.md:289
- `### Example 3: SARIF for GitHub Code Scanning` — .claude/skills/style-enforcement/SKILL.md:316
- `## Suppression` — .claude/skills/style-enforcement/SKILL.md:324
- `## When to Use` — .claude/skills/style-enforcement/SKILL.md:340
- `## Language Support` — .claude/skills/style-enforcement/SKILL.md:357
- `### Fully Supported` — .claude/skills/style-enforcement/SKILL.md:359
- `### Basic Support (line endings, indentation, charset)` — .claude/skills/style-enforcement/SKILL.md:368
- `## Anti-Patterns` — .claude/skills/style-enforcement/SKILL.md:380
- `## Verification` — .claude/skills/style-enforcement/SKILL.md:391
- `## Related Skills` — .claude/skills/style-enforcement/SKILL.md:407
- `## References` — .claude/skills/style-enforcement/SKILL.md:417
- `## Timelessness: 8/10` — .claude/skills/style-enforcement/SKILL.md:425

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/style-enforcement/scripts/check_style.py`, language: Python 3, lines: 815
- documented invocation:
  - "python3 scripts/check_style.py --target ." — .claude/skills/style-enforcement/SKILL.md:29
  - "python3 scripts/check_style.py --git-staged" — .claude/skills/style-enforcement/SKILL.md:32
  - "python3 scripts/check_style.py src/models/user.cs src/services/auth.cs" — .claude/skills/style-enforcement/SKILL.md:35
  - "python3 scripts/check_style.py --target . --format json --output violations.json" — .claude/skills/style-enforcement/SKILL.md:38
  - "python3 scripts/check_style.py [options] [files...]" — .claude/skills/style-enforcement/SKILL.md:187
  - "python3 .claude/skills/style-enforcement/scripts/check_style.py --git-staged" — .claude/skills/style-enforcement/SKILL.md:259
  - "python3 scripts/check_style.py src/models/User.cs" — .claude/skills/style-enforcement/SKILL.md:271
  - "python3 scripts/check_style.py --target . --format json" — .claude/skills/style-enforcement/SKILL.md:292
  - "python3 scripts/check_style.py --target . --format sarif --output results.sarif" — .claude/skills/style-enforcement/SKILL.md:319
  - "python3 .claude/skills/style-enforcement/scripts/check_style.py \"$TARGET_PATH\"" — .claude/skills/style-enforcement/SKILL.md:396
- **executed:** yes
- actual command run: `python3 .claude/skills/style-enforcement/scripts/check_style.py --target .`
  abridged stdout:
  ```
  Warning: No .editorconfig found
  Style Enforcement Report
  ========================

  Files scanned: 14679
  Violations: 0
  Suppressed: 0

  Exit code: 0 (all files compliant)
  ```
  **actual exit code:** 0
- documented exit codes:
  - "0" — .claude/skills/style-enforcement/SKILL.md:205
  - "1" — .claude/skills/style-enforcement/SKILL.md:206
  - "10" — .claude/skills/style-enforcement/SKILL.md:207
  vs. actual exit paths in code:
  - exit 0: `sys.exit(EXIT_SUCCESS)` at .claude/skills/style-enforcement/scripts/check_style.py:757 and line 810
  - exit 1: `sys.exit(EXIT_ERROR)` at .claude/skills/style-enforcement/scripts/check_style.py:750 and line 806
  - exit 2: `argparse.ArgumentParser` exits with code 2 on unrecognized options
  - exit 10: `sys.exit(EXIT_VIOLATIONS)` at .claude/skills/style-enforcement/scripts/check_style.py:808
- for validators/gates:
  - Can it exit non-zero? Yes: exits 10 when violations are detected, 1 on path traversal or file read errors, 2 on invalid CLI options.
  - Does it fail on the source repo's own default branch? No: exits 0 with 0 violations because sources/rjm lacks a root `.editorconfig`.
- does the output match what the documentation claims? Partially: text, JSON, and SARIF output structures match documented examples, but `--config` parameter documented in SKILL.md:198 is not implemented in `check_style.py`, configuration sources `StyleCop.json` and `Directory.Build.props` (SKILL.md:57-64) are not read by the script, and claimed naming checks for Python, PowerShell, JS/TS, and C# interface prefixes (SKILL.md:361-367) are not implemented.

## Defects — required
- doc-drift · .claude/skills/style-enforcement/SKILL.md:57-64 · Claims the skill reads style configuration from `.stylecop.json` and `Directory.Build.props`, but `check_style.py` only implements `.editorconfig` discovery and parsing.
- doc-drift · .claude/skills/style-enforcement/SKILL.md:198 · Parameters table documents `--config` (path to .editorconfig), but `check_style.py` does not define or accept a `--config` CLI option.
- doc-drift · .claude/skills/style-enforcement/SKILL.md:361-367 · Language support table claims full naming rule support for Python (snake_case), PowerShell (Verb-Noun), JavaScript/TypeScript (camelCase), and C# interface prefix, but `check_style.py` only implements C# async method naming (`STYLE-010`).
- missing-path · .claude/skills/style-enforcement/SKILL.md:29 · Quick start and example commands use `python3 scripts/check_style.py`, which is a relative path that does not exist when run from repository root (where the script is located at `.claude/skills/style-enforcement/scripts/check_style.py`).

## Observations
- Evidence base: motivated by closed PR analysis on `moq.analyzers` (citation to `.agents/analysis/moq-analyzers-reviewer-patterns-2026-02-08.md`) finding that 9.8% of human reviewer feedback focused on naming and formatting conventions.
- Explicit gate protocol: defines exit code 10 as blocking and specifies integration into pre-commit hooks and GitHub Actions workflows with SARIF output.
- Context cost: 12088 bytes (SKILL.md) + 25571 bytes (check_style.py) + 3566 bytes (dotnet-monorepo-standards.md) = 41225 bytes (~10306 tokens).
