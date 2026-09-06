---
package: rjm
path: .claude/skills/steering-matcher/SKILL.md
type: skill
bytes: 4840
unit: inv-rjm-174
in_scope_via: .claude/skills/context-gather/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/steering-matcher/SKILL.md, sha256: 267193c275adf53f2f2401fd3018a07c37d19c20259acb2c6f40224b68b6dcf0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# .claude/skills/steering-matcher/SKILL.md

## Purpose — required, verbatim
> "This skill helps orchestrator determine which steering files to inject into agent context based on the files being modified." — .claude/skills/steering-matcher/SKILL.md:23

## Design intent — required
Specifies the orchestrator preflight skill for matching modified files against repository steering rules to inject domain-specific guidance (e.g. prompt rules, documentation constraints) while omitting irrelevant steering documents, achieving an estimated 30%+ token savings. Without it, agent workflows would either suffer context bloat by injecting the entire `.agents/steering/` directory or require manual file-by-file steering selection.

## Phase — required
none

## Inputs — required
- Trigger phrases: `match steering for these files`, `which steering applies to this task`, `inject steering context` — .claude/skills/steering-matcher/SKILL.md:17-19
- List of file paths to be modified or analyzed during a task — .claude/skills/steering-matcher/SKILL.md:50, 71, 113
- Steering directory path (default: `.agents/steering`) containing markdown steering files with `applyTo` and `excludeFrom` glob frontmatter — .claude/skills/steering-matcher/SKILL.md:35, 52

## Outputs — required
- Prioritized list of applicable steering guidance (JSON array of objects with `name`, `path`, `apply_to`, `priority` sorted descending) for injection into agent context — .claude/skills/steering-matcher/SKILL.md:54, 75
- Token-efficient context injection for downstream agent prompts — .claude/skills/steering-matcher/SKILL.md:27, 63-65

## Invokes — required
- script .claude/skills/steering-matcher/scripts/get_applicable_steering.py — .claude/skills/steering-matcher/SKILL.md:46
- agent orchestrator — .claude/skills/steering-matcher/SKILL.md:123
- doc .agents/steering/README.md — .claude/skills/steering-matcher/SKILL.md:120
- doc .agents/archive/planning/enhancement-PROJECT-PLAN.md — .claude/skills/steering-matcher/SKILL.md:121

## Invoked by — required
- skill context-gather — .claude/skills/context-gather/SKILL.md:136
- doc docs/skill-reference.md — docs/skill-reference.md:208

## Concepts named — required, verbatim
- `steering-matcher` — .claude/skills/steering-matcher/SKILL.md:2 — defined here
- `haiku` — .claude/skills/steering-matcher/SKILL.md:7 — used here
- `ADR-080` — .claude/skills/steering-matcher/SKILL.md:8 — used here
- `get_applicable_steering.py` — .claude/skills/steering-matcher/SKILL.md:17 — used here
- `applyTo` — .claude/skills/steering-matcher/SKILL.md:35 — used here
- `pytest` — .claude/skills/steering-matcher/SKILL.md:84 — used here

## Structure
- # Steering File Matcher Skill — .claude/skills/steering-matcher/SKILL.md:11
- ## Triggers — .claude/skills/steering-matcher/SKILL.md:13
- ## Purpose — .claude/skills/steering-matcher/SKILL.md:21
- ## When to Use — .claude/skills/steering-matcher/SKILL.md:29
- ## Quick Usage — .claude/skills/steering-matcher/SKILL.md:42
- ### Using get_applicable_steering.py Script — .claude/skills/steering-matcher/SKILL.md:44
- ## Process — .claude/skills/steering-matcher/SKILL.md:57
- ### Standard Orchestrator Workflow — .claude/skills/steering-matcher/SKILL.md:66
- ## Implementation — .claude/skills/steering-matcher/SKILL.md:78
- ## Testing — .claude/skills/steering-matcher/SKILL.md:82
- ## Anti-Patterns — .claude/skills/steering-matcher/SKILL.md:90
- ## Verification — .claude/skills/steering-matcher/SKILL.md:98
- ## Scripts — .claude/skills/steering-matcher/SKILL.md:106
- ### get_applicable_steering.py — .claude/skills/steering-matcher/SKILL.md:108
- ## Related — .claude/skills/steering-matcher/SKILL.md:116

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/steering-matcher/scripts/get_applicable_steering.py`, language: Python, lines: 175
- documented invocation: `python3 .claude/skills/steering-matcher/scripts/get_applicable_steering.py \` — .claude/skills/steering-matcher/SKILL.md:50
- **executed:** yes
- actual command run: `python3 .claude/skills/steering-matcher/scripts/get_applicable_steering.py --files "src/claude/analyst.md" ".agents/security/TM-001-auth-flow.md" --steering-path ".agents/steering"`, abridged stdout: `[]`, **actual exit code:** 0
- documented exit codes: none explicitly documented in SKILL.md vs actual exit paths in code: `return 0` at .claude/skills/steering-matcher/scripts/get_applicable_steering.py:170
- for validators/gates: not a validator/gate
- does the output match what the documentation claims: no, script returns `[]` due to broken regex conversion bug in `scripts/get_applicable_steering.py`

## Defects — required
- missing-path · .claude/skills/steering-matcher/SKILL.md:87 · test path `.claude/skills/steering-matcher/tests/` does not exist; unit tests are located at `tests/skills/steering-matcher/`.
- missing-path · .claude/skills/steering-matcher/SKILL.md:51 · example file path `.agents/security/TM-001-auth-flow.md` does not exist in the repository.
- missing-path · .claude/skills/steering-matcher/SKILL.md:72 · example file path `.agents/security/SR-001-oauth-review.md` does not exist in the repository.

## Observations
- Uses model tier `haiku` for cost optimization per ADR-080 rule 3.
- Vendor portability comment at line 125 documents issue #2050 regarding broken cross-repository links when vendored.

## Context cost
4840 bytes (plus 5494 bytes for `scripts/get_applicable_steering.py`), approximately 2580 tokens total.
