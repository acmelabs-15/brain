---
package: rjm
name: resolve_skill_resource
slug: resolve-skill-resource
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# resolve_skill_resource

## Definition — verbatim
(used, not defined)

> "`resolve_skill_resource` (read path). This check stops NEW scripts from" — scripts/validation/check_vendor_portability.py:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_vendor_portability.py | 11 | used here | Path helper function cited in docstring as providing read paths for skill resources. |

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
defects: doc-drift

## Design notes
A Python resource resolver function identifier cited in vendor portability docstrings, classified as `kind: name-only` per D-023.
