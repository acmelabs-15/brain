---
package: rjm
name: _iter_reference_markdown
slug: iter-reference-markdown
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _iter_reference_markdown

## Definition — verbatim
(used, not defined)

> "def _iter_reference_markdown(root_resolved: Path, references_dir: Path) -> list[Path]:" — scripts/validation/check_skill_md_exec_portability.py:181

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_exec_portability.py | 181 | defined here | Traverses references directories and collects markdown files while validating path containment. |

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
defects: other

## Design notes
An internal Python traversal function identifier collecting markdown files in references directories rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
