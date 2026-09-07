---
package: rjm
name: reflexion memory
slug: reflexion-memory
kind: pattern
package_phase: cross-phase
implementation_in_scope: false
deprecated: false
memo_inputs:
  - {path: .agents/analysis/claude-flow-architecture-analysis.md, sha256: dedfb8e1eb8418c8ffcc60cecc4947e4fe5c913d95f2b49bc81b06edef6aadb5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# reflexion memory

## Definition — verbatim
> "Full reflexion memory with causal reasoning" — .agents/analysis/claude-flow-architecture-analysis.md:94

## Also called — verbatim
> "15. **Reflexion Memory**: Add causal reasoning to learning system" — .agents/analysis/claude-flow-architecture-analysis.md:150

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/analysis/claude-flow-architecture-analysis.md | 18 | defined here | Identified as a core component of neural learning providing causal reasoning over execution history. |

## Consumes
Failed task attempts, error traces, and self-evaluations.

## Produces
Causal reflection entries and corrective strategies indexed for future retrieval.

## When applied
Applied following task failure or suboptimal tool execution to extract causal explanations and prevent recurrence.

## Sub-concepts
none

## Part of
neural-learning

## Implementation status
not-implemented

## Design notes
A reflective memory pattern enabling agents to analyze failures, formulate causal explanations, and persist corrective guidelines across sessions to avoid repeating identified errors.
