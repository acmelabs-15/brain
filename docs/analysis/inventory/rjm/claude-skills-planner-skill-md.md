---
package: rjm
path: .claude/skills/planner/SKILL.md
type: skill
bytes: 10562
unit: inv-rjm-136
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/planner/SKILL.md, sha256: 37e67b69f3823d49f1c582e8630b9e55a7e88dc7159edca5c8a0c3c7463fa97e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/planner/SKILL.md

## Purpose — required, verbatim
> "Two workflows for complex tasks: 1. **Planning workflow** (planner.py): Create and review implementation plans 2. **Execution workflow** (executor.py): Execute approved plans through delegation" — .claude/skills/planner/SKILL.md:13-16

## Design intent — required
Provides a dual-workflow operational framework for managing high-complexity engineering tasks in autonomous agent environments: an interactive planning workflow driven by `planner.py` that enforces incremental reflection, constraint discovery, explicit decision logs, and pre-execution review gates; and an execution workflow driven by `executor.py` that sequences milestone execution, code reconciliation, automated tests, and post-implementation quality review. Without it, agents tackling complex multi-step problems would rush into unconstrained, monolithic implementations, suffer from context contamination across planning and execution phases, skip critical architectural rationales, and produce unverified changes without independent technical writer and quality review checkpoints.

## Phase — required
rjm:plan

## Inputs — required
- Problem statements, feature design prompts, or refactoring goals from user trigger phrases (`plan this feature`, `create implementation plan`, `review the plan and pick up next item`, `execute the plan at plans/X.md`, `resume execution`).
- Plan file path (user-specified or prompted before step 1).
- Existing codebase context: configuration files, manifests, lock files, source files, and architectural patterns.
- Existing plan markdown file (for execution workflow, e.g. `plans/X.md`).
- Output and verdicts from review agents: Technical Writer annotations and Quality Reviewer verdicts (`PASS`, `PASS_WITH_CONCERNS`, `NEEDS_CHANGES`).

## Outputs — required
- Implementation plan markdown document written to disk following `resources/plan-format.md` structure (with Overview, Planning Context, Decision Log, Rejected Alternatives, Constraints & Assumptions, Known Risks, Invisible Knowledge, Milestones, and Milestone Dependencies).
- Plan review annotations and risk validations.
- Milestone execution side effects: implemented source code, unit and integration test executions, bug fixes, documentation updates (`CLAUDE.md`, `README.md`), and retrospective reports.

## Invokes — required
- script scripts/planner.py — .claude/skills/planner/SKILL.md:57
- script scripts/executor.py — .claude/skills/planner/SKILL.md:58
- agent @agent-technical-writer — .claude/skills/planner/SKILL.md:113
- agent @agent-quality-reviewer — .claude/skills/planner/SKILL.md:114
- skill resources/plan-format.md — .claude/skills/planner/SKILL.md:274
- skill resources/diff-format.md — .claude/skills/planner/SKILL.md:275
- skill resources/temporal-contamination.md — .claude/skills/planner/SKILL.md:276
- skill resources/default-conventions.md — .claude/skills/planner/SKILL.md:277
- reference references/strategy-ooda-loop.md — .claude/skills/planner/SKILL.md:288
- reference references/design-pit-of-success.md — .claude/skills/planner/SKILL.md:289
- reference references/mental-models-galls-law.md — .claude/skills/planner/SKILL.md:290
- reference .claude/skills/analyze/references/engineering-complexity-tiers.md — .claude/skills/planner/SKILL.md:291
- reference references/explainers-and-intents.md — .claude/skills/planner/SKILL.md:292
- reference references/agent-architecture-patterns.md — .claude/skills/planner/SKILL.md:293
- reference references/hybrid-memory-architecture.md — .claude/skills/planner/SKILL.md:294

## Invoked by — required
- skill buy-vs-build-framework — .claude/skills/buy-vs-build-framework/SKILL.md:43
- skill code-qualities-assessment — .claude/skills/code-qualities-assessment/SKILL.md:407

## Concepts named — required, verbatim
- `planner` — .claude/skills/planner/SKILL.md:2 — defined here
- `Planning workflow` — .claude/skills/planner/SKILL.md:15 — defined here
- `Execution workflow` — .claude/skills/planner/SKILL.md:16 — defined here
- `PLANNING PHASE` — .claude/skills/planner/SKILL.md:106 — defined here
- `REVIEW PHASE` — .claude/skills/planner/SKILL.md:112 — defined here
- `plan-annotation` — .claude/skills/planner/SKILL.md:113 — used here
- `plan-review` — .claude/skills/planner/SKILL.md:114 — used here
- `PASS` — .claude/skills/planner/SKILL.md:90 — used here
- `PASS_WITH_CONCERNS` — .claude/skills/planner/SKILL.md:90 — used here
- `NEEDS_CHANGES` — .claude/skills/planner/SKILL.md:196 — used here
- `Reconciliation` — .claude/skills/planner/SKILL.md:208 — defined here
- `Milestone Execution` — .claude/skills/planner/SKILL.md:211 — defined here
- `Post-Implementation QR` — .claude/skills/planner/SKILL.md:214 — defined here
- `Issue Resolution` — .claude/skills/planner/SKILL.md:217 — defined here
- `Documentation` — .claude/skills/planner/SKILL.md:221 — defined here
- `Retrospective` — .claude/skills/planner/SKILL.md:224 — defined here
- `OODA stages` — .claude/skills/planner/SKILL.md:288 — used here
- `design-pit-of-success` — .claude/skills/planner/SKILL.md:289 — used here
- `mental-models-galls-law` — .claude/skills/planner/SKILL.md:290 — used here
- `engineering-complexity-tiers` — .claude/skills/planner/SKILL.md:291 — used here
- `explainers` — .claude/skills/planner/SKILL.md:292 — used here
- `intents` — .claude/skills/planner/SKILL.md:292 — used here
- `Skill budget rule` — .claude/skills/planner/SKILL.md:293 — used here
- `3-file planning pattern` — .claude/skills/planner/SKILL.md:293 — used here
- `milestone decomposition` — .claude/skills/planner/SKILL.md:293 — used here
- `Hybrid retrieval cascade` — .claude/skills/planner/SKILL.md:294 — used here
- `memory decay tiers` — .claude/skills/planner/SKILL.md:294 — used here
- `decision extraction` — .claude/skills/planner/SKILL.md:294 — used here
- `plan-format` — .claude/skills/planner/SKILL.md:274 — used here
- `diff-format` — .claude/skills/planner/SKILL.md:275 — used here
- `temporal-contamination` — .claude/skills/planner/SKILL.md:276 — used here
- `default-conventions` — .claude/skills/planner/SKILL.md:277 — used here

## Structure
- # Planner Skill — .claude/skills/planner/SKILL.md:9
- ## Purpose — .claude/skills/planner/SKILL.md:11
- ## Invocation Routing — .claude/skills/planner/SKILL.md:18
- ## When to Use — .claude/skills/planner/SKILL.md:34
- ## When to Skip — .claude/skills/planner/SKILL.md:43
- ## Scripts — .claude/skills/planner/SKILL.md:53
- ## Triggers — .claude/skills/planner/SKILL.md:60
- ## Anti-Patterns — .claude/skills/planner/SKILL.md:72
- ## Verification — .claude/skills/planner/SKILL.md:84
- ## Process — .claude/skills/planner/SKILL.md:101
- ### Planning Overview — .claude/skills/planner/SKILL.md:103
- ### Planning Preconditions — .claude/skills/planner/SKILL.md:119
- ### Planning Invocation — .claude/skills/planner/SKILL.md:126
- ### Planning Arguments — .claude/skills/planner/SKILL.md:135
- ### Planning Steps — .claude/skills/planner/SKILL.md:144
- ## Phase Transition: Planning to Review — .claude/skills/planner/SKILL.md:153
- ## Review Phase — .claude/skills/planner/SKILL.md:173
- ### Review Step 1: Technical Writer — .claude/skills/planner/SKILL.md:185
- ### Review Step 2: Quality Reviewer — .claude/skills/planner/SKILL.md:189
- ### After Review — .claude/skills/planner/SKILL.md:193
- ## Execution Workflow (executor.py) — .claude/skills/planner/SKILL.md:200
- ### Execution Overview — .claude/skills/planner/SKILL.md:202
- ### Execution Preconditions — .claude/skills/planner/SKILL.md:227
- ### Execution Invocation — .claude/skills/planner/SKILL.md:234
- ### Execution Arguments — .claude/skills/planner/SKILL.md:244
- ## Execution Steps — .claude/skills/planner/SKILL.md:253
- ## Resources — .claude/skills/planner/SKILL.md:270
- ## References — .claude/skills/planner/SKILL.md:284
- ## Quick Reference — .claude/skills/planner/SKILL.md:298

## Scripts — required if type is script or the skill ships scripts
The skill ships two Python scripts:

### Script 1: `scripts/planner.py`
- path, language, lines: `scripts/planner.py`, Python 3, 572 lines
- documented invocation:
  "python3 scripts/planner.py --step-number 1 --total-steps 4 --thoughts \"...\"" — .claude/skills/planner/SKILL.md:304
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/planner/scripts/planner.py --step-number 1 --total-steps 4 --thoughts "Design auth system"`
- abridged stdout:
```
================================================================================
PLANNER - PLANNING PHASE - Step 1 of 4
================================================================================

STATUS: in_progress

YOUR THOUGHTS:
Design auth system

REQUIRED ACTIONS:
  You are an expert architect. Proceed with confidence.

  PRECONDITION: Confirm plan file path before proceeding.

  <step_1_checklist>
  Complete ALL items before invoking step 2:
...
NEXT:
Invoke step 2 with your context analysis and approach options.
================================================================================
```
- actual exit code: 0
- documented exit codes: none documented in `SKILL.md`
- actual exit paths in code:
  - `sys.exit(1)` at line 530 if `step_number < 1` or `total_steps < 1`
  - exit code 2 via argparse if required arguments are missing or invalid
  - exit code 0 on successful completion (line 571)
- for validators/gates: not a test gate, but enforces procedural gates across planning and review steps; exits 1 on invalid step input
- does output match what documentation claims: yes, formats step guidance, checklists, XML action blocks, and plan template upon completion

### Script 2: `scripts/executor.py`
- path, language, lines: `scripts/executor.py`, Python 3, 584 lines
- documented invocation:
  "python3 scripts/executor.py" — .claude/skills/planner/SKILL.md:237
- executed: yes
- actual command run: `python3 sources/rjm/.claude/skills/planner/scripts/executor.py --help`
- abridged stdout:
```
usage: executor.py [-h] --plan-file PLAN_FILE --step-number STEP_NUMBER
                   --total-steps TOTAL_STEPS --thoughts THOUGHTS

Plan Executor - Execute approved plans through delegation
...
```
- actual exit code: 0
- documented exit codes: none documented in `SKILL.md`
- actual exit paths in code: exit 0 on `--help` or valid execution completion, exit 2 on argparse error, exit 1 on invalid step inputs
- for validators/gates: guides milestone execution sequence and checks test outcomes
- does output match what documentation claims: yes, exposes plan execution CLI options matching documentation

## Defects — required
- `missing-path` · .claude/skills/planner/SKILL.md:113 · references `@agent-technical-writer` which does not exist in `.claude/agents/`.
- `missing-path` · .claude/skills/planner/SKILL.md:114 · references `@agent-quality-reviewer` which does not exist in `.claude/agents/`.
- `doc-drift` · .claude/skills/planner/SKILL.md:187 · specifies Technical Writer delegation mode as `plan-annotation`, but `scripts/planner.py:412` instructs delegation with `<mode>plan-scrub</mode>`.
- `doc-drift` · .claude/skills/planner/SKILL.md:180 · documents review phase invocation with `--total-steps 2`, but `scripts/planner.py:464` instructs the user to invoke step 3 ("Invoke step 3 to complete review").
- `missing-path` · .claude/skills/planner/SKILL.md:284 · `references/DEVELOPMENT.md` exists on disk in `.claude/skills/planner/references/DEVELOPMENT.md` but is omitted from the References table.

## Observations
- Clear separation of concerns between human/agent collaborative planning (`planner.py`) and autonomous delegation during execution (`executor.py`).
- Enforces an anti-pattern rule: "Starting execution without /clear" causes context pollution, recommending a fresh context window between planning and execution.
- Emphasizes "timeless present" comment hygiene to prevent temporal contamination in code comments transcribed from planning documents.

## Context cost
- File size: 10,562 bytes (~2,640 tokens).
- Entire bundled skill (SKILL.md + 2 scripts + 4 resources + 7 references): ~98,000 bytes (~24,500 tokens).
