---
package: rjm
name: version
slug: version
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
  - {path: .claude/skills/orphan-ref-validator/scripts/envelope.py, sha256: f51b9de35bb30d74816b925605a9a38d71e0fbe63ce38f9e4bc138ec0f90c1d9}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# version

## Definition — verbatim
(used, not defined)

> "version: X.Y.Z              # Required (SkillForge): semantic versioning" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:115

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 115 | defined here | Required frontmatter property enforcing semantic versioning across skills. |
| .claude/skills/orphan-ref-validator/scripts/envelope.py | 25 | defined here | Constant definition tracking script release version for the output envelope. |

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
`version` is a YAML frontmatter property name and Python constant identifier tracking semantic version strings rather than an autonomous lifecycle stage, classified as `name-only` per D-023.
