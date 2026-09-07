---
package: rjm
name: candidate roots
slug: candidate-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# candidate roots

## Definition — verbatim
(used, not defined)

> "Skills that shell out to helper scripts embed a resolver that walks candidate roots until one contains the scripts directory." — scripts/validation/check_skill_resolver_anchoring.py:4-5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_resolver_anchoring.py | 4 | defined here | Describes the sequence of directory roots probed by a script-path resolver to find helper scripts. |

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
defects: orphan

## Design notes
A descriptive phrase in `check_skill_resolver_anchoring.py` describing directory probe targets iterated by script-path resolvers, classified as name-only per D-023.
