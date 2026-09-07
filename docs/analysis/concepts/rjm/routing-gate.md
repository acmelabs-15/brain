---
package: rjm
name: Routing gate
slug: routing-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_shipped_skill_routes.py, sha256: bafff39d3de4725ac44e0ec799ac0b66e8dd4c701136ab47edf20adcf007b9c2}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# Routing gate

## Definition — verbatim
> "Routing gate: a plugin root must contain every skill its tables route to." — scripts/validation/check_shipped_skill_routes.py:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_shipped_skill_routes.py | 14 | defined here | Module docstring defining the routing gate requiring plugin roots to contain every skill their tables route to. |

## Consumes
Plugin packaging roots (.claude, src/*), skill definitions (SKILL.md), and markdown routing tables.

## Produces
Pass verdict confirming route resolution, or failure report detailing unresolved or malformed skill routes.

## When applied
During plugin packaging validation and CI checks before shipping multi-platform agent distributions.

## Sub-concepts
none

## Part of
lifecycle

## Implementation status
clean

## Design notes
A gate enforcing that multi-platform plugin packaging roots contain every skill referenced in their documentation and routing tables, preventing coordination drift when skills are excluded on specific platforms.
