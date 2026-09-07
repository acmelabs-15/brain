---
package: rjm
name: The Solved/Unsolved Framework
slug: the-solved-unsolved-framework
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

# The Solved/Unsolved Framework

## Definition — verbatim
(used, not defined)

> "## The Solved/Unsolved Framework" — .agents/governance/SKILL-CREATION-CRITERIA.md:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/governance/SKILL-CREATION-CRITERIA.md | 11 | defined here | Section introducing the framework that partitions engineering problems into deterministic tasks for skills versus judgment tasks for LLMs. |

## Consumes
Candidate engineering problems, recurring failure modes, and task requirements.

## Produces
Categorization of problems as solved (suitable for skills) or unsolved (suitable for direct LLM handling).

## When applied
Applied during skill triage and design to decide whether a problem warrants creating a dedicated skill.

## Sub-concepts
solved-problems, unsolved-problems

## Part of
skill-creation-criteria

## Implementation status
defects: doc-drift

## Design notes
A decision-making pattern in rjm that distinguishes problems with repeatable, deterministic procedures from problems requiring contextual judgment. Solved problems with verifiable outcomes and procedural failure modes are codified into skills with phase gates, while unsolved problems with subjective criteria are left to direct LLM execution.
