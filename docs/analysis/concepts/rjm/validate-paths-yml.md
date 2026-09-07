---
package: rjm
name: validate-paths.yml
slug: validate-paths-yml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/AGENTS.md, sha256: 0e2bb069b704651214e2129c6d8b44543bcefe17f3878a3237f16602c4e3cd63}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# validate-paths.yml

## Definition — verbatim
(used, not defined)

> "VP[validate-paths.yml]" — .github/AGENTS.md:31

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/AGENTS.md | 31 | defined here | Diagram node representing the CI validation workflow checking repository path references and invariants. |

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
validate-paths.yml is a GitHub Actions workflow configuration filename identifier validating repository path references rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
