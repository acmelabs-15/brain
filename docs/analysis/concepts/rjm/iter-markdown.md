---
package: rjm
name: iter_markdown
slug: iter-markdown
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# iter_markdown

## Definition — verbatim
(used, not defined)

> "def iter_markdown(root: Path, plugin_roots_: tuple[str, ...] | None = None) -> list[Path]:" — scripts/validation/check_plugin_frontmatter_self_containment.py:615

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_plugin_frontmatter_self_containment.py | 615 | defined here | Helper function yielding sorted tracked or walked markdown files under plugin roots for frontmatter validation. |
| scripts/validation/check_shipped_skill_routes.py | 402 | defined here | Generator function yielding markdown files under a root while pruning nested working copies and caches. |

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
`iter_markdown` is a Python utility function identifier used across validation scripts to discover repository Markdown files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
