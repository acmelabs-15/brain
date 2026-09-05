---
package: rjm
path: .agents/governance/agent-design-principles.md
type: agent
bytes: 12575
unit: inv-rjm-54
in_scope_via: .agents/governance/golden-principles.md
aliases: []
memo_inputs:
  - {path: .agents/governance/agent-design-principles.md, sha256: fd7551ca1f0c6ae2760203c6a390b6528ec36dffe80e7f5238facc7c69ee2ce0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3eead650a20bd7770bdfd54816e4316b9d5b017ed335d4138d8dd708f0c3eb23
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-05 quote-check+coverage
---

# .agents/governance/agent-design-principles.md

## Purpose — required, verbatim
> "These principles guide the design, implementation, and evolution of agents in the multi-agent system. All agents must adhere to these principles, and new agent proposals are evaluated against them." — .agents/governance/agent-design-principles.md:5

## Design intent — required
Foundational governance specification defining the architectural principles for agent creation, evaluation, and lifecycle evolution in the `rjm` system. Crucially documents the core operating assumption that instructions assume a top-tier frontier model whose primary failure mode is overthinking (meaning guardrails are designed to constrain capability down, not scaffold weaker models up), while documenting behavioral symptoms of executing below the calibrated capability floor. Formulates six mandatory design principles: Non-Overlapping Specialization (maximum 20% capability overlap), Clear Entry Criteria (<30 second user invocation decision), Explicit Limitations (documenting what the agent cannot do across technical, scope, dependency, and output axes), Composability (standard input/output and handoffs for multi-agent chains), Verifiable Success (quantifiable metrics and baselines), and Consistent Interface (uniform Markdown task input and report output contracts).

## Phase — required
cross-phase

## Inputs — required
- Literature on frontier model reasoning and overthinking (arXiv 2510.22251, arXiv 2412.21187, LLMThinkBench ACL 2026)
- Model-pin governance policy defined in ADR-080 (`.agents/architecture/ADR-080-model-pin-justification-policy.md`)
- New agent proposals submitted via architectural decision records (ADRs)
- Agent capability matrices and interview responses from `.agents/governance/agent-interview-protocol.md`

## Outputs — required
- Six normative agent design principles governing all agents across the system
- Overlap calculation formula (`[M/N * 100]%` with 20% ceiling)
- Standardized Input Contract specification (`## Task for [Agent Name]`)
- Standardized Output Contract specification (`## [Agent Name] Report: [Topic]`)
- Principle compliance matrix and enforcement/remediation guidelines

## Invokes — required
- template ADR-TEMPLATE.md — .agents/governance/agent-design-principles.md:339
- agent ADR-080 — .agents/governance/agent-design-principles.md:340
- agent steering-committee-charter.md — .agents/governance/agent-design-principles.md:341
- agent agent-consolidation-process.md — .agents/governance/agent-design-principles.md:342
- agent agent-interview-protocol.md — .agents/governance/agent-design-principles.md:343

## Invoked by — required
- agent .agents/governance/golden-principles.md — .agents/governance/golden-principles.md:46
- agent .agents/governance/steering-committee-charter.md — .agents/governance/steering-committee-charter.md:118
- agent .agents/governance/consistency-protocol.md — .agents/governance/consistency-protocol.md:237
- agent .agents/governance/naming-conventions.md — .agents/governance/naming-conventions.md:296

## Concepts named — required, verbatim
- `Frontier-Model Execution` — .agents/governance/agent-design-principles.md:9 — defined here
- `constrain that capability down` — .agents/governance/agent-design-principles.md:13 — defined here
- `scaffold a weaker model up` — .agents/governance/agent-design-principles.md:13 — defined here
- `calibrated envelope` — .agents/governance/agent-design-principles.md:13 — defined here
- `Prompting Inversion` — .agents/governance/agent-design-principles.md:25 — used here
- `model-pin policy` — .agents/governance/agent-design-principles.md:28 — used here
- `calibrated floor` — .agents/governance/agent-design-principles.md:37 — defined here
- `Non-Overlapping Specialization` — .agents/governance/agent-design-principles.md:53 — defined here
- `Clear Entry Criteria` — .agents/governance/agent-design-principles.md:91 — defined here
- `Explicit Limitations` — .agents/governance/agent-design-principles.md:129 — defined here
- `Composability` — .agents/governance/agent-design-principles.md:169 — defined here
- `Verifiable Success` — .agents/governance/agent-design-principles.md:209 — defined here
- `Consistent Interface` — .agents/governance/agent-design-principles.md:248 — defined here
- `Input Contract` — .agents/governance/agent-design-principles.md:259 — defined here
- `Output Contract` — .agents/governance/agent-design-principles.md:271 — defined here
- `Principle Compliance Matrix` — .agents/governance/agent-design-principles.md:294 — defined here

## Structure
- # Agent Design Principles
- ## Purpose
- ## Operating Assumption: Frontier-Model Execution
- ### Why the direction matters
- ### Evidence
- ### Relationship to the model-pin policy
- ### How to Verify
- ### Noticing You Are Below the Calibrated Floor
- ## Principle 1: Non-Overlapping Specialization
- ### Requirements
- ### How to Verify
- ### Example: Good
- ### Example: Bad
- ## Principle 2: Clear Entry Criteria
- ### Requirements
- ### How to Verify
- ### Example: Good
- ### Example: Bad
- ## Principle 3: Explicit Limitations
- ### Requirements
- ### How to Verify
- ### Example: Good
- ### Example: Bad
- ## Principle 4: Composability
- ### Requirements
- ### How to Verify
- ### Example: Good
- ### Example: Bad
- ## Principle 5: Verifiable Success
- ### Requirements
- ### How to Verify
- ### Example: Good
- ### Example: Bad
- ## Principle 6: Consistent Interface
- ### Requirements
- ### Input Contract
- ### Output Contract
- ### How to Verify
- ## Principle Compliance Matrix
- ## Enforcement
- ### New Agent Proposals
- ### Existing Agents
- ### Violations
- ## Related Documents

## Scripts — required if type is script or the skill ships scripts
none

## Defects — required
- other · .agents/governance/agent-design-principles.md:297-302 · Principle Compliance Matrix table is an unpopulated placeholder with blank checkboxes for all agents.
- other · .agents/governance/agent-design-principles.md:41 · Capability floor detection is documented as docs-only without runtime detection or automated enforcement mechanism.

## Observations
- Documents a critical design asymmetry: constraining a frontier model down costs a small edit (pruning over-thinking), whereas scaffolding a weaker model up requires adding decomposition, worked examples, and defensive checks.
- Identifies three observable behavioral symptoms of operating below the calibrated capability floor: instructions followed too literally, over-thinking on simple tasks, and degraded multi-step reasoning.
- Sets a strict, quantitative overlap threshold: any agent pairing with greater than 20% capability overlap must undergo consolidation review.

## Context cost
12575 bytes, 350 lines, ~3150 tokens.
