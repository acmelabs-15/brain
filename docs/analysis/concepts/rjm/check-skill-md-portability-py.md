---
package: rjm
name: check_skill_md_portability.py
slug: check-skill-md-portability-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# check_skill_md_portability.py

## Definition — verbatim
(used, not defined)

> "Why this exists separately from ``check_skill_md_portability.py``:" — scripts/validation/check_plugin_frontmatter_self_containment.py:15

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/utils/markdown_parser.py | 122 | used here | Cited in comments as the validator whose code-stripping logic relies on visible HTML block tags. |
| scripts/validation/check_plugin_frontmatter_self_containment.py | 15 | used here | Cited in docstring explaining architectural separation between frontmatter and body prose validation. |
| scripts/validation/skill_md_portability_baseline.json | 2 | used here | Named in comment header as the script generating and enforcing the vendor portability baseline. |

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
`check_skill_md_portability.py` is the file name of a python validation gate script checking vendor portability in skill markdown files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
