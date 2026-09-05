---
package: rjm
path: .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md
type: agent
bytes: 4457
unit: inv-rjm-6
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md, sha256: 82e2ecb7c8ae53abc174de2e100a947a9d28c0bafb8bcc7fc9861eda5547a846}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md

## Purpose — required, verbatim
> "All significant outputs MUST pass through a formalized evaluator-optimizer loop." — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:42

## Design intent — required
ADR-010 defines a formal, bounded Evaluator-Optimizer loop for all high-impact agent outputs (such as PRDs, specifications, and code implementations) to replace single-pass generation and subjective binary reviews. Drawing from the SPARC methodology and Anthropic's evaluator-optimizer pattern, the architecture specifies an explicit four-part weighted scoring rubric (Completeness 25%, Correctness 25%, Clarity 25%, Actionability 25%), actionable structured feedback, an objective acceptance threshold (score >= 70%), and a strict cap of 3 iterations before escalating to the user. Without it, agent outputs suffer from uneven quality, vague improvement feedback, and the risk of runaway regeneration loops.

## Phase — required
cross-phase

## Inputs — required
Generated candidate outputs (PRD/Spec, code implementation), the four-part evaluation rubric, feedback history across iterations, and evaluation criteria.

## Outputs — required
Numerical quality scores (0-100% total, 0-25 per dimension), structured feedback with specific improvement directives, acceptance decisions (score >= 70%), or escalation packages to human users (iterations >= 3).

## Invokes — required
- doc ADR-007 — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:129
- doc ADR-009 — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:130
- doc .agents/governance/consistency-protocol.md — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:131
- doc .agents/archive/planning/enhancement-PROJECT-PLAN.md — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:139

## Invoked by — required
- doc ADR-010 — .agents/architecture/README.md:101
- agent ADR-010 — .agents/architecture/ADR-009-parallel-safe-multi-agent-design.md:116

## Concepts named — required, verbatim
- `Quality Gates with Evaluator-Optimizer Pattern` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:12 — defined here
- `critic agent` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:24 — used here
- `Single-pass generation` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:26 — used here
- `Binary outcomes` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:27 — used here
- `SPARC methodology` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:31 — used here
- `Generator-Evaluator-Regenerate loop` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:35 — defined here
- `evaluator-optimizer pattern` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:38 — used here
- `evaluator-optimizer loop` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:42 — defined here
- `Evaluation rubric` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:46 — defined here
- `Completeness` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:46 — defined here
- `Correctness` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:46 — defined here
- `Clarity` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:46 — defined here
- `Actionability` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:46 — defined here
- `Structured feedback` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:47 — defined here
- `Regeneration limit` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:48 — defined here
- `Termination criteria` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:49 — defined here
- `independent-thinker agent` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:84 — used here
- `Loop Protocol` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:97 — defined here
- `When to Apply` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:118 — defined here

## Structure
- Frontmatter metadata (id, status, date, decision-makers, supersedes, superseded-by, explainer, implemented) — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:1-10
- # ADR-010: Quality Gates with Evaluator-Optimizer Pattern — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:12
- ## Status — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:14
- ## Date — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:18
- ## Context — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:22
- ## Decision — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:40
- ## Rationale — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:51
- ### Alternatives Considered — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:53
- ### Trade-offs — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:61
- ## Consequences — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:67
- ### Positive — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:69
- ### Negative — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:76
- ### Neutral — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:82
- ## Implementation Notes — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:86
- ### Evaluation Rubric — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:88
- ### Loop Protocol — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:97
- ### Phase 5 Implementation Order — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:110
- ### When to Apply — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:118
- ## Related Decisions — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:127
- ## References — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:133

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:9 · frontmatter marks `implemented: false` despite acceptance status in README index, indicating the formalized loop was adopted conceptually but never fully implemented into automated pipeline tooling.

## Observations
- Defines the 4-part evaluation rubric (Completeness 25%, Correctness 25%, Clarity 25%, Actionability 25%) and explicit iteration ceiling (max 3 iterations) that became foundational to agent review gates.
- Contextual application table distinguishes high-impact artifacts requiring evaluation (PRD/Spec, Code implementation) from lightweight tasks (Simple queries).

## Context cost
4457 bytes, ~1100 tokens.
