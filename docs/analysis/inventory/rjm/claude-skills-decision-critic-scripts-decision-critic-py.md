---
package: rjm
path: .claude/skills/decision-critic/scripts/decision-critic.py
type: script
bytes: 20191
unit: inv-rjm-115
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/decision-critic/scripts/decision-critic.py, sha256: 7023b3544db880a33f7ef99b77b933de70e70933c8a1be50bb226fe05039a033}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/decision-critic/scripts/decision-critic.py

## Purpose — required, verbatim
> "Decision Critic - Step-by-step prompt injection for structured decision criticism." — .claude/skills/decision-critic/scripts/decision-critic.py:3

## Design intent — required
A multi-step prompt injection CLI script that guides a language model through a seven-step structured decision criticism workflow across four phases (Decomposition, Verification, Challenge, Synthesis). By decomposing decisions into discrete claims, assumptions, constraints, and judgments, classifying their verifiability, generating and answering factored verification questions against strict epistemic boundaries, and forcing both contrarian counter-arguments and problem reframing before synthesizing a final verdict (STAND, REVISE, ESCALATE), it combats confirmation bias, sycophancy, and premature convergence in agent decision-making. Without it, agents reviewing consequential architectural or implementation decisions would default to unstructured, agreeable critiques that overlook unstated assumptions, unfalsifiable claims, and critical failure modes.

## Phase — required
cross-phase

## Inputs — required
- Command-line arguments parsed via `argparse` (.claude/skills/decision-critic/scripts/decision-critic.py:399-431):
  - `--step-number`: integer (1-7), required. "Current step number (1-7)" — .claude/skills/decision-critic/scripts/decision-critic.py:406
  - `--total-steps`: integer, required. "Total steps in workflow (always 7)" — .claude/skills/decision-critic/scripts/decision-critic.py:412
  - `--decision`: string, required for step 1. "The decision being criticized (required for step 1)" — .claude/skills/decision-critic/scripts/decision-critic.py:417
  - `--context`: string, optional. "Relevant constraints and background (required for step 1)" — .claude/skills/decision-critic/scripts/decision-critic.py:422
  - `--thoughts`: string, required. "Your analysis, findings, and progress from previous steps" — .claude/skills/decision-critic/scripts/decision-critic.py:428

## Outputs — required
- Structured text prompt printed to stdout (.claude/skills/decision-critic/scripts/decision-critic.py:463) containing:
  - Header with step title and phase name (`DECOMPOSITION`, `VERIFICATION`, `CHALLENGE`, or `SYNTHESIS`) (.claude/skills/decision-critic/scripts/decision-critic.py:375-376)
  - Decision text and context background (on step 1) (.claude/skills/decision-critic/scripts/decision-critic.py:454-460)
  - Step-specific instructions, classification categories, and expected output formats (.claude/skills/decision-critic/scripts/decision-critic.py:45-353)
  - Academic literature citations when present (.claude/skills/decision-critic/scripts/decision-critic.py:384-387)
  - Next step indicator or workflow completion message (.claude/skills/decision-critic/scripts/decision-critic.py:390-394)
- Process exit codes: 0 on success; 1 on invalid step number or missing `--decision` on step 1 (.claude/skills/decision-critic/scripts/decision-critic.py:436, 442); 2 via `argparse` on CLI syntax or argument parsing errors.
- Filesystem side effects: none.

## Invokes — required
none

## Invoked by — required
- skill decision-critic — .claude/skills/decision-critic/SKILL.md:42

## Concepts named — required, verbatim
- `Decision Critic` — .claude/skills/decision-critic/scripts/decision-critic.py:3 — defined here
- `Chain-of-Verification` — .claude/skills/decision-critic/scripts/decision-critic.py:6 — used here
- `Self-Consistency` — .claude/skills/decision-critic/scripts/decision-critic.py:7 — used here
- `Multi-Expert Prompting` — .claude/skills/decision-critic/scripts/decision-critic.py:8 — used here
- `DECOMPOSITION` — .claude/skills/decision-critic/scripts/decision-critic.py:18 — defined here
- `VERIFICATION` — .claude/skills/decision-critic/scripts/decision-critic.py:20 — defined here
- `CHALLENGE` — .claude/skills/decision-critic/scripts/decision-critic.py:22 — defined here
- `SYNTHESIS` — .claude/skills/decision-critic/scripts/decision-critic.py:24 — defined here
- `Extract Structure` — .claude/skills/decision-critic/scripts/decision-critic.py:44 — defined here
- `CLAIMS` — .claude/skills/decision-critic/scripts/decision-critic.py:52 — defined here
- `ASSUMPTIONS` — .claude/skills/decision-critic/scripts/decision-critic.py:56 — defined here
- `CONSTRAINTS` — .claude/skills/decision-critic/scripts/decision-critic.py:60 — defined here
- `JUDGMENTS` — .claude/skills/decision-critic/scripts/decision-critic.py:64 — defined here
- `Classify Verifiability` — .claude/skills/decision-critic/scripts/decision-critic.py:84 — defined here
- `VERIFIABLE` — .claude/skills/decision-critic/scripts/decision-critic.py:92 — defined here
- `JUDGMENT` — .claude/skills/decision-critic/scripts/decision-critic.py:95 — defined here
- `CONSTRAINT` — .claude/skills/decision-critic/scripts/decision-critic.py:98 — defined here
- `Generate Verification Questions` — .claude/skills/decision-critic/scripts/decision-critic.py:126 — defined here
- `falsification` — .claude/skills/decision-critic/scripts/decision-critic.py:134 — used here
- `Factored Verification` — .claude/skills/decision-critic/scripts/decision-critic.py:167 — defined here
- `EPISTEMIC BOUNDARY` — .claude/skills/decision-critic/scripts/decision-critic.py:175 — defined here
- `VERIFIED` — .claude/skills/decision-critic/scripts/decision-critic.py:194 — defined here
- `FAILED` — .claude/skills/decision-critic/scripts/decision-critic.py:195 — defined here
- `UNCERTAIN` — .claude/skills/decision-critic/scripts/decision-critic.py:196 — defined here
- `Contrarian Perspective` — .claude/skills/decision-critic/scripts/decision-critic.py:219 — defined here
- `STEEL-MANNING` — .claude/skills/decision-critic/scripts/decision-critic.py:230 — defined here
- `Alternative Framing` — .claude/skills/decision-critic/scripts/decision-critic.py:267 — defined here
- `Synthesis and Verdict` — .claude/skills/decision-critic/scripts/decision-critic.py:309 — defined here
- `ESCALATE` — .claude/skills/decision-critic/scripts/decision-critic.py:317 — defined here
- `REVISE` — .claude/skills/decision-critic/scripts/decision-critic.py:322 — defined here
- `STAND` — .claude/skills/decision-critic/scripts/decision-critic.py:327 — defined here

## Structure
none (python script; functions and definitions: `get_phase_name`, `get_step_guidance`, `format_output`, `main`)

## Scripts — required if type is script or the skill ships scripts
- path: `.claude/skills/decision-critic/scripts/decision-critic.py`, language: Python 3, lines: 468
- documented invocation:
  - "python3 .claude/skills/decision-critic/scripts/decision-critic.py \" — .claude/skills/decision-critic/SKILL.md:42
  - "--step-number <1-7> \" — .claude/skills/decision-critic/SKILL.md:43
  - "--total-steps 7 \" — .claude/skills/decision-critic/SKILL.md:44
  - "--decision \"<decision text>\" \" — .claude/skills/decision-critic/SKILL.md:45
  - "--context \"<constraints and background>\" \" — .claude/skills/decision-critic/SKILL.md:46
  - "--thoughts \"<your accumulated analysis, IDs, and status from all previous steps>\"" — .claude/skills/decision-critic/SKILL.md:47
- **executed:** yes
- actual command run: `python3 sources/rjm/.claude/skills/decision-critic/scripts/decision-critic.py --step-number 1 --total-steps 7 --decision "Migrate from REST to GraphQL for user dashboard" --context "High latency, mobile clients need specific fields" --thoughts "Initial decision evaluation"`
  abridged stdout:
  ```
  DECISION UNDER REVIEW:
  Migrate from REST to GraphQL for user dashboard

  CONTEXT:
  High latency, mobile clients need specific fields

  DECISION CRITIC - Step 1/7: Extract Structure
  Phase: DECOMPOSITION

  You are a structured decision critic. Your task is to decompose this decision into its constituent parts so each can be independently verified or challenged. This analysis is critical to the quality of the entire workflow.

  Extract and assign stable IDs that will persist through ALL subsequent steps:

  CLAIMS [C1, C2, ...] - Factual assertions (3-7 items)
    What facts does this decision assume to be true?
    What cause-effect relationships does it depend on?

  ASSUMPTIONS [A1, A2, ...] - Unstated beliefs (2-5 items)
    What is implied but not explicitly stated?
    What would someone unfamiliar with the context not know?

  CONSTRAINTS [K1, K2, ...] - Hard boundaries (1-4 items)
    What technical limitations exist?
    What organizational/timeline constraints apply?

  JUDGMENTS [J1, J2, ...] - Subjective tradeoffs (1-3 items)
    Where are values being weighed against each other?
    What 'it depends' decisions were made?

  OUTPUT FORMAT:
    C1: <claim text>
    C2: <claim text>
    A1: <assumption text>
    K1: <constraint text>
    J1: <judgment text>

  These IDs will be referenced in ALL subsequent steps. Be thorough but focused.

  NEXT: Step 2: Classify each item's verifiability.
  ```
  **actual exit code:** 0
- documented exit codes vs. actual exit paths:
  Documented in SKILL.md:
  - "0: Successful completion" — .claude/skills/decision-critic/SKILL.md:52
  - "1: Invalid arguments or missing required parameters" — .claude/skills/decision-critic/SKILL.md:53
  - "2: Analysis failed or incomplete" — .claude/skills/decision-critic/SKILL.md:54
  Actual exit paths in code:
  - Exit 0: implicit normal termination at end of `main()` (.claude/skills/decision-critic/scripts/decision-critic.py:463).
  - Exit 1: `sys.exit(1)` when `step-number` is not between 1 and 7 (.claude/skills/decision-critic/scripts/decision-critic.py:436).
  - Exit 1: `sys.exit(1)` when `args.step_number == 1` and `args.decision` is missing (.claude/skills/decision-critic/scripts/decision-critic.py:442).
  - Exit 2: `argparse` automatically exits with code 2 on syntax errors or missing required arguments.
  - Documented exit code 2 for "Analysis failed or incomplete" does not exist in code: there is no validation logic for `--thoughts` or analysis completeness, and no code path exits 2 for incomplete analysis.
- for validators/gates: can it exit non-zero? Yes, exits 1 on out-of-range step number or missing `--decision` on step 1; exits 2 on CLI argument parse errors. Does it fail on the source repo's own default branch? No, exits 0 on valid arguments.
- does the output match what the documentation claims? Yes for prompt text generation; no for analysis validation (the script does not evaluate or enforce analysis quality).

## Defects — required
- `exit-code-mismatch` · .claude/skills/decision-critic/scripts/decision-critic.py:436 · SKILL.md:54 documents exit code 2 as "Analysis failed or incomplete", but the script has no logic to evaluate analysis completeness or exit 2 on analysis failure; exit code 2 only occurs via `argparse` on CLI parsing errors.
- `doc-drift` · .claude/skills/decision-critic/scripts/decision-critic.py:426 · Script declares `--thoughts` as a required argument (`required=True`), but never uses, prints, or inspects `args.thoughts` anywhere in `get_step_guidance()` or `format_output()`.
- `doc-drift` · .claude/skills/decision-critic/scripts/decision-critic.py:338 · SKILL.md:92, 94 requires verdicts to include "STAND (clean or flagged)" and mandates the "Rewrite-regression check", but `decision-critic.py` Step 7 guidance defines only `VERDICT: [STAND | REVISE | ESCALATE]` with no mention of flagged vs clean STAND or the rewrite-regression check.

## Observations
- Stateless prompt injection scaffold: the script acts as a deterministic state-machine prompt delivery mechanism that outputs instructions, format requirements, and academic citations step-by-step to constrain LLM reasoning without external API calls or persistent state storage.
- Academic literature grounding: embeds citations to Chain-of-Verification (Dhuliawala et al., 2023), Self-Consistency (Wang et al., 2023), and Multi-Expert Prompting (Wang et al., 2024) into the prompt guidance to anchor the LLM's epistemic discipline during verification and challenge steps.
- Edge case categorization rule: Step 2 defines a tie-breaking rule `prefer [V] over [J] over [C]` so that ambiguous assertions are pushed into objective verification rather than treated as unquestioned constraints or subjective judgments.

## Context cost
20191 bytes (~5048 tokens). Self-contained Python script with no external dependencies (imports `argparse` and `sys`).
