---
package: rjm
name: _require_nonempty_extra_roots
slug: require-nonempty-extra-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _require_nonempty_extra_roots

## Definition — verbatim
(used, not defined)

> "def _require_nonempty_extra_roots(" — scripts/validation/check_skill_md_portability.py:1332

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 1332 | defined here | Validates that required extra scan directories contain at least one scanned markdown file. |

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
`_require_nonempty_extra_roots` is an internal Python validation helper identifier verifying directory non-emptiness rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
