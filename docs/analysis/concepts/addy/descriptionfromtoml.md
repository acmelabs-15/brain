---
package: addy
name: descriptionFromToml
slug: descriptionfromtoml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate-commands.js, sha256: c49934f8c78b393ba38da33fb00a625bdd6efe0c164c306582e762328083a080}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# descriptionFromToml

## Definition — verbatim
(used, not defined)
> "function descriptionFromToml(filePath) {" — scripts/validate-commands.js:61

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-commands.js | 61 | defines | Parser function extracting and unescaping the description field from TOML command files. |

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
Internal regex parser function extracting and unescaping description fields from TOML files rather than an independent lifecycle concept.
