---
package: rjm
path: .claude/skills/analyze/scripts/analyze.py
type: script
bytes: 26407
unit: inv-rjm-88
in_scope_via: .claude/skills/analyze/SKILL.md
aliases: []
verified: 2026-09-06 quote-check+coverage
memo_inputs:
  - {path: .claude/skills/analyze/scripts/analyze.py, sha256: ea1822893c16811b9955a98e2059edf0eb46073e93a8f2c3bd1f2f3abc255a4b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
---

# .claude/skills/analyze/scripts/analyze.py

## Purpose — required, verbatim
> "Analyze Skill - Step-by-step codebase analysis with exploration and deep investigation." — .claude/skills/analyze/scripts/analyze.py:3

## Design intent — required
State machine and workflow engine driving the `analyze` skill. Rather than permitting the calling agent to freely explore or summarize code without structure, this script acts as an active orchestrator enforcing a six-phase analysis lifecycle (Exploration, Focus Selection, Investigation Planning, Deep Analysis, Verification, and Synthesis). It validates arguments, computes step progress, enforces state accumulation across steps (`--thoughts`), emits phase-specific required actions, and requires explicit evidence collection (file:line citations and quoted code) before synthesis.

## Phase — required
cross-phase

## Inputs — required
- CLI flags and arguments (.claude/skills/analyze/scripts/analyze.py:619-636):
  - `--step-number`: integer, required, current step number (starts at 1)
  - `--total-steps`: integer, required, estimated total steps (minimum 6)
  - `--thoughts`: string, required, accumulated findings, evidence, and file references

## Outputs — required
- Formatted workflow guidance emitted to stdout with current phase header, state summary, `REQUIRED ACTIONS`, and `NEXT:` guidance (.claude/skills/analyze/scripts/analyze.py:512-572)
- Error diagnostics emitted to stderr on input validation failure (.claude/skills/analyze/scripts/analyze.py:642, 646, 650)

## Invokes — required
none

## Invoked by — required
- skill analyze — .claude/skills/analyze/SKILL.md:80
- reference DEVELOPMENT.md — .claude/skills/analyze/references/DEVELOPMENT.md:12

## Concepts named — required, verbatim
- `EXPLORATION` — .claude/skills/analyze/scripts/analyze.py:6 — defined here | used here
- `FOCUS SELECTION` — .claude/skills/analyze/scripts/analyze.py:7 — defined here | used here
- `INVESTIGATION PLANNING` — .claude/skills/analyze/scripts/analyze.py:8 — defined here | used here
- `DEEP ANALYSIS` — .claude/skills/analyze/scripts/analyze.py:9 — defined here | used here
- `VERIFICATION` — .claude/skills/analyze/scripts/analyze.py:10 — defined here | used here
- `SYNTHESIS` — .claude/skills/analyze/scripts/analyze.py:11 — defined here | used here
- `state_requirement` — .claude/skills/analyze/scripts/analyze.py:44 — defined here | used here
- `exploration_delegation` — .claude/skills/analyze/scripts/analyze.py:81 — defined here | used here
- `exploration_processing` — .claude/skills/analyze/scripts/analyze.py:112 — defined here | used here
- `focus_classification` — .claude/skills/analyze/scripts/analyze.py:148 — defined here | used here
- `priority_assignment` — .claude/skills/analyze/scripts/analyze.py:176 — defined here | used here
- `step_estimation` — .claude/skills/analyze/scripts/analyze.py:186 — defined here | used here
- `investigation_commitments` — .claude/skills/analyze/scripts/analyze.py:215 — defined here | used here
- `commitment_rules` — .claude/skills/analyze/scripts/analyze.py:238 — defined here | used here
- `completeness_audit` — .claude/skills/analyze/scripts/analyze.py:270 — defined here | used here
- `gap_detection` — .claude/skills/analyze/scripts/analyze.py:284 — defined here | used here
- `gap_resolution` — .claude/skills/analyze/scripts/analyze.py:299 — defined here | used here
- `evidence_quality_check` — .claude/skills/analyze/scripts/analyze.py:309 — defined here | used here
- `final_consolidation` — .claude/skills/analyze/scripts/analyze.py:341 — defined here | used here
- `pattern_synthesis` — .claude/skills/analyze/scripts/analyze.py:361 — defined here | used here
- `recommendations` — .claude/skills/analyze/scripts/analyze.py:369 — defined here | used here
- `final_quality_check` — .claude/skills/analyze/scripts/analyze.py:385 — defined here | used here
- `first_pass_protocol` — .claude/skills/analyze/scripts/analyze.py:408 — defined here | used here
- `second_pass_protocol` — .claude/skills/analyze/scripts/analyze.py:435 — defined here | used here
- `extended_investigation_protocol` — .claude/skills/analyze/scripts/analyze.py:462 — defined here | used here
- `scope_check` — .claude/skills/analyze/scripts/analyze.py:487 — defined here | used here

## Structure
- `def get_phase_name(step: int, total_steps: int) -> str:` — .claude/skills/analyze/scripts/analyze.py:21
- `def get_state_requirement(step: int) -> list[str]:` — .claude/skills/analyze/scripts/analyze.py:37
- `def get_step_guidance(step: int, total_steps: int) -> dict:` — .claude/skills/analyze/scripts/analyze.py:61
- `def format_output(step: int, total_steps: int, thoughts: str, guidance: dict) -> str:` — .claude/skills/analyze/scripts/analyze.py:512
- `def main():` — .claude/skills/analyze/scripts/analyze.py:575

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/analyze/scripts/analyze.py`, language: Python, lines: 662
- documented invocation:
  > "python3 analyze.py --step-number 1 --total-steps 6 --thoughts \"Explore found: ...\"" — .claude/skills/analyze/scripts/analyze.py:14
- **executed:** yes
- actual command run, abridged stdout, actual exit code:
  - Command: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/scripts/analyze.py --step-number 1 --total-steps 6 --thoughts "Explore found: test"`
    Stdout: `======================================================================\nANALYZE - Step 1/6: Process Exploration Results\nPhase: EXPLORATION\n...\nNEXT:\nInvoke step 2 with your processed exploration summary...`
    Exit code: 0
  - Command: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/scripts/analyze.py --step-number 6 --total-steps 6 --thoughts "test synthesis"`
    Stdout: `======================================================================\nANALYZE - Step 6/6: Consolidate and Recommend\nPhase: SYNTHESIS\n...\nWORKFLOW COMPLETE...`
    Exit code: 0
  - Command: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/scripts/analyze.py --step-number 1 --total-steps 3 --thoughts "should fail"`
    Stdout: `ERROR: total-steps must be >= 6 (minimum workflow)`
    Exit code: 1
  - Command: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/scripts/analyze.py --step-number 0 --total-steps 6 --thoughts "fail"`
    Stdout: `ERROR: step-number must be >= 1`
    Exit code: 1
  - Command: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/scripts/analyze.py --step-number 8 --total-steps 6 --thoughts "fail"`
    Stdout: `ERROR: total-steps must be >= step-number`
    Exit code: 1
  - Command: `python3 /Users/peterkloss/Dev/ACMElabs/brain-v2/sources/rjm/.claude/skills/analyze/scripts/analyze.py`
    Stdout: `usage: analyze.py [-h] --step-number STEP_NUMBER --total-steps TOTAL_STEPS --thoughts THOUGHTS\nanalyze.py: error: the following arguments are required: --step-number, --total-steps, --thoughts`
    Exit code: 2
- documented exit codes vs. actual exit paths:
  - Documented:
    > "0=success, 1=invalid input" — .claude/skills/analyze/SKILL.md:80
  - Actual exit paths in code:
    - sys.exit(1) on `args.step_number < 1` (.claude/skills/analyze/scripts/analyze.py:643)
    - sys.exit(1) on `args.total_steps < 6` (.claude/skills/analyze/scripts/analyze.py:647)
    - sys.exit(1) on `args.total_steps < args.step_number` (.claude/skills/analyze/scripts/analyze.py:651)
    - `argparse.parse_args()` exits with code 2 when required CLI arguments are missing
    - Normal completion exits with code 0 (implicit return from `main()`)
- for validators/gates: not a validation gate; workflow state machine engine. Exits non-zero on argument violations.
- does output match documentation claims? Yes, guidance and action checklists match the multi-phase analysis protocol.

## Defects — required
- exit-code-mismatch · .claude/skills/analyze/scripts/analyze.py:638 · Argument parsing with argparse exits with status code 2 when required flags are missing, contrary to documentation claiming all invalid inputs exit with code 1 (.claude/skills/analyze/SKILL.md:80).

## Observations
The script implements a state machine that drives the agent rather than serving as passive utility code. The `format_output` function truncates `--thoughts` preview to 600 characters in display to prevent terminal flooding while preserving state for logic processing.

## Context cost
26407 bytes, loads nothing further (0 bytes). Approximately 6600 tokens.
