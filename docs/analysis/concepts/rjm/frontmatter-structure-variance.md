---
package: rjm
name: Frontmatter Structure Variance
slug: frontmatter-structure-variance
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

# Frontmatter Structure Variance

## Definition — verbatim
(used, not defined)

> "**Frontmatter Structure Variance**: Some skills had `version` and `model` in top-level YAML, others in `metadata` object" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:35

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 35 | defined here | Listed in ADR-040 context as a structural inconsistency problem across the original 27 skills. |

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
`Frontmatter Structure Variance` is an architectural problem classification label in ADR-040 rather than an operational lifecycle practice, classified as `name-only` per D-023.
