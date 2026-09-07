---
package: rjm
name: name
slug: name
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# name

## Definition — verbatim
(used, not defined)

> "- Only two fields mandatory: `name` (lowercase alphanumeric + hyphens, max 64 chars) and `description` (max 1024 chars, primary trigger mechanism)" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:44

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 44 | defined here | Defined as a mandatory frontmatter property matching directory names with format constraints. |

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
`name` is a YAML frontmatter schema property identifier rather than an independent software lifecycle concept, classified as `name-only` per D-023.
