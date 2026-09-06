---
package: rjm
path: scripts/skill_description_budget.py
type: script
bytes: 8517
unit: inv-rjm-261
in_scope_via: .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md
aliases: []
memo_inputs:
  - {path: scripts/skill_description_budget.py, sha256: ff108f0301535684ddc0d27b6a5d51544a846b7332cdfe4bb8201eced72ee13a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# scripts/skill_description_budget.py

## Purpose — required, verbatim
> "Corpus-wide skill-description budget instrument (issue #2794)." — scripts/skill_description_budget.py:2

## Design intent — required
Measures aggregate character and estimated token standing cost across all skill descriptions in `.claude/skills/*/SKILL.md`. While per-skill validation gates individual descriptions at 1024 characters (ADR-040), skill descriptions are resident in LLM context on every invocation prior to task execution, making their aggregate footprint a standing overhead cost that per-skill validators cannot see. This script aggregates description lengths across the corpus, lists top offenders, supports human-readable and JSON output formats, and provides an optional CI quality gate (failing with exit code 1) when the corpus exceeds character or token budgets.

## Phase — required
rjm:cross-phase

## Inputs — required
- CLI arguments:
  - `--root`: directory containing skill subdirectories with `SKILL.md` files (default: `.claude/skills`).
  - `--top`: integer count of top offending skills to display (default: 10).
  - `--max-total-chars`: optional character threshold triggering budget failure (exit code 1).
  - `--max-total-tokens`: optional estimated token threshold triggering budget failure (exit code 1).
  - `--output-format`: output mode choice (`human` or `json`, default: `human`).
- Files read: `.claude/skills/*/SKILL.md` frontmatter blocks parsed for `name` and `description`.

## Outputs — required
- Standard output: human-readable table reporting skill count, total character count, estimated token count (at 4 chars/token heuristic), unparseable skills skipped, and top N skills by description length; or structured JSON object when `--output-format json` is requested.
- Standard error: error messages on invalid directory root or non-negative constraints (exit code 2), and `OVER BUDGET: ...` failure reasons (exit code 1).

## Invokes — required
none

## Invoked by — required
- skill ai-agents-diagnostics-toolkit — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:26
- reference instrument-guides — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:14

## Concepts named — required, verbatim
- `validate-skill.py` — scripts/skill_description_budget.py:4 — used here
- `ADR-040` — scripts/skill_description_budget.py:5 — used here
- `count_memory_tokens.py` — scripts/skill_description_budget.py:13 — used here
- `AGENTS.md` — scripts/skill_description_budget.py:20 — used here
- `estimate_tokens` — scripts/skill_description_budget.py:43 — defined here
- `extract_frontmatter` — scripts/skill_description_budget.py:48 — defined here
- `SkillDescription` — scripts/skill_description_budget.py:75 — defined here
- `measure_skill` — scripts/skill_description_budget.py:86 — defined here
- `BudgetReport` — scripts/skill_description_budget.py:109 — defined here
- `measure_corpus` — scripts/skill_description_budget.py:131 — defined here
- `to_json` — scripts/skill_description_budget.py:144 — defined here
- `to_human` — scripts/skill_description_budget.py:158 — defined here
- `_parse_args` — scripts/skill_description_budget.py:176 — defined here
- `_over_budget` — scripts/skill_description_budget.py:213 — defined here
- `main` — scripts/skill_description_budget.py:228 — defined here

## Structure
- estimate_tokens — scripts/skill_description_budget.py:43
- extract_frontmatter — scripts/skill_description_budget.py:48
- SkillDescription — scripts/skill_description_budget.py:75
- measure_skill — scripts/skill_description_budget.py:86
- BudgetReport — scripts/skill_description_budget.py:109
- measure_corpus — scripts/skill_description_budget.py:131
- to_json — scripts/skill_description_budget.py:144
- to_human — scripts/skill_description_budget.py:158
- _parse_args — scripts/skill_description_budget.py:176
- _over_budget — scripts/skill_description_budget.py:213
- main — scripts/skill_description_budget.py:228

## Scripts — required if type is script or the skill ships scripts
- path: `scripts/skill_description_budget.py`
- language: Python
- lines: 256
- documented invocation:
  - `"uv run python ./scripts/skill_description_budget.py"` — .claude/skills/ai-agents-diagnostics-toolkit/SKILL.md:26
  - `"uv run python ./scripts/skill_description_budget.py --top 10"` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:14
  - `"uv run python ./scripts/skill_description_budget.py --max-total-tokens 8000"` — .claude/skills/ai-agents-diagnostics-toolkit/references/instrument-guides.md:16
- **executed:** yes
- actual command run: `uv run python ./scripts/skill_description_budget.py`
- abridged stdout:
  ```text
  Skill description budget: 95 skill(s), 40211 chars (~10053 est. tokens at 4 chars/token)
  Top 10 by description length:
      830 chars (~ 208 tok)  adr-generator
      824 chars (~ 206 tok)  software-engineering-library
      655 chars (~ 164 tok)  adr-review
      620 chars (~ 155 tok)  memory-consolidate
      619 chars (~ 155 tok)  dx-review
  ```
- **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  - Documented:
    - "0 ok (and within budget if one is set), 1 over budget," — scripts/skill_description_budget.py:20
    - "2 config (bad root / no skills found)." — scripts/skill_description_budget.py:21
  - Actual exit paths:
    - `0`: scripts/skill_description_budget.py:251 (`return EXIT_OK`)
    - `1`: scripts/skill_description_budget.py:250 (`return EXIT_OVER_BUDGET`)
    - `2`: scripts/skill_description_budget.py:232 (`return EXIT_CONFIG`), scripts/skill_description_budget.py:235 (`return EXIT_CONFIG`), scripts/skill_description_budget.py:240 (`return EXIT_CONFIG`)
- for validators/gates:
  - Can it exit non-zero? Yes, exits 1 if `--max-total-chars` or `--max-total-tokens` is exceeded, and exits 2 if `--root` is invalid or contains 0 valid skill descriptions.
  - Does it fail on the source repo's own default branch? Under default invocation without budget caps (`uv run python ./scripts/skill_description_budget.py`), it succeeds with exit code 0 (measuring 95 skills). When run in gate mode with `--max-total-tokens 8000`, it exits with code 1 because current total tokens (~10,053) exceed the 8,000 token budget.
- does the output match what the documentation claims?
  - Yes, accurately calculates character totals and token estimates using the 4 chars/token heuristic and lists top offenders.

## Defects — required
- missing-path — scripts/skill_description_budget.py:13 — references `memory/scripts/count_memory_tokens.py` in docstring, but path in repository is `scripts/memory_enhancement/count_memory_tokens.py` (no `memory/` top-level directory).

## Observations
- Deliberately avoids external tokenizer dependencies (e.g. `tiktoken`): uses a simple character-to-token heuristic (4 characters per token, rounded up via `math.ceil`) so that the instrument runs in bare environments without requiring package installation.
- Graceful error recovery: if a `SKILL.md` frontmatter block is missing or unparseable YAML, it skips the file and increments `skills_without_description` without crashing (scripts/skill_description_budget.py:51-71, 136-139).

## Context cost
File size: 8,517 bytes (256 lines). Loads standard Python modules (`argparse`, `dataclasses`, `json`, `math`, `pathlib`, `sys`) and `yaml`. Context cost ~2,130 tokens.
