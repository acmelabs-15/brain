---
package: matt
name: updateInternalDependencies
slug: updateinternaldependencies
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/config.json, sha256: 61717b21675ba9d99f0fc363253ead2716895a4c043c779727d8c685d48684e8}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# updateInternalDependencies

## Definition — verbatim
(used, not defined)

> "updateInternalDependencies" — .changeset/config.json:13

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/config.json | 13 | used here | Configuration field setting dependency update version strategy for internal packages to patch releases. |

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
Configuration property in `.changeset/config.json` defining how Changesets bumps internal dependency version ranges during releases, rather than a development lifecycle concept.
