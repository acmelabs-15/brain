---
package: rjm
name: Routing gate
slug: routing-gate
kind: gate
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
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
