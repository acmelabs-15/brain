---
package: rjm
name: ZERO_SHA_LENGTHS
slug: zero-sha-lengths
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified: 2026-09-08 quote-check+coverage
memo_inputs:
  - {path: scripts/validation/object_id.py, sha256: 4e1321ce4030f2df5927a2d6da55f7ca803a9d2afab00090bee8571aee9b960c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# ZERO_SHA_LENGTHS

## Definition — verbatim
(used, not defined)

> "ZERO_SHA_LENGTHS = (40, 64)" — scripts/validation/object_id.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/object_id.py | 5 | defines | Constant tuple specifying valid hex character lengths for SHA-1 and SHA-256 object IDs. |

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
A module-level constant identifier in `object_id.py`, classified as name-only per D-023.
