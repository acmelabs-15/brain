---
package: rjm
path: .claude/skills/security-detection/detect_infrastructure.py
type: skill
bytes: 5514
unit: inv-rjm-155
in_scope_via: .claude/skills/security-detection/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/security-detection/detect_infrastructure.py, sha256: 81520cf02e43c0bb0325f6ba153a064d22e13d330926138888a3be42ad1afe9f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/security-detection/detect_infrastructure.py

## Purpose — required, verbatim
> "Detect infrastructure and security-critical file changes." — .claude/skills/security-detection/detect_infrastructure.py:2

## Design intent — required
Deterministic security classification script for identifying changes to sensitive repository files before code review, commit, or pull request merge. Evaluates changed file paths against two curated regex lists (`CRITICAL_PATTERNS` for CI workflows, git hook configurations, authentication modules, environment files, and credentials; `HIGH_PATTERNS` for build scripts, Makefiles, Dockerfiles, API controllers, configurations, and IaC templates). Implements ADR-035 non-blocking exit code standards (always returning code 0) so detection serves as an actionable routing signal and advisory prompt to dispatch the security agent (`Task(subagent_type="security", prompt="Review infrastructure changes")`) rather than abruptly breaking commit pipelines. Supports inspection of git staged files, explicit file path lists, and safe NUL-delimited paths from stdin (`--files-from-stdin`) to prevent option-injection or command breakout.

## Phase — required
rjm:build

## Inputs — required
- Explicit file paths via `--files` (.claude/skills/security-detection/detect_infrastructure.py:145).
- Git staged files via `--use-git-staged` using `git diff --cached --name-only` (.claude/skills/security-detection/detect_infrastructure.py:84, 149).
- NUL-delimited file path stream via `--files-from-stdin` (.claude/skills/security-detection/detect_infrastructure.py:96, 153).
- Optional `--json` flag (.claude/skills/security-detection/detect_infrastructure.py:157).

## Outputs — required
- Human-readable console warning and summary with risk level headers (`CRITICAL: Security agent review REQUIRED` or `HIGH: Security agent review RECOMMENDED`), list of matching files with severity tags, and security subagent task dispatch prompt (.claude/skills/security-detection/detect_infrastructure.py:175-194).
- JSON output structure with `findings`, `highest_risk`, and `file_count` when invoked with `--json` (.claude/skills/security-detection/detect_infrastructure.py:167).
- Exit code 0 (.claude/skills/security-detection/detect_infrastructure.py:195, 199).

## Invokes — required
- command git — .claude/skills/security-detection/detect_infrastructure.py:84

## Invoked by — required
- skill security-detection — .claude/skills/security-detection/SKILL.md:46

## Concepts named — required, verbatim
- `CRITICAL_PATTERNS` — .claude/skills/security-detection/detect_infrastructure.py:20 — defined here
- `HIGH_PATTERNS` — .claude/skills/security-detection/detect_infrastructure.py:40 — defined here
- `get_security_risk_level` — .claude/skills/security-detection/detect_infrastructure.py:70 — defined here
- `get_staged_files` — .claude/skills/security-detection/detect_infrastructure.py:80 — defined here
- `get_files_from_stdin` — .claude/skills/security-detection/detect_infrastructure.py:96 — defined here
- `detect_infrastructure` — .claude/skills/security-detection/detect_infrastructure.py:101 — defined here
- `Task(subagent_type="security", prompt="Review infrastructure changes")` — .claude/skills/security-detection/detect_infrastructure.py:192 — used here
- `ADR-035` — .claude/skills/security-detection/detect_infrastructure.py:7 — used here

## Structure
- `def matches_pattern` — .claude/skills/security-detection/detect_infrastructure.py:62
- `def get_security_risk_level` — .claude/skills/security-detection/detect_infrastructure.py:70
- `def get_staged_files` — .claude/skills/security-detection/detect_infrastructure.py:80
- `def get_files_from_stdin` — .claude/skills/security-detection/detect_infrastructure.py:96
- `def detect_infrastructure` — .claude/skills/security-detection/detect_infrastructure.py:101
- `def main` — .claude/skills/security-detection/detect_infrastructure.py:135

## Scripts — required if type is script or the skill ships scripts
This file is an executable Python script:
- path: `.claude/skills/security-detection/detect_infrastructure.py`, language: Python 3, lines: 200
- documented invocation: `python detect_infrastructure.py --use-git-staged` — .claude/skills/security-detection/SKILL.md:52
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/security-detection/detect_infrastructure.py --files .github/workflows/ci.yml src/auth/login.cs`
- stdout:
```
=== Security Review Detection ===

CRITICAL: Security agent review REQUIRED

Matching files:
  [CRITICAL] .github/workflows/ci.yml
  [CRITICAL] src/auth/login.cs

Run security agent before implementation:
  Task(subagent_type="security", prompt="Review infrastructure changes")
```
- **actual exit code:** 0
- documented exit codes vs actual exit paths:
  Documented:
  > "0 - Success: Detection completed (always)" — .claude/skills/security-detection/detect_infrastructure.py:8
  Actual exit paths in code:
  - `return 0` — .claude/skills/security-detection/detect_infrastructure.py:168
  - `return 0` — .claude/skills/security-detection/detect_infrastructure.py:172
  - `return 0` — .claude/skills/security-detection/detect_infrastructure.py:195
  - `sys.exit(main())` — .claude/skills/security-detection/detect_infrastructure.py:199
- for validators/gates:
  Can it exit non-zero? Under normal execution, no; it always returns 0 per ADR-035 (non-blocking warning). Invalid CLI flags trigger argparse error exit code 2.
  Does it fail on the source repo's own default branch? No, exits 0.
- does the output match what the documentation claims? Yes, matches the output format documented in `SKILL.md:62-73`.

## Defects — required
none

## Observations
- Path normalization at line 72 (`file_path.replace("\\", "/")`) ensures consistent cross-platform pattern matching on Windows and POSIX systems.
- NUL-delimited input support (`--files-from-stdin`) correctly mitigates option-injection vulnerabilities where changed filenames start with dashes or contain spaces/newlines.

## Context cost
5514 bytes (~1378 tokens) for the script. Loads no auxiliary files.
