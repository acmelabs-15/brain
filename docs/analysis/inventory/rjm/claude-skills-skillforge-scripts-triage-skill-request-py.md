---
package: rjm
path: .claude/skills/skillforge/scripts/triage_skill_request.py
type: script
bytes: 29094
unit: inv-rjm-164
in_scope_via: .claude/skills/skillforge/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/skillforge/scripts/triage_skill_request.py, sha256: 9fafbd937dd730d969654c465fd4f13eaba78f1866db92488b76c1c27cbc9740}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/skillforge/scripts/triage_skill_request.py

## Purpose — required, verbatim
> "triage_skill_request.py - Intelligent skill routing from any user input" — .claude/skills/skillforge/scripts/triage_skill_request.py:3

## Design intent — required
Serves as the Phase 0 triage router for `skillforge`, preventing duplicate skill creation and registry bloat across an agent's environment. It intercepts arbitrary user inputs—natural language requests, error stack traces, code snippets, URLs, or explicit authoring commands—and evaluates them against a catalog of existing skills using concept-based universal domain matching and intent heuristics. By categorizing requests into actions (`USE_EXISTING`, `IMPROVE_EXISTING`, `CREATE_NEW`, `COMPOSE`, `CLARIFY`), it ensures existing capabilities are reused or extended whenever possible, directing callers to build new skills only when a verified functional gap exists. Without this router, users and autonomous agents would repeatedly scaffold redundant or overlapping skills, fragmenting capabilities across the ecosystem.

## Phase — required
rjm:Phase 0: Skill Triage

## Inputs — required
- Positional CLI argument `query` representing user input to analyze — .claude/skills/skillforge/scripts/triage_skill_request.py:754
- CLI option `--json` to output structured machine-readable results — .claude/skills/skillforge/scripts/triage_skill_request.py:760
- CLI option `--verbose` / `-v` to enable verbose logging — .claude/skills/skillforge/scripts/triage_skill_request.py:765
- Skill index JSON file on local disk at `~/.cache/skillrecommender/skill_index.json` — .claude/skills/skillforge/scripts/triage_skill_request.py:646
- Predefined domain dictionary `DOMAIN_SYNONYMS` containing 17 concept domains and associated keyword synonyms — .claude/skills/skillforge/scripts/triage_skill_request.py:233
- Regular expression patterns for input classification:
  - `EXPLICIT_CREATE_PATTERNS` — .claude/skills/skillforge/scripts/triage_skill_request.py:85
  - `EXPLICIT_IMPROVE_PATTERNS` — .claude/skills/skillforge/scripts/triage_skill_request.py:92
  - `SKILL_QUESTION_PATTERNS` — .claude/skills/skillforge/scripts/triage_skill_request.py:98
  - `TASK_REQUEST_PATTERNS` — .claude/skills/skillforge/scripts/triage_skill_request.py:109
  - `ERROR_PATTERNS` — .claude/skills/skillforge/scripts/triage_skill_request.py:117
  - `CODE_PATTERNS` — .claude/skills/skillforge/scripts/triage_skill_request.py:128
  - `URL_PATTERNS` — .claude/skills/skillforge/scripts/triage_skill_request.py:135

## Outputs — required
- Formatted human-readable triage report on stdout via `format_output` — .claude/skills/skillforge/scripts/triage_skill_request.py:780
- JSON object on stdout when running with `--json` via `json.dumps` — .claude/skills/skillforge/scripts/triage_skill_request.py:777
- Error message on stderr when skill index is missing or loading fails — .claude/skills/skillforge/scripts/triage_skill_request.py:782
- Process exit codes: `0` (success), `2` (skill index missing), or `1` (general failure) — .claude/skills/skillforge/scripts/triage_skill_request.py:788-789

## Invokes — required
none

## Invoked by — required
- skill skillforge — .claude/skills/skillforge/SKILL.md:278
- reference phase0-triage.md — .claude/skills/skillforge/references/phase0-triage.md:64
- script discover_skills.py — .claude/skills/skillforge/scripts/discover_skills.py:106

## Concepts named — required, verbatim
- `triage_skill_request.py` — .claude/skills/skillforge/scripts/triage_skill_request.py:3 — defined here
- `skillforge` — .claude/skills/skillforge/scripts/triage_skill_request.py:5 — used here
- `Phase 0: Skill Triage` — .claude/skills/skillforge/scripts/triage_skill_request.py:5 — used here
- `USE_EXISTING` — .claude/skills/skillforge/scripts/triage_skill_request.py:9 — defined here
- `IMPROVE_EXISTING` — .claude/skills/skillforge/scripts/triage_skill_request.py:10 — defined here
- `CREATE_NEW` — .claude/skills/skillforge/scripts/triage_skill_request.py:11 — defined here
- `COMPOSE` — .claude/skills/skillforge/scripts/triage_skill_request.py:12 — defined here
- `CLARIFY` — .claude/skills/skillforge/scripts/triage_skill_request.py:13 — defined here
- `Result` — .claude/skills/skillforge/scripts/triage_skill_request.py:40 — defined here
- `Action` — .claude/skills/skillforge/scripts/triage_skill_request.py:59 — defined here
- `InputCategory` — .claude/skills/skillforge/scripts/triage_skill_request.py:68 — defined here
- `explicit_create` — .claude/skills/skillforge/scripts/triage_skill_request.py:70 — defined here
- `explicit_improve` — .claude/skills/skillforge/scripts/triage_skill_request.py:71 — defined here
- `skill_question` — .claude/skills/skillforge/scripts/triage_skill_request.py:72 — defined here
- `task_request` — .claude/skills/skillforge/scripts/triage_skill_request.py:73 — defined here
- `error_message` — .claude/skills/skillforge/scripts/triage_skill_request.py:74 — defined here
- `code_snippet` — .claude/skills/skillforge/scripts/triage_skill_request.py:75 — defined here
- `url_content` — .claude/skills/skillforge/scripts/triage_skill_request.py:76 — defined here
- `general` — .claude/skills/skillforge/scripts/triage_skill_request.py:77 — defined here
- `EXPLICIT_CREATE_PATTERNS` — .claude/skills/skillforge/scripts/triage_skill_request.py:85 — defined here
- `EXPLICIT_IMPROVE_PATTERNS` — .claude/skills/skillforge/scripts/triage_skill_request.py:92 — defined here
- `SKILL_QUESTION_PATTERNS` — .claude/skills/skillforge/scripts/triage_skill_request.py:98 — defined here
- `TASK_REQUEST_PATTERNS` — .claude/skills/skillforge/scripts/triage_skill_request.py:109 — defined here
- `ERROR_PATTERNS` — .claude/skills/skillforge/scripts/triage_skill_request.py:117 — defined here
- `CODE_PATTERNS` — .claude/skills/skillforge/scripts/triage_skill_request.py:128 — defined here
- `URL_PATTERNS` — .claude/skills/skillforge/scripts/triage_skill_request.py:135 — defined here
- `skillrecommender` — .claude/skills/skillforge/scripts/triage_skill_request.py:208 — used here
- `skill_index.json` — .claude/skills/skillforge/scripts/triage_skill_request.py:213 — used here
- `DOMAIN_SYNONYMS` — .claude/skills/skillforge/scripts/triage_skill_request.py:233 — defined here
- `UNIVERSAL domain matching` — .claude/skills/skillforge/scripts/triage_skill_request.py:290 — defined here
- `SkillForge` — .claude/skills/skillforge/scripts/triage_skill_request.py:718 — used here

## Structure
none (Python CLI script; structural sections demarcated by comment banners):
1. `# RESULT TYPES` — .claude/skills/skillforge/scripts/triage_skill_request.py:36
2. `# INPUT CLASSIFICATION` — .claude/skills/skillforge/scripts/triage_skill_request.py:81
3. `# SKILL MATCHING (from skillrecommender)` — .claude/skills/skillforge/scripts/triage_skill_request.py:208
4. `# UNIVERSAL DOMAIN SYNONYMS` — .claude/skills/skillforge/scripts/triage_skill_request.py:228
5. `# TRIAGE DECISION` — .claude/skills/skillforge/scripts/triage_skill_request.py:459
6. `# MAIN TRIAGE FUNCTION` — .claude/skills/skillforge/scripts/triage_skill_request.py:627
7. `# CLI` — .claude/skills/skillforge/scripts/triage_skill_request.py:673

Key classes and routines:
- `Result` dataclass — .claude/skills/skillforge/scripts/triage_skill_request.py:40
- `Action` enumeration constants — .claude/skills/skillforge/scripts/triage_skill_request.py:59
- `InputCategory` constants — .claude/skills/skillforge/scripts/triage_skill_request.py:68
- `classify_input` — .claude/skills/skillforge/scripts/triage_skill_request.py:140
- `get_index_path` — .claude/skills/skillforge/scripts/triage_skill_request.py:211
- `load_skill_index` — .claude/skills/skillforge/scripts/triage_skill_request.py:216
- `detect_query_domains` — .claude/skills/skillforge/scripts/triage_skill_request.py:265
- `calculate_match_score` — .claude/skills/skillforge/scripts/triage_skill_request.py:288
- `find_matching_skills` — .claude/skills/skillforge/scripts/triage_skill_request.py:403
- `make_triage_decision` — .claude/skills/skillforge/scripts/triage_skill_request.py:462
- `triage_request` — .claude/skills/skillforge/scripts/triage_skill_request.py:630
- `format_output` — .claude/skills/skillforge/scripts/triage_skill_request.py:676
- `main` entry point — .claude/skills/skillforge/scripts/triage_skill_request.py:739

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/skillforge/scripts/triage_skill_request.py`, language: Python 3, lines: 794
- documented invocation:
  - `python triage_skill_request.py "create a skill for code review"` — .claude/skills/skillforge/scripts/triage_skill_request.py:16
  - `python triage_skill_request.py "help me debug this error" --json` — .claude/skills/skillforge/scripts/triage_skill_request.py:17
  - `python triage_skill_request.py "TypeError: Cannot read property 'map'"` — .claude/skills/skillforge/scripts/triage_skill_request.py:18
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - Command 1 (missing index): `python3 sources/rjm/.claude/skills/skillforge/scripts/triage_skill_request.py "create a skill for code review"`
    ```text
    Error: Skill index not found. Run discover_skills.py first.
      Index file missing: ~/.cache/skillrecommender/skill_index.json
    ```
    **actual exit code**: 2
  - Command 2 (with index populated): `python3 sources/rjm/.claude/skills/skillforge/scripts/triage_skill_request.py "create a skill for code review"`
    ```text
    ============================================================
    SKILL TRIAGE RESULT: CREATE_NEW
    ============================================================

    Input Category: explicit_create
    Reason: No strong existing match found. Proceeding with skill creation.

    ────────────────────────────────────────────────────────────
    RECOMMENDED NEXT STEP:
      Create new skill for: code review
      Command: SkillForge: create a skill for code review
    ────────────────────────────────────────────────────────────
    ```
    **actual exit code**: 0
  - Command 3 (JSON mode): `python3 sources/rjm/.claude/skills/skillforge/scripts/triage_skill_request.py "help me debug this error" --json`
    ```json
    {
      "success": true,
      "message": "Triage complete: CLARIFY",
      "data": {
        "action": "CLARIFY",
        "details": {
          "category": "general",
          "top_match": null,
          "top_score": 0,
          "match_count": 0,
          "multi_domain": false,
          "reason": "Unclear intent and no good skill matches",
          "suggested_action": "Ask user to elaborate on their goal"
        },
        "input_category": "general",
        "signals": { ... }
      }
    }
    ```
    **actual exit code**: 0
- documented exit codes vs. actual exit paths in code:
  Documented in docstring:
  - "0 - Success" — .claude/skills/skillforge/scripts/triage_skill_request.py:21
  - "1 - General failure" — .claude/skills/skillforge/scripts/triage_skill_request.py:22
  - "2 - Skill index not found (run discover_skills.py first)" — .claude/skills/skillforge/scripts/triage_skill_request.py:23
  Actual exit paths in code:
  - `sys.exit(0)` — .claude/skills/skillforge/scripts/triage_skill_request.py:789 on successful triage execution.
  - `sys.exit(2 if "index" in result.message.lower() else 1)` — .claude/skills/skillforge/scripts/triage_skill_request.py:788 on `not result.success`.
  - Exit code 2 is always triggered whenever `triage_request` fails because failure only occurs when `not index`, producing `"Skill index not found. Run discover_skills.py first."` (.claude/skills/skillforge/scripts/triage_skill_request.py:645).
  - Exit code 1 ("1 - General failure") is documented, but the `else 1` branch is unreachable dead code in this script.
- for validators/gates: can it exit non-zero? yes, exits 2 when skill index file is missing. Does it fail on the source repo's own default branch? In a pristine environment prior to running `discover_skills.py`, it exits 2 because `~/.cache/skillrecommender/skill_index.json` is not committed.
- does the output match what the documentation claims? Partially. The script correctly categorizes queries and outputs formatted/JSON recommendations. However, the documented example `"help me debug this error"` is classified as `general` rather than `task_request` or `error_message` due to pattern constraints in `TASK_REQUEST_PATTERNS`. Furthermore, example outputs in `references/phase0-triage.md` that assume `ErrorExplainer` or `CodeReview` exist only match when those skills are present in the indexed cache.

## Defects — required
- `doc-drift` · .claude/skills/skillforge/scripts/triage_skill_request.py:22 · Exit code 1 ("1 - General failure") is documented in docstring line 22 and coded as fallback in line 788, but is unreachable dead code because `triage_request()` only ever fails with `"Skill index not found..."` (line 645), unconditionally triggering exit code 2.
- `script-bug` · .claude/skills/skillforge/scripts/triage_skill_request.py:109 · `TASK_REQUEST_PATTERNS` regex `r'\b(?:help|assist)\s+(?:me\s+)?(?:with|to)\b'` strictly requires "with" or "to" after "help me", causing the documented example `"help me debug this error"` (line 17, and `references/phase0-triage.md:64`) to fail task classification and fall through to `InputCategory.GENERAL`.
- `missing-path` · .claude/skills/skillforge/scripts/triage_skill_request.py:213 · `get_index_path()` targets `~/.cache/skillrecommender/skill_index.json` outside the repository tree, which is missing until `discover_skills.py` is manually executed.
- `doc-drift` · .claude/skills/skillforge/references/phase0-triage.md:70 · Documented examples asserting specific recommended skills (e.g. `ErrorExplainer` or `CodeReview`) assume a populated external skill cache; with an empty or fresh index, triage falls back to `CREATE_NEW`.

## Observations
- Pure Python 3 standard library implementation: uses `dataclasses`, `argparse`, `json`, `re`, and `pathlib` with no external dependencies (PyYAML is not required).
- Universal domain synonyms: avoids hardcoding specific skill names by matching query terms across 17 abstract domains (spreadsheet, document, presentation, pdf, debugging, testing, security, code_quality, database, api, frontend, accessibility, performance, authentication, deployment, devops, documentation, architecture, workflow, ai_ml, visual) to evaluate skill domain lists.
- ReDoS mitigation: Line 162 includes an explicit security annotation `SECURITY: Use bounded character class to prevent ReDoS (polynomial backtracking)` using bounded repetition `[a-zA-Z0-9 \-,\'\"]{1,200}`.
- Context-aware scoring: boosts match scores based on detected input signals (e.g. +25 for debugging skills when an error is present, +15 for code quality when code is pasted, +10 for URL inputs).

## Context cost
- File size: 29,094 bytes (794 lines).
- Invokes no other files (pure Python standard library).
- When reading cache index: `~/.cache/skillrecommender/skill_index.json` (size varies with installed skills; empty index is ~200 bytes).
- Total static context cost: 29,094 bytes (~7,270 tokens).
