---
package: rjm
name: paths.py
slug: paths-py
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_skill_md_portability.py, sha256: 7513c8591114243120396e4bbb8c6f089e5d3b09267fd9480bb254375660b40e}
  - {path: scripts/validation/check_vendor_portability.py, sha256: cecc8477184c3806256222c607ff2a0f50c5395e69f10f61d15b7702354385b9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# paths.py

## Definition — verbatim
(used, not defined)

> "the ``paths.py`` helper resolves, mirroring the script ratchet's exclusion." — scripts/validation/check_skill_md_portability.py:25

## Also called — verbatim
`helper with `resolve_artifact_root` (write path),` — scripts/validation/check_vendor_portability.py:9

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_skill_md_portability.py | 25 | used here | Cited as the helper resolving install-root-relative `.claude/skills/` paths. |
| scripts/validation/check_vendor_portability.py | 9 | used here | Cited as the library module providing path resolution helpers for vendored scripts. |

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
`paths.py` is a Python library script file name providing runtime path resolution rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
