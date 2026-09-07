---
package: rjm
name: parse_frontmatter_with_content
slug: parse-frontmatter-with-content
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# parse_frontmatter_with_content

## Definition — verbatim
(used, not defined)

> "def parse_frontmatter_with_content(" — scripts/traceability/spec_utils.py:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/spec_utils.py | 117 | defined here | Defines utility function parsing frontmatter while preserving raw markdown content and body. |
| scripts/traceability/update_spec_references.py | 32 | used here | Imported to read existing frontmatter structures prior to modifying spec relationships. |

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
defects: script-bug, missing-path, orphan

## Design notes
A Python helper function identifier for extracting frontmatter and body content rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
