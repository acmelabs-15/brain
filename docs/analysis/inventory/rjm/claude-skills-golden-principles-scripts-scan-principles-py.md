---
package: rjm
path: .claude/skills/golden-principles/scripts/scan_principles.py
type: script
bytes: 15223
unit: inv-rjm-123
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/golden-principles/scripts/scan_principles.py, sha256: cdb0a96626433920fcb5e2b1ca72ad19d545e2f873769cde2d3946aabe69136a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/golden-principles/scripts/scan_principles.py

## Purpose — required, verbatim
> "Golden principles scanner with agent-readable remediation instructions." — .claude/skills/golden-principles/scripts/scan_principles.py:2

## Design intent — required
Main CLI scanner for repository compliance with golden principles GP-001 through GP-006. It supports whole-repo scanning, single-directory scoping, diff-scoping against a base git branch (evaluating only modified lines in a PR), JSON or formatted text output, rule selection, and output redirection. For detected violations, it generates structured `AGENT_REMEDIATION` blocks giving actionable multi-step instructions for AI agents or developers to resolve violations directly.

## Phase — required
cross-phase

## Inputs — required
- CLI arguments: files, --directory, --diff-scope, --format, --rules, --output
- Files on disk matching applicable rule domains (.claude/skills/, .claude/agents/, .github/workflows/, shell scripts)
- Git diff against base branch when --diff-scope is provided

## Outputs — required
- Text report with [ERROR] or [WARNING] violation blocks and remediation instructions to stdout or file
- JSON structured report if --format json is specified
- Exit code 0 (clean), 1 (error), or 10 (violations detected)

## Invokes — required
- script scan_principles_core.py — .claude/skills/golden-principles/scripts/scan_principles.py:8

## Invoked by — required
- skill golden-principles — .claude/skills/golden-principles/SKILL.md:51
- skill review — .claude/skills/review/SKILL.md:53

## Concepts named — required, verbatim
- `Exit codes` — .claude/skills/golden-principles/scripts/scan_principles.py:11 — defined here
- `GP-003` — .claude/skills/golden-principles/scripts/scan_principles.py:58 — used here
- `ADR-080` — .claude/skills/golden-principles/scripts/scan_principles.py:58 — used here
- `GP-005` — .claude/skills/golden-principles/scripts/scan_principles.py:160 — used here
- `GP-006` — .claude/skills/golden-principles/scripts/scan_principles.py:191 — used here
- `RULE_CHECKERS` — .claude/skills/golden-principles/scripts/scan_principles.py:236 — defined here
- `Golden principles scanner with agent-readable remediation` — .claude/skills/golden-principles/scripts/scan_principles.py:383 — defined here
- `script-language` — .claude/skills/golden-principles/scripts/scan_principles.py:237 — used here
- `skill-frontmatter` — .claude/skills/golden-principles/scripts/scan_principles.py:238 — used here
- `agent-definition` — .claude/skills/golden-principles/scripts/scan_principles.py:239 — used here
- `yaml-logic` — .claude/skills/golden-principles/scripts/scan_principles.py:240 — used here
- `actions-pinned` — .claude/skills/golden-principles/scripts/scan_principles.py:241 — used here

## Structure
- Imports and module setup — .claude/skills/golden-principles/scripts/scan_principles.py:1-30
- Rule checkers — .claude/skills/golden-principles/scripts/scan_principles.py:57-234
- Applicability and scan runner — .claude/skills/golden-principles/scripts/scan_principles.py:245-304
- Output formatting — .claude/skills/golden-principles/scripts/scan_principles.py:307-357
- CLI argument parsing and main function — .claude/skills/golden-principles/scripts/scan_principles.py:360-462

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/golden-principles/scripts/scan_principles.py`, language: Python, lines: 462
- documented invocation: "python3 .claude/skills/golden-principles/scripts/scan_principles.py" — .claude/skills/golden-principles/SKILL.md:60
- **executed:** yes
- actual command run: `python3 .claude/skills/golden-principles/scripts/scan_principles.py --directory .claude/skills/golden-principles/`, stdout: `golden-principles: 10 files scanned, no violations found.`, **actual exit code:** 0
- documented exit codes: "0 = clean, 1 = script error, 10 = violations detected" — .claude/skills/golden-principles/scripts/scan_principles.py:11 vs. actual exit paths:
  - sys.exit(EXIT_ERROR) on invalid rules argument (.claude/skills/golden-principles/scripts/scan_principles.py:368)
  - return EXIT_ERROR on git diff failure (.claude/skills/golden-principles/scripts/scan_principles.py:427)
  - return EXIT_SUCCESS on no files (.claude/skills/golden-principles/scripts/scan_principles.py:441)
  - return EXIT_VIOLATIONS on error_count > 0 (.claude/skills/golden-principles/scripts/scan_principles.py:456)
  - return EXIT_SUCCESS on clean scan (.claude/skills/golden-principles/scripts/scan_principles.py:457)
  - sys.exit(main()) entry point (.claude/skills/golden-principles/scripts/scan_principles.py:461)
- for validators/gates: can exit non-zero (exit 10 when violations detected, exit 1 on tool/git errors). Exits 0 on clean code.
- does the output match what the documentation claims? yes

## Defects — required
none

## Observations
- Differentiates non-applicable files from passing files: if files scanned are not within the checker domain, reports that 0 files were applicable rather than asserting a code-design pass (.claude/skills/golden-principles/scripts/scan_principles.py:310-316).
- Supports `--diff-scope` to restrict checking only to lines touched in PR diffs, making it suitable for CI pre-flight and pre-merge reviews (.claude/skills/golden-principles/scripts/scan_principles.py:276, 296-300).

## Context cost
15223 bytes (plus scan_principles_core.py 19011 bytes = 34234 bytes). Approximately 8500 tokens total.
