---
package: rjm
name: validate-plugin-version-bump.yml
slug: validate-plugin-version-bump-yml
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

# validate-plugin-version-bump.yml

## Definition — verbatim
(used, not defined)

> "VPV[validate-plugin-version-bump.yml]" — .github/AGENTS.md:33

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/AGENTS.md | 33 | defined here | Diagram node representing the CI validation workflow enforcing plugin version bumps on changes. |

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
validate-plugin-version-bump.yml is a GitHub Actions workflow configuration filename identifier verifying plugin version increments rather than an SDLC lifecycle concept, classified as kind: name-only per D-023.
