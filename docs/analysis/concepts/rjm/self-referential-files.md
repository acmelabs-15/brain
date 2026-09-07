---
package: rjm
name: _SELF_REFERENTIAL_FILES
slug: self-referential-files
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/type_ignore_count_ratchet.py, sha256: 2bd382be93600e1610f8c48e5eb6371620f8a846d1f6e271df96e0aea04cee6b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _SELF_REFERENTIAL_FILES

## Definition — verbatim
(used, not defined)

> "_SELF_REFERENTIAL_FILES: frozenset[str] = frozenset(" — scripts/ci/type_ignore_count_ratchet.py:84

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/type_ignore_count_ratchet.py | 84 | defined here | Constant set of file paths excluded from ratchet counting to avoid self-referential pattern noise. |

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
`_SELF_REFERENTIAL_FILES` is a constant set identifier in `type_ignore_count_ratchet.py` specifying excluded script and test paths rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
