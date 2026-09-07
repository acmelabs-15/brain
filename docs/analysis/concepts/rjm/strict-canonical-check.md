---
package: rjm
name: STRICT_CANONICAL_CHECK
slug: strict-canonical-check
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_canonical_citations.py, sha256: e4e5b8b622488dcc368c7dea8195de353e5b8a3325a9a07da0b9c67bccef3dd5}
  - {path: scripts/validation/checks_spec.py, sha256: bed5c9c7576b044b78beced69a17d00c1294f53b15b5253669813c66a0120c86}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# STRICT_CANONICAL_CHECK

## Definition — verbatim
(used, not defined)

> "output on stdout). Set the environment variable `STRICT_CANONICAL_CHECK=1`" — scripts/validation/check_canonical_citations.py:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_canonical_citations.py | 22 | defined here | Environment variable used to upgrade soft citation warnings into hard process exit failures. |
| scripts/validation/checks_spec.py | 309 | used here | Checked by canonical citation runner to determine whether non-zero exit codes block PR validation. |

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
defects: script-bug, exit-code-mismatch

## Design notes
`STRICT_CANONICAL_CHECK` is an environment variable configuration identifier controlling whether canonical citation checks fail hard or warn softly rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
