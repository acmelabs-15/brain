---
package: addy
name: two-speed adoption
slug: two-speed-adoption
kind: pattern
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/adoption-guide.md, sha256: d36695c393ebad379282c090b13f44a7a851ca0ec7c9453883e2fa3307924495}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# two-speed adoption

## Definition — verbatim
> "Goal: two-speed adoption, legacy code stays under the Phase 1–2 regime; **new features get the greenfield treatment**." — docs/adoption-guide.md:96

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/adoption-guide.md | 96 | defines | Brownfield rollout strategy where existing code receives selective safety nets while new features run the complete lifecycle |

## Consumes
Existing legacy codebase and brownfield adoption strategy phases 1-2.

## Produces
Dual development workflow bifurcating legacy maintenance from greenfield lifecycle enforcement.

## When applied
When adopting agent skills in an existing production codebase (Phase 3 of brownfield adoption).

## Sub-concepts
none

## Part of
none

## Implementation status
clean

## Design notes
Two-speed adoption balances safety and velocity during brownfield rollouts, preventing the paralysis of trying to retrofit the full lifecycle onto legacy code before writing new features.
