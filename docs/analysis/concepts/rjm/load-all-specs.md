---
package: rjm
name: load_all_specs
slug: load-all-specs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/traceability/show_traceability_graph.py, sha256: e9b88963e496c97a549a3156d97c00b7aed0f63b8317ba49cb10edf1ccc3b3cb}
  - {path: scripts/traceability/spec_utils.py, sha256: 4df2d5c43d281d37e689de849420f8003706ec909aceb87fc3a594595908db70}
  - {path: scripts/validation/traceability.py, sha256: 40c7c048372c9e5232f2b8e2b4f5e31a1153f88fdde32afb7e069d5b065fd1a3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
