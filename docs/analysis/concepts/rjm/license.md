---
package: rjm
name: license
slug: license
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
  - {path: .claude/agents/security/references/dependency-risk-scoring.md, sha256: 71b73a602dca1c8e9757c348e746a5f0cb27e8ea23a2a488c4247118b1d8e219}
  - {path: .claude/skills/codebase-documenter/assets/templates/README.template.md, sha256: 2dfe13da1fa4d0635d07f6e73d358c70feca0d843c2166dec5eb9c9fbd8d9758}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# license

## Definition — verbatim
(used, not defined)

> "license: MIT                # Required (SkillForge): SPDX identifier" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:117

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 117 | defined here | Required frontmatter property specifying SPDX license identifiers for skill packaging. |
| .claude/agents/security/references/dependency-risk-scoring.md | 11 | defined here | Evaluation dimension in dependency risk matrix assessing legal risk of dependency licenses. |
| .claude/skills/codebase-documenter/assets/templates/README.template.md | 71 | defined here | Standard documentation section heading linking to project license terms. |

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
`license` is a frontmatter property name, risk scoring dimension, and README section header rather than a distinct software lifecycle concept, classified as `name-only` per D-023.
