---
package: rjm
name: load_allowlist
slug: load-allowlist
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# load_allowlist

## Definition — verbatim
(used, not defined)

> "def load_allowlist(path: Path) -> set[str]:" — scripts/validation/stale_script_refs.py:90

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_links.py | 98 | used here | Reused import described as a comment-stripping line reader returning normalized strings. |
| scripts/validation/stale_script_refs.py | 90 | defined here | Defined as a utility function loading allowlisted files or references from disk into a set. |

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
defects: missing-path, doc-drift

## Design notes
`load_allowlist` is a Python utility function identifier for parsing comment-stripped allowlist entries from disk rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
