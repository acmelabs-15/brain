---
package: rjm
name: _NOT_A_REPO_STDERR
slug: not-a-repo-stderr
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/repo.py, sha256: 189b9f3cfa59b9d185a0524db79b323a9c0368a0d5fe3236762b409c66eed47e}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _NOT_A_REPO_STDERR

## Definition — verbatim
(used, not defined)

> "_NOT_A_REPO_STDERR = \"not a git repository\"" — scripts/github_core/repo.py:21

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/repo.py | 21 | defined here | Internal constant defining the English standard error substring used under LC_ALL=C to detect non-repository directories. |

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
An internal constant in `repo.py` defining the English standard error substring used under `LC_ALL=C` to detect when a path is not in a git repository rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
