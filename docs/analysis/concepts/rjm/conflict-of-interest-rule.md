---
package: rjm
name: conflict-of-interest rule
slug: conflict-of-interest-rule
kind: pattern
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md, sha256: b88c9ceff7c5d7e9daf9efaf4a8348565d993020bd7c38ecdcdb4e16e97ba18f}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# conflict-of-interest rule

## Definition — verbatim
> "a falsification test scored by the party whose decision it tests is the shape ADR-101 exists to refuse" — .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md:224-225

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-099-remove-commit-limit-bypass-gate.md | 224 | used here | Cites ADR-101's invariant requiring reversal tests to be owned by someone other than the decision author or implementing agent. |

## Consumes
Architectural decision records, falsification tests, and evaluation assignments.

## Produces
Independent evaluation ownership assignments separating decision authors from test evaluators.

## When applied
When designing confirmation and reversal triggers or assigning evaluation responsibility for policy changes.

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Governance pattern originating in ADR-101 establishing that confirmation criteria and falsification tests must never be scored or evaluated by the implementing agent or decision author whose proposal is being tested.
