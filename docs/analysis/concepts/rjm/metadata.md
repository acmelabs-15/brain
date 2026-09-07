---
package: rjm
name: metadata
slug: metadata
kind: name-only
package_phase: none
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .agents/architecture/ADR-040-skill-frontmatter-standardization.md, sha256: d88fb7a689fdf3807c1acf3bceb30b2504cf982966d8b28f440ce3b2fe0fcb93}
  - {path: .agents/architecture/ADR-056-skill-output-format-standardization.md, sha256: a71c3a7799d1aa2952609e6dea6236962c0902ec6d5a6b452d303cef3e209c9d}
  - {path: .claude/skills/chaos-experiment/templates/experiment-template.md, sha256: 78330ff18cbd4a561b86cf638bfd91ee3fc83ffa3328d20379fb14fcb3341377}
  - {path: .claude/skills/execution-plans/SKILL.md, sha256: 5fce18066fe388549f310b14e86f36e023853679c1954c76d5b4400fe0c1c472}
  - {path: .claude/skills/work-operating-model/references/entry-contract.md, sha256: 9bfe97c38efab32e56ef728c65d413db8603c60d9e0042d1e4cd6e29871fbab7}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# metadata

## Definition — verbatim
(used, not defined)

> "metadata:                   # Optional (SkillForge): domain-specific fields" — .agents/architecture/ADR-040-skill-frontmatter-standardization.md:120

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .agents/architecture/ADR-040-skill-frontmatter-standardization.md | 120 | defined here | Optional YAML frontmatter block reserved for domain-specific extension properties. |
| .agents/architecture/ADR-056-skill-output-format-standardization.md | 48 | defined here | Standard output envelope field containing execution metrics and context. |
| .claude/skills/chaos-experiment/templates/experiment-template.md | 3 | defined here | Markdown section heading cataloging experiment attributes in tabular format. |
| .claude/skills/execution-plans/SKILL.md | 44 | defined here | Section heading in execution plan templates recording status, dates, and owner. |
| .claude/skills/work-operating-model/references/entry-contract.md | 16 | defined here | Top-level JSON property in operating model contract carrying session metadata. |

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
`metadata` is a YAML frontmatter property, JSON envelope field, and documentation section header across tools and templates rather than a lifecycle phase, classified as `name-only` per D-023.
