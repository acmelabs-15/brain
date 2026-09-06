---
package: rjm
path: .claude/skills/pre-mortem/SKILL.md
type: skill
bytes: 11068
unit: inv-rjm-137
in_scope_via: .claude/commands/build.md
aliases: []
memo_inputs:
  - {path: .claude/skills/pre-mortem/SKILL.md, sha256: 34343eb627115cf687aac037469c62356339145bdfbee3063e94dedfe952ef97}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/pre-mortem/SKILL.md

## Purpose — required, verbatim
> "When this skill activates, you become a pre-mortem facilitator. Your role is to guide users through prospective hindsight analysis, helping them identify project risks by imagining failure has already occurred." — .claude/skills/pre-mortem/SKILL.md:13

## Design intent — required
Guides teams and individuals through Gary Klein's prospective hindsight technique to uncover hidden failure modes before project commitment or code implementation. By announcing that the project has already failed spectacularly and working backward in five structured phases (Brief, Failure Announcement, Independent Analysis, Round-Robin Collection, Review and Mitigate), it circumvents optimism bias, provides psychological safety for dissenting concerns, and enforces structured risk inventory deliverables with a mandatory Prevention/Detection/Response mitigation triad for critical and high risks.

## Phase — required
rjm:build

## Inputs — required
Project brief parameters (project name, objective, timeline, key milestones, team composition, success criteria), participant-brainstormed failure reasons, likelihood scores (1-5), impact scores (1-5), and ownership assignments.

## Outputs — required
A populated Pre-Mortem Risk Inventory document structured according to the output template, containing project context, risk summary table, categorized Critical/High/Medium/Low risks with numerical scoring and mitigation strategies, action items table, and review schedule.

## Invokes — required
- script .claude/skills/pre-mortem/scripts/pre-mortem.py — .claude/skills/pre-mortem/SKILL.md:250
- reference references/mental-models-galls-law.md — .claude/skills/pre-mortem/SKILL.md:326
- reference references/strategy-ooda-loop.md — .claude/skills/pre-mortem/SKILL.md:327

## Invoked by — required
- command build — .claude/commands/build.md:36
- command spec — .claude/commands/spec.md:165
- command plan — .claude/commands/plan.md:24
- reference decision-rigor.md — .claude/skills/review/references/decision-rigor.md:52

## Concepts named — required, verbatim
- `pre-mortem` — .claude/skills/pre-mortem/SKILL.md:2 — defined here
- `prospective hindsight` — .claude/skills/pre-mortem/SKILL.md:13 — defined here
- `Phase 1: Project Brief` — .claude/skills/pre-mortem/SKILL.md:66 — defined here
- `Phase 2: Failure Announcement` — .claude/skills/pre-mortem/SKILL.md:84 — defined here
- `Phase 3: Independent Analysis` — .claude/skills/pre-mortem/SKILL.md:94 — defined here
- `Phase 4: Round-Robin Collection` — .claude/skills/pre-mortem/SKILL.md:114 — defined here
- `Phase 5: Review and Mitigate` — .claude/skills/pre-mortem/SKILL.md:140 — defined here
- `Pre-Mortem Risk Inventory` — .claude/skills/pre-mortem/SKILL.md:181 — defined here
- `threat-modeling` — .claude/skills/pre-mortem/SKILL.md:44 — used here
- `decision-critic` — .claude/skills/pre-mortem/SKILL.md:49 — used here
- `milestone-planner` — .claude/skills/pre-mortem/SKILL.md:319 — used here
- `architect` — .claude/skills/pre-mortem/SKILL.md:320 — used here

## Structure
- # Pre-Mortem Risk Identification
- ## Triggers
- ## Quick Reference
- ## When to Use
- ## Why Pre-Mortem Works
- ## Process
- ### Phase 1: Project Brief (2-3 minutes)
- ### Phase 2: Failure Announcement (30 seconds)
- ### Phase 3: Independent Analysis (3-5 minutes)
- ### Phase 4: Round-Robin Collection (5-10 minutes)
- ### Phase 5: Review and Mitigate (10-15 minutes)
- ## Output Template
- ## Scripts
- ### pre-mortem.py
- ## Anti-Patterns
- ## Verification
- ## Facilitation Tips
- ## Extension Points
- ## Related Skills
- ## References
- ### Academic Sources

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/pre-mortem/scripts/pre-mortem.py`, language: Python, lines: 332
- documented invocation: "python3 .claude/skills/pre-mortem/scripts/pre-mortem.py" — .claude/skills/pre-mortem/SKILL.md:250
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - `python3 sources/rjm/.claude/skills/pre-mortem/scripts/pre-mortem.py --inventory-path nonexistent.md` → stdout: `Error: File not found: nonexistent.md` → exit 1
  - `python3 sources/rjm/.claude/skills/pre-mortem/scripts/pre-mortem.py --inventory-path sources/rjm/.claude/skills/pre-mortem/templates/risk-inventory.md --validate` → stdout: `PRE-MORTEM RISK INVENTORY VALIDATION ... Status: INVALID ... Errors (2): [ERROR] R1 has invalid likelihood: 0 ...` → exit 10
  - `python3 sources/rjm/.claude/skills/pre-mortem/scripts/pre-mortem.py --inventory-path <(cat << 'EOF' ... EOF) --validate` → stdout: `PRE-MORTEM RISK INVENTORY VALIDATION ... Status: VALID ... Total Risks: 4 ...` → exit 0
- documented exit codes vs. actual exit paths in code:
  - Documented in SKILL.md:257-259: `0: Valid inventory with all required fields`, `1: Invalid arguments`, `10: Validation failed (missing required sections)`
  - Actual exit paths in code: line 279 (`return 1`), line 292 (`return 1`), line 298 (`return 1`), line 306 (`return 1`), line 326 (`return 10`), line 327 (`return 0`), line 331 (`sys.exit(main())`). Note: argparse exits with code 2 for missing required options or unrecognized flags.
- for validators/gates: can exit non-zero (exit 1, exit 2, exit 10). Exits 10 on the source repo's unpopulated template `sources/rjm/.claude/skills/pre-mortem/templates/risk-inventory.md`.
- does the output match what the documentation claims: yes, formats validation header, status, errors, warnings, and risk statistics as documented.

## Defects — required
- missing-path · .claude/skills/pre-mortem/SKILL.md:319 · Related Skills table lists milestone-planner as a skill, but it exists only as an agent at .claude/agents/milestone-planner.md.
- missing-path · .claude/skills/pre-mortem/SKILL.md:320 · Related Skills table lists architect as a skill, but it exists only as an agent at .claude/agents/architect.md.
- exit-code-mismatch · .claude/skills/pre-mortem/SKILL.md:258 · States exit code 1 is for invalid arguments, but argparse returns exit code 2 when required argument --inventory-path is omitted or invalid options are passed.

## Observations
Explicitly notes that `pre-mortem.py` exit 0 is necessary but not sufficient because the script permits single `**Prevention:**` lines, establishing a manual verification gate requiring the full Prevention/Detection/Response triad for Critical/High risks.

## Context cost
11068 bytes + references (2114 + 2282) + script (9931) + template (2963) = 28358 bytes, ~7100 tokens.
