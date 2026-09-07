---
package: rjm
name: packed-refs
slug: packed-refs
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/maintenance/repair_packed_refs.py, sha256: c0e763bf8c2cc05cf4c726dc8efc6fc169cbc3330fbc39cae78bb5aceb3b6e14}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# packed-refs

## Definition — verbatim
(used, not defined)

> "Repair blank-line corruption in git packed-refs files." — scripts/maintenance/repair_packed_refs.py:2

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/maintenance/repair_packed_refs.py | 2 | used here | Git repository internal storage file for packed references targeted for repair. |

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
packed-refs is a standard Git repository metadata file storing reference mappings rather than an SDLC lifecycle concept, classified as name-only per D-023.
