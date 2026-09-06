---
package: addy
name: Battle-tested
slug: battle-tested
kind: pattern
package_phase: none
implementation_in_scope: true
memo_inputs:
  - {path: CONTRIBUTING.md, sha256: 190d4a4a399018f1d7bf0895a953042fe0f285080e37ca45381785f80ba007c7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Battle-tested

## Definition — verbatim
> "- **Battle-tested** — Based on real engineering workflows, not theoretical ideals" — CONTRIBUTING.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| CONTRIBUTING.md | 33 | defines | Third criterion of the Skill Quality Bar, anchoring skills in proven production workflows. |

## Consumes
Production engineering practices, operational history, and real failure modes.

## Produces
Robust workflows that account for real-world constraints and edge cases.

## When applied
When proposing, evaluating, or refining engineering skills for the catalog.

## Sub-concepts
none

## Part of
skill-quality-bar

## Implementation status
clean

## Design notes
"Battle-tested" ensures that skills reflect real-world engineering practices honed across production environments rather than theoretical ideals. This grounds workflows in pragmatism, anticipating actual pitfalls such as legacy code entanglements, flaky networks, and dependency vulnerabilities.
