---
package: rjm
name: _StrictLoader
slug: strictloader
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_workflows.py, sha256: 79f3e393f6cbe540ef6a3d5b2c4399226ed9dde0aa7ef2f5b5cc338ba9ebbb22}
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _StrictLoader

## Definition — verbatim
(used, not defined)

> "class _StrictLoader(yaml.SafeLoader):" — scripts/validate_workflows.py:38

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_workflows.py | 38 | defined here | SafeLoader subclass rejecting duplicate YAML mapping keys instead of silently taking the last value. |
| scripts/validation/check_adr_lifecycle.py | 293 | defined here | SafeLoader subclass preventing duplicate keys in ADR frontmatter mappings from obscuring metadata. |

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
`_StrictLoader` is a Python class identifier subclassing `yaml.SafeLoader` to reject duplicate YAML mapping keys rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
