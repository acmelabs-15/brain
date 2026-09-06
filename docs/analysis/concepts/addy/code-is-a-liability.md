---
package: addy
name: code is a liability
slug: code-is-a-liability
kind: pattern
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

# code is a liability

## Definition — verbatim
> "Code is a liability, not an asset. Every line of code has ongoing maintenance cost — bugs to fix, dependencies to update, security patches to apply, and new engineers to onboard." — skills/deprecation-and-migration/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 10 | defines | Stated as the foundational philosophy behind deprecation and migration. |

## Consumes
Legacy codebase, feature proposals, and duplicate implementations.

## Produces
Architectural discipline prioritizing minimal code footprint and aggressive removal of obsolete systems.

## When applied
Applied when evaluating whether to build, maintain, or sunset existing code and dependencies.

## Sub-concepts
none

## Part of
deprecation-and-migration

## Implementation status
clean

## Design notes
A core engineering mindset recognizing that every line of code incurs ongoing maintenance, security, testing, and cognitive liabilities rather than being an intrinsic asset. It justifies proactive deprecation and deletion whenever the same functionality can be achieved with simpler abstractions or fewer lines.
