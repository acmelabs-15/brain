---
package: rjm
path: .agents/architecture/ADR-002-agent-model-selection-optimization.md
type: agent
bytes: 10216
unit: inv-rjm-4
deprecated: false
in_scope_via: inv-rjm-4
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-002-agent-model-selection-optimization.md, sha256: 3f22e591bc1ac0564cd0434b45da7d90789c63330d28a8fdf577575062732055}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-04 quote-check+coverage
---

# .agents/architecture/ADR-002-agent-model-selection-optimization.md

## Purpose — required, verbatim
> "All 18 agents in the ai-agents repository were configured to use Claude Opus (16 agents) or Claude Sonnet (2 agents) without systematic evaluation of actual task requirements. This created several issues:" — .agents/architecture/ADR-002-agent-model-selection-optimization.md:73 (no explicit purpose statement)

## Design intent — required
Documents the original 5-dimension scoring framework (reasoning depth, latency sensitivity, error cost, volume, and tool complexity) used to optimize model assignments across 18 agents, transitioning 9 agents from Opus to Sonnet for an estimated 40-50% cost reduction. It also includes the comprehensive 2026-08-25 deprecation retrospective explaining why this heuristic scoring approach was superseded by ADR-080's evidence-based default inheritance model enforced via check_model_pins.py and model_pin_baseline.json.

## Phase — required
cross-phase

## Inputs — required
Baseline configurations of 18 agent definitions in ai-agents (.agents/architecture/ADR-002-agent-model-selection-optimization.md:73), Anthropic Claude model specifications and pricing (.agents/architecture/ADR-002-agent-model-selection-optimization.md:210-215), and agent task requirements evaluated across five scoring dimensions (.agents/architecture/ADR-002-agent-model-selection-optimization.md:95-102).

## Outputs — required
Model assignment matrix (.agents/architecture/ADR-002-agent-model-selection-optimization.md:105-146), updated frontmatter model pins in 9 agent definition files (.agents/architecture/ADR-002-agent-model-selection-optimization.md:193-203), and agent model evaluation framework (.agents/architecture/ADR-002-agent-model-selection-optimization.md:95-111).

## Invokes — required
- doc ADR-001 — .agents/architecture/ADR-002-agent-model-selection-optimization.md:207

## Invoked by — required
- agent ADR-003 — .agents/architecture/ADR-003-agent-tool-selection-criteria.md:352
- agent ADR-039 — .agents/architecture/ADR-039-agent-model-cost-optimization.md:276

## Concepts named — required, verbatim
- `ADR-002` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:12 — defined here
- `model selection optimization` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:12 — defined here
- `Reasoning Depth` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:97 — defined here
- `Latency Sensitivity` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:98 — defined here
- `Error Cost` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:99 — defined here
- `Volume` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:100 — defined here
- `Tool Complexity` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:101 — defined here
- `Decision Matrix` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:103 — defined here
- `model pins` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:43 — used here
- `Draining ratchet` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:56 — used here

## Structure
- # ADR-002: Agent Model Selection Optimization — .agents/architecture/ADR-002-agent-model-selection-optimization.md:12
- ## Status — .agents/architecture/ADR-002-agent-model-selection-optimization.md:14
- ### Resolution of the provisional supersession (2026-08-25) — .agents/architecture/ADR-002-agent-model-selection-optimization.md:18
- ### Original notes (2025-12-16 to 2026-01-03), retained — .agents/architecture/ADR-002-agent-model-selection-optimization.md:61
- ## Date — .agents/architecture/ADR-002-agent-model-selection-optimization.md:67
- ## Context — .agents/architecture/ADR-002-agent-model-selection-optimization.md:71
- ### Current Distribution (Before Change) — .agents/architecture/ADR-002-agent-model-selection-optimization.md:79
- ### New Distribution (After Change) — .agents/architecture/ADR-002-agent-model-selection-optimization.md:86
- ## Decision — .agents/architecture/ADR-002-agent-model-selection-optimization.md:93
- ### Decision Matrix Applied — .agents/architecture/ADR-002-agent-model-selection-optimization.md:103
- ### Model Assignment Changes — .agents/architecture/ADR-002-agent-model-selection-optimization.md:112
- ## Rationale — .agents/architecture/ADR-002-agent-model-selection-optimization.md:147
- ### Alternatives Considered — .agents/architecture/ADR-002-agent-model-selection-optimization.md:149
- ### Trade-offs — .agents/architecture/ADR-002-agent-model-selection-optimization.md:157
- ## Consequences — .agents/architecture/ADR-002-agent-model-selection-optimization.md:163
- ### Positive — .agents/architecture/ADR-002-agent-model-selection-optimization.md:165
- ### Negative — .agents/architecture/ADR-002-agent-model-selection-optimization.md:173
- ### Neutral — .agents/architecture/ADR-002-agent-model-selection-optimization.md:179
- ## Implementation Notes — .agents/architecture/ADR-002-agent-model-selection-optimization.md:184
- ### Files Changed — .agents/architecture/ADR-002-agent-model-selection-optimization.md:191
- ## Related Decisions — .agents/architecture/ADR-002-agent-model-selection-optimization.md:205
- ## References — .agents/architecture/ADR-002-agent-model-selection-optimization.md:209
- ## Agent-Specific Fields — .agents/architecture/ADR-002-agent-model-selection-optimization.md:218
- ### Agent Names — .agents/architecture/ADR-002-agent-model-selection-optimization.md:220
- ### Overlap Analysis — .agents/architecture/ADR-002-agent-model-selection-optimization.md:224
- ### Entry Criteria — .agents/architecture/ADR-002-agent-model-selection-optimization.md:228

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- doc-drift · .agents/architecture/ADR-002-agent-model-selection-optimization.md:35 Stated model allocations and agent roster (18 agents) drifted from the live codebase (33 agents; critic and qa restored to opus).
- missing-path · .agents/architecture/ADR-002-agent-model-selection-optimization.md:198 Staged path "src/claude/planner.md" does not exist in repository (renamed to milestone-planner.md).
- missing-path · .agents/architecture/ADR-002-agent-model-selection-optimization.md:202 Staged path "src/claude/task-generator.md" does not exist in repository.

## Observations
Contains an exemplary architectural resolution header (lines 18-60) documenting the failure of provisional ADR-039 to validate and its reversion, while explicitly declining to restore ADR-002 as accepted because its heuristic scoring methodology was superseded by ADR-080's evidence-based default inheritance model enforced via check_model_pins.py and the draining ratchet in model_pin_baseline.json.

## Context cost
10,216 bytes, ~2,600 tokens.
