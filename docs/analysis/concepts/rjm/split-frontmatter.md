---
package: rjm
name: _split_frontmatter
slug: split-frontmatter
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: scripts/validation/check_adr_lifecycle.py, sha256: 20aa2406f41d31ba7c7d8bb17271a66eb7e885f5f0588593869fba84920ca738}
  - {path: scripts/validation/check_agent_skill_discriminator.py, sha256: fb835dbd3148f58de0a6befdf83d9365975869f178def8624ab3e2b1832db6ce}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
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
