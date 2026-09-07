---
package: rjm
name: _StrictLoader
slug: strictloader
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _StrictLoader

## Definition — verbatim
(used, not defined)

> "class _StrictLoader(yaml.SafeLoader):" — scripts/validate_workflows.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 38 | defined here | SafeLoader subclass rejecting duplicate YAML mapping keys instead of silently taking the last value. |
| scripts/validation/check_adr_lifecycle.py | 293 | defined here | SafeLoader subclass preventing duplicate keys in ADR frontmatter mappings from obscuring metadata. |

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
`_StrictLoader` is a Python class identifier subclassing `yaml.SafeLoader` to reject duplicate YAML mapping keys rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
