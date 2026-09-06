---
package: matt
name: ignore
slug: ignore
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

# ignore

## Definition — verbatim
(used, not defined)

> "ignore" — .changeset/config.json:14

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/config.json | 14 | used here | Configuration list specifying package names ignored during Changeset version and publish cycles. |

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
Configuration array property in `.changeset/config.json` used by Changesets to exclude specified monorepo packages from version bumping and releases, rather than a development lifecycle concept.
