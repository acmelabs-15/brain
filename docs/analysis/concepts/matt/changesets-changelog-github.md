---
package: matt
name: "@changesets/changelog-github"
slug: changesets-changelog-github
kind: name-only
package_phase: cross-phase
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/config.json, sha256: 61717b21675ba9d99f0fc363253ead2716895a4c043c779727d8c685d48684e8}
  - {path: package-lock.json, sha256: b89967d44b654ceb7b9fcc7e0d6c3f74fb110bb96eb66c65bac14099c729338d}
  - {path: package.json, sha256: 167010d1c535a085be165835a4cc89e1de2760c2bf3b6e43c6ae045e41d0587b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# @changesets/changelog-github

## Definition — verbatim
(used, not defined)

> "@changesets/changelog-github" — .changeset/config.json:4

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/config.json | 4 | used here | Configured as the changelog generation package for GitHub releases. |
| package-lock.json | 12 | used here | Listed as a developer dependency in the package lockfile. |
| package.json | 17 | used here | Declared as a developer dependency in package.json. |

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
An npm package dependency providing GitHub-integrated changelog generation for Changesets, representing an external package identifier rather than a development lifecycle concept.
