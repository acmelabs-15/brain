---
package: rjm
path: .claude/skills/quality-grades/scripts/grade_domains.py
type: script
bytes: 16908
unit: inv-rjm-145
in_scope_via: .claude/skills/quality-grades/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/quality-grades/scripts/grade_domains.py, sha256: 14cd79a354e088527cb5cf77f2389be5577ed87949ba910b715ef69b7af91b5a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/quality-grades/scripts/grade_domains.py

## Purpose — required, verbatim
> "Quality Grades - Domain grading with gap tracking." — .claude/skills/quality-grades/scripts/grade_domains.py:3

## Design intent — required
Provides the core automated grading engine that scans repository structure for product domains (from `.claude/agents/*.md` and `.claude/skills/*/SKILL.md`) and evaluates them across six architectural layers (`agents`, `skills`, `scripts`, `tests`, `docs`, `workflows`), producing scored A-F letter grades, identifying specific gaps with severity ratings (`critical`, `significant`, `minor`), and tracking trajectory trends (`improving`, `stable`, `degrading`, `new`) against prior runs. Without this script, quality auditing would be entirely manual, subjective, and unable to track systematic architectural improvements or regressions across domain boundaries.

## Phase — required
rjm:test

## Inputs — required
- Command-line arguments:
  - `--repo-root` — .claude/skills/quality-grades/scripts/grade_domains.py:503
  - `--domains` — .claude/skills/quality-grades/scripts/grade_domains.py:509
  - `--format` — .claude/skills/quality-grades/scripts/grade_domains.py:514
  - `--output` — .claude/skills/quality-grades/scripts/grade_domains.py:520
  - `--top-n` — .claude/skills/quality-grades/scripts/grade_domains.py:525
- Repository layout and filesystem paths:
  - `.claude` — .claude/skills/quality-grades/scripts/grade_domains.py:88
  - `agents` — .claude/skills/quality-grades/scripts/grade_domains.py:88
  - `skills` — .claude/skills/quality-grades/scripts/grade_domains.py:95
  - `SKILL.md` — .claude/skills/quality-grades/scripts/grade_domains.py:98
  - `scripts` — .claude/skills/quality-grades/scripts/grade_domains.py:214
  - `tests` — .claude/skills/quality-grades/scripts/grade_domains.py:260
  - `docs` — .claude/skills/quality-grades/scripts/grade_domains.py:304
  - `.agents` — .claude/skills/quality-grades/scripts/grade_domains.py:304
  - `workflows` — .claude/skills/quality-grades/scripts/grade_domains.py:337
- Historical JSON file for trend calculation:
  - `load_previous_grades` — .claude/skills/quality-grades/scripts/grade_domains.py:408

## Outputs — required
- Markdown formatted report (stdout or written to `--output` path):
  - `format_markdown` — .claude/skills/quality-grades/scripts/grade_domains.py:419
- JSON formatted report (stdout or written to `--output` path):
  - `format_json` — .claude/skills/quality-grades/scripts/grade_domains.py:469
- Exit codes:
  - `0` ("Grading complete, report generated" — .claude/skills/quality-grades/scripts/grade_domains.py:9)
  - `1` ("Script error" — .claude/skills/quality-grades/scripts/grade_domains.py:10)
  - `2` ("Configuration error (invalid domain config)" — .claude/skills/quality-grades/scripts/grade_domains.py:11)

## Invokes — required
none

## Invoked by — required
- skill quality-grades — .claude/skills/quality-grades/SKILL.md:35
- agent quality-auditor — .claude/agents/quality-auditor.md:42

## Concepts named — required, verbatim
- `Quality Grades` — .claude/skills/quality-grades/scripts/grade_domains.py:3 — defined here
- `GRADE_THRESHOLDS` — .claude/skills/quality-grades/scripts/grade_domains.py:21 — defined here
- `LAYERS` — .claude/skills/quality-grades/scripts/grade_domains.py:29 — defined here
- `Gap` — .claude/skills/quality-grades/scripts/grade_domains.py:33 — defined here
- `LayerGrade` — .claude/skills/quality-grades/scripts/grade_domains.py:42 — defined here
- `DomainGrade` — .claude/skills/quality-grades/scripts/grade_domains.py:53 — defined here
- `score_to_grade` — .claude/skills/quality-grades/scripts/grade_domains.py:75 — defined here
- `detect_domains` — .claude/skills/quality-grades/scripts/grade_domains.py:83 — defined here
- `compute_trend` — .claude/skills/quality-grades/scripts/grade_domains.py:396 — defined here
- `load_previous_grades` — .claude/skills/quality-grades/scripts/grade_domains.py:408 — defined here
- `quality-auditor` — .claude/skills/quality-grades/scripts/grade_domains.py:432 — used here

## Structure
- #!/usr/bin/env python3 — .claude/skills/quality-grades/scripts/grade_domains.py:1
- class Gap — .claude/skills/quality-grades/scripts/grade_domains.py:33
- class LayerGrade — .claude/skills/quality-grades/scripts/grade_domains.py:42
- class DomainGrade — .claude/skills/quality-grades/scripts/grade_domains.py:53
- def score_to_grade — .claude/skills/quality-grades/scripts/grade_domains.py:75
- def detect_domains — .claude/skills/quality-grades/scripts/grade_domains.py:83
- def _grade_agents_layer — .claude/skills/quality-grades/scripts/grade_domains.py:104
- def _grade_skills_layer — .claude/skills/quality-grades/scripts/grade_domains.py:146
- def _has_docstring — .claude/skills/quality-grades/scripts/grade_domains.py:197
- def _grade_scripts_layer — .claude/skills/quality-grades/scripts/grade_domains.py:204
- def _grade_tests_layer — .claude/skills/quality-grades/scripts/grade_domains.py:249
- def _grade_docs_layer — .claude/skills/quality-grades/scripts/grade_domains.py:294
- def _grade_workflows_layer — .claude/skills/quality-grades/scripts/grade_domains.py:328
- def grade_layer — .claude/skills/quality-grades/scripts/grade_domains.py:368
- def grade_domain — .claude/skills/quality-grades/scripts/grade_domains.py:390
- def compute_trend — .claude/skills/quality-grades/scripts/grade_domains.py:396
- def load_previous_grades — .claude/skills/quality-grades/scripts/grade_domains.py:408
- def format_markdown — .claude/skills/quality-grades/scripts/grade_domains.py:419
- def format_json — .claude/skills/quality-grades/scripts/grade_domains.py:469
- def parse_args — .claude/skills/quality-grades/scripts/grade_domains.py:497
- def main — .claude/skills/quality-grades/scripts/grade_domains.py:532
- if __name__ == "__main__": — .claude/skills/quality-grades/scripts/grade_domains.py:591

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/quality-grades/scripts/grade_domains.py`, language: Python, lines: 593
- documented invocation: `python3 .claude/skills/quality-grades/scripts/grade_domains.py` — .claude/skills/quality-grades/SKILL.md:35
- **executed:** yes
- actual command run: `python3 .claude/skills/quality-grades/scripts/grade_domains.py --top-n 3`, abridged stdout: `# Quality Grades\n\nLast updated: ...\nGrading agent: quality-auditor\n\n## Domain: avoiding-manufactured-work\nOverall: **D** (41/100) (new)...`, **actual exit code:** 0
- actual command run: `python3 .claude/skills/quality-grades/scripts/grade_domains.py --repo-root /tmp`, abridged stdout: `Error: not a valid repo root (no .claude directory)`, **actual exit code:** 2
- documented exit codes:
  - `0` ("Grading complete, report generated" — .claude/skills/quality-grades/scripts/grade_domains.py:9) vs actual exit: line 588
  - `1` ("Script error" — .claude/skills/quality-grades/scripts/grade_domains.py:10) vs actual exit: no explicit `return 1` in `main()`
  - `2` ("Configuration error (invalid domain config)" — .claude/skills/quality-grades/scripts/grade_domains.py:11) vs actual exit: lines 540, 550
- for validators/gates: can exit non-zero (exits 2 when `.claude` directory is absent or no domains are detected). On source repo default branch it detects domains and exits 0.
- does output match documentation: Yes, markdown and JSON report structure and summary metrics match documentation.

## Defects — required
- `exit-code-mismatch` · .claude/skills/quality-grades/scripts/grade_domains.py:10 · Docstring documents exit code `1: Script error`, but `main()` contains no explicit `return 1` or `sys.exit(1)` code path, returning only 0 or 2.
- `doc-drift` · .claude/skills/quality-grades/scripts/grade_domains.py:414 · `load_previous_grades()` attempts to load previous JSON from `output_path.with_suffix(".json")`, but if the user runs `--output quality-grades.md` without previously generating a `.json` file at the same basename, previous grades return `None` and trend is always `new`.

## Observations
- Grades six architectural layers with domain-specific heuristics: agents (structural sections), skills (frontmatter and headings), scripts (docstrings in .py/.ps1), tests (test files for domain in .py/.ps1), docs (matching markdown in docs/ and .agents/), workflows (matching yaml in .github/workflows/).
- Summary metrics compute total domains, total gaps, and critical gaps across all graded layers.
- Supports both Python (`.py`) and PowerShell (`.ps1`) files when checking automation scripts and tests.

## Context cost
File size: 16,908 bytes (~4,227 tokens). Pure script with no sub-dependencies. Total context cost: 16,908 bytes (~4,227 tokens).
