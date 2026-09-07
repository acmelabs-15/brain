---
package: rjm
name: When Suggesting Improvements
slug: when-suggesting-improvements
kind: checklist
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
verified: 2026-09-07 quote-check+coverage
memo_inputs:
  - {path: .claude/agents/type-design-analyzer.md, sha256: c7df006d7ae08ed703b47924db90819e8eb288d7bef81c9f6386781f8f43b4b3}
  - {path: templates/agents/type-design-analyzer.shared.md, sha256: 45e5c07a21cf4d2d42f18452b07878272598bcc2a5ade37c490d32d85b325074}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# When Suggesting Improvements

## Definition — verbatim
> "**When Suggesting Improvements:**" — .claude/agents/type-design-analyzer.md:119

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/agents/type-design-analyzer.md | 119 | defined here | Defines five pragmatic trade-off criteria reviewers must evaluate before suggesting type modifications. |
| templates/agents/type-design-analyzer.shared.md | 128 | defined here | Establishes the standard improvement criteria checklist across shared agent prompt templates. |

## Consumes
Draft improvement proposals, refactoring ideas, and code review recommendations.

## Produces
Calibrated, actionable feedback that avoids unnecessary complexity, breaking changes, or disproportionate performance penalties.

## When applied
When formulating recommended improvements during type design review.

## Sub-concepts
none

## Part of
type-design-analyzer

## Implementation status
defects: other

## Design notes
When Suggesting Improvements forces reviewers to weigh proposed changes against real-world engineering constraints, including cognitive complexity costs, breaking changes, existing team conventions, and runtime overhead. It ensures that recommendations are pragmatic and actionable rather than proposing theoretically elegant but practically disruptive refactorings.
