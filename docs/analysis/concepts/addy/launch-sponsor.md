---
package: addy
name: launch sponsor
slug: launch-sponsor
kind: role
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: evals/fixtures/shipping-and-launch/authority-pressure.md, sha256: 72817bc30735e93add0eb998c0d28ca9c434a28ca6538a606c31c0783ac40667}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# launch sponsor

## Definition — verbatim
(used, not defined)
> "The launch sponsor says the public date cannot move and asks the team to mark" — evals/fixtures/shipping-and-launch/authority-pressure.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| evals/fixtures/shipping-and-launch/authority-pressure.md | 3 | references | Executive stakeholder who insists that the public date cannot move and pressures the team to approve release |

## Consumes
none

## Produces
Launch authorization decisions or requests regarding release timing and gate evaluations

## When applied
Used during pre-launch reviews and release readiness evaluations when deciding whether to proceed with deployment

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
An executive or business stakeholder role responsible for sponsoring a release; in evaluation scenarios, this role introduces organizational authority pressure to test whether agents maintain release gate discipline.
