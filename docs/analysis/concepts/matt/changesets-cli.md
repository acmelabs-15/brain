---
package: matt
name: @changesets/cli
slug: changesets-cli
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/README.md, sha256: 495bd4805f8362853bce99689c1cd75db8c475dfa38930619d2e197d7554db27}
  - {path: package-lock.json, sha256: b89967d44b654ceb7b9fcc7e0d6c3f74fb110bb96eb66c65bac14099c729338d}
  - {path: package.json, sha256: 167010d1c535a085be165835a4cc89e1de2760c2bf3b6e43c6ae045e41d0587b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# @changesets/cli

## Definition — verbatim
(used, not defined)

> "@changesets/cli" — .changeset/README.md:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/README.md | 3 | used here | Explains that the changeset folder is generated and managed by the @changesets/cli tool. |
| package-lock.json | 13 | used here | Records resolved dependency metadata and version lock for @changesets/cli. |
| package.json | 18 | used here | Declares devDependency requirement for @changesets/cli package. |

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
An npm package and CLI build tool dependency used to automate semver version bumps and changelog generation, rather than a development lifecycle concept.
