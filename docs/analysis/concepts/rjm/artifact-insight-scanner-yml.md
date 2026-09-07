---
package: rjm
name: artifact-insight-scanner.yml
slug: artifact-insight-scanner-yml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/ci/artifact_create_issues.py, sha256: fb16852af5a0a38c29c2fbd7d3d1ef2dcd5632c410819b730a2d2ea903c0255f}
  - {path: scripts/ci/artifact_write_summary.py, sha256: 4782b55fb2b1693c5333d67458add91c9e635e05334eb17e88f2fcae05b7bd62}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# artifact-insight-scanner.yml

## Definition — verbatim
(used, not defined)

> "artifact-insight-scanner.yml (ADR-006)." — scripts/ci/artifact_create_issues.py:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/ci/artifact_create_issues.py | 5 | used here | Workflow file citing issue creation step replacement. |
| scripts/ci/artifact_write_summary.py | 5 | used here | Workflow file citing summary generation step replacement. |

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
`artifact-insight-scanner.yml` is a GitHub Actions workflow filename rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
