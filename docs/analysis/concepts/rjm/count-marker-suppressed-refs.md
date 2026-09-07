---
package: rjm
name: count_marker_suppressed_refs
slug: count-marker-suppressed-refs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# count_marker_suppressed_refs

## Definition — verbatim
(used, not defined)

> "def count_marker_suppressed_refs(text: str) -> int:" — scripts/validation/check_skill_md_portability.py:389

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 389 | defined here | Counts upstream path references hidden by a vendor-portability marker to establish a secondary ratchet. |

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
`count_marker_suppressed_refs` is a Python validation function identifier establishing ratchet baselines for suppressed references rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
