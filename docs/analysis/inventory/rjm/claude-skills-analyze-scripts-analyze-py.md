---
package: rjm
path: .claude/skills/analyze/scripts/analyze.py
type: script
bytes: 26407
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
memo_inputs:
  - {path: .claude/skills/analyze/scripts/analyze.py, sha256: ea1822893c16811b9955a98e2059edf0eb46073e93a8f2c3bd1f2f3abc255a4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/analyze/scripts/analyze.py

## Purpose — required, verbatim
> "Analyze Skill - Step-by-step codebase analysis with exploration and deep investigation." — .claude/skills/analyze/scripts/analyze.py:3

## Design intent — required
Implements the core state machine and prompt generation engine for the multi-step `analyze` skill. It enforces a disciplined six-phase investigation workflow (Exploration, Focus Selection, Investigation Planning, Deep Analysis, Verification, and Synthesis), validates step constraints (mandating at least 6 steps and proper ordering), forces accumulation of findings and hypotheses in `--thoughts`, and gates final recommendations behind a formal completeness and gap audit.

## Phase — required
cross-phase

## Inputs — required
Command-line arguments:
- `--step-number`: int (required, current step number, >= 1)
- `--total-steps`: int (required, estimated total steps, >= 6 and >= step-number)
- `--thoughts`: str (required, accumulated state, hypotheses, and evidence from prior steps)

## Outputs — required
Formatted text output to stdout presenting phase banner, status (`in_progress`, `verification_required`, or `analysis_complete`), accumulated state preview, phase-specific `REQUIRED ACTIONS`, and `NEXT` instructions for the agent.

## Invokes — required
none

## Invoked by — required
- script scripts/analyze.py — .claude/skills/analyze/SKILL.md:80
- script scripts/analyze.py — .claude/skills/analyze/references/DEVELOPMENT.md:12

## Concepts named — required, verbatim
- `EXPLORATION` — .claude/skills/analyze/scripts/analyze.py:6 — defined here
- `FOCUS SELECTION` — .claude/skills/analyze/scripts/analyze.py:7 — defined here
- `INVESTIGATION PLANNING` — .claude/skills/analyze/scripts/analyze.py:8 — defined here
- `DEEP ANALYSIS` — .claude/skills/analyze/scripts/analyze.py:9 — defined here
- `VERIFICATION` — .claude/skills/analyze/scripts/analyze.py:10 — defined here
- `SYNTHESIS` — .claude/skills/analyze/scripts/analyze.py:11 — defined here
- `state_requirement` — .claude/skills/analyze/scripts/analyze.py:44 — defined here
- `exploration_delegation` — .claude/skills/analyze/scripts/analyze.py:81 — defined here
- `exploration_processing` — .claude/skills/analyze/scripts/analyze.py:112 — defined here
- `focus_classification` — .claude/skills/analyze/scripts/analyze.py:148 — defined here
- `priority_assignment` — .claude/skills/analyze/scripts/analyze.py:176 — defined here
- `step_estimation` — .claude/skills/analyze/scripts/analyze.py:186 — defined here
- `investigation_commitments` — .claude/skills/analyze/scripts/analyze.py:215 — defined here
- `commitment_rules` — .claude/skills/analyze/scripts/analyze.py:238 — defined here
- `completeness_audit` — .claude/skills/analyze/scripts/analyze.py:270 — defined here
- `gap_detection` — .claude/skills/analyze/scripts/analyze.py:284 — defined here
- `gap_resolution` — .claude/skills/analyze/scripts/analyze.py:299 — defined here
- `evidence_quality_check` — .claude/skills/analyze/scripts/analyze.py:309 — defined here
- `final_consolidation` — .claude/skills/analyze/scripts/analyze.py:341 — defined here
- `pattern_synthesis` — .claude/skills/analyze/scripts/analyze.py:361 — defined here
- `recommendations` — .claude/skills/analyze/scripts/analyze.py:369 — defined here
- `final_quality_check` — .claude/skills/analyze/scripts/analyze.py:385 — defined here
- `first_pass_protocol` — .claude/skills/analyze/scripts/analyze.py:408 — defined here
- `second_pass_protocol` — .claude/skills/analyze/scripts/analyze.py:435 — defined here
- `extended_investigation_protocol` — .claude/skills/analyze/scripts/analyze.py:462 — defined here
- `scope_check` — .claude/skills/analyze/scripts/analyze.py:487 — defined here

## Structure
- def get_phase_name — .claude/skills/analyze/scripts/analyze.py:21
- def get_state_requirement — .claude/skills/analyze/scripts/analyze.py:37
- def get_step_guidance — .claude/skills/analyze/scripts/analyze.py:61
- def format_output — .claude/skills/analyze/scripts/analyze.py:512
- def main — .claude/skills/analyze/scripts/analyze.py:575

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/analyze/scripts/analyze.py`, Python 3, 662 lines
- documented invocation: `python3 analyze.py --step-number 1 --total-steps 6 --thoughts "Explore found: ..."` — .claude/skills/analyze/scripts/analyze.py:14
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/analyze/scripts/analyze.py --step-number 1 --total-steps 6 --thoughts "Starting analysis. User request: test"`
  abridged stdout:
  ```text
  ======================================================================
  ANALYZE - Step 1/6: Process Exploration Results
  Phase: EXPLORATION
  ======================================================================
  STATUS: in_progress

  YOUR ACCUMULATED STATE:
  Starting analysis. User request: test

  REQUIRED ACTIONS:
    STOP. Before proceeding, verify you have Explore agent results.
  ...
  NEXT:
  Invoke step 2 with your processed exploration summary...
  ======================================================================
  ```
  **actual exit code:** 0
- documented exit codes (`0=success, 1=invalid input` from `.claude/skills/analyze/SKILL.md:80`) vs actual exit paths in code:
  - `sys.exit(1)` at `.claude/skills/analyze/scripts/analyze.py:643` (`args.step_number < 1`)
  - `sys.exit(1)` at `.claude/skills/analyze/scripts/analyze.py:647` (`args.total_steps < 6`)
  - `sys.exit(1)` at `.claude/skills/analyze/scripts/analyze.py:651` (`args.total_steps < args.step_number`)
  - Implicit exit 0 at end of `main()` at line 658
- for validators/gates: can exit non-zero (exits 1 when `total-steps < 6`, tested with command `python3 sources/rjm/.claude/skills/analyze/scripts/analyze.py --step-number 1 --total-steps 3 --thoughts "should fail"`, exit code 1)
- does the output match what the documentation claims: yes, emits step-appropriate REQUIRED ACTIONS and phase instructions matching SKILL.md and DEVELOPMENT.md

## Defects — required
none

## Observations
State machine driven purely through command-line invocation without persistent disk state, placing responsibility for state preservation on the calling agent via the `--thoughts` argument. Employs structured XML tags (`<exploration_delegation>`, `<completeness_audit>`, `<evidence_quality_check>`) to clearly delineate cognitive instructions for LLMs.

## Context cost
26407 bytes, approximately 6600 tokens.
