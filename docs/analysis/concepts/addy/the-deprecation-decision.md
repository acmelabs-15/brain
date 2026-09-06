---
package: addy
name: The Deprecation Decision
slug: the-deprecation-decision
kind: gate
package_phase: addy:Ship
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: skills/deprecation-and-migration/SKILL.md, sha256: 92d9846321fab624eded7ac55d19a7738cfd2321c2be2e35eb153dcacf7359de}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# The Deprecation Decision

## Definition — verbatim
> "## The Deprecation Decision" — skills/deprecation-and-migration/SKILL.md:37
> "Before deprecating anything, answer these questions:" — skills/deprecation-and-migration/SKILL.md:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 37 | defines | Section heading and 5-question evaluation framework preceding any deprecation. |

## Consumes
Candidate system, usage metrics, consumer count, replacement viability, and ongoing maintenance costs.

## Produces
A justified decision to maintain, sunset, or proceed with deprecating and migrating a system.

## When applied
Applied prior to announcing deprecation or initiating sunsetting of any codebase component.

## Sub-concepts
none

## Part of
deprecation-and-migration

## Implementation status
clean

## Design notes
A 5-question decision gate that quantifies whether a system provides unique value, how many consumers depend on it, whether a production-ready replacement exists, what consumer migration will cost, and what ongoing maintenance of the status quo costs. It prevents premature deprecations without working replacements.
