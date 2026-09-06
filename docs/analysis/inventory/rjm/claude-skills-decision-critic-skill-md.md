---
package: rjm
path: .claude/skills/decision-critic/SKILL.md
type: skill
bytes: 8192
unit: inv-rjm-115
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .claude/skills/decision-critic/SKILL.md, sha256: 43c7e0effd00ca60aa277b29a6a0c525de1f3339fdde293f7e19bda9bce39d30}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .claude/skills/decision-critic/SKILL.md

## Purpose — required, verbatim
> "Structured decision critic that systematically stress-tests reasoning before commitment surfacing hidden assumptions verifying claims and generating adversarial perspectives to improve decision quality. Do NOT use to surface failure risks pre-launch (use pre-mortem) or to probe why a constraint exists (use chestertons-fence)." — .claude/skills/decision-critic/SKILL.md:4

## Design intent — required
A structured adversarial critique skill designed to systematically stress-test reasoning on consequential, hard-to-reverse decisions (such as architecture designs, ADRs, and plans) before commitment. It organizes critique into four disciplined phases (Decomposition, Verification, Challenge, Synthesis) supported by a seven-step prompt injection script and eleven mental-model / critical-thinking reference files, enforcing factored verification against confirmation bias, contrarian steel-manning, problem reframing, and a five-step inversion thinking protocol. Additionally, it establishes the rewrite-regression check as a mandatory halt criterion to prevent unwarranted rewrites where early promises mask systemic regressions. Without it, agent workflows would succumb to sycophantic approval of proposals, accepting unverified assumptions and untested trade-offs without rigorous scrutiny.

## Phase — required
cross-phase

## Inputs — required
- Trigger phrases:
  - "`Validate my thinking on...`" — .claude/skills/decision-critic/SKILL.md:16
  - "`Poke holes in this decision`" — .claude/skills/decision-critic/SKILL.md:17
  - "`Criticize this approach`" — .claude/skills/decision-critic/SKILL.md:18
  - "`Stress-test this tradeoff`" — .claude/skills/decision-critic/SKILL.md:19
  - Decision rationale presented for criticism (.claude/skills/decision-critic/SKILL.md:20)
- Decision statement (`--decision`) and context background (`--context`) passed to `decision-critic.py` (.claude/skills/decision-critic/SKILL.md:45-46)
- Accumulated analysis, IDs, and statuses passed to `--thoughts` (.claude/skills/decision-critic/SKILL.md:47)
- Prior artifacts: consequential decisions, plans, ADRs, or designs being evaluated (.claude/skills/decision-critic/SKILL.md:68-69)
- Goal statements for inversion analysis (.claude/skills/decision-critic/SKILL.md:121-125)
- Reference files under `references/` (.claude/skills/decision-critic/SKILL.md:96-108)

## Outputs — required
- Decomposed structural elements with stable IDs: `C1`, `C2` (claims), `A1`, `A2` (assumptions), `K1`, `K2` (constraints), `J1`, `J2` (judgments) (.claude/skills/decision-critic/SKILL.md:25-26)
- Factored verification statuses: `VERIFIED`, `FAILED`, `UNCERTAIN` (.claude/skills/decision-critic/SKILL.md:30, 90)
- Contrarian perspective and alternative problem framing (.claude/skills/decision-critic/SKILL.md:31, 91)
- Inversion analysis document with Goal, Inverted Goal (Failure), Failure Modes, Success Criteria (Reversed), and Decision Validation (.claude/skills/decision-critic/SKILL.md:157-184)
- Final decision critique verdict: `STAND (clean or flagged)`, `REVISE`, or `ESCALATE` (.claude/skills/decision-critic/SKILL.md:34, 92)

## Invokes — required
- script .claude/skills/decision-critic/scripts/decision-critic.py — .claude/skills/decision-critic/SKILL.md:42
- reference references/rewrite-regression-check.md — .claude/skills/decision-critic/SKILL.md:94
- reference references/mental-models-chestertons-fence.md — .claude/skills/decision-critic/SKILL.md:98
- reference references/mental-models-conways-law.md — .claude/skills/decision-critic/SKILL.md:99
- reference references/mental-models-galls-law.md — .claude/skills/decision-critic/SKILL.md:100
- reference references/mental-models-fat-tails.md — .claude/skills/decision-critic/SKILL.md:101
- reference references/quality-boy-scout-rule.md — .claude/skills/decision-critic/SKILL.md:102
- reference references/critical-thinking-brandolinis-law.md — .claude/skills/decision-critic/SKILL.md:103
- reference references/critical-thinking-falsifiability.md — .claude/skills/decision-critic/SKILL.md:104
- reference references/critical-thinking-survivorship-bias.md — .claude/skills/decision-critic/SKILL.md:105
- reference references/strategic-thinking-systems-thinking.md — .claude/skills/decision-critic/SKILL.md:106
- reference references/rewrite-regression-check.md — .claude/skills/decision-critic/SKILL.md:107
- skill pre-mortem — .claude/skills/decision-critic/SKILL.md:4
- skill chestertons-fence — .claude/skills/decision-critic/SKILL.md:4
- agent independent-thinker — .claude/skills/decision-critic/SKILL.md:72

## Invoked by — required
- command spec — docs/workflow-commands.md:59
- agent critic — .claude/agents/critic.md:3
- agent critic — src/claude/critic.md:3
- agent critic — templates/agents/critic.shared.md:4
- agent critic — docs/agent-catalog.md:22

## Concepts named — required, verbatim
- `decision-critic` — .claude/skills/decision-critic/SKILL.md:2 — defined here
- `pre-mortem` — .claude/skills/decision-critic/SKILL.md:4 — used here
- `chestertons-fence` — .claude/skills/decision-critic/SKILL.md:4 — used here
- `Decision Critic` — .claude/skills/decision-critic/SKILL.md:8 — defined here
- `DECOMPOSITION` — .claude/skills/decision-critic/SKILL.md:25 — defined here
- `VERIFICATION` — .claude/skills/decision-critic/SKILL.md:28 — defined here
- `factored verification` — .claude/skills/decision-critic/SKILL.md:29 — used here
- `VERIFIED` — .claude/skills/decision-critic/SKILL.md:30 — defined here
- `FAILED` — .claude/skills/decision-critic/SKILL.md:30 — defined here
- `UNCERTAIN` — .claude/skills/decision-critic/SKILL.md:30 — defined here
- `CHALLENGE` — .claude/skills/decision-critic/SKILL.md:31 — defined here
- `SYNTHESIS` — .claude/skills/decision-critic/SKILL.md:34 — defined here
- `STAND` — .claude/skills/decision-critic/SKILL.md:34 — defined here
- `REVISE` — .claude/skills/decision-critic/SKILL.md:34 — defined here
- `ESCALATE` — .claude/skills/decision-critic/SKILL.md:34 — defined here
- `independent-thinker` — .claude/skills/decision-critic/SKILL.md:72 — used here
- `inversion` — .claude/skills/decision-critic/SKILL.md:83 — used here
- `rewrite-regression check` — .claude/skills/decision-critic/SKILL.md:92 — defined here
- `Rewrite-Regression Check` — .claude/skills/decision-critic/SKILL.md:94 — defined here
- `Chesterton's Fence` — .claude/skills/decision-critic/SKILL.md:98 — used here
- `Conway's Law` — .claude/skills/decision-critic/SKILL.md:99 — used here
- `Gall's Law` — .claude/skills/decision-critic/SKILL.md:100 — used here
- `Fat Tails` — .claude/skills/decision-critic/SKILL.md:101 — used here
- `Boy Scout Rule` — .claude/skills/decision-critic/SKILL.md:102 — used here
- `Brandolini's Law` — .claude/skills/decision-critic/SKILL.md:103 — used here
- `Falsifiability` — .claude/skills/decision-critic/SKILL.md:104 — used here
- `Survivorship Bias` — .claude/skills/decision-critic/SKILL.md:105 — used here
- `Systems Thinking` — .claude/skills/decision-critic/SKILL.md:106 — used here
- `Chain-of-Verification` — .claude/skills/decision-critic/SKILL.md:113 — used here
- `Self-Consistency` — .claude/skills/decision-critic/SKILL.md:114 — used here
- `Multi-Expert Prompting` — .claude/skills/decision-critic/SKILL.md:115 — used here
- `Inversion Thinking Protocol` — .claude/skills/decision-critic/SKILL.md:117 — defined here

## Structure
- `# Decision Critic` — .claude/skills/decision-critic/SKILL.md:8
- `## Triggers` — .claude/skills/decision-critic/SKILL.md:12
- `## Process` — .claude/skills/decision-critic/SKILL.md:22
- `## Scripts` — .claude/skills/decision-critic/SKILL.md:37
- `### decision-critic.py` — .claude/skills/decision-critic/SKILL.md:39
- `## When to Use` — .claude/skills/decision-critic/SKILL.md:64
- `## Anti-Patterns` — .claude/skills/decision-critic/SKILL.md:77
- `## Verification` — .claude/skills/decision-critic/SKILL.md:86
- `## References` — .claude/skills/decision-critic/SKILL.md:96
- `## Academic Grounding` — .claude/skills/decision-critic/SKILL.md:109
- `## Inversion Thinking Protocol` — .claude/skills/decision-critic/SKILL.md:117
- `### Step 1: State the Goal` — .claude/skills/decision-critic/SKILL.md:121
- `### Step 2: Invert the Goal` — .claude/skills/decision-critic/SKILL.md:127
- `### Step 3: List Failure Scenarios` — .claude/skills/decision-critic/SKILL.md:131
- `### Step 4: Reverse to Success Criteria` — .claude/skills/decision-critic/SKILL.md:142
- `### Step 5: Validate Decision Against Inverted Criteria` — .claude/skills/decision-critic/SKILL.md:150

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
- does the output match what the documentation claims? Yes for prompt formatting and step guidance; no for analysis completeness evaluation (the script prints prompt text and does not analyze or validate the content passed to `--thoughts`).

## Defects — required
- `missing-path` · .claude/skills/decision-critic/SKILL.md:96 · The `references/` directory contains `references/decision-pre-committed-metrics.md` (4403 bytes), but it is omitted from `## References` and never cited or linked in `SKILL.md`.
- `doc-drift` · .claude/skills/decision-critic/SKILL.md:54 · Exit code 2 is documented as "Analysis failed or incomplete", but `scripts/decision-critic.py` contains no logic to evaluate analysis completeness or exit 2 on analysis failure.
- `internal-contradiction` · .claude/skills/decision-critic/SKILL.md:92 · Verification section establishes "STAND (clean or flagged)" and mandates the "Rewrite-regression check", but the script documented to drive the workflow (`decision-critic.py:338`) does not support flagged STAND and has no knowledge of the rewrite-regression check.

## Observations
- Combines prompt-injection automation with structured reference heuristics: while the Python script enforces stage-by-stage decomposition and verification protocol, the skill body provides the qualitative heuristics (mental models, falsifiability, Brandolini's law, inversion protocol) that guide human or agent reasoning.
- Factored verification strategy: directly implements the methodology from Dhuliawala et al. (2023) by separating verification question generation from question answering to decouple belief from verification evidence.
- Multi-skill boundary differentiation: frontmatter and "When to Use" explicitly draw boundary lines with `pre-mortem` (use pre-mortem for pre-launch failure risks), `chestertons-fence` (use chestertons-fence to probe existing constraints), and `independent-thinker` (use independent-thinker for high-level strategic direction).

## Context cost
8192 bytes. Loads `scripts/decision-critic.py` (20191 bytes) and 10 referenced documents under `references/` (totaling 34393 bytes across mental models, critical thinking guides, and the rewrite-regression check). Total combined context cost is 62776 bytes (~15694 tokens) if all references and script are loaded.
