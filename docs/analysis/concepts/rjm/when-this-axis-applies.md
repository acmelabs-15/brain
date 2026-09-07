---
package: rjm
name: When This Axis Applies
slug: when-this-axis-applies
kind: name-only
package_phase: rjm:review
implementation_in_scope: true
deprecated: false
memo_inputs:
  - {path: .claude/skills/review/SKILL.md, sha256: cf8e377d27c1ac99b60acb63a0c4bdda2eae139abc38dda591cc9314be5f5dac}
  - {path: .claude/skills/review/references/reliability.md, sha256: 3ea9d7b7e3967f2810174145b849daec4f4aa1d68d7593e84b44b0d3e1d23d9e}
  - {path: .claude/skills/review/references/spec-compliance.md, sha256: 9e50737d1c7146134285d882501c119b417becab5db7e182af64e5c47edc1a7c}
method_sha: b35a07084cd4385d27423211bbcad6af860acbab8221e7e66315f877d3f517c7
template_sha: 3e61be0a9dc1130cfb6ab5843021cbb28fd311e8dbec954b613ae0383a494290
model: Gemini 3.8 Flash
effort: high
verified: 2026-09-07 quote-check+coverage
---

# When This Axis Applies

## Definition — verbatim
(used, not defined)

> "## When This Axis Applies" — .claude/skills/review/references/reliability.md:43

## Also called — verbatim
none

## Where used
| File | Line | Role | How it is used |
|---|---|---|---|
| .claude/skills/review/references/reliability.md | 43 | defined here | Section heading defining integration-point triggers for applying the reliability review axis. |
| .claude/skills/review/references/spec-compliance.md | 45 | defined here | Section heading defining execution triggers and spec-linkage requirements for spec compliance review. |
| .claude/skills/review/SKILL.md | 80 | used here | Directive instructing the reviewer to use each axis prompt's applicability guidance to match change risk. |

## Consumes
none

## Produces
none

## When applied
none

## Sub-concepts
none

## Part of
review

## Implementation status
defects: missing-path, doc-drift (.claude/skills/review/SKILL.md:48); internal-contradiction (.claude/skills/review/references/spec-compliance.md:136); clean in .claude/skills/review/references/reliability.md

## Design notes
`When This Axis Applies` is a recurring section heading across review axis reference prompts specifying trigger conditions for conditional axis execution, classified as `kind: name-only` per D-023.
