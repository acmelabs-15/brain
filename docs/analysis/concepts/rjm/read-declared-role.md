---
package: rjm
name: _read_declared_role
slug: read-declared-role
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/openclaw_bridge.py, sha256: b9d845c0aea4cf402cfd9ebe295726b31136a725ae29cfde89973fcf2dad7052}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _read_declared_role

## Definition — verbatim
(used, not defined)

> "def _read_declared_role(metadata: dict[str, Any]) -> object | None:" — scripts/openclaw_bridge.py:136

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/openclaw_bridge.py | 136 | defined here | Helper function extracting declared role values from either top-level or nested metadata frontmatter structures. |

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
defects: doc-drift, orphan

## Design notes
`_read_declared_role` is a Python helper function identifier supporting dual frontmatter schemas for agent roles rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
