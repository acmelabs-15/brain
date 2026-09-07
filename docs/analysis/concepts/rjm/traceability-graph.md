---
package: rjm
name: traceability graph
slug: traceability-graph
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
---

# traceability graph

## Definition — verbatim
> "Safely renames a specification ID across the entire traceability graph," — scripts/traceability/rename_spec_id.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/rename_spec_id.py | 4 | used here | Describes the specification network across which a specification ID is safely renamed. |
| scripts/traceability/resolve_orphaned_specs.py | 2 | used here | Describes the interconnected graph of specifications scanned to detect orphaned documents. |

## Consumes
Specification files in `.agents/specs/` (`requirements/`, `design/`, `tasks/`) with YAML frontmatter `related` lists.

## Produces
A directed graph data structure capturing forward and backward traceability relationships among specifications.

## When applied
Applied throughout specification management, refactoring, validation, and orphan resolution.

## Sub-concepts
orphaned-specifications

## Part of
traceability

## Implementation status
defects: script-bug, orphan

## Design notes
The traceability graph is the directed relationship network linking requirements, designs, and tasks via frontmatter links in rjm, enabling mechanical verification of specification completeness and orphan detection.
