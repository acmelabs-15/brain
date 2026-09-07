---
package: rjm
name: _split_frontmatter
slug: split-frontmatter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
---

# _split_frontmatter

## Definition — verbatim
(used, not defined)

> "def _split_frontmatter(text: str) -> tuple[str | None, str]:" — scripts/validation/check_adr_lifecycle.py:216

## Also called — verbatim
`split_frontmatter` — scripts/validation/check_agent_skill_discriminator.py:196

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| scripts/validation/check_adr_lifecycle.py | 18 | defined here | Cited in header docstring comment explaining frontmatter divergence documentation requirements. |
| scripts/validation/check_adr_lifecycle.py | 216 | defined here | Defined as helper function splitting YAML frontmatter and body while retaining body content for downstream validation. |
| scripts/validation/check_agent_skill_discriminator.py | 196 | defined here | Defined as frontmatter splitting function for parsing agent manifest files. |

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
defects: missing-path, other

## Design notes
A Python helper function identifier used across validation scripts to split YAML frontmatter from markdown body text, classified as `name-only` per D-023 because it is a code utility identifier rather than a development lifecycle concept.
