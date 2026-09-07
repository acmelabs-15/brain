---
package: rjm
name: __post_init__
slug: post-init
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# __post_init__

## Definition — verbatim
(used, not defined)

> "Validate configuration bounds." — scripts/llm_classification/config.py:30

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/llm_classification/config.py | 29 | defined here | Dataclass post-initialization hook validating confidence threshold bounds. |

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
clean

## Design notes
`__post_init__` is a standard Python dataclass lifecycle hook method validating configuration attribute bounds rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
