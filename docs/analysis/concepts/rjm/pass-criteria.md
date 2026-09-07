---
package: rjm
name: Pass criteria
slug: pass-criteria
kind: checklist
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

# Pass criteria

## Definition — verbatim
> "Pass criteria" — .claude/skills/spec-generator/references/spec-step0-gates.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/spec-generator/references/spec-step0-gates.md | 5 | defined here | Enumerates the five mandatory criteria required for Step 0 evaluation to pass. |

## Consumes
Complete responses to all six Step 0 problem framing questions.

## Produces
Comprehensive gate passing determination or halt trigger assignment (H1 through H5).

## When applied
> "all must be true" — .claude/skills/spec-generator/references/spec-step0-gates.md:5

## Sub-concepts
aspirational-test, specificity-test, speculative-test, canonical-hedge-phrase-list

## Part of
step-0-gate-logic

## Implementation status
defects: missing-path, doc-drift

## Design notes
Defines the five conjuncts that must all evaluate to true for a proposed feature to pass the initial Step 0 problem framing gate without triggering an execution halt.
