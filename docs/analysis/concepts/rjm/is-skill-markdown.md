---
package: rjm
name: _is_skill_markdown
slug: is-skill-markdown
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _is_skill_markdown

## Definition — verbatim
(used, not defined)

> "def _is_skill_markdown(rel_path: str) -> bool:" — scripts/validation/check_skill_md_portability.py:802

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 802 | defined here | Predicate helper determining if a relative file path represents a markdown file under a plugin skills root. |

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
`_is_skill_markdown` is an internal Python helper function identifier checking file paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
