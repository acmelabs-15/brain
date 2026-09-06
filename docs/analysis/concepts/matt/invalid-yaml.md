---
package: matt
name: invalid YAML
slug: invalid-yaml
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .changeset/fix-yaml-frontmatter-colons.md, sha256: fb4975a991e85ec802044c96350038db3343be5a604b38a9b5f323bd56223652}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# invalid YAML

## Definition — verbatim
(used, not defined)

> "invalid YAML" — .changeset/fix-yaml-frontmatter-colons.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/fix-yaml-frontmatter-colons.md | 5 | used here | Describes the syntax error state caused by unquoted colons in skill frontmatter. |

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
Describes a data serialization syntax error condition where YAML parsers reject unquoted colons in frontmatter strings, rather than a development lifecycle concept.
