---
package: rjm
name: DID-NOT-APPLY
slug: did-not-apply
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/mutation_harness_ciperms.py, sha256: 814dca7906ebdabba9e13a5f2d72039965f792b5d6f534877b452e5e40084fba}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# DID-NOT-APPLY

## Definition — verbatim
(used, not defined)

> "DID_NOT_APPLY = \"DID-NOT-APPLY\"" — scripts/ci/mutation_harness_ciperms.py:40

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/mutation_harness_ciperms.py | 40 | defined here | String constant defining the mutation outcome where a mutant patch could not be uniquely applied. |

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
defects: orphan

## Design notes
`DID-NOT-APPLY` is a status constant identifier in `mutation_harness_ciperms.py` indicating failed mutation patch application rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
