---
package: rjm
name: _MIRROR_TOKENS
slug: mirror-tokens
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _MIRROR_TOKENS

## Definition — verbatim
(used, not defined)

> "_MIRROR_TOKENS: tuple[str, ...] = (" — scripts/validation/check_canonical_citations.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_canonical_citations.py | 50 | defined here | Tuple constant defining string tokens that indicate a mirror claim in documentation or comments. |

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
`_MIRROR_TOKENS` is an internal Python tuple constant identifier in `check_canonical_citations.py` listing lexical phrases that trigger mirror assertion checks rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
