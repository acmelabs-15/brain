---
package: rjm
name: eligible_tier
slug: eligible-tier
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# eligible_tier

## Definition — verbatim
(used, not defined)

> "def eligible_tier(policy: dict[str, Any]) -> str:" — scripts/skillbook.py:175

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/skillbook.py | 175 | defined here | Evaluates qualification thresholds to determine the highest tier a policy's evidence qualifies it for. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
none

## Implementation status
defects: doc-drift

## Design notes
eligible_tier is a Python function identifier evaluating tier thresholds for policy evidence rather than an SDLC lifecycle concept, classified as name-only per D-023.
