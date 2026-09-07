---
package: rjm
name: _TRUSTED_EVENTS
slug: trusted-events
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/assert_trusted_smoke_context.py, sha256: 0a355565c4c6ba7affa91fe058e64a1dec6c1053f3744814c618994a3bd0796a}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _TRUSTED_EVENTS

## Definition — verbatim
(used, not defined)

> "_TRUSTED_EVENTS = frozenset({\"schedule\", \"workflow_dispatch\"})" — scripts/validation/assert_trusted_smoke_context.py:41

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/assert_trusted_smoke_context.py | 41 | defined here | Constant frozenset defining the GitHub Actions event names authorized for secret-bearing smoke tests. |

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
`_TRUSTED_EVENTS` is a private frozenset constant in `scripts/validation/assert_trusted_smoke_context.py` defining GitHub Actions event triggers permitted to execute authenticated smoke workflows rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
