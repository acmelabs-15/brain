---
package: rjm
path: .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py
type: script
bytes: 29142
unit: inv-rjm-109
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py, sha256: 64092842ff02dd3c0dc4867b4e818833702508017d9b7230ae795109c77d8885}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py

## Purpose — required, verbatim
> "Validates that content placement follows the skill vs passive context decision framework." — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:5

## Design intent — required
Automates compliance validation for content placement across Claude Code skills and passive context files according to the project's decision framework. While empirical evaluations indicate that passive context (e.g. `AGENTS.md`, `@imports`) achieves superior recall for post-cutoff APIs and repo-specific gotchas by eliminating retrieval decision points, unbounded passive context accumulates significant per-turn token overhead. This script mechanically enforces placement discipline by verifying that skills contain actionable behaviors (verbs, scripts, tools), passive context remains strictly knowledge-only, all `@imported` files in `CLAUDE.md` exist and are readable (with CWE-22 path validation against directory traversal), skills possess valid YAML frontmatter, content is not duplicated between skills and passive context, and declared skill size exceptions carry structured rationale and test invariants. Without this validator, repositories face context bloat, token inefficiency, and broken documentation links.

## Phase — required
cross-phase

## Inputs — required
- Command-line arguments:
  - `--path`: "Directory to scan (default: .claude)" — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:800
  - `--claude-md-path`: "Path to CLAUDE.md (default: CLAUDE.md)" — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:806
  - `--format`: "Output format (default: json)" — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:812
- Files and directories read from disk:
  - `CLAUDE.md` at specified path (.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:171, 322)
  - All `@imported` markdown files referenced in `CLAUDE.md` matching `@([^\s]+\.md)` (.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:325, 346)
  - `SKILL.md` files found under `--path` excluding `.claude/worktrees` (.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:635-637)
  - `scripts/*.py` in skill subdirectories (.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:119)
  - Git repository root discovered via directory traversal looking for `.git` (.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:70-74)

## Outputs — required
- Structured JSON or formatted table to stdout containing:
  - `timestamp`: ISO timestamp string (.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:825)
  - `path`: scanned directory path string (.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:826)
  - `claudeMdPath`: scanned CLAUDE.md path string (.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:827)
  - `violations`: list of violation records with check name, severity, message, and recommendation (.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:828)
  - `warnings`: list of warning records with check name and message (.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:829)
  - `recommendations`: list of actionable recommendation strings (.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:830)
  - `scope`: measurement boundaries, unevaluated dimensions, vendor guidance, and manual review categories (.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:831)
  - `sizeExceptions`: list of parsed and audited size exception records (.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:832)
  - `summary`: counts of `total_checks`, `passed`, `failed`, `warnings`, `measurements` (.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:833)
- Process exit code: 0 if no failed checks, 1 if any failure or unhandled exception occurs (.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:837, 841)

## Invokes — required
- script path_validation — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:22

## Invoked by — required
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:45
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:284
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:330
- skill context-optimizer — .claude/skills/context-optimizer/SKILL.md:333

## Concepts named — required, verbatim
- `Skill/Passive Context Compliance Validator` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:3 — defined here
- `decision framework` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:5 — used here
- `CheckResult` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:26 — defined here
- `ComplianceResults` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:36 — defined here
- `CLAUDE_MD_MEMORY_DOCS` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:58 — defined here
- `SIZE_EXCEPTION_FIELDS` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:59 — defined here
- `Preserved invariant` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:60 — defined here
- `Behavioral tests` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:61 — defined here
- `Review trigger` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:62 — defined here
- `SKILL.md` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:79 — used here
- `CLAUDE.md` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:169 — used here
- `size-exception rationale` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:189 — defined here
- `size-exception` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:242 — used here
- `Size Exception Audit` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:306 — defined here
- `CWE-22` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:339 — used here
- `@import` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:324 — used here
- `AGENTS.md` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:513 — used here
- `skill_size.py` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:523 — used here
- `command_size.py` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:536 — used here
- `MEMORY.md` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:532 — used here
- `Decision Framework` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:660 — used here
- `always-on slot` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:659 — used here

## Structure
none (python script; functions and dataclasses: `CheckResult`, `ComplianceResults`, `find_repository_root`, `check_skill_has_actions`, `check_passive_context_knowledge_only`, `measure_claude_md_single_file`, `find_size_exception_comment`, `parse_size_exception_fields`, `parse_size_exception_rationale`, `audit_size_exception`, `record_size_exception_audit`, `check_imported_files_exist`, `check_skill_frontmatter`, `check_no_duplicate_content`, `run_compliance_checks`, `print_scope`, `print_size_exceptions`, `print_table_format`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py`, language: Python 3, lines: 846
- documented invocation:
  - "python3 scripts/test_skill_passive_compliance.py" — .claude/skills/context-optimizer/SKILL.md:330
  - "python3 scripts/test_skill_passive_compliance.py --path .claude/skills/github --format table" — .claude/skills/context-optimizer/SKILL.md:333
- **executed:** yes
- actual command run: `python3 .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py --path .claude/skills/github --format table`
  abridged stdout:
  ```
  Skill/Passive Context Compliance Check
  ======================================================================
  Timestamp: 2026-09-05T08:21:43.837132
  Path: .claude/skills/github
  CLAUDE.md: CLAUDE.md

  Summary:
    Total Checks: 6
    Passed: 6
    Failed: 0
    Warnings: 0
    Measurements: 1

  Scope:
    Measures only the selected CLAUDE.md file. Imports, hierarchical CLAUDE.md and AGENTS.md files, generated instructions, and plugin context are not included in its line count.
    Not evaluated:
      - @imported file size
      - hierarchical CLAUDE.md and AGENTS.md files
      - generated instruction layers
      - plugin-provided context
    Required separate checks:
      - Contributors: run skill_size.py separately for the scanned skill tree: .claude/skills/github (upstream rjmurillo/ai-agents only)
    CLAUDE.md Single-File Measurement: Measured 58 lines in this CLAUDE.md. No vendor line limit was applied.

  [PASS] All evaluated checks passed. See scope and separate checks.
  ```
  **actual exit code**: 0
- documented exit codes vs. actual exit paths:
  Documented in script docstring:
  - "0: All compliance checks passed" — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:9
  - "1: One or more violations detected" — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:10
  Documented in SKILL.md:
  - "0 = all passed, 1 = violations detected" — .claude/skills/context-optimizer/SKILL.md:336
  Actual exit paths in code:
  - `return 1 if results.summary["failed"] > 0 else 0` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:837
  - `return 1` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:841
  - `sys.exit(main())` — .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:845
- for validators/gates: can it exit non-zero? yes, exits 1 when compliance violations are found (tested with non-existent CLAUDE.md resulting in 2 failures) or on unhandled exceptions. Does it fail on the source repo's own default branch? No, returns exit code 0 (288 checks passed, 0 failed, 0 warnings on default `.claude` directory).
- does the output match what the documentation claims? Yes, produces structured JSON or table output with evaluated checks, measurement details, scope explanations, and exit codes 0 and 1.

## Defects — required
- `doc-drift` · .claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py:117 · Comment states "Check for PowerShell script references", but the implementation at line 119 checks for Python scripts (`any(scripts_dir.glob("*.py"))`), reflecting an incomplete comment update following ADR-042 Python migration.
- `doc-drift` · .claude/skills/context-optimizer/SKILL.md:330 · Invocation example `python3 scripts/test_skill_passive_compliance.py` assumes the working directory is the skill directory (`.claude/skills/context-optimizer/`); when run from repository root, the relative path must be `.claude/skills/context-optimizer/scripts/test_skill_passive_compliance.py`.

## Observations
- Clear separation between measurement and threshold: lines 525-539 clarify that Anthropic's 200-line limit applies to auto-memory `MEMORY.md`, not `CLAUDE.md`, and measures lines in `CLAUDE.md` without treating length as a hard failure.
- Defensive path traversal mitigation: delegates path validation to `path_validation.py` (`validate_path_within_repo`) ensuring `@imported` files do not traverse outside the repository root (CWE-22).
- Worktree filtering: lines 636-637 explicitly exclude `.claude/worktrees` to prevent false positive duplicate content warnings during local worktree checkouts.
- Structured audit parsing: enforces that size exceptions declare invariant preservation, behavioral test references, and review triggers inside an HTML comment block rather than allowing unreviewed size overrides.

## Context cost
29142 bytes (~7285 tokens). Self-contained Python script importing standard library and sibling helper `path_validation.py`.
