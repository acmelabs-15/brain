---
package: rjm
name: parse_yaml_frontmatter
slug: parse-yaml-frontmatter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# parse_yaml_frontmatter

## Definition — verbatim
(used, not defined)

> "def parse_yaml_frontmatter(" — scripts/traceability/spec_utils.py:54

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/spec_utils.py | 54 | defined here | Defines cached frontmatter parser extracting specification metadata dictionaries. |
| scripts/validation/check_adr_lifecycle.py | 135 | used here | Imported to parse ADR markdown frontmatter during lifecycle validation. |
| scripts/validation/yaml_utils.py | 18 | defined here | Defines reusable YAML frontmatter parser for validation scripts. |

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
defects: script-bug, missing-path

## Design notes
A Python utility function identifier for parsing YAML frontmatter rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
