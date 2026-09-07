---
package: rjm
name: skill_frontmatter.py
slug: skill-frontmatter-py
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

# skill_frontmatter.py

## Definition — verbatim
(used, not defined)

> "(see Field Status table in Section 2 and the validator at `scripts/validation/skill_frontmatter.py`)." — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:268

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 268 | used here | Cited in ADR-040 amendment notes as the validator script enforcing top-level frontmatter schema properties. |

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
defects: cross-file-contradiction, doc-drift, exit-code-mismatch

## Design notes
`skill_frontmatter.py` is a Python validation script filename rather than an autonomous software lifecycle concept, classified as `name-only` per D-023.
