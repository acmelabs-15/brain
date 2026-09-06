---
package: matt
name: Version
slug: version
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .github/workflows/release.yml, sha256: 73ce81a83de90d93a63272dae7e1a3ff8d57dc2f8e99424694289dc7174eec46}
  - {path: package.json, sha256: 167010d1c535a085be165835a4cc89e1de2760c2bf3b6e43c6ae045e41d0587b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Version

## Definition — verbatim
(used, not defined)
> "name: Version" — .github/workflows/release.yml:12

## Also called — verbatim
> "\"version\": \"1.2.3\"," — package.json:3

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .github/workflows/release.yml | 12 | defined here | Job name in the GitHub Actions release workflow. |
| package.json | 3 | defined here | Semantic version manifest field for the package. |

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
Job name in `.github/workflows/release.yml` and package version field in `package.json` rather than a lifecycle concept.
