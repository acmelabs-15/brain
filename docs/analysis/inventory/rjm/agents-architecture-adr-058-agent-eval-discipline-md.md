---
package: rjm
path: .agents/architecture/ADR-058-agent-eval-discipline.md
type: agent
bytes: 40543
unit: inv-rjm-21
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-058-agent-eval-discipline.md, sha256: 772b9974abe96bcf928a8c9e89bd63fa9ecfb82e51baff7ccbfc07ce198daf51}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-058-agent-eval-discipline.md

## Purpose — required, verbatim
> "Adopt the agent-vs-baseline efficacy methodology defined below as the standard for empirical validation of agent specialization." — .agents/architecture/ADR-058-agent-eval-discipline.md:53

## Design intent — required
Establishes an empirical, offline evaluation discipline to verify whether specialized agent system prompts produce measurable, statistically valid recall lift over a deliberately naive baseline prompt on the same model and fixtures. Without it, agent specialization remains an unverified hypothesis ("a bet without data"), and prompt engineers risk maintaining complex prompt definitions without evidence of efficacy, or using asymmetric, flawed evaluation contracts that produce deceptive signals.

## Phase — required
none

## Inputs — required
- Agent prompt text under evaluation (.agents/architecture/ADR-058-agent-eval-discipline.md:82, 114)
- Deliberately naive baseline prompt text (`BASELINE_PROMPT = "Review the following input."`) (.agents/architecture/ADR-058-agent-eval-discipline.md:84, 87, 162-168)
- Held-out fixture JSON files adhering to `schemaVersion: 1`, defining scenario `input`, `provenance`, and deterministic `assertions` (.agents/architecture/ADR-058-agent-eval-discipline.md:135-152)
- Common output-shape contract suffix (`OUTPUT_SHAPE_SUFFIX`) appended to the user message for both variants (.agents/architecture/ADR-058-agent-eval-discipline.md:78-85)
- Anthropic API configuration: pinned model `claude-sonnet-4-6`, `temperature=0`, and shared retry policy (.agents/architecture/ADR-058-agent-eval-discipline.md:93-96)
- CLI invocation parameters: `--agent`, `--fixtures`, `--n-runs` (default: 3), `--model` (.agents/architecture/ADR-058-agent-eval-discipline.md:176)

## Outputs — required
- Deterministic recall metrics across runs for agent and baseline variants (.agents/architecture/ADR-058-agent-eval-discipline.md:156, 232-233)
- Signed recall delta (`agent - baseline`) (.agents/architecture/ADR-058-agent-eval-discipline.md:177, 234)
- 95% paired-bootstrap confidence interval at the fixture level (.agents/architecture/ADR-058-agent-eval-discipline.md:177, 257)
- Flakiness assessment metrics and boolean flag triggering a halt when flakiness exceeds 30% (.agents/architecture/ADR-058-agent-eval-discipline.md:180, 190, 235)
- Normative recommendation verdict: `graduate-to-CI`, `keep-as-audit`, `scrap` (methodology flaw vs negative/null delta), or `halt-due-to-flakiness` (.agents/architecture/ADR-058-agent-eval-discipline.md:184-190)
- Advisory LLM-as-judge narrative quality sidecar (optional, explicitly non-gated) (.agents/architecture/ADR-058-agent-eval-discipline.md:158-159)
- JSON run records and reports (`evals/security-spike/reports/<RUN_ID>/report.json` and `REPORT.md`) (.agents/architecture/ADR-058-agent-eval-discipline.md:228, 455-456)
- Archived run artifacts in `evals/_archive/<agent>-spike-<RUN_ID>/` when invalidated or scrapped (.agents/architecture/ADR-058-agent-eval-discipline.md:188-189)

## Invokes — required
- script scripts/eval/eval-agent-vs-baseline.py — .agents/architecture/ADR-058-agent-eval-discipline.md:78
- script _scoring_engine.py — .agents/architecture/ADR-058-agent-eval-discipline.md:97
- script scripts/eval/_report_aggregator.py — .agents/architecture/ADR-058-agent-eval-discipline.md:196
- script _anthropic_api.py — .agents/architecture/ADR-058-agent-eval-discipline.md:424
- doc ADR-057-prompt-behavioral-evaluation.md — .agents/architecture/ADR-058-agent-eval-discipline.md:445
- doc ADR-075-form-factor-eval-methodology.md — .agents/architecture/ADR-058-agent-eval-discipline.md:121
- doc ADR-023-quality-gate-prompt-testing.md — .agents/architecture/ADR-058-agent-eval-discipline.md:446
- doc ADR-010-quality-gates-evaluator-optimizer.md — .agents/architecture/ADR-058-agent-eval-discipline.md:447
- doc .agents/critique/SPIKE-1854-methodology-diagnosis.md — .agents/architecture/ADR-058-agent-eval-discipline.md:59
- doc .agents/critique/ADR-058-debate-log.md — .agents/architecture/ADR-058-agent-eval-discipline.md:464
- doc .agents/critique/ADR-058-amendment-debate-log.md — .agents/architecture/ADR-058-agent-eval-discipline.md:465
- doc .agents/critique/ADR-058-third-amendment-debate-log.md — .agents/architecture/ADR-058-agent-eval-discipline.md:466
- doc ../specs/requirements/REQ-004-agent-eval-harness-spike.md — .agents/architecture/ADR-058-agent-eval-discipline.md:452
- doc ../specs/design/DESIGN-004-agent-eval-harness-spike.md — .agents/architecture/ADR-058-agent-eval-discipline.md:453
- doc ../specs/tasks/TASK-004-agent-eval-harness-spike.md — .agents/architecture/ADR-058-agent-eval-discipline.md:454

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:170
- skill ADR-058 — .claude/skills/security-review/SKILL.md:8
- doc ADR-058 — .agents/architecture/ADR-075-form-factor-eval-methodology.md:16

## Concepts named — required, verbatim
- `Agent-vs-Baseline Efficacy` — .agents/architecture/ADR-058-agent-eval-discipline.md:21 — defined here
- `agent specialization` — .agents/architecture/ADR-058-agent-eval-discipline.md:27 — used here
- `between-subjects` — .agents/architecture/ADR-058-agent-eval-discipline.md:40 — defined here
- `before-after` — .agents/architecture/ADR-058-agent-eval-discipline.md:40 — used here
- `deterministic-only gated signal` — .agents/architecture/ADR-058-agent-eval-discipline.md:53 — defined here
- `LLM-as-judge sidecar` — .agents/architecture/ADR-058-agent-eval-discipline.md:53 — defined here
- `v1 Invalidation` — .agents/architecture/ADR-058-agent-eval-discipline.md:55 — defined here
- `keep-as-audit` — .agents/architecture/ADR-058-agent-eval-discipline.md:57 — defined here
- `scrap` — .agents/architecture/ADR-058-agent-eval-discipline.md:57 — defined here
- `OUTPUT_SHAPE_SUFFIX` — .agents/architecture/ADR-058-agent-eval-discipline.md:72 — defined here
- `Experimental Design Symmetry` — .agents/architecture/ADR-058-agent-eval-discipline.md:74 — defined here
- `BASELINE_PROMPT` — .agents/architecture/ADR-058-agent-eval-discipline.md:84 — defined here
- `deterministic-scorable output` — .agents/architecture/ADR-058-agent-eval-discipline.md:106 — defined here
- `specialization value` — .agents/architecture/ADR-058-agent-eval-discipline.md:110 — defined here
- `form-factor` — .agents/architecture/ADR-058-agent-eval-discipline.md:119 — defined here
- `Survivorship Bias Acknowledgment` — .agents/architecture/ADR-058-agent-eval-discipline.md:125 — defined here
- `Held-Out Definition` — .agents/architecture/ADR-058-agent-eval-discipline.md:129 — defined here
- `Fixture Schema` — .agents/architecture/ADR-058-agent-eval-discipline.md:133 — defined here
- `Scoring Discipline` — .agents/architecture/ADR-058-agent-eval-discipline.md:154 — defined here
- `Baseline Definition` — .agents/architecture/ADR-058-agent-eval-discipline.md:160 — defined here
- `graduate-to-CI` — .agents/architecture/ADR-058-agent-eval-discipline.md:186 — defined here
- `halt-due-to-flakiness` — .agents/architecture/ADR-058-agent-eval-discipline.md:190 — defined here
- `Tier 3 architecture review` — .agents/architecture/ADR-058-agent-eval-discipline.md:200 — used here
- `SLA fallback` — .agents/architecture/ADR-058-agent-eval-discipline.md:202 — defined here
- `Re-Baseline Cadence` — .agents/architecture/ADR-058-agent-eval-discipline.md:204 — defined here

## Structure
- # ADR-058: Agent Eval Discipline (Agent-vs-Baseline Efficacy)
- ## Context and Problem Statement
- ## Decision Drivers
- ## Distinction from ADR-057
- ## Decision
- ### v1 Invalidation (BOTH committed v1 verdicts retracted)
- ### Experimental Design Symmetry (Normative)
- ### Scope
- ### What This Methodology Measures (and What It Does Not)
- ### Survivorship Bias Acknowledgment
- ### Held-Out Definition
- ### Fixture Schema
- ### Scoring Discipline
- ### Baseline Definition
- ### Threshold-Setting Methodology
- ### Decision Criteria (Normative)
- ### Decision Owner and SLA
- ### Re-Baseline Cadence
- ### CI Cost Projection
- ### Worked Example: Security Agent v2 Calibration (halt-due-to-flakiness)
- ### Cadence Trigger After This Spike
- ## Considered Options
- ### Option 1: LLM-as-Judge as the Gated Signal
- ### Option 2: Golden Corpus / Large-N Evaluation
- ### Option 3: Single Global Delta Threshold
- ### Option 4: Skip Baseline; Score Against Absolute Target
- ### Option 5: Agent-vs-Baseline With Deterministic Recall (Chosen)
- ## Consequences
- ### Positive
- ### Negative
- ### Neutral
- ## Confirmation
- ### Enforced (automated gates)
- ### Not Enforced (architect / reviewer judgment)
- ## Reversibility Assessment
- ## Vendor Lock-in Assessment
- ### Lock-in Indicators
- ### Exit Strategy
- ### Accepted Trade-offs
- ## Impact on Dependent Components
- ## Related Decisions
- ## References

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/architecture/ADR-058-agent-eval-discipline.md:97 · References `_scoring_engine.py` without the `scripts/eval/` directory path prefix.
- doc-drift · .agents/architecture/ADR-058-agent-eval-discipline.md:424 · References `_anthropic_api.py` without the `scripts/eval/` directory path prefix.
- internal-contradiction · .agents/architecture/ADR-058-agent-eval-discipline.md:3,9 · Frontmatter records `status: proposed` while simultaneously asserting `implemented: true`.

## Observations
Documents a critical real-world failure mode in LLM agent evaluation: the v1 spike produced two contradictory and invalid verdicts (+8.3pp `keep-as-audit` and -25.0pp `scrap`) because the output-shape contract was asymmetric (only the baseline was instructed on the required verdict tokens, causing a structural 0/30 shutout for the agent). Fixing this symmetry in v2 via `OUTPUT_SHAPE_SUFFIX` reversed the delta to +38.1pp, but the run terminated with `halt-due-to-flakiness` because 40% of fixtures (threshold 30%) exhibited non-deterministic verdicts at `temperature=0` across runs. The ADR clearly delineates content evaluation (ADR-058) from form-factor evaluation (ADR-075) and regression testing (ADR-057).

## Context cost
40543 bytes, ~9800 tokens. When factoring in the evaluation harness scripts (`scripts/eval/eval-agent-vs-baseline.py`, `scripts/eval/_report_aggregator.py`, `scripts/eval/_anthropic_api.py`, `scripts/eval/_scoring_engine.py`), diagnostic reviews (`.agents/critique/SPIKE-1854-methodology-diagnosis.md`), and report outputs (`evals/security-spike/reports/20260503T182553Z-eaa08f8d/report.json`), total referenced context exceeds 146,000 bytes (~36,000 tokens).
