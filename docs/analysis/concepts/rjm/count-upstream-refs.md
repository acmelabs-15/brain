---
package: rjm
name: count_upstream_refs
slug: count-upstream-refs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# count_upstream_refs

## Definition — verbatim
(used, not defined)

> "def count_upstream_refs(text: str) -> int:" — scripts/validation/check_skill_md_portability.py:365

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 365 | defined here | Counts upstream-only path references in Markdown prose while stripping fenced code blocks. |
| scripts/validation/check_skill_portability.py | 208 | defined here | Counts upstream-only path references in script source tokens while ignoring comments and docstrings. |

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
`count_upstream_refs` is a Python validation function identifier for counting non-portable upstream path references in source texts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
