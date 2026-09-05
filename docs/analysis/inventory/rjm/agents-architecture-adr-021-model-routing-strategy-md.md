---
package: rjm
path: .agents/architecture/ADR-021-model-routing-strategy.md
type: agent
bytes: 8699
unit: inv-rjm-10
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-021-model-routing-strategy.md, sha256: 5d49be2ab0d07492878d0fc5c63a6f45c604052a7d3ad92aa170730b0b94ba0e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-021-model-routing-strategy.md

## Purpose — required, verbatim
> "Adopt an **evidence-aware, tiered model routing strategy** that routes AI review requests to specialized models based on:" — .agents/architecture/ADR-021-model-routing-strategy.md:54

## Design intent — required
Defines an evidence-aware, tiered model routing strategy for automated PR review and issue triage that balances review fidelity against execution cost. Maps distinct prompt categories to appropriate model tiers—strict JSON triage to fast extraction models (`gpt-5-mini`, `claude-haiku-4.5`), general review/synthesis to balanced reasoning models (`claude-sonnet-4.5`), security gates to maximum reasoning depth (`claude-opus-4.5`), and code evidence/traceability to code specialists (`gpt-5.1-codex-max`, `gpt-5.1-codex`). Formulates the core Evidence Sufficiency Principle: when PR context is incomplete or truncated to summary-only mode, models are strictly forbidden from issuing a PASS verdict, shifting unprovable PASS verdicts into acceptable false WARNs while delivering a 36% projected cost reduction versus an all-Opus baseline.

## Phase — required
none

## Inputs — required
PR diff contexts (full diff, partial diff, or summary mode when exceeding `MAX_DIFF_LINES`), prompt categories (JSON extraction, code review, security gate, synthesis), confidence scores, and borderline review verdicts.

## Outputs — required
Model routing assignments, escalation triggers (escalating to `claude-opus-4.5` when confidence <70% or on borderline verdicts), fallback selections, and evidence sufficiency constraints restricting review verdicts.

## Invokes — required
- doc .github/actions/ai-review/action.yml — .agents/architecture/ADR-021-model-routing-strategy.md:24
- doc ../../governance/AI-REVIEW-MODEL-POLICY.md — .agents/architecture/ADR-021-model-routing-strategy.md:162
- doc ADR-010 — .agents/architecture/ADR-021-model-routing-strategy.md:174
- doc ADR-024 — .agents/architecture/ADR-021-model-routing-strategy.md:175
- doc ADR-020 — .agents/architecture/ADR-021-model-routing-strategy.md:176
- doc ADR-019-debate-log.md — .agents/architecture/ADR-021-model-routing-strategy.md:190

## Invoked by — required
- doc .agents/architecture/README.md — .agents/architecture/README.md:108

## Concepts named — required, verbatim
- `MAX_DIFF_LINES` — .agents/architecture/ADR-021-model-routing-strategy.md:30 — used here
- `summary mode` — .agents/architecture/ADR-021-model-routing-strategy.md:30 — defined here
- `false PASS` — .agents/architecture/ADR-021-model-routing-strategy.md:34 — defined here
- `tiered model routing strategy` — .agents/architecture/ADR-021-model-routing-strategy.md:54 — defined here
- `gpt-5-mini` — .agents/architecture/ADR-021-model-routing-strategy.md:63 — used here
- `claude-haiku-4.5` — .agents/architecture/ADR-021-model-routing-strategy.md:64 — used here
- `claude-sonnet-4.5` — .agents/architecture/ADR-021-model-routing-strategy.md:68 — used here
- `claude-opus-4.5` — .agents/architecture/ADR-021-model-routing-strategy.md:69 — used here
- `gpt-5.1-codex-max` — .agents/architecture/ADR-021-model-routing-strategy.md:77 — used here
- `gpt-5.1-codex` — .agents/architecture/ADR-021-model-routing-strategy.md:78 — used here
- `Evidence Sufficiency Principle` — .agents/architecture/ADR-021-model-routing-strategy.md:81 — defined here
- `false WARN` — .agents/architecture/ADR-021-model-routing-strategy.md:113 — defined here
- `CONTEXT_MODE` — .agents/architecture/ADR-021-model-routing-strategy.md:165 — used here
- `copilot-model` — .agents/architecture/ADR-021-model-routing-strategy.md:166 — used here
- `circuit breaker` — .agents/architecture/ADR-021-model-routing-strategy.md:167 — used here

## Structure
- # ADR-021: AI Review Model Routing Strategy — .agents/architecture/ADR-021-model-routing-strategy.md:12
- ## Status — .agents/architecture/ADR-021-model-routing-strategy.md:14
- ## Date — .agents/architecture/ADR-021-model-routing-strategy.md:18
- ## Context — .agents/architecture/ADR-021-model-routing-strategy.md:22
- ### The Problem — .agents/architecture/ADR-021-model-routing-strategy.md:26
- ### Core Tensions — .agents/architecture/ADR-021-model-routing-strategy.md:36
- ### Scope — .agents/architecture/ADR-021-model-routing-strategy.md:42
- ## Decision — .agents/architecture/ADR-021-model-routing-strategy.md:52
- ### Model Routing Strategy — .agents/architecture/ADR-021-model-routing-strategy.md:60
- ### Evidence Sufficiency Principle — .agents/architecture/ADR-021-model-routing-strategy.md:81
- ### Cost Impact — .agents/architecture/ADR-021-model-routing-strategy.md:91
- ## Rationale — .agents/architecture/ADR-021-model-routing-strategy.md:102
- ### Why Tiered Routing? — .agents/architecture/ADR-021-model-routing-strategy.md:104
- ### Why Not Alternatives? — .agents/architecture/ADR-021-model-routing-strategy.md:119
- ## Alternatives Considered — .agents/architecture/ADR-021-model-routing-strategy.md:127
- ## Consequences — .agents/architecture/ADR-021-model-routing-strategy.md:137
- ### Positive — .agents/architecture/ADR-021-model-routing-strategy.md:139
- ### Negative — .agents/architecture/ADR-021-model-routing-strategy.md:147
- ### Neutral — .agents/architecture/ADR-021-model-routing-strategy.md:155
- ## Implementation — .agents/architecture/ADR-021-model-routing-strategy.md:160
- ## Related Decisions — .agents/architecture/ADR-021-model-routing-strategy.md:172
- ## References — .agents/architecture/ADR-021-model-routing-strategy.md:179
- ## Debate History — .agents/architecture/ADR-021-model-routing-strategy.md:188
- ## Status Transition History — .agents/architecture/ADR-021-model-routing-strategy.md:199

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-021-model-routing-strategy.md:190 · References debate log `../critique/ADR-019-debate-log.md` which does not exist in repository (documented in scripts/validation/check_adr_links_baseline.txt).
- missing-path · .agents/architecture/ADR-021-model-routing-strategy.md:162 · Relative link `../../governance/AI-REVIEW-MODEL-POLICY.md` resolves to non-existent `governance/AI-REVIEW-MODEL-POLICY.md` (actual file is located at `.agents/governance/AI-REVIEW-MODEL-POLICY.md`).

## Observations
Establishes the critical principle that insufficient evidence forbids PASS, converting unprovable PASS verdicts to acceptable false WARNs. Uses model tier assignments spanning future hypothetical models (`gpt-5-mini`, `claude-opus-4.5`, `gpt-5.1-codex-max`) with explicit multi-agent consensus tracking (Sessions 86-90 debate across 6 agent personas).

## Context cost
8699 bytes, ~2000 tokens. Loads no external files.
