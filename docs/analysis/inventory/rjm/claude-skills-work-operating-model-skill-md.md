---
package: rjm
path: .claude/skills/work-operating-model/SKILL.md
type: skill
bytes: 7594
unit: inv-rjm-179
in_scope_via: .claude/commands/spec.md
aliases: []
memo_inputs:
  - {path: .claude/skills/work-operating-model/SKILL.md, sha256: 5aca273423b51a4e91ac1deeba1ccee172dbde1cee2ece7742b4ad383e298273}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/work-operating-model/SKILL.md

## Purpose — required, verbatim
> "A conversation-first elicitation skill. Surface what is documented, what is tacit, and where the two disagree. Output is a structured operating model that downstream agents (`architect`, `roadmap`, `orchestrator`) can read." — .claude/skills/work-operating-model/SKILL.md:10

## Design intent — required
Prevents engineering projects and architectural specifications—particularly complex Tier 5 cross-team initiatives—from proceeding under false or idealized assumptions about team operation. By conducting an interactive, five-layer interview, the skill discovers the actual operational reality of a team (rhythms, decisions, dependencies, tacit knowledge, friction) and produces a machine-readable JSON document alongside human-readable markdown projections.

## Phase — required
rjm:spec

## Inputs — required
- Interactive user answers during the conversational 5-layer interview (.claude/skills/work-operating-model/SKILL.md:4, 69)
- Existing `<workspace>/operating-model.json` when resuming an in-progress interview across sessions (.claude/skills/work-operating-model/SKILL.md:89)
- Initial scope definitions: team name, what they own, team size (.claude/skills/work-operating-model/SKILL.md:65)

## Outputs — required
- Structured operating model JSON: `<workspace>/operating-model.json` (.claude/skills/work-operating-model/SKILL.md:74)
- Optional markdown projection views: `USER.md`, `SOUL.md`, `HEARTBEAT.md` (.claude/skills/work-operating-model/SKILL.md:74)

## Invokes — required
- reference references/layer-questions.md — .claude/skills/work-operating-model/SKILL.md:128
- reference references/entry-contract.md — .claude/skills/work-operating-model/SKILL.md:129
- script scripts/validate_operating_model.py — .claude/skills/work-operating-model/SKILL.md:130

## Invoked by — required
- command .claude/commands/spec.md — .claude/commands/spec.md:136

## Concepts named — required, verbatim
- `Work Operating Model` — .claude/skills/work-operating-model/SKILL.md:8 — defined here
- `5-layer interview` — .claude/skills/work-operating-model/SKILL.md:4 — defined here
- `Rhythms` — .claude/skills/work-operating-model/SKILL.md:51 — defined here
- `Decisions` — .claude/skills/work-operating-model/SKILL.md:52 — defined here
- `Dependencies` — .claude/skills/work-operating-model/SKILL.md:53 — defined here
- `Institutional Knowledge` — .claude/skills/work-operating-model/SKILL.md:54 — defined here
- `Friction` — .claude/skills/work-operating-model/SKILL.md:55 — defined here
- `operating-model.json` — .claude/skills/work-operating-model/SKILL.md:74 — defined here
- `USER.md` — .claude/skills/work-operating-model/SKILL.md:74 — defined here
- `SOUL.md` — .claude/skills/work-operating-model/SKILL.md:74 — defined here
- `HEARTBEAT.md` — .claude/skills/work-operating-model/SKILL.md:74 — defined here
- `validate_operating_model.py` — .claude/skills/work-operating-model/SKILL.md:75 — used here

## Structure
- # Work Operating Model — .claude/skills/work-operating-model/SKILL.md:8
- ## Triggers — .claude/skills/work-operating-model/SKILL.md:12
- ## When to Use — .claude/skills/work-operating-model/SKILL.md:22
- ## Distinction From Adjacent Capabilities — .claude/skills/work-operating-model/SKILL.md:36
- ## The 5 Layers — .claude/skills/work-operating-model/SKILL.md:45
- ## Process — .claude/skills/work-operating-model/SKILL.md:59
- ### Phase 1: Open — .claude/skills/work-operating-model/SKILL.md:63
- ### Phase 2: Layer Pass — .claude/skills/work-operating-model/SKILL.md:67
- ### Phase 3: Close and Validate — .claude/skills/work-operating-model/SKILL.md:72
- ## Scripts — .claude/skills/work-operating-model/SKILL.md:77
- ## Resume Across Sessions — .claude/skills/work-operating-model/SKILL.md:85
- ## Output Contract (Summary) — .claude/skills/work-operating-model/SKILL.md:95
- ## Anti-Patterns — .claude/skills/work-operating-model/SKILL.md:106
- ## Verification Checklist — .claude/skills/work-operating-model/SKILL.md:116
- ## References — .claude/skills/work-operating-model/SKILL.md:126

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/work-operating-model/scripts/validate_operating_model.py`, language: Python, lines: 354
- documented invocation: `python3 .claude/skills/work-operating-model/scripts/validate_operating_model.py <path-to-json>` — .claude/skills/work-operating-model/SKILL.md:75
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - `python3 sources/rjm/.claude/skills/work-operating-model/scripts/validate_operating_model.py -` (valid document on stdin) -> stdout: `ok`, exit code: 0
  - `python3 sources/rjm/.claude/skills/work-operating-model/scripts/validate_operating_model.py nonexistent_file.json` -> stderr: `error: file not found: nonexistent_file.json`, exit code: 2
- documented exit codes (verbatim) vs. actual exit paths in code:
  - Documented: `0 ok, 1 schema failure, 2 invalid usage` — .claude/skills/work-operating-model/SKILL.md:81
  - Actual exit paths in code:
    - Line 331: `return 2` (FileNotFoundError) — .claude/skills/work-operating-model/scripts/validate_operating_model.py:331
    - Line 334: `return 2` (PermissionError / CWE-22 path containment) — .claude/skills/work-operating-model/scripts/validate_operating_model.py:334
    - Line 337: `return 1` (json.JSONDecodeError) — .claude/skills/work-operating-model/scripts/validate_operating_model.py:337
    - Line 340: `return 2` (OSError) — .claude/skills/work-operating-model/scripts/validate_operating_model.py:340
    - Line 346: `return 1` (validation errors) — .claude/skills/work-operating-model/scripts/validate_operating_model.py:346
    - Line 349: `return 0` (validation clean) — .claude/skills/work-operating-model/scripts/validate_operating_model.py:349
    - Line 353: `sys.exit(main())` — .claude/skills/work-operating-model/scripts/validate_operating_model.py:353
  - Documented exit codes match actual code exits exactly.
- for validators/gates: can exit non-zero (exits 1 on schema violation, exits 2 on bad args/missing file); no operating-model JSON files in repository tree to fail on.
- does output match documentation: yes (`ok` on valid document, line-delimited error list on invalid document, error messages on stderr for invalid usage).

## Defects — required
none

## Observations
Provides explicit boundary guidance distinguishing this capability from adjacent roles: use `analyst` for code/repo state, `explainer` for reader narratives, and `retrospective` for bounded past periods. The resume protocol intelligently reconstructs progress by unioning `completed_layers` and `skipped_layers` into a resolved set.

## Context cost
7594 bytes (this file) + 3983 bytes (references/entry-contract.md) + 4536 bytes (references/layer-questions.md) + 12308 bytes (scripts/validate_operating_model.py) = 28421 bytes (approx. 7100 tokens).
