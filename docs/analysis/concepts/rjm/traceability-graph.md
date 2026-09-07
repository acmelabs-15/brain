---
package: rjm
name: traceability graph
slug: traceability-graph
kind: artifact
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/traceability/rename_spec_id.py, sha256: ad4c8bc9523c6c8d9a633d463133c369bab159d2a397db401407bba7caea0581}
  - {path: scripts/traceability/resolve_orphaned_specs.py, sha256: 70e5c9108d85bb891131d1c1a75fd9912788105ae4671119c6462973fd643d63}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
