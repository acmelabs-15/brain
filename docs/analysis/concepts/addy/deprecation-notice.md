---
package: addy
name: Deprecation Notice
slug: deprecation-notice
kind: template
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

# Deprecation Notice

## Definition — verbatim
> "## Deprecation Notice: OldService" — skills/deprecation-and-migration/SKILL.md:80

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| skills/deprecation-and-migration/SKILL.md | 80 | defines | Markdown template illustrating status, replacement, removal date, and rationale for a deprecation. |

## Consumes
Deprecated component identifier, effective date, recommended replacement system, removal schedule, and technical rationale.

## Produces
Standardized announcement document or code notice communicating deprecation terms and migration instructions to consumers.

## When applied
Applied during Step 2 of the migration process when announcing the sunsetting of a system or API.

## Sub-concepts
none

## Part of
deprecation-and-migration

## Implementation status
clean

## Design notes
A standardized artifact template communicating deprecation status, replacement recommendations, removal timelines, rationale, and migration instructions. Publishing structured notices ensures consumers understand why a change is occurring and how to adapt.
