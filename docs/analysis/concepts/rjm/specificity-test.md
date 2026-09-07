---
package: rjm
name: specificity test
slug: specificity-test
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

# specificity test

## Definition — verbatim
> "Q3 passes the specificity test." — .claude/skills/spec-generator/references/spec-step0-gates.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-step0-gates.md | 10 | defined here | Operational test verifying that Step 0 Q3 names a specific blocked individual, team, or qualified system. |

## Consumes
Response text provided for Step 0 Q3 (Desperate Specificity).

## Produces
Pass determination or triggers halt H4 if the answer contains only generic categories rather than a named individual, team, or uniquely identified system component.

## When applied
> "the answer must satisfy at least one" — .claude/skills/spec-generator/references/spec-step0-gates.md:50

## Sub-concepts
none

## Part of
step-0-gate-logic

## Implementation status
defects: missing-path, doc-drift

## Design notes
Ensures features solve a concrete, urgent problem for an identified party by requiring Step 0 Q3 to name an individual, team, or qualified system component, filtering out vague stakeholder desires.
