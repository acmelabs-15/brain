---
package: rjm
name: /1-plan
slug: 1-plan
kind: phase
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/workflow-commands.md, sha256: 9973a4075e74a995c9fd811732e52457f3e6b26a94da896e3ba9f976c5dcaef0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# /1-plan

## Definition — verbatim
> "| `/1-plan` | `/spec` + `/plan` | Requirements and planning are now separate phases |" — docs/workflow-commands.md:213

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/workflow-commands.md | 213 | defined here | Documented in comparison table as the legacy planning command replaced by distinct /spec and /plan phases. |

## Consumes
Problem statements, issues, or initialized session context.

## Produces
Combined requirements and execution plan.

## When applied
Executed during legacy workflows following initialization to determine both what to build and how to build it.

## Sub-concepts
none

## Part of
lifecycle

## Implementation status
defects: doc-drift

## Design notes
`/1-plan` was the legacy planning phase slash command in rjm that combined requirements definition and task decomposition before PR #1611 decoupled those concerns into distinct `/spec` and `/plan` lifecycle phases.
