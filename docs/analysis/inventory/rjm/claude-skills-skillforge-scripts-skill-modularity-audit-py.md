---
package: rjm
path: .claude/skills/skillforge/scripts/skill_modularity_audit.py
type: script
bytes: 13332
unit: inv-rjm-163
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/skill_modularity_audit.py, sha256: 55ccc09bdac6caa91ec34111cd8faa6ffddafc52b0684f831ba21993eeab07f9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/scripts/skill_modularity_audit.py

## Purpose — required, verbatim
> "Audit skill modularity based on SkillsBench research findings." — .claude/skills/skillforge/scripts/skill_modularity_audit.py:2

The docstring states:
"This script audits all skills in .claude/skills/ and produces a report with modularity scores and refactoring recommendations." — .claude/skills/skillforge/scripts/skill_modularity_audit.py:10-11

## Design intent — required
Audits skill files across a skill directory against empirical modularity principles established by SkillsBench research (Feb 2026). It evaluates skill length (penalizing skills exceeding 300 or 500 lines or falling below 100 lines), section focus (penalizing excessive top-level `##` sections greater than 10), and progressive disclosure (awarding bonuses for `scripts/`, `references/`, `templates/`, and `modules/` subdirectories). It calculates a 0-100 modularity score and generates refactoring recommendations. Without it, skills bloat into monolithic documents or scatter into fragmented micro-skills, significantly degrading agent task-completion pass rates.

## Phase — required
rjm:Validation and Packaging

## Inputs — required
- CLI flag `--path`: Path to skills directory (default: `.claude/skills`) — .claude/skills/skillforge/scripts/skill_modularity_audit.py:351
- CLI flag `--ci`: CI mode flag to exit non-zero if oversized skills found — .claude/skills/skillforge/scripts/skill_modularity_audit.py:356
- CLI flag `--json`: Output results as JSON — .claude/skills/skillforge/scripts/skill_modularity_audit.py:361
- Skill directory trees containing `SKILL.md` and optional subdirectories — .claude/skills/skillforge/scripts/skill_modularity_audit.py:195-213

## Outputs — required
- Formatted console report: Summary metrics, ERRORS, OVERSIZED, WARNING, and ALL SKILLS lists sorted by modularity score — .claude/skills/skillforge/scripts/skill_modularity_audit.py:302-341
- JSON-formatted audit results when `--json` flag is provided — .claude/skills/skillforge/scripts/skill_modularity_audit.py:409
- Exit codes: 0 on success, 1 on oversized skills in CI mode, 2 on invalid or unsafe paths — .claude/skills/skillforge/scripts/skill_modularity_audit.py:23-24, 400, 404, 415, 417

## Invokes — required
- script frontmatter.py — .claude/skills/skillforge/scripts/skill_modularity_audit.py:43
- reference references/modularity-guidelines.md — .claude/skills/skillforge/scripts/skill_modularity_audit.py:8

## Invoked by — required
- doc .claude/skills/skillforge/SKILL.md — .claude/skills/skillforge/SKILL.md:283

## Concepts named — required, verbatim
- `SkillsBench` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:2 — used here
- `Progressive disclosure` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:19 — used here
- `ADR-035` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:22 — used here
- `LINE_LIMIT` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:57 — defined here
- `LINE_WARNING` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:58 — defined here
- `MAX_H2_SECTIONS` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:61 — defined here
- `IDEAL_MAX_LINES` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:62 — defined here
- `IDEAL_MIN_LINES` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:68 — defined here
- `SkillAuditResult` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:72 — defined here
- `_score_modularity` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:97 — defined here
- `_generate_recommendations` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:143 — defined here
- `CWE-22` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:369 — used here

## Structure
- Frontmatter helper loader `_load_has_size_exception` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:42
- Audit result data structure `SkillAuditResult` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:72
- Markdown heading parser `_count_headings` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:90
- Modularity scoring algorithm `_score_modularity` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:97
- Recommendation generator `_generate_recommendations` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:143
- Single skill auditor `audit_skill` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:189
- Batch skill auditor `audit_all_skills` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:248
- Report display engine `print_report` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:291
- Argument parser builder `build_parser` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:344
- Path traversal validation `validate_path_safety` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:368
- CLI main entrypoint `main` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:389

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/skillforge/scripts/skill_modularity_audit.py`
- language: Python (python3)
- lines: 422
- documented invocation:
  - `python skill_modularity_audit.py` (via docstring: "This script audits all skills in .claude/skills/ and produces a report with modularity scores and refactoring recommendations." — .claude/skills/skillforge/scripts/skill_modularity_audit.py:10-11)
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/skillforge/scripts/skill_modularity_audit.py --path sources/rjm/.claude/skills`
- abridged stdout:
  ```text
  ============================================================
  Skill Modularity Audit Report
  ============================================================
  Total skills: 98
  Good:         78
  Warning:      20
  Oversized:    0
  ...
  ALL SKILLS (sorted by modularity score)
  ------------------------------------------------------------
    [~] cva-analysis                              456 lines  score= 71  h2=18
  ...
  ```
- actual exit code: 0
- documented exit codes vs actual exit paths:
  - Documented in docstring (.claude/skills/skillforge/scripts/skill_modularity_audit.py:22-25):
    - "0 - Success" — .claude/skills/skillforge/scripts/skill_modularity_audit.py:23
    - "1 - Oversized skills found (CI mode)" — .claude/skills/skillforge/scripts/skill_modularity_audit.py:24
  - Actual exit paths in code:
    - `return 0` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:417 (all skills compliant or non-CI mode)
    - `return 1` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:415 (oversized skills found in CI mode)
    - `return 2` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:400 (unsafe CLI path traversal detected)
    - `return 2` — .claude/skills/skillforge/scripts/skill_modularity_audit.py:404 (skills directory not found)
- for validators/gates: can exit non-zero (exits 1 in CI mode when oversized skills are found; exits 2 on bad paths). Tested on source repository's own default branch: passes with exit code 0 on `sources/rjm/.claude/skills`.
- does the output match what the documentation claims: yes, audits all skills and produces the modularity report with scores and recommendations

## Defects — required
- `doc-drift`: In .claude/skills/skillforge/scripts/skill_modularity_audit.py:11-14, the docstring states: "Its length curve is one-sided: it subtracts above 300 lines and subtracts nothing below, so nothing signals that a skill has been cut past the standard range the study ranked first." However, lines 63-68 and 119-124 implement a two-sided curve with `IDEAL_MIN_LINES: int = 100`, penalizing skills with line counts below 100 lines. The docstring was not updated when this fix was implemented.
- `exit-code-mismatch`: Docstring lines 22-25 document exit codes 0 and 1, but omit exit code 2 returned by lines 400 and 404 for invalid or unsafe paths.

## Observations
- Directly encodes SkillsBench research findings on skill size, section count, and directory composition into automated scoring algorithms (.claude/skills/skillforge/scripts/skill_modularity_audit.py:63-68, 97-141).
- Provides bonuses for progressive disclosure subdirectories (`scripts/` +5, `references/` +5, `templates/` +3, `modules/` +5) (.claude/skills/skillforge/scripts/skill_modularity_audit.py:130-139).
- Uses `importlib.util` to dynamically load `frontmatter.py` from the script's directory (.claude/skills/skillforge/scripts/skill_modularity_audit.py:42-54).

## Context cost
13,332 bytes (approx. 3,300 tokens). Loads `frontmatter.py` (1,087 bytes), giving total combined cost of ~14.4 KB (~3,600 tokens).
