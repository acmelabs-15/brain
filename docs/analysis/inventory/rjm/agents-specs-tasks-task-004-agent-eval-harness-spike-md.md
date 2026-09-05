---
package: rjm
path: .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md
type: agent
bytes: 27222
unit: inv-rjm-63
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md, sha256: 5760a41f262c0ac1fd5a7496c95cd0b37005dc15a36ac52de32b931cb045d720}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md

## Purpose — required, verbatim
> "Build and execute a one-agent eval harness that measures whether the `security` agent prompt outperforms a generic baseline on a held-out fixture corpus. Produce a report with signed recall delta and CI. Write the ADR that encodes the methodology for future agent authors." — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:25

## Design intent — required
Defines the detailed implementation task breakdown, acceptance criteria traceability matrix, commit budgets, and testing protocols for constructing a reproducible, statistically rigorous evaluation harness (`eval-agent-vs-baseline.py`). It specifies seven sub-tasks (T4-1 through T4-7) to build fixture schemas, API retry and idempotency layers, paired bootstrap confidence intervals (n=10,000), a 10-fixture held-out corpus with provenance validation, execution reporting, architecture decision record codification, and human-in-the-loop decision routing (`graduate-to-CI`, `keep-as-audit`, `scrap`). Without this specification, agent evaluation would lack deterministic scoring standards, statistical verification, and disciplined commit budgeting, risking unverified prompt regressions and arbitrary eval methodology.

## Phase — required
none

## Inputs — required
- `DESIGN-004: Agent Eval Harness Spike` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:21
- Requirements REQ-004 AC-1 through AC-10 — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:31
- `.agents/specs/requirements/REQ-004-agent-eval-harness-spike.md` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:420
- `.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:421
- `.agents/architecture/ADR-057-prompt-behavioral-evaluation.md` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:423
- Pricing constants `MODEL_PRICING_RATES_USD_PER_1K_TOKENS` and `PRICING_RATE_AS_OF` from `scripts/eval/_eval_common.py` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:62
- Environment variable `ANTHROPIC_API_KEY` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:109

## Outputs — required
- `scripts/eval/eval-agent-vs-baseline.py` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:58
- `scripts/eval/_eval_agent_types.py` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:59
- `scripts/eval/_scoring_engine.py` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:60
- `scripts/eval/_plan_runner.py` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:61
- `scripts/eval/_eval_api_adapter.py` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:96
- `scripts/eval/_run_persistence.py` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:97
- `scripts/eval/_report_aggregator.py` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:134
- `scripts/eval/_report_writer.py` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:135
- `tests/evals/test_eval_agent_vs_baseline.py` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:99
- `evals/README.md` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:175
- `evals/security-spike/fixtures/F001.json` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:176
- `evals/security-spike/fixtures/F010.json` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:204
- `evals/security-spike/fixtures/README.md` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:194
- `evals/security-spike/runs/.gitkeep` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:205
- `evals/security-spike/runs/<RUN_ID>/runs.jsonl` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:241
- `evals/security-spike/reports/<RUN_ID>/report.json` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:242
- `evals/security-spike/reports/<RUN_ID>/REPORT.md` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:243
- `.agents/architecture/ADR-NNN-agent-eval-discipline.md` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:274
- Recommendation verdict (`graduate-to-CI`, `keep-as-audit`, `scrap`) — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:322

## Invokes — required
- script eval-agent-vs-baseline.py — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:75
- script pre_pr.py — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:303
- agent security — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:75
- agent implementer — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:12
- doc REQ-004-agent-eval-harness-spike.md — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:420
- doc DESIGN-004-agent-eval-harness-spike.md — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:421
- doc ADR-057-prompt-behavioral-evaluation.md — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:423

## Invoked by — required
- doc evals/README.md — evals/README.md:46
- doc evals/security-spike/fixtures/README.md — evals/security-spike/fixtures/README.md:111

## Concepts named — required, verbatim
- `AC Traceability Matrix` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:29 — defined here
- `ScoringEngine` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:60 — defined here
- `RegexScorer` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:60 — defined here
- `VerdictScorer` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:60 — defined here
- `PlanRunner` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:61 — defined here
- `SchemaVersionError` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:79 — defined here
- `AnthropicAPIAdapter` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:96 — defined here
- `RunPersistence` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:97 — defined here
- `DuplicateRunError` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:104 — defined here
- `ReportAggregator` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:134 — defined here
- `ReportWriter` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:135 — defined here
- `Pilot gate` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:181 — defined here
- `agent-discriminating fixtures` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:221 — defined here
- `Irreversibility warning` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:236 — defined here
- `graduate-to-CI` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:323 — defined here
- `keep-as-audit` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:324 — defined here
- `scrap` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:325 — defined here
- `Scrap-path archival` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:331 — defined here
- `SLA fallback` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:346 — defined here
- `Commit Budget` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:368 — used here

## Structure
- `# TASK-004: Agent Eval Harness Spike` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:17
- `## Design Context` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:19
- `## Objective` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:23
- `## AC Traceability Matrix` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:29
- `## Sub-Tasks` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:48
- `### T4-1: Scaffolding, Fixture Schema, and Assertion Strategy {#t4-1}` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:50
- `### T4-2: Runner, Retry, and Idempotency {#t4-2}` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:88
- `### T4-3: Reporting (Recall, Bootstrap CI, Distribution) {#t4-3}` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:126
- `### T4-4: Corpus Build (10 Fixtures with Provenance) {#t4-4}` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:162
- `#### T4-4a: fixtures part 1 + landscape README {#t4-4a}` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:168
- `#### T4-4b: fixtures part 2 + corpus README {#t4-4b}` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:183
- `#### T4-4c: fixtures part 3 + directory marker {#t4-4c}` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:196
- `### T4-5: Execute Spike and Write Report {#t4-5}` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:232
- `### T4-6: Write ADR {#t4-6}` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:266
- `### T4-7: Decide Graduate-to-CI vs. Audit vs. Scrap {#t4-7}` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:309
- `## Sequencing and Dependencies` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:352
- `## Commit Budget (AGENTS.md: ≤5 files, ≤20 commits/PR)` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:368
- `## Testing Requirements` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:387
- `## Files Affected (Summary)` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:396
- `## Related Documents` — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:418

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:274 · References placeholder path `.agents/architecture/ADR-NNN-agent-eval-discipline.md`, which was subsequently realized as `ADR-058-agent-eval-discipline.md`.

## Observations
- Demonstrates rjm's rigorous 3-tier specification hierarchy (REQ -> DESIGN -> TASK).
- Enforces strict commit budgets: the AGENTS.md rule (<=5 files, <=20 commits per PR) is respected by partitioning corpus creation (T4-4) across three distinct commits (T4-4a, T4-4b, T4-4c).
- Rejects LLM-as-judge for the gated path in favor of deterministic assertions and paired bootstrap statistical testing (n=10,000).
- Incorporates an operational SLA fallback: if architect review is inactive for 5 business days, default to `keep-as-audit` with `sla-fallback` flag rather than blocking or graduating prematurely.

## Context cost
27222 bytes (~6800 tokens).
