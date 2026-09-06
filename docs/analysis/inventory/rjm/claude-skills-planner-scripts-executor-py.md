---
package: rjm
path: .claude/skills/planner/scripts/executor.py
type: script
bytes: 26627
unit: inv-rjm-135
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/planner/scripts/executor.py, sha256: 799b7ea2a7c4a82acd3d64fe89ae0f9ee335efce29bb057086a26dc8232883e6}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/planner/scripts/executor.py

## Purpose — required, verbatim
> "Plan Executor - Execute approved plans through delegation." — .claude/skills/planner/scripts/executor.py:3

## Design intent — required
Coordinates the execution of approved multi-step implementation plans through delegation to specialized subagents without allowing the coordinating agent to write code itself. It implements a seven-phase execution workflow with just-in-time (JIT) prompt injection that guides the coordinator through execution planning, optional reconciliation of prior work, milestone execution loops, post-implementation quality review, interactive issue resolution, documentation updates, and retrospective presentation. To avoid redundant re-implementation, it automatically detects reconciliation triggers in user thoughts and validates pre-existing code against acceptance criteria. To maintain quality and system safety, it enforces strict concurrency caps across agent roles, dependency analysis for safe parallelization, error severity triage, context-anchor mismatch recovery protocols, strict test gates, and interactive decision collection from the user before executing fixes. Without it, coding agents executing complex plans frequently attempt direct code modifications outside their architectural scope, overlook existing implementations, parallelize dependent tasks unsafely, and omit structured post-implementation review and documentation.

## Phase — required
rjm:execution

## Inputs — required
- Command-line arguments:
  - `--plan-file`: "Path to the plan file to execute" — .claude/skills/planner/scripts/executor.py:605
  - `--step-number`: "Current step (1-7)" — .claude/skills/planner/scripts/executor.py:607
  - `--total-steps`: "Total steps (always 7)" — .claude/skills/planner/scripts/executor.py:609-610
  - `--thoughts`: "Your current thinking and status" — .claude/skills/planner/scripts/executor.py:612-613
- Approved plan file at `[plan_file]` containing milestones, target file lists, acceptance criteria, and dependencies.
- User input via `AskUserQuestion` during Step 5 (QR Issue Resolution) offering decisions per finding: "Fix", "Skip", or "Alternative" — .claude/skills/planner/scripts/executor.py:403-405.
- Delegation responses from specialized subagents:
  - Step 2 reconciliation verdicts from `@agent-quality-reviewer`: `SATISFIED | NOT_SATISFIED | PARTIALLY_SATISFIED` — .claude/skills/planner/scripts/executor.py:212.
  - Step 3 implementation status and context anchor mismatch reports from `@agent-developer` — .claude/skills/planner/scripts/executor.py:276-284.
  - Step 4 post-implementation quality review verdicts from `@agent-quality-reviewer`: "PASS or issues list sorted by severity." — .claude/skills/planner/scripts/executor.py:358.

## Outputs — required
- Terminal stdout:
  - Header banner with step number and phase name ("EXECUTOR - Step" — .claude/skills/planner/scripts/executor.py:639)
  - Execution status marker ("STATUS:" — .claude/skills/planner/scripts/executor.py:643)
  - Echo of caller thoughts ("YOUR THOUGHTS:" — .claude/skills/planner/scripts/executor.py:645)
  - Injected JIT guidance blocks ("GUIDANCE:" — .claude/skills/planner/scripts/executor.py:650)
  - Next recommended CLI invocation instructions ("NEXT:" — .claude/skills/planner/scripts/executor.py:656)
- Terminal stderr:
  - Validation error: "Error: step-number must be between 1 and 7" — .claude/skills/planner/scripts/executor.py:618
  - Validation warning: "Warning: total-steps should be 7 for executor" — .claude/skills/planner/scripts/executor.py:622
- Direct presentation artifact:
  - Step 7 Retrospective: directly presented to the user on stdout ("Do NOT write to a file -- present it directly so the user sees it." — .claude/skills/planner/scripts/executor.py:495) formatted with sections `EXECUTION RETROSPECTIVE`, `Milestone Outcomes`, `Reconciliation Summary`, `Plan Accuracy Issues`, `Deviations from Plan`, `Quality Review Summary`, and `Feedback for Future Plans` — .claude/skills/planner/scripts/executor.py:499-553.
- Delegated artifact modifications:
  - Source code changes implemented via `@agent-developer` — .claude/skills/planner/scripts/executor.py:62-64.
  - Documentation index updates via `@agent-technical-writer` — .claude/skills/planner/scripts/executor.py:443 (including "Create/update CLAUDE.md index entries" — .claude/skills/planner/scripts/executor.py:459 and "Create README.md if architectural complexity warrants" — .claude/skills/planner/scripts/executor.py:460).
- Milestone tracking state:
  - `TodoWrite` state tracking for all milestones — .claude/skills/planner/scripts/executor.py:53, 74.

## Invokes — required
- agent @agent-developer — .claude/skills/planner/scripts/executor.py:62
- agent @agent-debugger — .claude/skills/planner/scripts/executor.py:63
- agent @agent-technical-writer — .claude/skills/planner/scripts/executor.py:124
- agent @agent-quality-reviewer — .claude/skills/planner/scripts/executor.py:201

## Invoked by — required
- skill planner — .claude/skills/planner/SKILL.md:58
- skill planner — .claude/skills/planner/SKILL.md:237

## Concepts named — required, verbatim
- `JIT prompt injection` — .claude/skills/planner/scripts/executor.py:5 — defined here
- `Execution Planning` — .claude/skills/planner/scripts/executor.py:6 — defined here
- `Reconciliation` — .claude/skills/planner/scripts/executor.py:7 — defined here
- `Milestone Execution` — .claude/skills/planner/scripts/executor.py:8 — defined here
- `Post-Implementation QR` — .claude/skills/planner/scripts/executor.py:9 — defined here
- `QR Issue Resolution` — .claude/skills/planner/scripts/executor.py:10 — defined here
- `Documentation` — .claude/skills/planner/scripts/executor.py:11 — defined here
- `Retrospective` — .claude/skills/planner/scripts/executor.py:12 — defined here
- `reconciliation triggers` — .claude/skills/planner/scripts/executor.py:24 — defined here
- `detect_reconciliation_signals` — .claude/skills/planner/scripts/executor.py:42 — defined here
- `TodoWrite` — .claude/skills/planner/scripts/executor.py:53 — used here
- `execution_rules` — .claude/skills/planner/scripts/executor.py:55 — defined here
- `RULE 0 (ABSOLUTE): You NEVER implement code yourself` — .claude/skills/planner/scripts/executor.py:57 — defined here
- `@agent-developer` — .claude/skills/planner/scripts/executor.py:62 — used here
- `@agent-debugger` — .claude/skills/planner/scripts/executor.py:63 — used here
- `RULE 1: Execution Protocol` — .claude/skills/planner/scripts/executor.py:71 — defined here
- `RULE 1.5: Model Selection` — .claude/skills/planner/scripts/executor.py:84 — defined here
- `sonnet` — .claude/skills/planner/scripts/executor.py:86 — used here
- `opus` — .claude/skills/planner/scripts/executor.py:91 — used here
- `haiku` — .claude/skills/planner/scripts/executor.py:93 — used here
- `dependency_analysis` — .claude/skills/planner/scripts/executor.py:97 — defined here
- `milestone_type_detection` — .claude/skills/planner/scripts/executor.py:118 — defined here
- `@agent-technical-writer` — .claude/skills/planner/scripts/executor.py:124 — used here
- `delegation_format` — .claude/skills/planner/scripts/executor.py:132 — defined here
- `@agent-quality-reviewer` — .claude/skills/planner/scripts/executor.py:201 — used here
- `reconciliation_protocol` — .claude/skills/planner/scripts/executor.py:199 — defined here
- `error_handling` — .claude/skills/planner/scripts/executor.py:257 — defined here
- `Context anchor mismatch protocol` — .claude/skills/planner/scripts/executor.py:274 — defined here
- `acceptance_testing` — .claude/skills/planner/scripts/executor.py:288 — defined here
- `Self-consistency check` — .claude/skills/planner/scripts/executor.py:305 — defined here
- `qr_delegation` — .claude/skills/planner/scripts/executor.py:337 — defined here
- `issue_resolution_protocol` — .claude/skills/planner/scripts/executor.py:383 — defined here
- `AskUserQuestion` — .claude/skills/planner/scripts/executor.py:402 — used here
- `tw_delegation` — .claude/skills/planner/scripts/executor.py:445 — defined here
- `final_checklist` — .claude/skills/planner/scripts/executor.py:466 — defined here
- `retrospective_format` — .claude/skills/planner/scripts/executor.py:497 — defined here

## Structure
none (python script; functions: `detect_reconciliation_signals`, `get_step_1_guidance`, `get_step_2_guidance`, `get_step_3_guidance`, `get_step_4_guidance`, `get_step_5_guidance`, `get_step_6_guidance`, `get_step_7_guidance`, `get_step_guidance`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/planner/scripts/executor.py`, language: Python 3, lines: 664
- documented invocation:
  - > "python3 executor.py --plan-file PATH --step-number 1 --total-steps 7 --thoughts \"...\"" — .claude/skills/planner/scripts/executor.py:15
  - > "python3 executor.py --plan-file plans/auth.md --step-number 1 --total-steps 7 \\" — .claude/skills/planner/scripts/executor.py:591
- **executed:** yes
- actual command run, abridged stdout, **actual exit code**:
  - Command: `python3 sources/rjm/.claude/skills/planner/scripts/executor.py --plan-file plans/auth.md --step-number 1 --total-steps 7 --thoughts "Execute the auth implementation plan"`
  - Actual exit code: 0
  - Actual stdout:
```text
================================================================================
EXECUTOR - Step 1 of 7: Execution Planning
================================================================================

STATUS: in_progress

YOUR THOUGHTS:
Execute the auth implementation plan

GUIDANCE:

EXECUTION PLANNING

Plan file: plans/auth.md

Read the plan file and analyze:
  1. Count milestones and their dependencies
  2. Identify file targets per milestone
  3. Determine parallelization opportunities
  4. Set up TodoWrite tracking for all milestones
...
NEXT:
No reconciliation signals detected. Proceed to milestone execution.

Invoke step 3 to begin delegating milestones:
  python3 executor.py --plan-file "plans/auth.md" --step-number 3 --total-steps 7 --thoughts "Analyzed plan: N milestones, parallel batches: [describe], starting execution..."

================================================================================
```
  - Additional command (reconciliation detection): `python3 sources/rjm/.claude/skills/planner/scripts/executor.py --plan-file plans/auth.md --step-number 1 --total-steps 7 --thoughts "resume execution and check what's done"`
    - Actual exit code: 0; successfully outputs `NEXT: RECONCILIATION SIGNALS DETECTED in your thoughts.` and directs caller to invoke Step 2.
  - Additional command (completion step): `python3 sources/rjm/.claude/skills/planner/scripts/executor.py --plan-file plans/auth.md --step-number 7 --total-steps 7 --thoughts "Execution complete"`
    - Actual exit code: 0; outputs `STATUS: execution_complete` and prints retrospective format template.
  - Error condition command: `python3 sources/rjm/.claude/skills/planner/scripts/executor.py --plan-file plans/auth.md --step-number 8 --total-steps 7 --thoughts "test"`
    - Actual exit code: 1; outputs `Error: step-number must be between 1 and 7` to stderr.
- documented exit codes vs. actual exit paths in code:
  - Documented exit codes: None explicitly documented in docstring or argument parser description.
  - Actual exit paths in code:
    - `sys.exit(1)` at .claude/skills/planner/scripts/executor.py:619 (triggered when `args.step_number < 1 or args.step_number > 7`).
    - `sys.exit(2)` implicitly via `argparse.ArgumentParser.parse_args()` at .claude/skills/planner/scripts/executor.py:615 (when CLI parameters are missing or invalid).
    - Normal exit (code 0) at end of `main()` at .claude/skills/planner/scripts/executor.py:660.
- for validators/gates: can it exit non-zero? does it fail on the source repo's own default branch?
  - Not a gate script; it is an execution coordinator and JIT guidance generator. It exits with code 1 on out-of-range step numbers and code 2 on missing CLI parameters.
- does the output match what the documentation claims?
  - Yes. The execution workflow outputs step-specific execution instructions, delegation rules, dependency analysis constraints, and transitions matching the documentation in `SKILL.md`.

## Defects — required
- `missing-path` · .claude/skills/planner/scripts/executor.py:62 · Instructs delegation to `@agent-developer`, `@agent-debugger`, `@agent-technical-writer`, and `@agent-quality-reviewer`, but none of these agent definitions exist in `.claude/agents/` (the actual repository agent definitions are `implementer.md`, `debug.md`, `qa.md`, and `code-reviewer.md`).
- `internal-contradiction` · .claude/skills/planner/scripts/executor.py:579 · `get_step_guidance()` defines fallback guidance for invalid step numbers ("Unknown step {step_number}. Valid steps are 1-7."), but this branch is unreachable dead code because `main()` enforces `args.step_number < 1 or args.step_number > 7` with `sys.exit(1)` at line 619 prior to calling the function.
- `exit-code-mismatch` · .claude/skills/planner/scripts/executor.py:621 · `args.total_steps != 7` emits a warning to stderr ("Warning: total-steps should be 7 for executor") rather than exiting non-zero, despite `--total-steps` being specified in help as "Total steps (always 7)".

## Observations
- JIT prompt injection design: The script serves as an active execution driver that injects structured XML guidance (`<execution_rules>`, `<dependency_analysis>`, `<milestone_type_detection>`, `<delegation_format>`, `<reconciliation_protocol>`, `<error_handling>`, `<acceptance_testing>`, `<qr_delegation>`, `<issue_resolution_protocol>`, `<tw_delegation>`, `<final_checklist>`, `<retrospective_format>`) turn-by-turn into the agent conversation, keeping working context small compared to loading all rules upfront.
- Absolute prohibition on direct implementation: Rule 0 explicitly states: "RULE 0 (ABSOLUTE): You NEVER implement code yourself" (.claude/skills/planner/scripts/executor.py:57), restricting the coordinator exclusively to delegating code changes to specialized agents, with exceptions limited to trivial fixes under 5 lines.
- Keyword-driven reconciliation gate: Detects regex triggers in user thoughts (`already (implemented|done|complete)`, `partially complete`, `resume`, `continue from`, `pick up where`, `check what's done`, `verify existing`, `prior work`) to redirect execution to Step 2 (Reconciliation) before executing milestones, avoiding redundant implementation work.
- Model escalation guardrails: Rule 1.5 permits upgrading agent model to Opus for difficult reasoning tasks but forbids downgrading below Sonnet ("Downgrade to haiku | NEVER | Quality degradation unacceptable" — .claude/skills/planner/scripts/executor.py:93).
- Presentation over file writing for retrospectives: Step 7 explicitly instructs the model: "Do NOT write to a file -- present it directly so the user sees it." (.claude/skills/planner/scripts/executor.py:495), ensuring user visibility in the active session.

## Context cost
26,627 bytes (~6,657 tokens) for the script source itself. When invoked step-by-step, individual step guidance blocks range from ~1.5 KB (Step 2) to ~5.5 KB (Step 1).
