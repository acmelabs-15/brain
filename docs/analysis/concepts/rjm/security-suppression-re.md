---
package: rjm
name: SECURITY_SUPPRESSION_RE
slug: security-suppression-re
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

# SECURITY_SUPPRESSION_RE

## Definition — verbatim
(used, not defined)

> "(see the comment above SECURITY_SUPPRESSION_RE in that file)." — scripts/ci/type_ignore_count_ratchet.py:7

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/type_ignore_count_ratchet.py | 7 | used here | Referenced in module docstring explaining that the security suppression regex in git_hook_policy.py excludes type ignores. |

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
`SECURITY_SUPPRESSION_RE` is a regular expression constant identifier in git hook validation policies rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
