---
package: rjm
name: is_placeholder_identity
slug: is-placeholder-identity
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/github_core/placeholder_identity.py, sha256: 6e0246dd64011fdce3eeb1e8094471fecd3e2f8d6855899940acc57fd7447f1c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# is_placeholder_identity

## Definition — verbatim
(used, not defined)

> "def is_placeholder_identity(name: str, email: str) -> bool:" — scripts/github_core/placeholder_identity.py:64

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/github_core/placeholder_identity.py | 64 | defined here | Verification function returning True when a name and email combination matches the placeholder denylist. |

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
Verification helper function checking git identity credentials against denylist constants, classified as name-only per D-023.
