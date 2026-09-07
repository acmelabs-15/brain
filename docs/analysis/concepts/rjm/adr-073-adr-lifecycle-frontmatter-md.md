---
package: rjm
name: ADR-073-adr-lifecycle-frontmatter.md
slug: adr-073-adr-lifecycle-frontmatter-md
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# ADR-073-adr-lifecycle-frontmatter.md

## Definition — verbatim
(used, not defined)

> "The schema enforced here is ADR-073 (`ADR-073-adr-lifecycle-frontmatter.md`)," — scripts/validation/check_adr_lifecycle.py:39

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 39 | used here | Cited as the ADR document file defining the authoritative frontmatter schema and lifecycle status enum. |

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
An architectural decision record file name cited as the specification defining ADR frontmatter metadata schemas, classified as `name-only` per D-023 because it is a file name rather than a development lifecycle concept.
