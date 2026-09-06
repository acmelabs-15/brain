---
package: addy
name: Frontmatter
slug: frontmatter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: docs/skill-anatomy.md, sha256: 5026d3ade4cec780a6d4c372cc11403ca1014ac369f72791f8c5ebe063519343}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-06 quote-check+coverage
---

# Frontmatter

## Definition — verbatim
(used, not defined)

> "### Frontmatter (Required)" — docs/skill-anatomy.md:22

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| docs/skill-anatomy.md | 22 | defined here | Section heading specifying the required YAML metadata schema (name, description) for skill files. |

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
defects: [doc-drift, internal-contradiction] in docs/skill-anatomy.md

## Design notes
Frontmatter is a file format block header (YAML metadata containing name and description) in SKILL.md files rather than a lifecycle concept.
