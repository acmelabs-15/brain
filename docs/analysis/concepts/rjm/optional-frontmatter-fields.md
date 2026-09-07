---
package: rjm
name: OPTIONAL_FRONTMATTER_FIELDS
slug: optional-frontmatter-fields
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validate_skill_installation.py, sha256: 79da66a839b12bd87c6a6de7f14835f23a19d1c1dd505507adc06d19d563f191}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# OPTIONAL_FRONTMATTER_FIELDS

## Definition — verbatim
(used, not defined)

> "OPTIONAL_FRONTMATTER_FIELDS = (" — scripts/validate_skill_installation.py:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validate_skill_installation.py | 35 | defined here | Constant tuple enumerating permissible optional frontmatter fields in SKILL.md files. |

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
defects: doc-drift

## Design notes
`OPTIONAL_FRONTMATTER_FIELDS` is a configuration constant identifier listing optional frontmatter keys for skill files rather than an SDLC lifecycle concept, classified as `kind: name-only` per D-023.
