---
package: rjm
path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md
type: agent
bytes: 19923
unit: inv-rjm-60
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md, sha256: c78ffe7b595e3503e943096d96075d95ee31b4e6051ae84f07721549cf829b38}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md

## Purpose — required, verbatim
> "A new sibling runner `scripts/eval/eval-agent-vs-baseline.py` executes a held-out fixture corpus against two prompt variants (agent vs. baseline) at temperature=0 across N=3 run indices." — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:28
(no explicit purpose statement; quoted from Design Overview)

## Design intent — required
Specifies the architecture, data flow, component decomposition, schema contracts, persistence layout, and statistical evaluation formulas for the `eval-agent-vs-baseline.py` offline spike harness. Solves the problem of empirically demonstrating whether specialized agent system prompts (specifically starting with the security agent) yield statistically significant recall improvements over an unspecialized, naive baseline prompt on deterministic test fixtures. Without this design, agent prompt development would lack empirical rigor, reproducible evaluation pipelines, and standardized statistical tooling (paired-bootstrap confidence intervals, flakiness detection), risking unverified prompt regressions and invalid claims of specialization efficacy.

## Phase — required
none

## Inputs — required
- Requirements document `.agents/specs/requirements/REQ-004-agent-eval-harness-spike.md` (.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:21-24, 450)
- Fixture corpus JSON files under `evals/security-spike/fixtures/*.json` adhering to `schemaVersion: 1` (.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:77-81, 341-344)
- Agent system prompt under evaluation (`templates/agents/security.shared.md`) (.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:247)
- Deliberately naive baseline prompt (.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:371)
- Model API credentials via `ANTHROPIC_API_KEY` loaded via `_anthropic_api.load_api_key()` (.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:195, 395)
- Prior art modules `scripts/eval/_anthropic_api.py` and `scripts/eval/_eval_common.py` (.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:28, 382-383)

## Outputs — required
- Evaluation execution runs written to `evals/security-spike/runs/<RUN_ID>/runs.jsonl` (.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:232, 347)
- Aggregated machine-readable report `evals/security-spike/reports/<RUN_ID>/report.json` (.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:43, 327, 350)
- Human-readable Markdown report `evals/security-spike/reports/<RUN_ID>/REPORT.md` (.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:43, 327, 351)
- Structured execution and error logs emitted to `stderr` (.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:199, 373)
- Task and ADR deliverables: `.agents/specs/tasks/TASK-004-agent-eval-harness-spike.md` and `.agents/architecture/ADR-NNN-agent-eval-discipline.md` (later ADR-058) (.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:11, 445, 451)

## Invokes — required
- script scripts/eval/eval-agent-vs-baseline.py — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:28
- script _anthropic_api — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:28
- script _eval_common — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:28
- script eval-prompt-change.py — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:30
- script eval-agents.py — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:30
- doc ADR-057 — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:30
- file tests/evals/security-scenarios.json — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:386
- doc .agents/architecture/ADR-057-prompt-behavioral-evaluation.md — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:387
- doc .claude/rules/security.md — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:388
- doc .agents/governance/SECURITY-REVIEW-PROTOCOL.md — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:389
- doc .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:450
- doc .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:451

## Invoked by — required
- doc .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:316
- doc .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:421
- doc .agents/architecture/ADR-058-agent-eval-discipline.md — .agents/architecture/ADR-058-agent-eval-discipline.md:453
- doc evals/README.md — evals/README.md:45
- doc evals/security-spike/fixtures/README.md — evals/security-spike/fixtures/README.md:110

## Concepts named — required, verbatim
- `DESIGN-004` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:3 — defined here
- `Agent Eval Harness Spike` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:4 — defined here
- `REQ-004` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:8 — used here
- `ADR-057` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:10 — used here
- `ADR-NNN-agent-eval-discipline` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:11 — defined here
- `spec-agent` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:12 — used here
- `FixtureValidator` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:28 — defined here
- `PlanRunner` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:28 — defined here
- `ScoringEngine` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:28 — defined here
- `RunPersistence` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:28 — defined here
- `AnthropicAPIAdapter` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:28 — defined here
- `ReportAggregator` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:28 — defined here
- `ReportWriter` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:28 — defined here
- `AssertionKind` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:28 — defined here
- `write-temp-then-rename` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:39 — used here
- `Strategy` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:100 — used here
- `RegexScorer` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:148 — defined here
- `VerdictScorer` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:149 — defined here
- `AstScorer` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:151 — defined here
- `ExecutionPlan` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:168 — defined here
- `circuit-breaker` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:192 — used here
- `APICallResult` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:205 — defined here
- `RunRecord` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:238 — defined here
- `Paired-bootstrap CI` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:274 — used here
- `flakiness` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:275 — defined here
- `Report` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:278 — defined here
- `graduate-to-CI` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:301 — defined here
- `keep-as-audit` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:310 — defined here
- `scrap` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:310 — defined here
- `sla-fallback` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:312 — defined here
- `deliberately naive` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:371 — used here
- `SECURITY-REVIEW-PROTOCOL` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:389 — used here
- `TASK-004` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:451 — used here

## Structure
- `# DESIGN-004: Agent Eval Harness Spike` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:17
- `## Requirements Addressed` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:19
- `## Design Overview` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:26
- `## Data Flow` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:32
- `## Component Architecture` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:57
- "### 5.1 CLI Entry Point: `eval-agent-vs-baseline.py`" — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:59
- `### 5.2 FixtureValidator` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:72
- `### 5.3 Assertion Interface and ScoringEngine (Strategy over AssertionKind)` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:100
- `### 5.3a PlanRunner` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:155
- `### 5.4 AnthropicAPIAdapter` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:190
- `### 5.5 RunPersistence` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:227
- `### 5.6 ReportAggregator` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:264
- `### Schema notes` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:308
- `### 5.7 ReportWriter` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:325
- `## Persistence Layout` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:336
- `## Technology Decisions` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:359
- `## Cross-References to Existing Modules` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:378
- `## Security Considerations` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:393
- `## Failure Modes` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:404
- `## Testing Strategy` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:421
- `## Open Questions` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:436
- `## Related Documents` — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:448

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- `missing-path` · .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:11,445 · References placeholder path '.agents/architecture/ADR-NNN-agent-eval-discipline.md (to be created)', which was not created under that name (subsequently created as ADR-058-agent-eval-discipline.md).

## Observations
- Demonstrates rigorous architectural specification practices for offline agent evaluation, featuring formal data flow diagrams, typed dataclasses, and strict JSON schemas (`schemaVersion: 1`).
- Implements the Strategy pattern across `AssertionKind` to support future assertion types (e.g. `AstScorer`, `test_pass`) without altering fixture schemas or runner logic.
- Utilizes the `write-temp-then-rename` atomic persistence pattern and composite-key deduplication `(fixture_id, variant, run_index)` in `RunPersistence` to prevent corrupted records or duplicate runs.
- Rejects stochastic LLM-as-judge scoring in favor of deterministic assertions and paired-bootstrap confidence intervals (n=10,000 resamples at 95% CI) evaluated against a naive baseline prompt at temperature=0.

## Context cost
19923 bytes, ~4980 tokens. Loads no external files directly when read as a technical specification.
