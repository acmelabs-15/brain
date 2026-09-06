---
package: rjm
path: scripts/detect_skill_violation.py
type: script
bytes: 13089
unit: inv-rjm-214
in_scope_via: docs/technical-guardrails.md
aliases: []
memo_inputs:
  - {path: scripts/detect_skill_violation.py, sha256: afe11d459bd7604bb9ef80647f0efd016f7e19ac492cf6690322d1b21b457cf7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/detect_skill_violation.py

## Purpose — required, verbatim
> "Detect raw gh command usage when GitHub skills exist" — scripts/detect_skill_violation.py:2
> "Non-blocking WARNING that detects raw `gh` commands in markdown and PowerShell files when equivalent GitHub skill scripts exist in .claude/skills/github/." — scripts/detect_skill_violation.py:4-5

## Design intent — required
A static analysis safety guardrail to deter developers and agents from running raw `gh` CLI commands directly when hardened, auditable GitHub skill scripts exist under `.claude/skills/github/scripts`. It encourages standardized tool adoption without blocking execution, providing early warning feedback during commit and PR validation workflows. Without it, agents could bypass error handling, logging, and permission boundaries encapsulated in dedicated GitHub skills.

## Phase — required
cross-phase

## Inputs — required
- CLI options:
  - `--path`: "Root path to scan (default: current directory)" — scripts/detect_skill_violation.py:356
  - `--staged-only`: "Only check git-staged files" — scripts/detect_skill_violation.py:361
  - `--file`: "Relative file to scan. May be repeated and overrides repository walk." — scripts/detect_skill_violation.py:368
  - `--quiet`: "Suppress output (exit code only)" — scripts/detect_skill_violation.py:373
- File patterns scanned: `VALID_EXTENSIONS` = `frozenset({".md", ".py", ".ps1", ".psm1"})` — scripts/detect_skill_violation.py:49
- Raw gh patterns: `GH_PATTERNS` — scripts/detect_skill_violation.py:41
- Repository files enumerated via `git diff --cached` (for staged files), `git ls-files` (for all tracked files), or fallback `os.walk` skipping directories in `SKIP_DIRS` — scripts/detect_skill_violation.py:68
- GitHub skills script directory: ".claude/skills/github/" — scripts/detect_skill_violation.py:5

## Outputs — required
- Standard output warnings and diagnostics:
  - "WARNING: Detected raw 'gh' command usage (skill violations)" — scripts/detect_skill_violation.py:317
  - "Missing skill capabilities detected:" — scripts/detect_skill_violation.py:329
  - "No skill violations detected" — scripts/detect_skill_violation.py:425
  - "No files to check for skill violations" — scripts/detect_skill_violation.py:411
- Exit codes:
  - "0  - Success: Detection completed (violations may exist as warnings)" — scripts/detect_skill_violation.py:12
  - "1  - Error: Could not find git repo root or other fatal error" — scripts/detect_skill_violation.py:13
  - "2  - Error: Unexpected error" — scripts/detect_skill_violation.py:14

## Invokes — required
- script scripts.utils.path_validation — scripts/detect_skill_violation.py:38

## Invoked by — required
- doc docs/technical-guardrails.md — docs/technical-guardrails.md:269
- doc scripts/README.md — scripts/README.md:70
- doc .agents/projects/v0.3.1/PowerShell-migration.md — .agents/projects/v0.3.1/PowerShell-migration.md:165
- script src/copilot-cli/skills/github/scripts/pr/pr_validations.py — src/copilot-cli/skills/github/scripts/pr/pr_validations.py:160

## Concepts named — required, verbatim
- `gh` — scripts/detect_skill_violation.py:2 — used here
- `GitHub skills` — scripts/detect_skill_violation.py:2 — used here
- `Phase 1 guardrail` — scripts/detect_skill_violation.py:7 — used here
- `Issue #230` — scripts/detect_skill_violation.py:7 — used here
- `Detect-SkillViolation.ps1` — scripts/detect_skill_violation.py:9 — used here
- `ADR-042` — scripts/detect_skill_violation.py:9 — used here
- `ADR-035` — scripts/detect_skill_violation.py:16 — used here
- `Exit Code Standardization` — scripts/detect_skill_violation.py:16 — used here
- `GH_PATTERNS` — scripts/detect_skill_violation.py:41 — defined here
- `VALID_EXTENSIONS` — scripts/detect_skill_violation.py:49 — defined here
- `SKIP_DIRS` — scripts/detect_skill_violation.py:68 — defined here
- `Violation` — scripts/detect_skill_violation.py:86 — defined here
- `capability_gaps` — scripts/detect_skill_violation.py:326 — defined here
- `staged-only` — scripts/detect_skill_violation.py:359 — defined here

## Structure
none (python script; functions and classes: Violation, get_repo_root, get_skills_dir, get_staged_files, get_requested_files, get_all_files, check_file_for_violations, detect_violations, extract_capability_gaps, report_violations, parse_args, main)

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/detect_skill_violation.py`, language: Python 3, lines: 438
- documented invocation:
  - "python3 scripts/detect_skill_violation.py" — docs/technical-guardrails.md:269
  - "python3 scripts/detect_skill_violation.py" — scripts/README.md:78
- executed: yes
- actual command run: `python3 scripts/detect_skill_violation.py`
  abridged stdout:
  ```
  WARNING: Detected raw 'gh' command usage (skill violations)
    These commands indicate missing GitHub skill capabilities.
    Use .claude/skills/github/ scripts instead, or file an issue to add the capability.

    src/copilot-cli/skills/github/scripts/issue/list_issues.py:154 - matches 'gh\s+issue\s+(create|close|view|list)'
    ...
  Missing skill capabilities detected:

  REMINDER: Use GitHub skills for better error handling, consistency, and auditability.
  ```
  actual exit code: 0
- documented exit codes:
  - "0  - Success: Detection completed (violations may exist as warnings)" — scripts/detect_skill_violation.py:12
  - "1  - Error: Could not find git repo root or other fatal error" — scripts/detect_skill_violation.py:13
  - "2  - Error: Unexpected error" — scripts/detect_skill_violation.py:14
  vs. actual exit paths:
  - `return 0` at line 399 (skills directory not found)
  - `return 0` at line 413 (no files to check)
  - `return 0` at line 422 (violations found; non-blocking warning)
  - `return 0` at line 426 (no violations found)
  - `return 1` at line 392 (RuntimeError finding git repo root)
  - `return 1` at line 430 (KeyboardInterrupt)
  - `return 2` at line 433 (unexpected Exception)
  - `sys.exit(main())` at line 437
- for validators/gates: can it exit non-zero?
  Yes, exits 1 on repo root errors or interrupt, 2 on unexpected exceptions; returns 0 when violations exist because it is explicitly non-blocking. Does it fail on the source repo's own default branch? No, exits 0.
- does output match what the documentation claims?
  Yes, reports detected violations as non-blocking warnings and exits 0.

## Defects — required
- missing-path — scripts/detect_skill_violation.py:339 — References non-existent file `.serena/memories/skill-usage-mandatory.md` in reminder output.

## Observations
- Demonstrates intentional performance optimization documented in lines 53-67: prunes large subtrees like `.worktrees`, `node_modules`, and `.venv` during directory traversal to ensure full tree scanning finishes under the 30-second pre-PR validation budget.
- Conforms to ADR-042 (migrating PowerShell scripts to portable Python 3).

## Context cost
13089 bytes (approximately 3270 tokens) plus imported `scripts/utils/path_validation.py` (3487 bytes, ~870 tokens). Total context cost: ~4140 tokens.
