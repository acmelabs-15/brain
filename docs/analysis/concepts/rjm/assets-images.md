---
package: rjm
name: assets/images
slug: assets-images
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/skillforge/.skillignore, sha256: e90aea4eb3a8bf9cb3eb27da6c7645e58b87153d49204bfe5d4c9babb2b501c3}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# assets/images

## Definition — verbatim
(used, not defined)

> "assets/images" — .claude/skills/skillforge/.skillignore:11

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/skillforge/.skillignore | 11 | used here | Path pattern in .skillignore excluding presentation graphics and slide images from packaged skill distributions. |

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
`assets/images` is a file path pattern in `.skillignore` excluding presentation images from skill distribution packages, classified as `kind: name-only` per D-023.
