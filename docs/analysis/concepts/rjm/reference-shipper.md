---
package: rjm
name: reference_shipper
slug: reference-shipper
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# reference_shipper

## Definition — verbatim
(used, not defined)

> "def reference_shipper(repo_root: Path, root: str, file_dir: Path) -> Callable[[str], bool]:" — scripts/validation/check_plugin_frontmatter_self_containment.py:538

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 538 | defined here | Factory function constructing a resolver predicate to test whether path references resolve within shipped plugin content. |

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
`reference_shipper` is a Python validator helper function identifier in `check_plugin_frontmatter_self_containment.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
