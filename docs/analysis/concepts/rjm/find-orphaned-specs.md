---
package: rjm
name: find_orphaned_specs
slug: find-orphaned-specs
kind: name-only
package_phase: none
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

# find_orphaned_specs

## Definition — verbatim
(used, not defined)

> "def find_orphaned_specs(specs: dict[str, Any]) -> dict[str, list[dict[str, Any]]]:" — scripts/traceability/resolve_orphaned_specs.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/traceability/resolve_orphaned_specs.py | 38 | defined here | Core detection function analyzing specification reference relationships to identify orphaned specifications. |

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
defects: orphan

## Design notes
A Python analysis function in `resolve_orphaned_specs.py` detecting unreferenced specifications across tiers, classified as `name-only` per D-023.
