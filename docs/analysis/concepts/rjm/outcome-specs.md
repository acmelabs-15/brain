---
package: rjm
name: Outcome specs
slug: outcome-specs
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/programming-advisor/references/bitter-lesson-llms.md, sha256: d5704127da8f69f150db8fb57ed02da11e400c198eedff21733a4162ada1a7a1}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Outcome specs

## Definition — verbatim
> "| Outcome specs | \"Resolve this issue using our KB, policies, account history\" (not 14-category intent classification) |" — .claude/skills/programming-advisor/references/bitter-lesson-llms.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/programming-advisor/references/bitter-lesson-llms.md | 48 | defined here | First layer in the Mythos-Ready System Architecture table defining tasks by goals and resources rather than procedural decision trees. |

## Consumes
User goals, domain knowledge bases, operational policies, and historical context.

## Produces
Goal-driven specifications defining what outcome to achieve rather than micromanaging how the model must navigate steps.

## When applied
Applied at the requirement specification and task formulation stage of autonomous agent systems.

## Sub-concepts
none

## Part of
mythos-ready-system-architecture

## Implementation status
defects: missing-path

## Design notes
Outcome specs represent a specification paradigm where agent assignments are framed around desired end-states and accessible tools rather than brittle procedural branching trees. By specifying objectives rather than procedural micro-steps, outcome specs allow advancing models to optimize execution paths autonomously.
