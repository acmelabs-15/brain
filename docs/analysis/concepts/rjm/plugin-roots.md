---
package: rjm
name: plugin_roots
slug: plugin-roots
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# plugin_roots

## Definition — verbatim
(used, not defined)

> "def plugin_roots(repo_root: Path) -> tuple[str, ...]:" — scripts/validation/check_plugin_frontmatter_self_containment.py:194

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 194 | defined here | Function resolving and validating plugin source directories declared by marketplace manifests. |
| scripts/validation/check_plugin_frontmatter_self_containment.py | 210 | defined here | Module constant storing resolved plugin roots for the repository. |
| scripts/validation/check_skill_md_portability.py | 46 | defined here | Docstring reference to plugin root directories scanned for skill portability compliance. |

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
`plugin_roots` is a Python function identifier and configuration constant resolving plugin roots in validation scripts rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
