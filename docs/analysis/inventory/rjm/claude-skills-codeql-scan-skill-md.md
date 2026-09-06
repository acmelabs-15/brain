---
package: rjm
path: .claude/skills/codeql-scan/SKILL.md
type: skill
bytes: 9919
unit: inv-rjm-104
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/codeql-scan/SKILL.md, sha256: 8a6c6ef93c8eec0a5ec66fa0c367185ac6f166ca9f3bdfc9d2e8f6daae3ae0d6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/codeql-scan/SKILL.md

## Purpose — required, verbatim
> "Execute CodeQL security scans with automated language detection, database caching, and SARIF output generation." — .claude/skills/codeql-scan/SKILL.md:10

## Design intent — required
Defines Claude Code skill instructions and procedural guidance for static application security testing (SAST) using GitHub CodeQL. Documents the decision tree for choosing between full repository scans, quick cached scans, and configuration validation; details prerequisites, CLI installation, execution workflows, output formats (console, SARIF, CI JSON), diagnostics, anti-patterns, and troubleshooting. Without it, agents would lack operational guidance on when and how to perform deep dataflow security analysis versus lightweight pattern matching.

## Phase — required
rjm:verify

## Inputs — required
- Slash command `/codeql-scan` — .claude/skills/codeql-scan/SKILL.md:16
- User trigger phrases:
  - "Run CodeQL scan" — .claude/skills/codeql-scan/SKILL.md:30
  - "Check for vulnerabilities" — .claude/skills/codeql-scan/SKILL.md:31
  - "Validate CodeQL configuration" — .claude/skills/codeql-scan/SKILL.md:32
  - "Quick security scan" — .claude/skills/codeql-scan/SKILL.md:33
  - "Scan for security issues" — .claude/skills/codeql-scan/SKILL.md:34
- Configuration file `.github/codeql/codeql-config.yml` (validated via `test_codeql_config.py`)
- Database caches in `.codeql/db/` — .claude/skills/codeql-scan/SKILL.md:210

## Outputs — required
- Console summary of findings by severity — .claude/skills/codeql-scan/SKILL.md:105
- SARIF analysis results files: `.codeql/results/*.sarif` — .claude/skills/codeql-scan/SKILL.md:104
- JSON output in CI mode — .claude/skills/codeql-scan/SKILL.md:262
- Diagnostics report: `diagnostics.md` — .claude/skills/codeql-scan/SKILL.md:296

## Invokes — required
- script invoke_codeql_scan.py — .claude/skills/codeql-scan/SKILL.md:19
- script install_codeql.py — .claude/skills/codeql-scan/SKILL.md:40
- script test_codeql_config.py — .claude/skills/codeql-scan/SKILL.md:63
- script get_codeql_diagnostics.py — .claude/skills/codeql-scan/SKILL.md:159
- skill security-detection — .claude/skills/codeql-scan/SKILL.md:187
- skill github — .claude/skills/codeql-scan/SKILL.md:188

## Invoked by — required
- skill security-scan — .claude/skills/security-scan/SKILL.md:186
- skill security-scan — .claude/skills/security-scan/SKILL.md:268
- skill threat-modeling — .claude/skills/threat-modeling/SKILL.md:485

## Concepts named — required, verbatim
- `codeql-scan` — .claude/skills/codeql-scan/SKILL.md:2 — defined here
- `SARIF` — .claude/skills/codeql-scan/SKILL.md:4 — used here
- `full` — .claude/skills/codeql-scan/SKILL.md:52 — defined here
- `quick` — .claude/skills/codeql-scan/SKILL.md:53 — defined here
- `validate` — .claude/skills/codeql-scan/SKILL.md:54 — defined here
- `ADR-035` — .claude/skills/codeql-scan/SKILL.md:141 — used here
- `ADR-042` — .claude/skills/codeql-scan/SKILL.md:195 — used here
- `ADR-005` — .claude/skills/codeql-scan/SKILL.md:195 — used here
- `security-detection` — .claude/skills/codeql-scan/SKILL.md:187 — used here
- `github` — .claude/skills/codeql-scan/SKILL.md:188 — used here

## Structure
- # CodeQL Scan Skill — .claude/skills/codeql-scan/SKILL.md:8
- ## Quick Start — .claude/skills/codeql-scan/SKILL.md:12
- ## Triggers — .claude/skills/codeql-scan/SKILL.md:28
- ## Decision Tree — .claude/skills/codeql-scan/SKILL.md:36
- ### When to Use Each Operation — .claude/skills/codeql-scan/SKILL.md:48
- ## Process — .claude/skills/codeql-scan/SKILL.md:56
- ### Phase 1: Full Repository Scan — .claude/skills/codeql-scan/SKILL.md:86
- ### Phase 2: Quick Scan (Cached) — .claude/skills/codeql-scan/SKILL.md:108
- ### Phase 3: Configuration Validation — .claude/skills/codeql-scan/SKILL.md:121
- ## Scripts — .claude/skills/codeql-scan/SKILL.md:129
- ### invoke_codeql_scan.py — .claude/skills/codeql-scan/SKILL.md:131
- ### Underlying Scripts — .claude/skills/codeql-scan/SKILL.md:150
- ## Anti-Patterns — .claude/skills/codeql-scan/SKILL.md:161
- ## Verification Checklist — .claude/skills/codeql-scan/SKILL.md:171
- ## Related Skills — .claude/skills/codeql-scan/SKILL.md:183
- ## References — .claude/skills/codeql-scan/SKILL.md:190
- ### Console Output — .claude/skills/codeql-scan/SKILL.md:200
- ### SARIF Files — .claude/skills/codeql-scan/SKILL.md:225
- ### JSON Output (CI Mode) — .claude/skills/codeql-scan/SKILL.md:262
- ### Running Diagnostics — .claude/skills/codeql-scan/SKILL.md:286
- ### Checks Performed — .claude/skills/codeql-scan/SKILL.md:299
- ### get_codeql_diagnostics.py Exit Codes — .claude/skills/codeql-scan/SKILL.md:308
- ### CodeQL CLI Not Found — .claude/skills/codeql-scan/SKILL.md:321
- ### Configuration Validation Failed — .claude/skills/codeql-scan/SKILL.md:334
- ### Scan Timeout — .claude/skills/codeql-scan/SKILL.md:347
- ### Cache Invalidation Issues — .claude/skills/codeql-scan/SKILL.md:359

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py`, language: Python 3, lines: 300
- documented invocation:
  - "python3 .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py --operation full" — .claude/skills/codeql-scan/SKILL.md:19
  - "python3 .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py --operation quick" — .claude/skills/codeql-scan/SKILL.md:22
  - "python3 .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py --operation validate" — .claude/skills/codeql-scan/SKILL.md:25
- **executed:** yes
- actual command run: `python3 .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py --operation validate` (in `sources/rjm`)
  abridged stdout:
  ```text
  === CodeQL Security Scan ===
  Operation: validate

  [i] Validating CodeQL configuration...
  Validating CodeQL configuration...
  Config: /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.github/codeql/codeql-config.yml
  PyYAML not installed; falling back to regex YAML validation
  [PASS] YAML syntax valid
  [PASS] Schema validation passed
  [PASS] Configuration is valid
  [ok] Configuration validation passed
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths in code:
  Documented in SKILL.md:
  - "0" — .claude/skills/codeql-scan/SKILL.md:145
  - "1" — .claude/skills/codeql-scan/SKILL.md:146
  - "2" — .claude/skills/codeql-scan/SKILL.md:147
  - "3" — .claude/skills/codeql-scan/SKILL.md:148
  Actual exit paths in code:
  - `raise SystemExit(main())` — .claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:299
  - `return 0` (.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:286) when `.codeql/` is missing, line 191 on validation success, or returned by delegate execution (line 273).
  - `return 2` (.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:193) on configuration validation failure, or returned by delegate (line 273).
  - `return 3` (.claude/skills/codeql-scan/scripts/invoke_codeql_scan.py:182) when configuration script is missing, line 188 on runner failure, line 255 when CodeQL CLI is missing, line 262 when scan script is missing, line 269 on scan runner failure, line 282 when not in a git repository.
  - `return 1` is returned by the scan delegate in CI mode when findings are detected.
- for validators/gates: can it exit non-zero? yes, exits 1 on CI findings, 2 on invalid config, 3 on CLI/script execution failures. Does it fail on the source repo's own default branch? No, `--operation validate` exits 0.
- does the output match what the documentation claims? Yes, matches documented output format and exit codes.

## Defects — required
- `doc-drift` · .claude/skills/codeql-scan/SKILL.md:131 · Skill documentation omits mention of `invoke_codeql_scan_skill.py`, which is shipped in `.claude/skills/codeql-scan/scripts/` alongside `invoke_codeql_scan.py`.
- `missing-path` · .claude/skills/codeql-scan/SKILL.md:94 · Binary path `.codeql/cli/codeql` is not tracked in git and must be downloaded at runtime.

## Observations
- Skill clearly distinguishes itself from `security-scan`: `security-scan` performs fast regex-based CWE-78 scanning over staged git diffs, while `codeql-scan` performs heavyweight multi-language semantic SAST and dataflow analysis across full databases.
- Integrates diagnostics script `.codeql/scripts/get_codeql_diagnostics.py` for health checks and troubleshooting.

## Context cost
9919 bytes (~2480 tokens) + wrapper script 10865 bytes (~2716 tokens). Total ~5196 tokens.
