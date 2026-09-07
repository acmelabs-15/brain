---
package: rjm
name: read_yaml_frontmatter
slug: read-yaml-frontmatter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# read_yaml_frontmatter

## Definition — verbatim
(used, not defined)

> "read_yaml_frontmatter = _load_read_yaml_frontmatter()" — scripts/validation/agent_registry.py:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/agent_registry.py | 61 | used here | Dynamic assignment loading frontmatter extraction function from build utility. |

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
defects: orphan

## Design notes
`read_yaml_frontmatter` is a dynamically loaded utility function reference for parsing YAML frontmatter from agent definition files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
