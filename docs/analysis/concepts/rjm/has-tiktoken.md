---
package: rjm
name: HAS_TIKTOKEN
slug: has-tiktoken
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# HAS_TIKTOKEN

## Definition — verbatim
(used, not defined)

> "HAS_TIKTOKEN = _HAS_TIKTOKEN" — scripts/update_memory_index_tokens.py:27

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/update_memory_index_tokens.py | 27 | defined here | Boolean flag indicating whether the optional tiktoken dependency is available. |

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
defects: missing-path, other

## Design notes
A boolean feature-flag constant indicating tiktoken library availability rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
