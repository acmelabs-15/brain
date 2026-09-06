---
package: rjm
path: .claude/skills/planner/scripts/planner.py
type: script
bytes: 26519
unit: inv-rjm-136
in_scope_via: .claude/skills/planner/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/planner/scripts/planner.py, sha256: 7c8c5cbbaace2e7111150238c7aac48963f1395180196f85ca965bb7ede4dfaf}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/planner/scripts/planner.py

## Purpose — required, verbatim
> "Interactive Sequential Planner - Two-phase planning workflow" — .claude/skills/planner/scripts/planner.py:3

## Design intent — required
Implements a stateful CLI-guided planning and review coordinator that enforces structured, step-by-step reflection pauses during AI agent planning. It guides the planning agent through five discrete cognitive stages: context discovery and constraint analysis (step 1), approach evaluation and decision classification (step 2), risk identification with behavioral code anchors and uncertainty flags (step 3), and plan refinement or backtracking (steps 4+), followed by a mandatory review phase that delegates to technical writer (plan scrub) and quality review agents before approving the plan. Without this script, autonomous agents planning multi-step tasks tend to skip constraint discovery, omit reasoning chains for architectural decisions, introduce temporally contaminated code comments, and proceed directly to execution without independent adversarial verification.

## Phase — required
rjm:plan

## Inputs — required
- CLI arguments parsed via `argparse`:
  - `--phase`: Workflow phase, either `planning` (default) or `review` (`.claude/skills/planner/scripts/planner.py:519-521`).
  - `--step-number`: Integer current step, must be >= 1 (`.claude/skills/planner/scripts/planner.py:522`).
  - `--total-steps`: Integer estimated total steps, must be >= 1 (`.claude/skills/planner/scripts/planner.py:523`).
  - `--thoughts`: String containing the agent's current thinking, findings, or progress (`.claude/skills/planner/scripts/planner.py:524`).
- Plan format template file read from disk: `../resources/plan-format.md` via `get_plan_format()` (`.claude/skills/planner/scripts/planner.py:24-25`).

## Outputs — required
- Formatted text output to stdout:
  - Header banner: `PLANNER - [PLANNING|REVIEW] PHASE - Step X of Y` (`.claude/skills/planner/scripts/planner.py:543`).
  - Status indicator: `STATUS: phase_complete` or `STATUS: in_progress` (`.claude/skills/planner/scripts/planner.py:546`).
  - Reflected agent thoughts (`.claude/skills/planner/scripts/planner.py:549`).
  - Step guidance with checklists and structured XML-like blocks (`<step_1_checklist>`, `<step_2_evaluate_first>`, `<step_2_decision_classification>`, `<step_3_risks>`, `<review_step_1_delegate_tw>`, `<review_step_2_delegate_qr>`, `<review_complete_verification>`).
  - Embedded plan template (`resources/plan-format.md`) and phase transition banner when planning phase completes (`.claude/skills/planner/scripts/planner.py:148-152`).
  - Next step instructions and suggested CLI command for the subsequent invocation (`.claude/skills/planner/scripts/planner.py:565`).

## Invokes — required
- template plan-format.md — .claude/skills/planner/scripts/planner.py:24
- agent @agent-technical-writer — .claude/skills/planner/scripts/planner.py:161
- agent @agent-quality-reviewer — .claude/skills/planner/scripts/planner.py:162
- command /plan-execution — .claude/skills/planner/scripts/planner.py:163

## Invoked by — required
- skill .claude/skills/planner/SKILL.md — .claude/skills/planner/SKILL.md:57

## Concepts named — required, verbatim
- `Interactive Sequential Planner` — .claude/skills/planner/scripts/planner.py:3 — defined here
- `PLANNING PHASE` — .claude/skills/planner/scripts/planner.py:5 — defined here
- `REVIEW PHASE` — .claude/skills/planner/scripts/planner.py:6 — defined here
- `planning_context_verification` — .claude/skills/planner/scripts/planner.py:38 — defined here
- `Decision Log` — .claude/skills/planner/scripts/planner.py:42 — defined here
- `Micro-decisions` — .claude/skills/planner/scripts/planner.py:46 — defined here
- `Rejected Alternatives` — .claude/skills/planner/scripts/planner.py:56 — defined here
- `Known Risks` — .claude/skills/planner/scripts/planner.py:60 — defined here
- `invisible_knowledge_verification` — .claude/skills/planner/scripts/planner.py:68 — defined here
- `milestone_verification` — .claude/skills/planner/scripts/planner.py:78 — defined here
- `documentation_milestone_verification` — .claude/skills/planner/scripts/planner.py:101 — defined here
- `comment_hygiene_verification` — .claude/skills/planner/scripts/planner.py:108 — defined here
- `TIMELESS PRESENT` — .claude/skills/planner/scripts/planner.py:110 — defined here
- `decision_audit_verification` — .claude/skills/planner/scripts/planner.py:125 — defined here
- `step_1_checklist` — .claude/skills/planner/scripts/planner.py:174 — defined here
- `CONSTRAINT DISCOVERY` — .claude/skills/planner/scripts/planner.py:189 — defined here
- `step_2_evaluate_first` — .claude/skills/planner/scripts/planner.py:208 — defined here
- `step_2_decide` — .claude/skills/planner/scripts/planner.py:216 — defined here
- `step_2_decision_classification` — .claude/skills/planner/scripts/planner.py:226 — defined here
- `step_2_rejected` — .claude/skills/planner/scripts/planner.py:244 — defined here
- `step_2_architecture` — .claude/skills/planner/scripts/planner.py:249 — defined here
- `step_2_milestones` — .claude/skills/planner/scripts/planner.py:256 — defined here
- `step_3_risks` — .claude/skills/planner/scripts/planner.py:272 — defined here
- `ANCHOR REQUIREMENT` — .claude/skills/planner/scripts/planner.py:278 — defined here
- `step_3_uncertainty_flags` — .claude/skills/planner/scripts/planner.py:298 — defined here
- `step_3_refine_milestones` — .claude/skills/planner/scripts/planner.py:310 — defined here
- `step_3_file_classification` — .claude/skills/planner/scripts/planner.py:328 — defined here
- `step_3_validate` — .claude/skills/planner/scripts/planner.py:347 — defined here
- `backtrack_check` — .claude/skills/planner/scripts/planner.py:361 — defined here
- `gap_analysis` — .claude/skills/planner/scripts/planner.py:370 — defined here
- `developer_walkthrough` — .claude/skills/planner/scripts/planner.py:384 — defined here
- `review_step_1_delegate_tw` — .claude/skills/planner/scripts/planner.py:407 — defined here
- `plan-scrub` — .claude/skills/planner/scripts/planner.py:412 — defined here
- `review_step_2_delegate_qr` — .claude/skills/planner/scripts/planner.py:437 — defined here
- `plan-review` — .claude/skills/planner/scripts/planner.py:442 — defined here
- `RULE 0` — .claude/skills/planner/scripts/planner.py:447 — used here
- `RULE 1` — .claude/skills/planner/scripts/planner.py:448 — used here
- `PASS` — .claude/skills/planner/scripts/planner.py:455 — used here
- `PASS_WITH_CONCERNS` — .claude/skills/planner/scripts/planner.py:455 — used here
- `NEEDS_CHANGES` — .claude/skills/planner/scripts/planner.py:455 — used here
- `review_complete_verification` — .claude/skills/planner/scripts/planner.py:474 — defined here
- `PLAN APPROVED` — .claude/skills/planner/scripts/planner.py:484 — defined here

## Structure
- Module Docstring (lines 2-15)
- get_plan_format() (lines 22-25)
- get_planning_step_guidance(step_number, total_steps) (lines 28-396)
  - is_complete final verification (lines 33-165)
  - step 1 context, scope, approaches, constraints (lines 167-203)
  - step 2 evaluate, decide, classification, architecture, milestones (lines 205-267)
  - step 3 risks, uncertainty flags, file classification, validate (lines 269-355)
  - steps 4+ backtrack check, gap analysis, walkthrough (lines 357-396)
- get_review_step_guidance(step_number, total_steps) (lines 399-494)
  - step 1 delegate to @agent-technical-writer (lines 404-433)
  - step 2 delegate to @agent-quality-reviewer (lines 434-469)
  - is_complete verification (lines 471-489)
  - fallback (lines 491-494)
- main() (lines 497-568)
  - argument parsing (lines 498-526)
  - validation and exit 1 (lines 528-530)
  - guidance retrieval and header output (lines 532-568)
- __main__ execution (lines 570-571)

## Scripts — required if type is script or the skill ships scripts
- path, language, lines: `.claude/skills/planner/scripts/planner.py`, Python 3, 572 lines
- documented invocation:
  "python3 planner.py --step-number 1 --total-steps 4 --thoughts \"Design auth system\"" — .claude/skills/planner/scripts/planner.py:10
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

  CONTEXT (understand before proposing):
    - [ ] What code/systems does this touch?
...
NEXT:
Invoke step 2 with your context analysis and approach options.
================================================================================
```
- actual exit code: 0
- documented exit codes: none explicitly documented in docstring or help text
- actual exit paths in code:
  - `sys.exit(1)` — .claude/skills/planner/scripts/planner.py:530 (if `step_number < 1` or `total_steps < 1`)
  - exit 2 via argparse on missing required arguments or invalid choices
  - implicit exit 0 on normal completion (line 571)
- for validators/gates: not a code validator or test gate, but acts as a procedural gate for planning and review workflows; exits non-zero (code 1) on invalid step parameters
- does output match what documentation claims: yes, formats step guidance, checklists, XML action blocks, and injects plan format template upon phase completion

## Defects — required
- `missing-path` · .claude/skills/planner/scripts/planner.py:161 · references `@agent-technical-writer` which does not exist in `.claude/agents/`.
- `missing-path` · .claude/skills/planner/scripts/planner.py:162 · references `@agent-quality-reviewer` which does not exist in `.claude/agents/`.
- `missing-path` · .claude/skills/planner/scripts/planner.py:163 · references `/plan-execution` command which does not exist in `.claude/commands/`.
- `doc-drift` · .claude/skills/planner/scripts/planner.py:13 · docstring documents `python3 planner.py --phase review --step-number 1 --total-steps 2`, but line 464 instructs the user to invoke step 3 ("Invoke step 3 to complete review"), meaning review requires 3 steps rather than 2.
- `internal-contradiction` · .claude/skills/planner/scripts/planner.py:540 · `is_complete` is computed as `step_number >= total_steps`, which for review phase with `total-steps 2` evaluates to true at step 2, printing `STATUS: phase_complete` and `FINAL CHECKLIST:` header even though step 2 guidance delegates to QR instead of verifying completion.

## Observations
- Good pattern: structured XML tags (`<planning_context_verification>`, `<step_2_decision_classification>`, `<step_3_risks>`, etc.) provide unambiguous boundaries for AI agents executing or reviewing plans.
- Strict constraint discovery requirement in step 1 forces the agent to locate build files, manifests, and lock files to extract version constraints before proposing solutions.
- Step 2 requires explicit decision backing classification (`user-specified`, `doc-derived`, `default-derived`, or `assumption`), preventing unbacked assumptions from propagating without user clarification.

## Context cost
- Script size: 26,519 bytes (~6,630 tokens).
- Loads `resources/plan-format.md` (6,246 bytes) at phase completion, bringing peak context to ~32,765 bytes (~8,200 tokens).
