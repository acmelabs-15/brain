---
package: rjm
name: Unsolved Problems
slug: unsolved-problems
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/governance/SKILL-CREATION-CRITERIA.md, sha256: 27241f09bb7441e7cf128ddc9721db0c2ce7d3497721cafee4e0871c57f1586a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Unsolved Problems

## Definition — verbatim
(used, not defined)

> "### Unsolved Problems → LLM Direct" — .agents/governance/SKILL-CREATION-CRITERIA.md:25

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-CREATION-CRITERIA.md | 25 | defined here | Section identifying problem characteristics requiring contextual judgment and debate suited for direct LLM handling. |

## Consumes
Open-ended tasks, architectural trade-offs, subjective reviews, and novel bug investigations.

## Produces
Direct LLM interactions and multi-agent debates without skill wrappers.

## When applied
When evaluating candidate tasks where no single correct procedure exists and context dictates the solution.

## Sub-concepts
none

## Part of
the-solved-unsolved-framework

## Implementation status
defects: doc-drift

## Design notes
A problem classification within the Solved/Unsolved Framework representing tasks that require contextual judgment, subjective interpretation, or multi-agent debate. In rjm, unsolved problems are explicitly kept free of skill wrappers to avoid creating brittle, high-maintenance constraints on creative reasoning.
