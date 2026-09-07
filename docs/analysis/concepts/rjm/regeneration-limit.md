---
package: rjm
name: Regeneration limit
slug: regeneration-limit
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md, sha256: 82e2ecb7c8ae53abc174de2e100a947a9d28c0bafb8bcc7fc9861eda5547a846}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Regeneration limit

## Definition — verbatim
> "Maximum 3 iterations before escalation" — .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md:48

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-010-quality-gates-evaluator-optimizer.md | 48 | defines | Mandates a maximum bound of 3 iterations on the evaluator-optimizer loop before escalating. |

## Consumes
Current iteration count of the evaluator-optimizer loop.

## Produces
An escalation trigger when iteration count reaches 3 without achieving an acceptable rubric score.

## When applied
Enforced on each cycle of the evaluator-optimizer loop.

## Sub-concepts
none

## Part of
evaluator-optimizer-loop

## Implementation status
defects: doc-drift

## Design notes
A hard numerical bound capping evaluation-regeneration cycles at 3 iterations to prevent infinite loops, non-converging edits, and uncontrolled token consumption.
