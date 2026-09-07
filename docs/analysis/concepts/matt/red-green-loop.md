---
package: matt
name: red → green loop
slug: red-green-loop
kind: technique
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/engineering/tdd/SKILL.md, sha256: cb01f66bebfaa25fa1f88e6b7e769cd9fd9f35b1120b8563749820738814c927}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# red → green loop

## Definition — verbatim
> "TDD is the red → green loop. This skill is the reference that makes that loop produce tests worth keeping: what a good test is, where tests go, the anti-patterns, and the rules of the loop." — skills/engineering/tdd/SKILL.md:8

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/engineering/tdd/SKILL.md | 8 | defined here | Core definition establishing TDD as the disciplined cycle of red before green at pre-agreed seams. |

## Consumes
Pre-agreed testing seams, domain requirements, and failing test cases.

## Produces
Minimal production code passing tests, followed by subsequent vertical slices.

## When applied
Continuously during feature implementation and bug fixing when working test-first.

## Sub-concepts
red-before-green, one-slice-at-a-time

## Part of
tdd

## Implementation status
defects: internal-contradiction (skills/engineering/tdd/SKILL.md:38 triggers on "red-green-refactor" while line 38 explicitly commands "Refactoring is not part of the loop. It belongs to the review stage")

## Design notes
The red → green loop is Matt's strict formulation of TDD, intentionally truncated from the traditional "red-green-refactor". Refactoring is explicitly excised from the implementation loop and relegated to the subsequent `code-review` phase. The loop focuses purely on establishing a failing specification test at a public seam and writing the minimal code necessary to turn it green.
