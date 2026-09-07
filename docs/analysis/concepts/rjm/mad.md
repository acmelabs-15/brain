---
package: rjm
name: Mad
slug: mad
kind: technique
package_phase: rjm:retrospective
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/retrospective/references/frameworks.md, sha256: ba761eac35cb111d07dedfad8c01f4fc47982060c5e72e8a69a4438568fd1cbe}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Mad

## Definition — verbatim
> "Failures that stopped progress" — .claude/skills/retrospective/references/frameworks.md:95

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/retrospective/references/frameworks.md | 95 | defined here | Outcome classification category capturing hard execution failures and blocking events. |

## Consumes
Tool errors, execution timeouts, and blocking dependency failures from Phase 0 evidence.

## Produces
List of blocked events and failure narratives for causal analysis in Phase 1.

## When applied
Applied during Outcome Classification (Mad Sad Glad) in Phase 0 data gathering.

## Sub-concepts
none

## Part of
outcome-classification

## Implementation status
clean

## Design notes
Mad adapts the traditional agile Mad Sad Glad retrospective category into an objective agent failure classification. Rather than representing emotional anger, it denotes hard blocking events—such as timeouts, unhandled exceptions, or missing dependencies—that completely halted execution progress.
