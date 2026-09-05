---
package: rjm
path: .agents/architecture/ADR-002-agent-model-selection-optimization.md
type: agent
bytes: 10216
unit: inv-rjm-4
in_scope_via: .agents/architecture/README.md
aliases: []
memo_inputs:
  - {path: .agents/architecture/ADR-002-agent-model-selection-optimization.md, sha256: 3f22e591bc1ac0564cd0434b45da7d90789c63330d28a8fdf577575062732055}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/architecture/ADR-002-agent-model-selection-optimization.md

## Purpose — required, verbatim
> "Apply a structured evaluation framework to optimize model selection for each agent based on:" — .agents/architecture/ADR-002-agent-model-selection-optimization.md:95

## Design intent — required
Establishes a 5-dimension scoring rubric (Reasoning Depth, Latency Sensitivity, Error Cost, Volume, Tool Complexity) to allocate Claude model tiers (Opus vs Sonnet) across agent roles, cutting token costs by ~40-50% and improving response times on routine tasks. Deprecated in favor of ADR-080's policy of inheriting harness defaults and tracking necessary model pins in a draining ratchet.

## Phase — required
cross-phase

## Inputs — required
- "All 18 agents in the ai-agents repository were configured to use Claude Opus (16 agents) or Claude Sonnet (2 agents) without systematic evaluation of actual task requirements." — .agents/architecture/ADR-002-agent-model-selection-optimization.md:73
- "Claude Model Capabilities" — .agents/architecture/ADR-002-agent-model-selection-optimization.md:211

## Outputs — required
- "Downgrade from Opus to Sonnet (9 agents):" — .agents/architecture/ADR-002-agent-model-selection-optimization.md:114
- "Retain Opus (7 agents):" — .agents/architecture/ADR-002-agent-model-selection-optimization.md:128
- "Update frontmatter `model:` field in 9 agent files" — .agents/architecture/ADR-002-agent-model-selection-optimization.md:186

## Invokes — required
none

## Invoked by — required
- doc ADR-002 — .agents/architecture/README.md:197

## Concepts named — required, verbatim
`model selection` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:12 — defined here
`Reasoning Depth` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:97 — defined here
`Latency Sensitivity` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:98 — defined here
`Error Cost` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:99 — defined here
`Volume` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:100 — defined here
`Tool Complexity` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:101 — defined here
`Opus` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:73 — used here
`Sonnet` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:73 — used here
`Haiku` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:65 — used here
`model pins` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:43 — used here
`draining ratchet` — .agents/architecture/ADR-002-agent-model-selection-optimization.md:56 — used here

## Structure
# ADR-002: Agent Model Selection Optimization — .agents/architecture/ADR-002-agent-model-selection-optimization.md:12
## Status — .agents/architecture/ADR-002-agent-model-selection-optimization.md:14
### Resolution of the provisional supersession (2026-08-25) — .agents/architecture/ADR-002-agent-model-selection-optimization.md:18
### Original notes (2025-12-16 to 2026-01-03), retained — .agents/architecture/ADR-002-agent-model-selection-optimization.md:61
## Date — .agents/architecture/ADR-002-agent-model-selection-optimization.md:67
## Context — .agents/architecture/ADR-002-agent-model-selection-optimization.md:71
### Current Distribution (Before Change) — .agents/architecture/ADR-002-agent-model-selection-optimization.md:79
### New Distribution (After Change) — .agents/architecture/ADR-002-agent-model-selection-optimization.md:86
## Decision — .agents/architecture/ADR-002-agent-model-selection-optimization.md:93
### Decision Matrix Applied — .agents/architecture/ADR-002-agent-model-selection-optimization.md:103
### Model Assignment Changes — .agents/architecture/ADR-002-agent-model-selection-optimization.md:112
## Rationale — .agents/architecture/ADR-002-agent-model-selection-optimization.md:147
### Alternatives Considered — .agents/architecture/ADR-002-agent-model-selection-optimization.md:149
### Trade-offs — .agents/architecture/ADR-002-agent-model-selection-optimization.md:157
## Consequences — .agents/architecture/ADR-002-agent-model-selection-optimization.md:163
### Positive — .agents/architecture/ADR-002-agent-model-selection-optimization.md:165
### Negative — .agents/architecture/ADR-002-agent-model-selection-optimization.md:173
### Neutral — .agents/architecture/ADR-002-agent-model-selection-optimization.md:179
## Implementation Notes — .agents/architecture/ADR-002-agent-model-selection-optimization.md:184
### Files Changed — .agents/architecture/ADR-002-agent-model-selection-optimization.md:191
## Related Decisions — .agents/architecture/ADR-002-agent-model-selection-optimization.md:205
## References — .agents/architecture/ADR-002-agent-model-selection-optimization.md:209
## Agent-Specific Fields — .agents/architecture/ADR-002-agent-model-selection-optimization.md:218
### Agent Names — .agents/architecture/ADR-002-agent-model-selection-optimization.md:220
### Overlap Analysis — .agents/architecture/ADR-002-agent-model-selection-optimization.md:224
### Entry Criteria — .agents/architecture/ADR-002-agent-model-selection-optimization.md:228

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- missing-path · .agents/architecture/ADR-002-agent-model-selection-optimization.md:194-202 · Files listed under `src/claude/*.md` do not exist in the repository (agent templates are located at `.claude/agents/*.md`).
- doc-drift · .agents/architecture/ADR-002-agent-model-selection-optimization.md:35-40 · The ADR's own model assignment table contradicts the live codebase (assigns `critic` and `qa` to Sonnet, but both are Opus in the live tree).
- doc-drift · .agents/architecture/ADR-002-agent-model-selection-optimization.md:7, 50-53 · Frontmatter specifies `superseded-by: null`, while Status section explicitly documents that ADR-080 supersedes its method.

## Observations
Carries a detailed resolution section explaining the lifecycle of provisional supersessions in the repository: ADR-039 provisionally attempted to downgrade 7 agents to Haiku/Sonnet but expired unvalidated, yet ADR-002 was not restored to `accepted` because ADR-080 established empirical justification and draining ratchets over subjective rubric scoring.

## Context cost
10216 bytes, approximately 2550 tokens.
