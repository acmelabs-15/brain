---
package: rjm
path: .claude/skills/quality-grades/SKILL.md
type: skill
bytes: 5518
unit: inv-rjm-145
in_scope_via: .claude/commands/test.md
aliases: []
memo_inputs:
  - {path: .claude/skills/quality-grades/SKILL.md, sha256: 169d96f9077aeeb8c6039593f702f0b100d56bc9d126dd28e82d5e5bfab775e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/quality-grades/SKILL.md

## Purpose — required, verbatim
> "Grade each product domain and architectural layer. Track gaps over time." — .claude/skills/quality-grades/SKILL.md:10

## Design intent — required
Defines the `quality-grades` skill for Claude Code and automated agents, orchestrating domain-level quality audits across six architectural layers with quantifiable scoring (A-F), gap categorization (critical, significant, minor), and longitudinal trend analysis (improving, stable, degrading, new). Without this skill, repository maintainers and agents would lack an automated, macro-level health check to identify neglected domains, detect architectural degradation, and prioritize quality remediation across the codebase.

## Phase — required
rjm:test

## Inputs — required
- Trigger phrases:
  - `grade quality` — .claude/skills/quality-grades/SKILL.md:16
  - `audit domain quality` — .claude/skills/quality-grades/SKILL.md:17
  - `show quality gaps` — .claude/skills/quality-grades/SKILL.md:18
  - `run quality grades` — .claude/skills/quality-grades/SKILL.md:19
  - `domain quality report` — .claude/skills/quality-grades/SKILL.md:20
- Command-line options passed to `grade_domains.py`:
  - `--domains` — .claude/skills/quality-grades/SKILL.md:38
  - `--format json` — .claude/skills/quality-grades/SKILL.md:38
  - `--output quality-grades.md` — .claude/skills/quality-grades/SKILL.md:41
  - `--top-n 10` — .claude/skills/quality-grades/SKILL.md:44
- Historical JSON data loaded for trend calculation:
  - `--output` — .claude/skills/quality-grades/SKILL.md:82

## Outputs — required
- Report files:
  - `markdown or JSON reports` — .claude/skills/quality-grades/SKILL.md:4
  - `quality-grades.md` — .claude/skills/quality-grades/SKILL.md:41
- GitHub issue notification created by `check_grade_changes.py`:
  - `GitHub issue` — .claude/skills/quality-grades/SKILL.md:137
- Exit codes:
  - `0` ("success" — .claude/skills/quality-grades/SKILL.md:136)
  - `2` ("no domains detected (report is empty)" — .claude/skills/quality-grades/SKILL.md:136)
  - `0` ("no degradation" — .claude/skills/quality-grades/SKILL.md:137)
  - `1` ("script error or degradation detected" — .claude/skills/quality-grades/SKILL.md:137)

## Invokes — required
- script scripts/grade_domains.py — .claude/skills/quality-grades/SKILL.md:35
- script scripts/check_grade_changes.py — .claude/skills/quality-grades/SKILL.md:137
- reference references/code-qualities.md — .claude/skills/quality-grades/SKILL.md:143
- reference references/solid-principles.md — .claude/skills/quality-grades/SKILL.md:144
- reference references/kiss-principle.md — .claude/skills/quality-grades/SKILL.md:145

## Invoked by — required
- command test — .claude/commands/test.md:134
- agent quality-auditor — .claude/agents/quality-auditor.md:3
- skill autoplan — .claude/skills/autoplan/SKILL.md:128
- skill golden-principles — .claude/skills/golden-principles/SKILL.md:140
- skill code-qualities-assessment — .claude/skills/code-qualities-assessment/SKILL.md:3

## Concepts named — required, verbatim
- `quality-grades` — .claude/skills/quality-grades/SKILL.md:2 — defined here
- `Quality Grades` — .claude/skills/quality-grades/SKILL.md:8 — defined here
- `Detect domains` — .claude/skills/quality-grades/SKILL.md:26 — defined here
- `Grade layers` — .claude/skills/quality-grades/SKILL.md:27 — defined here
- `Grading Criteria` — .claude/skills/quality-grades/SKILL.md:49 — defined here
- `Architectural Layers` — .claude/skills/quality-grades/SKILL.md:59 — defined here
- `Gap Severity` — .claude/skills/quality-grades/SKILL.md:72 — defined here
- `Trend Tracking` — .claude/skills/quality-grades/SKILL.md:80 — defined here
- `code-qualities-assessment` — .claude/skills/quality-grades/SKILL.md:102 — used here
- `cohesion` — .claude/skills/quality-grades/SKILL.md:104 — used here
- `coupling` — .claude/skills/quality-grades/SKILL.md:104 — used here
- `review` — .claude/skills/quality-grades/SKILL.md:4 — used here

## Structure
- # Quality Grades — .claude/skills/quality-grades/SKILL.md:8
- ## Triggers — .claude/skills/quality-grades/SKILL.md:14
- ## Process — .claude/skills/quality-grades/SKILL.md:24
- ## Quick Start — .claude/skills/quality-grades/SKILL.md:31
- ## Grading Criteria — .claude/skills/quality-grades/SKILL.md:49
- ## Architectural Layers — .claude/skills/quality-grades/SKILL.md:59
- ## Gap Severity — .claude/skills/quality-grades/SKILL.md:72
- ## Trend Tracking — .claude/skills/quality-grades/SKILL.md:80
- ## When to Use — .claude/skills/quality-grades/SKILL.md:93
- ## Anti-Patterns — .claude/skills/quality-grades/SKILL.md:109
- ## Verification — .claude/skills/quality-grades/SKILL.md:119
- ## Scripts — .claude/skills/quality-grades/SKILL.md:132
- ## References — .claude/skills/quality-grades/SKILL.md:139

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/quality-grades/scripts/grade_domains.py`, language: Python, lines: 593
- documented invocation: `python3 .claude/skills/quality-grades/scripts/grade_domains.py` — .claude/skills/quality-grades/SKILL.md:35
- **executed:** yes
- actual command run: `python3 .claude/skills/quality-grades/scripts/grade_domains.py --top-n 3`, abridged stdout: `# Quality Grades\n\nLast updated: ...\nGrading agent: quality-auditor\n\n## Domain: avoiding-manufactured-work\nOverall: **D** (41/100) (new)...`, **actual exit code:** 0
- documented exit codes:
  - `0` ("success" — .claude/skills/quality-grades/SKILL.md:136) vs actual exit: `grade_domains.py:588`
  - `2` ("no domains detected (report is empty)" — .claude/skills/quality-grades/SKILL.md:136) vs actual exit: `grade_domains.py:540, 550`
- for validators/gates: can exit non-zero (exits 2 when no domains detected). On repo root with domains detected, exits 0.
- does output match documentation: Yes.

- path: `.claude/skills/quality-grades/scripts/check_grade_changes.py`, language: Python, lines: 171
- documented invocation: `scripts/check_grade_changes.py` — .claude/skills/quality-grades/SKILL.md:137
- **executed:** yes
- actual command run: `python3 .claude/skills/quality-grades/scripts/check_grade_changes.py --grades-file /tmp/test-grades.json --threshold 60`, abridged stdout: `All domains within acceptable quality thresholds.`, **actual exit code:** 0
- documented exit codes:
  - `0` ("no degradation" — .claude/skills/quality-grades/SKILL.md:137) vs actual exit: `check_grade_changes.py:155`
  - `1` ("script error or degradation detected" — .claude/skills/quality-grades/SKILL.md:137) vs actual exit: `check_grade_changes.py:136, 142, 150, 164, 166`
- for validators/gates: can exit non-zero (exits 1 on error or degradation). Exits 0 when grades meet threshold.
- does output match documentation: Yes.

## Defects — required
- `doc-drift` · .claude/skills/quality-grades/SKILL.md:33 · Quick start code fence is labeled ````python``` even though all 4 lines are bash shell commands (`python3 .claude/skills/...`).
- `doc-drift` · .claude/skills/quality-grades/SKILL.md:137 · Lists `scripts/check_grade_changes.py` under Scripts table, but provides no example invocation in the Quick Start or Verification sections.

## Observations
- Documents vendor-portability declaration (line 12): docs layer scans consumer `docs/` and `.agents/` as scan targets, grading whatever is present rather than failing if `.agents/` is absent.
- Explicitly differentiates macro domain grading from micro maintainability scoring (`code-qualities-assessment`) and PR reviews (`review`).
- Verification section includes an exit code assertion (`echo "exit=$?"`) noting that exit 2 indicates no domains were detected.

## Context cost
File size: 5,518 bytes (~1,380 tokens). Loads `references/code-qualities.md` (2,638 bytes), `references/solid-principles.md` (1,742 bytes), `references/kiss-principle.md` (2,056 bytes), `scripts/grade_domains.py` (16,908 bytes), and `scripts/check_grade_changes.py` (5,257 bytes). Total context cost: 34,119 bytes (~8,530 tokens).
