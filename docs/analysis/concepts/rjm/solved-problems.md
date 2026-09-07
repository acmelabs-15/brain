---
package: rjm
name: Solved Problems
slug: solved-problems
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

# Solved Problems

## Definition — verbatim
(used, not defined)

> "### Solved Problems → Skill" — .agents/governance/SKILL-CREATION-CRITERIA.md:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-CREATION-CRITERIA.md | 13 | defined here | Section detailing characteristics and examples of repeatable engineering problems suited for dedicated skills. |

## Consumes
Documented procedures, verifiable outcomes, and recurring operational tasks.

## Produces
Deterministic skill architectures and automated validation workflows.

## When applied
When identifying candidate tasks whose failure modes stem from skipped steps or manual improvisation.

## Sub-concepts
none

## Part of
the-solved-unsolved-framework

## Implementation status
defects: doc-drift

## Design notes
A problem classification within the Solved/Unsolved Framework representing tasks that have known, repeatable procedures and programmatic verification. In rjm, solved problems are codified into dedicated skills to eliminate manual error and guarantee deterministic lifecycle execution.
