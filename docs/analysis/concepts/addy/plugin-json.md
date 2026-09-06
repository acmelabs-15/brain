---
package: addy
name: plugin.json
slug: plugin-json
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
verified:
memo_inputs:
  - {path: scripts/validate-versions-test.js, sha256: 04eb5b55f0be0fa9e807b07ce349cd8993939ca80f3144e14176bf3019086390}
  - {path: scripts/validate-versions.js, sha256: 8bee245140e72ee92df25003f50e9eda0ee1e76d0eeeddf09639ea9bfa25158b}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
---

# plugin.json

## Definition — verbatim
(used, not defined)

> "plugin.json" — scripts/validate-versions.js:9

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-versions-test.js | 9 | used here | Included in manifestPaths array to verify manifest version matches latest release tag |
| scripts/validate-versions.js | 9 | used here | Included in manifestPaths array to validate version consistency against git release tag |

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
defects: other

## Design notes
Root plugin manifest configuration file path validated for release version consistency; not an engineering lifecycle concept.
