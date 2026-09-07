---
package: rjm
name: scan_plugin_roots
slug: scan-plugin-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# scan_plugin_roots

## Definition — verbatim
(used, not defined)

> "def scan_plugin_roots(root: Path) -> dict[str, int]:" — scripts/validation/check_skill_md_portability.py:692

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 692 | defined here | Aggregates upstream path reference counts across all plugin roots and extra scan directories. |

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
`scan_plugin_roots` is a Python function identifier returning reference counts across scanned roots rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
