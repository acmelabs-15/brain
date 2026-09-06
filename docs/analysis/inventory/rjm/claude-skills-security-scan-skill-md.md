---
package: rjm
path: .claude/skills/security-scan/SKILL.md
type: skill
bytes: 11718
unit: inv-rjm-157
in_scope_via: .claude/commands/test.md
aliases: []
memo_inputs:
  - {path: .claude/skills/security-scan/SKILL.md, sha256: 03e48076bcdaf02504ae25b8f8f0b2b45230fea3b2944ab7fac885aeb20cffb5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/security-scan/SKILL.md

## Purpose — required, verbatim
> "Detect CWE-78 (command injection) regex patterns in Python, PowerShell, Bash, and C# files before PR submission. CWE-22 is delegated to CodeQL; see Scope. Use when you ask \"scan for command injection\", \"CWE-78 check before PR\". Do NOT use to decide whether security review is warranted (use security-detection)." — .claude/skills/security-scan/SKILL.md:3
> "Proactive vulnerability detection for command injection (CWE-78) before PR submission." — .claude/skills/security-scan/SKILL.md:11

## Design intent — required
The `security-scan` skill provides fast, deterministic, pre-PR security verification specifically targeting command injection vulnerabilities (CWE-78) in Python, PowerShell, Bash, and C# source files. Full semantic SAST solutions like CodeQL require compilation, database generation, and minutes of execution time, making them poorly suited for rapid local developer inner-loop or pre-commit checks. By using targeted, unambiguous regex patterns without taint analysis, `security-scan` catches obvious shell execution and string interpolation defects in seconds before code is committed or pushed. Furthermore, it explicitly establishes architectural boundaries by delegating complex path traversal (CWE-22) analysis to CI CodeQL and delegating file routing/triage to `security-detection`, avoiding high false-positive rates and maintaining clear separation of responsibilities across the security toolchain. Without it, developers and autonomous agents would either omit pre-PR security scans due to CodeQL's heavy overhead or introduce brittle, high-noise regex patterns across multiple vulnerability classes.

## Phase — required
rjm:test, rjm:ship

## Inputs — required
- Positional file arguments: `files` (`path/to/file.py another/script.ps1`) — .claude/skills/security-scan/SKILL.md:94
- CLI flag `--git-staged`: Staged files via git enumeration — .claude/skills/security-scan/SKILL.md:88
- CLI flag `--directory, -d DIRECTORY`: Directory scan root (`--directory src/`) — .claude/skills/security-scan/SKILL.md:100
- CLI flag `--cwe CWE`: CWE filter (`--cwe 78`) — .claude/skills/security-scan/SKILL.md:113
- CLI flag `--format, -f {console,json}`: Output formatting — .claude/skills/security-scan/SKILL.md:106
- CLI flag `--output, -o OUTPUT`: Output file destination (default: stdout)
- User trigger phrases:
  - "scan for vulnerabilities" — .claude/skills/security-scan/SKILL.md:27
  - "check for command injection" — .claude/skills/security-scan/SKILL.md:28
  - "check for path traversal" — .claude/skills/security-scan/SKILL.md:29
  - "pre-PR security scan" — .claude/skills/security-scan/SKILL.md:30
  - "run security scan" — .claude/skills/security-scan/SKILL.md:31
- Supported source files matching extensions: `.py`, `.ps1`, `.sh`, `.cs`, `.bash` — .claude/skills/security-scan/SKILL.md:203
- In-source suppression comments: "# security-scan: ignore CWE-78 - command validated by allow_list at line N" — .claude/skills/security-scan/SKILL.md:243

## Outputs — required
- Console output report of detected vulnerabilities with file location, line number, pattern matched, code snippet, severity, and remediation recommendation — .claude/skills/security-scan/SKILL.md:124
- Machine-readable JSON output containing scan timestamp, files scanned, vulnerability details (CWE, file, line, code, severity, recommendation), and summary statistics — .claude/skills/security-scan/SKILL.md:128
- Process exit codes: `0` (clean / pass), `1` (scan error / fail), `10` (vulnerabilities detected / CI blocking) — .claude/skills/security-scan/SKILL.md:136
- Process exit code `3` (`EXIT_EXTERNAL` on git enumeration failure in `scripts/scan_constants.py:17` and `scripts/scan_vulnerabilities.py:457`, omitted from documentation)

## Invokes — required
- script scripts/scan_vulnerabilities.py — .claude/skills/security-scan/SKILL.md:77
- script scan_constants.py — .claude/skills/security-scan/SKILL.md:79
- script scan_patterns.py — .claude/skills/security-scan/SKILL.md:79
- script scan_format.py — .claude/skills/security-scan/SKILL.md:79
- config codeql-config.yml — .claude/skills/security-scan/SKILL.md:19
- file .github/workflows/codeql-analysis.yml — .claude/skills/security-scan/SKILL.md:116
- config lefthook.yml — .claude/skills/security-scan/SKILL.md:173
- skill security-detection — .claude/skills/security-scan/SKILL.md:44
- skill codeql-scan — .claude/skills/security-scan/SKILL.md:49
- skill threat-modeling — .claude/skills/security-scan/SKILL.md:55
- skill analyze — .claude/skills/security-scan/SKILL.md:270
- doc .agents/analysis/closed-pr-reviewer-patterns-2026-02-08.md — .claude/skills/security-scan/SKILL.md:13
- config .github/codeql/codeql-config.yml — .claude/skills/security-scan/SKILL.md:289

## Invoked by — required
- command test — .claude/commands/test.md:70
- command ship — .claude/commands/ship.md:78
- reference agent-safety — .claude/skills/review/references/agent-safety.md:51
- agent ADR-054 — .agents/architecture/ADR-054-local-security-scanning.md:36
- skill autoplan — .claude/skills/autoplan/SKILL.md:130
- skill ai-agents-external-claims — .claude/skills/ai-agents-external-claims/SKILL.md:30
- skill analyze — .claude/skills/analyze/SKILL.md:4
- skill security-detection — .claude/skills/security-detection/SKILL.md:3
- skill security-review — .claude/skills/security-review/SKILL.md:216
- doc workflow-commands.md — docs/workflow-commands.md:163

## Concepts named — required, verbatim
- `security-scan` — .claude/skills/security-scan/SKILL.md:2 — defined here
- `CWE-78` — .claude/skills/security-scan/SKILL.md:3 — defined here
- `command injection` — .claude/skills/security-scan/SKILL.md:3 — used here
- `CWE-22` — .claude/skills/security-scan/SKILL.md:3 — used here
- `CodeQL` — .claude/skills/security-scan/SKILL.md:3 — used here
- `security-detection` — .claude/skills/security-scan/SKILL.md:3 — used here
- `taint analysis` — .claude/skills/security-scan/SKILL.md:17 — used here
- `path traversal` — .claude/skills/security-scan/SKILL.md:19 — used here
- `python-security-extended.qls` — .claude/skills/security-scan/SKILL.md:19 — used here
- `actions-security-extended.qls` — .claude/skills/security-scan/SKILL.md:19 — used here
- `codeql-config.yml` — .claude/skills/security-scan/SKILL.md:19 — used here
- `buy-vs-build` — .claude/skills/security-scan/SKILL.md:19 — used here
- `pre-commit security gates` — .claude/skills/security-scan/SKILL.md:42 — used here
- `codeql-scan` — .claude/skills/security-scan/SKILL.md:49 — used here
- `SAST` — .claude/skills/security-scan/SKILL.md:51 — used here
- `SARIF` — .claude/skills/security-scan/SKILL.md:53 — used here
- `threat-modeling` — .claude/skills/security-scan/SKILL.md:55 — used here
- `STRIDE` — .claude/skills/security-scan/SKILL.md:58 — used here
- `CWE-78: Command Injection` — .claude/skills/security-scan/SKILL.md:144 — defined here
- `Detection Heuristics` — .claude/skills/security-scan/SKILL.md:160 — defined here
- `Pre-commit Hook` — .claude/skills/security-scan/SKILL.md:171 — used here
- `lefthook.yml` — .claude/skills/security-scan/SKILL.md:173 — used here
- `security agent` — .claude/skills/security-scan/SKILL.md:187 — used here
- `Security Scan Workflow` — .claude/skills/security-scan/SKILL.md:194 — defined here
- `Anti-Patterns` — .claude/skills/security-scan/SKILL.md:226 — defined here
- `Suppression` — .claude/skills/security-scan/SKILL.md:238 — defined here
- `Verification` — .claude/skills/security-scan/SKILL.md:250 — defined here
- `analyze` — .claude/skills/security-scan/SKILL.md:270 — used here
- `OWASP` — .claude/skills/security-scan/SKILL.md:278 — used here

## Structure
- `# Security Scan` — .claude/skills/security-scan/SKILL.md:9
- `## Scope` — .claude/skills/security-scan/SKILL.md:15
- `## Triggers` — .claude/skills/security-scan/SKILL.md:23
- `## When to Use` — .claude/skills/security-scan/SKILL.md:35
- `## Quick Reference` — .claude/skills/security-scan/SKILL.md:63
- `## Scripts` — .claude/skills/security-scan/SKILL.md:73
- `## Usage` — .claude/skills/security-scan/SKILL.md:83
- `### Basic Scan (Staged Files)` — .claude/skills/security-scan/SKILL.md:85
- `### Scan Specific Files` — .claude/skills/security-scan/SKILL.md:91
- `### Scan Directory` — .claude/skills/security-scan/SKILL.md:97
- `### JSON Output (CI Integration)` — .claude/skills/security-scan/SKILL.md:103
- `### Specific CWE Focus` — .claude/skills/security-scan/SKILL.md:109
- `## Output` — .claude/skills/security-scan/SKILL.md:120
- `### Console Output (Default)` — .claude/skills/security-scan/SKILL.md:122
- `### JSON Output (CI Mode)` — .claude/skills/security-scan/SKILL.md:126
- `## Exit Codes` — .claude/skills/security-scan/SKILL.md:132
- `## Detected Patterns` — .claude/skills/security-scan/SKILL.md:142
- `### CWE-78: Command Injection` — .claude/skills/security-scan/SKILL.md:144
- `## Integration` — .claude/skills/security-scan/SKILL.md:169
- `### Pre-commit Hook` — .claude/skills/security-scan/SKILL.md:171
- `### CI Integration` — .claude/skills/security-scan/SKILL.md:176
- `### Workflow Integration` — .claude/skills/security-scan/SKILL.md:180
- `## Process` — .claude/skills/security-scan/SKILL.md:191
- `## Anti-Patterns` — .claude/skills/security-scan/SKILL.md:226
- `## Suppression` — .claude/skills/security-scan/SKILL.md:238
- `## Verification` — .claude/skills/security-scan/SKILL.md:250
- `## Related Skills` — .claude/skills/security-scan/SKILL.md:263
- `## References` — .claude/skills/security-scan/SKILL.md:274
- `## Extension Points` — .claude/skills/security-scan/SKILL.md:284

## Scripts — required if type is script or the skill ships scripts
For script `scripts/scan_vulnerabilities.py`:
- path: `.claude/skills/security-scan/scripts/scan_vulnerabilities.py`, language: Python 3, lines: 562
- documented invocation:
  - "python .claude/skills/security-scan/scripts/scan_vulnerabilities.py --git-staged" — .claude/skills/security-scan/SKILL.md:88
  - "python .claude/skills/security-scan/scripts/scan_vulnerabilities.py path/to/file.py another/script.ps1" — .claude/skills/security-scan/SKILL.md:94
  - "python .claude/skills/security-scan/scripts/scan_vulnerabilities.py --directory src/" — .claude/skills/security-scan/SKILL.md:100
  - "python .claude/skills/security-scan/scripts/scan_vulnerabilities.py --git-staged --format json" — .claude/skills/security-scan/SKILL.md:106
  - "python .claude/skills/security-scan/scripts/scan_vulnerabilities.py --cwe 78 --git-staged" — .claude/skills/security-scan/SKILL.md:113
- **executed:** yes
- actual command run: `python3 .claude/skills/security-scan/scripts/scan_vulnerabilities.py --directory src/` (in `sources/rjm`)
  abridged stdout:
  ```text
  [CWE-78] Command Injection Vulnerability
    File: src/copilot-cli/skills/github/scripts/gh-native/post-issue-comment.sh:111
    Pattern: Unquoted variable expansion (potential word splitting/injection)
    Code: repo: $repo
    Severity: MEDIUM
    Recommendation: Quote all variable expansions: use "$var" instead of $var
  ...
  === Summary ===
  Files scanned: 286
  Vulnerabilities found: 41
    CWE-78 (Command Injection): 41

  Exit code: 10 (vulnerabilities detected)
  ```
  **actual exit code**: 10
- clean run verification command: `python3 .claude/skills/security-scan/scripts/scan_vulnerabilities.py .claude/skills/security-scan/scripts/scan_vulnerabilities.py` (in `sources/rjm`)
  stdout:
  ```text
  === Security Vulnerability Scan ===

  Files scanned: 1
  No vulnerabilities found.
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths in code:
  Documented in SKILL.md:
  - "0" — .claude/skills/security-scan/SKILL.md:77
  - "1" — .claude/skills/security-scan/SKILL.md:77
  - "10" — .claude/skills/security-scan/SKILL.md:77
  Actual exit paths in code:
  - `sys.exit(EXIT_ERROR)` (.claude/skills/security-scan/scripts/scan_vulnerabilities.py:406) on invalid/unsupported CWE filter argument
  - `sys.exit(EXIT_ERROR)` (.claude/skills/security-scan/scripts/scan_vulnerabilities.py:442) when no files specified or found
  - `sys.exit(EXIT_EXTERNAL)` (.claude/skills/security-scan/scripts/scan_vulnerabilities.py:457) when git enumeration fails (`EXIT_EXTERNAL = 3` in `scan_constants.py:17`)
  - `sys.exit(EXIT_ERROR)` (.claude/skills/security-scan/scripts/scan_vulnerabilities.py:469) when `--directory` path is not found or not a directory
  - `sys.exit(EXIT_SUCCESS)` (.claude/skills/security-scan/scripts/scan_vulnerabilities.py:482) on explicit `--cwe 22` without other CWEs
  - `sys.exit(EXIT_ERROR)` (.claude/skills/security-scan/scripts/scan_vulnerabilities.py:484) when a specified file does not exist or path traversal is detected
  - `sys.exit(EXIT_SUCCESS)` (.claude/skills/security-scan/scripts/scan_vulnerabilities.py:495) when no supported source files are found among candidates
  - `sys.exit(_exit_code_for_result(result))` (.claude/skills/security-scan/scripts/scan_vulnerabilities.py:557) returning `EXIT_VULNERABILITIES` (10) if findings exist, else `EXIT_SUCCESS` (0)
- for validators/gates: can it exit non-zero? Yes, exits 1 on argument/file errors, 3 on external git failures, and 10 on vulnerability detections. Does it fail on the source repo's own default branch? Yes, scanning `--directory src/` flags 41 unquoted shell variable expansions and exits 10.
- does the output match what the documentation claims? Yes, console and summary outputs match documentation format, but SKILL.md exit code table omits code 3 (`EXIT_EXTERNAL`).

Helper modules shipped with the skill:
- `.claude/skills/security-scan/scripts/scan_constants.py`: Python 3, 19 lines. Central exit code constants (`EXIT_SUCCESS = 0`, `EXIT_ERROR = 1`, `EXIT_EXTERNAL = 3`, `EXIT_VULNERABILITIES = 10`). Not a standalone CLI.
- `.claude/skills/security-scan/scripts/scan_format.py`: Python 3, 114 lines. Implements `format_console_output` and `format_json_output`. Not a standalone CLI.
- `.claude/skills/security-scan/scripts/scan_patterns.py`: Python 3, 203 lines. Implements `CWE78_PATTERNS`, `SEVERITY_WEIGHTS`, and pattern regex compilation. Not a standalone CLI.

## Defects — required
- `doc-drift` · .claude/skills/security-scan/SKILL.md:132 · Exit code table and scripts table document only exit codes 0, 1, and 10, omitting exit code 3 (`EXIT_EXTERNAL`), which is defined in `scripts/scan_constants.py:17` and raised on git enumeration failure at `scripts/scan_vulnerabilities.py:457`.
- `doc-drift` · .claude/skills/security-scan/SKILL.md:288 · Extension points table states "Add to `CWE78_PATTERNS` dict in scan_vulnerabilities.py", but `CWE78_PATTERNS` is defined in `scripts/scan_patterns.py:17` and merely imported/re-exported by `scan_vulnerabilities.py:56`.
- `orphan` · .claude/skills/security-scan/SKILL.md:274 · Skill ships four reference documents under `.claude/skills/security-scan/references/` (`agent-guardrails-template.md`, `agent-memory-inference-leakage.md`, `autonomous-execution-guardrails.md`, `vulnerability-patterns.md`), but `SKILL.md` never links, references, or loads any of them from its References or text.

## Observations
- Architectural buy-vs-build boundary: Explicitly delegates CWE-22 (path traversal) detection to GitHub CodeQL CI (`python-security-extended.qls` and `actions-security-extended.qls`) to avoid false positives and maintainer burden of custom regexes, as documented in issue #1843 and PR #1841.
- Clear separation between scanning and triage: The skill documentation explicitly points users to `security-detection` for determining if files warrant review, and to `codeql-scan` for full SAST/SARIF analysis.
- Multi-language coverage: Provides regex-based command injection detection across Python, PowerShell, Bash, and C# files.
- Suppression mechanics: Supports inline suppression comments (`# security-scan: ignore CWE-78 - <justification>`) with audit trail tracking.

## Context cost
- `.claude/skills/security-scan/SKILL.md`: 11,718 bytes (~2,930 tokens)
- Loaded helper scripts:
  - `scan_vulnerabilities.py`: 19,702 bytes (~4,925 tokens)
  - `scan_patterns.py`: 6,798 bytes (~1,700 tokens)
  - `scan_format.py`: 4,262 bytes (~1,065 tokens)
  - `scan_constants.py`: 678 bytes (~170 tokens)
- Reference files in skill directory (if loaded):
  - `vulnerability-patterns.md`: 6,760 bytes (~1,690 tokens)
  - `agent-memory-inference-leakage.md`: 3,243 bytes (~811 tokens)
  - `agent-guardrails-template.md`: 3,242 bytes (~810 tokens)
  - `autonomous-execution-guardrails.md`: 1,955 bytes (~489 tokens)
Total skill directory size: 58,358 bytes (~14,590 tokens).
