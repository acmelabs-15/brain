---
package: rjm
name: load_all_specs
slug: load-all-specs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# load_all_specs

## Definition — verbatim
(used, not defined)

> "def load_all_specs(base_path: Path, use_cache: bool = True) -> dict[str, Any]:" — scripts/traceability/spec_utils.py:158

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/show_traceability_graph.py | 28 | used here | Imported to load all specs when building the traceability graph visualization. |
| scripts/traceability/spec_utils.py | 158 | defined here | Function loading and organizing all requirements, designs, and tasks from a base path. |
| scripts/validation/traceability.py | 148 | defined here | Function loading all specification markdown files into an AllSpecs dataclass structure. |

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
A Python utility function loading and parsing all specification markdown files across tiers, classified as `name-only` per D-023.
