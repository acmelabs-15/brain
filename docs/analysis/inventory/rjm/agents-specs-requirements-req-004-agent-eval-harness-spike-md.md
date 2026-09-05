---
package: rjm
path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md
type: agent
bytes: 20754
unit: inv-rjm-62
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md, sha256: d4d4d47d8635f0c96a17abe1ff50382189eea4aab68a7a7e39bf691d033c6e0a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md

## Purpose — required, verbatim
> "The project has no mechanism that proves a given agent's context recipe produces measurably better outputs than the same model with a generic prompt." — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:20

## Design intent — required
The rjm repository developed specialized prompts and agents (such as the security agent) but had no empirical, reproducible framework to prove that specialized agent context prompts produce measurably better outputs than the underlying foundation model with a generic baseline prompt. REQ-004 specifies a spike for the security agent to build and validate an agent-versus-baseline evaluation harness (`eval-agent-vs-baseline.py`). The specification establishes rigorous methodological standards: deterministic scoring on held-out synthetic and paraphrased fixtures (explicitly rejecting LLM-as-judge as the gated decision signal), partial-failure and flakiness tracking with bootstrap confidence intervals, and normative decision criteria for whether to graduate the eval to CI, retain it as an offline audit, or scrap the eval or methodology. It also contracts the delivery of ADR-058 to codify the evaluation discipline across the architecture. Without this specification, agent prompt engineering would remain unvalidated tribal knowledge based on subjective impression rather than empirical behavioral measurement.

## Phase — required
rjm:spec

## Inputs — required
- User stories and problem context: US-1 (deterministic eval comparing agent prompt vs. generic prompt), US-2 (architect decision on ADR among graduate-to-CI, keep-as-audit, scrap), and US-3 (future agent author methodology application) — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:24-26
- Python API and evaluation utilities: `load_api_key()` and retry logic from `scripts/eval/_anthropic_api.py` and token estimation from `scripts/eval/_eval_common.py` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:299-300
- Scenario corpus baseline: bootstrap test scenarios from `tests/evals/security-scenarios.json` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:301
- Cross-referenced architectural decisions: prompt behavioral evaluation principles from `ADR-057` (`.agents/architecture/ADR-057-prompt-behavioral-evaluation.md`) — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:302,319
- Governance and security constraints: `.claude/rules/security.md` and `.agents/governance/SECURITY-REVIEW-PROTOCOL.md` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:303
- Design and task specifications: `.agents/specs/design/DESIGN-004-agent-eval-harness-spike.md` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:316 and `.agents/specs/tasks/TASK-004-agent-eval-harness-spike.md` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:317
- Issue tracker origin: rjmurillo/ai-agents#1854 under epic `SPIKE-1854` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:8

## Outputs — required
- Per-run JSONL persistence records at `evals/security-spike/runs/<RUN_ID>/runs.jsonl` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:46
- Formatted Markdown evaluation report at `evals/security-spike/reports/<RUN_ID>/REPORT.md` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:61,66
- Sidecar JSON evaluation report at `report.json` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:67
- Normative recommendation verdict: `halt-due-to-flakiness` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:249
- Architectural decision record documenting eval discipline at `.agents/architecture/ADR-NNN-agent-eval-discipline.md` (merged as ADR-058) — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:25,267,272
- Relocated archive artifacts upon scrap outcome at `evals/_archive/security-spike-<RUN_ID>/` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:220-221

## Invokes — required
- script eval-agent-vs-baseline.py — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:220
- script _anthropic_api.py — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:299
- script _eval_common.py — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:300
- file security-scenarios.json — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:301
- doc security.md — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:303
- doc SECURITY-REVIEW-PROTOCOL.md — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:303
- doc DESIGN-004-agent-eval-harness-spike.md — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:316
- doc TASK-004-agent-eval-harness-spike.md — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:317
- doc ADR-057-prompt-behavioral-evaluation.md — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:319

## Invoked by — required
- doc README.md — evals/README.md:44
- doc ADR-058-agent-eval-discipline.md — .agents/architecture/ADR-058-agent-eval-discipline.md:452
- doc DESIGN-004-agent-eval-harness-spike.md — .agents/specs/design/DESIGN-004-agent-eval-harness-spike.md:450
- doc TASK-004-agent-eval-harness-spike.md — .agents/specs/tasks/TASK-004-agent-eval-harness-spike.md:420

## Concepts named — required, verbatim
- `Agent Eval Harness Spike` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:4 — defined here
- `held-out fixture set` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:40 — defined here
- `schemaVersion` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:48 — used here
- `agent` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:49 — used here
- `baseline` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:49 — used here
- `paired-bootstrap CI` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:61 — defined here
- `dry-run mode` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:116 — defined here
- `Idempotency guard` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:135 — defined here
- `DuplicateRunError` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:146 — defined here
- `flakiness gate` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:154 — defined here
- `SchemaVersionError` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:191 — defined here
- `differential diagnosis` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:211 — defined here
- `graduate-to-CI` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:218 — defined here
- `keep-as-audit` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:219 — defined here
- `scrap` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:220 — defined here
- `architect` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:223 — used here
- `Tier 3 architecture review` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:223 — used here
- `LLM-as-judge` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:245 — used here
- `STRIDE` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:245 — used here
- `halt-due-to-flakiness` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:249 — defined here
- `survivorship bias` — .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:286 — used here

## Structure
- REQ-004: Agent Eval Harness Spike
- Context
- Requirement Clusters
- Cluster A: Spike Runner: Record, Reproduce, Report {#req-cluster-a}
- AC-1: Per-run record {#req-ac1}
- AC-2: Markdown + JSON report {#req-ac2}
- AC-3: Partial-failure accounting {#req-ac3}
- AC-7: Schema versioning {#req-ac7}
- AC-8: Dry-run mode {#req-ac8}
- AC-9: Idempotency guard {#req-ac9}
- AC-10: Reproducibility / flakiness gate {#req-ac10}
- Cluster B: Fixture Validation {#req-cluster-b}
- AC-4: Corpus integrity {#req-ac4}
- Cluster C: Spike Report and Decision {#req-cluster-c}
- AC-5: Decision-anchored report {#req-ac5}
- Cluster D: ADR Methodology Documentation {#req-cluster-d}
- AC-6: ADR: eval discipline {#req-ac6}
- Rationale
- Dependencies
- Out of Scope
- Related Documents

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:25 · Cites `.agents/architecture/ADR-NNN-agent-eval-discipline.md` placeholder rather than the merged document path `.agents/architecture/ADR-058-agent-eval-discipline.md` (also at lines 267 and 272).
- missing-path · .agents/specs/requirements/REQ-004-agent-eval-harness-spike.md:25 · Unresolved placeholder path `.agents/architecture/ADR-NNN-agent-eval-discipline.md` does not exist on disk as written (superseded by merged ADR-058).

## Observations
- Establishes a rigorous empirical standard for evaluating agent prompt engineering against baseline model performance using paired-bootstrap confidence intervals and deterministic scoring.
- Explicitly rejects LLM-as-judge as a gated decision signal, restricting it strictly to non-gated advisory sidecar analysis to maintain determinism and prevent evaluative circularity.
- Formalizes four distinct operational outcomes ({`graduate-to-CI`, `keep-as-audit`, `scrap`, `halt-due-to-flakiness`}) with explicit operational consequences for code and archive directories based on measured effect sizes and flakiness.

## Context cost
20754 bytes, ~4800 tokens. Standalone specification referencing DESIGN-004, TASK-004, ADR-057, and eval runner scripts.
