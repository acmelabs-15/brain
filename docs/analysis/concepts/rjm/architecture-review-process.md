---
package: rjm
name: Architecture Review Process
slug: architecture-review-process
kind: checklist
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: templates/agents/architect.shared.md, sha256: cc34d58497548aa34e8f5d926ac342c35bdccf70cc8a61e9d120d02b7c6900ff}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# Architecture Review Process

## Definition — verbatim
(used, not defined)

> "## Architecture Review Process" — templates/agents/architect.shared.md:672

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| templates/agents/architect.shared.md | 672 | defines | Section heading structuring architectural reviews across pre-planning, plan/analysis, post-implementation, and code organization stages. |

## Consumes
Feature proposals, implementation plans, code pull requests, and new directory structures.

## Produces
Checklist verdicts and review findings assessing risk, technical debt, pattern alignment, and code structural cohesion.

## When applied
Executed across lifecycle stages: pre-planning review, plan/analysis review, post-implementation review, and code organization PR review.

## Sub-concepts
none

## Part of
none

## Implementation status
defects: missing-path

## Design notes
Defines a comprehensive multi-phase review checklist guiding the architect agent through feature assessment, principle verification, technical debt auditing, and structural organization checks.
