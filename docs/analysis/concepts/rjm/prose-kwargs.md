---
package: rjm
name: _PROSE_KWARGS
slug: prose-kwargs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_portability.py, sha256: 95cfb8c0749cec5771cc2c74e1a765f1ec706c86d206e90562cb3eeed64efd99}
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _PROSE_KWARGS

## Definition — verbatim
(used, not defined)

> "_PROSE_KWARGS: frozenset[str] = frozenset(" — scripts/validation/check_skill_portability.py:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_portability.py | 115 | defined here | Constant frozenset of CLI argument parser keyword arguments exempt from path linting. |
| scripts/validation/check_vendor_portability.py | 135 | defined here | Constant frozenset of CLI argument parser keyword arguments exempt from path linting. |

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
A module-level constant identifier across portability validators, classified as name-only per D-023.
