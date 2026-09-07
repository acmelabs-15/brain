---
package: rjm
name: aspirational test
slug: aspirational-test
kind: gate
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/spec-generator/references/spec-step0-gates.md, sha256: 4a8aacb665f1475a6d2da319dcafb8c7cba55d6f65149bdefb6d682f7d1a1bb0}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# aspirational test

## Definition — verbatim
> "Q1 passes the aspirational test." — .claude/skills/spec-generator/references/spec-step0-gates.md:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-step0-gates.md | 9 | defined here | Operational test evaluating whether Step 0 Q1 response represents real demand rather than aspiration. |

## Consumes
Response text provided for Step 0 Q1 (Demand Reality).

## Produces
Pass determination or triggers halt H3 if fewer than three specific requesters are named, future tense is used, or generic categories are cited.

## When applied
> "The answer names fewer than three specific requesters" — .claude/skills/spec-generator/references/spec-step0-gates.md:46

## Sub-concepts
none

## Part of
step-0-gate-logic

## Implementation status
defects: missing-path, doc-drift

## Design notes
An operational verification test that blocks features supported only by hypothetical or future-tense demand, requiring at least three named requesters (people, teams, or systems) to prove genuine demand.
