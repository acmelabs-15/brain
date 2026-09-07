---
package: rjm
name: _CommitIdentity
slug: commitidentity
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_placeholder_identity.py, sha256: b226e1a01102b85939b491881b102f5b978fd226c21b697a0b89c8ea69506383}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _CommitIdentity

## Definition — verbatim
(used, not defined)

> "class _CommitIdentity(NamedTuple):" — scripts/validation/check_placeholder_identity.py:62

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_placeholder_identity.py | 62 | defined here | NamedTuple storing commit sha, author name, author email, committer name, and committer email. |

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
`_CommitIdentity` is a private Python NamedTuple in `check_placeholder_identity.py` storing git commit metadata in memory rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
