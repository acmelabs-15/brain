---
package: addy
name: deprecation
slug: deprecation
kind: technique
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

# deprecation

## Definition — verbatim
> "Deprecation is the discipline of removing code that no longer earns its keep, and migration is the process of moving users safely from the old to the new." — skills/deprecation-and-migration/SKILL.md:10

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 10 | defines | Defined alongside migration as the core discipline of removing obsolete code. |

## Consumes
Existing software systems, APIs, or features that no longer provide unique value relative to maintenance overhead.

## Produces
Deprecation notices, migration guides, scheduled removal timelines, and eventual decommissioning of legacy code.

## When applied
Applied when sunsetting features, replacing legacy systems, or consolidating duplicate implementations.

## Sub-concepts
advisory-deprecation, compulsory-deprecation, deprecation-notice

## Part of
deprecation-and-migration

## Implementation status
clean

## Design notes
The structured lifecycle discipline of declaring an existing software component obsolete, communicating timelines to consumers, providing migration tooling, and ultimately removing the code to prevent ongoing maintenance liabilities.
