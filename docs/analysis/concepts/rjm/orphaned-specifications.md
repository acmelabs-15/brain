---
package: rjm
name: orphaned specifications
slug: orphaned-specifications
kind: pattern
package_phase: rjm:spec
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/traceability/resolve_orphaned_specs.py, sha256: 70e5c9108d85bb891131d1c1a75fd9912788105ae4671119c6462973fd643d63}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# orphaned specifications

## Definition — verbatim
> "Scans the traceability graph to find orphaned specifications:" — scripts/traceability/resolve_orphaned_specs.py:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/resolve_orphaned_specs.py | 4 | used here | Characterizes specifications in the traceability graph lacking required upstream or downstream references. |

## Consumes
Parsed specification collections categorized into requirements, designs, and tasks.

## Produces
Classified lists of orphaned specifications flagged for review, archival, or deletion.

## When applied
Enforced during traceability auditing and lifecycle maintenance checks.

## Sub-concepts
none

## Part of
traceability-graph

## Implementation status
defects: orphan

## Design notes
Orphaned specifications represents the anti-pattern where requirements lack design coverage, designs lack requirements or tasks, or tasks lack design links in rjm's traceability architecture.
