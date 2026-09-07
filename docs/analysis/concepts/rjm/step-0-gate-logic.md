---
package: rjm
name: Step 0 gate logic
slug: step-0-gate-logic
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

# Step 0 gate logic

## Definition — verbatim
> "Step 0 gate logic" — .claude/skills/spec-generator/references/spec-step0-gates.md:1

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-step0-gates.md | 1 | defined here | Defines the operational evaluation logic, criteria, and halt triggers for the Step 0 first principles gate. |

## Consumes
Responses to the six Step 0 forcing questions (Demand, Status Quo, Specificity, Wedge, Observation, Future-fit).

## Produces
Pass evaluation outcome or structured `step0-halt` block halting execution prior to Step 1.

## When applied
Evaluated at the onset of `/spec` before entering domain ontology elicitation or requirement drafting.

## Sub-concepts
pass-criteria, aspirational-test, specificity-test, speculative-test, canonical-hedge-phrase-list

## Part of
spec-generator

## Implementation status
defects: missing-path, doc-drift

## Design notes
Defines the gating logic and evaluation rules for Step 0, ensuring proposed features demonstrate authentic demand, concrete requesters, and empirical evidence before committing engineering resources to specification.
