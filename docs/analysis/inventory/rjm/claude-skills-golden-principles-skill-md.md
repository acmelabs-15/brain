---
package: rjm
path: .claude/skills/golden-principles/SKILL.md
type: skill
bytes: 5739
unit: inv-rjm-124
in_scope_via: .claude/skills/review/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/golden-principles/SKILL.md, sha256: a7aaeeabf10383fdbee167c8b0ca013789173907695cae91958202cafcea1e12}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/golden-principles/SKILL.md

## Purpose — required, verbatim
> "Scan the repository for violations of mechanically enforced golden principles." — .claude/skills/golden-principles/SKILL.md:10

## Design intent — required
Automated repository governance and compliance scanner that operationalizes high-level architectural and hygiene standards (GP-001 through GP-008 from `.agents/governance/golden-principles.md`) into executable, deterministic lint checks with structured, actionable remediation blocks (`AGENT_REMEDIATION`). Solves the problem of architectural erosion, shell script sprawl, unpinned GitHub Actions, and invalid agent/skill frontmatter declarations in multi-agent toolkits by providing pre-PR, scoped-diff, and recurring garbage-collection checks directly callable by agents or review pipelines. Without it, architectural standards and coding invariants would remain unenforced passive documentation prone to drift, PR reviews would require manual inspection of mechanical hygiene rules, and autonomous subagents would lack deterministic machine-readable instructions to fix rule violations.

## Phase — required
rjm:review

## Inputs — required
- Target file paths, directories, or diff scopes passed via CLI arguments: `--directory`, `--diff-scope`, `--rules`, `--format`, `--output` — .claude/skills/golden-principles/SKILL.md:63-75
- Repository files across the scanned target path, directory, or git diff scope — .claude/skills/golden-principles/SKILL.md:60-66
- In-file suppression comments in file headers: `# golden-principle: ignore script-language` — .claude/skills/golden-principles/SKILL.md:109
- Upstream governance definitions in `.agents/governance/golden-principles.md` defining GP-001 through GP-008 — .claude/skills/golden-principles/SKILL.md:13, 138

## Outputs — required
- Compliance scan reports with violation lists and `AGENT_REMEDIATION` blocks output to stdout or file — .claude/skills/golden-principles/SKILL.md:52, 75
- Structured JSON scan results when invoked with `--format json` — .claude/skills/golden-principles/SKILL.md:72
- Exit codes: `0` (no violations found), `1` (script error / bad arguments), `10` (violations detected) — .claude/skills/golden-principles/SKILL.md:94-96

## Invokes — required
- script scripts/scan_principles.py — .claude/skills/golden-principles/SKILL.md:102
- reference references/design-code-qualities.md — .claude/skills/golden-principles/SKILL.md:130
- reference references/design-solid-principles.md — .claude/skills/golden-principles/SKILL.md:131
- reference references/design-programming-by-intention.md — .claude/skills/golden-principles/SKILL.md:132
- reference references/design-separation-of-concerns.md — .claude/skills/golden-principles/SKILL.md:133
- reference references/design-dry-principle.md — .claude/skills/golden-principles/SKILL.md:134
- doc .agents/governance/golden-principles.md — .claude/skills/golden-principles/SKILL.md:138
- skill taste-lints — .claude/skills/golden-principles/SKILL.md:139
- skill quality-grades — .claude/skills/golden-principles/SKILL.md:140

## Invoked by — required
- skill review — .claude/skills/review/SKILL.md:100
- doc workflow-commands.md — docs/workflow-commands.md:166
- doc skill-reference.md — docs/skill-reference.md:120
- doc golden-principles.md — .agents/governance/golden-principles.md:14

## Concepts named — required, verbatim
- `Golden Principles` — .claude/skills/golden-principles/SKILL.md:8 — defined here
- `GP-001` — .claude/skills/golden-principles/SKILL.md:82 — used here
- `GP-002` — .claude/skills/golden-principles/SKILL.md:88 — used here
- `GP-003` — .claude/skills/golden-principles/SKILL.md:83 — used here
- `GP-004` — .claude/skills/golden-principles/SKILL.md:84 — used here
- `GP-005` — .claude/skills/golden-principles/SKILL.md:85 — used here
- `GP-006` — .claude/skills/golden-principles/SKILL.md:86 — used here
- `GP-007` — .claude/skills/golden-principles/SKILL.md:88 — used here
- `GP-008` — .claude/skills/golden-principles/SKILL.md:88 — used here
- `OpenAI Harness Engineering` — .claude/skills/golden-principles/SKILL.md:15 — used here
- `recurring cleanup process` — .claude/skills/golden-principles/SKILL.md:18 — used here
- `garbage collection` — .claude/skills/golden-principles/SKILL.md:27 — used here
- `taste-lints` — .claude/skills/golden-principles/SKILL.md:39 — used here
- `quality-grades` — .claude/skills/golden-principles/SKILL.md:44 — used here
- `AGENT_REMEDIATION` — .claude/skills/golden-principles/SKILL.md:52 — defined here
- `script-language` — .claude/skills/golden-principles/SKILL.md:82 — defined here
- `skill-frontmatter` — .claude/skills/golden-principles/SKILL.md:83 — defined here
- `agent-definition` — .claude/skills/golden-principles/SKILL.md:84 — defined here
- `yaml-logic` — .claude/skills/golden-principles/SKILL.md:85 — defined here
- `actions-pinned` — .claude/skills/golden-principles/SKILL.md:86 — defined here
- `Code Qualities` — .claude/skills/golden-principles/SKILL.md:130 — used here
- `SOLID Principles` — .claude/skills/golden-principles/SKILL.md:131 — used here
- `Programming by Intention` — .claude/skills/golden-principles/SKILL.md:132 — used here
- `Separation of Concerns` — .claude/skills/golden-principles/SKILL.md:133 — used here
- `DRY Principle` — .claude/skills/golden-principles/SKILL.md:134 — used here
- `Sergeant pattern` — .claude/skills/golden-principles/SKILL.md:132 — used here

## Structure
- `# Golden Principles` — .claude/skills/golden-principles/SKILL.md:8
- `## Triggers` — .claude/skills/golden-principles/SKILL.md:20
- `## When to Use` — .claude/skills/golden-principles/SKILL.md:30
- `## Process` — .claude/skills/golden-principles/SKILL.md:49
- `## Usage` — .claude/skills/golden-principles/SKILL.md:56
- `## Rules` — .claude/skills/golden-principles/SKILL.md:78
- `## Exit Codes` — .claude/skills/golden-principles/SKILL.md:90
- `## Scripts` — .claude/skills/golden-principles/SKILL.md:98
- `## Suppression` — .claude/skills/golden-principles/SKILL.md:104
- `## Verification` — .claude/skills/golden-principles/SKILL.md:114
- `## References` — .claude/skills/golden-principles/SKILL.md:128
- `## Cross-References` — .claude/skills/golden-principles/SKILL.md:136

## Scripts — required if type is script or the skill ships scripts
The skill ships scripts under `.claude/skills/golden-principles/scripts/`:
- path: `.claude/skills/golden-principles/scripts/scan_principles.py`, language: Python, lines: 462
- documented invocation: `python3 .claude/skills/golden-principles/scripts/scan_principles.py` — .claude/skills/golden-principles/SKILL.md:60
- **executed:** yes
- actual command run: `python3 .claude/skills/golden-principles/scripts/scan_principles.py --directory .claude/skills/golden-principles`
- stdout: `golden-principles: 10 files scanned, no violations found.`
- **actual exit code:** 0
- documented exit codes vs actual exit paths:
  - Documented in SKILL.md:94-96:
    - `0`: No violations found — .claude/skills/golden-principles/SKILL.md:94
    - `1`: Script error (bad arguments, file not found) — .claude/skills/golden-principles/SKILL.md:95
    - `10`: Violations detected — .claude/skills/golden-principles/SKILL.md:96
  - In code (`.claude/skills/golden-principles/scripts/scan_principles.py`):
    - `sys.exit(main())` at `.claude/skills/golden-principles/scripts/scan_principles.py:461`
    - `return EXIT_ERROR` (1) on git/diff exception at `.claude/skills/golden-principles/scripts/scan_principles.py:427`
    - `return EXIT_SUCCESS` (0) when no files to scan at `.claude/skills/golden-principles/scripts/scan_principles.py:441`
    - `return EXIT_VIOLATIONS` (10) when `result.error_count > 0` at `.claude/skills/golden-principles/scripts/scan_principles.py:456`
    - `return EXIT_SUCCESS` (0) when clean at `.claude/skills/golden-principles/scripts/scan_principles.py:457`
    - In `scan_principles_core.py`: constants defined as `EXIT_SUCCESS = 0` (`.claude/skills/golden-principles/scripts/scan_principles_core.py:50`), `EXIT_ERROR = 1` (`.claude/skills/golden-principles/scripts/scan_principles_core.py:51`), `EXIT_VIOLATIONS = 10` (`.claude/skills/golden-principles/scripts/scan_principles_core.py:52`).
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  Yes. When executed on `.claude/skills` (`python3 .claude/skills/golden-principles/scripts/scan_principles.py --directory .claude/skills`), it exited with code 10 and reported 6 violations (`golden-principles: 635 files scanned, 6 error(s), 0 warning(s)`). When invoked with invalid arguments (`--rules nonexistent`), it exited with code 1 (`error: unknown rules: nonexistent`).
- does the output match what the documentation claims? Yes, outputs summary counts and `AGENT_REMEDIATION` blocks for detected violations.

## Defects — required
- `doc-drift` · .claude/skills/golden-principles/SKILL.md:4 · Frontmatter description states that the skill "Enforces GP-001 through GP-008", but the bundled scanner script only implements GP-001, GP-003, GP-004, GP-005, and GP-006; lines 88 and 13 note that GP-002, GP-007, and GP-008 are enforced externally by git hooks and taste-lints.

## Observations
- OpenAI Harness Engineering inspiration: explicitly models its architecture and recurring cleanup process on OpenAI Harness Engineering practices — .claude/skills/golden-principles/SKILL.md:15-18
- Structured Agent Remediation: scanner outputs explicit `AGENT_REMEDIATION` blocks designed specifically for autonomous subagents to apply automated fixes — .claude/skills/golden-principles/SKILL.md:52
- PR Diff Scoping: supports `--diff-scope "origin/$BASE_BRANCH"` to enable fast, targeted checks in PR workflows and review chains — .claude/skills/golden-principles/SKILL.md:66
- Separation between code design and toolkit artifacts: the scanner script enforces toolkit governance invariants (scripts, YAML, frontmatter, agent structure), while architectural code qualities (SOLID, DRY, Separation of Concerns, Programming by Intention) are documented in bundled references (`references/design-*.md`) for human/agent guidance rather than AST linting.
- Vendor portability declaration: declared in comment at line 13, noting that governance files are upstream and vendored installs keep built-in checks.

## Context cost
5739 bytes (~1435 tokens) for SKILL.md.
Full bundled skill context across all 5 references (12292 bytes) is 18031 bytes (~4508 tokens).
Total package with scripts (34234 bytes) is 52265 bytes (~13066 tokens).
