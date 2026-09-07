---
package: rjm
name: FINDING_COUNT
slug: finding-count
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/artifact_write_summary.py, sha256: 4782b55fb2b1693c5333d67458add91c9e635e05334eb17e88f2fcae05b7bd62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# FINDING_COUNT

## Definition — verbatim
(used, not defined)

> "  FINDING_COUNT       - number of insights found" — scripts/ci/artifact_write_summary.py:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/artifact_write_summary.py | 9 | used here | Environment variable documented in script docstring specifying the count of insights discovered. |

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
`FINDING_COUNT` is a script configuration environment variable identifier in `artifact_write_summary.py` rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
