---
package: matt
name: front matter
slug: front-matter
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

# front matter

## Definition — verbatim
(used, not defined)

> "front matter" — .changeset/fix-yaml-frontmatter-colons.md:5

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .changeset/fix-yaml-frontmatter-colons.md | 5 | used here | Identifies the YAML metadata block in SKILL.md files requiring quoted description fields. |

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
YAML header metadata format used at the top of markdown documents (`SKILL.md`) to declare skill properties, rather than a development lifecycle concept.
