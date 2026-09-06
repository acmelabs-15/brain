---
package: rjm
path: .claude/skills/taste-lints/SKILL.md
type: skill
bytes: 3956
unit: inv-rjm-176
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/taste-lints/SKILL.md, sha256: 0c46db6851ed918ce5e85c751df8a8154e4e15eb2e4b345d1e42c94ead1c9296}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/taste-lints/SKILL.md

## Purpose — required, verbatim
> "Custom lints where error messages become agent-readable remediation instructions." — .claude/skills/taste-lints/SKILL.md:10

## Design intent — required
`taste-lints` provides project-specific architectural and aesthetic guardrails tailored specifically for autonomous coding agents. Unlike standard lint tools that return terse or human-targeted diagnostics, this skill pairs static rule failures directly with actionable `AGENT_REMEDIATION` instructions that can be ingested into the agent's context. This enables automated subagents to autonomously resolve issues regarding file size ceilings, naming conventions, cyclomatic complexity, and prompt length without requiring human guidance or guessing heuristics.

## Phase — required
rjm:build

## Inputs — required
- Trigger phrases:
  - `run taste lints` — .claude/skills/taste-lints/SKILL.md:23
  - `check file size` — .claude/skills/taste-lints/SKILL.md:24
  - `check naming conventions` — .claude/skills/taste-lints/SKILL.md:25
  - `lint taste invariants` — .claude/skills/taste-lints/SKILL.md:26
  - `taste lint report` — .claude/skills/taste-lints/SKILL.md:27
- Target files and paths passed via arguments: staged files (`--git-staged`), diff scope base branch (`--diff-scope`), specific file paths, or directories (`--directory`).
- In-file suppression comments: `# taste-lint: ignore file-size` — .claude/skills/taste-lints/SKILL.md:122

## Outputs — required
- Diagnostic output reporting scanned file count, error count, and warning count with inline `AGENT_REMEDIATION` blocks
- JSON structured report when invoked with `--format json`
- Process exit codes:
  - 0: "No violations found" — .claude/skills/taste-lints/SKILL.md:104
  - 1: "Script error (bad arguments, file not found)" — .claude/skills/taste-lints/SKILL.md:105
  - 10: "Violations detected" — .claude/skills/taste-lints/SKILL.md:106

## Invokes — required
- script scripts/taste_lints.py — .claude/skills/taste-lints/SKILL.md:78

## Invoked by — required
- command build — .claude/commands/build.md:68
- command ship — .claude/commands/ship.md:113

## Concepts named — required, verbatim
- `Taste Lints` — .claude/skills/taste-lints/SKILL.md:8 — defined here
- `remediation instructions` — .claude/skills/taste-lints/SKILL.md:10 — defined here
- `Harness Engineering` — .claude/skills/taste-lints/SKILL.md:12 — used here
- `structured logging` — .claude/skills/taste-lints/SKILL.md:14 — used here
- `naming conventions` — .claude/skills/taste-lints/SKILL.md:14 — used here
- `file size limits` — .claude/skills/taste-lints/SKILL.md:15 — defined here
- `reliability requirements` — .claude/skills/taste-lints/SKILL.md:15 — used here
- `agent context` — .claude/skills/taste-lints/SKILL.md:17 — used here
- `taste_lints.py` — .claude/skills/taste-lints/SKILL.md:23 — defined here
- `file-size` — .claude/skills/taste-lints/SKILL.md:24 — defined here
- `taste invariants` — .claude/skills/taste-lints/SKILL.md:26 — defined here
- `taste lint report` — .claude/skills/taste-lints/SKILL.md:27 — defined here
- `Taste Invariants` — .claude/skills/taste-lints/SKILL.md:38 — defined here
- `File Size Limits` — .claude/skills/taste-lints/SKILL.md:40 — defined here
- `cohesion` — .claude/skills/taste-lints/SKILL.md:42 — used here
- `Naming Conventions` — .claude/skills/taste-lints/SKILL.md:49 — defined here
- `snake_case` — .claude/skills/taste-lints/SKILL.md:53 — defined here
- `kebab-case` — .claude/skills/taste-lints/SKILL.md:54 — defined here
- `PascalCase` — .claude/skills/taste-lints/SKILL.md:55 — defined here
- `UPPER_CASE` — .claude/skills/taste-lints/SKILL.md:56 — defined here
- `invoke_` — .claude/skills/taste-lints/SKILL.md:57 — defined here
- `Hook scripts` — .claude/skills/taste-lints/SKILL.md:57 — used here
- `Function Complexity` — .claude/skills/taste-lints/SKILL.md:59 — defined here
- `cyclomatic complexity` — .claude/skills/taste-lints/SKILL.md:61 — used here
- `Skill Prompt Size` — .claude/skills/taste-lints/SKILL.md:63 — defined here
- `progressive disclosure` — .claude/skills/taste-lints/SKILL.md:65 — used here
- `AGENT_REMEDIATION` — .claude/skills/taste-lints/SKILL.md:70 — defined here
- `Suppression` — .claude/skills/taste-lints/SKILL.md:117 — defined here
- `complexity` — .claude/skills/taste-lints/SKILL.md:125 — defined here
- `skill-size` — .claude/skills/taste-lints/SKILL.md:125 — defined here

## Structure
- `# Taste Lints` — .claude/skills/taste-lints/SKILL.md:8
- `## Triggers` — .claude/skills/taste-lints/SKILL.md:19
- `## When to Use` — .claude/skills/taste-lints/SKILL.md:29
- `## Taste Invariants` — .claude/skills/taste-lints/SKILL.md:38
- `### 1. File Size Limits` — .claude/skills/taste-lints/SKILL.md:40
- `### 2. Naming Conventions` — .claude/skills/taste-lints/SKILL.md:49
- `### 3. Function Complexity` — .claude/skills/taste-lints/SKILL.md:59
- `### 4. Skill Prompt Size` — .claude/skills/taste-lints/SKILL.md:63
- `## Process` — .claude/skills/taste-lints/SKILL.md:67
- `## Scripts` — .claude/skills/taste-lints/SKILL.md:74
- `## Exit Codes` — .claude/skills/taste-lints/SKILL.md:100
- `## Verification` — .claude/skills/taste-lints/SKILL.md:108
- `## Suppression` — .claude/skills/taste-lints/SKILL.md:117

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/taste-lints/scripts/taste_lints.py`, language: Python 3.11+, lines: 1129
- documented invocation:
  - "python3 .claude/skills/taste-lints/scripts/taste_lints.py --git-staged" — .claude/skills/taste-lints/SKILL.md:82
  - "python3 .claude/skills/taste-lints/scripts/taste_lints.py --diff-scope \"origin/$BASE_BRANCH\"" — .claude/skills/taste-lints/SKILL.md:85
  - "python3 .claude/skills/taste-lints/scripts/taste_lints.py path/to/file.py" — .claude/skills/taste-lints/SKILL.md:88
  - "python3 .claude/skills/taste-lints/scripts/taste_lints.py --directory src/" — .claude/skills/taste-lints/SKILL.md:91
  - "python3 .claude/skills/taste-lints/scripts/taste_lints.py --format json --git-staged" — .claude/skills/taste-lints/SKILL.md:94
  - "python3 .claude/skills/taste-lints/scripts/taste_lints.py --rules file-size,naming" — .claude/skills/taste-lints/SKILL.md:97
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - Test 1 (Clean scan on SKILL.md):
    `python3 sources/rjm/.claude/skills/taste-lints/scripts/taste_lints.py sources/rjm/.claude/skills/taste-lints/SKILL.md`
    stdout:
    ```
    taste-lints: 1 files scanned, no violations found.
    ```
    **actual exit code**: 0
  - Test 2 (Scan on taste_lints.py exceeding line limit):
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
  - Documented in SKILL.md:
    - "0" · "No violations found" — .claude/skills/taste-lints/SKILL.md:104
    - "1" · "Script error (bad arguments, file not found)" — .claude/skills/taste-lints/SKILL.md:105
    - "10" · "Violations detected" — .claude/skills/taste-lints/SKILL.md:106
  - Actual exit paths in `taste_lints.py`:
    - `sys.exit(EXIT_ERROR)` — .claude/skills/taste-lints/scripts/taste_lints.py:1048
    - `return EXIT_ERROR` — .claude/skills/taste-lints/scripts/taste_lints.py:1102
    - `return EXIT_ERROR` — .claude/skills/taste-lints/scripts/taste_lints.py:1109
    - `return EXIT_SUCCESS` — .claude/skills/taste-lints/scripts/taste_lints.py:1113
    - `return EXIT_VIOLATIONS` — .claude/skills/taste-lints/scripts/taste_lints.py:1123
    - `return EXIT_SUCCESS` — .claude/skills/taste-lints/scripts/taste_lints.py:1124
    - `sys.exit(main())` — .claude/skills/taste-lints/scripts/taste_lints.py:1128
- for validators/gates: can it exit non-zero? Yes (exits 1 on error, 10 on violations). Does it fail on the source repo's own default branch? Yes, running on `taste_lints.py` (1129 lines) produces exit code 10 due to `file-size` violation.
- does the output match what the documentation claims? Yes, exit codes and message formats match.

## Defects — required
- `doc-drift` · .claude/skills/taste-lints/SKILL.md:4 — Description mentions custom lints for "structured logging", but no structured logging rule is implemented in the skill or its script.
- `doc-drift` · .claude/skills/taste-lints/SKILL.md:55 — Naming table lists PascalCase rules for PowerShell (`*.ps1`, `*.psm1`), but `taste_lints.py:722-730` implements checks only for Python files, YAML files, and skill directory names.
- `doc-drift` · .claude/skills/taste-lints/SKILL.md:56 — Naming table lists UPPER_CASE convention for constants and environment variables across all languages, but `taste_lints.py` implements no constant or environment variable name checking.
- `other` · .claude/skills/taste-lints/scripts/taste_lints.py:1128 — The bundled script `scripts/taste_lints.py` (1129 lines) exceeds the skill's own file size limit of 500 lines without a suppression comment, failing its own lint check.

## Observations
- The prompt injection technique of embedding explicit `AGENT_REMEDIATION` blocks directly into lint error output is a notable agentic design pattern, turning static analysis failures into concrete guidance.
- Progressive disclosure guidance is formalized in the skill size rule, suggesting moving references to `references/` and scripts to `scripts/` when skill files exceed 300/500 lines.

## Context cost
3,956 bytes (~989 tokens) for SKILL.md; 41,729 bytes (~10,432 tokens) for taste_lints.py. Total: 45,685 bytes (~11,421 tokens).
