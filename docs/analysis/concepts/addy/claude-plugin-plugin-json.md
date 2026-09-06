---
package: addy
name: .claude-plugin/plugin.json
slug: claude-plugin-plugin-json
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

# .claude-plugin/plugin.json

## Definition — verbatim
(used, not defined)

> ".claude-plugin/plugin.json" — scripts/validate-versions.js:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate-versions-test.js | 11 | used here | Included in manifestPaths array to test Claude plugin manifest version |
| scripts/validate-versions.js | 11 | used here | Included in manifestPaths array to validate Claude plugin manifest version |

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
Configuration manifest file path for Claude Code plugin packaging; not an engineering lifecycle concept.
