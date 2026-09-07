---
package: rjm
name: _require_nonempty_extra_roots
slug: require-nonempty-extra-roots
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

# _require_nonempty_extra_roots

## Definition — verbatim
(used, not defined)

> "def _require_nonempty_extra_roots(" — scripts/validation/check_skill_md_portability.py:1332

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 1332 | defined here | Validates that required extra scan directories contain at least one scanned markdown file. |

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
`_require_nonempty_extra_roots` is an internal Python validation helper identifier verifying directory non-emptiness rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
