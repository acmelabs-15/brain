---
package: rjm
name: _MIRROR_TOKENS
slug: mirror-tokens
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_canonical_citations.py, sha256: e4e5b8b622488dcc368c7dea8195de353e5b8a3325a9a07da0b9c67bccef3dd5}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# _MIRROR_TOKENS

## Definition — verbatim
(used, not defined)

> "_MIRROR_TOKENS: tuple[str, ...] = (" — scripts/validation/check_canonical_citations.py:50

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_canonical_citations.py | 50 | defined here | Tuple constant defining string tokens that indicate a mirror claim in documentation or comments. |

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
`_MIRROR_TOKENS` is an internal Python tuple constant identifier in `check_canonical_citations.py` listing lexical phrases that trigger mirror assertion checks rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
