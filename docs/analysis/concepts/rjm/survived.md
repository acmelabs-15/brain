---
package: rjm
name: SURVIVED
slug: survived
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

# SURVIVED

## Definition — verbatim
(used, not defined)

> "SURVIVED = \"SURVIVED\"" — scripts/ci/mutation_harness_ciperms.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/mutation_harness_ciperms.py | 39 | defined here | String constant defining the mutation outcome where a mutant passes test execution without being killed. |

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
`SURVIVED` is a constant identifier in `mutation_harness_ciperms.py` denoting an undetected mutation outcome rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
