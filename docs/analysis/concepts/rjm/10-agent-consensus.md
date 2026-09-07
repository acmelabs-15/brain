---
package: rjm
name: 10-Agent Consensus
slug: 10-agent-consensus
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/archive/planning/PRD-skills-index-registry.md, sha256: 8c7296bd5c209f7cfbe45d6c293c42e9f69f47807850313b34affcec7b5fb1b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# 10-Agent Consensus

## Definition — verbatim
> "**Status**: Approved (10-Agent Consensus)" — .agents/archive/planning/PRD-skills-index-registry.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/archive/planning/PRD-skills-index-registry.md | 5 | defined here | Cited as the approval status and multi-agent review verdict for the Skills Index Registry PRD. |

## Consumes
Architectural proposals, PRDs, and cross-cutting design specifications.

## Produces
Formal multi-agent approval verdicts, unanimous findings, and disagree-and-commit consensus decisions across 10 specialized agent roles.

## When applied
Applied during high-impact architectural decisions and cross-cutting system proposals requiring multi-domain verification.

## Sub-concepts
none

## Part of
orchestrator

## Implementation status
defects: missing-path, internal-contradiction

## Design notes
A high-rigor governance review gate in rjm where ten specialized agent personas (Critic, Analyst, Implementer, QA, Orchestrator, Retrospective, Skillbook, Memory, DevOps, Security) are consulted in parallel to evaluate proposals, uncover blast-radius implications, and establish a unanimous or disagree-and-commit consensus verdict.
