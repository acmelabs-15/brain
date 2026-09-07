---
package: rjm
name: _is_skippable_string_token
slug: is-skippable-string-token
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _is_skippable_string_token

## Definition — verbatim
(used, not defined)

> "def _is_skippable_string_token(token: tokenize.TokenInfo) -> bool:" — scripts/validation/check_skill_portability.py:177

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_portability.py | 177 | defined here | Predicate returning True if a token represents a string or f-string component in prose spans. |

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
defects: doc-drift, orphan

## Design notes
A Python helper function identifier in `check_skill_portability.py`, classified as name-only per D-023.
