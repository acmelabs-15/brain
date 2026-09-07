---
package: rjm
name: is_full_object_id
slug: is-full-object-id
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/scripts/safe_push_pr_branch.py, sha256: dda091d2fa928563a909463214253faad5af59d645c579fbfd63ed13509aff71}
  - {path: scripts/validation/object_id.py, sha256: 4e1321ce4030f2df5927a2d6da55f7ca803a9d2afab00090bee8571aee9b960c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# is_full_object_id

## Definition — verbatim
(used, not defined)

> "def is_full_object_id(value: str) -> bool:" — scripts/validation/object_id.py:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/scripts/safe_push_pr_branch.py | 59 | used here | Dynamic lookup of `is_full_object_id` from validation module to verify git commit SHAs. |
| scripts/validation/object_id.py | 9 | defined here | Validation function returning true when a string is a full 40-character or 64-character hex object id. |

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
A Python validation function identifier (`is_full_object_id`) verifying SHA-1/SHA-256 commit hashes rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
