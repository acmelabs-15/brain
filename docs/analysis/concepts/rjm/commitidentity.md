---
package: rjm
name: _CommitIdentity
slug: commitidentity
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
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
