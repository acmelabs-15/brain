---
package: rjm
path: .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md
type: agent
bytes: 4457
unit: inv-rjm-6
deprecated: false
in_scope_via: inv-rjm-6
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md, sha256: 82e2ecb7c8ae53abc174de2e100a947a9d28c0bafb8bcc7fc9861eda5547a846}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md

## Purpose — required, verbatim
> "The ai-agents system has implicit quality checks through the critic agent, but no formalized evaluation loop:" — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:24 (no explicit purpose statement)

## Design intent — required
Establishes the Evaluator-Optimizer pattern for systematic quality gating of significant agent artifacts (PRDs, technical specifications, code implementations). Replaces unstandardized single-pass generation and subjective review with a formalized, bounded optimization loop: a generator produces an artifact, an evaluator scores it against a 4-dimension rubric (Completeness 25%, Correctness 25%, Clarity 25%, Actionability 25%), and if below threshold (>= 70%), returns structured feedback for regeneration. Enforces a strict hard cap of 3 iterations before escalating to the user, preventing infinite refinement loops while ensuring consistent output baselines.

## Phase — required
cross-phase

## Inputs — required
Implicit quality check limitations and single-pass generation constraints (.agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:24-30), ruvnet/claude-flow SPARC methodology research (.agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:31-37), Anthropic evaluator-optimizer pattern guidance (.agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:38, 138), and tracker items Epic #183 and Issue #172 (.agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:135-136).

## Outputs — required
The evaluator-optimizer quality gate mandate (.agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:42-50), the 4-dimension evaluation rubric specification (.agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:46, 88-96), the iterative loop protocol algorithm with escalation rule (.agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:97-109), and the output type evaluation applicability matrix (.agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:118-126).

## Invokes — required
- doc ADR-007 — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:129
- doc ADR-009 — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:130
- doc consistency-protocol.md — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:131
- doc enhancement-PROJECT-PLAN.md — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:139

## Invoked by — required
- agent README — .agents/architecture/README.md:101
- agent ADR-023 — .agents/architecture/ADR-023-quality-gate-prompt-testing.md:182
- agent ADR-032 — .agents/architecture/ADR-032-ears-requirements-syntax.md:189
- agent ADR-057 — .agents/architecture/ADR-057-prompt-behavioral-evaluation.md:301
- agent ADR-058 — .agents/architecture/ADR-058-agent-eval-discipline.md:447

## Concepts named — required, verbatim
- `ADR-010` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:2 — defined here
- `Quality Gates` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:12 — defined here
- `Evaluator-Optimizer Pattern` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:12 — defined here
- `critic` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:24 — used here
- `SPARC methodology` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:31 — used here
- `Generator-Evaluator-Regenerate loop` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:35 — defined here
- `Evaluation rubric` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:46 — defined here
- `Completeness` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:46 — defined here
- `Correctness` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:46 — defined here
- `Clarity` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:46 — defined here
- `Actionability` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:46 — defined here
- `Structured feedback` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:47 — defined here
- `Regeneration limit` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:48 — defined here
- `Termination criteria` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:49 — defined here
- `independent-thinker` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:84 — used here
- `Loop Protocol` — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:97 — defined here

## Structure
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
none

## Observations
Frontmatter designates `implemented: false`, indicating that while accepted as binding architectural guidance, the formalized 4-dimension scoring loop with hard iteration caps remained an architectural specification rather than automated repository tooling. Downstream architecture records (ADR-023, ADR-051, ADR-057, ADR-058, ADR-087) consistently invoke ADR-010 as the primary authority for automated quality gates, rubric scoring thresholds, and iteration limits.

## Context cost
4,457 bytes, ~1,150 tokens.
