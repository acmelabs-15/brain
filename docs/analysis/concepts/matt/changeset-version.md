---
package: matt
name: changeset version
slug: changeset-version
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/sync-plugin-version.mjs, sha256: 1ef892ec79e2f41ffe4c4d051f0e29d70401219499b6a11e717e5db337d78984}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# changeset version

## Definition — verbatim
(used, not defined)

> "Runs as part of `npm run version`, immediately after `changeset version`." — scripts/sync-plugin-version.mjs:3

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/sync-plugin-version.mjs | 3 | used here | References the preceding changeset command executed during package version bumping. |

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
`changeset version` is an external CLI command name from the Changesets toolchain rather than an operational lifecycle concept.
